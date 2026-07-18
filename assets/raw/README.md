# 교육자료 raw 데이터 (정본)

이 폴더가 프로젝트 모든 교육자료의 **단일 정본[canonical source]** 이다.
`assets/typingSource/` 등 원본 파일은 변환 후 삭제되었고, 이후 콘텐츠 수정·추가는 여기서만 한다.
앱 화면 연동(생성기 → `src/generated/`)은 별도 단계로, 현재는 끊어 둔 상태다.

## 두 카테고리

| category | 이름 | 내용 |
|----------|------|------|
| `syntax` | 코딩언어문법 | 직접 따라 칠 수 있는 코드·명령 예문 |
| `knowledge` | 설계및기술지식 | 용어 카드, 시각 자료, 참고 노트 |

## 폴더 구조

```text
assets/raw/
  manifest.yaml            # 전체 인덱스
  syntax/<track>/*.yaml    # 언어별 레슨 (javascript, git, sql, ...)
  knowledge/
    terms/*.yaml           # 용어 카드 (kind: term)
    visual/<slug>/         # 이미지+캡션 시각 단위 (kind: visual)
      NN-section/meta.yaml
      images/
    notes/*.yaml           # 정독용 참고 노트 (kind: note)
```

## 공통 envelope

모든 YAML은 아래 공통 필드로 시작한다. 새 kind가 생겨도 이 틀은 유지한다.

```yaml
id: language-javascript-p01   # 전역 유일
category: syntax              # syntax | knowledge
kind: code-snippet            # code-snippet | command | term | visual | note
title: P01.변수-구조분해
source:
  origin: ...                 # 출처 (삭제된 원본 경로, chat-raw 날짜 등)
```

### kind별 본문

- **`code-snippet` / `command`** (`category: syntax`) — `language`, `track{id,label}`, `parts[]`
  - part: `id`, `title`, `display`(주석 포함 화면 표시용), `typing`(실제 타이핑 대상)
  - 파트 분할 규칙은 `.cursor/rules/typingSource/Language-Part.md` 기준
- **`term`** — `topic`, `terms[]`
  - term: `id`, `section`, `title`, `prompt`(설명), `answer`(타이핑할 영어), `aliases[]`(복수 답안), `example`
- **`visual`** — 섹션 폴더마다 `meta.yaml` (`title.ko`, `caption.ko`, `explanation.ko`, `images[]`, `typingUnits[]`)
- **`note`** — `topic` + 자유 본문(`body` 또는 구조화 필드). 타이핑 비대상 참고 자료.

## 큐레이션 원칙

- 10년차 개발자가 실무에서 자주 꺼내 쓰는 고빈도 지식만 담는다 (고빈도 게이트).
- 같은 패턴을 두 번 설명하는 반복 예문은 넣지 않는다.
- 중요한 기술 용어는 `한글[영어]` 형식으로 적는다.
- 애매해서 판단을 보류한 자료는 `_inbox/`에 두고 manifest에 표시한다.

## 변환 이력

- 2026-07-09: `assets/typingSource/` 전체(Language-* 32레슨 441파트, Rule-* 109용어)를
  `scripts/convert-to-raw.mjs`로 변환. symbol-english.txt는 오탈자 정규화 후 수기 재작성(30카드).
  visual(css-grid 6·css-selector 32섹션)은 구 `assets/knowledge/reference/visual/`에서 이동.
  채팅 수집 raw(정규식 참고표, UI 분류, SQL·dev·web 용어 추가분, TS/HTTP 노트, Git 복구·정리)를 등록.
