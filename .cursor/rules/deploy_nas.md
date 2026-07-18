# NAS 배포 가이드

## 목표

- 개발 PC에서 프로젝트를 빌드하고 NAS 정적 호스팅 경로로 `dist/` 산출물을 전달한다.
- NAS에서는 소스 빌드 대신 준비된 정적 파일을 받아 서빙한다.

## 현재 저장소 상태

- 이 프로젝트는 SolidJS + Vite 기반의 정적 프론트엔드 앱이다.
- 배포 산출물은 `npm run build` 결과인 `dist/` 디렉터리이다.
- Docker, nginx 설정 파일은 저장소에 포함하지 않는다.

## 1. 개발 PC에서 빌드

```bash
npm install
npm run build
```

빌드가 끝나면 `dist/` 디렉터리가 생성된다.

## 2. NAS로 파일 전달

전달 대상은 `dist/` 디렉터리 전체이다.

전달 방법 예시:
- `scp`
- `rsync`
- NAS 공유 폴더 업로드

예시:

```bash
rsync -av dist/ <nas-user>@<nas-host>:/volume1/web/gmtl-type-recall/
```

## 3. NAS에서 정적 호스팅

NAS에 이미 구성된 정적 호스팅(웹 스테이션, 역방향 프록시, CDN 등) 경로에 `dist/` 내용을 배치한다.

SPA fallback이 필요하면 NAS 쪽 웹 서버 설정에서 `index.html`로 되돌리도록 구성한다.

## 현재 배포 구조

1. 개발 PC에서 `npm run build`
2. `dist/` 생성
3. NAS 정적 호스팅 경로로 전달

## 체크리스트

- `npm run build` 통과
- `dist/` 생성 확인
- NAS 정적 호스팅 경로에 파일 반영 확인
- 브라우저에서 앱 접속 확인
