import type { VisualTrack } from '../data/visualLessonTypes';

export const visualTracks: VisualTrack[] = [
  {
    "id": "visual-css",
    "label": "CSS",
    "folderName": "css",
    "lessons": [
      {
        "id": "visual-css-grid",
        "title": "Grid",
        "slug": "css-grid",
        "sourcePath": "assets/raw/knowledge/visual/css-grid",
        "parts": [
          {
            "id": "css-grid-01-flip-layout",
            "title": "좌우 반전 — grid-row / grid-column",
            "content": ".grid__img._reverse {\n  grid-row: 2;\n  grid-column: 2;\n}",
            "displayContent": ".grid__img._reverse {\n  grid-row: 2;\n  grid-column: 2;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-grid/images/012.webp",
            "caption": "짝수 행의 이미지·텍스트 열을 뒤집어 지그재그 레이아웃을 만듭니다.",
            "explanation": "입문편에서는 `grid-column: 1 / 2`처럼 시작·끝 라인 번호를 모두 적었습니다.\n이웃한 라인에 한 칸만 놓을 때는 끝 번호를 생략할 수 있습니다.\n\n`grid-row: 2; grid-column: 2;` → 행·열 모두 2~3번 라인 사이(한 칸)에 배치.\nfigcaption: 「이웃한 라인 번호는 생략할 수 있다」\n\n다만 이 예시는 생략 기법을 보여 주기 위한 것이고, 실제 좌우 반전은\n`flex-direction: row-reverse` / `column-reverse`가 더 적합한 경우가 많습니다.\n열 비가 1:1이 아니거나 행마다 열 폭이 달라지면 Grid 라인 배치가 불리하고,\n자식 폭에 따라 열이 정해지는 레이아웃은 Flex가 유리합니다.\n",
            "displayCaptions": [
              "이웃 라인에 한 칸만 둘 때 끝 라인 번호를 생략할 수 있습니다.",
              "진짜 좌우 반전은 flex의 row-reverse가 더 맞는 경우가 많습니다."
            ]
          },
          {
            "id": "css-grid-02-card-layout",
            "title": "카드 레이아웃 — repeat(auto-fill, minmax())",
            "content": "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));",
            "displayContent": "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-grid/images/014.webp",
            "caption": "미디어 쿼리 없이 브라우저 너비에 맞춰 카드가 1~3열로 유연하게 배치됩니다.",
            "explanation": "핵심 한 줄: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`\n\n세 개념이 겹칩니다.\n- `minmax(250px, 1fr)` — 칸은 최소 250px, 최대는 남는 공간을 균등 분배(1fr)\n- `auto-fill` — 컨테이너에 들어갈 수 있는 만큼 칸을 채움. 남는 좁은 폭은 다음 줄로\n- `repeat()` — 위 패턴을 반복\n\n미디어 쿼리로 768px·992px마다 열 수를 지정하는 방식보다 짧지만,\n브레이크포인트별 “정확히 N열” 제어는 어렵다는 트레이드오프가 있습니다.\n",
            "displayCaptions": [
              "미디어 쿼리 없이 카드 열 수가 너비에 맞춰 1~3열로 변합니다.",
              "최소 250px까지 줄고, 남는 폭은 1fr로 균등 확대됩니다.",
              "컨테이너에 깔 수 있는 만큼 칸을 채우고, 모자라면 다음 줄로 넘깁니다."
            ]
          },
          {
            "id": "css-grid-03-edge-align",
            "title": "그리드 끝 정렬 — align-self / auto-fill 버튼",
            "content": ".c-product {\n  grid-template-columns: 336px 1fr;\n}\nalign-self: flex-end;\ngrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));",
            "displayContent": ".c-product {\n  grid-template-columns: 336px 1fr;\n}\nalign-self: flex-end;\ngrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-grid/images/020.gif",
            "caption": "이미지 열은 고정, 텍스트·버튼은 가변. 버튼은 셀 오른쪽 아래·반응형 2열→1열.",
            "explanation": "`grid-template-columns: 336px 1fr`로 이미지(고정)와 본문(가변)을 나눕니다.\n\n버튼이 셀 전체를 늘어나지 않게 `align-self: flex-start`(또는 하단이면 flex-end)를 씁니다.\nGrid에서도 Flex에서 쓰던 정렬 속성을 쓸 수 있습니다.\n\n버튼 줄에는 `repeat(auto-fill, minmax(250px, 1fr))`를 재사용해\n250px 이하가 되면 2열→1열로 접히게 합니다. `gap`은 아이템 사이에만 여백을 만듭니다\n(figcaption: gap은 아이템 사이에만 여백을 만든다).\n",
            "displayCaptions": [
              "고정 이미지 열 + 가변 본문, 버튼은 셀 끝에 붙이고 좁아지면 1열로 접습니다."
            ]
          },
          {
            "id": "css-grid-04-tile-layout",
            "title": "타일 레이아웃 — auto-fit vs auto-fill",
            "content": "grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\nplace-items: center;",
            "displayContent": "grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\nplace-items: center;",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-grid/images/023.gif",
            "caption": "박스를 타일처럼 깔고, 너비에 따라 4→3→2→1열로 자연스럽게 줄어듭니다.",
            "explanation": "`repeat(auto-fit, minmax(160px, 1fr))`로 타일 열을 만듭니다.\n\n`auto-fill`은 빈 트랙을 남겨 최소폭 열이 여러 개처럼 보이고,\n`auto-fit`은 빈 트랙을 접어 남은 칸을 아이템이 나눠 가집니다.\n타일처럼 “남는 공간을 꽉 채울” 때는 `auto-fit`이 맞는 경우가 많습니다.\n\n중앙 배치는 `place-items: center`(또는 align-items + justify-items)로\n한 줄에 상하좌우 가운데 정렬할 수 있습니다.\n",
            "displayCaptions": [
              "auto-fit은 빈 열을 접어 채우고, auto-fill은 빈 열을 남깁니다."
            ]
          },
          {
            "id": "css-grid-05-sidebar-article",
            "title": "사이드바 레이아웃 — grid-template-areas",
            "content": ".post {\n  grid-template-areas: \"side main sns\";\n  grid-template-columns: 240px 1fr 80px;\n}\n.post__side {\n  grid-area: side;\n}",
            "displayContent": ".post {\n  grid-template-areas: \"side main sns\";\n  grid-template-columns: 240px 1fr 80px;\n}\n.post__side {\n  grid-area: side;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-grid/images/028.gif",
            "caption": "영역 이름을 붙여 side·main·sns를 배치하고, 그리드 안에서만 따라다니는 SNS를 만듭니다.",
            "explanation": "`grid-template-areas`로 셀 묶음(영역)에 이름을 붙입니다.\n\n`grid-template-areas: \"side main sns\";`\n자식에는 `grid-area: side;`처럼 이름만 지정하면 됩니다.\n라인 번호(`grid-row`/`grid-column`)보다 읽기 쉽고,\n미디어 쿼리에서 areas 문자열만 바꿔 재배치하기 좋습니다.\n\n스크롤 시 SNS만 따라가게 할 때도, 그리드 영역 안에서 sticky/고정 패턴을\n조합하는 해설이 HTM에 이어집니다.\n",
            "displayCaptions": [
              "grid-template-areas로 레이아웃 영역에 이름을 붙여 배치합니다."
            ]
          },
          {
            "id": "css-grid-06-sticky-footer",
            "title": "스티키 푸터 — auto 1fr auto",
            "content": ".l-wrapper {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}",
            "displayContent": ".l-wrapper {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-grid/images/035.webp",
            "caption": "본문이 짧아도 푸터가 화면 아래에 붙도록 행 높이를 분배합니다.",
            "explanation": "문의 완료 페이지처럼 콘텐츠가 적으면 푸터가 중간에 떠 보기 흉합니다.\n\n`grid-template-rows: auto 1fr auto` + 컨테이너 `min-height: 100vh`로\n헤더·본문·푸터를 나누면, 가운데 `1fr`이 남는 세로 공간을 채웁니다.\n\n- `auto` — 콘텐츠 높이만큼만\n- `1fr` — 남은 공간을 흡수\n\nfigcaption: 「콘텐츠가 부족하면 어색한 모습…」→「Grid로 화면 높이를 최소한 유지」\n",
            "displayCaptions": [
              "auto 1fr auto 행 구성으로 짧은 페이지에서도 푸터를 하단에 둡니다.",
              "auto는 콘텐츠만큼, 1fr은 남은 세로 공간을 채웁니다."
            ]
          }
        ]
      },
      {
        "id": "visual-css-selector",
        "title": "Selector",
        "slug": "css-selector",
        "sourcePath": "assets/raw/knowledge/visual/css-selector",
        "parts": [
          {
            "id": "css-selector-01-selector-overview",
            "title": "셀렉터[selector] 개요",
            "content": "CSS 규칙은 셀렉터·프로퍼티[property]·값[value] 세 요소로 구성됩니다.",
            "displayContent": "CSS 규칙은 셀렉터·프로퍼티[property]·값[value] 세 요소로 구성됩니다.",
            "language": "text",
            "imagePath": "/knowledge/reference/visual/css-selector/images/001.webp",
            "caption": "CSS 규칙은 셀렉터·프로퍼티[property]·값[value] 세 요소로 구성됩니다.",
            "explanation": "CSS 한 줄은 세 부분으로 나뉩니다.\n\n① 셀렉터[selector] — 어떤 요소에 적용할지\n② 프로퍼티[property] — 무엇을 바꿀지\n③ 값[value] — 어떻게 바꿀지\n\n예: `p { color: #999; }` 에서 `p`가 셀렉터, `color`가 프로퍼티, `#999`가 값입니다.\n이후 섹션은 이 셀렉터 자리의 패턴을 하나씩 연습합니다.\n",
            "displayCaptions": [
              "CSS 규칙은 셀렉터, 프로퍼티, 값의 세 부분으로 이루어집니다.",
              "셀렉터로 대상을 고르고, 프로퍼티와 값으로 스타일을 지정합니다."
            ]
          },
          {
            "id": "css-selector-02-basic-selectors",
            "title": "기본 셀렉터 — 태그·class·id",
            "content": "p {\n  color: inherit;\n}\n.className {\n  color: inherit;\n}\n#idName {\n  color: inherit;\n}\np, div, .class {\n  color: inherit;\n}",
            "displayContent": "p {\n  color: inherit;\n}\n.className {\n  color: inherit;\n}\n#idName {\n  color: inherit;\n}\np, div, .class {\n  color: inherit;\n}",
            "language": "css",
            "imagePath": "",
            "caption": "태그명, class, id, 복수 요소 지정 등 가장 자주 쓰는 셀렉터입니다.",
            "explanation": "실무에서 가장 먼저 익히는 네 가지입니다.\n\n- 태그명 `p` — 해당 HTML 태그 전부\n- class `.className` — class 속성이 일치하는 요소\n- id `#idName` — 문서에서 유일한 id\n- 쉼표 `p, div, .class` — 여러 대상에 같은 스타일\n\nid는 한 페이지에 하나, class는 여러 요소에 재사용하는 것이 일반적입니다.\n",
            "displayCaptions": [
              "태그·class·id·복수 지정으로 대상 요소를 고릅니다.",
              "쉼표로 나열하면 여러 셀렉터에 같은 선언을 한 번에 적용합니다."
            ]
          },
          {
            "id": "css-selector-03-link-selectors",
            "title": "링크 셀렉터 — :link / :visited / :hover / :active",
            "content": "a:link {\n  color: inherit;\n}\na:visited {\n  color: inherit;\n}\na:hover {\n  color: inherit;\n}\na:active {\n  color: inherit;\n}",
            "displayContent": "a:link {\n  color: inherit;\n}\na:visited {\n  color: inherit;\n}\na:hover {\n  color: inherit;\n}\na:active {\n  color: inherit;\n}",
            "language": "css",
            "imagePath": "",
            "caption": "링크 상태별로 다른 스타일을 줄 때 씁니다. LVHA 순서를 기억하세요.",
            "explanation": "앵커 `a`의 상태에 따라 스타일을 나눕니다.\n\n- `:link` — 아직 방문하지 않은 링크\n- `:visited` — 방문한 링크\n- `:hover` — 마우스 올린 상태\n- `:active` — 클릭하는 순간\n\n특이도[specificity] 때문에 보통 LVHA(`:link` → `:visited` → `:hover` → `:active`) 순으로 씁니다.\n",
            "displayCaptions": [
              "링크 상태에 따라 색·밑줄 등을 다르게 지정합니다.",
              "작성 순서는 link → visited → hover → active(LVHA)가 안전합니다."
            ]
          },
          {
            "id": "css-selector-04-descendant",
            "title": "자손 셀렉터 — 공백",
            "content": "div p {\n  color: #999;\n}",
            "displayContent": "div p {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/002.webp",
            "caption": "지정 요소 안의 모든 하위(손자 포함) 요소가 대상입니다.",
            "explanation": "공백으로 연결하면 깊이에 상관없이 자손을 모두 선택합니다.\n\n`div p` → div 안의 모든 p (손자 p 포함)\n직계 자식만 필요할 때는 다음 섹션의 `>`를 씁니다.\n",
            "displayCaptions": [
              "공백( )으로 자손 요소를 선택합니다. 손자도 포함됩니다."
            ]
          },
          {
            "id": "css-selector-05-direct-child",
            "title": "직계 자식 셀렉터 — >",
            "content": "div > p {\n  color: #999;\n}",
            "displayContent": "div > p {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/003.webp",
            "caption": "바로 아래 한 단계 자식만 대상입니다. 손자는 제외됩니다.",
            "explanation": "`>`는 직계 자식만 고릅니다.\n\n`div > p` → div의 바로 아래 p만 (더 깊은 p는 제외)\n자손 공백 셀렉터보다 범위가 좁아 의도치 않은 스타일 확산을 줄입니다.\n",
            "displayCaptions": [
              ">로 직계 자식만 선택합니다. 손자는 제외됩니다."
            ]
          },
          {
            "id": "css-selector-06-general-sibling",
            "title": "일반 형제 셀렉터 — ~",
            "content": "h3~p {\n  color: #999;\n}",
            "displayContent": "h3~p {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/004.webp",
            "caption": "같은 부모 아래, 앞 요소 뒤에 나오는 형제가 대상입니다.",
            "explanation": "`~`는 지정 요소보다 뒤에 나오는 같은 레벨 형제를 모두 선택합니다.\n\n`h3 ~ p` → 어떤 h3 뒤에 오는 p들\n바로 다음 하나만 필요하면 `+`를 씁니다.\n",
            "displayCaptions": [
              "~로 뒤에 나오는 형제 요소를 모두 선택합니다."
            ]
          },
          {
            "id": "css-selector-07-adjacent-sibling",
            "title": "인접 형제 셀렉터 — +",
            "content": "h3+p {\n  color: #999;\n}",
            "displayContent": "h3+p {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/005.webp",
            "caption": "바로 다음에 붙은 형제 요소 하나만 대상입니다.",
            "explanation": "그 요소의 바로 뒤 이웃만 셀렉터로 삼습니다.\n\n`h3 + p` → h3 바로 다음 p 하나\n※ 완전히 인접한 요소가 아니면 동작하지 않습니다. 사이에 다른 태그가 끼면 매칭되지 않습니다.\n`~`보다 범위가 좁아 제목 바로 아래 문단만 꾸밀 때 유용합니다.\n",
            "displayCaptions": [
              "+로 바로 다음 형제 하나만 선택합니다.",
              "사이에 다른 요소가 있으면 동작하지 않습니다."
            ]
          },
          {
            "id": "css-selector-08-first-child",
            "title": "형제 중 첫 자식 — :first-child",
            "content": ".box p:first-child {\n  color: #999;\n}",
            "displayContent": ".box p:first-child {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/006.webp",
            "caption": "부모의 첫 번째 자식인 요소를 선택합니다.",
            "explanation": "`p:first-child`는 부모의 첫 자식이면서 p일 때만 맞습니다.\n\n앞에 다른 태그가 있으면 첫 자식이 아니므로 선택되지 않습니다.\n태그 종류만 보면 `:first-of-type`이 더 정확할 수 있습니다.\n",
            "displayCaptions": [
              ":first-child로 부모의 첫 번째 자식을 선택합니다."
            ]
          },
          {
            "id": "css-selector-09-last-child",
            "title": "형제 중 마지막 자식 — :last-child",
            "content": ".box p:last-child {\n  color: #999;\n}",
            "displayContent": ".box p:last-child {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/007.webp",
            "caption": "부모의 마지막 자식인 요소를 선택합니다.",
            "explanation": "`p:last-child`는 부모의 마지막 자식이면서 p일 때 적용됩니다.\n\n목록 마지막 항목의 구분선 제거 등에 자주 씁니다.\n타입 기준이면 `:last-of-type`을 검토하세요.\n",
            "displayCaptions": [
              ":last-child로 부모의 마지막 자식을 선택합니다."
            ]
          },
          {
            "id": "css-selector-10-only-child",
            "title": "유일한 자식 — :only-child",
            "content": "p:only-child {\n  color: #999;\n}",
            "displayContent": "p:only-child {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/008.webp",
            "caption": "형제가 없는 유일한 자식 요소를 선택합니다.",
            "explanation": "지정한 요소에 형제 요소가 없을 때만 적용됩니다.\n\n`p:only-child`는 부모 아래 자식이 하나뿐일 때 그 요소가 p이면 선택됩니다.\n형제가 하나라도 생기면 더 이상 매칭되지 않습니다.\n",
            "displayCaptions": [
              ":only-child로 형제가 없는 유일한 자식을 선택합니다.",
              "형제가 하나라도 있으면 적용되지 않습니다."
            ]
          },
          {
            "id": "css-selector-11-first-of-type",
            "title": "타입 기준 첫 요소 — :first-of-type",
            "content": "p:first-of-type {\n  color: #999;\n}",
            "displayContent": "p:first-of-type {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/009.webp",
            "caption": "같은 태그 종류 중 첫 번째 요소를 선택합니다.",
            "explanation": "`p:first-of-type`은 형제 중 첫 번째 p를 고릅니다.\n\n앞에 h2 등이 있어도 p만 보면 첫 번째이면 선택됩니다.\n핀포인트로 특정 태그를 고를 때는 `:first-child`보다 이쪽이 추천됩니다.\n",
            "displayCaptions": [
              ":first-of-type으로 해당 타입의 첫 요소를 선택합니다.",
              "태그 종류가 중요할 때 first-child보다 정확합니다."
            ]
          },
          {
            "id": "css-selector-12-last-of-type",
            "title": "타입 기준 마지막 요소 — :last-of-type",
            "content": "p:last-of-type {\n  color: #999;\n}",
            "displayContent": "p:last-of-type {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/010.webp",
            "caption": "같은 태그 종류 중 마지막 요소를 선택합니다.",
            "explanation": "`p:last-of-type`은 형제 중 마지막 p를 고릅니다.\n\n뒤에 다른 태그가 있어도 p 기준으로 마지막이면 선택됩니다.\n",
            "displayCaptions": [
              ":last-of-type으로 해당 타입의 마지막 요소를 선택합니다.",
              "태그 종류가 중요할 때 last-child보다 정확합니다."
            ]
          },
          {
            "id": "css-selector-13-only-of-type",
            "title": "유일한 타입 — :only-of-type",
            "content": "p:only-of-type {\n  color: #999;\n}",
            "displayContent": "p:only-of-type {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/011.webp",
            "caption": "같은 태그 형제가 없을 때 선택합니다.",
            "explanation": "`p:only-of-type`은 부모 안에 p가 하나뿐일 때 적용됩니다.\n\n다른 태그 형제는 있어도 되고, 같은 태그 형제가 없어야 합니다.\n",
            "displayCaptions": [
              ":only-of-type으로 해당 타입이 하나뿐인 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-14-nth-of-type",
            "title": "n번째 자식 — :nth-of-type(n)",
            "content": "p:nth-of-type(2) {\n  color: #999;\n}",
            "displayContent": "p:nth-of-type(2) {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/012.webp",
            "caption": "타입 기준 n번째 요소를 선택합니다. (1)이면 첫 번째입니다.",
            "explanation": "`p:nth-of-type(2)`는 형제 중 두 번째 p를 선택합니다.\n\n괄호에는 1부터의 반각 숫자를 넣습니다. `(1)`이면 첫 요소입니다.\n",
            "displayCaptions": [
              ":nth-of-type(n)으로 n번째 타입 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-15-nth-last-of-type",
            "title": "뒤에서 n번째 — :nth-last-of-type(n)",
            "content": "p:nth-last-of-type(2) {\n  color: #999;\n}",
            "displayContent": "p:nth-last-of-type(2) {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/013.webp",
            "caption": "끝에서 세어 n번째 요소를 선택합니다. (1)이면 마지막입니다.",
            "explanation": "`p:nth-last-of-type(2)`는 끝에서 두 번째 p를 선택합니다.\n\n`(1)`이면 마지막 요소입니다. 앞에서 세는 `:nth-of-type`과 대칭입니다.\n",
            "displayCaptions": [
              ":nth-last-of-type(n)으로 뒤에서 n번째를 선택합니다."
            ]
          },
          {
            "id": "css-selector-16-odd",
            "title": "홀수 번째 — :nth-of-type(odd)",
            "content": "p:nth-of-type(odd) {\n  color: #999;\n}",
            "displayContent": "p:nth-of-type(odd) {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/014.webp",
            "caption": "1, 3, 5… 홀수 위치 요소를 선택합니다.",
            "explanation": "숫자 자리에 `odd`를 쓰면 홀수 번째입니다.\n\n줄무늬 테이블·카드 교차 배경에 자주 씁니다. `2n+1`과 같습니다.\n",
            "displayCaptions": [
              "odd로 홀수 번째 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-17-even",
            "title": "짝수 번째 — :nth-of-type(even)",
            "content": "p:nth-of-type(even) {\n  color: #999;\n}",
            "displayContent": "p:nth-of-type(even) {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/015.webp",
            "caption": "2, 4, 6… 짝수 위치 요소를 선택합니다.",
            "explanation": "숫자 자리에 `even`을 쓰면 짝수 번째입니다.\n\n`odd`와 짝을 이뤄 교차 스타일을 만듭니다. `2n`과 같습니다.\n",
            "displayCaptions": [
              "even으로 짝수 번째 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-18-multiple-n",
            "title": "배수 번째 — :nth-of-type(3n)",
            "content": "p:nth-of-type(3n) {\n  color: #999;\n}",
            "displayContent": "p:nth-of-type(3n) {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/016.webp",
            "caption": "3, 6, 9…처럼 n배수 위치를 선택합니다.",
            "explanation": "`3n`은 3의 배수 위치입니다.\n\n`2n+1`(홀수), `3n-1`(3열 가운데)처럼 An+B 패턴으로 확장합니다.\n",
            "displayCaptions": [
              "3n처럼 배수 패턴으로 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-19-center-column",
            "title": "3열 가운데 — :nth-of-type(3n-1)",
            "content": "li:nth-of-type(3n-1) {\n  color: #999;\n}",
            "displayContent": "li:nth-of-type(3n-1) {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/017.webp",
            "caption": "3열 그리드의 가운데 열(2, 5, 8…)만 선택합니다.",
            "explanation": "`li:nth-of-type(3n-1)`은 2, 5, 8… 위치에 해당합니다.\n\n3열 레이아웃에서 가운데 열만 강조할 때 쓰는 패턴입니다.\n",
            "displayCaptions": [
              "3n-1로 3열 레이아웃의 가운데 열만 선택합니다."
            ]
          },
          {
            "id": "css-selector-20-attribute-exists",
            "title": "속성[attribute] 존재 — [attr]",
            "content": "p[class] {\n  color: #999;\n}",
            "displayContent": "p[class] {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/018.webp",
            "caption": "지정한 속성을 가진 요소를 선택합니다.",
            "explanation": "`[class]`, `[href]`, `[src]`처럼 속성 유무만으로 선택할 수 있습니다.\n\n`p[class]`는 class 속성이 있는 p만 대상입니다. 값 일치가 필요하면 *= ^= $= 를 씁니다.\n",
            "displayCaptions": [
              "[attr]로 특정 속성을 가진 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-21-attribute-contains",
            "title": "속성 값 포함 — [attr*=\"값\"]",
            "content": "p[class*=\"ttl\"] {\n  color: #999;\n}",
            "displayContent": "p[class*=\"ttl\"] {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/019.webp",
            "caption": "속성 값 어딘가에 문자열이 포함되면 선택합니다.",
            "explanation": "`*=`는 부분 일치입니다.\n\n`p[class*=\"ttl\"]` → class에 ttl이 포함된 p\n파일명·클래스 접두/접미가 섞인 경우에도 잡을 수 있습니다.\n",
            "displayCaptions": [
              "[attr*=\"값\"]으로 속성 값 일부가 일치하는 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-22-attribute-starts",
            "title": "속성 값 시작 — [attr^=\"값\"]",
            "content": "p[class^=\"ttl\"] {\n  color: #999;\n}",
            "displayContent": "p[class^=\"ttl\"] {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/020.webp",
            "caption": "속성 값이 지정 문자열로 시작하면 선택합니다.",
            "explanation": "`^=`는 접두사[prefix] 일치입니다.\n\n`p[class^=\"ttl\"]` → class가 ttl로 시작하는 p\n프로토콜·경로 접두 구분에도 씁니다.\n",
            "displayCaptions": [
              "[attr^=\"값\"]으로 속성 값이 특정 문자로 시작하는 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-23-attribute-ends",
            "title": "속성 값 끝 — [attr$=\"값\"]",
            "content": "p[class$=\"one\"] {\n  color: #999;\n}",
            "displayContent": "p[class$=\"one\"] {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/021.webp",
            "caption": "속성 값이 지정 문자열로 끝나면 선택합니다.",
            "explanation": "`$=`는 접미사[suffix] 일치입니다.\n\n`p[class$=\"one\"]` → class가 one으로 끝나는 p\n확장자(`.pdf`, `.png`) 링크 스타일에 자주 씁니다.\n",
            "displayCaptions": [
              "[attr$=\"값\"]으로 속성 값이 특정 문자로 끝나는 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-24-first-line",
            "title": "첫 줄 — ::first-line",
            "content": "p::first-line {\n  color: #999;\n}",
            "displayContent": "p::first-line {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/022.webp",
            "caption": "블록 요소의 첫 줄에만 스타일을 적용합니다.",
            "explanation": "`::first-line`은 가상 요소[pseudo-element]로 문단 첫 줄만 꾸밉니다.\n\n줄바꿈 위치에 따라 적용 범위가 달라지며, 블록 요소에서 의미가 있습니다.\n",
            "displayCaptions": [
              "::first-line으로 문단 첫 줄만 스타일링합니다."
            ]
          },
          {
            "id": "css-selector-25-first-letter",
            "title": "첫 글자 — ::first-letter",
            "content": "p::first-letter {\n  color: #999;\n}",
            "displayContent": "p::first-letter {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/023.webp",
            "caption": "블록 요소의 첫 글자에만 스타일을 적용합니다. (블록 전용)",
            "explanation": "`::first-letter`로 드롭 캡[drop cap]처럼 첫 글자만 강조합니다.\n\n※ 블록 요소에만 적용됩니다. 인라인에는 기대와 다르게 동작할 수 있습니다.\n",
            "displayCaptions": [
              "::first-letter로 첫 글자만 강조합니다. 블록 요소 전용입니다."
            ]
          },
          {
            "id": "css-selector-26-not",
            "title": "제외 선택 — :not()",
            "content": "p:not(.text) {\n  color: #999;\n}",
            "displayContent": "p:not(.text) {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/024.webp",
            "caption": "조건에 맞지 않는 요소를 선택합니다.",
            "explanation": "`p:not(.text)`는 class가 .text가 아닌 p를 선택합니다.\n\n`not(조건)`으로 예외를 빼면, 공통 스타일 후 일부만 다르게 주기 쉽습니다.\n",
            "displayCaptions": [
              ":not()으로 특정 조건을 제외한 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-27-empty",
            "title": "빈 요소 — :empty",
            "content": "ul:empty {\n  display:none;\n}",
            "displayContent": "ul:empty {\n  display:none;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/025.webp",
            "caption": "자식·텍스트가 없는 요소를 선택합니다.",
            "explanation": "`ul:empty { display: none; }`처럼 빈 목록을 숨길 때 유용합니다.\n\n공백만 있어도 비어 있지 않은 것으로 보는 브라우저가 있으니 주의합니다.\n",
            "displayCaptions": [
              ":empty로 내용이 없는 요소를 선택합니다."
            ]
          },
          {
            "id": "css-selector-28-universal",
            "title": "전체 선택 — *",
            "content": "* {\n  color: #999;\n}",
            "displayContent": "* {\n  color: #999;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/026.webp",
            "caption": "문서의 모든 요소를 선택합니다.",
            "explanation": "`*`는 HTML에 적힌 모든 요소를 대상으로 합니다.\n\n리셋 CSS나 전역 `box-sizing` 지정에 쓰이지만, 남용하면 성능·특이도에 불리합니다.\n",
            "displayCaptions": [
              "*로 모든 요소를 선택합니다. 리셋·전역 설정에 자주 씁니다."
            ]
          },
          {
            "id": "css-selector-29-root",
            "title": "루트 변수 — :root",
            "content": ":root {\n  --color-text: #333;\n  --mgn-text: 1.5em;\n}\n/*呼び出す時*/\n.text {\n  color : var(--color-text);\n  margin : var(--mgn-text);\n}",
            "displayContent": ":root {\n  --color-text: #333;\n  --mgn-text: 1.5em;\n}\n/*呼び出す時*/\n.text {\n  color : var(--color-text);\n  margin : var(--mgn-text);\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/027.webp",
            "caption": "문서 최상위에 CSS 변수[custom property]를 선언합니다.",
            "explanation": "`:root`에 `--color-text` 같은 변수를 두고 `var(--color-text)`로 참조합니다.\n\n테마 색·간격 토큰을 한곳에서 관리할 때 표준 패턴입니다.\n",
            "displayCaptions": [
              ":root에 전역 CSS 변수를 선언합니다.",
              "사용처에서는 var(--변수명)으로 참조합니다."
            ]
          },
          {
            "id": "css-selector-30-before-after",
            "title": "가상 요소 — ::before / ::after",
            "content": "h2::before {\n  content:'前に追加 > ';\n}\nh2::after {\n  content: ' < 뒤에 추가';\n}",
            "displayContent": "h2::before {\n  content:'前に追加 > ';\n}\nh2::after {\n  content: ' < 뒤에 추가';\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/028.webp",
            "caption": "요소 앞뒤에 장식·아이콘·말풍선 꼬리 등을 추가합니다.",
            "explanation": "`::before` / `::after`는 HTML을 늘리지 않고 앞뒤 콘텐츠를 삽입합니다.\n\n`content`가 있어야 보이며, 아이콘·따옴표·말풍선 삼각형 등에 씁니다.\n",
            "displayCaptions": [
              "::before/::after로 요소 앞뒤에 콘텐츠를 삽입합니다.",
              "content 속성과 함께 써야 화면에 나타납니다."
            ]
          },
          {
            "id": "css-selector-31-form-selectors",
            "title": "폼 셀렉터 — input·textarea·select",
            "content": "input[type=\"text\"] {\n  border:1px;\n}\ntextarea {\n  border:1px;\n}\nselect {\n  border:1px;\n}\ninput[type=\"checkbox\"] {\n}\ninput[type=\"radio\"] {\n}\ninput[type=\"checkbox\"]:checked {\n}\ninput[type=\"radio\"]:checked {\n}\ninput[type=\"submit\"] {\n}",
            "displayContent": "input[type=\"text\"] {\n  border:1px;\n}\ntextarea {\n  border:1px;\n}\nselect {\n  border:1px;\n}\ninput[type=\"checkbox\"] {\n}\ninput[type=\"radio\"] {\n}\ninput[type=\"checkbox\"]:checked {\n}\ninput[type=\"radio\"]:checked {\n}\ninput[type=\"submit\"] {\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/029.webp",
            "caption": "입력 필드·체크박스·라디오·제출 버튼 등 폼 요소를 타입별로 지정합니다.",
            "explanation": "폼 UI는 type과 상태로 세밀하게 고릅니다.\n\n- `input[type=\"text\"]`, `textarea`, `select`\n- `input[type=\"checkbox\"]`, `input[type=\"radio\"]`\n- `:checked` — 체크/선택된 상태\n- `input[type=\"submit\"]` — 전송 버튼\n\n타입 속성 셀렉터와 상태 가상 클래스를 조합하는 것이 핵심입니다.\n",
            "displayCaptions": [
              "폼 요소 종류·상태별로 셀렉터를 지정합니다.",
              ":checked로 체크된 체크박스·라디오를 구분합니다."
            ]
          },
          {
            "id": "css-selector-32-target",
            "title": "페이지 내 링크 — :target",
            "content": "#modal {\n  display: none;\n  /*クリック前のcss*/;\n}\n#modal:target {\n  display: block;\n  /*クリック後のcss*/;\n}",
            "displayContent": "#modal {\n  display: none;\n  /*クリック前のcss*/;\n}\n#modal:target {\n  display: block;\n  /*クリック後のcss*/;\n}",
            "language": "css",
            "imagePath": "/knowledge/reference/visual/css-selector/images/030.webp",
            "caption": "앵커[anchor]로 이동한 대상 요소에 스타일을 적용합니다.",
            "explanation": "`#modal:target`은 URL 해시가 `#modal`일 때 그 요소를 선택합니다.\n\n클릭 전 `display: none`, 클릭 후 `:target`에서 `display: block`처럼\n모달·탭을 JS 없이 제어하는 패턴에 쓰입니다.\n",
            "displayCaptions": [
              ":target으로 해시 링크가 가리키는 요소를 선택합니다.",
              "모달 표시/숨김을 URL 해시로 제어할 수 있습니다."
            ]
          }
        ]
      }
    ]
  }
] as VisualTrack[];
