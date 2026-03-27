const KEYWORDS = {
  css: ['display', 'position', 'grid', 'flex', 'justify-content', 'align-items', 'padding', 'margin', 'border', 'background', 'color'],
  go: ['package', 'import', 'func', 'return', 'type', 'struct', 'if', 'else', 'for', 'range', 'const', 'var', 'nil'],
  html: ['DOCTYPE'],
  java: ['class', 'public', 'private', 'static', 'void', 'new', 'return', 'if', 'else', 'for', 'try', 'catch', 'extends', 'import'],
  javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'of', 'new', 'class', 'extends', 'async', 'await', 'try', 'catch', 'null', 'undefined', 'true', 'false'],
  markdown: [],
  python: ['def', 'return', 'if', 'elif', 'else', 'for', 'in', 'True', 'False', 'None', 'import', 'from', 'try', 'except', 'class'],
  rust: ['fn', 'let', 'mut', 'struct', 'impl', 'match', 'if', 'else', 'for', 'in', 'pub', 'return', 'Some', 'None', 'Ok', 'Err'],
  shell: ['if', 'then', 'else', 'fi', 'for', 'do', 'done', 'echo', 'export', 'local'],
  sql: ['select', 'from', 'where', 'join', 'left', 'right', 'inner', 'group', 'by', 'order', 'having', 'insert', 'into', 'values', 'update', 'set', 'delete', 'create', 'table', 'and', 'or', 'as'],
  typescript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'of', 'new', 'class', 'extends', 'async', 'await', 'type', 'interface', 'readonly', 'null', 'undefined', 'true', 'false'],
};

const FUNCTION_WORDS = new Set(['if', 'for', 'while', 'switch', 'catch', 'return']);

type TokenTone = 'plain' | 'keyword' | 'string' | 'number' | 'function' | 'type' | 'tag' | 'attribute' | 'property' | 'variable' | 'comment';

export type HighlightChar = {
  char: string;
  key: string;
  logicalIndex: number | null;
  tone: TokenTone;
};

function markRange(tones: TokenTone[], start: number, end: number, tone: TokenTone) {
  for (let index = start; index < end; index += 1) {
    tones[index] = tone;
  }
}

function applyMatches(line: string, tones: TokenTone[], pattern: RegExp, tone: TokenTone) {
  for (const match of line.matchAll(pattern)) {
    const start = match.index ?? 0;
    const value = match[0] ?? '';
    if (!value) {
      continue;
    }
    markRange(tones, start, start + value.length, tone);
  }
}

function buildKeywordPattern(language: string) {
  const keywords = KEYWORDS[language as keyof typeof KEYWORDS] ?? [];
  if (keywords.length === 0) {
    return null;
  }

  const escapedKeywords = keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp(`\\b(${escapedKeywords.join('|')})\\b`, language === 'sql' ? 'gi' : 'g');
}

function tokenizeHtmlLine(line: string, tones: TokenTone[]) {
  applyMatches(line, tones, /<\/?[A-Za-z0-9:-]+/g, 'tag');
  applyMatches(line, tones, /\b[A-Za-z-:]+(?==)/g, 'attribute');
  applyMatches(line, tones, /"[^"]*"|'[^']*'/g, 'string');
}

function tokenizeCssLine(line: string, tones: TokenTone[]) {
  applyMatches(line, tones, /--[A-Za-z0-9-]+/g, 'variable');
  applyMatches(line, tones, /\.[A-Za-z_-][A-Za-z0-9_-]*/g, 'type');
  applyMatches(line, tones, /#[A-Za-z0-9_-]+/g, 'number');
  applyMatches(line, tones, /\b[A-Za-z-]+(?=\s*:)/g, 'property');
  applyMatches(line, tones, /"[^"]*"|'[^']*'/g, 'string');
  applyMatches(line, tones, /\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)?\b/g, 'number');
}

function tokenizeCodeLine(line: string, language: string, tones: TokenTone[]) {
  applyMatches(line, tones, /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`/g, 'string');
  applyMatches(line, tones, /\b\d+(?:\.\d+)?\b/g, 'number');
  applyMatches(line, tones, /\$[A-Za-z_][A-Za-z0-9_]*|\$\{[^}]+\}/g, 'variable');

  const keywordPattern = buildKeywordPattern(language);
  if (keywordPattern) {
    applyMatches(line, tones, keywordPattern, 'keyword');
  }

  for (const match of line.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*(?=\()/g)) {
    const value = match[1];
    if (!value || FUNCTION_WORDS.has(value)) {
      continue;
    }
    const start = match.index ?? 0;
    markRange(tones, start, start + value.length, 'function');
  }

  applyMatches(line, tones, /\b[A-Z][A-Za-z0-9_]*\b/g, 'type');
}

function tokenizeLine(line: string, language: string) {
  const tones: TokenTone[] = Array.from({ length: line.length }, () => 'plain');

  if (language === 'html') {
    tokenizeHtmlLine(line, tones);
    tokenizeCssLine(line, tones);
    tokenizeCodeLine(line, 'javascript', tones);
    return tones;
  }

  if (language === 'markdown') {
    applyMatches(line, tones, /`[^`]+`/g, 'string');
    return tones;
  }

  if (language === 'css') {
    tokenizeCssLine(line, tones);
    return tones;
  }

  tokenizeCodeLine(line, language, tones);
  return tones;
}

function buildTypableMask(line: string, language: string, blockCommentState: { active: boolean }) {
  const mask = Array.from({ length: line.length }, () => true);

  if (language === 'markdown') {
    return mask;
  }

  const markCommentRange = (start: number, end: number) => {
    for (let index = start; index < end; index += 1) {
      mask[index] = false;
    }
  };

  let index = 0;
  while (index < line.length) {
    if (blockCommentState.active) {
      const endIndex = line.indexOf('*/', index);
      if (endIndex === -1) {
        markCommentRange(index, line.length);
        return mask;
      }

      markCommentRange(index, endIndex + 2);
      blockCommentState.active = false;
      index = endIndex + 2;
      continue;
    }

    if (language === 'html') {
      if (line.startsWith('<!--', index)) {
        const endIndex = line.indexOf('-->', index + 4);
        if (endIndex === -1) {
          markCommentRange(index, line.length);
          return mask;
        }
        markCommentRange(index, endIndex + 3);
        index = endIndex + 3;
        continue;
      }
    }

    if (['javascript', 'typescript', 'java', 'go', 'rust', 'html'].includes(language) && line.startsWith('/*', index)) {
      const endIndex = line.indexOf('*/', index + 2);
      if (endIndex === -1) {
        markCommentRange(index, line.length);
        blockCommentState.active = true;
        return mask;
      }
      markCommentRange(index, endIndex + 2);
      index = endIndex + 2;
      continue;
    }

    if (['javascript', 'typescript', 'java', 'go', 'rust'].includes(language) && line.startsWith('//', index)) {
      markCommentRange(index, line.length);
      return mask;
    }

    if (['python', 'shell'].includes(language) && line[index] === '#') {
      markCommentRange(index, line.length);
      return mask;
    }

    if (language === 'sql' && line.startsWith('--', index)) {
      markCommentRange(index, line.length);
      return mask;
    }

    index += 1;
  }

  return mask;
}

function applyCommentTone(tones: TokenTone[], mask: boolean[]) {
  for (let index = 0; index < mask.length; index += 1) {
    if (!mask[index]) {
      tones[index] = 'comment';
    }
  }
}

export function buildHighlightChars(text: string, language: string) {
  const lines = text.split('\n');
  const chars: HighlightChar[] = [];
  let logicalIndex = 0;
  const blockCommentState = { active: false };

  lines.forEach((line, lineIndex) => {
    const tones = tokenizeLine(line, language);
    const typableMask = buildTypableMask(line, language, blockCommentState);
    applyCommentTone(tones, typableMask);

    for (let index = 0; index < line.length; index += 1) {
      const char = line[index];
      const isGap = /\s/.test(char);
      const isTypable = typableMask[index] && !isGap;

      chars.push({
        char,
        key: `${lineIndex}-${index}-${char}`,
        logicalIndex: isTypable ? logicalIndex : null,
        tone: tones[index] ?? 'plain',
      });

      if (isTypable) {
        logicalIndex += 1;
      }
    }

    if (lineIndex < lines.length - 1) {
      chars.push({
        char: '\n',
        key: `${lineIndex}-newline`,
        logicalIndex: null,
        tone: 'plain',
      });
    }
  });

  return chars;
}
