#!/usr/bin/env bash

# ============================================================
# P02. Bash / Shell 실무 패턴
# ============================================================

# 현재 셸 프로세스 확인[current shell process]
ps -p $$
# 결과: 현재 셸 PID 출력

# 여러 파일 한 번에 생성[brace expansion]
touch log_{a,b,c}.txt
# 결과: log_a.txt log_b.txt log_c.txt 생성

# 와일드카드[glob]
ls *.txt
# 결과: .txt 파일만 출력

# 파일 개수 세기[count]
ls -1 *.txt | wc -l
# 결과: 3

# 표준 출력 + 표준 에러 분리[stdout / stderr]
ls exists.txt 1> out.log 2> err.log
# 결과: 성공 출력은 out.log, 에러는 err.log

# 성공일 때만 다음 명령 실행[and list]
mkdir -p temp_dir && echo "created"
# 결과: created

# 실패했을 때만 다음 명령 실행[or list]
ls not_found.txt || echo "fallback"
# 결과: fallback

# xargs 패턴[xargs pattern]
echo "a.txt b.txt" | xargs touch
# 결과: a.txt, b.txt 생성

# awk 기본 패턴[awk]
echo "kim 30" | awk '{print $1}'
# 결과: kim

# sed 기본 치환[sed replace]
echo "hello world" | sed 's/world/shell/'
# 결과: hello shell

# 백그라운드 실행[background job]
sleep 30 &
jobs
# 결과: 백그라운드 작업 표시

# 압축[archive]
tar -czf logs.tar.gz *.txt
# 결과: tar.gz 생성

# 환경 변수 내보내기[export]
export APP_ENV=local
echo "$APP_ENV"
# 결과: local
