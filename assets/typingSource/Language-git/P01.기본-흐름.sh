#!/usr/bin/env bash

# 깃 상태 확인[git status]
git status
# 결과: 현재 브랜치와 변경 파일 목록 확인

# 차이 확인[git diff]
git diff
git diff --staged
# 결과: 작업 트리와 스테이징 차이 확인

# 스테이징[git add]
git add src/app.ts
git add .
# 결과: 지정 파일 또는 전체 변경을 스테이징

# 커밋[git commit]
git commit -m "fix: handle null user response"
# 결과: 변경 이력을 메시지와 함께 저장

# 푸시[git push]
git push origin feature/login
# 결과: 현재 브랜치 변경을 원격 저장소에 반영

# 풀[git pull]
git pull origin main
# 결과: 원격 main 최신 이력을 가져와 현재 브랜치에 반영

# 브랜치 생성[git branch]
git branch feature/profile-page
git branch
# 결과: 새 브랜치 생성 후 목록 확인

# 체크아웃[git checkout]
git checkout main
# 결과: main 브랜치로 이동

# 스위치 생성[git checkout -b]
git checkout -b feature/cart
# 결과: 새 브랜치를 만들고 즉시 이동

# 스위치[git switch]
git switch main
git switch -c feature/search
# 결과: 브랜치 이동 또는 생성 후 이동

# 머지[git merge]
git merge feature/cart
# 결과: feature/cart 내용을 현재 브랜치에 병합

# 리베이스[git rebase]
git rebase main
# 결과: 현재 커밋을 최신 main 위로 다시 정렬

# 충돌 해결[merge conflict resolution]
git status
git add src/app.ts
git commit -m "fix: resolve merge conflict"
# 결과: 충돌 파일 수정 후 병합 마무리

# 리셋[git reset]
git reset --soft HEAD~1
# 결과: 마지막 커밋만 취소하고 변경 내용은 유지

# 리버트[git revert]
git revert abc1234
# 결과: 특정 커밋을 되돌리는 새 커밋 생성

# 체리픽[git cherry-pick]
git cherry-pick abc1234
# 결과: 필요한 커밋 하나만 현재 브랜치에 가져옴

# 작업 시작 흐름[status -> pull -> switch]
git status
git pull origin main
git switch -c feature/x
# 결과: 작업 시작 전에 최신 상태를 맞추고 새 브랜치로 이동

# 작업 저장 흐름[diff -> add -> commit]
git diff
git add .
git commit -m "feat: update dashboard widgets"
# 결과: 변경 검토 후 저장

# 반영 흐름[switch -> pull -> merge]
git switch main
git pull origin main
git merge feature/x
# 결과: 메인 브랜치에 기능 브랜치 내용을 반영