# Git Commit Message Guide

> **기본 공식** `[type]: [Verb] [Target] ([Context])`
>
> 예시: `feat: Add pagination (to search results)`

---

## feat — 새로운 기능 추가 · 기능 확장 · 외부 연동

| Verb | 의미 | 예시 | 한국어 |
|------|------|------|--------|
| `Add` | 추가하다 | `feat: Add login validation logic` | 로그인 유효성 검사 로직 추가 |
| `Implement` | 구현하다 | `feat: Implement dark mode toggle` | 다크모드 토글 기능 구현 |
| `Support` | 지원하다 | `feat: Support CSV export for transaction history` | 거래 내역 CSV 내보내기 지원 |
| `Integrate` | 연동하다 | `feat: Integrate Kakao Maps API for store locations` | 매장 위치 확인을 위한 카카오맵 연동 |
| `Enable` | 활성화하다 | `feat: Enable auto-save on post editor` | 게시글 에디터 자동 저장 기능 활성화 |
| `Allow` | 허용하다 | `feat: Allow users to upload multiple photos` | 사용자가 여러 사진을 업로드할 수 있도록 허용 |
| `Introduce` | 도입하다 | `feat: Introduce new landing page design` | 새로운 랜딩 페이지 디자인 도입 |
| `Provide` | 제공하다 | `feat: Provide default values for user settings` | 사용자 설정에 기본값 제공 |

---

## fix — 버그 수정 · 오류 대응 · 예외 처리 · 안정성 강화

| Verb | 의미 | 예시 | 한국어 |
|------|------|------|--------|
| `Fix` | 수정하다 | `fix: Fix crash on image upload` | 이미지 업로드 시 크래시 오류 수정 |
| `Fix` | 수정하다 | `fix: Fix typo in navigation menu` | 네비게이션 메뉴의 오타 수정 |
| `Fix` | 수정하다 | `fix: Fix broken links in footer` | 푸터의 깨진 링크 수정 |
| `Resolve` | 해결하다 | `fix: Resolve memory leak in long-running lists` | 장시간 실행되는 리스트의 메모리 누수 해결 |
| `Resolve` | 해결하다 | `fix: Resolve race condition in login flow` | 로그인 흐름의 레이스 컨디션 해결 |
| `Prevent` | 방지하다 | `fix: Prevent double-click on checkout button` | 결제 버튼 중복 클릭 방지 |
| `Prevent` | 방지하다 | `fix: Prevent infinite loop in scroll handler` | 스크롤 핸들러의 무한 루프 방지 |
| `Ensure` | 보장하다 | `fix: Ensure auth token is refreshed before expiry` | 만료 전 토큰 갱신 보장 |
| `Ensure` | 보장하다 | `fix: Ensure consistent date formatting` | 일관된 날짜 포맷 보장 |
| `Handle` | 처리하다 | `fix: Handle network timeout during file upload` | 파일 업로드 중 네트워크 타임아웃 처리 |
| `Handle` | 처리하다 | `fix: Handle edge case for empty search results` | 검색 결과가 없을 때의 예외 케이스 처리 |

---

## refactor — 기능 변경 없이 코드 구조 개선 · 가독성 향상 · 기술 부채 해소

| Verb | 의미 | 예시 | 한국어 |
|------|------|------|--------|
| `Extract` | 추출/분리하다 | `refactor: Extract validation logic to a separate helper` | 유효성 검사 로직을 별도 헬퍼로 분리 |
| `Extract` | 추출/분리하다 | `refactor: Extract reusable hook for API calls` | API 호출을 위한 재사용 가능한 훅 추출 |
| `Simplify` | 단순화하다 | `refactor: Simplify nested ternary operators` | 중첩된 삼항 연산자 구조 단순화 |
| `Simplify` | 단순화하다 | `refactor: Simplify conditional rendering logic` | 조건부 렌더링 로직 단순화 |
| `Rename` | 이름 변경 | `refactor: Rename confusing variables in payment service` | 결제 서비스의 모호한 변수명 변경 |
| `Replace` | 교체하다 | `refactor: Replace Fetch API with Axios for consistency` | 일관성을 위해 Fetch를 Axios로 교체 |
| `Replace` | 교체하다 | `refactor: Replace hardcoded strings with constants` | 하드코딩된 문자열을 상수로 교체 |
| `Migrate` | 마이그레이션 | `refactor: Migrate from class components to functional` | 클래스 컴포넌트를 함수형으로 마이그레이션 |
| `Optimize` | 최적화하다 | `refactor: Optimize heavy loop performance` | 무거운 루프문의 성능 최적화 |
| `Refine` | 개선하다 | `refactor: Refine styling logic for better readability` | 가독성을 위해 스타일링 로직 개선 |

---

## chore / style — 환경 설정 · 버전 관리 · 코드 정리

| Verb | 의미 | 예시 | 한국어 |
|------|------|------|--------|
| `Bump` | 버전 올리다 | `chore: Bump Next.js version to 15.x` | Next.js 버전을 15.x로 올림 |
| `Upgrade` | 업그레이드 | `chore: Upgrade React to version 19.0` | 리액트 버전을 19.0으로 업그레이드 |
| `Configure` | 설정하다 | `chore: Configure CORS policy for development` | 개발 환경용 CORS 정책 설정 |
| `Configure` | 설정하다 | `chore: Configure environment-specific variables` | 환경별 변수 설정 |
| `Set up` | 구성하다 | `chore: Set up ESLint and Husky` | ESLint와 Husky 설정 |
| `Remove` | 제거하다 | `chore: Remove unused imports and logs` | 사용하지 않는 import문 및 로그 제거 |
| `Clean up` | 정리하다 | `style: Clean up console logs and commented-out code` | 콘솔 로그 및 주석 처리된 코드 정리 |
| `Align` | 정렬 수정 | `style: Align text-icons in the navigation bar` | 네비게이션 바의 텍스트와 아이콘 정렬 수정 |
| `Format` | 포맷하다 | `style: Format code with Prettier` | Prettier를 이용한 코드 포맷팅 |

---

## test — 테스트 추가 · 커버리지

| Verb | 의미 | 예시 | 한국어 |
|------|------|------|--------|
| `Add` | 추가하다 | `test: Add unit tests for password encryption` | 비밀번호 암호화 단위 테스트 추가 |
| `Increase` | 높이다 | `test: Increase test coverage for billing logic` | 결제 로직 테스트 커버리지 확대 |

---

## docs — 문서화 · README · 주석

| Verb | 의미 | 예시 | 한국어 |
|------|------|------|--------|
| `Update` | 업데이트 | `docs: Update README.md with API guide` | README에 API 가이드 업데이트 |
| `Describe` | 기술하다 | `docs: Describe deployment process in README` | README에 배포 프로세스 기술 |
| `Clarify` | 설명 추가 | `docs: Clarify usage of auth parameters` | 인증 파라미터 사용법 설명 추가 |
| `Add` | 추가하다 | `docs: Add JSDoc comments to utility functions` | 유틸리티 함수에 JSDoc 주석 추가 |

---

## 상황별 한 줄 정리

| 상황 | 동사 |
|------|------|
| 기존 기능을 더 좋게 만들었을 때 | `Improve [기능명]` |
| 문제가 생기지 않도록 막았을 때 | `Prevent [문제현상]` |
| 필요 없는 걸 없앴을 때 | `Remove [대상]` |
| 부족한 부분을 채웠을 때 | `Complete [작업내용]` |
| 설정을 바꿨을 때 | `Adjust [설정값]` |