#!/usr/bin/env bash

# 기능 추가 커밋[feat]
git commit -m "feat(auth): add social login"
# 결과: 새 기능 추가 이력을 남김

# 버그 수정 커밋[fix]
git commit -m "fix(api): handle empty response"
# 결과: 버그 수정 이력을 남김

# 문서 수정 커밋[docs]
git commit -m "docs: update setup guide"
# 결과: 문서 변경 이력을 남김

# 리팩터링 커밋[refactor]
git commit -m "refactor(ui): simplify modal props"
# 결과: 동작 변화 없는 구조 개선 이력을 남김

# 잡무 커밋[chore]
git commit -m "chore: update eslint config"
# 결과: 설정 또는 의존성 변경 이력을 남김

# 스타일 커밋[style]
git commit -m "style: lint code"
# 결과: 포맷 또는 스타일 정리 이력을 남김

# 기능 브랜치[feature branch]
git switch -c feature/profile-page
# 결과: 기능 개발용 브랜치 생성

# 핫픽스 브랜치[hotfix branch]
git switch -c hotfix/login-error
# 결과: 긴급 수정용 브랜치 생성

# 버그픽스 브랜치[bugfix branch]
git switch -c bugfix/cart-total
# 결과: 버그 수정용 브랜치 생성

# 페치[git fetch]
git fetch origin
# 결과: 원격 저장소 최신 이력을 가져옴

# 프룬[git prune]
git prune --dry-run
# 결과: 어떤 loose object 가 정리 대상인지 미리 확인

# 원격 삭제 브랜치 정리[git fetch --prune]
git fetch --prune origin
# 결과: 원격에서 이미 삭제된 origin/* 추적 브랜치를 정리

# 원격 추적 브랜치 정리[git remote prune]
git remote prune origin
# 결과: 더 이상 없는 원격 브랜치 참조를 한 번에 정리

# 로그 비교[git log --oneline --graph]
git log --oneline --graph --decorate
# 결과: 브랜치 이력 구조를 한눈에 확인

# 이력 추적[git blame]
git blame src/app.ts
# 결과: 각 줄의 마지막 수정 커밋과 작성자 확인

# 커밋 보기[git show]
git show HEAD~1
# 결과: 바로 전 커밋의 diff와 메타데이터 확인

# 스태시[git stash]
git stash
# 결과: 현재 변경을 임시로 치움

# 스태시 목록[git stash list]
git stash list
# 결과: 임시 저장한 항목 목록 확인

# 스태시 복원[git stash pop]
git stash pop
# 결과: 마지막 스태시를 복원하고 목록에서 제거
