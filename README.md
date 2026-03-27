# 개발 예문 타이핑 연습

`assets/typingSource/Language-*` 예문을 따라 치면서 손에 익히는 프론트엔드 전용 타이핑 연습 앱입니다.

## 목표

- 서버 없이 바로 화면을 띄운다.
- DB 없이 `Language-*` 예문을 빌드 시 불러와 연습한다.
- 복잡한 기능 없이 핵심 타이핑 연습만 남긴다.

## 실행 방법

```bash
npm install
npm run dev
```

기본 개발 서버 주소:

```text
http://localhost:5173
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## 예문 데이터 생성

`dev` 와 `build` 실행 전에는 아래 스크립트가 자동으로 실행됩니다.

```bash
npm run generate:language-lessons
```

이 스크립트는 `assets/typingSource/Language-*` 파일을 읽어 `src/generated/languageLessons.ts` 를 생성합니다.

## 현재 기능

- 언어 트랙 선택
- 파일 단위 예문 선택
- 예문 원문 그대로 표시
- 입력값과 원문 문자 단위 비교
- 공백 / 줄바꿈 무시
- 오타 시 진행 정지
- 영문 `input` / 한글 `compositionend` 분리 처리
- 조합 중 현재 글자 미리보기
- 진행률 / 정확도 표시
- 다시 시작 / 다음 예문 이동

## 예문 소스

- `assets/typingSource/Language-JavaScript`
- `assets/typingSource/Language-TypeScript`
- `assets/typingSource/Language-Python`
- `assets/typingSource/Language-go`
- `assets/typingSource/Language-Java`
- `assets/typingSource/Language-Rust`
- `assets/typingSource/Language-SQL`
- `assets/typingSource/Language-git`
- `assets/typingSource/Language-bash-Shell`
- `assets/typingSource/Language-CSS`
- `assets/typingSource/Language-RegEx-for-Javascript`
