import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'assets', 'typingSource');
const outputDir = path.join(rootDir, 'src', 'generated');
const outputFile = path.join(outputDir, 'languageLessons.ts');
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

function toId(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'item';
}

function getTrackLabel(folderName) {
  const rawLabel = folderName.replace(/^Language-/, '');
  return TRACK_LABEL_MAP[rawLabel] ?? rawLabel;
}

function getLanguage(fileName) {
  return LANGUAGE_MAP[path.extname(fileName)] ?? 'text';
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
  if (!title) {
    return false;
  }

  if (/^(결과|[0-9[\]{}(=])/.test(title)) {
    return false;
  }

  if (/[;='"`{}]/.test(title) || title.includes('=>')) {
    return false;
  }

  return /[가-힣]/.test(title) || /\[[^\]]+\]/.test(title);
}

function stripInlineComment(line, language) {
  let nextLine = line;

  if (language === 'html') {
    if (/^\s*<!--.*?-->\s*$/.test(nextLine)) {
      return '';
    }
    nextLine = nextLine.replace(/\/\*.*?\*\//g, '');
    nextLine = nextLine.replace(/<!--.*?-->/g, '');
    return nextLine.replace(/\s+$/g, '');
  }

  if (language === 'markdown') {
    return nextLine.replace(/\s+$/g, '');
  }

  if (['javascript', 'typescript', 'java', 'go', 'rust'].includes(language)) {
    if (/^\s*\/\//.test(nextLine)) {
      return '';
    }
    nextLine = nextLine.replace(/\/\*.*?\*\//g, '');
    nextLine = nextLine.replace(/\s*\/\/.*$/g, '');
    return nextLine.replace(/\s+$/g, '');
  }

  if (['python', 'shell'].includes(language)) {
    if (/^\s*#/.test(nextLine)) {
      return '';
    }
    nextLine = nextLine.replace(/\s*#.*$/g, '');
    return nextLine.replace(/\s+$/g, '');
  }

  if (language === 'sql') {
    if (/^\s*--/.test(nextLine)) {
      return '';
    }
    nextLine = nextLine.replace(/\s*--.*$/g, '');
    return nextLine.replace(/\s+$/g, '');
  }

  return nextLine.replace(/\s+$/g, '');
}

function getHeadingFromLine(line, language) {
  const trimmed = line.trim();
  if (!trimmed) {
    return null;
  }

  if (language === 'markdown') {
    if (trimmed.startsWith('## ')) {
      return cleanTitle(trimmed.slice(3));
    }
    return null;
  }

  const blockMatch = trimmed.match(/^\/\*+\s*(.*?)\s*\*+\/$/);
  if (blockMatch) {
    return cleanTitle(blockMatch[1]);
  }

  const slashMatch = trimmed.match(/^\/\/\s*(.+)$/);
  if (slashMatch) {
    const title = cleanTitle(slashMatch[1]);
    if (!isLikelyHeadingText(title)) {
      return null;
    }
    return title;
  }

  const hashMatch = trimmed.match(/^#\s*(.+)$/);
  if (hashMatch) {
    const title = cleanTitle(hashMatch[1]);
    if (!isLikelyHeadingText(title)) {
      return null;
    }
    return title;
  }

  const sqlMatch = trimmed.match(/^--\s*(.+)$/);
  if (sqlMatch) {
    const title = cleanTitle(sqlMatch[1]);
    if (!isLikelyHeadingText(title)) {
      return null;
    }
    return title;
  }

  return null;
}

function trimBlankLines(lines) {
  const nextLines = [...lines];
  while (nextLines[0] === '') {
    nextLines.shift();
  }
  while (nextLines[nextLines.length - 1] === '') {
    nextLines.pop();
  }
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

    const hasSameContent = parts.some((part) => part.content === normalizedContent);
    if (hasSameContent) {
      currentLines = [];
      currentDisplayLines = [];
      return;
    }

    parts.push({
      id: `${lessonId}-part-${parts.length + 1}`,
      title: currentTitle || `${lessonTitle} ${parts.length + 1}`,
      content: normalizedContent,
      displayContent: normalizedDisplayContent,
    });
    currentLines = [];
    currentDisplayLines = [];
  };

  for (const line of lines) {
    const heading = getHeadingFromLine(line, language);
    if (heading) {
      pushPart();
      currentTitle = heading;
      currentDisplayLines.push(line);
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

    currentDisplayLines.push(line);

    if (strippedLine.trim() !== '') {
      currentLines.push(strippedLine);
    }
  }

  pushPart();

  if (parts.length === 0) {
    return [
      {
        id: `${lessonId}-part-1`,
        title: lessonTitle,
        content: content.trim(),
        displayContent: content.trim(),
      },
    ];
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
      content: contentValue,
      displayContent: contentValue,
    });
    buffer = [];
  };

  for (const line of lines) {
    if (line.startsWith('# ')) {
      continue;
    }

    if (line.startsWith('## ')) {
      pushBuffer();
      currentSection = cleanTitle(line.slice(3));
      continue;
    }

    if (!line.trim()) {
      pushBuffer();
      continue;
    }

    buffer.push(line);
  }

  pushBuffer();

  return parts.length > 0
    ? parts
    : [{
      id: `${lessonId}-part-1`,
      title: lessonTitle,
      content: content.trim(),
      displayContent: content.trim(),
    }];
}

function createLessonParts(content, language, lessonId, lessonTitle) {
  if (language === 'markdown') {
    return createMarkdownParts(content, lessonId, lessonTitle);
  }

  return createCodeParts(content, language, lessonId, lessonTitle);
}

async function readLanguageTracks() {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const trackDirs = entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('Language-'))
    .sort((left, right) => left.name.localeCompare(right.name, 'en'));

  const tracks = [];

  for (const trackDir of trackDirs) {
    const trackPath = path.join(sourceDir, trackDir.name);
    const lessonEntries = await readdir(trackPath, { withFileTypes: true });
    const lessonFiles = lessonEntries
      .filter((entry) => entry.isFile())
      .sort((left, right) => left.name.localeCompare(right.name, 'en'));

    const lessons = [];

    for (const lessonFile of lessonFiles) {
      const lessonPath = path.join(trackPath, lessonFile.name);
      const rawContent = await readFile(lessonPath, 'utf8');
      const normalizedContent = rawContent.replace(/\r\n/g, '\n').trimEnd();
      const fileName = lessonFile.name;
      const title = path.parse(fileName).name;
      const lessonId = `${toId(trackDir.name)}-${toId(title)}`;
      const language = getLanguage(fileName);

      lessons.push({
        id: lessonId,
        title,
        fileName,
        sourcePath: path.relative(rootDir, lessonPath).replace(/\\/g, '/'),
        language,
        parts: createLessonParts(normalizedContent, language, lessonId, title),
      });
    }

    tracks.push({
      id: toId(trackDir.name),
      label: getTrackLabel(trackDir.name),
      folderName: trackDir.name,
      lessons,
    });
  }

  return tracks;
}

async function main() {
  const tracks = await readLanguageTracks();
  const fileContent = `import type { LanguageTrack } from '../data/languageLessonTypes';

export const languageTracks: LanguageTrack[] = ${JSON.stringify(tracks, null, 2)} as LanguageTrack[];
`;

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, fileContent, 'utf8');
  console.log(`생성 완료: ${path.relative(rootDir, outputFile)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
