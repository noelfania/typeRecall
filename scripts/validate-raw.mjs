// assets/raw 정합성 검증: 필수 필드, id 중복, 이미지 경로 존재 여부
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const rawDir = path.join(rootDir, 'assets', 'raw');

const VALID_CATEGORIES = new Set(['syntax', 'knowledge']);
const VALID_KINDS = new Set(['code-snippet', 'command', 'term', 'visual', 'note']);

const errors = [];
const seenIds = new Map();
const stats = { files: 0, parts: 0, terms: 0, visualSections: 0, notes: 0 };

function fail(file, message) {
  errors.push(`${path.relative(rootDir, file)}: ${message}`);
}

function checkId(file, id) {
  if (!id) {
    fail(file, 'id 누락');
    return;
  }
  if (seenIds.has(id)) {
    fail(file, `id 중복: ${id} (먼저 등장: ${seenIds.get(id)})`);
  } else {
    seenIds.set(id, path.relative(rootDir, file));
  }
}

async function collectYamlFiles(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  for (const entry of entries) {
    if (entry.isFile() && /\.ya?ml$/i.test(entry.name) && entry.name !== 'manifest.yaml') {
      results.push(path.join(entry.parentPath ?? entry.path, entry.name));
    }
  }
  return results.sort();
}

function validateEnvelope(file, doc) {
  checkId(file, doc.id);
  if (!VALID_CATEGORIES.has(doc.category)) fail(file, `category 값 오류: ${doc.category}`);
  if (!VALID_KINDS.has(doc.kind)) fail(file, `kind 값 오류: ${doc.kind}`);
  if (!doc.title) fail(file, 'title 누락');
  if (!doc.source?.origin && !doc.source?.archivedHtm) fail(file, 'source.origin 누락');
}

function validateParts(file, doc) {
  if (!Array.isArray(doc.parts) || doc.parts.length === 0) {
    fail(file, 'parts 비어 있음');
    return;
  }
  for (const part of doc.parts) {
    checkId(file, part.id);
    if (!part.title) fail(file, `part title 누락: ${part.id}`);
    if (!part.display || !part.typing) fail(file, `part display/typing 누락: ${part.id}`);
  }
  stats.parts += doc.parts.length;
}

function validateTerms(file, doc) {
  if (!Array.isArray(doc.terms) || doc.terms.length === 0) {
    fail(file, 'terms 비어 있음');
    return;
  }
  for (const term of doc.terms) {
    checkId(file, term.id);
    if (!term.prompt) fail(file, `term prompt 누락: ${term.id}`);
    if (!term.answer) fail(file, `term answer 누락: ${term.id}`);
  }
  stats.terms += doc.terms.length;
}

function validateVisual(file, doc) {
  if (!doc.title?.ko) fail(file, 'title.ko 누락');
  // 텍스트 전용 섹션도 있으므로 images는 선택 — 있으면 경로만 검증한다
  for (const image of doc.images ?? []) {
    const imagePath = path.join(rootDir, image.path ?? '');
    if (!image.path || !existsSync(imagePath)) {
      fail(file, `이미지 파일 없음: ${image.path}`);
    }
  }
  stats.visualSections += 1;
}

async function main() {
  const files = await collectYamlFiles(rawDir);
  for (const file of files) {
    let doc;
    try {
      doc = parse(await readFile(file, 'utf8'));
    } catch (error) {
      fail(file, `YAML 파싱 실패: ${error.message}`);
      continue;
    }
    if (!doc || typeof doc !== 'object') {
      fail(file, '문서가 비어 있음');
      continue;
    }
    stats.files += 1;

    // visual meta는 title이 { ko } 객체라 envelope 검증을 분리한다
    if (doc.kind === 'visual') {
      checkId(file, doc.id);
      validateVisual(file, doc);
      continue;
    }

    validateEnvelope(file, doc);
    if (doc.kind === 'code-snippet' || doc.kind === 'command') validateParts(file, doc);
    if (doc.kind === 'term') validateTerms(file, doc);
    if (doc.kind === 'note') stats.notes += 1;
  }

  console.log(
    `검사: ${stats.files}파일 / 파트 ${stats.parts} / 용어 ${stats.terms} / 시각 섹션 ${stats.visualSections} / 노트 ${stats.notes}`,
  );
  if (errors.length > 0) {
    console.error(`\n오류 ${errors.length}건:`);
    for (const message of errors) console.error(`- ${message}`);
    process.exitCode = 1;
  } else {
    console.log('오류 없음');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
