// 일회성 마이그레이션: assets/typingSource → assets/raw YAML 변환
// 파트 분할·카드 파싱 로직은 기존 생성기(generate-language-lessons, generate-lexicon-lessons)와 동일하다.
// 변환 후 원본은 삭제되므로, 이후 정본은 assets/raw/ 이다.
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stringify } from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'assets', 'typingSource');
const rawDir = path.join(rootDir, 'assets', 'raw');

const TRACK_LABEL_MAP = {
  'bash-Shell': 'Bash / Shell',
  CSS: 'CSS',
  git: 'Git',
  go: 'Go',
  Java: 'Java',
  JavaScript: 'JavaScript',
  Python: 'Python',
  'RegEx-for-Javascript': 'RegEx for JavaScript',
  Rust: 'Rust',
  SQL: 'SQL',
  TypeScript: 'TypeScript',
};
const LANGUAGE_MAP = {
  '.html': 'html',
  '.java': 'java',
  '.js': 'javascript',
  '.md': 'markdown',
  '.go': 'go',
  '.py': 'python',
  '.rs': 'rust',
  '.sh': 'shell',
  '.sql': 'sql',
  '.ts': 'typescript',
};
// 셸·Git 명령 트랙은 kind=command, 나머지는 code-snippet
const COMMAND_TRACKS = new Set(['Language-bash-Shell', 'Language-git']);

function toId(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'item';
}

function cleanTitle(rawTitle) {
  return rawTitle
    .replace(/^[#/*\s-]+/, '')
    .replace(/[\s*#/]+$/, '')
    .replace(/^\*+\s*/, '')
    .replace(/\s*\*+$/, '')
    .trim();
}

function isLikelyHeadingText(title) {
  if (!title) return false;
  if (/^(결과|[0-9[\]{}(=])/.test(title)) return false;
  if (/[;='"`{}]/.test(title) || title.includes('=>')) return false;
  return /[가-힣]/.test(title) || /\[[^\]]+\]/.test(title);
}

function stripInlineComment(line, language) {
  let nextLine = line;
  if (language === 'html') {
    if (/^\s*<!--.*?-->\s*$/.test(nextLine)) return '';
    nextLine = nextLine.replace(/\/\*.*?\*\//g, '');
    nextLine = nextLine.replace(/<!--.*?-->/g, '');
    return nextLine.replace(/\s+$/g, '');
  }
  if (language === 'markdown') {
    return nextLine.replace(/\s+$/g, '');
  }
  if (['javascript', 'typescript', 'java', 'go', 'rust'].includes(language)) {
    if (/^\s*\/\//.test(nextLine)) return '';
    nextLine = nextLine.replace(/\/\*.*?\*\//g, '');
    nextLine = nextLine.replace(/\s*\/\/.*$/g, '');
    return nextLine.replace(/\s+$/g, '');
  }
  if (['python', 'shell'].includes(language)) {
    if (/^\s*#/.test(nextLine)) return '';
    nextLine = nextLine.replace(/\s*#.*$/g, '');
    return nextLine.replace(/\s+$/g, '');
  }
  if (language === 'sql') {
    if (/^\s*--/.test(nextLine)) return '';
    nextLine = nextLine.replace(/\s*--.*$/g, '');
    return nextLine.replace(/\s+$/g, '');
  }
  return nextLine.replace(/\s+$/g, '');
}

function getHeadingFromLine(line, language) {
  const trimmed = line.trim();
  if (!trimmed) return null;
  if (language === 'markdown') {
    if (trimmed.startsWith('## ')) return cleanTitle(trimmed.slice(3));
    return null;
  }
  const blockMatch = trimmed.match(/^\/\*+\s*(.*?)\s*\*+\/$/);
  if (blockMatch) return cleanTitle(blockMatch[1]);
  const slashMatch = trimmed.match(/^\/\/\s*(.+)$/);
  if (slashMatch) {
    const title = cleanTitle(slashMatch[1]);
    return isLikelyHeadingText(title) ? title : null;
  }
  const hashMatch = trimmed.match(/^#\s*(.+)$/);
  if (hashMatch) {
    const title = cleanTitle(hashMatch[1]);
    return isLikelyHeadingText(title) ? title : null;
  }
  const sqlMatch = trimmed.match(/^--\s*(.+)$/);
  if (sqlMatch) {
    const title = cleanTitle(sqlMatch[1]);
    return isLikelyHeadingText(title) ? title : null;
  }
  return null;
}

function trimBlankLines(lines) {
  const nextLines = [...lines];
  while (nextLines[0] === '') nextLines.shift();
  while (nextLines[nextLines.length - 1] === '') nextLines.pop();
  return nextLines;
}

function createCodeParts(content, language, lessonId, lessonTitle) {
  const lines = content.split('\n');
  const parts = [];
  let currentTitle = lessonTitle;
  let currentLines = [];
  let currentDisplayLines = [];

  const pushPart = () => {
    const normalizedLines = trimBlankLines(currentLines);
    const normalizedDisplayLines = trimBlankLines(currentDisplayLines);
    const normalizedContent = normalizedLines.join('\n').trimEnd();
    const normalizedDisplayContent = normalizedDisplayLines.join('\n').trimEnd();
    if (!normalizedContent || !normalizedDisplayContent) {
      currentLines = [];
      currentDisplayLines = [];
      return;
    }
    const hasSameContent = parts.some((part) => part.typing === normalizedContent);
    if (hasSameContent) {
      currentLines = [];
      currentDisplayLines = [];
      return;
    }
    parts.push({
      id: `${lessonId}-part-${parts.length + 1}`,
      title: currentTitle || `${lessonTitle} ${parts.length + 1}`,
      display: normalizedDisplayContent,
      typing: normalizedContent,
    });
    currentLines = [];
    currentDisplayLines = [];
  };

  for (const line of lines) {
    const heading = getHeadingFromLine(line, language);
    if (heading) {
      pushPart();
      currentTitle = heading;
      currentDisplayLines.push(line.replace(/\s+$/g, ''));
      continue;
    }
    const strippedLine = stripInlineComment(line, language);
    if (!line.trim()) {
      if (currentDisplayLines.length > 0 && currentDisplayLines[currentDisplayLines.length - 1] !== '') {
        currentDisplayLines.push('');
      }
      if (currentLines.length > 0 && currentLines[currentLines.length - 1] !== '') {
        currentLines.push('');
      }
      continue;
    }
    currentDisplayLines.push(line.replace(/\s+$/g, ''));
    if (strippedLine.trim() !== '') {
      currentLines.push(strippedLine);
    }
  }
  pushPart();

  if (parts.length === 0) {
    return [{
      id: `${lessonId}-part-1`,
      title: lessonTitle,
      display: content.trim(),
      typing: content.trim(),
    }];
  }
  return parts;
}

function createMarkdownParts(content, lessonId, lessonTitle) {
  const lines = content.split('\n');
  const parts = [];
  let currentSection = lessonTitle;
  let buffer = [];

  const pushBuffer = () => {
    const normalizedLines = trimBlankLines(buffer);
    if (normalizedLines.length === 0) {
      buffer = [];
      return;
    }
    const contentValue = normalizedLines.join('\n').trimEnd();
    const titleLine = normalizedLines[1] ?? normalizedLines[0];
    const title = titleLine.replace(/^예:\s*/, '').trim();
    parts.push({
      id: `${lessonId}-part-${parts.length + 1}`,
      title: title || `${currentSection} ${parts.length + 1}`,
      display: contentValue,
      typing: contentValue,
    });
    buffer = [];
  };

  for (const line of lines) {
    if (line.startsWith('# ')) continue;
    if (line.startsWith('## ')) {
      pushBuffer();
      currentSection = cleanTitle(line.slice(3));
      continue;
    }
    if (!line.trim()) {
      pushBuffer();
      continue;
    }
    buffer.push(line.replace(/\s+$/g, ''));
  }
  pushBuffer();

  return parts.length > 0
    ? parts
    : [{
      id: `${lessonId}-part-1`,
      title: lessonTitle,
      display: content.trim(),
      typing: content.trim(),
    }];
}

// ---- lexicon (Rule-* md) → terms ----

function extractPrimaryAnswer(bracketValue) {
  const first = bracketValue.split('/')[0]?.trim() ?? bracketValue.trim();
  return first.replace(/\s+/g, ' ');
}

function parseTermsMarkdown(content, lessonId, lessonTitle) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const terms = [];
  let currentSection = lessonTitle;
  let inCards = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.startsWith('# ')) continue;
    if (line.startsWith('## ')) {
      inCards = true;
      currentSection = cleanTitle(line.slice(3));
      continue;
    }
    if (!inCards || !line.trim()) continue;
    if (
      line.startsWith('형식:') ||
      line.startsWith('- 위 줄:') ||
      line.startsWith('- 아래 줄:') ||
      line.startsWith('- 그 아래 줄:') ||
      line.startsWith('- 한글 표기는')
    ) {
      continue;
    }

    const prompt = line.trim();
    index += 1;
    if (index >= lines.length) break;

    const answerLine = lines[index].trim();
    if (!answerLine || !answerLine.includes('[')) {
      index -= 1;
      continue;
    }
    const bracketMatch = answerLine.match(/^(.+?)\[(.+)\]$/);
    if (!bracketMatch) {
      index -= 1;
      continue;
    }

    const answer = extractPrimaryAnswer(bracketMatch[2]);
    const aliases = bracketMatch[2]
      .split('/')
      .map((value) => value.trim())
      .filter((value) => value && value !== answer);

    let example = '';
    if (index + 1 < lines.length && lines[index + 1].startsWith('예:')) {
      index += 1;
      example = lines[index].trim().replace(/^예:\s*/, '');
    }

    const title = bracketMatch[1].trim() || answer;
    const term = {
      id: `${lessonId}-term-${terms.length + 1}`,
      section: currentSection,
      title,
      prompt,
      answer,
      answerDisplay: answerLine,
    };
    if (aliases.length > 0) term.aliases = aliases;
    if (example) term.example = example;
    terms.push(term);
  }
  return terms;
}

// ---- YAML 출력 ----

function toYaml(doc) {
  return stringify(doc, {
    lineWidth: 0,
    defaultStringType: 'PLAIN',
    defaultKeyType: 'PLAIN',
  });
}

async function writeYamlFile(filePath, doc) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, toYaml(doc), 'utf8');
}

// ---- 변환 본체 ----

const FILE_RENAME_MAP = {
  // temp.md는 커밋 메시지 규칙 레슨 — 이름을 목적에 맞게 바꾼다
  'Language-git/temp.md': 'P03.커밋-메시지-규칙',
};

async function convertLanguageTracks() {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const trackDirs = entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('Language-'))
    .sort((left, right) => left.name.localeCompare(right.name, 'en'));

  let lessonCount = 0;
  let partCount = 0;

  for (const trackDir of trackDirs) {
    const trackPath = path.join(sourceDir, trackDir.name);
    const trackSlug = toId(trackDir.name.replace(/^Language-/, ''));
    const trackLabel = TRACK_LABEL_MAP[trackDir.name.replace(/^Language-/, '')] ?? trackDir.name;
    const lessonEntries = await readdir(trackPath, { withFileTypes: true });
    const lessonFiles = lessonEntries
      .filter((entry) => entry.isFile())
      .sort((left, right) => left.name.localeCompare(right.name, 'en'));

    for (const lessonFile of lessonFiles) {
      const extension = path.extname(lessonFile.name).toLowerCase();
      if (extension === '.htm') continue;

      const lessonPath = path.join(trackPath, lessonFile.name);
      const rawContent = await readFile(lessonPath, 'utf8');
      const normalizedContent = rawContent.replace(/\r\n/g, '\n').trimEnd();
      const relKey = `${trackDir.name}/${lessonFile.name}`;
      const baseName = FILE_RENAME_MAP[relKey] ?? path.parse(lessonFile.name).name;
      const language = LANGUAGE_MAP[extension] ?? 'text';
      const lessonId = `${toId(trackDir.name)}-${toId(path.parse(lessonFile.name).name)}`;
      const parts = language === 'markdown'
        ? createMarkdownParts(normalizedContent, lessonId, baseName)
        : createCodeParts(normalizedContent, language, lessonId, baseName);

      const doc = {
        id: lessonId,
        category: 'syntax',
        kind: COMMAND_TRACKS.has(trackDir.name) ? 'command' : 'code-snippet',
        language,
        track: { id: trackSlug, label: trackLabel },
        title: baseName,
        source: { origin: `assets/typingSource/${relKey}` },
        parts,
      };

      const outPath = path.join(rawDir, 'syntax', trackSlug, `${baseName}.yaml`);
      await writeYamlFile(outPath, doc);
      lessonCount += 1;
      partCount += parts.length;
      console.log(`syntax  ${trackSlug}/${baseName}.yaml (${parts.length} parts)`);
    }
  }
  return { lessonCount, partCount };
}

const TERM_FILE_MAP = {
  'Rule-dev-terms/README-terms-DEV.md': { out: 'terms/dev-terms.yaml', title: '개발 실무 어휘', topic: 'dev' },
  'Rule-dev-terms/README-terms-WEB.md': { out: 'terms/web-terms.yaml', title: '웹 실무 어휘', topic: 'web' },
  'Rule-REST/README-REST.md': { out: 'terms/rest-terms.yaml', title: 'REST 실무 용어', topic: 'rest' },
  // symbol-english.txt 는 오탈자 정규화가 필요해 손으로 별도 작성한다 (terms/symbol-terms.yaml)
};

async function convertTermFiles() {
  let termCount = 0;
  for (const [relKey, config] of Object.entries(TERM_FILE_MAP)) {
    const filePath = path.join(sourceDir, relKey);
    const rawContent = await readFile(filePath, 'utf8');
    const folderName = relKey.split('/')[0];
    const lessonId = `${toId(folderName)}-${toId(path.parse(relKey).name)}`;
    const terms = parseTermsMarkdown(rawContent.replace(/\r\n/g, '\n'), lessonId, config.title);

    const doc = {
      id: lessonId,
      category: 'knowledge',
      kind: 'term',
      topic: config.topic,
      title: config.title,
      source: { origin: `assets/typingSource/${relKey}` },
      terms,
    };
    await writeYamlFile(path.join(rawDir, 'knowledge', config.out), doc);
    termCount += terms.length;
    console.log(`knowledge  ${config.out} (${terms.length} terms)`);
  }
  return termCount;
}

async function main() {
  const { lessonCount, partCount } = await convertLanguageTracks();
  const termCount = await convertTermFiles();
  console.log(`\n합계: 레슨 ${lessonCount}개 / 파트 ${partCount}개 / 용어 ${termCount}개`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
