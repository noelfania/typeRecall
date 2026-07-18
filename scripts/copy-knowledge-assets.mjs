// raw 시각 자료(이미지·meta)를 정적 서빙 경로로 복사한다.
// src/generated 스냅샷이 참조하는 /knowledge/reference/visual/* URL 구조를 유지한다.
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'assets', 'raw', 'knowledge', 'visual');
const targetDir = path.join(rootDir, 'public', 'knowledge', 'reference', 'visual');

if (!existsSync(sourceDir)) {
  console.warn('시각 자료 폴더가 없어 복사를 건너뜁니다.');
  process.exit(0);
}

rmSync(path.join(rootDir, 'public', 'knowledge'), { recursive: true, force: true });
mkdirSync(path.dirname(targetDir), { recursive: true });
cpSync(sourceDir, targetDir, { recursive: true });
console.log('복사 완료: assets/raw/knowledge/visual → public/knowledge/reference/visual');
