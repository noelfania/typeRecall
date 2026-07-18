# 지식 자료 작성 규칙

교육자료의 **단일 정본은 `assets/raw/`** 이다. 구조·스키마·큐레이션 원칙은
`assets/raw/README.md` 와 `assets/raw/manifest.yaml` 을 기준으로 한다.

- 두 카테고리: `syntax`(코딩언어문법) / `knowledge`(설계및기술지식)
- kind: `code-snippet` `command` `term` `visual` `note`
- 콘텐츠 추가·수정은 raw YAML에서만 한다. 원본 파일(`assets/typingSource/` 등)은 변환 후 삭제되어 존재하지 않는다.
- 수정 후 `npm run validate:raw` 로 id 중복·필수 필드·이미지 경로를 검증한다.
- 코드 파트(`parts[].display/typing`) 분할 기준은 `.cursor/rules/typingSource/Language-Part.md` 를 따른다.
- 애매해서 판단을 보류한 자료는 `assets/raw/_inbox/` 에 두고 manifest의 `inbox:` 에 기록한다.
- 앱 화면 연동(`src/generated/*.ts`)은 현재 끊어진 상태다. 스냅샷은 남아 있어 앱은 구 데이터로 구동되며, raw 기반 생성기 재작성은 다음 단계다.
