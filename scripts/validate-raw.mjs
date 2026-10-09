// assets/raw 정합성 검증: 필수 필드, id 중복, 이미지 경로, 시나리오→용어 링크
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

function validateNoteScenarios(file, doc, termIds) {
  if (!Array.isArray(doc.scenarios)) return;
  for (const scenario of doc.scenarios) {
    checkId(file, scenario.id);
    if (!scenario.title) fail(file, `scenario title 누락: ${scenario.id}`);
    if (!scenario.context) fail(file, `scenario context 누락: ${scenario.id}`);
    if (!scenario.symptom) fail(file, `scenario symptom 누락: ${scenario.id}`);
    if (!scenario.defaultPick) fail(file, `scenario defaultPick 누락: ${scenario.id}`);
    if (!scenario.rationale) fail(file, `scenario rationale 누락: ${scenario.id}`);
    if (!Array.isArray(scenario.options) || scenario.options.length === 0) {
      fail(file, `scenario options 비어 있음: ${scenario.id}`);
      continue;
    }
    const optionIds = new Set();
    for (const option of scenario.options) {
      if (!option.id || !option.label) {
        fail(file, `scenario option id/label 누락: ${scenario.id}`);
      }
      if (optionIds.has(option.id)) {
        fail(file, `scenario option id 중복: ${scenario.id}/${option.id}`);
      }
      optionIds.add(option.id);
      if (!option.whenPreferred) fail(file, `whenPreferred 누락: ${scenario.id}/${option.id}`);
      if (!option.whenAvoid) fail(file, `whenAvoid 누락: ${scenario.id}/${option.id}`);
    }
    if (!optionIds.has(scenario.defaultPick)) {
      fail(file, `defaultPick이 options에 없음: ${scenario.id}/${scenario.defaultPick}`);
    }
    for (const termId of scenario.relatedTermIds ?? []) {
      if (!termIds.has(termId)) {
        fail(file, `relatedTermIds 없음: ${scenario.id} → ${termId}`);
      }
    }
  }
}

function validateNoteCrossRefs(file, doc, termIds, scenarioIds, noteIds) {
  for (const termId of doc.relatedTermIds ?? []) {
    if (!termIds.has(termId)) {
      fail(file, `relatedTermIds 없음: ${doc.id} → ${termId}`);
    }
  }
  for (const scenarioId of doc.relatedScenarioIds ?? []) {
    if (!scenarioIds.has(scenarioId)) {
      fail(file, `relatedScenarioIds 없음: ${doc.id} → ${scenarioId}`);
    }
  }
  for (const noteId of doc.relatedNoteIds ?? []) {
    if (!noteIds.has(noteId)) {
      fail(file, `relatedNoteIds 없음: ${doc.id} → ${noteId}`);
    }
  }
}

function validateVisual(file, doc) {
  if (!doc.title?.ko) fail(file, 'title.ko 누락');
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
  /** @type {{ file: string, doc: object }[]} */
  const parsed = [];

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
    parsed.push({ file, doc });
  }

  const termIds = new Set();
  const scenarioIds = new Set();
  const noteIds = new Set();
  for (const { doc } of parsed) {
    if (doc.kind === 'term') {
      for (const term of doc.terms ?? []) {
        if (term?.id) termIds.add(term.id);
      }
    }
    if (doc.kind === 'note') {
      if (doc.id) noteIds.add(doc.id);
      for (const scenario of doc.scenarios ?? []) {
        if (scenario?.id) scenarioIds.add(scenario.id);
      }
    }
  }

  for (const { file, doc } of parsed) {
    stats.files += 1;

    if (doc.kind === 'visual') {
      checkId(file, doc.id);
      validateVisual(file, doc);
      continue;
    }

    validateEnvelope(file, doc);
    if (doc.kind === 'code-snippet' || doc.kind === 'command') validateParts(file, doc);
    if (doc.kind === 'term') validateTerms(file, doc);
    if (doc.kind === 'note') {
      validateNoteScenarios(file, doc, termIds);
      validateNoteCrossRefs(file, doc, termIds, scenarioIds, noteIds);
      stats.notes += 1;
    }
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
