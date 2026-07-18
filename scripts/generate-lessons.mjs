// assets/raw (정본) → src/generated/*.ts 생성
// syntax/* → languageLessons.ts
// knowledge/terms → lexiconLessons.ts
// knowledge/visual → visualLessons.ts
// knowledge/notes → noteLessons.ts
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

// ---- knowledge/notes → noteLessons ----

const NOTE_TOPIC_LABEL_MAP = {
  architecture: '아키텍처',
  frontend: '프론트엔드',
  web: '웹 UI',
  regex: '정규식',
  rest: 'REST',
  http: 'HTTP',
  typescript: 'TypeScript',
  windows: 'Windows',
};
const NOTE_TOPIC_ORDER = [
  'architecture',
  'frontend',
  'web',
  'rest',
  'http',
  'regex',
  'typescript',
  'windows',
];

function trimText(value) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .trim();
}

function sectionId(lessonId, title, index) {
  const slug = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/gi, '-')
    .replace(/^-|-$/g, '');
  return `${lessonId}__${slug || `s${index + 1}`}`;
}

function pushProse(blocks, text) {
  const value = trimText(text);
  if (value) blocks.push({ type: 'prose', text: value });
}

function pushPre(blocks, text) {
  const value = trimText(text);
  if (value) blocks.push({ type: 'pre', text: value });
}

function pushList(blocks, items) {
  const cleaned = (items ?? []).map((item) => String(item).trim()).filter(Boolean);
  if (cleaned.length) blocks.push({ type: 'list', items: cleaned });
}

function pushKv(blocks, rows) {
  const cleaned = (rows ?? [])
    .map((row) => ({
      key: String(row.key ?? row.name ?? row.expression ?? '').trim(),
      value: String(row.value ?? row.role ?? row.description ?? '').trim(),
    }))
    .filter((row) => row.key || row.value);
  if (cleaned.length) blocks.push({ type: 'kv', rows: cleaned });
}

function pushTable(blocks, headers, rows) {
  const cleanHeaders = (headers ?? []).map((h) => String(h).trim());
  const cleanRows = (rows ?? [])
    .map((row) => row.map((cell) => String(cell ?? '').trim()))
    .filter((row) => row.some(Boolean));
  if (cleanHeaders.length && cleanRows.length) {
    blocks.push({ type: 'table', headers: cleanHeaders, rows: cleanRows });
  }
}

function pushHeading(blocks, text) {
  const value = trimText(text);
  if (value) blocks.push({ type: 'heading', text: value });
}

/** 마크다운 body → 섹션(파트) 배열 */
function sectionsFromMarkdownBody(lessonId, title, body) {
  const text = trimText(body);
  if (!text) {
    return [{ id: sectionId(lessonId, title, 0), title, blocks: [] }];
  }

  const chunks = [];
  const fenceRe = /```([\w-]*)\n([\s\S]*?)```/g;
  let last = 0;
  let match;
  while ((match = fenceRe.exec(text)) !== null) {
    if (match.index > last) {
      chunks.push({ kind: 'md', text: text.slice(last, match.index) });
    }
    chunks.push({ kind: 'pre', text: match[2] });
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    chunks.push({ kind: 'md', text: text.slice(last) });
  }

  /** @type {{ title: string, blocks: object[] }[]} */
  const sections = [{ title, blocks: [] }];

  function current() {
    return sections[sections.length - 1];
  }

  function appendMarkdown(md) {
    const lines = md.replace(/\r\n/g, '\n').split('\n');
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      const heading = line.match(/^##\s+(.+)$/);
      if (heading) {
        sections.push({ title: heading[1].trim(), blocks: [] });
        i += 1;
        continue;
      }
      if (/^\|.+\|$/.test(line.trim()) && i + 1 < lines.length && /^\|[\s:|-]+\|$/.test(lines[i + 1].trim())) {
        const headers = line
          .trim()
          .slice(1, -1)
          .split('|')
          .map((cell) => cell.trim());
        i += 2;
        const rows = [];
        while (i < lines.length && /^\|.+\|$/.test(lines[i].trim())) {
          rows.push(
            lines[i]
              .trim()
              .slice(1, -1)
              .split('|')
              .map((cell) => cell.trim()),
          );
          i += 1;
        }
        pushTable(current().blocks, headers, rows);
        continue;
      }
      const proseLines = [];
      while (
        i < lines.length &&
        !lines[i].match(/^##\s+/) &&
        !(/^\|.+\|$/.test(lines[i].trim()) &&
          i + 1 < lines.length &&
          /^\|[\s:|-]+\|$/.test(lines[i + 1].trim()))
      ) {
        proseLines.push(lines[i]);
        i += 1;
      }
      pushProse(current().blocks, proseLines.join('\n'));
    }
  }

  for (const chunk of chunks) {
    if (chunk.kind === 'pre') {
      pushPre(current().blocks, chunk.text);
    } else {
      appendMarkdown(chunk.text);
    }
  }

  return sections
    .filter((section) => section.blocks.length > 0 || sections.length === 1)
    .map((section, index) => ({
      id: sectionId(lessonId, section.title, index),
      title: section.title,
      blocks: section.blocks,
    }));
}

function convertProjectStructure(doc) {
  const parts = [];
  {
    const blocks = [];
    pushProse(blocks, doc.scope);
    pushProse(blocks, doc.idea);
    parts.push({
      id: sectionId(doc.id, '개요', 0),
      title: '개요',
      blocks,
    });
  }
  if (doc.backend) {
    const blocks = [];
    pushProse(blocks, doc.backend.title);
    pushPre(blocks, doc.backend.tree);
    pushKv(blocks, doc.backend.layers);
    parts.push({
      id: sectionId(doc.id, '백엔드', 1),
      title: '백엔드',
      blocks,
    });
  }
  if (doc.frontend) {
    const blocks = [];
    pushProse(blocks, doc.frontend.title);
    pushPre(blocks, doc.frontend.tree);
    pushKv(blocks, doc.frontend.folders);
    parts.push({
      id: sectionId(doc.id, '프론트엔드', 2),
      title: '프론트엔드',
      blocks,
    });
  }
  if (doc.quickChecks?.length) {
    const blocks = [];
    pushList(blocks, doc.quickChecks);
    parts.push({
      id: sectionId(doc.id, '체크', 3),
      title: '체크',
      blocks,
    });
  }
  return parts;
}

function convertUiTaxonomy(doc) {
  const parts = [];
  for (const [index, group] of (doc.taxonomy ?? []).entries()) {
    const blocks = [];
    for (const category of group.categories ?? []) {
      pushHeading(blocks, category.name);
      pushList(blocks, category.items);
    }
    parts.push({
      id: sectionId(doc.id, group.group, index),
      title: group.group,
      blocks,
    });
  }
  if (doc.roleGroups?.length) {
    const blocks = [];
    for (const group of doc.roleGroups) {
      pushHeading(blocks, `${group.label} (${group.role})`);
      pushList(blocks, group.items);
    }
    parts.push({
      id: sectionId(doc.id, '역할 그룹', parts.length),
      title: '역할 그룹',
      blocks,
    });
  }
  if (doc.muiCategories?.length) {
    const blocks = [];
    for (const category of doc.muiCategories) {
      pushHeading(blocks, category.name);
      pushList(blocks, category.items);
    }
    parts.push({
      id: sectionId(doc.id, 'MUI', parts.length),
      title: 'MUI',
      blocks,
    });
  }
  if (doc.frequency?.length) {
    const blocks = [];
    pushKv(
      blocks,
      doc.frequency.map((item) => ({
        key: item.name,
        value: '★'.repeat(item.stars ?? 0),
      })),
    );
    parts.push({
      id: sectionId(doc.id, '고빈도', parts.length),
      title: '고빈도',
      blocks,
    });
  }
  return parts;
}

function convertRegexReference(doc) {
  const parts = (doc.sections ?? []).map((section, index) => {
    const blocks = [];
    pushKv(blocks, section.rows);
    pushProse(blocks, section.notes);
    return {
      id: sectionId(doc.id, section.title, index),
      title: section.title,
      blocks,
    };
  });
  if (doc.practiceSites?.length) {
    const blocks = [];
    pushList(
      blocks,
      doc.practiceSites.map(
        (site) => `${site.name} — ${site.url}${site.note ? ` (${site.note})` : ''}`,
      ),
    );
    parts.push({
      id: sectionId(doc.id, '연습 사이트', parts.length),
      title: '연습 사이트',
      blocks,
    });
  }
  if (doc.dailyRoutine) {
    const blocks = [];
    pushProse(blocks, doc.dailyRoutine);
    parts.push({
      id: sectionId(doc.id, '루틴', parts.length),
      title: '루틴',
      blocks,
    });
  }
  return parts;
}

function convertRestPatterns(doc) {
  const parts = [];
  {
    const blocks = [];
    pushProse(blocks, doc.scope);
    parts.push({
      id: sectionId(doc.id, '범위', 0),
      title: '범위',
      blocks,
    });
  }
  for (const [index, pattern] of (doc.patterns ?? []).entries()) {
    const blocks = [];
    pushList(blocks, pattern.steps);
    parts.push({
      id: sectionId(doc.id, pattern.title, index + 1),
      title: pattern.title,
      blocks,
    });
  }
  if (doc.expressExample) {
    const blocks = [];
    pushPre(blocks, doc.expressExample);
    parts.push({
      id: sectionId(doc.id, 'Express 예시', parts.length),
      title: 'Express 예시',
      blocks,
    });
  }
  if (doc.storageCompare?.length) {
    const blocks = [];
    pushKv(blocks, doc.storageCompare);
    parts.push({
      id: sectionId(doc.id, '저장소 비교', parts.length),
      title: '저장소 비교',
      blocks,
    });
  }
  return parts;
}

function convertFrontendDesign(doc) {
  const parts = [];
  {
    const blocks = [];
    pushProse(blocks, doc.scope);
    pushProse(blocks, doc.trend);
    parts.push({
      id: sectionId(doc.id, '개요', 0),
      title: '개요',
      blocks,
    });
  }
  for (const [index, layer] of (doc.layers ?? []).entries()) {
    const blocks = [];
    pushProse(blocks, layer.role);
    pushHeading(blocks, '산출물');
    pushList(blocks, layer.artifacts);
    pushHeading(blocks, '체크');
    pushList(blocks, layer.checklist);
    parts.push({
      id: sectionId(doc.id, layer.name, index + 1),
      title: layer.name,
      blocks,
    });
  }
  if (doc.specTemplate?.length) {
    const blocks = [];
    for (const section of doc.specTemplate) {
      pushHeading(blocks, section.section);
      pushList(blocks, section.items);
    }
    parts.push({
      id: sectionId(doc.id, '설계서 템플릿', parts.length),
      title: '설계서 템플릿',
      blocks,
    });
  }
  if (doc.quickChecks?.length) {
    const blocks = [];
    pushList(blocks, doc.quickChecks);
    parts.push({
      id: sectionId(doc.id, '체크', parts.length),
      title: '체크',
      blocks,
    });
  }
  return parts;
}

function convertNoteDoc(doc) {
  if (doc.body) {
    return sectionsFromMarkdownBody(doc.id, doc.title, doc.body);
  }
  if (doc.backend || doc.frontend) {
    return convertProjectStructure(doc);
  }
  if (doc.taxonomy) {
    return convertUiTaxonomy(doc);
  }
  if (doc.sections && Array.isArray(doc.sections) && doc.sections[0]?.rows) {
    return convertRegexReference(doc);
  }
  if (doc.patterns) {
    return convertRestPatterns(doc);
  }
  if (doc.layers && doc.specTemplate !== undefined) {
    return convertFrontendDesign(doc);
  }
  // 미지 스키마: 남은 필드를 JSON pre로 노출
  const skip = new Set(['id', 'category', 'kind', 'topic', 'title', 'source']);
  const rest = Object.fromEntries(
    Object.entries(doc).filter(([key]) => !skip.has(key)),
  );
  return [
    {
      id: sectionId(doc.id, doc.title, 0),
      title: doc.title,
      blocks: [{ type: 'pre', text: JSON.stringify(rest, null, 2) }],
    },
  ];
}

async function buildNoteTracks() {
  const files = await collectYamlFiles(path.join(rawDir, 'knowledge', 'notes'));
  const trackMap = new Map();

  for (const file of files) {
    const doc = await readYaml(file);
    if (doc.kind !== 'note') continue;
    const topic = doc.topic ?? 'etc';
    if (!trackMap.has(topic)) {
      trackMap.set(topic, {
        id: `notes-${topic}`,
        label: NOTE_TOPIC_LABEL_MAP[topic] ?? topic,
        folderName: topic,
        lessons: [],
      });
    }
    trackMap.get(topic).lessons.push({
      id: doc.id,
      title: doc.title,
      fileName: path.basename(file),
      sourcePath: relPath(file),
      parts: convertNoteDoc(doc),
    });
  }

  return [...trackMap.values()].sort((left, right) => {
    const li = NOTE_TOPIC_ORDER.indexOf(left.folderName);
    const ri = NOTE_TOPIC_ORDER.indexOf(right.folderName);
    return (li === -1 ? 99 : li) - (ri === -1 ? 99 : ri);
  });
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
  const [language, lexicon, visual, notes] = await Promise.all([
    buildLanguageTracks(),
    buildLexiconTracks(),
    buildVisualTracks(),
    buildNoteTracks(),
  ]);
  await writeGenerated('languageLessons.ts', 'LanguageTrack', 'languageLessonTypes', 'languageTracks', language);
  await writeGenerated('lexiconLessons.ts', 'LexiconTrack', 'lexiconLessonTypes', 'lexiconTracks', lexicon);
  await writeGenerated('visualLessons.ts', 'VisualTrack', 'visualLessonTypes', 'visualTracks', visual);
  await writeGenerated('noteLessons.ts', 'NoteTrack', 'noteLessonTypes', 'noteTracks', notes);

  const partCount = language.reduce((acc, t) => acc + t.lessons.reduce((a, l) => a + l.parts.length, 0), 0);
  const termCount = lexicon.reduce((acc, t) => acc + t.lessons.reduce((a, l) => a + l.parts.length, 0), 0);
  const noteCount = notes.reduce((acc, t) => acc + t.lessons.length, 0);
  console.log(
    `syntax ${language.length}트랙 ${partCount}파트 / terms ${lexicon.length}트랙 ${termCount}카드 / visual ${visual[0].lessons.length}레슨 / notes ${notes.length}토픽 ${noteCount}노트`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
