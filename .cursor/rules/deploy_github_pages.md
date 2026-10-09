# GitHub Pages 배포 가이드

> Cursor 요약: `.cursor/rules/deploy.mdc`  
> 제품 공통: `.cursor/rules/project-standards.mdc`

## 목표

- Vite 빌드 산출물 `dist/`를 **GitHub Pages**로 호스팅한다.
- NAS·Docker·nginx 설정은 사용하지 않는다.

## 저장소

- Remote: `https://github.com/noelfania/typeRecall`
- 예상 URL: `https://noelfania.github.io/typeRecall/`
- `base` 경로: `/typeRecall/` (`vite.config.ts`)

## 자동 배포 (권장)

1. GitHub → Settings → Pages → Source: **GitHub Actions**
2. `main`에 push하면 `.github/workflows/deploy-pages.yml`이 빌드·배포한다.
3. Actions 탭에서 workflow 성공 여부를 확인한다.

## 로컬에서 확인

```bash
npm install
npm run build
npm run preview
```

빌드·preview `base`가 `/typeRecall/`이므로 로컬 확인도 `http://127.0.0.1:4000/typeRecall/` 기준으로 자산을 읽는다.
(개발 서버 `npm run dev`만 루트 `/`.)

## 체크리스트

- [ ] Pages Source가 GitHub Actions로 설정됨
- [ ] `npm run validate:raw` (콘텐츠 변경 시; `prebuild`에도 포함)
- [ ] `npm run build` 통과
- [ ] `npm run test:e2e` 통과 (CI Verify 워크플로)
- [ ] Actions deploy 성공
- [ ] `https://noelfania.github.io/typeRecall/` 접속·탭·visual 이미지 동작 확인
