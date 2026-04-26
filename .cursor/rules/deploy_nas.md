# NAS 배포 가이드

## 목표

- 개발 PC에서 프로젝트를 빌드하고 NAS에서 실행 가능한 형태로 전달한다.
- 최종 목표 환경은 `linux/arm64` NAS이다.
- NAS에서는 소스 빌드 대신 준비된 산출물 또는 이미지를 받아 실행하는 방향을 유지한다.

## 현재 저장소 상태

- 이 프로젝트는 React + Vite 기반의 정적 프론트엔드 앱이다.
- 현재 저장소에는 아래 배포 파일이 존재한다.
  - `Dockerfile`
  - `docker-compose.yml`
  - `nginx/default.conf`
- 이미지명과 tar 파일명은 프로젝트명 기준으로 통일한다.
  - Docker image: `gmtl-type-recall:latest`
  - Saved tar: `gmtl-type-recall-arm64.tar`

## 1. 개발 PC에서 tar 이미지 만들기

```bash
npm install
npm run lint
npm run build:deploy
```

- `build:deploy`는 아래 작업을 순서대로 수행한다.
  - `npm run build`
  - `docker buildx build --platform linux/arm64 -t gmtl-type-recall:latest --load .`
  - `docker save -o gmtl-type-recall-arm64.tar gmtl-type-recall:latest`
- 결과적으로 개발 PC에 `gmtl-type-recall-arm64.tar` 파일이 생성된다.

## 2. NAS로 파일 전달

전달 대상은 `gmtl-type-recall-arm64.tar` 파일이다.

전달 방법 예시:
- `scp`
- `rsync`
- NAS 공유 폴더 업로드

예시:

```bash
scp gmtl-type-recall-arm64.tar <nas-user>@<nas-host>:/volume1/docker/gmtl-type-recall/
```

## 3. NAS에서 이미지 불러오기

NAS에서 tar 파일을 받은 뒤 이미지를 불러온다.

```bash
docker load -i gmtl-type-recall-arm64.tar
```

불러온 뒤 아래 이미지가 생겨야 한다.

```bash
docker images | grep gmtl-type-recall
```

## 4. NAS에서 컨테이너 실행

`docker-compose.yml`을 NAS로 함께 전달한 뒤 아래 명령으로 실행한다.

```bash
docker compose up -d
```

기본 포트 매핑:
- `9995:80`

즉 브라우저에서는 기본적으로 `http://<nas-host>:9995` 으로 접속한다.

## 현재 배포 구조

1. 개발 PC에서 `npm run build:deploy`
2. `gmtl-type-recall-arm64.tar` 생성
3. NAS로 tar 및 compose 파일 전달
4. NAS에서 `docker load -i gmtl-type-recall-arm64.tar`
5. NAS에서 `docker compose up -d`

## 포함 파일 역할

- `Dockerfile`
  - nginx 이미지를 기반으로 `dist/` 정적 파일을 포함한다.
- `nginx/default.conf`
  - 정적 파일 서빙과 SPA fallback(`try_files`)을 담당한다.
- `docker-compose.yml`
  - `gmtl-type-recall:latest` 이미지를 실행한다.

## 체크리스트

- `npm run lint` 통과
- `npm run build` 통과
- `npm run build:deploy` 통과
- `gmtl-type-recall-arm64.tar` 생성 확인
- NAS에 `docker-compose.yml`과 tar 파일 전달 확인
- NAS에서 `docker load` 성공 확인
- NAS에서 `docker compose up -d` 성공 확인
