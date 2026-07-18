# 개발 예문 타이핑 연습

개발 예문과 실무 용어를 직접 따라 치면서 손에 익히는 프론트엔드 전용 타이핑 연습 앱입니다.

스택: SolidJS + TypeScript + Vite

## 목표

- 서버 없이 바로 화면을 띄운다.
- DB 없이 예문 데이터를 빌드 시 불러와 연습한다.
- 복잡한 기능 없이 핵심 타이핑 연습만 남긴다.

## 실행 방법

```bash
npm install
npm run dev
```

기본 개발 서버 주소:

```text
http://localhost:4000
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## 교육자료 데이터 (raw)

모든 교육자료의 정본은 **`assets/raw/`** 입니다. 구조와 스키마는 `assets/raw/README.md` 참고.

| category | 이름 | 내용 |
|----------|------|------|
| `syntax` | 코딩언어문법 | 언어·명령 타이핑 예문 (`syntax/<track>/*.yaml`) |
| `knowledge` | 설계및기술지식 | 용어 카드, 시각 자료, 참고 노트 (`knowledge/`) |

데이터 수정 후 검증:

```bash
npm run validate:raw
```

`dev`/`build` 전에 `generate:lessons`가 자동 실행되어
raw YAML → `src/generated/*.ts` 변환과 시각 자료 이미지 복사(`public/knowledge/`)를 수행합니다.
즉 **raw만 고치면 화면에 반영**됩니다.

## 현재 기능

- 언어/용어 탭, 트랙·레슨 선택 (3열 Docs Shell)
- 예문 원문 그대로 표시(주석 포함 타이핑), 입력값과 문자 단위 비교
- 공백 / 줄바꿈 무시, 오타 시 진행 정지
- 영문 `input` / 한글 `compositionend` 분리 처리
- 조합 중 현재 글자 미리보기
- 진행률 / 정확도 표시
- 활성 카드 세로 중앙 정렬, 스크롤에 반응하는 우측 파트 목차
- 다시 시작 / 이전·다음 파트 이동 (단축키, 우하단 컨트롤)

## E2E (Playwright)

```bash
npx playwright install chromium
npm run test:e2e
```

`test:e2e`는 빌드 후 `preview`(포트 4000)를 띄우고 스모크 테스트를 실행합니다.
