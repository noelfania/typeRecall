# Type Recall

타이핑으로 손에 익히는 정적 학습 앱입니다. DB·백엔드 없이 예문·용어·노트를 연습합니다.

배포: https://noelfania.github.io/typeRecall/  
스택: SolidJS + TypeScript + Vite

## 학습 3층

| 층 | 탭 | 목표 |
|----|----|------|
| A. 어휘 | 용어 | 회의에서 바로 꺼내는 이름 — **타이핑** |
| B. 맥락 | 노트 | 언제 쓰는지 한 장 — **정독** |
| C. 판단 | 노트 + 시나리오 | 후보 비교·기본안·탈락 조건 — **고르기** |

언어 탭에서는 syntax 예문과 CSS 시각 자료를 따라 칩니다.

## 목표

- 서버 없이 바로 화면을 띄운다.
- DB 없이 예문 데이터를 빌드 시 불러와 연습한다.
- 복잡한 기능보다 **콘텐츠 골격**(용어·노트·시나리오)과 핵심 타이핑을 지킨다.

## 실행 방법

```bash
npm install
npm run dev
```

기본 개발 서버: `http://localhost:4000`

## 빌드·미리보기

```bash
npm run build
npm run preview
```

빌드 결과물은 `dist/`에 생성됩니다. preview·GitHub Pages는 `/typeRecall/` 하위 경로를 씁니다.

## 교육자료 데이터 (raw)

모든 교육자료의 정본은 **`assets/raw/`** 입니다. 구조와 스키마는 `assets/raw/README.md` 참고.

| category | 이름 | 내용 |
|----------|------|------|
| `syntax` | 코딩언어문법 | 언어·명령 타이핑 예문 (`syntax/<track>/*.yaml`) |
| `knowledge` | 설계및기술지식 | 용어 카드, 시각 자료, 참고 노트·판단 시나리오 (`knowledge/`) |

데이터 수정 후 검증:

```bash
npm run validate:raw
```

`dev`/`build` 전에 `validate:raw`와 `generate:lessons`가 자동 실행되어
raw YAML → `src/generated/*.ts` 변환과 시각 자료 이미지 복사(`public/knowledge/`)를 수행합니다.
`npm run dev` 실행 중에 raw를 고쳤다면 `npm run generate:lessons`를 다시 실행해야 화면에 반영됩니다.

## 현재 기능

- 언어 / 용어 / 노트 탭 (3열 Docs Shell)
- 예문·용어 타이핑, 문자 단위 비교, 오타 시 진행 정지
- 공백·줄바꿈·주석·키보드에 없는 기호는 입력 대상에서 제외(화면 표시문 기준 판정), 한글 IME 조합 미리보기
- 노트 정독 + 아키텍처 판단 시나리오 드릴
- 용어↔노트·시나리오 점프
- 정확도(고친 오타 포함)·WPM·진행·완료 표시, 테마, 파트 목차·단축키

## E2E (Playwright)

```bash
npx playwright install chromium
npm run test:e2e
```

`test:e2e`는 빌드 후 `preview`(포트 4000, `/typeRecall/`)를 띄우고 스모크·타이핑·판단 드릴·데스크톱 레이아웃·콘텐츠 무결성 테스트를 실행합니다. 스크린샷은 `test-results/`에 저장되며, GitHub Pages 배포도 이 테스트를 통과해야 진행됩니다.
