---
name: type-recall-direction
description: >-
  Guards Type Recall product direction (3-layer learning A→B→C, raw-first,
  no product bloat). Use when auditing the service, adding/editing assets/raw
  content (terms/notes/scenarios/syntax), changing App UX/UI, reviewing PRs,
  planning features, or when the user mentions 방향성·철학·콘텐츠·판단
  시나리오·용어·노트·확장성.
---

# Type Recall 방향성 가드

정적 타이핑·학습 앱. DB·백엔드 없음. 정본은 `assets/raw/`만.

## 한 줄 목표

회의에서 **이름을 꺼내고**(A), **맥락을 읽고**(B), **설계 판단을 고른다**(C).  
타이핑은 수단. 목적은 판단 훈련.

## 반드시 지킬 것

1. **콘텐츠 골격 우선** — UI·기능은 스키마가 막힐 때만.
2. **고빈도만** — 주 1회 회의·설계에서 안 나오면 넣지 않는다.
3. **정본 = raw** — `assets/raw/` 수정 → `npm run validate:raw` → `generate:lessons`.
4. **시나리오는 정답 암기 금지** — `defaultPick` + `whenPreferred` / `whenAvoid`.
5. **헷갈리는 묶음** → 시나리오 남발 전에 **비교 노트 한 장**.

## 절대 하지 말 것

- DB·인증·대시보드·“오늘의 추천”·자유 서술 채점
- 용어만 늘리고 판단·비교 링크 없이 방치
- `assets/typingSource/` 등 폐기 경로를 정본처럼 취급
- Docker/NAS 배포 복원
- 학습자 궤적(FE→BE→화면설계→아키텍처)과 무관한 주제 정본 편입  
  (애매하면 `_inbox/` + manifest `inbox:`)

## 작업 분기

| 요청 | 할 일 |
|------|--------|
| 용어 추가 | 시나리오/비교노트 연결 가능한지 먼저 확인. 고아 카드 금지에 가깝게. |
| 시나리오 추가 | `context`/`symptom` = 화면 상세·OpenAPI·Figma Empty/Loading 톤. options 2~3. |
| syntax 예문 | `.cursor/rules/syntax/authoring.mdc`. 중복 트랙·희귀 케이스 거부. |
| UX/UI | 3탭·Docs 셸 유지. 카드는 상호작용 단위만. 첫 진입이 타이핑만 보이지 않게 할지 **사용자에게 확인** 후. |
| 기능 제안 | “콘텐츠 스키마가 막혔는가?” → No면 raw 먼저. |
| 전수 감사 | [audit-checklist.md](audit-checklist.md) 실행 후 P0~P2로 보고. |

## 작성 후 필수

```bash
npm run validate:raw
npm run generate:lessons
```

판단 드릴·용어↔노트 점프를 건드리면:

```bash
npm run test:e2e
```

## 현재 알려진 철학 갭 (에이전트가 악화시키지 말 것)

- 층 C 시나리오 ≈ **architecture 5건뿐**. REST/FE 쪽 시나리오를 추가하는 방향은 OK, 무관 주제 확장은 금지.
- 용어 → 시나리오/노트 **발신 링크 거의 0**. 새 용어는 가능하면 `relatedNoteIds`/`relatedScenarioIds`를 채운다.
- 노트 10개 중 교차링크 없는 것이 다수. 노트 추가 시 `relatedTermIds` 필수에 가깝게.
- `javascript` + `javascript-es6` 주제 중복 — 새 ES6 예문 넣기 전에 기존 트랙 보강 우선.
- validate가 `_inbox` YAML도 집계함 — inbox를 정본처럼 키우지 말 것.

상세 규칙: `.cursor/rules/project-standards.mdc`, `knowledge/authoring.mdc`, `syntax/authoring.mdc`.
