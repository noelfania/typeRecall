import type { LanguageTrack } from '../data/languageLessonTypes';

export const languageTracks: LanguageTrack[] = [
  {
    "id": "language-bash-shell",
    "label": "Bash / Shell",
    "folderName": "Language-bash-Shell",
    "lessons": [
      {
        "id": "language-bash-shell-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.sh",
        "sourcePath": "assets/typingSource/Language-bash-Shell/P01.기본-패턴.sh",
        "language": "shell",
        "parts": [
          {
            "id": "language-bash-shell-p01-part-1",
            "title": "현재 작업 디렉터리[current working directory]",
            "content": "pwd",
            "displayContent": "# 현재 작업 디렉터리[current working directory]\npwd\n# 결과: /home/user/project"
          },
          {
            "id": "language-bash-shell-p01-part-2",
            "title": "파일 / 디렉터리 목록 나열[list]",
            "content": "ls\nls -al",
            "displayContent": "# 파일 / 디렉터리 목록 나열[list]\nls\nls -al\n# 결과: 숨김 파일까지 자세히 출력"
          },
          {
            "id": "language-bash-shell-p01-part-3",
            "title": "디렉터리 이동[change directory]",
            "content": "cd /tmp\ncd -",
            "displayContent": "# 디렉터리 이동[change directory]\ncd /tmp\ncd -\n# 결과: 이전 디렉터리로 복귀"
          },
          {
            "id": "language-bash-shell-p01-part-4",
            "title": "디렉터리 생성[make directory]",
            "content": "mkdir logs\nmkdir -p app/cache/images",
            "displayContent": "# 디렉터리 생성[make directory]\nmkdir logs\nmkdir -p app/cache/images\n# 결과: 중간 경로까지 한 번에 생성"
          },
          {
            "id": "language-bash-shell-p01-part-5",
            "title": "빈 파일 생성[create file]",
            "content": "touch app.log",
            "displayContent": "# 빈 파일 생성[create file]\ntouch app.log\n# 결과: app.log 생성"
          },
          {
            "id": "language-bash-shell-p01-part-6",
            "title": "표준 출력[stdout] 쓰기",
            "content": "echo \"hello shell\"",
            "displayContent": "# 표준 출력[stdout] 쓰기\necho \"hello shell\"\n# 결과: hello shell"
          },
          {
            "id": "language-bash-shell-p01-part-7",
            "title": "리다이렉션[redirection]",
            "content": "echo \"first line\" > app.log\necho \"second line\" >> app.log",
            "displayContent": "# 리다이렉션[redirection]\necho \"first line\" > app.log\necho \"second line\" >> app.log\n# 결과: app.log에 줄 단위 추가"
          },
          {
            "id": "language-bash-shell-p01-part-8",
            "title": "파일 내용 확인[read file]",
            "content": "cat app.log\nhead -n 1 app.log\ntail -n 1 app.log",
            "displayContent": "# 파일 내용 확인[read file]\ncat app.log\nhead -n 1 app.log\ntail -n 1 app.log\n# 결과: 앞 / 뒤 줄 확인"
          },
          {
            "id": "language-bash-shell-p01-part-9",
            "title": "검색[search]",
            "content": "grep \"second\" app.log",
            "displayContent": "# 검색[search]\ngrep \"second\" app.log\n# 결과: second line"
          },
          {
            "id": "language-bash-shell-p01-part-10",
            "title": "파이프[pipeline]",
            "content": "ls -al | grep \".log\"",
            "displayContent": "# 파이프[pipeline]\nls -al | grep \".log\"\n# 결과: .log 파일만 필터링"
          },
          {
            "id": "language-bash-shell-p01-part-11",
            "title": "파일 복사[copy] / 이동[move]",
            "content": "cp app.log backup.log\nmv backup.log archive.log",
            "displayContent": "# 파일 복사[copy] / 이동[move]\ncp app.log backup.log\nmv backup.log archive.log\n# 결과: 복사 후 이름 변경"
          },
          {
            "id": "language-bash-shell-p01-part-12",
            "title": "파일 삭제[remove]",
            "content": "rm archive.log",
            "displayContent": "# 파일 삭제[remove]\nrm archive.log\n# 결과: 파일 삭제"
          },
          {
            "id": "language-bash-shell-p01-part-13",
            "title": "변수[variable]",
            "content": "user_name=\"kim\"\necho \"$user_name\"",
            "displayContent": "# 변수[variable]\nuser_name=\"kim\"\necho \"$user_name\"\n# 결과: kim"
          },
          {
            "id": "language-bash-shell-p01-part-14",
            "title": "환경 변수[environment variable]",
            "content": "echo \"$HOME\"\necho \"$SHELL\"",
            "displayContent": "# 환경 변수[environment variable]\necho \"$HOME\"\necho \"$SHELL\"\n# 결과: 홈 디렉터리 / 현재 셸"
          },
          {
            "id": "language-bash-shell-p01-part-15",
            "title": "조건문[condition]",
            "content": "file_name=\"app.log\"\nif [ -f \"$file_name\" ]; then\n  echo \"file exists\"\nelse\n  echo \"file missing\"\nfi",
            "displayContent": "# 조건문[condition]\nfile_name=\"app.log\"\nif [ -f \"$file_name\" ]; then\n  echo \"file exists\"\nelse\n  echo \"file missing\"\nfi\n# 결과: file exists"
          },
          {
            "id": "language-bash-shell-p01-part-16",
            "title": "반복문[loop]",
            "content": "for item in apple banana cherry; do\n  echo \"$item\"\ndone",
            "displayContent": "# 반복문[loop]\nfor item in apple banana cherry; do\n  echo \"$item\"\ndone\n# 결과:\n# apple\n# banana\n# cherry"
          },
          {
            "id": "language-bash-shell-p01-part-17",
            "title": "명령 치환[command substitution]",
            "content": "today_value=$(date +%Y-%m-%d)\necho \"$today_value\"",
            "displayContent": "# 명령 치환[command substitution]\ntoday_value=$(date +%Y-%m-%d)\necho \"$today_value\"\n# 결과: 2026-03-18"
          },
          {
            "id": "language-bash-shell-p01-part-18",
            "title": "함수[function]",
            "content": "print_user() {\n  local input_name=\"$1\"\n  echo \"user=$input_name\"\n}\nprint_user \"park\"",
            "displayContent": "# 함수[function]\nprint_user() {\n  local input_name=\"$1\"\n  echo \"user=$input_name\"\n}\nprint_user \"park\"\n# 결과: user=park"
          },
          {
            "id": "language-bash-shell-p01-part-19",
            "title": "종료 코드[exit code]",
            "content": "grep \"missing\" app.log\necho $?",
            "displayContent": "# 종료 코드[exit code]\ngrep \"missing\" app.log\necho $?\n# 결과: 1 (검색 실패)"
          }
        ]
      },
      {
        "id": "language-bash-shell-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.sh",
        "sourcePath": "assets/typingSource/Language-bash-Shell/P02.실무-패턴.sh",
        "language": "shell",
        "parts": [
          {
            "id": "language-bash-shell-p02-part-1",
            "title": "현재 셸 프로세스 확인[current shell process]",
            "content": "ps -p $$",
            "displayContent": "# 현재 셸 프로세스 확인[current shell process]\nps -p $$\n# 결과: 현재 셸 PID 출력"
          },
          {
            "id": "language-bash-shell-p02-part-2",
            "title": "여러 파일 한 번에 생성[brace expansion]",
            "content": "touch log_{a,b,c}.txt",
            "displayContent": "# 여러 파일 한 번에 생성[brace expansion]\ntouch log_{a,b,c}.txt\n# 결과: log_a.txt log_b.txt log_c.txt 생성"
          },
          {
            "id": "language-bash-shell-p02-part-3",
            "title": "와일드카드[glob]",
            "content": "ls *.txt",
            "displayContent": "# 와일드카드[glob]\nls *.txt\n# 결과: .txt 파일만 출력"
          },
          {
            "id": "language-bash-shell-p02-part-4",
            "title": "파일 개수 세기[count]",
            "content": "ls -1 *.txt | wc -l",
            "displayContent": "# 파일 개수 세기[count]\nls -1 *.txt | wc -l\n# 결과: 3"
          },
          {
            "id": "language-bash-shell-p02-part-5",
            "title": "표준 출력 + 표준 에러 분리[stdout / stderr]",
            "content": "ls exists.txt 1> out.log 2> err.log",
            "displayContent": "# 표준 출력 + 표준 에러 분리[stdout / stderr]\nls exists.txt 1> out.log 2> err.log\n# 결과: 성공 출력은 out.log, 에러는 err.log"
          },
          {
            "id": "language-bash-shell-p02-part-6",
            "title": "성공일 때만 다음 명령 실행[and list]",
            "content": "mkdir -p temp_dir && echo \"created\"",
            "displayContent": "# 성공일 때만 다음 명령 실행[and list]\nmkdir -p temp_dir && echo \"created\"\n# 결과: created"
          },
          {
            "id": "language-bash-shell-p02-part-7",
            "title": "실패했을 때만 다음 명령 실행[or list]",
            "content": "ls not_found.txt || echo \"fallback\"",
            "displayContent": "# 실패했을 때만 다음 명령 실행[or list]\nls not_found.txt || echo \"fallback\"\n# 결과: fallback"
          },
          {
            "id": "language-bash-shell-p02-part-8",
            "title": "xargs 패턴[xargs pattern]",
            "content": "echo \"a.txt b.txt\" | xargs touch",
            "displayContent": "# xargs 패턴[xargs pattern]\necho \"a.txt b.txt\" | xargs touch\n# 결과: a.txt, b.txt 생성"
          },
          {
            "id": "language-bash-shell-p02-part-9",
            "title": "awk 기본 패턴[awk]",
            "content": "echo \"kim 30\" | awk '{print $1}'",
            "displayContent": "# awk 기본 패턴[awk]\necho \"kim 30\" | awk '{print $1}'\n# 결과: kim"
          },
          {
            "id": "language-bash-shell-p02-part-10",
            "title": "sed 기본 치환[sed replace]",
            "content": "echo \"hello world\" | sed 's/world/shell/'",
            "displayContent": "# sed 기본 치환[sed replace]\necho \"hello world\" | sed 's/world/shell/'\n# 결과: hello shell"
          },
          {
            "id": "language-bash-shell-p02-part-11",
            "title": "백그라운드 실행[background job]",
            "content": "sleep 30 &\njobs",
            "displayContent": "# 백그라운드 실행[background job]\nsleep 30 &\njobs\n# 결과: 백그라운드 작업 표시"
          },
          {
            "id": "language-bash-shell-p02-part-12",
            "title": "압축[archive]",
            "content": "tar -czf logs.tar.gz *.txt",
            "displayContent": "# 압축[archive]\ntar -czf logs.tar.gz *.txt\n# 결과: tar.gz 생성"
          },
          {
            "id": "language-bash-shell-p02-part-13",
            "title": "환경 변수 내보내기[export]",
            "content": "export APP_ENV=local\necho \"$APP_ENV\"",
            "displayContent": "# 환경 변수 내보내기[export]\nexport APP_ENV=local\necho \"$APP_ENV\"\n# 결과: local"
          }
        ]
      }
    ]
  },
  {
    "id": "language-css",
    "label": "CSS",
    "folderName": "Language-CSS",
    "lessons": [
      {
        "id": "language-css-p01",
        "title": "P01.핵심-패턴",
        "fileName": "P01.핵심-패턴.html",
        "sourcePath": "assets/typingSource/Language-CSS/P01.핵심-패턴.html",
        "language": "html",
        "parts": [
          {
            "id": "language-css-p01-part-1",
            "title": "P01.핵심-패턴",
            "content": "<!DOCTYPE html>\n<html lang=\"ko\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>CSS Practice</title>\n    <style>",
            "displayContent": "<!DOCTYPE html>\n<html lang=\"ko\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>CSS Practice</title>\n    <style>"
          },
          {
            "id": "language-css-p01-part-2",
            "title": "박스 크기 기준[box sizing] 통일",
            "content": "      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n      }\n\n      :root {",
            "displayContent": "      /* 박스 크기 기준[box sizing] 통일 */\n      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n      }\n\n      :root {"
          },
          {
            "id": "language-css-p01-part-3",
            "title": "전역 변수[custom property]",
            "content": "        --bg-color: #f5f7fb;\n        --card-color: #ffffff;\n        --accent-color: #2563eb;\n        --text-color: #1f2937;\n        --gap-size: 16px;\n      }",
            "displayContent": "        /* 전역 변수[custom property] */\n        --bg-color: #f5f7fb;\n        --card-color: #ffffff;\n        --accent-color: #2563eb;\n        --text-color: #1f2937;\n        --gap-size: 16px;\n      }"
          },
          {
            "id": "language-css-p01-part-4",
            "title": "전역 변수[custom property]",
            "content": "        --bg-color: #f5f7fb;\n        --card-color: #ffffff;\n        --accent-color: #2563eb;\n        --text-color: #1f2937;\n        --gap-size: 16px;\n      }\n\n      body {\n        margin: 0;\n        font-family: sans-serif;\n        background: var(--bg-color);\n        color: var(--text-color);\n      }\n\n      .page-wrapper {\n        min-height: 100vh;\n        display: grid;\n        place-items: center;\n        padding: 24px;\n      }\n\n      .card-grid {\n        width: min(900px, 100%);\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: var(--gap-size);\n      }\n\n      .card-item {\n        background: var(--card-color);\n        border: 1px solid #dbe3f0;\n        border-radius: 16px;\n        padding: 20px;\n        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);\n      }\n\n      .card-item.is-active {\n        border-color: var(--accent-color);\n        transform: translateY(-4px);\n      }\n\n      .title-text {\n        margin: 0 0 8px;\n        font-size: 20px;\n      }\n\n      .button-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 12px;\n        margin-top: 16px;\n      }\n\n      .primary-button {\n        padding: 10px 14px;\n        border: none;\n        border-radius: 10px;\n        background: var(--accent-color);\n        color: white;\n        cursor: pointer;\n      }\n\n      .primary-button:hover {\n        opacity: 0.9;\n      }\n\n      .primary-button:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n\n      .badge-text::before {",
            "displayContent": "        /* 전역 변수[custom property] */\n        --bg-color: #f5f7fb;\n        --card-color: #ffffff;\n        --accent-color: #2563eb;\n        --text-color: #1f2937;\n        --gap-size: 16px;\n      }\n\n      body {\n        margin: 0;\n        font-family: sans-serif;\n        background: var(--bg-color);\n        color: var(--text-color);\n      }\n\n      .page-wrapper {\n        min-height: 100vh;\n        display: grid;\n        place-items: center;\n        padding: 24px;\n      }\n\n      .card-grid {\n        width: min(900px, 100%);\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: var(--gap-size);\n      }\n\n      .card-item {\n        background: var(--card-color);\n        border: 1px solid #dbe3f0;\n        border-radius: 16px;\n        padding: 20px;\n        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);\n      }\n\n      .card-item.is-active {\n        border-color: var(--accent-color);\n        transform: translateY(-4px);\n      }\n\n      .title-text {\n        margin: 0 0 8px;\n        font-size: 20px;\n      }\n\n      .button-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 12px;\n        margin-top: 16px;\n      }\n\n      .primary-button {\n        padding: 10px 14px;\n        border: none;\n        border-radius: 10px;\n        background: var(--accent-color);\n        color: white;\n        cursor: pointer;\n      }\n\n      .primary-button:hover {\n        opacity: 0.9;\n      }\n\n      .primary-button:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n\n      .badge-text::before {"
          },
          {
            "id": "language-css-p01-part-5",
            "title": "의사 요소[pseudo element]",
            "content": "        content: \"#\";\n        margin-right: 4px;\n        color: var(--accent-color);\n      }\n\n      @media (max-width: 768px) {",
            "displayContent": "        /* 의사 요소[pseudo element] */\n        content: \"#\";\n        margin-right: 4px;\n        color: var(--accent-color);\n      }\n\n      @media (max-width: 768px) {"
          },
          {
            "id": "language-css-p01-part-6",
            "title": "반응형[responsive]",
            "content": "        .card-grid {\n          grid-template-columns: 1fr;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <main class=\"page-wrapper\">\n      <section class=\"card-grid\">\n        <article class=\"card-item is-active\">\n          <h1 class=\"title-text\">카드 1</h1>\n          <p class=\"badge-text\">active</p>\n          <div class=\"button-row\">\n            <button class=\"primary-button\">확인</button>\n            <button class=\"primary-button\" disabled>대기</button>\n          </div>\n        </article>\n\n        <article class=\"card-item\">\n          <h2 class=\"title-text\">카드 2</h2>\n          <p>grid + flex 조합 예문</p>\n        </article>\n\n        <article class=\"card-item\">\n          <h2 class=\"title-text\">카드 3</h2>\n          <p>모바일에서는 1열로 바뀜</p>\n        </article>\n      </section>\n    </main>\n  </body>\n</html>",
            "displayContent": "        /* 반응형[responsive] */\n        .card-grid {\n          grid-template-columns: 1fr;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <main class=\"page-wrapper\">\n      <section class=\"card-grid\">\n        <article class=\"card-item is-active\">\n          <h1 class=\"title-text\">카드 1</h1>\n          <p class=\"badge-text\">active</p>\n          <div class=\"button-row\">\n            <button class=\"primary-button\">확인</button>\n            <button class=\"primary-button\" disabled>대기</button>\n          </div>\n        </article>\n\n        <article class=\"card-item\">\n          <h2 class=\"title-text\">카드 2</h2>\n          <p>grid + flex 조합 예문</p>\n        </article>\n\n        <article class=\"card-item\">\n          <h2 class=\"title-text\">카드 3</h2>\n          <p>모바일에서는 1열로 바뀜</p>\n        </article>\n      </section>\n    </main>\n  </body>\n</html>"
          }
        ]
      },
      {
        "id": "language-css-p02",
        "title": "P02.부모-자식-배치",
        "fileName": "P02.부모-자식-배치.html",
        "sourcePath": "assets/typingSource/Language-CSS/P02.부모-자식-배치.html",
        "language": "html",
        "parts": [
          {
            "id": "language-css-p02-part-1",
            "title": "P02.부모-자식-배치",
            "content": "<!DOCTYPE html>\n<html lang=\"ko\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>CSS Layout Practice</title>\n    <style>\n      * {\n        box-sizing: border-box;\n      }\n\n      body {\n        margin: 0;\n        font-family: sans-serif;\n        background: #f8fafc;\n      }\n\n      .page {\n        padding: 24px;\n      }\n\n      .section {\n        max-width: 860px;\n        margin: 0 auto 24px;\n        padding: 20px;\n        background: white;\n        border: 1px solid #dbe3f0;\n        border-radius: 16px;\n      }\n\n      .box {\n        width: 80px;\n        height: 80px;\n        background: #2563eb;\n        color: white;\n        display: grid;\n        place-items: center;\n        border-radius: 12px;\n      }",
            "displayContent": "<!DOCTYPE html>\n<html lang=\"ko\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>CSS Layout Practice</title>\n    <style>\n      * {\n        box-sizing: border-box;\n      }\n\n      body {\n        margin: 0;\n        font-family: sans-serif;\n        background: #f8fafc;\n      }\n\n      .page {\n        padding: 24px;\n      }\n\n      .section {\n        max-width: 860px;\n        margin: 0 auto 24px;\n        padding: 20px;\n        background: white;\n        border: 1px solid #dbe3f0;\n        border-radius: 16px;\n      }\n\n      .box {\n        width: 80px;\n        height: 80px;\n        background: #2563eb;\n        color: white;\n        display: grid;\n        place-items: center;\n        border-radius: 12px;\n      }"
          },
          {
            "id": "language-css-p02-part-2",
            "title": "글자 정렬[text align] - 글자 같은 인라인 내용",
            "content": "      .text-left {\n        text-align: left;\n      }\n\n      .text-center {\n        text-align: center;\n      }\n\n      .text-right {\n        text-align: right;\n      }",
            "displayContent": "      /* 글자 정렬[text align] - 글자 같은 인라인 내용 */\n      .text-left {\n        text-align: left;\n      }\n\n      .text-center {\n        text-align: center;\n      }\n\n      .text-right {\n        text-align: right;\n      }"
          },
          {
            "id": "language-css-p02-part-3",
            "title": "flex - 부모가 자식 위치를 잡음",
            "content": "      .row-parent {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 12px;\n        min-height: 120px;\n        padding: 12px;\n        background: #eff6ff;\n      }\n\n      .center-parent {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        min-height: 160px;\n        background: #ecfeff;\n      }\n\n      .column-parent {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        gap: 12px;\n        min-height: 200px;\n        background: #fef3c7;\n        padding: 12px;\n      }",
            "displayContent": "      /* flex - 부모가 자식 위치를 잡음 */\n      .row-parent {\n        display: flex;\n        justify-content: space-between; /* 가로축[main axis] */\n        align-items: center;            /* 세로축[cross axis] */\n        gap: 12px;\n        min-height: 120px;\n        padding: 12px;\n        background: #eff6ff;\n      }\n\n      .center-parent {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        min-height: 160px;\n        background: #ecfeff;\n      }\n\n      .column-parent {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        gap: 12px;\n        min-height: 200px;\n        background: #fef3c7;\n        padding: 12px;\n      }"
          },
          {
            "id": "language-css-p02-part-4",
            "title": "grid - 부모가 칸을 만들고 자식을 배치",
            "content": "      .grid-parent {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 12px;\n        background: #f3e8ff;\n        padding: 12px;\n      }\n\n      .grid-center {\n        display: grid;\n        place-items: center;\n        min-height: 180px;\n        background: #dcfce7;\n      }\n    </style>\n  </head>\n  <body>\n    <main class=\"page\">\n      <section class=\"section\">\n        <h2>글자 정렬[text align]</h2>\n        <p class=\"text-left\">왼쪽 정렬[left]</p>\n        <p class=\"text-center\">가운데 정렬[center]</p>\n        <p class=\"text-right\">오른쪽 정렬[right]</p>\n      </section>\n\n      <section class=\"section\">\n        <h2>가로 배치[row layout]</h2>\n        <div class=\"row-parent\">\n          <div class=\"box\">A</div>\n          <div class=\"box\">B</div>\n          <div class=\"box\">C</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>부모 중앙 정렬[parent center]</h2>\n        <div class=\"center-parent\">\n          <div class=\"box\">CENTER</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>세로 배치[column layout]</h2>\n        <div class=\"column-parent\">\n          <div class=\"box\">1</div>\n          <div class=\"box\">2</div>\n          <div class=\"box\">3</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>그리드 배치[grid layout]</h2>\n        <div class=\"grid-parent\">\n          <div class=\"box\">A</div>\n          <div class=\"box\">B</div>\n          <div class=\"box\">C</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>그리드 중앙 정렬[place-items]</h2>\n        <div class=\"grid-center\">\n          <div class=\"box\">BOX</div>\n        </div>\n      </section>\n    </main>\n  </body>\n</html>",
            "displayContent": "      /* grid - 부모가 칸을 만들고 자식을 배치 */\n      .grid-parent {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 12px;\n        background: #f3e8ff;\n        padding: 12px;\n      }\n\n      .grid-center {\n        display: grid;\n        place-items: center; /* 가로 + 세로 한 번에 중앙 정렬 */\n        min-height: 180px;\n        background: #dcfce7;\n      }\n    </style>\n  </head>\n  <body>\n    <main class=\"page\">\n      <section class=\"section\">\n        <h2>글자 정렬[text align]</h2>\n        <p class=\"text-left\">왼쪽 정렬[left]</p>\n        <p class=\"text-center\">가운데 정렬[center]</p>\n        <p class=\"text-right\">오른쪽 정렬[right]</p>\n      </section>\n\n      <section class=\"section\">\n        <h2>가로 배치[row layout]</h2>\n        <div class=\"row-parent\">\n          <div class=\"box\">A</div>\n          <div class=\"box\">B</div>\n          <div class=\"box\">C</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>부모 중앙 정렬[parent center]</h2>\n        <div class=\"center-parent\">\n          <div class=\"box\">CENTER</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>세로 배치[column layout]</h2>\n        <div class=\"column-parent\">\n          <div class=\"box\">1</div>\n          <div class=\"box\">2</div>\n          <div class=\"box\">3</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>그리드 배치[grid layout]</h2>\n        <div class=\"grid-parent\">\n          <div class=\"box\">A</div>\n          <div class=\"box\">B</div>\n          <div class=\"box\">C</div>\n        </div>\n      </section>\n\n      <section class=\"section\">\n        <h2>그리드 중앙 정렬[place-items]</h2>\n        <div class=\"grid-center\">\n          <div class=\"box\">BOX</div>\n        </div>\n      </section>\n    </main>\n  </body>\n</html>"
          }
        ]
      }
    ]
  },
  {
    "id": "language-git",
    "label": "Git",
    "folderName": "Language-git",
    "lessons": [
      {
        "id": "language-git-p01",
        "title": "P01.기본-흐름",
        "fileName": "P01.기본-흐름.sh",
        "sourcePath": "assets/typingSource/Language-git/P01.기본-흐름.sh",
        "language": "shell",
        "parts": [
          {
            "id": "language-git-p01-part-1",
            "title": "깃 상태 확인[git status]",
            "content": "git status",
            "displayContent": "# 깃 상태 확인[git status]\ngit status\n# 결과: 현재 브랜치와 변경 파일 목록 확인"
          },
          {
            "id": "language-git-p01-part-2",
            "title": "차이 확인[git diff]",
            "content": "git diff\ngit diff --staged",
            "displayContent": "# 차이 확인[git diff]\ngit diff\ngit diff --staged\n# 결과: 작업 트리와 스테이징 차이 확인"
          },
          {
            "id": "language-git-p01-part-3",
            "title": "스테이징[git add]",
            "content": "git add src/app.ts\ngit add .",
            "displayContent": "# 스테이징[git add]\ngit add src/app.ts\ngit add .\n# 결과: 지정 파일 또는 전체 변경을 스테이징"
          },
          {
            "id": "language-git-p01-part-4",
            "title": "커밋[git commit]",
            "content": "git commit -m \"fix: handle null user response\"",
            "displayContent": "# 커밋[git commit]\ngit commit -m \"fix: handle null user response\"\n# 결과: 변경 이력을 메시지와 함께 저장"
          },
          {
            "id": "language-git-p01-part-5",
            "title": "푸시[git push]",
            "content": "git push origin feature/login",
            "displayContent": "# 푸시[git push]\ngit push origin feature/login\n# 결과: 현재 브랜치 변경을 원격 저장소에 반영"
          },
          {
            "id": "language-git-p01-part-6",
            "title": "풀[git pull]",
            "content": "git pull origin main",
            "displayContent": "# 풀[git pull]\ngit pull origin main\n# 결과: 원격 main 최신 이력을 가져와 현재 브랜치에 반영"
          },
          {
            "id": "language-git-p01-part-7",
            "title": "브랜치 생성[git branch]",
            "content": "git branch feature/profile-page\ngit branch",
            "displayContent": "# 브랜치 생성[git branch]\ngit branch feature/profile-page\ngit branch\n# 결과: 새 브랜치 생성 후 목록 확인"
          },
          {
            "id": "language-git-p01-part-8",
            "title": "체크아웃[git checkout]",
            "content": "git checkout main",
            "displayContent": "# 체크아웃[git checkout]\ngit checkout main\n# 결과: main 브랜치로 이동"
          },
          {
            "id": "language-git-p01-part-9",
            "title": "스위치 생성[git checkout -b]",
            "content": "git checkout -b feature/cart",
            "displayContent": "# 스위치 생성[git checkout -b]\ngit checkout -b feature/cart\n# 결과: 새 브랜치를 만들고 즉시 이동"
          },
          {
            "id": "language-git-p01-part-10",
            "title": "스위치[git switch]",
            "content": "git switch main\ngit switch -c feature/search",
            "displayContent": "# 스위치[git switch]\ngit switch main\ngit switch -c feature/search\n# 결과: 브랜치 이동 또는 생성 후 이동"
          },
          {
            "id": "language-git-p01-part-11",
            "title": "머지[git merge]",
            "content": "git merge feature/cart",
            "displayContent": "# 머지[git merge]\ngit merge feature/cart\n# 결과: feature/cart 내용을 현재 브랜치에 병합"
          },
          {
            "id": "language-git-p01-part-12",
            "title": "리베이스[git rebase]",
            "content": "git rebase main",
            "displayContent": "# 리베이스[git rebase]\ngit rebase main\n# 결과: 현재 커밋을 최신 main 위로 다시 정렬"
          },
          {
            "id": "language-git-p01-part-13",
            "title": "충돌 해결[merge conflict resolution]",
            "content": "git status\ngit add src/app.ts\ngit commit -m \"fix: resolve merge conflict\"",
            "displayContent": "# 충돌 해결[merge conflict resolution]\ngit status\ngit add src/app.ts\ngit commit -m \"fix: resolve merge conflict\"\n# 결과: 충돌 파일 수정 후 병합 마무리"
          },
          {
            "id": "language-git-p01-part-14",
            "title": "리셋[git reset]",
            "content": "git reset --soft HEAD~1",
            "displayContent": "# 리셋[git reset]\ngit reset --soft HEAD~1\n# 결과: 마지막 커밋만 취소하고 변경 내용은 유지"
          },
          {
            "id": "language-git-p01-part-15",
            "title": "리버트[git revert]",
            "content": "git revert abc1234",
            "displayContent": "# 리버트[git revert]\ngit revert abc1234\n# 결과: 특정 커밋을 되돌리는 새 커밋 생성"
          },
          {
            "id": "language-git-p01-part-16",
            "title": "체리픽[git cherry-pick]",
            "content": "git cherry-pick abc1234",
            "displayContent": "# 체리픽[git cherry-pick]\ngit cherry-pick abc1234\n# 결과: 필요한 커밋 하나만 현재 브랜치에 가져옴"
          },
          {
            "id": "language-git-p01-part-17",
            "title": "작업 시작 흐름[status -> pull -> switch]",
            "content": "git status\ngit pull origin main\ngit switch -c feature/x",
            "displayContent": "# 작업 시작 흐름[status -> pull -> switch]\ngit status\ngit pull origin main\ngit switch -c feature/x\n# 결과: 작업 시작 전에 최신 상태를 맞추고 새 브랜치로 이동"
          },
          {
            "id": "language-git-p01-part-18",
            "title": "작업 저장 흐름[diff -> add -> commit]",
            "content": "git diff\ngit add .\ngit commit -m \"feat: update dashboard widgets\"",
            "displayContent": "# 작업 저장 흐름[diff -> add -> commit]\ngit diff\ngit add .\ngit commit -m \"feat: update dashboard widgets\"\n# 결과: 변경 검토 후 저장"
          },
          {
            "id": "language-git-p01-part-19",
            "title": "반영 흐름[switch -> pull -> merge]",
            "content": "git switch main\ngit pull origin main\ngit merge feature/x",
            "displayContent": "# 반영 흐름[switch -> pull -> merge]\ngit switch main\ngit pull origin main\ngit merge feature/x\n# 결과: 메인 브랜치에 기능 브랜치 내용을 반영"
          }
        ]
      },
      {
        "id": "language-git-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.sh",
        "sourcePath": "assets/typingSource/Language-git/P02.실무-패턴.sh",
        "language": "shell",
        "parts": [
          {
            "id": "language-git-p02-part-1",
            "title": "기능 추가 커밋[feat]",
            "content": "git commit -m \"feat(auth): add social login\"",
            "displayContent": "# 기능 추가 커밋[feat]\ngit commit -m \"feat(auth): add social login\"\n# 결과: 새 기능 추가 이력을 남김"
          },
          {
            "id": "language-git-p02-part-2",
            "title": "버그 수정 커밋[fix]",
            "content": "git commit -m \"fix(api): handle empty response\"",
            "displayContent": "# 버그 수정 커밋[fix]\ngit commit -m \"fix(api): handle empty response\"\n# 결과: 버그 수정 이력을 남김"
          },
          {
            "id": "language-git-p02-part-3",
            "title": "문서 수정 커밋[docs]",
            "content": "git commit -m \"docs: update setup guide\"",
            "displayContent": "# 문서 수정 커밋[docs]\ngit commit -m \"docs: update setup guide\"\n# 결과: 문서 변경 이력을 남김"
          },
          {
            "id": "language-git-p02-part-4",
            "title": "리팩터링 커밋[refactor]",
            "content": "git commit -m \"refactor(ui): simplify modal props\"",
            "displayContent": "# 리팩터링 커밋[refactor]\ngit commit -m \"refactor(ui): simplify modal props\"\n# 결과: 동작 변화 없는 구조 개선 이력을 남김"
          },
          {
            "id": "language-git-p02-part-5",
            "title": "잡무 커밋[chore]",
            "content": "git commit -m \"chore: update eslint config\"",
            "displayContent": "# 잡무 커밋[chore]\ngit commit -m \"chore: update eslint config\"\n# 결과: 설정 또는 의존성 변경 이력을 남김"
          },
          {
            "id": "language-git-p02-part-6",
            "title": "스타일 커밋[style]",
            "content": "git commit -m \"style: lint code\"",
            "displayContent": "# 스타일 커밋[style]\ngit commit -m \"style: lint code\"\n# 결과: 포맷 또는 스타일 정리 이력을 남김"
          },
          {
            "id": "language-git-p02-part-7",
            "title": "기능 브랜치[feature branch]",
            "content": "git switch -c feature/profile-page",
            "displayContent": "# 기능 브랜치[feature branch]\ngit switch -c feature/profile-page\n# 결과: 기능 개발용 브랜치 생성"
          },
          {
            "id": "language-git-p02-part-8",
            "title": "핫픽스 브랜치[hotfix branch]",
            "content": "git switch -c hotfix/login-error",
            "displayContent": "# 핫픽스 브랜치[hotfix branch]\ngit switch -c hotfix/login-error\n# 결과: 긴급 수정용 브랜치 생성"
          },
          {
            "id": "language-git-p02-part-9",
            "title": "버그픽스 브랜치[bugfix branch]",
            "content": "git switch -c bugfix/cart-total",
            "displayContent": "# 버그픽스 브랜치[bugfix branch]\ngit switch -c bugfix/cart-total\n# 결과: 버그 수정용 브랜치 생성"
          },
          {
            "id": "language-git-p02-part-10",
            "title": "페치[git fetch]",
            "content": "git fetch origin",
            "displayContent": "# 페치[git fetch]\ngit fetch origin\n# 결과: 원격 저장소 최신 이력을 가져옴"
          },
          {
            "id": "language-git-p02-part-11",
            "title": "프룬[git prune]",
            "content": "git prune --dry-run",
            "displayContent": "# 프룬[git prune]\ngit prune --dry-run\n# 결과: 어떤 loose object 가 정리 대상인지 미리 확인"
          },
          {
            "id": "language-git-p02-part-12",
            "title": "원격 삭제 브랜치 정리[git fetch --prune]",
            "content": "git fetch --prune origin",
            "displayContent": "# 원격 삭제 브랜치 정리[git fetch --prune]\ngit fetch --prune origin\n# 결과: 원격에서 이미 삭제된 origin/* 추적 브랜치를 정리"
          },
          {
            "id": "language-git-p02-part-13",
            "title": "원격 추적 브랜치 정리[git remote prune]",
            "content": "git remote prune origin",
            "displayContent": "# 원격 추적 브랜치 정리[git remote prune]\ngit remote prune origin\n# 결과: 더 이상 없는 원격 브랜치 참조를 한 번에 정리"
          },
          {
            "id": "language-git-p02-part-14",
            "title": "로그 비교[git log --oneline --graph]",
            "content": "git log --oneline --graph --decorate",
            "displayContent": "# 로그 비교[git log --oneline --graph]\ngit log --oneline --graph --decorate\n# 결과: 브랜치 이력 구조를 한눈에 확인"
          },
          {
            "id": "language-git-p02-part-15",
            "title": "이력 추적[git blame]",
            "content": "git blame src/app.ts",
            "displayContent": "# 이력 추적[git blame]\ngit blame src/app.ts\n# 결과: 각 줄의 마지막 수정 커밋과 작성자 확인"
          },
          {
            "id": "language-git-p02-part-16",
            "title": "커밋 보기[git show]",
            "content": "git show HEAD~1",
            "displayContent": "# 커밋 보기[git show]\ngit show HEAD~1\n# 결과: 바로 전 커밋의 diff와 메타데이터 확인"
          },
          {
            "id": "language-git-p02-part-17",
            "title": "스태시[git stash]",
            "content": "git stash",
            "displayContent": "# 스태시[git stash]\ngit stash\n# 결과: 현재 변경을 임시로 치움"
          },
          {
            "id": "language-git-p02-part-18",
            "title": "스태시 목록[git stash list]",
            "content": "git stash list",
            "displayContent": "# 스태시 목록[git stash list]\ngit stash list\n# 결과: 임시 저장한 항목 목록 확인"
          },
          {
            "id": "language-git-p02-part-19",
            "title": "스태시 복원[git stash pop]",
            "content": "git stash pop",
            "displayContent": "# 스태시 복원[git stash pop]\ngit stash pop\n# 결과: 마지막 스태시를 복원하고 목록에서 제거"
          }
        ]
      }
    ]
  },
  {
    "id": "language-go",
    "label": "Go",
    "folderName": "Language-go",
    "lessons": [
      {
        "id": "language-go-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.go",
        "sourcePath": "assets/typingSource/Language-go/P01.기본-패턴.go",
        "language": "go",
        "parts": [
          {
            "id": "language-go-p01-part-1",
            "title": "P01.기본-패턴",
            "content": "package main\n\nimport (\n\t\"fmt\"\n\t\"strings\"\n)",
            "displayContent": "package main\n\nimport (\n\t\"fmt\"\n\t\"strings\"\n)\n\n// ============================================================"
          },
          {
            "id": "language-go-p01-part-2",
            "title": "P01. Go 기본 패턴",
            "content": "type User struct {\n\tName  string\n\tAge   int\n\tAdmin bool\n}\n\nfunc add(numA int, numB int) int {\n\treturn numA + numB\n}\n\nfunc divide(numA int, numB int) (int, error) {\n\tif numB == 0 {\n\t\treturn 0, fmt.Errorf(\"0으로 나눌 수 없음\")\n\t}\n\treturn numA / numB, nil\n}\n\nfunc main() {",
            "displayContent": "// P01. Go 기본 패턴\n// ============================================================\n\ntype User struct {\n\tName  string\n\tAge   int\n\tAdmin bool\n}\n\nfunc add(numA int, numB int) int {\n\treturn numA + numB\n}\n\nfunc divide(numA int, numB int) (int, error) {\n\tif numB == 0 {\n\t\treturn 0, fmt.Errorf(\"0으로 나눌 수 없음\")\n\t}\n\treturn numA / numB, nil\n}\n\nfunc main() {"
          },
          {
            "id": "language-go-p01-part-3",
            "title": "변수 선언[variable declaration]",
            "content": "\tvar userName string = \"kim\"\n\tuserAge := 30\n\tconst serviceName = \"gmtl\"\n\tfmt.Println(userName, userAge, serviceName)",
            "displayContent": "\t// 변수 선언[variable declaration]\n\tvar userName string = \"kim\"\n\tuserAge := 30\n\tconst serviceName = \"gmtl\"\n\tfmt.Println(userName, userAge, serviceName)\n\t// 결과: kim 30 gmtl"
          },
          {
            "id": "language-go-p01-part-4",
            "title": "조건문[condition]",
            "content": "\tif userAge >= 20 {\n\t\tfmt.Println(\"adult\")\n\t} else {\n\t\tfmt.Println(\"minor\")\n\t}",
            "displayContent": "\t// 조건문[condition]\n\tif userAge >= 20 {\n\t\tfmt.Println(\"adult\")\n\t} else {\n\t\tfmt.Println(\"minor\")\n\t}\n\t// 결과: adult"
          },
          {
            "id": "language-go-p01-part-5",
            "title": "반복문[loop]",
            "content": "\tscoreList := []int{10, 20, 30}\n\tfor index, score := range scoreList {\n\t\tfmt.Println(index, score)\n\t}",
            "displayContent": "\t// 반복문[loop]\n\tscoreList := []int{10, 20, 30}\n\tfor index, score := range scoreList {\n\t\tfmt.Println(index, score)\n\t}\n\t// 결과:\n\t// 0 10\n\t// 1 20\n\t// 2 30"
          },
          {
            "id": "language-go-p01-part-6",
            "title": "맵[map]",
            "content": "\tuserMap := map[string]string{\n\t\t\"name\": \"lee\",\n\t\t\"role\": \"admin\",\n\t}\n\tfmt.Println(userMap[\"name\"])",
            "displayContent": "\t// 맵[map]\n\tuserMap := map[string]string{\n\t\t\"name\": \"lee\",\n\t\t\"role\": \"admin\",\n\t}\n\tfmt.Println(userMap[\"name\"])\n\t// 결과: lee"
          },
          {
            "id": "language-go-p01-part-7",
            "title": "구조체[struct]",
            "content": "\tuserItem := User{Name: \"park\", Age: 25, Admin: true}\n\tfmt.Println(userItem.Name, userItem.Admin)",
            "displayContent": "\t// 구조체[struct]\n\tuserItem := User{Name: \"park\", Age: 25, Admin: true}\n\tfmt.Println(userItem.Name, userItem.Admin)\n\t// 결과: park true"
          },
          {
            "id": "language-go-p01-part-8",
            "title": "함수[function]",
            "content": "\tsumValue := add(3, 4)\n\tfmt.Println(sumValue)",
            "displayContent": "\t// 함수[function]\n\tsumValue := add(3, 4)\n\tfmt.Println(sumValue)\n\t// 결과: 7"
          },
          {
            "id": "language-go-p01-part-9",
            "title": "다중 반환값[multiple return values] + 에러 처리[error handling]",
            "content": "\tquotientValue, err := divide(10, 2)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tfmt.Println(quotientValue)",
            "displayContent": "\t// 다중 반환값[multiple return values] + 에러 처리[error handling]\n\tquotientValue, err := divide(10, 2)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tfmt.Println(quotientValue)\n\t// 결과: 5"
          },
          {
            "id": "language-go-p01-part-10",
            "title": "문자열 처리[string handling]",
            "content": "\ttagText := \"go,api,server\"\n\ttagList := strings.Split(tagText, \",\")\n\tfmt.Println(tagList)",
            "displayContent": "\t// 문자열 처리[string handling]\n\ttagText := \"go,api,server\"\n\ttagList := strings.Split(tagText, \",\")\n\tfmt.Println(tagList)\n\t// 결과: [go api server]"
          },
          {
            "id": "language-go-p01-part-11",
            "title": "포인터[pointer]",
            "content": "\tcountValue := 1\n\tcountPtr := &countValue\n\t*countPtr = 2\n\tfmt.Println(countValue)\n}",
            "displayContent": "\t// 포인터[pointer]\n\tcountValue := 1\n\tcountPtr := &countValue\n\t*countPtr = 2\n\tfmt.Println(countValue)\n\t// 결과: 2\n}"
          }
        ]
      },
      {
        "id": "language-go-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.go",
        "sourcePath": "assets/typingSource/Language-go/P02.실무-패턴.go",
        "language": "go",
        "parts": [
          {
            "id": "language-go-p02-part-1",
            "title": "P02.실무-패턴",
            "content": "package main\n\nimport (\n\t\"encoding/json\"\n\t\"fmt\"\n)",
            "displayContent": "package main\n\nimport (\n\t\"encoding/json\"\n\t\"fmt\"\n)\n\n// ============================================================"
          },
          {
            "id": "language-go-p02-part-2",
            "title": "P02. Go 실무 패턴",
            "content": "type Product struct {\n\tName  string `json:\"name\"`\n\tPrice int    `json:\"price\"`\n}\n\nfunc makeDoubles(input []int) []int {\n\tresult := make([]int, 0, len(input))\n\tfor _, item := range input {\n\t\tresult = append(result, item*2)\n\t}\n\treturn result\n}\n\nfunc main() {",
            "displayContent": "// P02. Go 실무 패턴\n// ============================================================\n\ntype Product struct {\n\tName  string `json:\"name\"`\n\tPrice int    `json:\"price\"`\n}\n\nfunc makeDoubles(input []int) []int {\n\tresult := make([]int, 0, len(input))\n\tfor _, item := range input {\n\t\tresult = append(result, item*2)\n\t}\n\treturn result\n}\n\nfunc main() {"
          },
          {
            "id": "language-go-p02-part-3",
            "title": "슬라이스 추가[append]",
            "content": "\tvalueList := []int{1, 2}\n\tvalueList = append(valueList, 3, 4)\n\tfmt.Println(valueList)",
            "displayContent": "\t// 슬라이스 추가[append]\n\tvalueList := []int{1, 2}\n\tvalueList = append(valueList, 3, 4)\n\tfmt.Println(valueList)\n\t// 결과: [1 2 3 4]"
          },
          {
            "id": "language-go-p02-part-4",
            "title": "맵 존재 확인[comma ok]",
            "content": "\troleMap := map[string]string{\"kim\": \"admin\"}\n\troleValue, ok := roleMap[\"kim\"]\n\tfmt.Println(roleValue, ok)",
            "displayContent": "\t// 맵 존재 확인[comma ok]\n\troleMap := map[string]string{\"kim\": \"admin\"}\n\troleValue, ok := roleMap[\"kim\"]\n\tfmt.Println(roleValue, ok)\n\t// 결과: admin true"
          },
          {
            "id": "language-go-p02-part-5",
            "title": "구조체 + JSON",
            "content": "\tproductItem := Product{Name: \"keyboard\", Price: 50000}\n\tjsonBytes, _ := json.Marshal(productItem)\n\tfmt.Println(string(jsonBytes))",
            "displayContent": "\t// 구조체 + JSON\n\tproductItem := Product{Name: \"keyboard\", Price: 50000}\n\tjsonBytes, _ := json.Marshal(productItem)\n\tfmt.Println(string(jsonBytes))\n\t// 결과: {\"name\":\"keyboard\",\"price\":50000}"
          },
          {
            "id": "language-go-p02-part-6",
            "title": "인터페이스 대신 에러 우선 처리[error first]",
            "content": "\t_, err := json.Marshal(make(chan int))\n\tif err != nil {\n\t\tfmt.Println(\"marshal error\")\n\t}",
            "displayContent": "\t// 인터페이스 대신 에러 우선 처리[error first]\n\t_, err := json.Marshal(make(chan int))\n\tif err != nil {\n\t\tfmt.Println(\"marshal error\")\n\t}\n\t// 결과: marshal error"
          },
          {
            "id": "language-go-p02-part-7",
            "title": "슬라이스 변환 패턴[transform pattern]",
            "content": "\tdoubleList := makeDoubles([]int{1, 2, 3})\n\tfmt.Println(doubleList)\n}",
            "displayContent": "\t// 슬라이스 변환 패턴[transform pattern]\n\tdoubleList := makeDoubles([]int{1, 2, 3})\n\tfmt.Println(doubleList)\n\t// 결과: [2 4 6]\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "language-java",
    "label": "Java",
    "folderName": "Language-Java",
    "lessons": [
      {
        "id": "language-java-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.java",
        "sourcePath": "assets/typingSource/Language-Java/P01.기본-패턴.java",
        "language": "java",
        "parts": [
          {
            "id": "language-java-p01-part-1",
            "title": "P01.기본-패턴",
            "content": "class P01BasicPatterns {\n\n    enum UserRole {\n        USER, ADMIN\n    }\n\n    static int add(int numA, int numB) {\n        return numA + numB;\n    }\n\n    public static void main(String[] args) {",
            "displayContent": "class P01BasicPatterns {\n\n    enum UserRole {\n        USER, ADMIN\n    }\n\n    static int add(int numA, int numB) {\n        return numA + numB;\n    }\n\n    public static void main(String[] args) {"
          },
          {
            "id": "language-java-p01-part-2",
            "title": "기본 타입[primitive type]",
            "content": "        int userAge = 30;\n        double scoreValue = 95.5;\n        boolean isAdmin = true;\n        char gradeValue = 'A';\n        System.out.println(userAge);\n        System.out.println(scoreValue);\n        System.out.println(isAdmin);\n        System.out.println(gradeValue);",
            "displayContent": "        // 기본 타입[primitive type]\n        int userAge = 30;\n        double scoreValue = 95.5;\n        boolean isAdmin = true;\n        char gradeValue = 'A';\n        System.out.println(userAge);\n        System.out.println(scoreValue);\n        System.out.println(isAdmin);\n        System.out.println(gradeValue);\n        // 결과: 30 / 95.5 / true / A"
          },
          {
            "id": "language-java-p01-part-3",
            "title": "문자열[string]",
            "content": "        String userName = \"kim\";\n        System.out.println(userName.toUpperCase());",
            "displayContent": "        // 문자열[string]\n        String userName = \"kim\";\n        System.out.println(userName.toUpperCase());\n        // 결과: KIM"
          },
          {
            "id": "language-java-p01-part-4",
            "title": "조건문[condition]",
            "content": "        if (userAge >= 20) {\n            System.out.println(\"adult\");\n        } else {\n            System.out.println(\"minor\");\n        }",
            "displayContent": "        // 조건문[condition]\n        if (userAge >= 20) {\n            System.out.println(\"adult\");\n        } else {\n            System.out.println(\"minor\");\n        }\n        // 결과: adult"
          },
          {
            "id": "language-java-p01-part-5",
            "title": "배열[array]",
            "content": "        String[] colorList = { \"red\", \"green\", \"blue\" };\n        for (String colorItem : colorList) {\n            System.out.println(colorItem);\n        }",
            "displayContent": "        // 배열[array]\n        String[] colorList = { \"red\", \"green\", \"blue\" };\n        for (String colorItem : colorList) {\n            System.out.println(colorItem);\n        }\n        // 결과:\n        // red\n        // green\n        // blue"
          },
          {
            "id": "language-java-p01-part-6",
            "title": "다차원 배열[multidimensional array]",
            "content": "        int[][] matrixValue = { { 1, 2 }, { 3, 4 } };\n        System.out.println(matrixValue[1][0]);",
            "displayContent": "        // 다차원 배열[multidimensional array]\n        int[][] matrixValue = { { 1, 2 }, { 3, 4 } };\n        System.out.println(matrixValue[1][0]);\n        // 결과: 3"
          },
          {
            "id": "language-java-p01-part-7",
            "title": "열거형[enum]",
            "content": "        UserRole roleValue = UserRole.ADMIN;\n        switch (roleValue) {\n            case USER:\n                System.out.println(\"user\");\n                break;\n            case ADMIN:\n                System.out.println(\"admin\");\n                break;\n        }",
            "displayContent": "        // 열거형[enum]\n        UserRole roleValue = UserRole.ADMIN;\n        switch (roleValue) {\n            case USER:\n                System.out.println(\"user\");\n                break;\n            case ADMIN:\n                System.out.println(\"admin\");\n                break;\n        }\n        // 결과: admin"
          },
          {
            "id": "language-java-p01-part-8",
            "title": "형변환[type casting]",
            "content": "        double ratioValue = 9.8;\n        int intValue = (int) ratioValue;\n        System.out.println(intValue);",
            "displayContent": "        // 형변환[type casting]\n        double ratioValue = 9.8;\n        int intValue = (int) ratioValue;\n        System.out.println(intValue);\n        // 결과: 9"
          },
          {
            "id": "language-java-p01-part-9",
            "title": "정적 메서드[static method]",
            "content": "        int sumValue = add(5, 7);\n        System.out.println(sumValue);\n    }\n}",
            "displayContent": "        // 정적 메서드[static method]\n        int sumValue = add(5, 7);\n        System.out.println(sumValue);\n        // 결과: 12\n    }\n}"
          }
        ]
      },
      {
        "id": "language-java-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.java",
        "sourcePath": "assets/typingSource/Language-Java/P02.실무-패턴.java",
        "language": "java",
        "parts": [
          {
            "id": "language-java-p02-part-1",
            "title": "P02.실무-패턴",
            "content": "import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nclass P02PracticalPatterns {\n    public static void main(String[] args) {",
            "displayContent": "import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nclass P02PracticalPatterns {\n    public static void main(String[] args) {"
          },
          {
            "id": "language-java-p02-part-2",
            "title": "리스트[list]",
            "content": "        List<String> nameList = new ArrayList<>();\n        nameList.add(\"kim\");\n        nameList.add(\"lee\");\n        System.out.println(nameList);",
            "displayContent": "        // 리스트[list]\n        List<String> nameList = new ArrayList<>();\n        nameList.add(\"kim\");\n        nameList.add(\"lee\");\n        System.out.println(nameList);\n        // 결과: [kim, lee]"
          },
          {
            "id": "language-java-p02-part-3",
            "title": "맵[map]",
            "content": "        Map<String, Integer> ageMap = new HashMap<>();\n        ageMap.put(\"kim\", 30);\n        ageMap.put(\"lee\", 25);\n        System.out.println(ageMap.get(\"kim\"));",
            "displayContent": "        // 맵[map]\n        Map<String, Integer> ageMap = new HashMap<>();\n        ageMap.put(\"kim\", 30);\n        ageMap.put(\"lee\", 25);\n        System.out.println(ageMap.get(\"kim\"));\n        // 결과: 30"
          },
          {
            "id": "language-java-p02-part-4",
            "title": "람다[lambda]",
            "content": "        nameList.forEach(item -> System.out.println(item.toUpperCase()));",
            "displayContent": "        // 람다[lambda]\n        nameList.forEach(item -> System.out.println(item.toUpperCase()));\n        // 결과:\n        // KIM\n        // LEE"
          },
          {
            "id": "language-java-p02-part-5",
            "title": "예외 처리[exception handling]",
            "content": "        try {\n            int parsedValue = Integer.parseInt(\"123\");\n            System.out.println(parsedValue);\n        } catch (NumberFormatException err) {\n            System.out.println(\"parse error\");\n        }",
            "displayContent": "        // 예외 처리[exception handling]\n        try {\n            int parsedValue = Integer.parseInt(\"123\");\n            System.out.println(parsedValue);\n        } catch (NumberFormatException err) {\n            System.out.println(\"parse error\");\n        }\n        // 결과: 123"
          },
          {
            "id": "language-java-p02-part-6",
            "title": "메서드 분리[method extraction]",
            "content": "        System.out.println(formatUser(\"park\", 28));\n    }\n\n    static String formatUser(String nameValue, int ageValue) {\n        return nameValue + \"(\" + ageValue + \")\";\n    }\n}",
            "displayContent": "        // 메서드 분리[method extraction]\n        System.out.println(formatUser(\"park\", 28));\n        // 결과: park(28)\n    }\n\n    static String formatUser(String nameValue, int ageValue) {\n        return nameValue + \"(\" + ageValue + \")\";\n    }\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "language-javascript",
    "label": "JavaScript",
    "folderName": "Language-JavaScript",
    "lessons": [
      {
        "id": "language-javascript-p01",
        "title": "P01.변수-구조분해",
        "fileName": "P01.변수-구조분해.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P01.변수-구조분해.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p01-part-1",
            "title": "변수 스코프[variable scope]",
            "content": "var varA = 'function-scoped';\nlet letA = 'block-scoped';\n\nvar userObj = { name: 'kim' };\nuserObj.name = 'lee';",
            "displayContent": "/*** 변수 스코프[variable scope] ***/\nvar varA = 'function-scoped';      // 함수 스코프[function scope], undefined 호이스팅[hoisting]\nlet letA = 'block-scoped';         // 블록 스코프[block scope], TDZ (선언 전 접근 → ReferenceError)\n// const constA = 'read-only';     // 재할당 불가[immutable binding] (속성은 변경 가능)\n\nvar userObj = { name: 'kim' };\nuserObj.name = 'lee';   // ✅ 속성 변경[property mutation] 가능\n// userObj = {};        // ❌ 재할당[reassignment] 불가 (const일 경우)"
          },
          {
            "id": "language-javascript-p01-part-2",
            "title": "지수[exponentiation] / 논리 할당 연산자[logical assignment operator]",
            "content": "2 ** 10\n2 ** 3 ** 2\n\nvar laA = 1;\nlaA &&= 99;\n\nvar laB = 0;\nlaB ||= 99;\n\nvar laC = null;\nlaC ??= 99;",
            "displayContent": "/*** 지수[exponentiation] / 논리 할당 연산자[logical assignment operator] ***/\n2 ** 10          // 1024\n2 ** 3 ** 2      // 512 (우→좌: 3**2=9, 2**9=512)\n\nvar laA = 1;\nlaA &&= 99;      // truthy → 재할당[assignment]: 99\n\nvar laB = 0;\nlaB ||= 99;      // falsy → 재할당[assignment]: 99\n\nvar laC = null;\nlaC ??= 99;      // null|undefined → 재할당[assignment]: 99"
          },
          {
            "id": "language-javascript-p01-part-3",
            "title": "Nullish 병합[nullish coalescing] (??)",
            "content": "null      ?? 'default'\nundefined ?? 'default'\n0         ?? 'default'\n''        ?? 'default'",
            "displayContent": "/*** Nullish 병합[nullish coalescing] (??) ***/\nnull      ?? 'default'   // 'default'\nundefined ?? 'default'   // 'default'\n0         ?? 'default'   // 0   (falsy지만 null이 아님)\n''        ?? 'default'   // ''  (falsy지만 null이 아님)"
          },
          {
            "id": "language-javascript-p01-part-4",
            "title": "옵셔널 체이닝[optional chaining] (?.)",
            "content": "var safeObj = { inner: { val: 42 } };\nsafeObj?.inner?.val\nsafeObj?.missing?.val\nsafeObj?.method?.()",
            "displayContent": "/*** 옵셔널 체이닝[optional chaining] (?.) ***/\nvar safeObj = { inner: { val: 42 } };\nsafeObj?.inner?.val       // 42\nsafeObj?.missing?.val     // undefined (단락 평가[short-circuit evaluation], 에러 없음)\nsafeObj?.method?.()       // undefined (메서드 부재 시 안전 호출)"
          },
          {
            "id": "language-javascript-p01-part-5",
            "title": "스프레드 연산자[spread operator]",
            "content": "var mergedObj = { x: 1, ...{ y: 2, z: 3 } };\nvar mergedArr = [1, ...[2, 3]];",
            "displayContent": "/*** 스프레드 연산자[spread operator] ***/\nvar mergedObj = { x: 1, ...{ y: 2, z: 3 } };   // { x: 1, y: 2, z: 3 }\nvar mergedArr = [1, ...[2, 3]];                 // [1, 2, 3]"
          },
          {
            "id": "language-javascript-p01-part-6",
            "title": "배열 구조분해[array destructuring]",
            "content": "var [adA, adB] = [10, 20];\nvar [adC, , adD] = [1, 2, 3];\nvar [adE, ...adRest] = [1, 2, 3];",
            "displayContent": "/*** 배열 구조분해[array destructuring] ***/\nvar [adA, adB] = [10, 20];           // adA=10, adB=20\nvar [adC, , adD] = [1, 2, 3];        // adC=1, adD=3 (두 번째 건너뜀)\nvar [adE, ...adRest] = [1, 2, 3];    // adE=1, adRest=[2, 3]"
          },
          {
            "id": "language-javascript-p01-part-7",
            "title": "값 교환[swap]",
            "content": "var [swapA, swapB] = [100, 200];\n[swapA, swapB] = [swapB, swapA];",
            "displayContent": "// 값 교환[swap]\nvar [swapA, swapB] = [100, 200];\n[swapA, swapB] = [swapB, swapA];     // swapA=200, swapB=100"
          },
          {
            "id": "language-javascript-p01-part-8",
            "title": "객체 구조분해[object destructuring]",
            "content": "var { name: odName, age: odAge = 30 } = { name: 'kim' };\n\nvar { a: odA, b: odB } = { a: 1, b: 2 };\n\nvar { p: odP, ...odRest } = { p: 1, q: 2, r: 3 };",
            "displayContent": "/*** 객체 구조분해[object destructuring] ***/\nvar { name: odName, age: odAge = 30 } = { name: 'kim' };\n// odName='kim', odAge=30 (기본값[default value] 적용)\n\nvar { a: odA, b: odB } = { a: 1, b: 2 };\n// odA=1, odB=2 (키→변수 이름 변경[aliasing])\n\nvar { p: odP, ...odRest } = { p: 1, q: 2, r: 3 };\n// odP=1, odRest={ q:2, r:3 } (나머지 수집[rest collection])"
          },
          {
            "id": "language-javascript-p01-part-9",
            "title": "중첩 구조분해[nested destructuring]",
            "content": "var nestedSrc = { id: 7, addr: { city: 'Seoul', zip: '12345' } };\nvar { id: nestedId, addr: { city: nestedCity } } = nestedSrc;",
            "displayContent": "/*** 중첩 구조분해[nested destructuring] ***/\nvar nestedSrc = { id: 7, addr: { city: 'Seoul', zip: '12345' } };\nvar { id: nestedId, addr: { city: nestedCity } } = nestedSrc;\n// nestedId=7, nestedCity='Seoul'"
          },
          {
            "id": "language-javascript-p01-part-10",
            "title": "파라미터 구조분해[parameter destructuring]",
            "content": "function showUser({ name, role = 'user' }) {\n  return `${name}(${role})`;\n}\nshowUser({ name: 'kim' });\nshowUser({ name: 'lee', role: 'admin' });",
            "displayContent": "/*** 파라미터 구조분해[parameter destructuring] ***/\nfunction showUser({ name, role = 'user' }) {\n  return `${name}(${role})`;\n}\nshowUser({ name: 'kim' });                // 'kim(user)'\nshowUser({ name: 'lee', role: 'admin' }); // 'lee(admin)'"
          },
          {
            "id": "language-javascript-p01-part-11",
            "title": "for...of + 구조분해[destructuring]",
            "content": "var teamList = [\n  { name: 'kim', score: 90 },\n  { name: 'lee', score: 80 },\n];\nfor (var { name: tName, score: tScore } of teamList) {\n  console.log(tName, tScore);\n}",
            "displayContent": "/*** for...of + 구조분해[destructuring] ***/\nvar teamList = [\n  { name: 'kim', score: 90 },\n  { name: 'lee', score: 80 },\n];\nfor (var { name: tName, score: tScore } of teamList) {\n  console.log(tName, tScore);\n}\n// kim 90\n// lee 80"
          },
          {
            "id": "language-javascript-p01-part-12",
            "title": "동적 키 구조분해[computed property destructuring]",
            "content": "var dynKey = 'color';\nvar { [dynKey]: dynVal } = { color: 'blue' };",
            "displayContent": "/*** 동적 키 구조분해[computed property destructuring] ***/\nvar dynKey = 'color';\nvar { [dynKey]: dynVal } = { color: 'blue' };\n// dynVal='blue'"
          },
          {
            "id": "language-javascript-p01-part-13",
            "title": "삼항 연산자 중첩[nested ternary operator]",
            "content": "function grade(score) {\n  return score >= 90 ? 'A'\n       : score >= 80 ? 'B'\n       : score >= 70 ? 'C'\n       :               'F';\n}\ngrade(85)\ngrade(65)",
            "displayContent": "/*** 삼항 연산자 중첩[nested ternary operator] ***/\nfunction grade(score) {\n  return score >= 90 ? 'A'\n       : score >= 80 ? 'B'\n       : score >= 70 ? 'C'\n       :               'F';\n}\ngrade(85)  // 'B'\ngrade(65)  // 'F'"
          }
        ]
      },
      {
        "id": "language-javascript-p02",
        "title": "P02.배열",
        "fileName": "P02.배열.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P02.배열.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p02-part-1",
            "title": "배열 생성[array creation]",
            "content": "Array.of(1, 2, 3)\nArray.from('ABC')\nArray.from({ length: 3 }, (_, i) => i)\nArray.from(new Set([1, 2, 2, 3]))\nArray.isArray([1, 2])",
            "displayContent": "/*** 배열 생성[array creation] ***/\nArray.of(1, 2, 3)                        // [1, 2, 3]\nArray.from('ABC')                        // ['A', 'B', 'C']\nArray.from({ length: 3 }, (_, i) => i)  // [0, 1, 2]\nArray.from(new Set([1, 2, 2, 3]))        // [1, 2, 3] (중복 제거[deduplication])\nArray.isArray([1, 2])                    // true"
          },
          {
            "id": "language-javascript-p02-part-2",
            "title": "기본 접근[access] / 변환[conversion]",
            "content": "[9, 8, 7].at(0)\n[9, 8, 7].at(-1)\n[1, 2, 'a'].toString()\n['A', 'B', 'C'].join(' - ')",
            "displayContent": "/*** 기본 접근[access] / 변환[conversion] ***/\n[9, 8, 7].at(0)     // 9\n[9, 8, 7].at(-1)    // 7 (음수 인덱스[negative index])\n[1, 2, 'a'].toString()       // '1,2,a'\n['A', 'B', 'C'].join(' - ')  // 'A - B - C'"
          },
          {
            "id": "language-javascript-p02-part-3",
            "title": "평탄화[flatten]",
            "content": "[1, [2, [3]]].flat()\n[1, [2, [3]]].flat(Infinity)\n['A B', 'C D'].flatMap(e => e.split(' '))",
            "displayContent": "/*** 평탄화[flatten] ***/\n[1, [2, [3]]].flat()           // [1, 2, [3]]  (기본 깊이[depth] 1)\n[1, [2, [3]]].flat(Infinity)   // [1, 2, 3]    (전체 깊이[full depth])\n['A B', 'C D'].flatMap(e => e.split(' '))  // ['A', 'B', 'C', 'D']"
          },
          {
            "id": "language-javascript-p02-part-4",
            "title": "원본 변경[mutation] - 추가/제거",
            "content": "var mutPush = [1, 2];\nmutPush.push(3, 4);\n\nvar mutPop = [1, 2, 3];\nmutPop.pop();\n\nvar mutUnshift = [3, 4];\nmutUnshift.unshift(1, 2);\n\nvar mutShift = [1, 2, 3];\nmutShift.shift();",
            "displayContent": "/*** 원본 변경[mutation] - 추가/제거 ***/\nvar mutPush = [1, 2];\nmutPush.push(3, 4);   // 반환: 4 (길이[length]), mutPush=[1,2,3,4]\n\nvar mutPop = [1, 2, 3];\nmutPop.pop();          // 반환: 3, mutPop=[1,2]\n\nvar mutUnshift = [3, 4];\nmutUnshift.unshift(1, 2);  // 반환: 4, mutUnshift=[1,2,3,4]\n\nvar mutShift = [1, 2, 3];\nmutShift.shift();           // 반환: 1, mutShift=[2,3]"
          },
          {
            "id": "language-javascript-p02-part-5",
            "title": "원본 변경[mutation] - 정렬[sort]",
            "content": "var mutSort = [10, 1, 21, 2];\nmutSort.sort((a, b) => a - b);\nmutSort.reverse();",
            "displayContent": "/*** 원본 변경[mutation] - 정렬[sort] ***/\nvar mutSort = [10, 1, 21, 2];\nmutSort.sort((a, b) => a - b);  // [1, 2, 10, 21] 오름차순[ascending]\nmutSort.reverse();               // [21, 10, 2, 1]"
          },
          {
            "id": "language-javascript-p02-part-6",
            "title": "원본 유지[immutable] (ES2023 - toSorted / toReversed / with)",
            "content": "var immArr = [3, 1, 2];\nimmArr.toSorted((a, b) => a - b)\nimmArr.toReversed()\nimmArr.with(1, 99)\nimmArr",
            "displayContent": "/*** 원본 유지[immutable] (ES2023 - toSorted / toReversed / with) ***/\nvar immArr = [3, 1, 2];\nimmArr.toSorted((a, b) => a - b)  // [1, 2, 3] (원본 유지[non-mutating])\nimmArr.toReversed()               // [2, 1, 3] (원본 유지[non-mutating])\nimmArr.with(1, 99)                // [3, 99, 2] (인덱스1 값 교체[replace], 원본 유지)\nimmArr                            // [3, 1, 2]"
          },
          {
            "id": "language-javascript-p02-part-7",
            "title": "splice vs slice",
            "content": "var spliceArr = ['A', 'B', 'C', 'D', 'E'];\nspliceArr.splice(1, 2);\nspliceArr.splice(1, 0, 'X');\n\n['A', 'B', 'C', 'D'].slice(1, 3)\n['A', 'B', 'C', 'D'].slice(-2)",
            "displayContent": "/*** splice vs slice ***/\nvar spliceArr = ['A', 'B', 'C', 'D', 'E'];\nspliceArr.splice(1, 2);       // 반환[return]: ['B','C'], spliceArr=['A','D','E']\nspliceArr.splice(1, 0, 'X');  // 삽입[insert]: spliceArr=['A','X','D','E']\n\n['A', 'B', 'C', 'D'].slice(1, 3)   // ['B', 'C'] (원본 유지[non-mutating])\n['A', 'B', 'C', 'D'].slice(-2)     // ['C', 'D']"
          },
          {
            "id": "language-javascript-p02-part-8",
            "title": "fill / copyWithin",
            "content": "[0, 0, 0].fill(7)\n[1, 2, 3, 4].fill(0, 1, 3)\n[1, 2, 3, 4, 5].copyWithin(0, 3)",
            "displayContent": "/*** fill / copyWithin ***/\n[0, 0, 0].fill(7)            // [7, 7, 7]\n[1, 2, 3, 4].fill(0, 1, 3)  // [1, 0, 0, 4]\n[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5] (index3부터 index0에 덮어씀[overwrite])"
          },
          {
            "id": "language-javascript-p02-part-9",
            "title": "검색[search]",
            "content": "[10, 20, 30].indexOf(20)\n[10, 20, 30].includes(20)\n[1, 2, 3, 4].find(e => e > 2)\n[1, 2, 3, 4].findIndex(e => e > 2)\n[1, 2, 3, 4].findLast(e => e > 2)\n[1, 2, 3, 4].findLastIndex(e => e > 2)",
            "displayContent": "/*** 검색[search] ***/\n[10, 20, 30].indexOf(20)               // 1\n[10, 20, 30].includes(20)              // true\n[1, 2, 3, 4].find(e => e > 2)         // 3 (첫 번째 일치[match] 요소)\n[1, 2, 3, 4].findIndex(e => e > 2)    // 2 (첫 번째 일치[match] 인덱스)\n[1, 2, 3, 4].findLast(e => e > 2)     // 4 (마지막 일치[match] 요소)\n[1, 2, 3, 4].findLastIndex(e => e > 2) // 3"
          },
          {
            "id": "language-javascript-p02-part-10",
            "title": "조건 검사[predicate]",
            "content": "[2, 4, 6].every(e => e % 2 === 0)\n[1, 2, 3].some(e => e > 2)\n[1, 2, 3].some(e => e > 10)",
            "displayContent": "/*** 조건 검사[predicate] ***/\n[2, 4, 6].every(e => e % 2 === 0)   // true  (모두 충족[all pass])\n[1, 2, 3].some(e => e > 2)          // true  (하나라도 충족[any pass])\n[1, 2, 3].some(e => e > 10)         // false"
          },
          {
            "id": "language-javascript-p02-part-11",
            "title": "변환[transformation]",
            "content": "[1, 2, 3].map(e => e * 2)\n[1, 2, 3, 4].filter(e => e % 2 === 0)\n[1, 2, 3].map(e => e ** 2)",
            "displayContent": "/*** 변환[transformation] ***/\n[1, 2, 3].map(e => e * 2)              // [2, 4, 6]\n[1, 2, 3, 4].filter(e => e % 2 === 0) // [2, 4]\n[1, 2, 3].map(e => e ** 2)            // [1, 4, 9]"
          },
          {
            "id": "language-javascript-p02-part-12",
            "title": "누산[accumulation] (reduce)",
            "content": "[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)\n[5, 10, 8].reduce((acc, cur) => Math.max(acc, cur), 0)",
            "displayContent": "/*** 누산[accumulation] (reduce) ***/\n[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)  // 10 (합계[sum])\n[5, 10, 8].reduce((acc, cur) => Math.max(acc, cur), 0)  // 10 (최대값[max])"
          },
          {
            "id": "language-javascript-p02-part-13",
            "title": "빈도 카운트[frequency count]",
            "content": "var countSrc = ['A', 'B', 'A', 'C', 'B', 'A'];\ncountSrc.reduce((acc, key) => {\n  acc[key] ??= 0;\n  acc[key]++;\n  return acc;\n}, {});",
            "displayContent": "// 빈도 카운트[frequency count]\nvar countSrc = ['A', 'B', 'A', 'C', 'B', 'A'];\ncountSrc.reduce((acc, key) => {\n  acc[key] ??= 0;\n  acc[key]++;\n  return acc;\n}, {});\n// { A:3, B:2, C:1 }"
          },
          {
            "id": "language-javascript-p02-part-14",
            "title": "그룹핑[grouping]",
            "content": "var groupSrc = [\n  { type: 'fruit', name: 'apple' },\n  { type: 'veg',   name: 'carrot' },\n  { type: 'fruit', name: 'banana' },\n];\ngroupSrc.reduce((acc, item) => {\n  acc[item.type] ??= [];\n  acc[item.type].push(item.name);\n  return acc;\n}, {});",
            "displayContent": "// 그룹핑[grouping]\nvar groupSrc = [\n  { type: 'fruit', name: 'apple' },\n  { type: 'veg',   name: 'carrot' },\n  { type: 'fruit', name: 'banana' },\n];\ngroupSrc.reduce((acc, item) => {\n  acc[item.type] ??= [];\n  acc[item.type].push(item.name);\n  return acc;\n}, {});\n// { fruit: ['apple','banana'], veg: ['carrot'] }"
          },
          {
            "id": "language-javascript-p02-part-15",
            "title": "이터레이터[iterator] (entries / keys / values)",
            "content": "var iterSrc = ['X', 'Y', 'Z'];\nfor (var [idx, val] of iterSrc.entries()) {\n  console.log(idx, val);\n}\n\n[...iterSrc.keys()];\n[...iterSrc.values()];",
            "displayContent": "/*** 이터레이터[iterator] (entries / keys / values) ***/\nvar iterSrc = ['X', 'Y', 'Z'];\nfor (var [idx, val] of iterSrc.entries()) {\n  console.log(idx, val);\n}\n// 0 'X'\n// 1 'Y'\n// 2 'Z'\n\n[...iterSrc.keys()];    // [0, 1, 2]\n[...iterSrc.values()];  // ['X', 'Y', 'Z']"
          },
          {
            "id": "language-javascript-p02-part-16",
            "title": "concat / 스프레드[spread] 비교",
            "content": "[1, 2].concat([3, 4], 5);\n[...[1, 2], ...[3, 4], 5];",
            "displayContent": "/*** concat / 스프레드[spread] 비교 ***/\n[1, 2].concat([3, 4], 5);   // [1, 2, 3, 4, 5]\n[...[1, 2], ...[3, 4], 5];  // [1, 2, 3, 4, 5]"
          }
        ]
      },
      {
        "id": "language-javascript-p03",
        "title": "P03.객체",
        "fileName": "P03.객체.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P03.객체.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p03-part-1",
            "title": "기본 생성[creation] / 접근[access]",
            "content": "var baseObj = { name: 'kim', age: 20 };\nbaseObj.name\nbaseObj['age']",
            "displayContent": "/*** 기본 생성[creation] / 접근[access] ***/\nvar baseObj = { name: 'kim', age: 20 };\nbaseObj.name     // 'kim'\nbaseObj['age']   // 20"
          },
          {
            "id": "language-javascript-p03-part-2",
            "title": "단축 속성명[shorthand property]",
            "content": "var oName = 'lee', oAge = 30;\nvar shortObj = { oName, oAge };",
            "displayContent": "// 단축 속성명[shorthand property]\nvar oName = 'lee', oAge = 30;\nvar shortObj = { oName, oAge };  // { oName: 'lee', oAge: 30 }"
          },
          {
            "id": "language-javascript-p03-part-3",
            "title": "Object.assign - 얕은 병합[shallow merge]",
            "content": "var assignTarget = { a: 1 };\nObject.assign(assignTarget, { b: 2 }, { c: 3 });\n\nvar cloneObj = Object.assign({}, assignTarget);",
            "displayContent": "/*** Object.assign - 얕은 병합[shallow merge] ***/\nvar assignTarget = { a: 1 };\nObject.assign(assignTarget, { b: 2 }, { c: 3 });\n// assignTarget = { a:1, b:2, c:3 } (원본 변경[mutation])\n\nvar cloneObj = Object.assign({}, assignTarget);  // 얕은 복사[shallow copy]"
          },
          {
            "id": "language-javascript-p03-part-4",
            "title": "스프레드[spread]로 병합[merge] / 복사[copy]",
            "content": "var src1 = { a: 1, b: 2 };\nvar src2 = { b: 9, c: 3 };\nvar spreadMerge = { ...src1, ...src2 };\nvar spreadClone = { ...src1 };",
            "displayContent": "/*** 스프레드[spread]로 병합[merge] / 복사[copy] ***/\nvar src1 = { a: 1, b: 2 };\nvar src2 = { b: 9, c: 3 };\nvar spreadMerge = { ...src1, ...src2 };  // { a:1, b:9, c:3 } (나중이 우선[last-wins])\nvar spreadClone = { ...src1 };           // { a:1, b:2 } (얕은 복사[shallow copy])"
          },
          {
            "id": "language-javascript-p03-part-5",
            "title": "Object.entries / keys / values",
            "content": "var sampleObj = { a: 1, b: 2, c: 3 };\nObject.keys(sampleObj)\nObject.values(sampleObj)\nObject.entries(sampleObj)",
            "displayContent": "/*** Object.entries / keys / values ***/\nvar sampleObj = { a: 1, b: 2, c: 3 };\nObject.keys(sampleObj)    // ['a', 'b', 'c']\nObject.values(sampleObj)  // [1, 2, 3]\nObject.entries(sampleObj) // [['a',1], ['b',2], ['c',3]]"
          },
          {
            "id": "language-javascript-p03-part-6",
            "title": "Object.fromEntries - 배열[array]→객체[object] / Map→객체[object]",
            "content": "Object.fromEntries([['x', 10], ['y', 20]])",
            "displayContent": "/*** Object.fromEntries - 배열[array]→객체[object] / Map→객체[object] ***/\nObject.fromEntries([['x', 10], ['y', 20]])  // { x:10, y:20 }"
          },
          {
            "id": "language-javascript-p03-part-7",
            "title": "값 변환[value transformation] 패턴",
            "content": "var doubleVals = Object.fromEntries(\n  Object.entries({ a: 1, b: 2 }).map(([k, v]) => [k, v * 2])\n);\n\nvar mapToObj = new Map([['p', 1], ['q', 2]]);\nObject.fromEntries(mapToObj)",
            "displayContent": "// 값 변환[value transformation] 패턴\nvar doubleVals = Object.fromEntries(\n  Object.entries({ a: 1, b: 2 }).map(([k, v]) => [k, v * 2])\n);\n// { a:2, b:4 }\n\n// Map → Object\nvar mapToObj = new Map([['p', 1], ['q', 2]]);\nObject.fromEntries(mapToObj)  // { p:1, q:2 }"
          },
          {
            "id": "language-javascript-p03-part-8",
            "title": "Object.hasOwn - 직접 소유 속성[own property] 확인",
            "content": "var hasObj = { x: 1 };\nObject.hasOwn(hasObj, 'x')\nObject.hasOwn(hasObj, 'toString')\n'x'        in hasObj\n'toString' in hasObj",
            "displayContent": "/*** Object.hasOwn - 직접 소유 속성[own property] 확인 ***/\nvar hasObj = { x: 1 };\nObject.hasOwn(hasObj, 'x')        // true  (직접 소유[own])\nObject.hasOwn(hasObj, 'toString') // false (프로토타입 상속[prototype inheritance])\n'x'        in hasObj              // true\n'toString' in hasObj              // true  (상속[inherited] 포함)"
          },
          {
            "id": "language-javascript-p03-part-9",
            "title": "Object.create - 프로토타입[prototype] 지정",
            "content": "var protoBase = { greet() { return `Hi, ${this.name}`; } };\nvar protoChild = Object.create(protoBase);\nprotoChild.name = 'kim';\nprotoChild.greet()\n\nObject.create(null)",
            "displayContent": "/*** Object.create - 프로토타입[prototype] 지정 ***/\nvar protoBase = { greet() { return `Hi, ${this.name}`; } };\nvar protoChild = Object.create(protoBase);\nprotoChild.name = 'kim';\nprotoChild.greet()  // 'Hi, kim'\n\nObject.create(null)  // 프로토타입[prototype] 없는 순수 딕셔너리[plain dictionary]"
          },
          {
            "id": "language-javascript-p03-part-10",
            "title": "Object.freeze / seal",
            "content": "var frozenObj = Object.freeze({ val: 1, inner: { n: 0 } });\nfrozenObj.val = 99;\nfrozenObj.val\nfrozenObj.inner.n = 99;\nfrozenObj.inner.n\n\nvar sealedObj = Object.seal({ val: 1 });\nsealedObj.val = 99;\ndelete sealedObj.val;\nsealedObj.val",
            "displayContent": "/*** Object.freeze / seal ***/\nvar frozenObj = Object.freeze({ val: 1, inner: { n: 0 } });\nfrozenObj.val = 99;     // 무시됨 (strict 모드: TypeError)\nfrozenObj.val           // 1\nfrozenObj.inner.n = 99; // 얕은 동결[shallow freeze] → 중첩 객체는 변경 가능\nfrozenObj.inner.n       // 99\n\nvar sealedObj = Object.seal({ val: 1 });\nsealedObj.val = 99;     // ✅ 값 변경[value mutation] 가능\ndelete sealedObj.val;   // ❌ 삭제[deletion] 불가\nsealedObj.val           // 99"
          },
          {
            "id": "language-javascript-p03-part-11",
            "title": "Object.is - 동일성 비교[identity comparison] (=== 보완)",
            "content": "Object.is(NaN, NaN)\nObject.is(0, -0)\nObject.is({ a: 1 }, { a: 1 })\n\nvar refSame = { a: 1 };\nObject.is(refSame, refSame)",
            "displayContent": "/*** Object.is - 동일성 비교[identity comparison] (=== 보완) ***/\nObject.is(NaN, NaN)    // true  (=== 는 false)\nObject.is(0, -0)       // false (=== 는 true)\nObject.is({ a: 1 }, { a: 1 })  // false (다른 참조[reference])\n\nvar refSame = { a: 1 };\nObject.is(refSame, refSame)     // true"
          },
          {
            "id": "language-javascript-p03-part-12",
            "title": "Computed property - 동적 키[dynamic key]",
            "content": "var prefix = 'item';\nvar dynKeyObj = {\n  [prefix + 1]: 'a',\n  [prefix + 2]: 'b',\n};",
            "displayContent": "/*** Computed property - 동적 키[dynamic key] ***/\nvar prefix = 'item';\nvar dynKeyObj = {\n  [prefix + 1]: 'a',\n  [prefix + 2]: 'b',\n};\n// { item1:'a', item2:'b' }"
          },
          {
            "id": "language-javascript-p03-part-13",
            "title": "Getter / Setter - 접근자 프로퍼티[accessor property]",
            "content": "var tempConv = {\n  _celsius: 0,\n  get fahrenheit() { return this._celsius * 9 / 5 + 32; },\n  set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9; },\n};\ntempConv.fahrenheit = 212;\ntempConv._celsius\ntempConv.fahrenheit",
            "displayContent": "/*** Getter / Setter - 접근자 프로퍼티[accessor property] ***/\nvar tempConv = {\n  _celsius: 0,\n  get fahrenheit() { return this._celsius * 9 / 5 + 32; },\n  set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9; },\n};\ntempConv.fahrenheit = 212;\ntempConv._celsius   // 100\ntempConv.fahrenheit // 212"
          },
          {
            "id": "language-javascript-p03-part-14",
            "title": "이터러블 객체[iterable object] (Symbol.iterator 구현)",
            "content": "var iterableRange = {\n  from: 1,\n  to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from;\n    var last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...iterableRange]",
            "displayContent": "/*** 이터러블 객체[iterable object] (Symbol.iterator 구현) ***/\nvar iterableRange = {\n  from: 1,\n  to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from;\n    var last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...iterableRange]  // [1, 2, 3]"
          },
          {
            "id": "language-javascript-p03-part-15",
            "title": "in 연산자[in operator] / delete",
            "content": "'name' in baseObj\ndelete baseObj.age;\n'age' in baseObj",
            "displayContent": "/*** in 연산자[in operator] / delete ***/\n'name' in baseObj    // true\ndelete baseObj.age;\n'age' in baseObj     // false"
          },
          {
            "id": "language-javascript-p03-part-16",
            "title": "속성 열거[property enumeration] (for...in)",
            "content": "var enumObj = { a: 1, b: 2, c: 3 };\nfor (var key in enumObj) {\n  console.log(key, enumObj[key]);\n}",
            "displayContent": "/*** 속성 열거[property enumeration] (for...in) ***/\nvar enumObj = { a: 1, b: 2, c: 3 };\nfor (var key in enumObj) {\n  console.log(key, enumObj[key]);\n}\n// a 1\n// b 2\n// c 3"
          }
        ]
      },
      {
        "id": "language-javascript-p04",
        "title": "P04.함수",
        "fileName": "P04.함수.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P04.함수.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p04-part-1",
            "title": "함수 선언[function declaration] / 표현식[expression] / 화살표[arrow function]",
            "content": "function declFn(x) { return x * 2; }\nvar exprFn = function (x) { return x * 2; };\nvar arrowFn = x => x * 2;\nvar arrowBlock = x => { return x * 2; };\n\ndeclFn(5)\narrowFn(5)",
            "displayContent": "/*** 함수 선언[function declaration] / 표현식[expression] / 화살표[arrow function] ***/\nfunction declFn(x) { return x * 2; }        // 호이스팅[hoisting] O\nvar exprFn = function (x) { return x * 2; }; // 호이스팅[hoisting] X\nvar arrowFn = x => x * 2;                    // this 없음, 암묵적 반환[implicit return]\nvar arrowBlock = x => { return x * 2; };     // 블록 바디[block body]\n\ndeclFn(5)   // 10\narrowFn(5)  // 10"
          },
          {
            "id": "language-javascript-p04-part-2",
            "title": "기본값 매개변수[default parameter]",
            "content": "function greetFn(name, msg = 'Hello') {\n  return `${msg}, ${name}!`;\n}\ngreetFn('kim')\ngreetFn('lee', 'Hi')",
            "displayContent": "/*** 기본값 매개변수[default parameter] ***/\nfunction greetFn(name, msg = 'Hello') {\n  return `${msg}, ${name}!`;\n}\ngreetFn('kim')           // 'Hello, kim!'\ngreetFn('lee', 'Hi')     // 'Hi, lee!'"
          },
          {
            "id": "language-javascript-p04-part-3",
            "title": "Rest 파라미터[rest parameter]",
            "content": "function sumFn(first, ...rest) {\n  return rest.reduce((acc, n) => acc + n, first);\n}\nsumFn(1, 2, 3, 4)",
            "displayContent": "/*** Rest 파라미터[rest parameter] ***/\nfunction sumFn(first, ...rest) {\n  return rest.reduce((acc, n) => acc + n, first);\n}\nsumFn(1, 2, 3, 4)  // 10"
          },
          {
            "id": "language-javascript-p04-part-4",
            "title": "Function 메타 정보[metadata]",
            "content": "declFn.name\n((a, b) => {}).length\n((a, b, c = 0) => {}).length\n((...args) => {}).length",
            "displayContent": "/*** Function 메타 정보[metadata] ***/\ndeclFn.name                    // 'declFn'\n((a, b) => {}).length          // 2\n((a, b, c = 0) => {}).length   // 2 (기본값[default] 이후는 카운트 안됨)\n((...args) => {}).length       // 0 (rest는 카운트 안됨)"
          },
          {
            "id": "language-javascript-p04-part-5",
            "title": "call / apply / bind - 명시적 this 바인딩[explicit this binding]",
            "content": "function greetCtx(greeting) {\n  return `${greeting}, ${this.name}!`;\n}\nvar ctx = { name: 'park' };\ngreetCtx.call(ctx, 'Hello')\ngreetCtx.apply(ctx, ['Hi'])\nvar boundGreet = greetCtx.bind(ctx);\nboundGreet('Hey')",
            "displayContent": "/*** call / apply / bind - 명시적 this 바인딩[explicit this binding] ***/\nfunction greetCtx(greeting) {\n  return `${greeting}, ${this.name}!`;\n}\nvar ctx = { name: 'park' };\ngreetCtx.call(ctx, 'Hello')            // 'Hello, park!'\ngreetCtx.apply(ctx, ['Hi'])            // 'Hi, park!'\nvar boundGreet = greetCtx.bind(ctx);\nboundGreet('Hey')                      // 'Hey, park!'"
          },
          {
            "id": "language-javascript-p04-part-6",
            "title": "bind로 부분 적용[partial application]",
            "content": "var boundHello = greetCtx.bind(ctx, 'Hola');\nboundHello()",
            "displayContent": "// bind로 부분 적용[partial application]\nvar boundHello = greetCtx.bind(ctx, 'Hola');\nboundHello()  // 'Hola, park!'"
          },
          {
            "id": "language-javascript-p04-part-7",
            "title": "IIFE - 즉시 실행 함수[immediately invoked function expression]",
            "content": "var iifeResult = (function (x) { return x * x; })(5);",
            "displayContent": "/*** IIFE - 즉시 실행 함수[immediately invoked function expression] ***/\nvar iifeResult = (function (x) { return x * x; })(5);  // 25"
          },
          {
            "id": "language-javascript-p04-part-8",
            "title": "클로저[closure] - 상태 은닉[encapsulation]",
            "content": "function makeCounter(start) {\n  var count = start ?? 0;\n  return {\n    increment() { return ++count; },\n    decrement() { return --count; },\n    get value()  { return count; },\n  };\n}\nvar counterA = makeCounter(10);\ncounterA.increment()\ncounterA.increment()\ncounterA.value",
            "displayContent": "/*** 클로저[closure] - 상태 은닉[encapsulation] ***/\nfunction makeCounter(start) {\n  var count = start ?? 0;\n  return {\n    increment() { return ++count; },\n    decrement() { return --count; },\n    get value()  { return count; },\n  };\n}\nvar counterA = makeCounter(10);\ncounterA.increment()  // 11\ncounterA.increment()  // 12\ncounterA.value        // 12"
          },
          {
            "id": "language-javascript-p04-part-9",
            "title": "커링[currying]",
            "content": "var add = a => b => a + b;\nadd(3)(4)\n\nvar add5 = add(5);\nadd5(10)\nadd5(20)",
            "displayContent": "/*** 커링[currying] ***/\nvar add = a => b => a + b;\nadd(3)(4)    // 7\n\nvar add5 = add(5);\nadd5(10)     // 15\nadd5(20)     // 25"
          },
          {
            "id": "language-javascript-p04-part-10",
            "title": "클로저 스코프 체인[closure scope chain]",
            "content": "var closureD = 4;\nvar closureFn = a => b => c => a + b + c + closureD;\nclosureFn(1)(2)(3)",
            "displayContent": "/*** 클로저 스코프 체인[closure scope chain] ***/\nvar closureD = 4;\nvar closureFn = a => b => c => a + b + c + closureD;\nclosureFn(1)(2)(3)  // 10"
          },
          {
            "id": "language-javascript-p04-part-11",
            "title": "재귀[recursion]",
            "content": "function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\nfactorial(5)\n\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\nfibonacci(7)",
            "displayContent": "/*** 재귀[recursion] ***/\nfunction factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\nfactorial(5)  // 120\n\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\nfibonacci(7)  // 13"
          },
          {
            "id": "language-javascript-p04-part-12",
            "title": "제너레이터[generator]",
            "content": "function* rangeGen(start, end, step = 1) {\n  for (var i = start; i <= end; i += step) yield i;\n}\nvar genIter = rangeGen(1, 5);\ngenIter.next()\ngenIter.next()\n\n[...rangeGen(1, 5)]\n[...rangeGen(0, 10, 2)]",
            "displayContent": "/*** 제너레이터[generator] ***/\nfunction* rangeGen(start, end, step = 1) {\n  for (var i = start; i <= end; i += step) yield i;\n}\nvar genIter = rangeGen(1, 5);\ngenIter.next()  // { value:1, done:false }\ngenIter.next()  // { value:2, done:false }\n\n[...rangeGen(1, 5)]        // [1, 2, 3, 4, 5]\n[...rangeGen(0, 10, 2)]    // [0, 2, 4, 6, 8, 10]"
          },
          {
            "id": "language-javascript-p04-part-13",
            "title": "yield* 위임[delegation]",
            "content": "function* innerGen() { yield 'a'; yield 'b'; }\nfunction* outerGen() {\n  yield 1;\n  yield* innerGen();\n  yield 2;\n}\n[...outerGen()]",
            "displayContent": "/*** yield* 위임[delegation] ***/\nfunction* innerGen() { yield 'a'; yield 'b'; }\nfunction* outerGen() {\n  yield 1;\n  yield* innerGen();  // 다른 제너레이터에 위임[delegate]\n  yield 2;\n}\n[...outerGen()]  // [1, 'a', 'b', 2]"
          },
          {
            "id": "language-javascript-p04-part-14",
            "title": "팩토리 함수 패턴[factory function pattern]",
            "content": "function createUser(name, role) {\n  return {\n    name,\n    role,\n    toString() { return `${this.role}:${this.name}`; },\n  };\n}\nvar adminUser = createUser('kim', 'admin');\nadminUser.toString()",
            "displayContent": "/*** 팩토리 함수 패턴[factory function pattern] ***/\nfunction createUser(name, role) {\n  return {\n    name,\n    role,\n    toString() { return `${this.role}:${this.name}`; },\n  };\n}\nvar adminUser = createUser('kim', 'admin');\nadminUser.toString()  // 'admin:kim'"
          },
          {
            "id": "language-javascript-p04-part-15",
            "title": "프로토타입 메서드[prototype method] 추가",
            "content": "function Animal(name, sound) {\n  this.name = name;\n  this.sound = sound;\n}\nAnimal.prototype.speak = function () {\n  return `${this.name} says ${this.sound}`;\n};\nvar dogA = new Animal('Rex', 'Woof');\ndogA.speak()\ndogA instanceof Animal",
            "displayContent": "/*** 프로토타입 메서드[prototype method] 추가 ***/\nfunction Animal(name, sound) {\n  this.name = name;\n  this.sound = sound;\n}\nAnimal.prototype.speak = function () {\n  return `${this.name} says ${this.sound}`;\n};\nvar dogA = new Animal('Rex', 'Woof');\ndogA.speak()  // 'Rex says Woof'\ndogA instanceof Animal  // true"
          },
          {
            "id": "language-javascript-p04-part-16",
            "title": "객체 내부 메서드 패턴[method definition pattern]",
            "content": "var methodObj = {\n  value: 10,",
            "displayContent": "/*** 객체 내부 메서드 패턴[method definition pattern] ***/\nvar methodObj = {\n  value: 10,"
          },
          {
            "id": "language-javascript-p04-part-17",
            "title": "화살표 함수[arrow function]: this 없음 (렉시컬 this[lexical this] 캡처)",
            "content": "  getArrow: () => methodObj.value,\n  getMethod() { return this.value; },\n};\nmethodObj.getArrow()\nmethodObj.getMethod()",
            "displayContent": "  // 화살표 함수[arrow function]: this 없음 (렉시컬 this[lexical this] 캡처)\n  getArrow: () => methodObj.value,\n  // 메서드 단축 표기[method shorthand]: this = 호출 객체[calling object]\n  getMethod() { return this.value; },\n};\nmethodObj.getArrow()   // 10\nmethodObj.getMethod()  // 10"
          }
        ]
      },
      {
        "id": "language-javascript-p05",
        "title": "P05.문자열",
        "fileName": "P05.문자열.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P05.문자열.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p05-part-1",
            "title": "기본 접근[basic access]",
            "content": "var str1 = 'Hello, World!';\nstr1.length\nstr1[0]\nstr1.at(0)\nstr1.at(-1)\nstr1.charAt(7)\nstr1.charCodeAt(0)",
            "displayContent": "/*** 기본 접근[basic access] ***/\nvar str1 = 'Hello, World!';\nstr1.length        // 13\nstr1[0]            // 'H'\nstr1.at(0)         // 'H'\nstr1.at(-1)        // '!'  (음수 인덱스[negative index])\nstr1.charAt(7)     // 'W'\nstr1.charCodeAt(0) // 72"
          },
          {
            "id": "language-javascript-p05-part-2",
            "title": "대소문자 변환[case conversion]",
            "content": "'hello'.toUpperCase()\n'WORLD'.toLowerCase()",
            "displayContent": "/*** 대소문자 변환[case conversion] ***/\n'hello'.toUpperCase()  // 'HELLO'\n'WORLD'.toLowerCase()  // 'world'"
          },
          {
            "id": "language-javascript-p05-part-3",
            "title": "검색[search]",
            "content": "str1.indexOf('o')\nstr1.lastIndexOf('o')\nstr1.indexOf('xyz')\nstr1.includes('World')\nstr1.startsWith('Hello')\nstr1.endsWith('!')\nstr1.search(/[A-Z]/)",
            "displayContent": "/*** 검색[search] ***/\nstr1.indexOf('o')         // 4  (첫 번째 위치)\nstr1.lastIndexOf('o')     // 8  (마지막 위치)\nstr1.indexOf('xyz')       // -1 (없으면 -1)\nstr1.includes('World')    // true\nstr1.startsWith('Hello')  // true\nstr1.endsWith('!')        // true\nstr1.search(/[A-Z]/)      // 0  (정규식[regex], 첫 번째 매치 인덱스)"
          },
          {
            "id": "language-javascript-p05-part-4",
            "title": "추출[extraction]",
            "content": "'Mozilla'.substring(2, 5)\n'Mozilla'.slice(2, 5)\n'Mozilla'.slice(-5)\n'Mozilla'.slice(-5, -2)",
            "displayContent": "/*** 추출[extraction] ***/\n'Mozilla'.substring(2, 5)  // 'zil' (startIndex, endIndex)\n'Mozilla'.slice(2, 5)      // 'zil'\n'Mozilla'.slice(-5)        // 'ozilla' (음수 인덱스[negative index])\n'Mozilla'.slice(-5, -2)    // 'ozil'"
          },
          {
            "id": "language-javascript-p05-part-5",
            "title": "분리[split]",
            "content": "'a,b,c'.split(',')\n'a,b,c'.split(',', 2)\n'hello'.split('')",
            "displayContent": "/*** 분리[split] ***/\n'a,b,c'.split(',')       // ['a', 'b', 'c']\n'a,b,c'.split(',', 2)    // ['a', 'b'] (limit)\n'hello'.split('')         // ['h', 'e', 'l', 'l', 'o']"
          },
          {
            "id": "language-javascript-p05-part-6",
            "title": "반복[repeat] / 패딩[padding] / 공백 제거[trim]",
            "content": "'ab'.repeat(3)\n'5'.padStart(4, '0')\n'5'.padEnd(4, '0')\n'  trim me  '.trim()\n'  trim me  '.trimStart()\n'  trim me  '.trimEnd()",
            "displayContent": "/*** 반복[repeat] / 패딩[padding] / 공백 제거[trim] ***/\n'ab'.repeat(3)              // 'ababab'\n'5'.padStart(4, '0')        // '0005'\n'5'.padEnd(4, '0')          // '5000'\n'  trim me  '.trim()        // 'trim me'\n'  trim me  '.trimStart()   // 'trim me  '\n'  trim me  '.trimEnd()     // '  trim me'"
          },
          {
            "id": "language-javascript-p05-part-7",
            "title": "치환[replace]",
            "content": "'aabbcc'.replace('b', 'X')\n'aabbcc'.replaceAll('b', 'X')\n'aabbcc'.replace(/b/g, 'X')",
            "displayContent": "/*** 치환[replace] ***/\n'aabbcc'.replace('b', 'X')      // 'aXbcc'  (첫 번째만)\n'aabbcc'.replaceAll('b', 'X')   // 'aaXXcc' (전체)\n'aabbcc'.replace(/b/g, 'X')     // 'aaXXcc' (정규식[regex] 플래그 g)"
          },
          {
            "id": "language-javascript-p05-part-8",
            "title": "캡처 그룹[capture group] 참조 ($1, $2, ...)",
            "content": "'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')",
            "displayContent": "// 캡처 그룹[capture group] 참조 ($1, $2, ...)\n'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')  // '18/03/2024'"
          },
          {
            "id": "language-javascript-p05-part-9",
            "title": "정규식 매치[regex match]",
            "content": "var str2 = 'cat bat sat';\nstr2.match(/[bcs]at/g)\nstr2.replace(/[bcs]at/g, 'hat')",
            "displayContent": "/*** 정규식 매치[regex match] ***/\nvar str2 = 'cat bat sat';\nstr2.match(/[bcs]at/g)           // ['cat', 'bat', 'sat']\nstr2.replace(/[bcs]at/g, 'hat')  // 'hat hat hat'"
          },
          {
            "id": "language-javascript-p05-part-10",
            "title": "matchAll - 이터레이터[iterator] 반환",
            "content": "var regexAll = /(\\d+)/g;\nvar str3 = 'abc 123 def 456';\n[...str3.matchAll(regexAll)].map(m => m[0])",
            "displayContent": "// matchAll - 이터레이터[iterator] 반환\nvar regexAll = /(\\d+)/g;\nvar str3 = 'abc 123 def 456';\n[...str3.matchAll(regexAll)].map(m => m[0])  // ['123', '456']"
          },
          {
            "id": "language-javascript-p05-part-11",
            "title": "연결[concatenation]",
            "content": "'Hello'.concat(', ', 'World', '!')",
            "displayContent": "/*** 연결[concatenation] ***/\n'Hello'.concat(', ', 'World', '!')  // 'Hello, World!'"
          },
          {
            "id": "language-javascript-p05-part-12",
            "title": "템플릿 리터럴[template literal]",
            "content": "var tplName = 'kim';\nvar tplScore = 95;\n`이름: ${tplName}, 점수: ${tplScore}점`\n`${tplScore >= 90 ? '우수' : '보통'}`",
            "displayContent": "/*** 템플릿 리터럴[template literal] ***/\nvar tplName = 'kim';\nvar tplScore = 95;\n`이름: ${tplName}, 점수: ${tplScore}점`  // '이름: kim, 점수: 95점'\n`${tplScore >= 90 ? '우수' : '보통'}`   // '우수'"
          },
          {
            "id": "language-javascript-p05-part-13",
            "title": "멀티라인[multiline]",
            "content": "var multiLine = `첫 번째 줄\n두 번째 줄`;\nmultiLine",
            "displayContent": "// 멀티라인[multiline]\nvar multiLine = `첫 번째 줄\n두 번째 줄`;\nmultiLine  // '첫 번째 줄\\n두 번째 줄'"
          },
          {
            "id": "language-javascript-p05-part-14",
            "title": "String.raw - 이스케이프 비처리[raw string]",
            "content": "String.raw`C:\\Users\\name`\nString.raw`\\n \\t \\r`",
            "displayContent": "/*** String.raw - 이스케이프 비처리[raw string] ***/\nString.raw`C:\\Users\\name`     // 'C:\\\\Users\\\\name'\nString.raw`\\n \\t \\r`          // '\\\\n \\\\t \\\\r'"
          },
          {
            "id": "language-javascript-p05-part-15",
            "title": "문자 코드[character code] 변환",
            "content": "String.fromCharCode(65, 66, 67)\n'A'.charCodeAt(0)",
            "displayContent": "/*** 문자 코드[character code] 변환 ***/\nString.fromCharCode(65, 66, 67)  // 'ABC'\n'A'.charCodeAt(0)                // 65"
          },
          {
            "id": "language-javascript-p05-part-16",
            "title": "이터러블[iterable] - 스프레드[spread] / for...of",
            "content": "[...'ABC']\nfor (var ch of 'hi') { console.log(ch); }",
            "displayContent": "/*** 이터러블[iterable] - 스프레드[spread] / for...of ***/\n[...'ABC']  // ['A', 'B', 'C']\nfor (var ch of 'hi') { console.log(ch); }\n// h\n// i"
          },
          {
            "id": "language-javascript-p05-part-17",
            "title": "숫자→문자열 변환[number-to-string conversion]",
            "content": "(255).toString(16)\n(255).toString(2)\n(3.14159).toFixed(2)",
            "displayContent": "/*** 숫자→문자열 변환[number-to-string conversion] ***/\n(255).toString(16)   // 'ff'  (16진수[hexadecimal])\n(255).toString(2)    // '11111111' (2진수[binary])\n(3.14159).toFixed(2) // '3.14'"
          }
        ]
      },
      {
        "id": "language-javascript-p06",
        "title": "P06.클래스",
        "fileName": "P06.클래스.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P06.클래스.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p06-part-1",
            "title": "기본 클래스[basic class]",
            "content": "class Vehicle {\n  static count = 0;\n  #fuel;\n\n  constructor(type, fuel) {\n    this.type = type;\n    this.#fuel = fuel;\n    Vehicle.count++;\n  }\n\n  getFuel()  { return this.#fuel; }\n  describe() { return `${this.type} (${this.#fuel})`; }\n\n  static getCount() { return Vehicle.count; }\n}\n\nvar car1 = new Vehicle('car', 'gasoline');\nvar car2 = new Vehicle('bike', 'none');\ncar1.describe()\ncar1.getFuel()\nVehicle.count\nVehicle.getCount()",
            "displayContent": "/*** 기본 클래스[basic class] ***/\nclass Vehicle {\n  static count = 0;          // 정적 속성[static field] (인스턴스 공유 안됨)\n  #fuel;                     // 프라이빗 필드[private field] (클래스 외부 접근 불가)\n\n  constructor(type, fuel) {\n    this.type = type;\n    this.#fuel = fuel;\n    Vehicle.count++;\n  }\n\n  getFuel()  { return this.#fuel; }                    // 프라이빗 접근자[private accessor]\n  describe() { return `${this.type} (${this.#fuel})`; }\n\n  static getCount() { return Vehicle.count; }          // 정적 메서드[static method]\n}\n\nvar car1 = new Vehicle('car', 'gasoline');\nvar car2 = new Vehicle('bike', 'none');\ncar1.describe()         // 'car (gasoline)'\ncar1.getFuel()          // 'gasoline'\nVehicle.count           // 2\nVehicle.getCount()      // 2"
          },
          {
            "id": "language-javascript-p06-part-2",
            "title": "Getter / Setter - 접근자 프로퍼티[accessor property]",
            "content": "class Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  get area()          { return Math.PI * this.radius ** 2; }\n  get circumference() { return 2 * Math.PI * this.radius; }\n  set diameter(d)     { this.radius = d / 2; }\n}\n\nvar circle1 = new Circle(5);\ncircle1.area.toFixed(2)\ncircle1.circumference.toFixed(2)\ncircle1.diameter = 20;\ncircle1.radius",
            "displayContent": "/*** Getter / Setter - 접근자 프로퍼티[accessor property] ***/\nclass Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  get area()          { return Math.PI * this.radius ** 2; }\n  get circumference() { return 2 * Math.PI * this.radius; }\n  set diameter(d)     { this.radius = d / 2; }\n}\n\nvar circle1 = new Circle(5);\ncircle1.area.toFixed(2)           // '78.54'\ncircle1.circumference.toFixed(2)  // '31.42'\ncircle1.diameter = 20;\ncircle1.radius                    // 10"
          },
          {
            "id": "language-javascript-p06-part-3",
            "title": "상속[inheritance] (extends / super)",
            "content": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() { return `${this.name} makes a noise.`; }\n  toString() { return `Animal(${this.name})`; }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n  speak() {\n    return `${this.name} barks.`;\n  }\n  parentSpeak() {\n    return super.speak();\n  }\n}\n\nvar dog1 = new Dog('Rex', 'Labrador');\ndog1.speak()\ndog1.parentSpeak()\ndog1.toString()\ndog1 instanceof Dog\ndog1 instanceof Animal",
            "displayContent": "/*** 상속[inheritance] (extends / super) ***/\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() { return `${this.name} makes a noise.`; }\n  toString() { return `Animal(${this.name})`; }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);          // 부모[parent] constructor 호출 필수 (this 사용 전)\n    this.breed = breed;\n  }\n  speak() {               // 오버라이드[override]\n    return `${this.name} barks.`;\n  }\n  parentSpeak() {\n    return super.speak(); // 부모 메서드[parent method] 호출\n  }\n}\n\nvar dog1 = new Dog('Rex', 'Labrador');\ndog1.speak()         // 'Rex barks.'\ndog1.parentSpeak()   // 'Rex makes a noise.'\ndog1.toString()      // 'Animal(Rex)'  (상속[inheritance])\ndog1 instanceof Dog      // true\ndog1 instanceof Animal   // true"
          },
          {
            "id": "language-javascript-p06-part-4",
            "title": "정적 초기화 블록[static initialization block]",
            "content": "class Config {\n  static host;\n  static port;\n  static {\n    Config.host = 'localhost';\n    Config.port = 3000;\n  }\n}\nConfig.host\nConfig.port",
            "displayContent": "/*** 정적 초기화 블록[static initialization block] ***/\nclass Config {\n  static host;\n  static port;\n  static {\n    Config.host = 'localhost';\n    Config.port = 3000;\n  }\n}\nConfig.host  // 'localhost'\nConfig.port  // 3000"
          },
          {
            "id": "language-javascript-p06-part-5",
            "title": "클래스 표현식[class expression]",
            "content": "var Rectangle = class {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() { return this.w * this.h; }\n};\nnew Rectangle(4, 5).area",
            "displayContent": "/*** 클래스 표현식[class expression] ***/\nvar Rectangle = class {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() { return this.w * this.h; }\n};\nnew Rectangle(4, 5).area  // 20"
          },
          {
            "id": "language-javascript-p06-part-6",
            "title": "믹스인 패턴[mixin pattern]",
            "content": "var Serializable = Base => class extends Base {\n  serialize() { return JSON.stringify(this); }\n};\n\nvar Timestamped = Base => class extends Base {\n  constructor(...args) {\n    super(...args);\n    this.createdAt = new Date().toISOString().slice(0, 10);\n  }\n};\n\nclass BaseEntity {\n  constructor(data) { Object.assign(this, data); }\n}\n\nclass UserEntity extends Serializable(Timestamped(BaseEntity)) {}\n\nvar userEntity = new UserEntity({ id: 1, name: 'kim' });\nuserEntity.serialize()",
            "displayContent": "/*** 믹스인 패턴[mixin pattern] ***/\nvar Serializable = Base => class extends Base {\n  serialize() { return JSON.stringify(this); }\n};\n\nvar Timestamped = Base => class extends Base {\n  constructor(...args) {\n    super(...args);\n    this.createdAt = new Date().toISOString().slice(0, 10);\n  }\n};\n\nclass BaseEntity {\n  constructor(data) { Object.assign(this, data); }\n}\n\nclass UserEntity extends Serializable(Timestamped(BaseEntity)) {}\n\nvar userEntity = new UserEntity({ id: 1, name: 'kim' });\nuserEntity.serialize()   // '{\"id\":1,\"name\":\"kim\",\"createdAt\":\"2026-03-18\"}'"
          },
          {
            "id": "language-javascript-p06-part-7",
            "title": "내장 클래스 상속[built-in class inheritance]",
            "content": "class TypedArray extends Array {\n  sum() { return this.reduce((acc, n) => acc + n, 0); }\n  avg() { return this.sum() / this.length; }\n}\n\nvar nums = new TypedArray(10, 20, 30);\nnums.sum()\nnums.avg()\nnums.map(n => n * 2)",
            "displayContent": "/*** 내장 클래스 상속[built-in class inheritance] ***/\nclass TypedArray extends Array {\n  sum() { return this.reduce((acc, n) => acc + n, 0); }\n  avg() { return this.sum() / this.length; }\n}\n\nvar nums = new TypedArray(10, 20, 30);\nnums.sum()           // 60\nnums.avg()           // 20\nnums.map(n => n * 2) // TypedArray [20, 40, 60]"
          },
          {
            "id": "language-javascript-p06-part-8",
            "title": "instanceof / constructor 확인[inspection]",
            "content": "dog1.constructor === Dog\ndog1.constructor.name\nObject.getPrototypeOf(dog1) === Dog.prototype",
            "displayContent": "/*** instanceof / constructor 확인[inspection] ***/\ndog1.constructor === Dog                        // true\ndog1.constructor.name                           // 'Dog'\nObject.getPrototypeOf(dog1) === Dog.prototype   // true"
          }
        ]
      },
      {
        "id": "language-javascript-p07",
        "title": "P07.비동기",
        "fileName": "P07.비동기.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P07.비동기.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p07-part-1",
            "title": "Promise 기본 생성[basic construction]",
            "content": "var pBasic = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('완료'), 100);\n});\npBasic.then(v => console.log(v));",
            "displayContent": "/*** Promise 기본 생성[basic construction] ***/\nvar pBasic = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('완료'), 100);\n});\npBasic.then(v => console.log(v));   // '완료'"
          },
          {
            "id": "language-javascript-p07-part-2",
            "title": "Promise.resolve / reject 단축[shorthand]",
            "content": "Promise.resolve(42).then(v => console.log(v));\nPromise.reject(new Error('실패')).catch(e => console.error(e.message));",
            "displayContent": "/*** Promise.resolve / reject 단축[shorthand] ***/\nPromise.resolve(42).then(v => console.log(v));                          // 42\nPromise.reject(new Error('실패')).catch(e => console.error(e.message)); // '실패'"
          },
          {
            "id": "language-javascript-p07-part-3",
            "title": "then / catch / finally 체인[chain]",
            "content": "Promise.resolve(1)\n  .then(v => v + 1)\n  .then(v => { if (v > 1) throw new Error('too big'); return v; })\n  .catch(e => { console.error(e.message); return 0; })\n  .finally(() => console.log('정리 완료'));",
            "displayContent": "/*** then / catch / finally 체인[chain] ***/\nPromise.resolve(1)\n  .then(v => v + 1)           // 2\n  .then(v => { if (v > 1) throw new Error('too big'); return v; })\n  .catch(e => { console.error(e.message); return 0; })  // 'too big' → 0\n  .finally(() => console.log('정리 완료'));              // 항상 실행[always runs]"
          },
          {
            "id": "language-javascript-p07-part-4",
            "title": "Promise.all - 전체 성공 대기[wait for all] (병렬[parallel])",
            "content": "Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2),\n  new Promise(r => setTimeout(() => r(3), 50)),\n]).then(values => console.log(values));",
            "displayContent": "/*** Promise.all - 전체 성공 대기[wait for all] (병렬[parallel]) ***/\nPromise.all([\n  Promise.resolve(1),\n  Promise.resolve(2),\n  new Promise(r => setTimeout(() => r(3), 50)),\n]).then(values => console.log(values));\n// [1, 2, 3]"
          },
          {
            "id": "language-javascript-p07-part-5",
            "title": "하나라도 reject → 즉시 거부[short-circuit rejection]",
            "content": "Promise.all([\n  Promise.resolve('ok'),\n  Promise.reject(new Error('fail')),\n]).catch(e => console.error(e.message));",
            "displayContent": "// 하나라도 reject → 즉시 거부[short-circuit rejection]\nPromise.all([\n  Promise.resolve('ok'),\n  Promise.reject(new Error('fail')),\n]).catch(e => console.error(e.message));  // 'fail'"
          },
          {
            "id": "language-javascript-p07-part-6",
            "title": "Promise.allSettled - 전부 완료 후 결과 수집[settle all]",
            "content": "Promise.allSettled([\n  Promise.resolve(1),\n  Promise.reject(new Error('oops')),\n]).then(results => console.log(results));",
            "displayContent": "/*** Promise.allSettled - 전부 완료 후 결과 수집[settle all] ***/\nPromise.allSettled([\n  Promise.resolve(1),\n  Promise.reject(new Error('oops')),\n]).then(results => console.log(results));\n// [\n//   { status:'fulfilled', value: 1 },\n//   { status:'rejected',  reason: Error: oops },\n// ]"
          },
          {
            "id": "language-javascript-p07-part-7",
            "title": "Promise.any - 가장 먼저 이행[first fulfilled]",
            "content": "Promise.any([\n  Promise.reject('a'),\n  new Promise(r => setTimeout(() => r('b'), 100)),\n  new Promise(r => setTimeout(() => r('c'), 50)),\n]).then(v => console.log(v));",
            "displayContent": "/*** Promise.any - 가장 먼저 이행[first fulfilled] ***/\nPromise.any([\n  Promise.reject('a'),\n  new Promise(r => setTimeout(() => r('b'), 100)),\n  new Promise(r => setTimeout(() => r('c'), 50)),\n]).then(v => console.log(v));  // 'c'"
          },
          {
            "id": "language-javascript-p07-part-8",
            "title": "전부 reject → AggregateError",
            "content": "Promise.any([Promise.reject('x'), Promise.reject('y')])\n  .catch(e => console.log(e.constructor.name));",
            "displayContent": "// 전부 reject → AggregateError\nPromise.any([Promise.reject('x'), Promise.reject('y')])\n  .catch(e => console.log(e.constructor.name));  // 'AggregateError'"
          },
          {
            "id": "language-javascript-p07-part-9",
            "title": "Promise.race - 가장 먼저 정산[first settled] (resolve or reject)",
            "content": "Promise.race([\n  new Promise(r => setTimeout(() => r('slow'), 200)),\n  new Promise(r => setTimeout(() => r('fast'), 50)),\n]).then(v => console.log(v));",
            "displayContent": "/*** Promise.race - 가장 먼저 정산[first settled] (resolve or reject) ***/\nPromise.race([\n  new Promise(r => setTimeout(() => r('slow'), 200)),\n  new Promise(r => setTimeout(() => r('fast'), 50)),\n]).then(v => console.log(v));  // 'fast'"
          },
          {
            "id": "language-javascript-p07-part-10",
            "title": "async / await 기본",
            "content": "async function fetchData(id) {\n  var data = await Promise.resolve({ id, name: 'kim' });\n  return data;\n}\nfetchData(1).then(d => console.log(d));",
            "displayContent": "/*** async / await 기본 ***/\nasync function fetchData(id) {\n  var data = await Promise.resolve({ id, name: 'kim' });  // 비동기 대기[async await]\n  return data;\n}\nfetchData(1).then(d => console.log(d));  // { id:1, name:'kim' }"
          },
          {
            "id": "language-javascript-p07-part-11",
            "title": "async / await - try/catch 에러 처리[error handling]",
            "content": "async function safeFetch(url) {\n  try {\n    var res = await Promise.reject(new Error('네트워크 오류'));\n    return res;\n  } catch (err) {\n    console.error('에러:', err.message);\n    return null;\n  } finally {\n    console.log('요청 종료');\n  }\n}\nsafeFetch('/api/data');",
            "displayContent": "/*** async / await - try/catch 에러 처리[error handling] ***/\nasync function safeFetch(url) {\n  try {\n    var res = await Promise.reject(new Error('네트워크 오류'));\n    return res;\n  } catch (err) {\n    console.error('에러:', err.message);  // '에러: 네트워크 오류'\n    return null;\n  } finally {\n    console.log('요청 종료');  // 항상 실행[always runs]\n  }\n}\nsafeFetch('/api/data');"
          },
          {
            "id": "language-javascript-p07-part-12",
            "title": "순차 실행[sequential execution]",
            "content": "async function sequential() {\n  var a = await Promise.resolve(1);\n  var b = await Promise.resolve(2);\n  var c = await Promise.resolve(3);\n  return a + b + c;\n}\nsequential().then(v => console.log(v));",
            "displayContent": "/*** 순차 실행[sequential execution] ***/\nasync function sequential() {\n  var a = await Promise.resolve(1);\n  var b = await Promise.resolve(2);  // a 완료 후 실행[after a resolves]\n  var c = await Promise.resolve(3);  // b 완료 후 실행[after b resolves]\n  return a + b + c;\n}\nsequential().then(v => console.log(v));  // 6"
          },
          {
            "id": "language-javascript-p07-part-13",
            "title": "병렬 실행[parallel execution] - Promise.all + await",
            "content": "async function parallel() {\n  var [a, b, c] = await Promise.all([\n    Promise.resolve(10),\n    Promise.resolve(20),\n    Promise.resolve(30),\n  ]);\n  return a + b + c;\n}\nparallel().then(v => console.log(v));",
            "displayContent": "/*** 병렬 실행[parallel execution] - Promise.all + await ***/\nasync function parallel() {\n  var [a, b, c] = await Promise.all([\n    Promise.resolve(10),\n    Promise.resolve(20),\n    Promise.resolve(30),\n  ]);\n  return a + b + c;\n}\nparallel().then(v => console.log(v));  // 60"
          },
          {
            "id": "language-javascript-p07-part-14",
            "title": "비동기 이터레이터[async iterator] (for await...of)",
            "content": "async function* asyncCounter(start, end) {\n  for (var i = start; i <= end; i++) {\n    await new Promise(r => setTimeout(r, 10));\n    yield i;\n  }\n}\n\nasync function runCounter() {\n  for await (var num of asyncCounter(1, 3)) {\n    console.log(num);\n  }\n}\nrunCounter();",
            "displayContent": "/*** 비동기 이터레이터[async iterator] (for await...of) ***/\nasync function* asyncCounter(start, end) {\n  for (var i = start; i <= end; i++) {\n    await new Promise(r => setTimeout(r, 10));  // 딜레이[delay] 10ms\n    yield i;\n  }\n}\n\nasync function runCounter() {\n  for await (var num of asyncCounter(1, 3)) {\n    console.log(num);\n  }\n}\nrunCounter();\n// 1\n// 2\n// 3"
          },
          {
            "id": "language-javascript-p07-part-15",
            "title": "에러를 값으로 처리하는 패턴[error-as-value pattern]",
            "content": "async function safeAll() {\n  var results = await Promise.all([\n    Promise.resolve('ok').catch(e => e),\n    Promise.reject(new Error('fail')).catch(e => e),\n  ]);\n  console.log(results);\n}\nsafeAll();",
            "displayContent": "/*** 에러를 값으로 처리하는 패턴[error-as-value pattern] ***/\nasync function safeAll() {\n  var results = await Promise.all([\n    Promise.resolve('ok').catch(e => e),\n    Promise.reject(new Error('fail')).catch(e => e),\n  ]);\n  console.log(results);\n}\nsafeAll();\n// ['ok', Error: fail]"
          }
        ]
      },
      {
        "id": "language-javascript-p08",
        "title": "P08.컬렉션-심볼",
        "fileName": "P08.컬렉션-심볼.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P08.컬렉션-심볼.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p08-part-1",
            "title": "Map - 키-값[key-value] 저장[storage] (키 타입[key type] 제한 없음)",
            "content": "var mapA = new Map();\nmapA.set('name', 'kim');\nmapA.set(42, 'forty-two');\nmapA.set({ id: 1 }, 'objKey');\nmapA.get('name')\nmapA.get(42)\nmapA.has('name')\nmapA.size\nmapA.delete('name');\nmapA.size",
            "displayContent": "/*** Map - 키-값[key-value] 저장[storage] (키 타입[key type] 제한 없음) ***/\nvar mapA = new Map();\nmapA.set('name', 'kim');\nmapA.set(42, 'forty-two');\nmapA.set({ id: 1 }, 'objKey');  // 객체도 키[key] 가능\nmapA.get('name')    // 'kim'\nmapA.get(42)        // 'forty-two'\nmapA.has('name')    // true\nmapA.size           // 3\nmapA.delete('name');\nmapA.size           // 2"
          },
          {
            "id": "language-javascript-p08-part-2",
            "title": "Map 생성 - 배열[array]로 초기화[initialize]",
            "content": "var mapB = new Map([['a', 1], ['b', 2], ['c', 3]]);\nmapB.get('b')",
            "displayContent": "/*** Map 생성 - 배열[array]로 초기화[initialize] ***/\nvar mapB = new Map([['a', 1], ['b', 2], ['c', 3]]);\nmapB.get('b')   // 2"
          },
          {
            "id": "language-javascript-p08-part-3",
            "title": "Map 순회[iteration]",
            "content": "for (var [k, v] of mapB) {\n  console.log(k, v);\n}\n\n[...mapB.keys()]\n[...mapB.values()]\n[...mapB.entries()]\n\nmapB.forEach((v, k) => console.log(k, v));",
            "displayContent": "/*** Map 순회[iteration] ***/\nfor (var [k, v] of mapB) {\n  console.log(k, v);\n}\n// a 1\n// b 2\n// c 3\n\n[...mapB.keys()]    // ['a', 'b', 'c']\n[...mapB.values()]  // [1, 2, 3]\n[...mapB.entries()] // [['a',1], ['b',2], ['c',3]]\n\nmapB.forEach((v, k) => console.log(k, v));\n// a 1 / b 2 / c 3"
          },
          {
            "id": "language-javascript-p08-part-4",
            "title": "Map ↔ Object 변환[conversion]",
            "content": "var mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));\n\nObject.fromEntries(mapFromObj)",
            "displayContent": "/*** Map ↔ Object 변환[conversion] ***/\nvar mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));\n// Map { 'x' => 10, 'y' => 20 }\n\nObject.fromEntries(mapFromObj)\n// { x: 10, y: 20 }"
          },
          {
            "id": "language-javascript-p08-part-5",
            "title": "WeakMap - 약한 참조[weak reference] (GC 대상[GC-eligible], 열거 불가[non-enumerable])",
            "content": "var weakMapA = new WeakMap();\nvar wmKey = {};\nweakMapA.set(wmKey, 'private-data');\nweakMapA.get(wmKey)\nweakMapA.has(wmKey)",
            "displayContent": "/*** WeakMap - 약한 참조[weak reference] (GC 대상[GC-eligible], 열거 불가[non-enumerable]) ***/\nvar weakMapA = new WeakMap();\nvar wmKey = {};\nweakMapA.set(wmKey, 'private-data');\nweakMapA.get(wmKey)   // 'private-data'\nweakMapA.has(wmKey)   // true\n// wmKey = null; → GC 수거[garbage collection] 시 WeakMap에서도 자동 제거"
          },
          {
            "id": "language-javascript-p08-part-6",
            "title": "Set - 중복 없는 값 컬렉션[unique value collection]",
            "content": "var setA = new Set([1, 2, 3, 2, 1]);\nsetA.size\nsetA.has(2)\nsetA.add(4);\nsetA.delete(1);\n[...setA]",
            "displayContent": "/*** Set - 중복 없는 값 컬렉션[unique value collection] ***/\nvar setA = new Set([1, 2, 3, 2, 1]);  // 중복 자동 제거[automatic deduplication]\nsetA.size    // 3\nsetA.has(2)  // true\nsetA.add(4);\nsetA.delete(1);\n[...setA]    // [2, 3, 4]"
          },
          {
            "id": "language-javascript-p08-part-7",
            "title": "Set 활용 - 배열 중복 제거[array deduplication]",
            "content": "var dupArr = [1, 2, 2, 3, 3, 3, 4];\nvar uniqArr = [...new Set(dupArr)];",
            "displayContent": "/*** Set 활용 - 배열 중복 제거[array deduplication] ***/\nvar dupArr = [1, 2, 2, 3, 3, 3, 4];\nvar uniqArr = [...new Set(dupArr)];  // [1, 2, 3, 4]"
          },
          {
            "id": "language-javascript-p08-part-8",
            "title": "Set 순회[iteration]",
            "content": "var setB = new Set(['X', 'Y', 'Z']);\nfor (var item of setB) { console.log(item); }",
            "displayContent": "/*** Set 순회[iteration] ***/\nvar setB = new Set(['X', 'Y', 'Z']);\nfor (var item of setB) { console.log(item); }\n// X / Y / Z"
          },
          {
            "id": "language-javascript-p08-part-9",
            "title": "Set 집합 연산[set operation]",
            "content": "var setX = new Set([1, 2, 3, 4]);\nvar setY = new Set([3, 4, 5, 6]);\n\nvar union        = new Set([...setX, ...setY]);\nvar intersection = new Set([...setX].filter(v =>  setY.has(v)));\nvar difference   = new Set([...setX].filter(v => !setY.has(v)));\n\n[...union]\n[...intersection]\n[...difference]",
            "displayContent": "/*** Set 집합 연산[set operation] ***/\nvar setX = new Set([1, 2, 3, 4]);\nvar setY = new Set([3, 4, 5, 6]);\n\nvar union        = new Set([...setX, ...setY]);                          // 합집합[union]: {1,2,3,4,5,6}\nvar intersection = new Set([...setX].filter(v =>  setY.has(v)));         // 교집합[intersection]: {3,4}\nvar difference   = new Set([...setX].filter(v => !setY.has(v)));         // 차집합[difference]: {1,2}\n\n[...union]        // [1, 2, 3, 4, 5, 6]\n[...intersection] // [3, 4]\n[...difference]   // [1, 2]"
          },
          {
            "id": "language-javascript-p08-part-10",
            "title": "WeakSet - 약한 참조[weak reference] 객체 집합",
            "content": "var weakSetA = new WeakSet();\nvar wsObj = { id: 1 };\nweakSetA.add(wsObj);\nweakSetA.has(wsObj)",
            "displayContent": "/*** WeakSet - 약한 참조[weak reference] 객체 집합 ***/\nvar weakSetA = new WeakSet();\nvar wsObj = { id: 1 };\nweakSetA.add(wsObj);\nweakSetA.has(wsObj)   // true\n// wsObj = null; → GC 수거[garbage collection] 시 자동 제거"
          },
          {
            "id": "language-javascript-p08-part-11",
            "title": "Symbol - 고유 식별자[unique identifier]",
            "content": "var symA = Symbol('description');\nvar symB = Symbol('description');\nsymA === symB\nsymA.toString()\nsymA.description\ntypeof symA",
            "displayContent": "/*** Symbol - 고유 식별자[unique identifier] ***/\nvar symA = Symbol('description');\nvar symB = Symbol('description');\nsymA === symB            // false (항상 고유[always unique])\nsymA.toString()          // 'Symbol(description)'\nsymA.description         // 'description'\ntypeof symA              // 'symbol'"
          },
          {
            "id": "language-javascript-p08-part-12",
            "title": "Symbol을 객체 키[object key]로 사용",
            "content": "var symId = Symbol('id');\nvar symRole = Symbol('role');\nvar symObj = {\n  [symId]: 42,\n  [symRole]: 'admin',\n  name: 'kim',\n};\nsymObj[symId]\nsymObj[symRole]\nObject.keys(symObj)\nObject.getOwnPropertySymbols(symObj)",
            "displayContent": "/*** Symbol을 객체 키[object key]로 사용 ***/\nvar symId = Symbol('id');\nvar symRole = Symbol('role');\nvar symObj = {\n  [symId]: 42,\n  [symRole]: 'admin',\n  name: 'kim',\n};\nsymObj[symId]           // 42\nsymObj[symRole]         // 'admin'\nObject.keys(symObj)     // ['name']  (Symbol은 열거[enumeration] 안됨)\nObject.getOwnPropertySymbols(symObj)  // [Symbol(id), Symbol(role)]"
          },
          {
            "id": "language-javascript-p08-part-13",
            "title": "Symbol.for - 전역 레지스트리[global registry] (공유[shared] 가능)",
            "content": "var globalSym1 = Symbol.for('shared');\nvar globalSym2 = Symbol.for('shared');\nglobalSym1 === globalSym2\nSymbol.keyFor(globalSym1)",
            "displayContent": "/*** Symbol.for - 전역 레지스트리[global registry] (공유[shared] 가능) ***/\nvar globalSym1 = Symbol.for('shared');\nvar globalSym2 = Symbol.for('shared');\nglobalSym1 === globalSym2  // true (같은 키면 동일 심볼)\nSymbol.keyFor(globalSym1)  // 'shared'"
          },
          {
            "id": "language-javascript-p08-part-14",
            "title": "Well-known Symbol - Symbol.iterator (이터레이터 프로토콜[iterator protocol])",
            "content": "var rangeObj = {\n  from: 1, to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from, last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...rangeObj]",
            "displayContent": "/*** Well-known Symbol - Symbol.iterator (이터레이터 프로토콜[iterator protocol]) ***/\nvar rangeObj = {\n  from: 1, to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from, last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...rangeObj]  // [1, 2, 3]"
          },
          {
            "id": "language-javascript-p08-part-15",
            "title": "Well-known Symbol - Symbol.toPrimitive (타입 강제 변환[type coercion])",
            "content": "var customNum = {\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') return 42;\n    if (hint === 'string') return 'forty-two';\n    return true;\n  }\n};\n+customNum\n`${customNum}`\ncustomNum + ''",
            "displayContent": "/*** Well-known Symbol - Symbol.toPrimitive (타입 강제 변환[type coercion]) ***/\nvar customNum = {\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') return 42;\n    if (hint === 'string') return 'forty-two';\n    return true;  // 기본값[default hint]\n  }\n};\n+customNum            // 42\n`${customNum}`        // 'forty-two'\ncustomNum + ''        // 'true'"
          }
        ]
      },
      {
        "id": "language-javascript-p09",
        "title": "P09.정규식",
        "fileName": "P09.정규식.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P09.정규식.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p09-part-1",
            "title": "생성[creation] - 리터럴[literal] vs 생성자[constructor]",
            "content": "var reLiteral = /hello/gi;\nvar reConstructor = new RegExp('hello', 'gi');\n\nreLiteral.test('Hello World')\nreConstructor.test('HELLO')",
            "displayContent": "/*** 생성[creation] - 리터럴[literal] vs 생성자[constructor] ***/\nvar reLiteral = /hello/gi;                    // 리터럴[literal] 표기 (컴파일 타임)\nvar reConstructor = new RegExp('hello', 'gi'); // 생성자[constructor] (런타임, 동적 패턴)\n\nreLiteral.test('Hello World')   // true\nreConstructor.test('HELLO')     // true"
          },
          {
            "id": "language-javascript-p09-part-2",
            "title": "d  → 인덱스[indices]          - 매치 시작/끝 인덱스 제공",
            "content": "'aBcDeF'.match(/[a-z]/g)\n'aBcDeF'.match(/[a-z]/gi)\n\n'line1\\nline2'.match(/^\\w+/m)\n'line1\\nline2'.match(/^\\w+/gm)\n\n'hello\\nworld'.match(/hello.world/s)",
            "displayContent": "// d  → 인덱스[indices]          - 매치 시작/끝 인덱스 제공\n\n'aBcDeF'.match(/[a-z]/g)   // ['a', 'c', 'e']       (g: 전체)\n'aBcDeF'.match(/[a-z]/gi)  // ['a', 'B', 'c', 'D', 'e', 'F'] (i: 대소문자 무시)\n\n'line1\\nline2'.match(/^\\w+/m)    // ['line1'] (m 없으면 첫 줄만)\n'line1\\nline2'.match(/^\\w+/gm)   // ['line1', 'line2'] (m: 각 줄의 ^)\n\n'hello\\nworld'.match(/hello.world/s)  // ['hello\\nworld'] (s: . 이 \\n 매치)"
          },
          {
            "id": "language-javascript-p09-part-3",
            "title": "앵커[anchor]",
            "content": "'Hello World'.match(/^Hello/)\n'Hello World'.match(/World$/)\n\n'cat cats'.match(/\\bcat\\b/g)\n'cat cats'.match(/cat\\B/g)",
            "displayContent": "/*** 앵커[anchor] ***/\n'Hello World'.match(/^Hello/)   // ['Hello']  (^ 문자열 시작[start of string])\n'Hello World'.match(/World$/)   // ['World']  ($ 문자열 끝[end of string])\n\n'cat cats'.match(/\\bcat\\b/g)    // ['cat']     (\\b 단어 경계[word boundary])\n'cat cats'.match(/cat\\B/g)      // ['cat']     (\\B 단어 경계가 아님[non-word boundary])"
          },
          {
            "id": "language-javascript-p09-part-4",
            "title": "문자 클래스[character class]",
            "content": "'a1 b2'.match(/\\d/g)\n'a1 b2'.match(/\\D/g)\n'a1 b2'.match(/\\w/g)\n'a1 b2'.match(/\\W/g)\n'a1 b2'.match(/\\s/g)\n'a1 b2'.match(/\\S/g)\n'a1.b'.match(/./g)",
            "displayContent": "/*** 문자 클래스[character class] ***/\n'a1 b2'.match(/\\d/g)   // ['1', '2']       (\\d 숫자[digit] 0-9)\n'a1 b2'.match(/\\D/g)   // ['a', ' ', 'b', ' '] (\\D 비숫자[non-digit])\n'a1 b2'.match(/\\w/g)   // ['a','1','b','2']    (\\w 단어 문자[word char]: [a-zA-Z0-9_])\n'a1 b2'.match(/\\W/g)   // [' ', ' ']           (\\W 비단어[non-word char])\n'a1 b2'.match(/\\s/g)   // [' ', ' ']           (\\s 공백[whitespace])\n'a1 b2'.match(/\\S/g)   // ['a','1','b','2']    (\\S 비공백[non-whitespace])\n'a1.b'.match(/./g)     // ['a','1','.','b']    (. 임의의 한 문자[any char except \\n])"
          },
          {
            "id": "language-javascript-p09-part-5",
            "title": "문자셋[character set]",
            "content": "'grey gray'.match(/gr[ae]y/g)\n'hello123'.match(/[a-z]+/g)\n'hello123'.match(/[^a-z]+/g)\n'hello123'.match(/[a-zA-Z0-9]+/g)",
            "displayContent": "/*** 문자셋[character set] ***/\n'grey gray'.match(/gr[ae]y/g)    // ['grey', 'gray']    ([ae] a 또는 e)\n'hello123'.match(/[a-z]+/g)      // ['hello']           ([a-z] 범위[range])\n'hello123'.match(/[^a-z]+/g)     // ['123']             ([^] 부정[negation])\n'hello123'.match(/[a-zA-Z0-9]+/g) // ['hello123']       (복수 범위)"
          },
          {
            "id": "language-javascript-p09-part-6",
            "title": "수량자[quantifier]",
            "content": "'graaay'.match(/gra*y/)\n'gry'.match(/gra*y/)\n'gray'.match(/gra?y/)\n'gry'.match(/gra?y/)\n'gray'.match(/gra+y/)\n'gry'.match(/gra+y/)\n\n'graaay'.match(/gra{2}y/)\n'graay'.match(/gra{2}y/)\n'graaay'.match(/gra{2,}y/)\n'graaay'.match(/gra{2,3}y/)",
            "displayContent": "/*** 수량자[quantifier] ***/\n'graaay'.match(/gra*y/)    // null   (a*: 0번 이상, y 바로 앞에 없어서 null)\n'gry'.match(/gra*y/)       // ['gry']   (a*: 0번 이상)\n'gray'.match(/gra?y/)      // ['gray']  (a?: 0 또는 1번)\n'gry'.match(/gra?y/)       // ['gry']   (a?: 0 또는 1번)\n'gray'.match(/gra+y/)      // ['gray']  (a+: 1번 이상)\n'gry'.match(/gra+y/)       // null      (a+: 1번 이상, 0번이라 null)\n\n'graaay'.match(/gra{2}y/)   // null     ({2}: 정확히 2번)\n'graay'.match(/gra{2}y/)    // ['graay'] ({2}: 정확히 2번)\n'graaay'.match(/gra{2,}y/)  // ['graaay'] ({2,}: 2번 이상)\n'graaay'.match(/gra{2,3}y/) // ['graaay'] ({2,3}: 2~3번)"
          },
          {
            "id": "language-javascript-p09-part-7",
            "title": "탐욕적[greedy] vs 게으른[lazy] 수량자",
            "content": "'<a><b><c>'.match(/<.+>/)\n'<a><b><c>'.match(/<.+?>/)\n'<a><b><c>'.match(/<.*?>/)",
            "displayContent": "/*** 탐욕적[greedy] vs 게으른[lazy] 수량자 ***/\n'<a><b><c>'.match(/<.+>/)    // ['<a><b><c>'] (greedy: 최대한 매치)\n'<a><b><c>'.match(/<.+?>/)   // ['<a>']       (lazy: 최소한 매치, ? 추가)\n'<a><b><c>'.match(/<.*?>/)   // ['<a>']       (lazy)"
          },
          {
            "id": "language-javascript-p09-part-8",
            "title": "그룹[group]",
            "content": "'2024-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/)\n\n'grey'.match(/gr(?:a|e)y/)\n'grey'.match(/gr(a|e)y/)",
            "displayContent": "/*** 그룹[group] ***/\n// (x)    캡처 그룹[capturing group]     - 매치 + 기억\n// (?:x)  비캡처 그룹[non-capturing group] - 매치만, 기억 안함\n// (?<name>x) 네임드 캡처 그룹[named capturing group]\n\n'2024-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/)\n// ['2024-03-18', '2024', '03', '18', index:0, ...]\n// [0]=전체, [1]=year, [2]=month, [3]=day\n\n'grey'.match(/gr(?:a|e)y/)   // ['grey'] (비캡처: 그룹 인덱스 없음)\n'grey'.match(/gr(a|e)y/)     // ['grey', 'e'] (캡처: [1]='e')"
          },
          {
            "id": "language-javascript-p09-part-9",
            "title": "네임드 캡처 그룹[named capturing group]",
            "content": "var dateMatch = '2024-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year\ndateMatch.groups.month\ndateMatch.groups.day",
            "displayContent": "// 네임드 캡처 그룹[named capturing group]\nvar dateMatch = '2024-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year    // '2024'\ndateMatch.groups.month   // '03'\ndateMatch.groups.day     // '18'"
          },
          {
            "id": "language-javascript-p09-part-10",
            "title": "역참조[backreference]",
            "content": "'aabbcc'.match(/(.)\\1/)\n'abab'.match(/(ab)\\1/)",
            "displayContent": "/*** 역참조[backreference] ***/\n'aabbcc'.match(/(.)\\1/)   // ['aa', 'a']  (\\1 = 첫 번째 캡처 그룹 재참조)\n'abab'.match(/(ab)\\1/)    // ['abab', 'ab']"
          },
          {
            "id": "language-javascript-p09-part-11",
            "title": "전방탐색[lookahead] / 후방탐색[lookbehind]",
            "content": "'100px 200em 50px'.match(/\\d+(?=px)/g)\n'100px 200em 50px'.match(/\\d+(?!px)/g)\n\n'$100 £200 $50'.match(/(?<=\\$)\\d+/g)\n'$100 £200 $50'.match(/(?<!\\$)\\d+/g)",
            "displayContent": "/*** 전방탐색[lookahead] / 후방탐색[lookbehind] ***/\n// (?=x)  긍정 전방탐색[positive lookahead]  - x 앞에 있는 것\n// (?!x)  부정 전방탐색[negative lookahead]  - x 앞에 없는 것\n// (?<=x) 긍정 후방탐색[positive lookbehind] - x 뒤에 있는 것\n// (?<!x) 부정 후방탐색[negative lookbehind] - x 뒤에 없는 것\n\n'100px 200em 50px'.match(/\\d+(?=px)/g)    // ['100', '50']   (px 앞의 숫자만)\n'100px 200em 50px'.match(/\\d+(?!px)/g)    // ['200', ...] (px 아닌 것 앞의 숫자)\n\n'$100 £200 $50'.match(/(?<=\\$)\\d+/g)      // ['100', '50']   ($ 뒤의 숫자만)\n'$100 £200 $50'.match(/(?<!\\$)\\d+/g)      // ['200']         ($ 아닌 것 뒤의 숫자)"
          },
          {
            "id": "language-javascript-p09-part-12",
            "title": "정규식 메서드[regex methods]",
            "content": "var re1 = /\\d+/g;\nvar str1 = 'abc 123 def 456';\n\nre1.test('abc 123')\nstr1.search(/\\d+/)\nstr1.match(/\\d+/g)\nstr1.replace(/\\d+/g, 'N')",
            "displayContent": "/*** 정규식 메서드[regex methods] ***/\nvar re1 = /\\d+/g;\nvar str1 = 'abc 123 def 456';\n\nre1.test('abc 123')         // true  (패턴 존재 여부[existence])\nstr1.search(/\\d+/)          // 4     (첫 번째 매치 인덱스[index], 없으면 -1)\nstr1.match(/\\d+/g)          // ['123', '456']\nstr1.replace(/\\d+/g, 'N')   // 'abc N def N'"
          },
          {
            "id": "language-javascript-p09-part-13",
            "title": "matchAll - 모든 캡처 그룹 포함 이터레이터[iterator] 반환",
            "content": "var re2 = /(\\d+)/g;\n[...str1.matchAll(re2)].map(m => m[1])\n\n'one1two2three'.split(/\\d/)",
            "displayContent": "// matchAll - 모든 캡처 그룹 포함 이터레이터[iterator] 반환\nvar re2 = /(\\d+)/g;\n[...str1.matchAll(re2)].map(m => m[1])  // ['123', '456']\n\n// split\n'one1two2three'.split(/\\d/)  // ['one', 'two', 'three']"
          },
          {
            "id": "language-javascript-p09-part-14",
            "title": "replace + 캡처 그룹 참조",
            "content": "'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')\n'2024-03-18'.replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/, '$<d>/$<m>/$<y>')\n\n'hello'.replace(/(\\w+)/, '[$&]')",
            "displayContent": "/*** replace + 캡처 그룹 참조 ***/\n// $1 $2... = 캡처 그룹[capture group] 번호 참조\n// $<name>  = 네임드 그룹[named group] 참조\n// $&       = 매치 전체[entire match]\n// $`       = 매치 이전[before match]\n// $'       = 매치 이후[after match]\n\n'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')  // '18/03/2024'\n'2024-03-18'.replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/, '$<d>/$<m>/$<y>') // '18/03/2024'\n\n'hello'.replace(/(\\w+)/, '[$&]')  // '[hello]' ($&: 전체 매치)"
          },
          {
            "id": "language-javascript-p09-part-15",
            "title": "이메일[email] 검증",
            "content": "var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com')\nemailRe.test('invalid@')",
            "displayContent": "// 이메일[email] 검증\nvar emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com')   // true\nemailRe.test('invalid@')           // false"
          },
          {
            "id": "language-javascript-p09-part-16",
            "title": "전화번호[phone number]",
            "content": "var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678')\nphoneRe.test('02.123.4567')",
            "displayContent": "// 전화번호[phone number]\nvar phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678')  // true\nphoneRe.test('02.123.4567')    // true"
          },
          {
            "id": "language-javascript-p09-part-17",
            "title": "날짜[date] YYYY-MM-DD",
            "content": "var dateRe = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;\ndateRe.test('2024-03-18')\ndateRe.test('2024-13-01')",
            "displayContent": "// 날짜[date] YYYY-MM-DD\nvar dateRe = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;\ndateRe.test('2024-03-18')  // true\ndateRe.test('2024-13-01')  // false"
          },
          {
            "id": "language-javascript-p09-part-18",
            "title": "URL 프로토콜 추출",
            "content": "'https:",
            "displayContent": "// URL 프로토콜 추출\n'https://example.com'.match(/^(https?):\\/\\//)\n// ['https://', 'https']"
          },
          {
            "id": "language-javascript-p09-part-19",
            "title": "단어 경계[word boundary]로 정확히 매치",
            "content": "function hasWord(str, word) {\n  return new RegExp(`\\\\b${word}\\\\b`, 'i').test(str);\n}\nhasWord('Thanks for everything', 'thanks')\nhasWord('Thanksgiving is coming', 'thanks')",
            "displayContent": "// 단어 경계[word boundary]로 정확히 매치\nfunction hasWord(str, word) {\n  return new RegExp(`\\\\b${word}\\\\b`, 'i').test(str);\n}\nhasWord('Thanks for everything', 'thanks')     // true\nhasWord('Thanksgiving is coming', 'thanks')    // false"
          }
        ]
      },
      {
        "id": "language-javascript-p10-proxy-reflect",
        "title": "P10.Proxy-Reflect",
        "fileName": "P10.Proxy-Reflect.js",
        "sourcePath": "assets/typingSource/Language-JavaScript/P10.Proxy-Reflect.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p10-proxy-reflect-part-1",
            "title": "handler : 트랩[trap]을 정의하는 객체 (트랩이 없으면 target에 그대로 전달)",
            "content": "var emptyProxy = new Proxy({ a: 1 }, {});\nemptyProxy.a",
            "displayContent": "// handler : 트랩[trap]을 정의하는 객체 (트랩이 없으면 target에 그대로 전달)\n\nvar emptyProxy = new Proxy({ a: 1 }, {});\nemptyProxy.a   // 1  (트랩 없음 → target에 그대로 전달[passthrough])"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-2",
            "title": "get 트랩[get trap] - 속성 읽기[property access] 가로채기",
            "content": "var getTarget = { name: 'kim', age: 30 };\nvar getProxy = new Proxy(getTarget, {\n  get(target, prop, receiver) {",
            "displayContent": "/*** get 트랩[get trap] - 속성 읽기[property access] 가로채기 ***/\nvar getTarget = { name: 'kim', age: 30 };\nvar getProxy = new Proxy(getTarget, {\n  get(target, prop, receiver) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-3",
            "title": "prop이 없으면 기본값[default value] 반환",
            "content": "    return prop in target ? Reflect.get(target, prop, receiver) : `[${prop} 없음]`;\n  }\n});\ngetProxy.name\ngetProxy.job",
            "displayContent": "    // prop이 없으면 기본값[default value] 반환\n    return prop in target ? Reflect.get(target, prop, receiver) : `[${prop} 없음]`;\n  }\n});\ngetProxy.name    // 'kim'\ngetProxy.job     // '[job 없음]'"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-4",
            "title": "set 트랩[set trap] - 속성 쓰기[property assignment] 가로채기",
            "content": "var setProxy = new Proxy({}, {\n  set(target, prop, value, receiver) {",
            "displayContent": "/*** set 트랩[set trap] - 속성 쓰기[property assignment] 가로채기 ***/\nvar setProxy = new Proxy({}, {\n  set(target, prop, value, receiver) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-5",
            "title": "유효성 검사[validation]: age는 양수 정수만 허용",
            "content": "    if (prop === 'age') {\n      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {\n        throw new TypeError(`age는 양수 정수[positive integer]여야 합니다`);\n      }\n    }\n    return Reflect.set(target, prop, value, receiver);\n  }\n});\nsetProxy.name = 'lee';\nsetProxy.age = 25;",
            "displayContent": "    // 유효성 검사[validation]: age는 양수 정수만 허용\n    if (prop === 'age') {\n      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {\n        throw new TypeError(`age는 양수 정수[positive integer]여야 합니다`);\n      }\n    }\n    return Reflect.set(target, prop, value, receiver);  // 기본 동작 수행\n  }\n});\nsetProxy.name = 'lee';   // 'lee'\nsetProxy.age = 25;       // 25\n// setProxy.age = -1;    // ❌ TypeError 발생"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-6",
            "title": "has 트랩[has trap] - in 연산자[in operator] 가로채기",
            "content": "var rangeProxy = new Proxy({ min: 1, max: 100 }, {\n  has(target, prop) {",
            "displayContent": "/*** has 트랩[has trap] - in 연산자[in operator] 가로채기 ***/\nvar rangeProxy = new Proxy({ min: 1, max: 100 }, {\n  has(target, prop) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-7",
            "title": "숫자면 범위 안에 있는지 확인[range check]",
            "content": "    var num = Number(prop);\n    if (!isNaN(num)) return num >= target.min && num <= target.max;\n    return prop in target;\n  }\n});\n50  in rangeProxy\n150 in rangeProxy\n'min' in rangeProxy",
            "displayContent": "    // 숫자면 범위 안에 있는지 확인[range check]\n    var num = Number(prop);\n    if (!isNaN(num)) return num >= target.min && num <= target.max;\n    return prop in target;\n  }\n});\n50  in rangeProxy   // true  (범위 내)\n150 in rangeProxy   // false (범위 밖)\n'min' in rangeProxy // true  (속성 존재)"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-8",
            "title": "deleteProperty 트랩 - delete 연산자[delete operator] 가로채기",
            "content": "var deleteProxy = new Proxy({ pub: 'public', _priv: 'private' }, {\n  deleteProperty(target, prop) {",
            "displayContent": "/*** deleteProperty 트랩 - delete 연산자[delete operator] 가로채기 ***/\nvar deleteProxy = new Proxy({ pub: 'public', _priv: 'private' }, {\n  deleteProperty(target, prop) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-9",
            "title": "_ 로 시작하는 속성은 삭제 금지[deletion forbidden]",
            "content": "    if (prop.startsWith('_')) {\n      throw new Error(`프라이빗 속성[private property] '${prop}'은 삭제 불가`);\n    }\n    return Reflect.deleteProperty(target, prop);\n  }\n});\ndelete deleteProxy.pub",
            "displayContent": "    // _ 로 시작하는 속성은 삭제 금지[deletion forbidden]\n    if (prop.startsWith('_')) {\n      throw new Error(`프라이빗 속성[private property] '${prop}'은 삭제 불가`);\n    }\n    return Reflect.deleteProperty(target, prop);\n  }\n});\ndelete deleteProxy.pub    // true"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-10",
            "title": "apply 트랩[apply trap] - 함수 호출[function call] 가로채기",
            "content": "function multiply(a, b) { return a * b; }\n\nvar applyProxy = new Proxy(multiply, {\n  apply(target, thisArg, args) {\n    console.log(`호출[call]: multiply(${args})`);\n    return Reflect.apply(target, thisArg, args);\n  }\n});\napplyProxy(3, 4)",
            "displayContent": "/*** apply 트랩[apply trap] - 함수 호출[function call] 가로채기 ***/\nfunction multiply(a, b) { return a * b; }\n\nvar applyProxy = new Proxy(multiply, {\n  apply(target, thisArg, args) {\n    console.log(`호출[call]: multiply(${args})`);  // 로깅[logging]\n    return Reflect.apply(target, thisArg, args);\n  }\n});\napplyProxy(3, 4)   // 로그: '호출[call]: multiply(3,4)', 반환: 12"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-11",
            "title": "construct 트랩[construct trap] - new 연산자[new operator] 가로채기",
            "content": "function Person(name) { this.name = name; }\n\nvar constructProxy = new Proxy(Person, {\n  construct(target, args, newTarget) {\n    console.log(`인스턴스 생성[instantiation]: ${args[0]}`);\n    var instance = Reflect.construct(target, args, newTarget);\n    instance.createdAt = new Date().toISOString().slice(0, 10);\n    return instance;\n  }\n});\nvar p1 = new constructProxy('kim');\np1.name\np1.createdAt",
            "displayContent": "/*** construct 트랩[construct trap] - new 연산자[new operator] 가로채기 ***/\nfunction Person(name) { this.name = name; }\n\nvar constructProxy = new Proxy(Person, {\n  construct(target, args, newTarget) {\n    console.log(`인스턴스 생성[instantiation]: ${args[0]}`);\n    var instance = Reflect.construct(target, args, newTarget);\n    instance.createdAt = new Date().toISOString().slice(0, 10);\n    return instance;\n  }\n});\nvar p1 = new constructProxy('kim');\np1.name       // 'kim'\np1.createdAt  // '2026-03-18'"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-12",
            "title": "ownKeys 트랩 - Object.keys / for...in 가로채기",
            "content": "var ownKeysProxy = new Proxy({ pub: 1, _priv: 2, normal: 3 }, {\n  ownKeys(target) {",
            "displayContent": "/*** ownKeys 트랩 - Object.keys / for...in 가로채기 ***/\nvar ownKeysProxy = new Proxy({ pub: 1, _priv: 2, normal: 3 }, {\n  ownKeys(target) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-13",
            "title": "_ 로 시작하는 키[key] 숨기기",
            "content": "    return Reflect.ownKeys(target).filter(k => !k.startsWith('_'));\n  }\n});\nObject.keys(ownKeysProxy)",
            "displayContent": "    // _ 로 시작하는 키[key] 숨기기\n    return Reflect.ownKeys(target).filter(k => !k.startsWith('_'));\n  }\n});\nObject.keys(ownKeysProxy)    // ['pub', 'normal']  (_priv 숨겨짐)"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-14",
            "title": "활용 패턴 1 - 읽기 전용[read-only] 객체",
            "content": "function readOnly(obj) {\n  return new Proxy(obj, {\n    set(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 수정 불가`);\n    },\n    deleteProperty(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 삭제 불가`);\n    }\n  });\n}\nvar frozenConfig = readOnly({ host: 'localhost', port: 3000 });\nfrozenConfig.host",
            "displayContent": "/*** 활용 패턴 1 - 읽기 전용[read-only] 객체 ***/\nfunction readOnly(obj) {\n  return new Proxy(obj, {\n    set(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 수정 불가`);\n    },\n    deleteProperty(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 삭제 불가`);\n    }\n  });\n}\nvar frozenConfig = readOnly({ host: 'localhost', port: 3000 });\nfrozenConfig.host        // 'localhost'\n// frozenConfig.host = 'x'; // ❌ Error 발생"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-15",
            "title": "활용 패턴 2 - 기본값[default value] 제공",
            "content": "function withDefaults(target, defaults) {\n  return new Proxy(target, {\n    get(obj, prop) {\n      return prop in obj ? obj[prop] : defaults[prop];\n    }\n  });\n}\nvar settings = withDefaults({ theme: 'dark' }, { theme: 'light', lang: 'ko', fontSize: 14 });\nsettings.theme\nsettings.lang\nsettings.fontSize",
            "displayContent": "/*** 활용 패턴 2 - 기본값[default value] 제공 ***/\nfunction withDefaults(target, defaults) {\n  return new Proxy(target, {\n    get(obj, prop) {\n      return prop in obj ? obj[prop] : defaults[prop];\n    }\n  });\n}\nvar settings = withDefaults({ theme: 'dark' }, { theme: 'light', lang: 'ko', fontSize: 14 });\nsettings.theme     // 'dark'  (직접 설정값 우선)\nsettings.lang      // 'ko'    (기본값[default])\nsettings.fontSize  // 14      (기본값[default])"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-16",
            "title": "활용 패턴 3 - 관찰자[observable] / 반응형[reactive]",
            "content": "function observable(obj, onChange) {\n  return new Proxy(obj, {\n    set(target, prop, value, receiver) {\n      var oldValue = target[prop];\n      var result = Reflect.set(target, prop, value, receiver);\n      if (oldValue !== value) onChange(prop, oldValue, value);\n      return result;\n    }\n  });\n}\nvar state = observable({ count: 0 }, (prop, oldVal, newVal) => {\n  console.log(`${prop}: ${oldVal} → ${newVal}`);\n});\nstate.count = 1;\nstate.count = 5;",
            "displayContent": "/*** 활용 패턴 3 - 관찰자[observable] / 반응형[reactive] ***/\nfunction observable(obj, onChange) {\n  return new Proxy(obj, {\n    set(target, prop, value, receiver) {\n      var oldValue = target[prop];\n      var result = Reflect.set(target, prop, value, receiver);\n      if (oldValue !== value) onChange(prop, oldValue, value);  // 변경 알림[notify change]\n      return result;\n    }\n  });\n}\nvar state = observable({ count: 0 }, (prop, oldVal, newVal) => {\n  console.log(`${prop}: ${oldVal} → ${newVal}`);\n});\nstate.count = 1;   // 'count: 0 → 1'\nstate.count = 5;   // 'count: 1 → 5'"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-17",
            "title": "Proxy 트랩 안에서 target에 대한 기본 동작을 안전하게 수행할 때 사용",
            "content": "var refObj = { x: 1 };\n\nReflect.get(refObj, 'x')\nReflect.set(refObj, 'y', 2)\nReflect.has(refObj, 'x')\nReflect.deleteProperty(refObj, 'x')\nReflect.ownKeys(refObj)",
            "displayContent": "// Proxy 트랩 안에서 target에 대한 기본 동작을 안전하게 수행할 때 사용\n\nvar refObj = { x: 1 };\n\nReflect.get(refObj, 'x')             // 1     (refObj.x 와 동일)\nReflect.set(refObj, 'y', 2)          // true  (refObj.y = 2 와 동일)\nReflect.has(refObj, 'x')             // true  ('x' in refObj 와 동일)\nReflect.deleteProperty(refObj, 'x')  // true  (delete refObj.x 와 동일)\nReflect.ownKeys(refObj)              // ['y']"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-18",
            "title": "Reflect.apply - 함수 호출[function invocation]",
            "content": "Reflect.apply(Math.max, null, [1, 2, 3])",
            "displayContent": "// Reflect.apply - 함수 호출[function invocation]\nReflect.apply(Math.max, null, [1, 2, 3])  // 3"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-19",
            "title": "Reflect.construct - new 호출[constructor call]",
            "content": "function Point(x, y) { this.x = x; this.y = y; }\nvar pt = Reflect.construct(Point, [3, 4]);\npt.x\npt.y",
            "displayContent": "// Reflect.construct - new 호출[constructor call]\nfunction Point(x, y) { this.x = x; this.y = y; }\nvar pt = Reflect.construct(Point, [3, 4]);\npt.x  // 3\npt.y  // 4"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-20",
            "title": "Proxy 취소[revocable proxy]",
            "content": "var revocable = Proxy.revocable({ data: 42 }, {\n  get(target, prop) { return Reflect.get(target, prop); }\n});\nvar revProxy = revocable.proxy;\nvar revoke = revocable.revoke;\n\nrevProxy.data\nrevoke();",
            "displayContent": "/*** Proxy 취소[revocable proxy] ***/\nvar revocable = Proxy.revocable({ data: 42 }, {\n  get(target, prop) { return Reflect.get(target, prop); }\n});\nvar revProxy = revocable.proxy;\nvar revoke = revocable.revoke;\n\nrevProxy.data  // 42\nrevoke();      // 프록시 비활성화[deactivate]\n// revProxy.data  // ❌ TypeError: Cannot perform 'get' on a proxy that has been revoked"
          }
        ]
      }
    ]
  },
  {
    "id": "language-python",
    "label": "Python",
    "folderName": "Language-Python",
    "lessons": [
      {
        "id": "language-python-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.py",
        "sourcePath": "assets/typingSource/Language-Python/P01.기본-패턴.py",
        "language": "python",
        "parts": [
          {
            "id": "language-python-p01-part-1",
            "title": "변수[variable]",
            "content": "user_name = \"kim\"\nuser_age = 30\nis_admin = True\nprint(user_name, user_age, is_admin)",
            "displayContent": "# 변수[variable]\nuser_name = \"kim\"\nuser_age = 30\nis_admin = True\nprint(user_name, user_age, is_admin)\n# 결과: kim 30 True"
          },
          {
            "id": "language-python-p01-part-2",
            "title": "리스트[list]",
            "content": "score_list = [10, 20, 30]\nprint(score_list[0])",
            "displayContent": "# 리스트[list]\nscore_list = [10, 20, 30]\nprint(score_list[0])\n# 결과: 10"
          },
          {
            "id": "language-python-p01-part-3",
            "title": "딕셔너리[dictionary]",
            "content": "user_item = {\n    \"name\": \"lee\",\n    \"age\": 25,\n    \"skills\": [\"python\", \"sql\"],\n}\nprint(user_item[\"name\"])\nprint(user_item.get(\"email\"))",
            "displayContent": "# 딕셔너리[dictionary]\nuser_item = {\n    \"name\": \"lee\",\n    \"age\": 25,\n    \"skills\": [\"python\", \"sql\"],\n}\nprint(user_item[\"name\"])\nprint(user_item.get(\"email\"))\n# 결과:\n# lee\n# None"
          },
          {
            "id": "language-python-p01-part-4",
            "title": "조건문[condition]",
            "content": "if user_age >= 20:\n    print(\"adult\")\nelse:\n    print(\"minor\")",
            "displayContent": "# 조건문[condition]\nif user_age >= 20:\n    print(\"adult\")\nelse:\n    print(\"minor\")\n# 결과: adult"
          },
          {
            "id": "language-python-p01-part-5",
            "title": "반복문[loop]",
            "content": "for skill_item in user_item[\"skills\"]:\n    print(skill_item)",
            "displayContent": "# 반복문[loop]\nfor skill_item in user_item[\"skills\"]:\n    print(skill_item)\n# 결과:\n# python\n# sql"
          },
          {
            "id": "language-python-p01-part-6",
            "title": "리스트 컴프리헨션[list comprehension]",
            "content": "even_list = [num for num in score_list if num % 2 == 0]\nprint(even_list)",
            "displayContent": "# 리스트 컴프리헨션[list comprehension]\neven_list = [num for num in score_list if num % 2 == 0]\nprint(even_list)\n# 결과: [10, 20, 30]"
          },
          {
            "id": "language-python-p01-part-7",
            "title": "함수[function]",
            "content": "def get_display_name(user):\n    return f'{user[\"name\"]}({user[\"age\"]})'\n\nprint(get_display_name(user_item))",
            "displayContent": "# 함수[function]\ndef get_display_name(user):\n    return f'{user[\"name\"]}({user[\"age\"]})'\n\nprint(get_display_name(user_item))\n# 결과: lee(25)"
          },
          {
            "id": "language-python-p01-part-8",
            "title": "예외 처리[exception handling]",
            "content": "try:\n    parsed_value = int(\"123\")\n    print(parsed_value)\nexcept ValueError:\n    print(\"parse error\")",
            "displayContent": "# 예외 처리[exception handling]\ntry:\n    parsed_value = int(\"123\")\n    print(parsed_value)\nexcept ValueError:\n    print(\"parse error\")\n# 결과: 123"
          },
          {
            "id": "language-python-p01-part-9",
            "title": "파일 / JSON 실무 패턴[file / json pattern]",
            "content": "import json\n\njson_text = '{\"name\": \"park\", \"age\": 28}'\nparsed_user = json.loads(json_text)\nprint(parsed_user[\"name\"])",
            "displayContent": "# 파일 / JSON 실무 패턴[file / json pattern]\nimport json\n\njson_text = '{\"name\": \"park\", \"age\": 28}'\nparsed_user = json.loads(json_text)\nprint(parsed_user[\"name\"])\n# 결과: park"
          }
        ]
      },
      {
        "id": "language-python-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.py",
        "sourcePath": "assets/typingSource/Language-Python/P02.실무-패턴.py",
        "language": "python",
        "parts": [
          {
            "id": "language-python-p02-part-1",
            "title": "P02. Python 실무 패턴",
            "content": "user_list = [\n    {\"name\": \"kim\", \"age\": 30},\n    {\"name\": \"lee\", \"age\": 20},\n    {\"name\": \"park\", \"age\": 25},\n]",
            "displayContent": "# P02. Python 실무 패턴\n# ============================================================\n\nuser_list = [\n    {\"name\": \"kim\", \"age\": 30},\n    {\"name\": \"lee\", \"age\": 20},\n    {\"name\": \"park\", \"age\": 25},\n]"
          },
          {
            "id": "language-python-p02-part-2",
            "title": "필터링[filtering]",
            "content": "adult_list = [user for user in user_list if user[\"age\"] >= 25]\nprint(adult_list)",
            "displayContent": "# 필터링[filtering]\nadult_list = [user for user in user_list if user[\"age\"] >= 25]\nprint(adult_list)\n# 결과: [{'name': 'kim', 'age': 30}, {'name': 'park', 'age': 25}]"
          },
          {
            "id": "language-python-p02-part-3",
            "title": "변환[mapping]",
            "content": "name_list = [user[\"name\"] for user in user_list]\nprint(name_list)",
            "displayContent": "# 변환[mapping]\nname_list = [user[\"name\"] for user in user_list]\nprint(name_list)\n# 결과: ['kim', 'lee', 'park']"
          },
          {
            "id": "language-python-p02-part-4",
            "title": "정렬[sorting]",
            "content": "sorted_list = sorted(user_list, key=lambda user: user[\"age\"], reverse=True)\nprint(sorted_list[0][\"name\"])",
            "displayContent": "# 정렬[sorting]\nsorted_list = sorted(user_list, key=lambda user: user[\"age\"], reverse=True)\nprint(sorted_list[0][\"name\"])\n# 결과: kim"
          },
          {
            "id": "language-python-p02-part-5",
            "title": "기본값 처리[default handling]",
            "content": "config = {\"timeout\": 3}\nretry_count = config.get(\"retry\", 0)\nprint(retry_count)",
            "displayContent": "# 기본값 처리[default handling]\nconfig = {\"timeout\": 3}\nretry_count = config.get(\"retry\", 0)\nprint(retry_count)\n# 결과: 0"
          },
          {
            "id": "language-python-p02-part-6",
            "title": "함수 조합[function composition]",
            "content": "def format_user(user):\n    return f'{user[\"name\"]}:{user[\"age\"]}'\n\nformatted_list = list(map(format_user, user_list))\nprint(formatted_list)",
            "displayContent": "# 함수 조합[function composition]\ndef format_user(user):\n    return f'{user[\"name\"]}:{user[\"age\"]}'\n\nformatted_list = list(map(format_user, user_list))\nprint(formatted_list)\n# 결과: ['kim:30', 'lee:20', 'park:25']"
          }
        ]
      }
    ]
  },
  {
    "id": "language-regex-for-javascript",
    "label": "RegEx for JavaScript",
    "folderName": "Language-RegEx-for-Javascript",
    "lessons": [
      {
        "id": "language-regex-for-javascript-p01",
        "title": "P01.핵심-패턴",
        "fileName": "P01.핵심-패턴.js",
        "sourcePath": "assets/typingSource/Language-RegEx-for-Javascript/P01.핵심-패턴.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-regex-for-javascript-p01-part-1",
            "title": "리터럴[literal] / 생성자[constructor]",
            "content": "/hello/gi.test('Hello World');\nnew RegExp('hello', 'gi').test('HELLO');",
            "displayContent": "// 리터럴[literal] / 생성자[constructor]\n/hello/gi.test('Hello World');                 // true\nnew RegExp('hello', 'gi').test('HELLO');       // true"
          },
          {
            "id": "language-regex-for-javascript-p01-part-2",
            "title": "플래그[flag]",
            "content": "'aAa'.match(/a/g);\n'aAa'.match(/a/gi);",
            "displayContent": "// 플래그[flag]\n'aAa'.match(/a/g);   // ['a', 'a']\n'aAa'.match(/a/gi);  // ['a', 'A', 'a']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-3",
            "title": "앵커[anchor]",
            "content": "'Hello World'.match(/^Hello/);\n'Hello World'.match(/World$/);",
            "displayContent": "// 앵커[anchor]\n'Hello World'.match(/^Hello/);  // ['Hello']\n'Hello World'.match(/World$/);  // ['World']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-4",
            "title": "문자 클래스[character class]",
            "content": "'ab12'.match(/\\d/g);\n'ab12'.match(/\\w/g);\n'a b'.match(/\\s/g);",
            "displayContent": "// 문자 클래스[character class]\n'ab12'.match(/\\d/g);  // ['1', '2']\n'ab12'.match(/\\w/g);  // ['a', 'b', '1', '2']\n'a b'.match(/\\s/g);   // [' ']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-5",
            "title": "문자셋[character set]",
            "content": "'grey gray'.match(/gr[ae]y/g);\n'hello123'.match(/[^a-z]+/g);",
            "displayContent": "// 문자셋[character set]\n'grey gray'.match(/gr[ae]y/g);   // ['grey', 'gray']\n'hello123'.match(/[^a-z]+/g);    // ['123']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-6",
            "title": "수량자[quantifier]",
            "content": "'gry'.match(/gra*y/);\n'gray'.match(/gra?y/);\n'graaay'.match(/gra+y/);\n'graay'.match(/gra{2}y/);",
            "displayContent": "// 수량자[quantifier]\n'gry'.match(/gra*y/);        // ['gry']\n'gray'.match(/gra?y/);       // ['gray']\n'graaay'.match(/gra+y/);     // ['graaay']\n'graay'.match(/gra{2}y/);    // ['graay']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-7",
            "title": "그룹[group]",
            "content": "'2026-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);",
            "displayContent": "// 그룹[group]\n'2026-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\n// ['2026-03-18', '2026', '03', '18']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-8",
            "title": "네임드 그룹[named group]",
            "content": "var dateMatch = '2026-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year;\ndateMatch.groups.month;\ndateMatch.groups.day;",
            "displayContent": "// 네임드 그룹[named group]\nvar dateMatch = '2026-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year;   // '2026'\ndateMatch.groups.month;  // '03'\ndateMatch.groups.day;    // '18'"
          },
          {
            "id": "language-regex-for-javascript-p01-part-9",
            "title": "전방탐색[lookahead]",
            "content": "'100px 200em 50px'.match(/\\d+(?=px)/g);",
            "displayContent": "// 전방탐색[lookahead]\n'100px 200em 50px'.match(/\\d+(?=px)/g);  // ['100', '50']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-10",
            "title": "후방탐색[lookbehind]",
            "content": "'$100 £200 $50'.match(/(?<=\\$)\\d+/g);\n\n'2026-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');",
            "displayContent": "// 후방탐색[lookbehind]\n'$100 £200 $50'.match(/(?<=\\$)\\d+/g);    // ['100', '50']\n\n// replace\n'2026-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');\n// '18/03/2026'"
          },
          {
            "id": "language-regex-for-javascript-p01-part-11",
            "title": "실용 패턴[practical pattern] - 이메일[email]",
            "content": "var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com');\nemailRe.test('invalid@');",
            "displayContent": "// 실용 패턴[practical pattern] - 이메일[email]\nvar emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com');  // true\nemailRe.test('invalid@');          // false"
          },
          {
            "id": "language-regex-for-javascript-p01-part-12",
            "title": "실용 패턴[practical pattern] - 전화번호[phone number]",
            "content": "var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678');",
            "displayContent": "// 실용 패턴[practical pattern] - 전화번호[phone number]\nvar phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678'); // true"
          },
          {
            "id": "language-regex-for-javascript-p01-part-13",
            "title": "실용 패턴[practical pattern] - VS Code 여러 줄 함수 찾기",
            "content": "var multiLineSource = `functionAAAAA(asdf,\n  qwer,\n  zxcv)`;\nmultiLineSource.match(/functionAAAAA\\([\\s\\S]*?\\)/);",
            "displayContent": "// 실용 패턴[practical pattern] - VS Code 여러 줄 함수 찾기\nvar multiLineSource = `functionAAAAA(asdf,\n  qwer,\n  zxcv)`;\nmultiLineSource.match(/functionAAAAA\\([\\s\\S]*?\\)/);\n// ['functionAAAAA(asdf,\\n  qwer,\\n  zxcv)']"
          }
        ]
      },
      {
        "id": "language-regex-for-javascript-p02",
        "title": "P02.실무-추출",
        "fileName": "P02.실무-추출.js",
        "sourcePath": "assets/typingSource/Language-RegEx-for-Javascript/P02.실무-추출.js",
        "language": "javascript",
        "parts": [
          {
            "id": "language-regex-for-javascript-p02-part-1",
            "title": "파일 확장자[extension] 앞까지",
            "content": "'abc/def/video.mp4'.match(/.*?(?=mp4)/)[0];",
            "displayContent": "// 파일 확장자[extension] 앞까지\n'abc/def/video.mp4'.match(/.*?(?=mp4)/)[0];\n// 결과: abc/def/video."
          },
          {
            "id": "language-regex-for-javascript-p02-part-2",
            "title": "숫자와 mp4 사이 텍스트 추출",
            "content": "'123테스트.mp4'.match(/\\d+(.*?)\\.mp4/)[1];",
            "displayContent": "// 숫자와 mp4 사이 텍스트 추출\n'123테스트.mp4'.match(/\\d+(.*?)\\.mp4/)[1];\n// 결과: 테스트"
          },
          {
            "id": "language-regex-for-javascript-p02-part-3",
            "title": "여러 줄 함수 호출 찾기",
            "content": "var fnSource = `functionAAAAA(a,\n  b,\n  c)`;\nfnSource.match(/functionAAAAA\\([\\s\\S]*?\\)/)[0];\n\nvar logText = 'A=111,B=222,C=333';\nArray.from(logText.matchAll(/(\\w+)=(\\d+)/g), item => ({\n  key: item[1],\n  value: item[2],\n}));",
            "displayContent": "// 여러 줄 함수 호출 찾기\nvar fnSource = `functionAAAAA(a,\n  b,\n  c)`;\nfnSource.match(/functionAAAAA\\([\\s\\S]*?\\)/)[0];\n// 결과:\n// functionAAAAA(a,\n//   b,\n//   c)\n\n// key=value 추출\nvar logText = 'A=111,B=222,C=333';\nArray.from(logText.matchAll(/(\\w+)=(\\d+)/g), item => ({\n  key: item[1],\n  value: item[2],\n}));\n// 결과:\n// [{ key:'A', value:'111' }, { key:'B', value:'222' }, { key:'C', value:'333' }]"
          },
          {
            "id": "language-regex-for-javascript-p02-part-4",
            "title": "태그 안 내용 추출",
            "content": "'<title>Hello</title>'.match(/(?<=<title>).*?(?=<\\/title>)/)[0];",
            "displayContent": "// 태그 안 내용 추출\n'<title>Hello</title>'.match(/(?<=<title>).*?(?=<\\/title>)/)[0];\n// 결과: Hello"
          }
        ]
      }
    ]
  },
  {
    "id": "language-rust",
    "label": "Rust",
    "folderName": "Language-Rust",
    "lessons": [
      {
        "id": "language-rust-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.rs",
        "sourcePath": "assets/typingSource/Language-Rust/P01.기본-패턴.rs",
        "language": "rust",
        "parts": [
          {
            "id": "language-rust-p01-part-1",
            "title": "P01. Rust 기본 패턴",
            "content": "#[derive(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nfn add(num_a: i32, num_b: i32) -> i32 {\n    num_a + num_b\n}\n\nfn main() {",
            "displayContent": "// P01. Rust 기본 패턴\n// ============================================================\n\n#[derive(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nfn add(num_a: i32, num_b: i32) -> i32 {\n    num_a + num_b\n}\n\nfn main() {"
          },
          {
            "id": "language-rust-p01-part-2",
            "title": "변수와 가변성[mutability]",
            "content": "    let user_name = \"kim\";\n    let mut count_value = 1;\n    count_value += 1;\n    println!(\"{} {}\", user_name, count_value);",
            "displayContent": "    // 변수와 가변성[mutability]\n    let user_name = \"kim\";\n    let mut count_value = 1;\n    count_value += 1;\n    println!(\"{} {}\", user_name, count_value);\n    // 결과: kim 2"
          },
          {
            "id": "language-rust-p01-part-3",
            "title": "기본 타입[primitive type]",
            "content": "    let score_value: i32 = 95;\n    let ratio_value: f64 = 3.14;\n    let is_admin: bool = true;\n    println!(\"{} {} {}\", score_value, ratio_value, is_admin);",
            "displayContent": "    // 기본 타입[primitive type]\n    let score_value: i32 = 95;\n    let ratio_value: f64 = 3.14;\n    let is_admin: bool = true;\n    println!(\"{} {} {}\", score_value, ratio_value, is_admin);\n    // 결과: 95 3.14 true"
          },
          {
            "id": "language-rust-p01-part-4",
            "title": "조건문[condition]",
            "content": "    if score_value >= 90 {\n        println!(\"A\");\n    } else {\n        println!(\"B\");\n    }",
            "displayContent": "    // 조건문[condition]\n    if score_value >= 90 {\n        println!(\"A\");\n    } else {\n        println!(\"B\");\n    }\n    // 결과: A"
          },
          {
            "id": "language-rust-p01-part-5",
            "title": "반복문[loop]",
            "content": "    let color_list = [\"red\", \"green\", \"blue\"];\n    for color_item in color_list {\n        println!(\"{}\", color_item);\n    }",
            "displayContent": "    // 반복문[loop]\n    let color_list = [\"red\", \"green\", \"blue\"];\n    for color_item in color_list {\n        println!(\"{}\", color_item);\n    }\n    // 결과: red / green / blue"
          },
          {
            "id": "language-rust-p01-part-6",
            "title": "벡터[vector]",
            "content": "    let mut number_list = vec![1, 2, 3];\n    number_list.push(4);\n    println!(\"{:?}\", number_list);",
            "displayContent": "    // 벡터[vector]\n    let mut number_list = vec![1, 2, 3];\n    number_list.push(4);\n    println!(\"{:?}\", number_list);\n    // 결과: [1, 2, 3, 4]"
          },
          {
            "id": "language-rust-p01-part-7",
            "title": "구조체[struct]",
            "content": "    let user_item = User {\n        name: String::from(\"lee\"),\n        age: 28,\n    };\n    println!(\"{:?}\", user_item);\n    println!(\"{} {}\", user_item.name, user_item.age);",
            "displayContent": "    // 구조체[struct]\n    let user_item = User {\n        name: String::from(\"lee\"),\n        age: 28,\n    };\n    println!(\"{:?}\", user_item);\n    println!(\"{} {}\", user_item.name, user_item.age);\n    // 결과: lee 28"
          },
          {
            "id": "language-rust-p01-part-8",
            "title": "옵션[option]",
            "content": "    let maybe_value = Some(10);\n    match maybe_value {\n        Some(value) => println!(\"{}\", value),\n        None => println!(\"none\"),\n    }",
            "displayContent": "    // 옵션[option]\n    let maybe_value = Some(10);\n    match maybe_value {\n        Some(value) => println!(\"{}\", value),\n        None => println!(\"none\"),\n    }\n    // 결과: 10"
          },
          {
            "id": "language-rust-p01-part-9",
            "title": "함수[function]",
            "content": "    let sum_value = add(3, 4);\n    println!(\"{}\", sum_value);\n}",
            "displayContent": "    // 함수[function]\n    let sum_value = add(3, 4);\n    println!(\"{}\", sum_value);\n    // 결과: 7\n}"
          }
        ]
      },
      {
        "id": "language-rust-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.rs",
        "sourcePath": "assets/typingSource/Language-Rust/P02.실무-패턴.rs",
        "language": "rust",
        "parts": [
          {
            "id": "language-rust-p02-part-1",
            "title": "P02.실무-패턴",
            "content": "use std::collections::HashMap;",
            "displayContent": "use std::collections::HashMap;\n\n// ============================================================"
          },
          {
            "id": "language-rust-p02-part-2",
            "title": "P02. Rust 실무 패턴",
            "content": "fn main() {",
            "displayContent": "// P02. Rust 실무 패턴\n// ============================================================\n\nfn main() {"
          },
          {
            "id": "language-rust-p02-part-3",
            "title": "문자열[string]",
            "content": "    let text_value = String::from(\"hello rust\");\n    println!(\"{}\", text_value.to_uppercase());",
            "displayContent": "    // 문자열[string]\n    let text_value = String::from(\"hello rust\");\n    println!(\"{}\", text_value.to_uppercase());\n    // 결과: HELLO RUST"
          },
          {
            "id": "language-rust-p02-part-4",
            "title": "해시맵[hash map]",
            "content": "    let mut age_map = HashMap::new();\n    age_map.insert(\"kim\", 30);\n    age_map.insert(\"lee\", 25);\n    println!(\"{:?}\", age_map.get(\"kim\"));",
            "displayContent": "    // 해시맵[hash map]\n    let mut age_map = HashMap::new();\n    age_map.insert(\"kim\", 30);\n    age_map.insert(\"lee\", 25);\n    println!(\"{:?}\", age_map.get(\"kim\"));\n    // 결과: Some(30)"
          },
          {
            "id": "language-rust-p02-part-5",
            "title": "패턴 매칭[pattern matching]",
            "content": "    let maybe_score = Some(100);\n    if let Some(score) = maybe_score {\n        println!(\"{}\", score);\n    }\n\n    let parsed_value = \"42\".parse::<i32>();\n    match parsed_value {\n        Ok(value) => println!(\"{}\", value),\n        Err(_) => println!(\"parse error\"),\n    }",
            "displayContent": "    // 패턴 매칭[pattern matching]\n    let maybe_score = Some(100);\n    if let Some(score) = maybe_score {\n        println!(\"{}\", score);\n    }\n    // 결과: 100\n\n    // 결과 타입[result]\n    let parsed_value = \"42\".parse::<i32>();\n    match parsed_value {\n        Ok(value) => println!(\"{}\", value),\n        Err(_) => println!(\"parse error\"),\n    }\n    // 결과: 42"
          },
          {
            "id": "language-rust-p02-part-6",
            "title": "반복자[iterator]",
            "content": "    let nums = vec![1, 2, 3];\n    let doubled: Vec<i32> = nums.iter().map(|item| item * 2).collect();\n    println!(\"{:?}\", doubled);\n}",
            "displayContent": "    // 반복자[iterator]\n    let nums = vec![1, 2, 3];\n    let doubled: Vec<i32> = nums.iter().map(|item| item * 2).collect();\n    println!(\"{:?}\", doubled);\n    // 결과: [2, 4, 6]\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "language-sql",
    "label": "SQL",
    "folderName": "Language-SQL",
    "lessons": [
      {
        "id": "language-sql-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.sql",
        "sourcePath": "assets/typingSource/Language-SQL/P01.기본-패턴.sql",
        "language": "sql",
        "parts": [
          {
            "id": "language-sql-p01-part-1",
            "title": "테이블 생성[create table]",
            "content": "CREATE TABLE users (\n    user_id      INTEGER PRIMARY KEY,\n    user_name    VARCHAR(50),\n    user_age     INTEGER,\n    created_at   DATE\n);",
            "displayContent": "-- 테이블 생성[create table]\nCREATE TABLE users (\n    user_id      INTEGER PRIMARY KEY,\n    user_name    VARCHAR(50),\n    user_age     INTEGER,\n    created_at   DATE\n);"
          },
          {
            "id": "language-sql-p01-part-2",
            "title": "데이터 추가[insert]",
            "content": "INSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (1, 'kim', 30, DATE '2026-03-18');\n\nINSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (2, 'lee', 25, DATE '2026-03-18');",
            "displayContent": "-- 데이터 추가[insert]\nINSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (1, 'kim', 30, DATE '2026-03-18');\n\nINSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (2, 'lee', 25, DATE '2026-03-18');"
          },
          {
            "id": "language-sql-p01-part-3",
            "title": "조회[select]",
            "content": "SELECT *\nFROM users;",
            "displayContent": "-- 조회[select]\nSELECT *\nFROM users;\n-- 결과:\n-- 1, kim, 30, 2026-03-18\n-- 2, lee, 25, 2026-03-18"
          },
          {
            "id": "language-sql-p01-part-4",
            "title": "조건 조회[where]",
            "content": "SELECT user_name, user_age\nFROM users\nWHERE user_age >= 30;",
            "displayContent": "-- 조건 조회[where]\nSELECT user_name, user_age\nFROM users\nWHERE user_age >= 30;\n-- 결과:\n-- kim, 30"
          },
          {
            "id": "language-sql-p01-part-5",
            "title": "정렬[order by]",
            "content": "SELECT user_name, user_age\nFROM users\nORDER BY user_age DESC;",
            "displayContent": "-- 정렬[order by]\nSELECT user_name, user_age\nFROM users\nORDER BY user_age DESC;\n-- 결과: 나이 내림차순"
          },
          {
            "id": "language-sql-p01-part-6",
            "title": "개수 제한[limit]",
            "content": "SELECT *\nFROM users\nORDER BY user_id\nFETCH FIRST 1 ROWS ONLY;",
            "displayContent": "-- 개수 제한[limit]\nSELECT *\nFROM users\nORDER BY user_id\nFETCH FIRST 1 ROWS ONLY;\n-- 결과: 첫 행 1개"
          },
          {
            "id": "language-sql-p01-part-7",
            "title": "수정[update]",
            "content": "UPDATE users\nSET user_age = 31\nWHERE user_id = 1;",
            "displayContent": "-- 수정[update]\nUPDATE users\nSET user_age = 31\nWHERE user_id = 1;"
          },
          {
            "id": "language-sql-p01-part-8",
            "title": "삭제[delete]",
            "content": "DELETE FROM users\nWHERE user_id = 2;",
            "displayContent": "-- 삭제[delete]\nDELETE FROM users\nWHERE user_id = 2;"
          },
          {
            "id": "language-sql-p01-part-9",
            "title": "집계[aggregate]",
            "content": "SELECT COUNT(*) AS user_count,\n       AVG(user_age) AS avg_age\nFROM users;",
            "displayContent": "-- 집계[aggregate]\nSELECT COUNT(*) AS user_count,\n       AVG(user_age) AS avg_age\nFROM users;\n-- 결과: 1, 31"
          },
          {
            "id": "language-sql-p01-part-10",
            "title": "그룹화[group by]",
            "content": "SELECT created_at, COUNT(*) AS row_count\nFROM users\nGROUP BY created_at;",
            "displayContent": "-- 그룹화[group by]\nSELECT created_at, COUNT(*) AS row_count\nFROM users\nGROUP BY created_at;"
          },
          {
            "id": "language-sql-p01-part-11",
            "title": "조인[join]",
            "content": "CREATE TABLE orders (\n    order_id    INTEGER PRIMARY KEY,\n    user_id     INTEGER,\n    total_price INTEGER\n);\n\nINSERT INTO orders (order_id, user_id, total_price)\nVALUES (100, 1, 5000);\n\nSELECT u.user_name, o.total_price\nFROM users u\nJOIN orders o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 조인[join]\nCREATE TABLE orders (\n    order_id    INTEGER PRIMARY KEY,\n    user_id     INTEGER,\n    total_price INTEGER\n);\n\nINSERT INTO orders (order_id, user_id, total_price)\nVALUES (100, 1, 5000);\n\nSELECT u.user_name, o.total_price\nFROM users u\nJOIN orders o\n  ON u.user_id = o.user_id;\n-- 결과:\n-- kim, 5000"
          },
          {
            "id": "language-sql-p01-part-12",
            "title": "서브쿼리[subquery]",
            "content": "SELECT user_name\nFROM users\nWHERE user_id IN (\n    SELECT user_id\n    FROM orders\n    WHERE total_price >= 5000\n);",
            "displayContent": "-- 서브쿼리[subquery]\nSELECT user_name\nFROM users\nWHERE user_id IN (\n    SELECT user_id\n    FROM orders\n    WHERE total_price >= 5000\n);\n-- 결과: kim"
          },
          {
            "id": "language-sql-p01-part-13",
            "title": "공통 테이블 식[CTE]",
            "content": "WITH order_sum AS (\n    SELECT user_id, SUM(total_price) AS total_amount\n    FROM orders\n    GROUP BY user_id\n)\nSELECT u.user_name, o.total_amount\nFROM users u\nJOIN order_sum o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 공통 테이블 식[CTE]\nWITH order_sum AS (\n    SELECT user_id, SUM(total_price) AS total_amount\n    FROM orders\n    GROUP BY user_id\n)\nSELECT u.user_name, o.total_amount\nFROM users u\nJOIN order_sum o\n  ON u.user_id = o.user_id;"
          }
        ]
      },
      {
        "id": "language-sql-p02",
        "title": "P02.실무-조회",
        "fileName": "P02.실무-조회.sql",
        "sourcePath": "assets/typingSource/Language-SQL/P02.실무-조회.sql",
        "language": "sql",
        "parts": [
          {
            "id": "language-sql-p02-part-1",
            "title": "조건 묶기[condition grouping]",
            "content": "SELECT user_name\nFROM users\nWHERE user_age >= 20\n  AND user_name LIKE 'k%';",
            "displayContent": "-- 조건 묶기[condition grouping]\nSELECT user_name\nFROM users\nWHERE user_age >= 20\n  AND user_name LIKE 'k%';\n-- 결과: kim"
          },
          {
            "id": "language-sql-p02-part-2",
            "title": "범위 조회[between]",
            "content": "SELECT user_name\nFROM users\nWHERE user_age BETWEEN 20 AND 30;",
            "displayContent": "-- 범위 조회[between]\nSELECT user_name\nFROM users\nWHERE user_age BETWEEN 20 AND 30;\n-- 결과: 20~30 사이 사용자"
          },
          {
            "id": "language-sql-p02-part-3",
            "title": "포함 조회[in]",
            "content": "SELECT user_name\nFROM users\nWHERE user_id IN (1, 3, 5);",
            "displayContent": "-- 포함 조회[in]\nSELECT user_name\nFROM users\nWHERE user_id IN (1, 3, 5);\n-- 결과: 지정한 id만 조회"
          },
          {
            "id": "language-sql-p02-part-4",
            "title": "널 처리[null handling]",
            "content": "SELECT user_name, COALESCE(user_age, 0) AS safe_age\nFROM users;",
            "displayContent": "-- 널 처리[null handling]\nSELECT user_name, COALESCE(user_age, 0) AS safe_age\nFROM users;\n-- 결과: null이면 0 대체"
          },
          {
            "id": "language-sql-p02-part-5",
            "title": "왼쪽 조인[left join]",
            "content": "SELECT u.user_name, o.total_price\nFROM users u\nLEFT JOIN orders o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 왼쪽 조인[left join]\nSELECT u.user_name, o.total_price\nFROM users u\nLEFT JOIN orders o\n  ON u.user_id = o.user_id;\n-- 결과: 주문 없는 사용자도 포함"
          },
          {
            "id": "language-sql-p02-part-6",
            "title": "그룹 조건[having]",
            "content": "SELECT user_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 1;",
            "displayContent": "-- 그룹 조건[having]\nSELECT user_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 1;\n-- 결과: 주문 1개 이상 사용자"
          },
          {
            "id": "language-sql-p02-part-7",
            "title": "케이스[case]",
            "content": "SELECT user_name,\n       CASE\n           WHEN user_age >= 30 THEN 'senior'\n           ELSE 'junior'\n       END AS age_group\nFROM users;",
            "displayContent": "-- 케이스[case]\nSELECT user_name,\n       CASE\n           WHEN user_age >= 30 THEN 'senior'\n           ELSE 'junior'\n       END AS age_group\nFROM users;\n-- 결과: 조건에 따라 문자열 분기"
          }
        ]
      }
    ]
  },
  {
    "id": "language-typescript",
    "label": "TypeScript",
    "folderName": "Language-TypeScript",
    "lessons": [
      {
        "id": "language-typescript-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.ts",
        "sourcePath": "assets/typingSource/Language-TypeScript/P01.기본-패턴.ts",
        "language": "typescript",
        "parts": [
          {
            "id": "language-typescript-p01-part-1",
            "title": "P01. TypeScript 기본 패턴",
            "content": "type User = {\n  id: number;\n  name: string;\n  age?: number;\n  role: 'user' | 'admin';\n};\n\ntype ApiResponse<T> = {\n  ok: boolean;\n  data: T;\n};",
            "displayContent": "// P01. TypeScript 기본 패턴\n// ============================================================\n\ntype User = {\n  id: number;\n  name: string;\n  age?: number;\n  role: 'user' | 'admin';\n};\n\ntype ApiResponse<T> = {\n  ok: boolean;\n  data: T;\n};"
          },
          {
            "id": "language-typescript-p01-part-2",
            "title": "기본 타입[basic type]",
            "content": "let userName: string = 'kim';\nlet userAge: number | null = 30;\nlet isOpen: boolean = false;\n\nconsole.log(userName, userAge, isOpen);",
            "displayContent": "// 기본 타입[basic type]\nlet userName: string = 'kim';\nlet userAge: number | null = 30;\nlet isOpen: boolean = false;\n\nconsole.log(userName, userAge, isOpen);\n// 결과: kim 30 false"
          },
          {
            "id": "language-typescript-p01-part-3",
            "title": "배열[array]",
            "content": "const numberList: number[] = [1, 2, 3];\nconst nameList: Array<string> = ['lee', 'park'];\nconsole.log(numberList, nameList);",
            "displayContent": "// 배열[array]\nconst numberList: number[] = [1, 2, 3];\nconst nameList: Array<string> = ['lee', 'park'];\nconsole.log(numberList, nameList);\n// 결과: [1, 2, 3] ['lee', 'park']"
          },
          {
            "id": "language-typescript-p01-part-4",
            "title": "객체 타입[object type]",
            "content": "const userItem: User = {\n  id: 1,\n  name: 'lee',\n  role: 'admin',\n};\nconsole.log(userItem.name);",
            "displayContent": "// 객체 타입[object type]\nconst userItem: User = {\n  id: 1,\n  name: 'lee',\n  role: 'admin',\n};\nconsole.log(userItem.name);\n// 결과: lee"
          },
          {
            "id": "language-typescript-p01-part-5",
            "title": "함수[function]",
            "content": "function add(numA: number, numB: number): number {\n  return numA + numB;\n}\nconsole.log(add(3, 4));",
            "displayContent": "// 함수[function]\nfunction add(numA: number, numB: number): number {\n  return numA + numB;\n}\nconsole.log(add(3, 4));\n// 결과: 7"
          },
          {
            "id": "language-typescript-p01-part-6",
            "title": "유니온 타입[union type]",
            "content": "function formatValue(input: string | number): string {\n  return typeof input === 'number' ? input.toFixed(2) : input.toUpperCase();\n}\nconsole.log(formatValue(3.14));\nconsole.log(formatValue('ts'));",
            "displayContent": "// 유니온 타입[union type]\nfunction formatValue(input: string | number): string {\n  return typeof input === 'number' ? input.toFixed(2) : input.toUpperCase();\n}\nconsole.log(formatValue(3.14));\nconsole.log(formatValue('ts'));\n// 결과:\n// 3.14\n// TS"
          },
          {
            "id": "language-typescript-p01-part-7",
            "title": "인터페이스 대체 패턴[object response pattern]",
            "content": "const userResponse: ApiResponse<User> = {\n  ok: true,\n  data: userItem,\n};\nconsole.log(userResponse.data.role);",
            "displayContent": "// 인터페이스 대체 패턴[object response pattern]\nconst userResponse: ApiResponse<User> = {\n  ok: true,\n  data: userItem,\n};\nconsole.log(userResponse.data.role);\n// 결과: admin"
          },
          {
            "id": "language-typescript-p01-part-8",
            "title": "옵셔널 체이닝[optional chaining] / null 병합[nullish coalescing]",
            "content": "const maybeAge = userItem.age ?? 0;\nconsole.log(maybeAge);",
            "displayContent": "// 옵셔널 체이닝[optional chaining] / null 병합[nullish coalescing]\nconst maybeAge = userItem.age ?? 0;\nconsole.log(maybeAge);\n// 결과: 0"
          },
          {
            "id": "language-typescript-p01-part-9",
            "title": "제네릭[generic]",
            "content": "function firstItem<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconsole.log(firstItem<number>([10, 20, 30]));",
            "displayContent": "// 제네릭[generic]\nfunction firstItem<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconsole.log(firstItem<number>([10, 20, 30]));\n// 결과: 10"
          }
        ]
      },
      {
        "id": "language-typescript-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.ts",
        "sourcePath": "assets/typingSource/Language-TypeScript/P02.실무-패턴.ts",
        "language": "typescript",
        "parts": [
          {
            "id": "language-typescript-p02-part-1",
            "title": "P02. TypeScript 실무 패턴",
            "content": "type Product = {\n  id: number;\n  name: string;\n  price: number;\n};\n\ntype FetchState<T> =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: T }\n  | { status: 'error'; message: string };",
            "displayContent": "// P02. TypeScript 실무 패턴\n// ============================================================\n\ntype Product = {\n  id: number;\n  name: string;\n  price: number;\n};\n\ntype FetchState<T> =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: T }\n  | { status: 'error'; message: string };"
          },
          {
            "id": "language-typescript-p02-part-2",
            "title": "리터럴 유니온[literal union]",
            "content": "let sortOrder: 'asc' | 'desc' = 'asc';\nconsole.log(sortOrder);",
            "displayContent": "// 리터럴 유니온[literal union]\nlet sortOrder: 'asc' | 'desc' = 'asc';\nconsole.log(sortOrder);\n// 결과: asc"
          },
          {
            "id": "language-typescript-p02-part-3",
            "title": "타입 별칭[type alias]",
            "content": "const productItem: Product = {\n  id: 1,\n  name: 'keyboard',\n  price: 50000,\n};\nconsole.log(productItem.name);",
            "displayContent": "// 타입 별칭[type alias]\nconst productItem: Product = {\n  id: 1,\n  name: 'keyboard',\n  price: 50000,\n};\nconsole.log(productItem.name);\n// 결과: keyboard"
          },
          {
            "id": "language-typescript-p02-part-4",
            "title": "읽기 전용[readonly]",
            "content": "type UserProfile = {\n  readonly id: number;\n  nickname: string;\n};\n\nconst profileItem: UserProfile = {\n  id: 1,\n  nickname: 'neo',\n};\nconsole.log(profileItem.id);",
            "displayContent": "// 읽기 전용[readonly]\ntype UserProfile = {\n  readonly id: number;\n  nickname: string;\n};\n\nconst profileItem: UserProfile = {\n  id: 1,\n  nickname: 'neo',\n};\nconsole.log(profileItem.id);\n// 결과: 1"
          },
          {
            "id": "language-typescript-p02-part-5",
            "title": "상태 분기[discriminated union]",
            "content": "const fetchState: FetchState<Product> = {\n  status: 'success',\n  data: productItem,\n};\n\nif (fetchState.status === 'success') {\n  console.log(fetchState.data.price);\n}",
            "displayContent": "// 상태 분기[discriminated union]\nconst fetchState: FetchState<Product> = {\n  status: 'success',\n  data: productItem,\n};\n\nif (fetchState.status === 'success') {\n  console.log(fetchState.data.price);\n}\n// 결과: 50000"
          },
          {
            "id": "language-typescript-p02-part-6",
            "title": "배열 패턴[array pattern]",
            "content": "const productList: Product[] = [productItem];\nconst productNameList = productList.map(item => item.name);\nconsole.log(productNameList);",
            "displayContent": "// 배열 패턴[array pattern]\nconst productList: Product[] = [productItem];\nconst productNameList = productList.map(item => item.name);\nconsole.log(productNameList);\n// 결과: ['keyboard']"
          }
        ]
      }
    ]
  }
] as LanguageTrack[];
