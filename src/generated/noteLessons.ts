import type { NoteTrack } from '../data/noteLessonTypes';

export const noteTracks: NoteTrack[] = [
  {
    "id": "notes-architecture",
    "label": "아키텍처",
    "folderName": "architecture",
    "lessons": [
      {
        "id": "knowledge-notes-project-structure",
        "title": "백엔드·프론트엔드 프로젝트 폴더 구조 (고빈도만)",
        "fileName": "project-structure.yaml",
        "sourcePath": "assets/raw/knowledge/notes/project-structure.yaml",
        "parts": [
          {
            "id": "knowledge-notes-project-structure__개요",
            "title": "개요",
            "blocks": [
              {
                "type": "prose",
                "text": "✅ feature 단위 폴더 (user / order / payment)\n✅ BE: controller · service · repository · dto · entity\n✅ FE: api · hooks · components · types\n❌ 프레임워크별 세부 컨벤션, monorepo 도구, 희귀 아키텍처"
              },
              {
                "type": "prose",
                "text": "도메인(기능)별로 폴더를 먼저 나누면 관련 코드가 한곳에 모인다.\n각 feature 안에서는 역할(요청 처리 / 비즈니스 / 저장 / 전송 형태)을 계층으로 분리한다."
              }
            ]
          },
          {
            "id": "knowledge-notes-project-structure__백엔드",
            "title": "백엔드",
            "blocks": [
              {
                "type": "prose",
                "text": "백엔드 (feature + 계층)"
              },
              {
                "type": "pre",
                "text": "src\n ├ user\n │   ├ controller\n │   │   └ UserController.java\n │   │\n │   ├ service\n │   │   └ UserService.java\n │   │\n │   ├ repository\n │   │   └ UserRepository.java\n │   │\n │   ├ dto\n │   │   ├ UserCreateRequest.java\n │   │   └ UserResponse.java\n │   │\n │   └ entity\n │       └ User.java\n │\n ├ order\n │   ├ controller\n │   ├ service\n │   ├ repository\n │   └ dto\n │\n └ payment"
              },
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "Controller",
                    "value": "HTTP 요청 수신·응답. 검증·라우팅만, 비즈니스는 Service로"
                  },
                  {
                    "key": "Service",
                    "value": "비즈니스 로직[Business Logic]. 트랜잭션·규칙·여러 Repository 조합"
                  },
                  {
                    "key": "Repository",
                    "value": "DB 접근 추상화. 쿼리·영속화만 담당"
                  },
                  {
                    "key": "DTO",
                    "value": "계층 간 데이터 전달 객체. API 입출력 형태를 Entity와 분리"
                  },
                  {
                    "key": "Entity",
                    "value": "DB 테이블에 대응하는 도메인/영속 모델"
                  }
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-project-structure__프론트엔드",
            "title": "프론트엔드",
            "blocks": [
              {
                "type": "prose",
                "text": "프론트엔드 (feature + 역할)"
              },
              {
                "type": "pre",
                "text": "src\n ├ user\n │   ├ api\n │   │   └ userApi.ts\n │   │\n │   ├ hooks\n │   │   └ useUser.ts\n │   │\n │   ├ components\n │   │   ├ UserList.tsx\n │   │   └ UserProfileCard.tsx\n │   │\n │   └ types\n │       └ user.ts\n │\n ├ order\n │   ├ api\n │   ├ hooks\n │   └ components\n │\n └ payment"
              },
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "api",
                    "value": "엔드포인트 호출·클라이언트 래퍼"
                  },
                  {
                    "key": "hooks",
                    "value": "데이터 fetch·상태·사이드이펙트를 훅으로 묶음"
                  },
                  {
                    "key": "components",
                    "value": "해당 feature UI만. 공통 UI는 shared로"
                  },
                  {
                    "key": "types",
                    "value": "요청/응답·화면용 타입 정의"
                  }
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-project-structure__체크",
            "title": "체크",
            "blocks": [
              {
                "type": "list",
                "items": [
                  "새 기능이 생기면 기존 layers에 끼워 넣지 말고 feature 폴더를 먼저 만들었는가?",
                  "Controller에 비즈니스 로직이 들어가 있지 않은가?",
                  "DTO와 Entity를 섞어 API에 그대로 노출하지 않았는가?",
                  "프론트에서 api 호출이 컴포넌트에 직접 흩어져 있지 않은가?"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "notes-frontend",
    "label": "프론트엔드",
    "folderName": "frontend",
    "lessons": [
      {
        "id": "knowledge-notes-frontend-design-process",
        "title": "프론트엔드 화면 상세설계 방식 (고빈도만)",
        "fileName": "frontend-design-process.yaml",
        "sourcePath": "assets/raw/knowledge/notes/frontend-design-process.yaml",
        "parts": [
          {
            "id": "knowledge-notes-frontend-design-process__개요",
            "title": "개요",
            "blocks": [
              {
                "type": "prose",
                "text": "✅ 4레이어(UX/Figma, API 명세, 프론트 기술설계, Design System)\n✅ 화면 상세설계서에 넣을 개요·API·상태·validation·예외\n✅ 서버 상태 vs 클라이언트 상태, Empty/Loading, 코드 분할\n❌ 특정 회사 내부 툴명, 희귀 패턴, 프레임워크 전용 API 나열"
              },
              {
                "type": "prose",
                "text": "유수 대기업 프론트엔드에서는 두꺼운 화면 상세설계서 한 장보다\nFigma + API Schema(OpenAPI) + 구현 코드 + PR 리뷰가 곧 설계다.\n문서는 의사결정·예외·권한처럼 코드만으로는 안 보이는 합의를 짧게 남긴다."
              }
            ]
          },
          {
            "id": "knowledge-notes-frontend-design-process__ux-figma",
            "title": "UX / Figma",
            "blocks": [
              {
                "type": "prose",
                "text": "화면 구조·플로우·인터랙션의 시각적 합의"
              },
              {
                "type": "heading",
                "text": "산출물"
              },
              {
                "type": "list",
                "items": [
                  "Figma 프레임·컴포넌트·오토레이아웃",
                  "유저 플로우(진입→성공/실패 분기)",
                  "상태별 화면(Empty / Loading / Error / Success)"
                ]
              },
              {
                "type": "heading",
                "text": "체크"
              },
              {
                "type": "list",
                "items": [
                  "모바일·데스크톱 브레이크포인트",
                  "주요 CTA·비활성·로딩 피드백",
                  "접근성(포커스, 대비, 라벨)"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-frontend-design-process__api-명세",
            "title": "API 명세",
            "blocks": [
              {
                "type": "prose",
                "text": "프론트↔백엔드 계약[contract]"
              },
              {
                "type": "heading",
                "text": "산출물"
              },
              {
                "type": "list",
                "items": [
                  "OpenAPI / Swagger (경로·메서드·스키마·에러 코드)",
                  "요청/응답 예시, 페이지네이션·필터 규칙",
                  "권한·인증 헤더 요구사항"
                ]
              },
              {
                "type": "heading",
                "text": "체크"
              },
              {
                "type": "list",
                "items": [
                  "필드명·타입·필수 여부 확정",
                  "4xx/5xx 시 프론트가 보여줄 메시지 합의",
                  "목[Mock] / 스텁[Stub]으로 병렬 개발 가능 여부"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-frontend-design-process__프론트-기술설계",
            "title": "프론트 기술설계",
            "blocks": [
              {
                "type": "prose",
                "text": "구현 단위·상태·라우팅·성능의 기술 결정"
              },
              {
                "type": "heading",
                "text": "산출물"
              },
              {
                "type": "list",
                "items": [
                  "라우트·페이지·컴포넌트 경계",
                  "서버 상태[Server State] vs 클라이언트 상태[Client State]",
                  "폼 validation, 낙관적 갱신 여부",
                  "코드 분할[Code Splitting] / 지연 로딩[Lazy Loading]"
                ]
              },
              {
                "type": "heading",
                "text": "체크"
              },
              {
                "type": "list",
                "items": [
                  "데이터 fetch 위치(페이지/훅/컨테이너)",
                  "캐시·재시도·무효화 규칙",
                  "긴 목록이면 가상화[Virtualization] 검토"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-frontend-design-process__design-system",
            "title": "Design System",
            "blocks": [
              {
                "type": "prose",
                "text": "재사용 UI·토큰으로 일관성 유지"
              },
              {
                "type": "heading",
                "text": "산출물"
              },
              {
                "type": "list",
                "items": [
                  "컴포넌트 라이브러리(Button, Input, Modal…)",
                  "디자인 토큰[Design Token] (색·간격·타이포)",
                  "상태 패턴(Skeleton, Empty State, Toast)"
                ]
              },
              {
                "type": "heading",
                "text": "체크"
              },
              {
                "type": "list",
                "items": [
                  "새 화면은 DS 컴포넌트 우선, 예외만 커스텀",
                  "토큰 밖 하드코딩 색/간격 최소화"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-frontend-design-process__설계서-템플릿",
            "title": "설계서 템플릿",
            "blocks": [
              {
                "type": "heading",
                "text": "개요"
              },
              {
                "type": "list",
                "items": [
                  "화면 목적·대상 사용자·진입 경로",
                  "관련 Figma 링크·담당(FE/BE/Design)",
                  "권한·노출 조건(로그인/역할)"
                ]
              },
              {
                "type": "heading",
                "text": "API"
              },
              {
                "type": "list",
                "items": [
                  "엔드포인트·메서드·인증",
                  "요청 파라미터·바디 스키마",
                  "성공 응답 필드 → UI 매핑",
                  "에러 코드 → 화면 메시지"
                ]
              },
              {
                "type": "heading",
                "text": "상태"
              },
              {
                "type": "list",
                "items": [
                  "로딩[Loading State] / 스켈레톤[Skeleton]",
                  "빈 목록[Empty State]",
                  "에러·재시도",
                  "서버 상태 vs 로컬 UI 상태 구분"
                ]
              },
              {
                "type": "heading",
                "text": "validation"
              },
              {
                "type": "list",
                "items": [
                  "필드별 규칙(필수·길이·형식)",
                  "제출 전/서버 응답 후 검증 시점",
                  "인라인 에러 vs 토스트"
                ]
              },
              {
                "type": "heading",
                "text": "예외"
              },
              {
                "type": "list",
                "items": [
                  "권한 없음·세션 만료",
                  "부분 실패·타임아웃",
                  "동시 편집·중복 제출 방지"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-frontend-design-process__체크",
            "title": "체크",
            "blocks": [
              {
                "type": "list",
                "items": [
                  "Figma에 Empty·Loading·Error가 있는가?",
                  "OpenAPI와 화면 필드명이 같은가?",
                  "서버에서 오는 데이터와 폼 입력 상태가 섞이지 않았는가?",
                  "DS에 있는 컴포넌트로 충분한가?",
                  "첫 로드 번들이 비대하면 라우트 단위 코드 분할을 했는가?"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "notes-web",
    "label": "웹 UI",
    "folderName": "web",
    "lessons": [
      {
        "id": "knowledge-notes-ui-taxonomy",
        "title": "UI 부품 분류 트리 (Tailwind UI Blocks 기준)",
        "fileName": "ui-taxonomy.yaml",
        "sourcePath": "assets/raw/knowledge/notes/ui-taxonomy.yaml",
        "parts": [
          {
            "id": "knowledge-notes-ui-taxonomy__marketing",
            "title": "Marketing",
            "blocks": [
              {
                "type": "heading",
                "text": "Page Sections"
              },
              {
                "type": "list",
                "items": [
                  "Hero Sections",
                  "Feature Sections",
                  "CTA Sections",
                  "Bento Grids",
                  "Pricing Sections",
                  "Header Sections",
                  "Newsletter Sections",
                  "Stats",
                  "Testimonials",
                  "Blog Sections",
                  "Contact Sections",
                  "Team Sections",
                  "Content Sections",
                  "Logo Clouds",
                  "FAQs",
                  "Footers"
                ]
              },
              {
                "type": "heading",
                "text": "Elements"
              },
              {
                "type": "list",
                "items": [
                  "Headers",
                  "Flyout Menus",
                  "Banners"
                ]
              },
              {
                "type": "heading",
                "text": "Feedback"
              },
              {
                "type": "list",
                "items": [
                  "404 Pages"
                ]
              },
              {
                "type": "heading",
                "text": "Page Examples"
              },
              {
                "type": "list",
                "items": [
                  "Landing Pages",
                  "Pricing Pages",
                  "About Pages"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-ui-taxonomy__application-ui",
            "title": "Application UI",
            "blocks": [
              {
                "type": "heading",
                "text": "Application Shells"
              },
              {
                "type": "list",
                "items": [
                  "Stacked Layouts",
                  "Sidebar Layouts",
                  "Multi-Column Layouts"
                ]
              },
              {
                "type": "heading",
                "text": "Headings"
              },
              {
                "type": "list",
                "items": [
                  "Page Headings",
                  "Card Headings",
                  "Section Headings"
                ]
              },
              {
                "type": "heading",
                "text": "Data Display"
              },
              {
                "type": "list",
                "items": [
                  "Description Lists",
                  "Stats",
                  "Calendars"
                ]
              },
              {
                "type": "heading",
                "text": "Lists"
              },
              {
                "type": "list",
                "items": [
                  "Stacked Lists",
                  "Tables",
                  "Grid Lists",
                  "Feeds"
                ]
              },
              {
                "type": "heading",
                "text": "Forms"
              },
              {
                "type": "list",
                "items": [
                  "Form Layouts",
                  "Input Groups",
                  "Select Menus",
                  "Sign-in and Registration",
                  "Textareas",
                  "Radio Groups",
                  "Checkboxes",
                  "Toggles",
                  "Action Panels",
                  "Comboboxes"
                ]
              },
              {
                "type": "heading",
                "text": "Feedback"
              },
              {
                "type": "list",
                "items": [
                  "Alerts",
                  "Empty States"
                ]
              },
              {
                "type": "heading",
                "text": "Navigation"
              },
              {
                "type": "list",
                "items": [
                  "Navbars",
                  "Pagination",
                  "Tabs",
                  "Vertical Navigation",
                  "Sidebar Navigation",
                  "Breadcrumbs",
                  "Progress Bars",
                  "Command Palettes"
                ]
              },
              {
                "type": "heading",
                "text": "Overlays"
              },
              {
                "type": "list",
                "items": [
                  "Modal Dialogs",
                  "Drawers",
                  "Notifications"
                ]
              },
              {
                "type": "heading",
                "text": "Elements"
              },
              {
                "type": "list",
                "items": [
                  "Avatars",
                  "Badges",
                  "Dropdowns",
                  "Buttons",
                  "Button Groups"
                ]
              },
              {
                "type": "heading",
                "text": "Layout"
              },
              {
                "type": "list",
                "items": [
                  "Containers",
                  "Cards",
                  "List containers",
                  "Media Objects",
                  "Dividers"
                ]
              },
              {
                "type": "heading",
                "text": "Page Examples"
              },
              {
                "type": "list",
                "items": [
                  "Home Screens",
                  "Detail Screens",
                  "Settings Screens"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-ui-taxonomy__ecommerce",
            "title": "Ecommerce",
            "blocks": [
              {
                "type": "heading",
                "text": "Components"
              },
              {
                "type": "list",
                "items": [
                  "Product Overviews",
                  "Product Lists",
                  "Category Previews",
                  "Shopping Carts",
                  "Category Filters",
                  "Product Quickviews",
                  "Product Features",
                  "Store Navigation",
                  "Promo Sections",
                  "Checkout Forms",
                  "Reviews",
                  "Order Summaries",
                  "Order History",
                  "Incentives"
                ]
              },
              {
                "type": "heading",
                "text": "Page Examples"
              },
              {
                "type": "list",
                "items": [
                  "Storefront Pages",
                  "Product Pages",
                  "Category Pages",
                  "Shopping Cart Pages",
                  "Checkout Pages",
                  "Order Detail Pages",
                  "Order History Pages"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-ui-taxonomy__interactive-elements",
            "title": "Interactive Elements",
            "blocks": [
              {
                "type": "heading",
                "text": "Elements"
              },
              {
                "type": "list",
                "items": [
                  "Autocomplete",
                  "Command palette",
                  "Copy button",
                  "Dialog",
                  "Disclosure",
                  "Dropdown menu",
                  "Popover",
                  "Select",
                  "Tabs"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-ui-taxonomy__ui-kit-components",
            "title": "UI Kit Components",
            "blocks": [
              {
                "type": "heading",
                "text": "Components"
              },
              {
                "type": "list",
                "items": [
                  "Button",
                  "Input",
                  "Table",
                  "Sidebar",
                  "Checkbox",
                  "Combobox",
                  "Radio groups",
                  "Switch",
                  "Description list",
                  "Badge",
                  "Listbox",
                  "Pagination",
                  "Dropdown",
                  "Alert",
                  "Navbar",
                  "Avatar",
                  "Divider",
                  "Textarea",
                  "Heading",
                  "Text",
                  "Fieldset",
                  "Dialog",
                  "Sidebar layout",
                  "Stacked layout",
                  "Auth layout"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-ui-taxonomy__역할-그룹",
            "title": "역할 그룹",
            "blocks": [
              {
                "type": "heading",
                "text": "소개 (Introduction)"
              },
              {
                "type": "list",
                "items": [
                  "Hero",
                  "About",
                  "Content"
                ]
              },
              {
                "type": "heading",
                "text": "신뢰 (Trust)"
              },
              {
                "type": "list",
                "items": [
                  "Logo Cloud",
                  "Testimonials",
                  "Stats"
                ]
              },
              {
                "type": "heading",
                "text": "기능 (Function)"
              },
              {
                "type": "list",
                "items": [
                  "Features",
                  "Bento Grid"
                ]
              },
              {
                "type": "heading",
                "text": "판매 (Sales)"
              },
              {
                "type": "list",
                "items": [
                  "Pricing",
                  "CTA"
                ]
              },
              {
                "type": "heading",
                "text": "지원 (Support)"
              },
              {
                "type": "list",
                "items": [
                  "FAQ",
                  "Contact",
                  "Newsletter"
                ]
              },
              {
                "type": "heading",
                "text": "공통 UI (Common)"
              },
              {
                "type": "list",
                "items": [
                  "Header",
                  "Footer",
                  "Banner",
                  "Flyout Menu",
                  "Navigation",
                  "Sidebar"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-ui-taxonomy__mui",
            "title": "MUI",
            "blocks": [
              {
                "type": "heading",
                "text": "Inputs"
              },
              {
                "type": "list",
                "items": [
                  "Autocomplete",
                  "Button Group",
                  "Rating",
                  "Switch",
                  "Toggle Button",
                  "Date Picker"
                ]
              },
              {
                "type": "heading",
                "text": "Data Display"
              },
              {
                "type": "list",
                "items": [
                  "Avatar",
                  "Chip",
                  "Divider",
                  "Tooltip",
                  "Typography",
                  "Data Grid"
                ]
              },
              {
                "type": "heading",
                "text": "Feedback"
              },
              {
                "type": "list",
                "items": [
                  "Alert",
                  "Progress",
                  "Skeleton",
                  "Toast/Snackbar"
                ]
              },
              {
                "type": "heading",
                "text": "Surfaces"
              },
              {
                "type": "list",
                "items": [
                  "App Bar",
                  "Paper",
                  "Accordion",
                  "Card"
                ]
              },
              {
                "type": "heading",
                "text": "Navigation"
              },
              {
                "type": "list",
                "items": [
                  "Bottom Navigation",
                  "Breadcrumbs",
                  "Link",
                  "Menu",
                  "Stepper",
                  "Tabs",
                  "Drawer"
                ]
              },
              {
                "type": "heading",
                "text": "Layout"
              },
              {
                "type": "list",
                "items": [
                  "Stack",
                  "Container"
                ]
              },
              {
                "type": "heading",
                "text": "Utils"
              },
              {
                "type": "list",
                "items": [
                  "Popover",
                  "Modal Dialog"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-ui-taxonomy__고빈도",
            "title": "고빈도",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "Header",
                    "value": "★★★★★"
                  },
                  {
                    "key": "Hero",
                    "value": "★★★★★"
                  },
                  {
                    "key": "Feature",
                    "value": "★★★★★"
                  },
                  {
                    "key": "CTA",
                    "value": "★★★★★"
                  },
                  {
                    "key": "Footer",
                    "value": "★★★★★"
                  },
                  {
                    "key": "Pricing",
                    "value": "★★★★"
                  },
                  {
                    "key": "FAQ",
                    "value": "★★★★"
                  },
                  {
                    "key": "Testimonials",
                    "value": "★★★★"
                  },
                  {
                    "key": "Contact",
                    "value": "★★★★"
                  },
                  {
                    "key": "Stats",
                    "value": "★★★"
                  },
                  {
                    "key": "Logo Cloud",
                    "value": "★★★"
                  },
                  {
                    "key": "Newsletter",
                    "value": "★★★"
                  },
                  {
                    "key": "Team",
                    "value": "★★"
                  },
                  {
                    "key": "Bento Grid",
                    "value": "★★"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "notes-rest",
    "label": "REST",
    "folderName": "rest",
    "lessons": [
      {
        "id": "knowledge-notes-rest-patterns",
        "title": "REST 통신 필수 패턴 (고빈도만)",
        "fileName": "rest-patterns.yaml",
        "sourcePath": "assets/raw/knowledge/notes/rest-patterns.yaml",
        "parts": [
          {
            "id": "knowledge-notes-rest-patterns__범위",
            "title": "범위",
            "blocks": [
              {
                "type": "prose",
                "text": "✅ GET/POST/PUT/PATCH/DELETE, 200·201·400·401·403·404·500\n✅ Header: Content-Type, Authorization, Accept, Cookie\n✅ Body: application/json, form-urlencoded, multipart/form-data\n✅ cookie / localStorage / sessionStorage, Session, JWT Bearer\n✅ CORS, Same-Origin, Preflight(OPTIONS), Allow-Origin\n❌ 난해한 캐시 헤더 조합, 희귀 상태 코드, 특수 프록시 설정"
              }
            ]
          },
          {
            "id": "knowledge-notes-rest-patterns__패턴1-로그인-요청",
            "title": "패턴1 - 로그인 요청",
            "blocks": [
              {
                "type": "list",
                "items": [
                  "POST /login",
                  "Content-Type: application/json",
                  "Body: { \"id\": \"test\", \"pw\": \"1234\" }",
                  "성공 → 200 + token 또는 Set-Cookie",
                  "실패 → 401"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-rest-patterns__패턴2-토큰을-헤더에-넣어-api-호출",
            "title": "패턴2 - 토큰을 헤더에 넣어 API 호출",
            "blocks": [
              {
                "type": "list",
                "items": [
                  "Authorization: Bearer <jwt>",
                  "보호된 GET/POST 호출",
                  "없거나 만료 → 401"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-rest-patterns__패턴3-쿠키-저장-후-자동-인증",
            "title": "패턴3 - 쿠키 저장 후 자동 인증",
            "blocks": [
              {
                "type": "list",
                "items": [
                  "로그인 응답 Set-Cookie (가능하면 HttpOnly)",
                  "이후 같은 출처 요청에 쿠키 자동 첨부",
                  "서버는 세션 저장소에서 로그인 상태 확인"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-rest-patterns__패턴4-다른-도메인-cors",
            "title": "패턴4 - 다른 도메인 + CORS",
            "blocks": [
              {
                "type": "list",
                "items": [
                  "프론트 localhost:3000 / API localhost:4000 → 다른 출처",
                  "브라우저가 Preflight OPTIONS 먼저 보낼 수 있음",
                  "서버 Access-Control-Allow-Origin (+ credentials면 Allow-Credentials)"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-rest-patterns__express-예시",
            "title": "Express 예시",
            "blocks": [
              {
                "type": "pre",
                "text": "import express from \"express\";\nimport cors from \"cors\";\n\nconst app = express();\napp.use(express.json());\napp.use(cors({ origin: \"http://localhost:3000\", credentials: true }));\n\napp.get(\"/set-cookie\", (req, res) => {\n  res.cookie(\"user\", \"chatgpt\", { httpOnly: true });\n  res.send(\"쿠키 저장 완료\");\n});\n\napp.post(\"/login\", (req, res) => {\n  const { id, pw } = req.body;\n  if (id === \"test\" && pw === \"1234\") {\n    return res.json({ message: \"로그인 성공\", token: \"jwt-token-example\" });\n  }\n  res.status(401).json({ message: \"로그인 실패\" });\n});\n\napp.listen(4000, () => console.log(\"Server running on 4000\"));"
              }
            ]
          },
          {
            "id": "knowledge-notes-rest-patterns__저장소-비교",
            "title": "저장소 비교",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "Cookie",
                    "value": "서버↔브라우저 자동 전송, 세션 ID·HttpOnly에 적합"
                  },
                  {
                    "key": "localStorage",
                    "value": "장기 보관, JS가 읽고 Authorization에 직접 넣음"
                  },
                  {
                    "key": "sessionStorage",
                    "value": "탭 단위 임시 보관"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "notes-http",
    "label": "HTTP",
    "folderName": "http",
    "lessons": [
      {
        "id": "knowledge-notes-http-response",
        "title": "HTTP 응답 헤더 읽기 (curl -I)",
        "fileName": "http-response.yaml",
        "sourcePath": "assets/raw/knowledge/notes/http-response.yaml",
        "parts": [
          {
            "id": "knowledge-notes-http-response__http-응답-헤더-읽기-curl-i",
            "title": "HTTP 응답 헤더 읽기 (curl -I)",
            "blocks": [
              {
                "type": "prose",
                "text": "curl -I 로 헤더만 요청하면 상태 코드와 응답 메타데이터를 빠르게 확인할 수 있다."
              },
              {
                "type": "pre",
                "text": "curl -I http://localhost:3000/uploads/sample.mp3"
              },
              {
                "type": "pre",
                "text": "HTTP/1.1 404 Not Found\naccess-control-allow-origin: *\naccess-control-expose-headers: Retry-After,X-RateLimit-Limit,X-RateLimit-Remaining,X-RateLimit-Reset\ncontent-type: application/json\nDate: Tue, 30 Jun 2026 14:18:37 GMT\nConnection: keep-alive\nKeep-Alive: timeout=5"
              },
              {
                "type": "prose",
                "text": "읽는 법:\n- 첫 줄 `HTTP/1.1 404 Not Found` — 프로토콜 버전과 상태 코드[status code]\n- `access-control-allow-origin: *` — CORS 허용 범위\n- `access-control-expose-headers` — 브라우저 JS에서 읽을 수 있게 노출한 헤더 목록 (레이트 리밋 정보 등)\n- `content-type: application/json` — 본문 형식 (404여도 에러 본문이 JSON이라는 뜻)\n- `Connection: keep-alive` / `Keep-Alive: timeout=5` — 연결을 5초까지 재사용"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "notes-regex",
    "label": "정규식",
    "folderName": "regex",
    "lessons": [
      {
        "id": "knowledge-notes-regex-reference",
        "title": "정규식 참고표 (JavaScript)",
        "fileName": "regex-reference.yaml",
        "sourcePath": "assets/raw/knowledge/notes/regex-reference.yaml",
        "parts": [
          {
            "id": "knowledge-notes-regex-reference__일반-문자",
            "title": "일반 문자",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": ". 또는 [^\\n\\r]",
                    "value": "줄바꿈을 제외한 아무 문자"
                  },
                  {
                    "key": "[A-Za-z]",
                    "value": "알파벳"
                  },
                  {
                    "key": "[a-z]",
                    "value": "소문자 알파벳"
                  },
                  {
                    "key": "[A-Z]",
                    "value": "대문자 알파벳"
                  },
                  {
                    "key": "\\d 또는 [0-9]",
                    "value": "숫자"
                  },
                  {
                    "key": "\\D 또는 [^0-9]",
                    "value": "숫자가 아닌 문자"
                  },
                  {
                    "key": "\\w 또는 [A-Za-z0-9_]",
                    "value": "알파벳·숫자·밑줄"
                  },
                  {
                    "key": "\\W 또는 [^A-Za-z0-9_]",
                    "value": "\\w의 반대"
                  },
                  {
                    "key": "\\S",
                    "value": "\\s의 반대 (공백이 아닌 문자)"
                  }
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__공백-문자",
            "title": "공백 문자",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "\\t",
                    "value": "탭"
                  },
                  {
                    "key": "\\n",
                    "value": "줄바꿈"
                  },
                  {
                    "key": "\\r",
                    "value": "캐리지 리턴"
                  },
                  {
                    "key": "\\s",
                    "value": "공백·탭·줄바꿈·캐리지 리턴"
                  }
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__문자-집합",
            "title": "문자 집합",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "[xyz]",
                    "value": "x"
                  },
                  {
                    "key": "[^xyz]",
                    "value": "x"
                  },
                  {
                    "key": "[1-3]",
                    "value": "1"
                  },
                  {
                    "key": "[^1-3]",
                    "value": "1"
                  }
                ]
              },
              {
                "type": "prose",
                "text": "문자 집합[character set]은 대괄호 안 문자들의 OR 연산이다.\n여는 [ 바로 뒤의 ^는 부정을 뜻한다. 집합 안의 .은 글자 그대로 마침표다."
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__이스케이프가-필요한-문자",
            "title": "이스케이프가 필요한 문자",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "집합 밖",
                    "value": "\\. \\^ \\$ \\| \\\\ \\/ \\( \\) \\[ \\] \\{ \\}"
                  },
                  {
                    "key": "집합 안",
                    "value": "\\\\ 와 \\] 만 필수"
                  }
                ]
              },
              {
                "type": "prose",
                "text": "^는 집합의 여는 [ 바로 뒤에 올 때만, -는 알파벳이나 숫자 사이에 올 때만 이스케이프한다."
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__수량자",
            "title": "수량자",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "{2}",
                    "value": "정확히 2개"
                  },
                  {
                    "key": "{2,}",
                    "value": "2개 이상"
                  },
                  {
                    "key": "{2,7}",
                    "value": "2개 이상 7개 이하"
                  },
                  {
                    "key": "*",
                    "value": "0개 이상"
                  },
                  {
                    "key": "+",
                    "value": "1개 이상"
                  },
                  {
                    "key": "?",
                    "value": "0개 또는 1개"
                  }
                ]
              },
              {
                "type": "prose",
                "text": "수량자[quantifier]는 대상 표현식 뒤에 붙인다."
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__경계",
            "title": "경계",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "^",
                    "value": "문자열 시작"
                  },
                  {
                    "key": "$",
                    "value": "문자열 끝"
                  },
                  {
                    "key": "\\b",
                    "value": "단어 경계[word boundary]"
                  }
                ]
              },
              {
                "type": "prose",
                "text": "단어 경계는 \\w와 \\W가 맞닿는 지점, 그리고 문자열 양 끝의 \\w 앞뒤에서 매칭된다."
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__매칭-전후-탐색",
            "title": "매칭 (전후 탐색)",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "foo|bar",
                    "value": "foo 또는 bar"
                  },
                  {
                    "key": "foo(?=bar)",
                    "value": "뒤에 bar가 오는 foo (lookahead)"
                  },
                  {
                    "key": "foo(?!bar)",
                    "value": "뒤에 bar가 오지 않는 foo"
                  },
                  {
                    "key": "(?<=bar)foo",
                    "value": "앞에 bar가 있는 foo (lookbehind)"
                  },
                  {
                    "key": "(?<!bar)foo",
                    "value": "앞에 bar가 없는 foo"
                  }
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__그룹과-캡처",
            "title": "그룹과 캡처",
            "blocks": [
              {
                "type": "kv",
                "rows": [
                  {
                    "key": "(foo)",
                    "value": "캡처 그룹 — 매칭하고 저장"
                  },
                  {
                    "key": "(?:foo)",
                    "value": "비캡처 그룹 — 매칭만 하고 저장 안 함"
                  },
                  {
                    "key": "(foo)bar\\1",
                    "value": "\\1은 첫 캡처 그룹 역참조 — foobarfoo 매칭"
                  }
                ]
              },
              {
                "type": "prose",
                "text": "캡처 그룹은 string.match, string.matchAll, string.replace(regexp, callback)에서 의미가 있다.\n\\N은 N번째 캡처 그룹의 역참조[backreference]이고, 번호는 1부터 시작한다."
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__연습-사이트",
            "title": "연습 사이트",
            "blocks": [
              {
                "type": "list",
                "items": [
                  "Regex Crossword — https://regexcrossword.com (정규식 퍼즐 — lookaround·앵커 감각)",
                  "Codewars Regex — https://www.codewars.com/kata/search?tags=regex (JS/TS 8kyu~6kyu 위주)",
                  "HackerRank Regex — https://www.hackerrank.com/domains/regex (기초 단계별)"
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-regex-reference__루틴",
            "title": "루틴",
            "blocks": [
              {
                "type": "prose",
                "text": "평일 10~15분: Regex Crossword 1판 + Codewars regex 1문제\n주말: VS Code Ctrl+Shift+F 로 실무 코드에서 함수 호출·로그·치환 미션\n타이핑 연습: syntax/regex-for-javascript P01~P03"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "notes-typescript",
    "label": "TypeScript",
    "folderName": "typescript",
    "lessons": [
      {
        "id": "knowledge-notes-typescript-maybe",
        "title": "중첩 Maybe 타입 다루기",
        "fileName": "typescript-maybe.yaml",
        "sourcePath": "assets/raw/knowledge/notes/typescript-maybe.yaml",
        "parts": [
          {
            "id": "knowledge-notes-typescript-maybe__중첩-maybe-타입-다루기",
            "title": "중첩 Maybe 타입 다루기",
            "blocks": [
              {
                "type": "prose",
                "text": "Maybe<Maybe<Array>> 같은 타입은 \"있을 수도 있고, 없을 수도 있고,\n그 안에도 또 없을 수도 있는 배열\"이다.\n핵심은 null/undefined를 단계적으로 제거하면서 안전하게 접근하는 것.\n\nTypeScript로 표현하면:"
              },
              {
                "type": "pre",
                "text": "type Maybe<T> = T | null | undefined;\ntype Data = Maybe<Maybe<string[]>>;"
              },
              {
                "type": "prose",
                "text": "접근할 때는 옵셔널 체이닝[optional chaining]과 널 병합[nullish coalescing]으로\n단계마다 없음을 처리한다:"
              },
              {
                "type": "pre",
                "text": "const list = data ?? [];\nconst first = data?.[0] ?? 'default';"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "notes-windows",
    "label": "Windows",
    "folderName": "windows",
    "lessons": [
      {
        "id": "knowledge-notes-windows-search",
        "title": "Windows 탐색기 검색 치트시트",
        "fileName": "windows-search.yaml",
        "sourcePath": "assets/raw/knowledge/notes/windows-search.yaml",
        "parts": [
          {
            "id": "knowledge-notes-windows-search__windows-탐색기-검색-치트시트",
            "title": "Windows 탐색기 검색 치트시트",
            "blocks": [
              {
                "type": "prose",
                "text": "실사용 기준으로 아래 내용만 알아도 탐색기 검색의 90%는 해결된다."
              }
            ]
          },
          {
            "id": "knowledge-notes-windows-search__속성-검색",
            "title": "속성 검색",
            "blocks": [
              {
                "type": "pre",
                "text": "kind:          파일 종류 (docs, pics, videos, music, folders, spreadsheets, presentations)\next:           확장자\nfilename:      파일명\nauthor:        작성자\ntitle:         제목\ndate:          날짜\ndatemodified:  수정일\nsize:          크기"
              }
            ]
          },
          {
            "id": "knowledge-notes-windows-search__검색-연산자",
            "title": "검색 연산자",
            "blocks": [
              {
                "type": "pre",
                "text": "OR             또는\nNOT            제외\n\"문구\"         정확히 일치\n(공백)         모두 포함(AND)"
              }
            ]
          },
          {
            "id": "knowledge-notes-windows-search__실전-예제",
            "title": "실전 예제",
            "blocks": [
              {
                "type": "table",
                "headers": [
                  "상황",
                  "검색어"
                ],
                "rows": [
                  [
                    "다운로드 폴더의 PDF 계약서 찾기",
                    "`ext:.pdf 계약`"
                  ],
                  [
                    "오늘 받은 엑셀 찾기",
                    "`kind:spreadsheets datemodified:today`"
                  ],
                  [
                    "500MB 이상 동영상 찾기",
                    "`kind:videos size:>500MB`"
                  ],
                  [
                    "작년에 만든 PPT 찾기",
                    "`kind:presentations date:last year`"
                  ],
                  [
                    "홍길동이 작성한 워드 문서",
                    "`kind:docs author:홍길동`"
                  ],
                  [
                    "이름에 backup이 들어간 zip 파일",
                    "`filename:backup ext:.zip`"
                  ],
                  [
                    "특정 기간 파일",
                    "`date:2026/01/01..2026/01/31`"
                  ]
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-windows-search__가장-자주-쓰는-검색어-5개",
            "title": "가장 자주 쓰는 검색어 5개",
            "blocks": [
              {
                "type": "pre",
                "text": "ext:.pdf\nkind:docs\ndatemodified:today\nsize:>100MB\n\"정확한 문구\""
              }
            ]
          }
        ]
      }
    ]
  }
] as NoteTrack[];
