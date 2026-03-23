#!/usr/bin/env bash

# ============================================================
# P01. Bash / Shell 기본 패턴
# 따라치기용 예문. 한 줄씩 실행해 보자.
# ============================================================

# 현재 작업 디렉터리[current working directory]
pwd
# 결과: /home/user/project

# 파일 / 디렉터리 목록 나열[list]
ls
ls -al
# 결과: 숨김 파일까지 자세히 출력

# 디렉터리 이동[change directory]
cd /tmp
cd -
# 결과: 이전 디렉터리로 복귀

# 디렉터리 생성[make directory]
mkdir logs
mkdir -p app/cache/images
# 결과: 중간 경로까지 한 번에 생성

# 빈 파일 생성[create file]
touch app.log
# 결과: app.log 생성

# 표준 출력[stdout] 쓰기
echo "hello shell"
# 결과: hello shell

# 리다이렉션[redirection]
echo "first line" > app.log
echo "second line" >> app.log
# 결과: app.log에 줄 단위 추가

# 파일 내용 확인[read file]
cat app.log
head -n 1 app.log
tail -n 1 app.log
# 결과: 앞 / 뒤 줄 확인

# 검색[search]
grep "second" app.log
# 결과: second line

# 파이프[pipeline]
ls -al | grep ".log"
# 결과: .log 파일만 필터링

# 파일 복사[copy] / 이동[move]
cp app.log backup.log
mv backup.log archive.log
# 결과: 복사 후 이름 변경

# 파일 삭제[remove]
rm archive.log
# 결과: 파일 삭제

# 변수[variable]
user_name="kim"
echo "$user_name"
# 결과: kim

# 환경 변수[environment variable]
echo "$HOME"
echo "$SHELL"
# 결과: 홈 디렉터리 / 현재 셸

# 조건문[condition]
file_name="app.log"
if [ -f "$file_name" ]; then
  echo "file exists"
else
  echo "file missing"
fi
# 결과: file exists

# 반복문[loop]
for item in apple banana cherry; do
  echo "$item"
done
# 결과:
# apple
# banana
# cherry

# 명령 치환[command substitution]
today_value=$(date +%Y-%m-%d)
echo "$today_value"
# 결과: 2026-03-18

# 함수[function]
print_user() {
  local input_name="$1"
  echo "user=$input_name"
}
print_user "park"
# 결과: user=park

# 종료 코드[exit code]
grep "missing" app.log
echo $?
# 결과: 1 (검색 실패)
