// assets/raw (정본) → src/generated/*.ts 생성
// syntax/*  → languageLessons.ts / knowledge/terms → lexiconLessons.ts / knowledge/visual → visualLessons.ts
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const rawDir = path.join(rootDir, 'assets', 'raw');
const outputDir = path.join(rootDir, 'src', 'generated');

/** 레슨 파일명 정렬 = 좌측 네비 순서 (P01, P02, ...) */
async function collectYamlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((entry) => entry.isFile() && /\.ya?ml$/i.test(entry.name))
    .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name))
    .sort((left, right) => left.localeCompare(right, 'en'));
}

async function readYaml(filePath) {
  return parse(await readFile(filePath, 'utf8'));
}

function relPath(filePath) {
  return path.relative(rootDir, filePath).replace(/\\/g, '/');
}

// ---- syntax → languageLessons ----

async function buildLanguageTracks() {
  const files = await collectYamlFiles(path.join(rawDir, 'syntax'));
  /** @type {Map<string, { id: string, label: string, lessons: object[] }>} */
  const trackMap = new Map();

  for (const file of files) {
    const doc = await readYaml(file);
    const trackId = doc.track?.id ?? 'etc';
    if (!trackMap.has(trackId)) {
      trackMap.set(trackId, {
        id: trackId,
        label: doc.track?.label ?? trackId,
        folderName: trackId,
        lessons: [],
      });
    }
    trackMap.get(trackId).lessons.push({
      id: doc.id,
      title: doc.title,
      fileName: path.basename(file),
      sourcePath: relPath(file),
      language: doc.language ?? 'text',
      parts: (doc.parts ?? []).map((part) => ({
        id: part.id,
        title: part.title,
        content: part.typing,
        displayContent: part.display,
      })),
    });
  }

  return [...trackMap.values()].sort((left, right) =>
    left.label.localeCompare(right.label, 'en'),
  );
}

// ---- knowledge/terms → lexiconLessons ----

const TOPIC_LABEL_MAP = {
  dev: '개발 용어',
  web: '웹 UI 용어',
  rest: 'REST',
  sql: 'SQL·DB',
  symbol: '기호·영문',
};
const TOPIC_ORDER = ['dev', 'web', 'rest', 'sql', 'symbol'];

async function buildLexiconTracks() {
  const files = await collectYamlFiles(path.join(rawDir, 'knowledge', 'terms'));
  const trackMap = new Map();

  for (const file of files) {
    const doc = await readYaml(file);
    const topic = doc.topic ?? 'etc';
    if (!trackMap.has(topic)) {
      trackMap.set(topic, {
        id: `terms-${topic}`,
        label: TOPIC_LABEL_MAP[topic] ?? topic,
        folderName: topic,
        lessons: [],
      });
    }
    trackMap.get(topic).lessons.push({
      id: doc.id,
      title: doc.title,
      fileName: path.basename(file),
      sourcePath: relPath(file),
      parts: (doc.terms ?? []).map((term) => ({
        id: term.id,
        title: term.title,
        section: term.section ?? '',
        prompt: term.prompt,
        answer: term.answer,
        displayAnswer: term.answerDisplay ?? term.answer,
        example: term.example ? `예: ${term.example}` : '',
      })),
    });
  }

  return [...trackMap.values()].sort((left, right) => {
    const li = TOPIC_ORDER.indexOf(left.folderName);
    const ri = TOPIC_ORDER.indexOf(right.folderName);
    return (li === -1 ? 99 : li) - (ri === -1 ? 99 : ri);
  });
}

// ---- knowledge/visual → visualLessons ----

const VISUAL_LESSON_LABEL_MAP = {
  'css-grid': 'Grid',
  'css-selector': 'Selector',
};

function toVisualPublicPath(assetPath) {
  // copy-knowledge-assets.mjs 가 assets/raw/knowledge/visual → public/knowledge/reference/visual 로 복사한다
  return `/${String(assetPath).replace(/^assets\/raw\/knowledge\/visual\//, 'knowledge/reference/visual/')}`;
}

async function buildVisualTracks() {
  const visualRoot = path.join(rawDir, 'knowledge', 'visual');
  const files = (await collectYamlFiles(visualRoot)).filter(
    (file) => path.basename(file) === 'meta.yaml',
  );
  const lessonsBySlug = new Map();

  for (const file of files) {
    const meta = await readYaml(file);
    const folderSlug = path
      .relative(visualRoot, path.dirname(file))
      .split(path.sep)[0];
    if (!lessonsBySlug.has(folderSlug)) {
      lessonsBySlug.set(folderSlug, []);
    }

    const codeUnits = (meta.typingUnits ?? []).filter(
      (unit) => unit.kind === 'code-snippet',
    );
    const codeContents = codeUnits
      .map((unit) => String(unit.content ?? '').trim())
      .filter(Boolean);
    const caption = meta.caption?.ko ?? '';
    const content = codeContents.length > 0 ? codeContents.join('\n') : caption;

    lessonsBySlug.get(folderSlug).push({
      slug: meta.slug ?? path.basename(path.dirname(file)),
      part: {
        id: meta.id,
        title: meta.title?.ko ?? meta.slug ?? '섹션',
        content,
        displayContent: content,
        language: codeUnits[0]?.language ?? (codeContents.length > 0 ? 'css' : 'text'),
        imagePath: meta.images?.[0] ? toVisualPublicPath(meta.images[0].path) : '',
        caption,
        explanation: meta.explanation?.ko ?? '',
        displayCaptions: (meta.typingUnits ?? [])
          .filter((unit) => unit.kind === 'caption')
          .map((unit) => String(unit.content ?? '').trim())
          .filter(Boolean),
      },
    });
  }

  const lessons = [...lessonsBySlug.entries()]
    .sort(([left], [right]) => left.localeCompare(right, 'en'))
    .map(([slug, sections]) => ({
      id: `visual-${slug}`,
      title: VISUAL_LESSON_LABEL_MAP[slug] ?? slug,
      slug,
      sourcePath: `assets/raw/knowledge/visual/${slug}`,
      parts: sections
        .sort((left, right) => left.slug.localeCompare(right.slug, 'en'))
        .map((section) => section.part),
    }));

  return [{ id: 'visual-css', label: 'CSS', folderName: 'css', lessons }];
}

// ---- 출력 ----

async function writeGenerated(fileName, typeName, importPath, varName, data) {
  const content = `import type { ${typeName} } from '../data/${importPath}';

export const ${varName}: ${typeName}[] = ${JSON.stringify(data, null, 2)} as ${typeName}[];
`;
  await writeFile(path.join(outputDir, fileName), content, 'utf8');
  console.log(`생성 완료: src/generated/${fileName}`);
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  const [language, lexicon, visual] = await Promise.all([
    buildLanguageTracks(),
    buildLexiconTracks(),
    buildVisualTracks(),
  ]);
  await writeGenerated('languageLessons.ts', 'LanguageTrack', 'languageLessonTypes', 'languageTracks', language);
  await writeGenerated('lexiconLessons.ts', 'LexiconTrack', 'lexiconLessonTypes', 'lexiconTracks', lexicon);
  await writeGenerated('visualLessons.ts', 'VisualTrack', 'visualLessonTypes', 'visualTracks', visual);

  const partCount = language.reduce((acc, t) => acc + t.lessons.reduce((a, l) => a + l.parts.length, 0), 0);
  const termCount = lexicon.reduce((acc, t) => acc + t.lessons.reduce((a, l) => a + l.parts.length, 0), 0);
  console.log(`syntax ${language.length}트랙 ${partCount}파트 / terms ${lexicon.length}트랙 ${termCount}카드 / visual ${visual[0].lessons.length}레슨`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
