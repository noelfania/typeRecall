import { buildHighlightChars } from './codeHighlight';
import type { HighlightChar } from './codeHighlight';

export type CodeNote = {
  kind: 'note' | 'result';
  text: string;
};

export type AnnotatedLine = {
  chars: HighlightChar[];
  notes: CodeNote[];
  indent: number;
};

const COMMENT_OPEN = /^\s*(\/\*+|\/\/+|#+|--+|<!--)\s*/;
const COMMENT_CLOSE = /\s*(\*+\/|-->)\s*$/;
const INNER_MARKER = /\s(\/\/|#|--)\s/;
const RESULT_LABEL = /^(결과\s*[:：]|→|=>)\s*/;
const VALUE_LIKE = /^(-?\d|true\b|false\b|null\b|undefined\b|NaN\b|Map\b|Set\b|\[(?![가-힣])|\{|'|"|`)/;
// "0이면 ...", "true면 ...", "null|undefined → ..."처럼 값으로 시작해도 문장이면 설명이다
const SENTENCE_LIKE = /^([\w.-]+(\|[\w.-]+)*\s*(→\s*[가-힣]|[가-힣])|("[^"]*"|'[^']*')\s+[가-힣]|\[[^\]]*\]\s*[는은이가을를로])/;
// adA=10, adB=20 처럼 변수에 담긴 값
const ASSIGNED_VALUE = /^[\w$.]+=[^=]/;
// 주석 처리된 코드: 식별자로 시작하고 코드 기호로 끝나며 한글 설명이 없다
const COMMENTED_CODE = /^[A-Za-z_$][\w$.]*.*([;{}]|\)|\s=\s.*)$/;

function stripMarkers(text: string) {
  return text.replace(COMMENT_OPEN, '').replace(COMMENT_CLOSE, '').trim();
}

function normalizeTitle(text: string) {
  return text.replace(/\s+/g, '').toLowerCase();
}

function toNote(text: string, language: string): CodeNote {
  const labeled = text.match(RESULT_LABEL);
  if (labeled) {
    const rest = text.slice(labeled[0].length);
    // "→ 설명 문장"이나 명령어의 "결과: 문장"은 값이 아니라 설명이다
    const isExplained = (!labeled[0].startsWith('결과') || language === 'shell') && /[가-힣]/.test(rest);
    return { kind: isExplained ? 'note' : 'result', text: rest };
  }
  // 명령어 줄의 숫자·따옴표로 시작하는 주석은 값이 아니라 설명인 경우가 많다
  const isValue =
    language !== 'shell' &&
    !/[가-힣]/.test(text.split(/\s/)[0]) &&
    (ASSIGNED_VALUE.test(text) || (VALUE_LIKE.test(text) && !SENTENCE_LIKE.test(text)));
  return { kind: isValue ? 'result' : 'note', text };
}

function isUnbalanced(text: string) {
  const count = (pattern: RegExp) => (text.match(pattern) ?? []).length;
  return count(/[[{]/g) > count(/[\]}]/g);
}

/** 여러 줄로 나눠 적은 결과값(// [ ... // ])은 한 설명으로 합친다 */
function pushOwnLineNote(pending: CodeNote[], body: string, language: string) {
  const last = pending[pending.length - 1];
  if (last && isUnbalanced(last.text)) {
    last.text = `${last.text} ${body}`;
    return;
  }
  pending.push(toNote(body, language));
}

function isCommentedCode(text: string) {
  return !/[가-힣]/.test(text) && !/^(Map|Set)\b/.test(text) && COMMENTED_CODE.test(text);
}

/** `제목 — 설명` 형태의 첫 줄에서 카드 머리글과 겹치는 제목을 떼어 낸다 */
function titleRemainder(comment: string, title: string) {
  const compact = normalizeTitle(title);
  let consumed = 0;
  let matched = 0;
  while (consumed < comment.length && matched < compact.length) {
    if (/\s/.test(comment[consumed])) {
      consumed += 1;
      continue;
    }
    if (comment[consumed].toLowerCase() !== compact[matched]) {
      return null;
    }
    consumed += 1;
    matched += 1;
  }
  if (matched < compact.length) {
    return null;
  }
  return comment.slice(consumed).replace(/^[\s—–:-]+/, '').trim();
}

function splitChars(chars: HighlightChar[]) {
  const lines: HighlightChar[][] = [[]];
  for (const item of chars) {
    if (item.char === '\n') {
      lines.push([]);
    } else {
      lines[lines.length - 1].push(item);
    }
  }
  return lines;
}

function textOf(chars: HighlightChar[]) {
  return chars.map((item) => item.char).join('');
}

function trimEndWhitespace(chars: HighlightChar[]) {
  let end = chars.length;
  while (end > 0 && /\s/.test(chars[end - 1].char)) {
    end -= 1;
  }
  return chars.slice(0, end);
}

/**
 * 표시문을 코드 줄과 그 줄의 설명으로 나눈다.
 * 글자의 logicalIndex는 그대로라 입력 판정에 영향을 주지 않는다.
 */
export function annotateCode(display: string, language: string, title: string): AnnotatedLine[] {
  const annotated: AnnotatedLine[] = [];
  let pending: CodeNote[] = [];
  let lastCodeLine: AnnotatedLine | null = null;
  let isFirstComment = true;

  for (const lineChars of splitChars(buildHighlightChars(display, language))) {
    const codeChars = lineChars.filter((item) => item.tone !== 'comment');
    const commentChars = lineChars.filter((item) => item.tone === 'comment');
    const hasCode = codeChars.some((item) => !/\s/.test(item.char));
    const lineNotes: CodeNote[] = [];
    let visibleChars = trimEndWhitespace(codeChars);
    let isCode = hasCode;

    if (commentChars.length > 0) {
      const rawComment = textOf(commentChars);
      const body = stripMarkers(rawComment);
      const innerMarker = body.match(INNER_MARKER);
      const codePart = innerMarker ? body.slice(0, innerMarker.index).trim() : body;

      if (!hasCode && isCommentedCode(codePart)) {
        // 하면 안 되는 예시 같은 주석 처리 코드는 코드 자리에 흐리게 남긴다
        const noteStart = innerMarker
          ? rawComment.indexOf(innerMarker[0], rawComment.indexOf(codePart) + codePart.length)
          : -1;
        visibleChars = trimEndWhitespace(
          noteStart === -1 ? lineChars : lineChars.slice(0, noteStart),
        );
        isCode = true;
        if (innerMarker) {
          lineNotes.push(toNote(stripMarkers(body.slice(innerMarker.index)), language));
        }
      } else if (!hasCode && isFirstComment && annotated.every((line) => line.chars.length === 0)) {
        const remainder = titleRemainder(body, title);
        if (remainder === null) {
          pushOwnLineNote(pending, body, language);
        } else if (remainder) {
          pushOwnLineNote(pending, remainder, language);
        }
      } else if (hasCode) {
        lineNotes.push(toNote(body, language));
      } else if (body) {
        pushOwnLineNote(pending, body, language);
      }
      isFirstComment = false;
    }

    if (!isCode) {
      // 자기 줄 주석은 줄을 차지하지 않고, 진짜 빈 줄만 간격으로 남긴다
      if (commentChars.length === 0 && annotated.length > 0) {
        annotated.push({ chars: [], notes: [], indent: 0 });
      }
      continue;
    }

    const leading = visibleChars.findIndex((item) => !/\s/.test(item.char));
    const line: AnnotatedLine = {
      chars: visibleChars,
      notes: [...pending, ...lineNotes],
      indent: leading === -1 ? 0 : leading,
    };
    pending = [];
    annotated.push(line);
    lastCodeLine = line;
  }

  // 코드 뒤에 남은 주석(결과 설명 등)은 마지막 코드 줄에 붙인다
  if (lastCodeLine) {
    lastCodeLine.notes.push(...pending);
  }
  // 끝에 남은 빈 줄은 간격 역할이 없다
  while (annotated.length > 0 && annotated[annotated.length - 1].chars.length === 0) {
    annotated.pop();
  }
  return annotated;
}
