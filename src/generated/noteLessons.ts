import type { NoteTrack } from '../data/noteLessonTypes';

export const noteTracks: NoteTrack[] = [
  {
    "id": "notes-architecture",
    "label": "아키텍처",
    "folderName": "architecture",
    "lessons": [
      {
        "id": "knowledge-notes-architecture-boundary-map",
        "title": "연동 경계 한눈에 (BFF·Gateway·조회)",
        "fileName": "architecture-boundary-map.yaml",
        "sourcePath": "assets/raw/knowledge/notes/architecture-boundary-map.yaml",
        "parts": [
          {
            "id": "knowledge-notes-architecture-boundary-map__한-줄-지도",
            "title": "한 줄 지도",
            "blocks": [
              {
                "type": "prose",
                "text": "화면 명세가 갈라지면 **BFF**, 횡단(인증·라우팅·제한)은 **API Gateway**,\n한 백엔드 안에서 연관을 묶으면 **Nested Query**,\n팀·스키마가 갈라진 그래프를 합치면 **Schema Federation**."
              }
            ],
            "relatedLinks": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__클라이언트-워터폴을-서버에서-묶기",
                "title": "판단: 클라이언트 워터폴을 서버에서 묶기"
              },
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__bff와-api-gateway-중-어디를-둘까",
                "title": "판단: BFF와 API Gateway 중 어디를 둘까"
              },
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__schema-federation이-필요한가",
                "title": "판단: Schema Federation이 필요한가"
              },
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__개요",
                "title": "아키텍처 판단 시나리오 (고빈도만)"
              },
              {
                "kind": "lexicon",
                "trackId": "terms-architecture",
                "lessonId": "knowledge-terms-architecture",
                "partId": "arch-bff",
                "title": "BFF"
              },
              {
                "kind": "lexicon",
                "trackId": "terms-architecture",
                "lessonId": "knowledge-terms-architecture",
                "partId": "arch-api-gateway",
                "title": "API 게이트웨이"
              },
              {
                "kind": "lexicon",
                "trackId": "terms-architecture",
                "lessonId": "knowledge-terms-architecture",
                "partId": "arch-nested-query",
                "title": "중첩 쿼리"
              },
              {
                "kind": "lexicon",
                "trackId": "terms-architecture",
                "lessonId": "knowledge-terms-architecture",
                "partId": "arch-schema-federation",
                "title": "스키마 페더레이션"
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-boundary-map__비교표",
            "title": "비교표",
            "blocks": [
              {
                "type": "table",
                "headers": [
                  "패턴",
                  "한 줄",
                  "주로 두는 곳",
                  "화면 상세설계와"
                ],
                "rows": [
                  [
                    "BFF",
                    "클라이언트별 응답 조립",
                    "웹/앱 전용 백엔드",
                    "화면 DTO·섹션 단위로 맞춤"
                  ],
                  [
                    "API Gateway",
                    "공통 진입·횡단 관심사",
                    "서비스들 앞단",
                    "조립보다 라우팅·인증·제한"
                  ],
                  [
                    "Nested Query",
                    "한 질의로 연관 데이터",
                    "단일 API/DB 경계 안",
                    "OpenAPI 한 엔드포인트·중첩 필드"
                  ],
                  [
                    "Schema Federation",
                    "분산 스키마 → 연합 그래프",
                    "GraphQL 게이트웨이",
                    "섹션 소유 팀과 스키마가 갈라질 때"
                  ]
                ]
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-boundary-map__고를-때-질문",
            "title": "고를 때 질문",
            "blocks": [
              {
                "type": "prose",
                "text": "1. 웹·앱 **화면 명세**가 다른가? → 다르면 BFF 후보\n2. 하고 싶은 일이 **조립**인가 **통과·보안**인가? → 후자면 Gateway\n3. 데이터가 **한 배포 단위** 안에 있는가? → Nested Query 가능\n4. 스키마·팀이 **이미 갈라져** 한 그래프처럼 치고 싶은가? → Federation (아니면 REST+BFF가 싸움)"
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-boundary-map__같이-보면",
            "title": "같이 보면",
            "blocks": [
              {
                "type": "prose",
                "text": "- 판단 시나리오: `architecture-scenarios.yaml` (워터폴·BFF vs Gateway·Federation)\n- 폴더·계층: `project-structure.yaml`\n- 화면 설계 층: `frontend-design-process.yaml` (Figma·OpenAPI·상태)"
              }
            ]
          }
        ]
      },
      {
        "id": "knowledge-notes-architecture-scenarios",
        "title": "아키텍처 판단 시나리오 (고빈도만)",
        "fileName": "architecture-scenarios.yaml",
        "sourcePath": "assets/raw/knowledge/notes/architecture-scenarios.yaml",
        "parts": [
          {
            "id": "knowledge-notes-architecture-scenarios__개요",
            "title": "개요",
            "blocks": [
              {
                "type": "prose",
                "text": "✅ 화면·업무 증상 → 후보 패턴 비교 → 기본안·whenAvoid\n✅ BFF·Gateway·Nested Query·배포 단위·Headless·Federation\n❌ 자격증 전 범위, Saga 등 시나리오 미작성 패턴\n참고: CQRS·N+1 등은 terms 카드만. 비교 표는 architecture-boundary-map.yaml."
              },
              {
                "type": "prose",
                "text": "정답 암기가 아니다. 후보를 고른 뒤 기본안·탈락 조건과 맞춰 본다."
              }
            ],
            "relatedLinks": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-boundary-map",
                "partId": "knowledge-notes-architecture-boundary-map__한-줄-지도",
                "title": "연동 경계 한눈에 (BFF·Gateway·조회)"
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-scenarios__클라이언트-워터폴을-서버에서-묶기",
            "title": "클라이언트 워터폴을 서버에서 묶기",
            "blocks": [
              {
                "type": "heading",
                "text": "상황"
              },
              {
                "type": "prose",
                "text": "주문 상세 화면 설계서에 헤더(주문번호·상태)·상품 라인·배송지·결제수단이 한 뷰로 잡혀 있다.\nOpenAPI에는 GET /orders/{id}, /order-items, /shipments, /payments 가 각각 있고,\nFigma에는 Loading 스켈레톤 후 영역별 순차 채움으로 그려져 있다."
              },
              {
                "type": "heading",
                "text": "증상"
              },
              {
                "type": "prose",
                "text": "FE가 주문 응답의 id로 나머지를 이어 호출해 요청 워터폴[Request Waterfall]이 길다.\n첫 페인트는 빠르지만 하단 영역 Empty→Loading이 계단처럼 이어진다."
              },
              {
                "type": "heading",
                "text": "후보"
              },
              {
                "type": "table",
                "headers": [
                  "옵션",
                  "이럴 때",
                  "피할 때"
                ],
                "rows": [
                  [
                    "Nested Query",
                    "한 API(또는 한 쿼리)에서 연관 데이터를 깊게 묶어 줄 수 있을 때.",
                    "도메인이 여러 배포 단위로 갈라져 단일 쿼리 경계가 없을 때."
                  ],
                  [
                    "BFF",
                    "웹·앱 화면 단위로 응답 형태를 맞추는 전용 백엔드가 필요할 때.",
                    "모든 클라이언트·서비스에 동일한 공통 API만으로 충분할 때."
                  ],
                  [
                    "클라이언트 병렬 호출 유지",
                    "호출이 독립적이고 워터폴이 아닌 단순 병렬이며, 서버 합칠 이득이 작을 때.",
                    "호출이 서로 의존해 대기 시간이 계단처럼 쌓일 때."
                  ]
                ]
              },
              {
                "type": "heading",
                "text": "기본안"
              },
              {
                "type": "prose",
                "text": "BFF — 화면 전용 DTO로 맞추면 BFF가 기본안. 백엔드가 하나면 Nested Query로 같은 효과를 낼 수 있다."
              },
              {
                "type": "heading",
                "text": "관련 용어"
              },
              {
                "type": "list",
                "items": [
                  "arch-request-waterfall",
                  "arch-nested-query",
                  "arch-bff"
                ]
              }
            ],
            "scenario": {
              "id": "arch-sc-waterfall-bundle",
              "title": "클라이언트 워터폴을 서버에서 묶기",
              "context": "주문 상세 화면 설계서에 헤더(주문번호·상태)·상품 라인·배송지·결제수단이 한 뷰로 잡혀 있다.\nOpenAPI에는 GET /orders/{id}, /order-items, /shipments, /payments 가 각각 있고,\nFigma에는 Loading 스켈레톤 후 영역별 순차 채움으로 그려져 있다.\n",
              "symptom": "FE가 주문 응답의 id로 나머지를 이어 호출해 요청 워터폴[Request Waterfall]이 길다.\n첫 페인트는 빠르지만 하단 영역 Empty→Loading이 계단처럼 이어진다.\n",
              "options": [
                {
                  "id": "nested-query",
                  "label": "Nested Query",
                  "whenPreferred": "한 API(또는 한 쿼리)에서 연관 데이터를 깊게 묶어 줄 수 있을 때.",
                  "whenAvoid": "도메인이 여러 배포 단위로 갈라져 단일 쿼리 경계가 없을 때."
                },
                {
                  "id": "bff",
                  "label": "BFF",
                  "whenPreferred": "웹·앱 화면 단위로 응답 형태를 맞추는 전용 백엔드가 필요할 때.",
                  "whenAvoid": "모든 클라이언트·서비스에 동일한 공통 API만으로 충분할 때."
                },
                {
                  "id": "client-parallel",
                  "label": "클라이언트 병렬 호출 유지",
                  "whenPreferred": "호출이 독립적이고 워터폴이 아닌 단순 병렬이며, 서버 합칠 이득이 작을 때.",
                  "whenAvoid": "호출이 서로 의존해 대기 시간이 계단처럼 쌓일 때."
                }
              ],
              "defaultPick": "bff",
              "rationale": "화면 전용 DTO로 맞추면 BFF가 기본안. 백엔드가 하나면 Nested Query로 같은 효과를 낼 수 있다.",
              "relatedTermIds": [
                "arch-request-waterfall",
                "arch-nested-query",
                "arch-bff"
              ]
            },
            "relatedLinks": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-boundary-map",
                "partId": "knowledge-notes-architecture-boundary-map__한-줄-지도",
                "title": "연동 경계 한눈에 (BFF·Gateway·조회)"
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-scenarios__bff와-api-gateway-중-어디를-둘까",
            "title": "BFF와 API Gateway 중 어디를 둘까",
            "blocks": [
              {
                "type": "heading",
                "text": "상황"
              },
              {
                "type": "prose",
                "text": "웹 상세설계와 앱 상세설계의 필드·섹션이 다르다(웹은 리뷰 탭, 앱은 하단 시트).\nAPI 계약은 서비스별로 열려 있고, 공통으로는 인증·라우팅만 Gateway 초안이 있다."
              },
              {
                "type": "heading",
                "text": "증상"
              },
              {
                "type": "prose",
                "text": "화면별 조합·필드 rename이 FE에 남거나, Gateway에 “화면용 조립”까지 넣자는 의견이 섞인다.\nAPI Contract와 화면 명세가 한곳에서 안 만난다."
              },
              {
                "type": "heading",
                "text": "후보"
              },
              {
                "type": "table",
                "headers": [
                  "옵션",
                  "이럴 때",
                  "피할 때"
                ],
                "rows": [
                  [
                    "BFF",
                    "클라이언트(웹/앱)별로 응답을 모아 형태를 맞출 때.",
                    "인증·라우팅만 공통화하면 되고 화면 조합이 거의 없을 때."
                  ],
                  [
                    "API Gateway",
                    "라우팅·인증·제한 등 횡단 관심사를 한곳에서 처리할 때.",
                    "화면용 데이터 조립까지 Gateway에 넣으려 할 때(책임이 비대해짐)."
                  ],
                  [
                    "Gateway + BFF",
                    "공통 진입은 Gateway, 화면 조립은 클라이언트별 BFF로 나눌 때.",
                    "팀·트래픽 규모가 작아 계층이 운영 부담만 키울 때."
                  ]
                ]
              },
              {
                "type": "heading",
                "text": "기본안"
              },
              {
                "type": "prose",
                "text": "Gateway + BFF — Gateway는 횡단, BFF는 화면 조립. 웹/앱 명세가 갈라지면 둘을 나누는 편이 경계가 맑다."
              },
              {
                "type": "heading",
                "text": "관련 용어"
              },
              {
                "type": "list",
                "items": [
                  "arch-bff",
                  "arch-api-gateway",
                  "arch-microservice"
                ]
              }
            ],
            "scenario": {
              "id": "arch-sc-bff-vs-gateway",
              "title": "BFF와 API Gateway 중 어디를 둘까",
              "context": "웹 상세설계와 앱 상세설계의 필드·섹션이 다르다(웹은 리뷰 탭, 앱은 하단 시트).\nAPI 계약은 서비스별로 열려 있고, 공통으로는 인증·라우팅만 Gateway 초안이 있다.\n",
              "symptom": "화면별 조합·필드 rename이 FE에 남거나, Gateway에 “화면용 조립”까지 넣자는 의견이 섞인다.\nAPI Contract와 화면 명세가 한곳에서 안 만난다.\n",
              "options": [
                {
                  "id": "bff",
                  "label": "BFF",
                  "whenPreferred": "클라이언트(웹/앱)별로 응답을 모아 형태를 맞출 때.",
                  "whenAvoid": "인증·라우팅만 공통화하면 되고 화면 조합이 거의 없을 때."
                },
                {
                  "id": "api-gateway",
                  "label": "API Gateway",
                  "whenPreferred": "라우팅·인증·제한 등 횡단 관심사를 한곳에서 처리할 때.",
                  "whenAvoid": "화면용 데이터 조립까지 Gateway에 넣으려 할 때(책임이 비대해짐)."
                },
                {
                  "id": "both",
                  "label": "Gateway + BFF",
                  "whenPreferred": "공통 진입은 Gateway, 화면 조립은 클라이언트별 BFF로 나눌 때.",
                  "whenAvoid": "팀·트래픽 규모가 작아 계층이 운영 부담만 키울 때."
                }
              ],
              "defaultPick": "both",
              "rationale": "Gateway는 횡단, BFF는 화면 조립. 웹/앱 명세가 갈라지면 둘을 나누는 편이 경계가 맑다.",
              "relatedTermIds": [
                "arch-bff",
                "arch-api-gateway",
                "arch-microservice"
              ]
            },
            "relatedLinks": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-boundary-map",
                "partId": "knowledge-notes-architecture-boundary-map__한-줄-지도",
                "title": "연동 경계 한눈에 (BFF·Gateway·조회)"
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-scenarios__초기-제품의-배포-단위",
            "title": "초기 제품의 배포 단위",
            "blocks": [
              {
                "type": "heading",
                "text": "상황"
              },
              {
                "type": "prose",
                "text": "신규 프로젝트 폴더 초안에 user·order·payment feature가 있고,\n화면 상세는 출시 MVP 10화면, API는 한 OpenAPI 문서로 관리할 예정이다.\n팀은 소수라 배포 파이프라인은 하나다."
              },
              {
                "type": "heading",
                "text": "증상"
              },
              {
                "type": "prose",
                "text": "“처음부터 서비스로 쪼개자”와 “한 배포로 먼저 내자”가 기본설계에서 충돌한다.\n경계는 그려져 있지만 독립 배포·관측 비용 근거는 아직 없다."
              },
              {
                "type": "heading",
                "text": "후보"
              },
              {
                "type": "table",
                "headers": [
                  "옵션",
                  "이럴 때",
                  "피할 때"
                ],
                "rows": [
                  [
                    "Monolith",
                    "출시 속도·운영 단순이 최우선이고 경계가 아직 흔들릴 때.",
                    "팀·배포 주기가 이미 충돌하고 독립 스케일이 필요할 때."
                  ],
                  [
                    "Modular monolith",
                    "배포는 하나로 두되 모듈 경계를 강하게 나눠 나중에 분리할 여지를 남길 때.",
                    "모듈 간 DB·트랜잭션을 마구 공유해 경계가 명목만 남을 때."
                  ],
                  [
                    "Microservice",
                    "독립 배포·스케일·팀 소유가 명확하고 운영 역량이 뒷받침될 때.",
                    "초기 제품에서 네트워크·관측·배포 비용이 기능보다 클 때."
                  ]
                ]
              },
              {
                "type": "heading",
                "text": "기본안"
              },
              {
                "type": "prose",
                "text": "Modular monolith — MVP·단일 OpenAPI 단계에서는 Modular monolith로 경계를 연습하고, 증거가 쌓이면 뺀다."
              },
              {
                "type": "heading",
                "text": "관련 용어"
              },
              {
                "type": "list",
                "items": [
                  "arch-monolith",
                  "arch-modular-monolith",
                  "arch-microservice",
                  "arch-feature-based"
                ]
              }
            ],
            "scenario": {
              "id": "arch-sc-deploy-unit",
              "title": "초기 제품의 배포 단위",
              "context": "신규 프로젝트 폴더 초안에 user·order·payment feature가 있고,\n화면 상세는 출시 MVP 10화면, API는 한 OpenAPI 문서로 관리할 예정이다.\n팀은 소수라 배포 파이프라인은 하나다.\n",
              "symptom": "“처음부터 서비스로 쪼개자”와 “한 배포로 먼저 내자”가 기본설계에서 충돌한다.\n경계는 그려져 있지만 독립 배포·관측 비용 근거는 아직 없다.\n",
              "options": [
                {
                  "id": "monolith",
                  "label": "Monolith",
                  "whenPreferred": "출시 속도·운영 단순이 최우선이고 경계가 아직 흔들릴 때.",
                  "whenAvoid": "팀·배포 주기가 이미 충돌하고 독립 스케일이 필요할 때."
                },
                {
                  "id": "modular-monolith",
                  "label": "Modular monolith",
                  "whenPreferred": "배포는 하나로 두되 모듈 경계를 강하게 나눠 나중에 분리할 여지를 남길 때.",
                  "whenAvoid": "모듈 간 DB·트랜잭션을 마구 공유해 경계가 명목만 남을 때."
                },
                {
                  "id": "microservice",
                  "label": "Microservice",
                  "whenPreferred": "독립 배포·스케일·팀 소유가 명확하고 운영 역량이 뒷받침될 때.",
                  "whenAvoid": "초기 제품에서 네트워크·관측·배포 비용이 기능보다 클 때."
                }
              ],
              "defaultPick": "modular-monolith",
              "rationale": "MVP·단일 OpenAPI 단계에서는 Modular monolith로 경계를 연습하고, 증거가 쌓이면 뺀다.",
              "relatedTermIds": [
                "arch-monolith",
                "arch-modular-monolith",
                "arch-microservice",
                "arch-feature-based"
              ]
            },
            "relatedLinks": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-boundary-map",
                "partId": "knowledge-notes-architecture-boundary-map__한-줄-지도",
                "title": "연동 경계 한눈에 (BFF·Gateway·조회)"
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-scenarios__콘텐츠를-headless로-둘까",
            "title": "콘텐츠를 Headless로 둘까",
            "blocks": [
              {
                "type": "heading",
                "text": "상황"
              },
              {
                "type": "prose",
                "text": "마케팅 랜딩(Figma)·앱 홈·키오스크가 같은 배너·상품 문구를 쓴다.\n채널별 UI 컴포넌트·디자인 토큰은 팀마다 다르고, CMS 초안은 페이지 템플릿형이다."
              },
              {
                "type": "heading",
                "text": "증상"
              },
              {
                "type": "prose",
                "text": "CMS에 화면 레이아웃까지 묶이면 앱·키오스크는 콘텐츠만 빼 쓰기 어렵다.\n“Headless UI 라이브러리”와 “Headless CMS” 말이 회의에서 섞인다."
              },
              {
                "type": "heading",
                "text": "후보"
              },
              {
                "type": "table",
                "headers": [
                  "옵션",
                  "이럴 때",
                  "피할 때"
                ],
                "rows": [
                  [
                    "Headless",
                    "콘텐츠 API만 공유하고 각 클라이언트가 UI를 가질 때.",
                    "단일 웹사이트만 있고 CMS 테마로 충분한 때."
                  ],
                  [
                    "결합형 CMS",
                    "한 사이트·한 템플릿으로 빠르게 운영할 때.",
                    "앱·다중 채널이 같은 콘텐츠를 각자 렌더해야 할 때."
                  ],
                  [
                    "Headless UI (컴포넌트)",
                    "동작·접근성만 라이브러리에 맡기고 스타일은 디자인 시스템으로 칠할 때.",
                    "CMS/콘텐츠 아키텍처 선택과 혼동할 때(다른 층의 문제)."
                  ]
                ]
              },
              {
                "type": "heading",
                "text": "기본안"
              },
              {
                "type": "prose",
                "text": "Headless — 다중 채널·다중 Figma면 Headless CMS가 기본안. Headless UI는 컴포넌트 층이라 별개다."
              },
              {
                "type": "heading",
                "text": "관련 용어"
              },
              {
                "type": "list",
                "items": [
                  "arch-headless",
                  "dev-extra-headless-ui"
                ]
              }
            ],
            "scenario": {
              "id": "arch-sc-headless",
              "title": "콘텐츠를 Headless로 둘까",
              "context": "마케팅 랜딩(Figma)·앱 홈·키오스크가 같은 배너·상품 문구를 쓴다.\n채널별 UI 컴포넌트·디자인 토큰은 팀마다 다르고, CMS 초안은 페이지 템플릿형이다.\n",
              "symptom": "CMS에 화면 레이아웃까지 묶이면 앱·키오스크는 콘텐츠만 빼 쓰기 어렵다.\n“Headless UI 라이브러리”와 “Headless CMS” 말이 회의에서 섞인다.\n",
              "options": [
                {
                  "id": "headless",
                  "label": "Headless",
                  "whenPreferred": "콘텐츠 API만 공유하고 각 클라이언트가 UI를 가질 때.",
                  "whenAvoid": "단일 웹사이트만 있고 CMS 테마로 충분한 때."
                },
                {
                  "id": "coupled-cms",
                  "label": "결합형 CMS",
                  "whenPreferred": "한 사이트·한 템플릿으로 빠르게 운영할 때.",
                  "whenAvoid": "앱·다중 채널이 같은 콘텐츠를 각자 렌더해야 할 때."
                },
                {
                  "id": "headless-ui-lib",
                  "label": "Headless UI (컴포넌트)",
                  "whenPreferred": "동작·접근성만 라이브러리에 맡기고 스타일은 디자인 시스템으로 칠할 때.",
                  "whenAvoid": "CMS/콘텐츠 아키텍처 선택과 혼동할 때(다른 층의 문제)."
                }
              ],
              "defaultPick": "headless",
              "rationale": "다중 채널·다중 Figma면 Headless CMS가 기본안. Headless UI는 컴포넌트 층이라 별개다.",
              "relatedTermIds": [
                "arch-headless",
                "dev-extra-headless-ui"
              ]
            },
            "relatedLinks": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-boundary-map",
                "partId": "knowledge-notes-architecture-boundary-map__한-줄-지도",
                "title": "연동 경계 한눈에 (BFF·Gateway·조회)"
              }
            ]
          },
          {
            "id": "knowledge-notes-architecture-scenarios__schema-federation이-필요한가",
            "title": "Schema Federation이 필요한가",
            "blocks": [
              {
                "type": "heading",
                "text": "상황"
              },
              {
                "type": "prose",
                "text": "상품 상세 화면에 상품·재고·리뷰 섹션이 있고, 팀별로 GraphQL 스키마 초안이 생겼다.\nFE는 “한 번의 중첩 쿼리로 화면을 채우고 싶다”고 하고, BFF REST 조립안도 테이블에 있다."
              },
              {
                "type": "heading",
                "text": "증상"
              },
              {
                "type": "prose",
                "text": "클라이언트가 여러 그래프 결과를 이어 붙이거나, BFF에 조합이 몰린다.\n스키마 소유권·배포 단위는 갈라져 있는데 화면 명세는 하나다."
              },
              {
                "type": "heading",
                "text": "후보"
              },
              {
                "type": "table",
                "headers": [
                  "옵션",
                  "이럴 때",
                  "피할 때"
                ],
                "rows": [
                  [
                    "Schema Federation",
                    "서비스별 스키마 소유를 유지하면서 게이트웨이 연합 그래프로 중첩 조회할 때.",
                    "스키마·팀이 하나이거나 GraphQL 자체가 과한 규모일 때."
                  ],
                  [
                    "단일 GraphQL 스키마",
                    "한 팀·한 배포가 그래프 전체를 소유할 수 있을 때.",
                    "서비스 경계·팀 소유가 이미 갈라져 스키마 충돌이 잦을 때."
                  ],
                  [
                    "REST + BFF",
                    "GraphQL 없이도 화면 조립만으로 충분한 때.",
                    "클라이언트가 필드 단위로 그래프를 깊게 골라야 할 때."
                  ]
                ]
              },
              {
                "type": "heading",
                "text": "기본안"
              },
              {
                "type": "prose",
                "text": "REST + BFF — 화면 조립이 목표면 REST+BFF가 싸다. Federation은 스키마·팀 분산이 이미 명확할 때."
              },
              {
                "type": "heading",
                "text": "관련 용어"
              },
              {
                "type": "list",
                "items": [
                  "arch-schema-federation",
                  "arch-graphql",
                  "arch-nested-resolver",
                  "arch-bff"
                ]
              }
            ],
            "scenario": {
              "id": "arch-sc-federation",
              "title": "Schema Federation이 필요한가",
              "context": "상품 상세 화면에 상품·재고·리뷰 섹션이 있고, 팀별로 GraphQL 스키마 초안이 생겼다.\nFE는 “한 번의 중첩 쿼리로 화면을 채우고 싶다”고 하고, BFF REST 조립안도 테이블에 있다.\n",
              "symptom": "클라이언트가 여러 그래프 결과를 이어 붙이거나, BFF에 조합이 몰린다.\n스키마 소유권·배포 단위는 갈라져 있는데 화면 명세는 하나다.\n",
              "options": [
                {
                  "id": "federation",
                  "label": "Schema Federation",
                  "whenPreferred": "서비스별 스키마 소유를 유지하면서 게이트웨이 연합 그래프로 중첩 조회할 때.",
                  "whenAvoid": "스키마·팀이 하나이거나 GraphQL 자체가 과한 규모일 때."
                },
                {
                  "id": "single-graph",
                  "label": "단일 GraphQL 스키마",
                  "whenPreferred": "한 팀·한 배포가 그래프 전체를 소유할 수 있을 때.",
                  "whenAvoid": "서비스 경계·팀 소유가 이미 갈라져 스키마 충돌이 잦을 때."
                },
                {
                  "id": "rest-bff",
                  "label": "REST + BFF",
                  "whenPreferred": "GraphQL 없이도 화면 조립만으로 충분한 때.",
                  "whenAvoid": "클라이언트가 필드 단위로 그래프를 깊게 골라야 할 때."
                }
              ],
              "defaultPick": "rest-bff",
              "rationale": "화면 조립이 목표면 REST+BFF가 싸다. Federation은 스키마·팀 분산이 이미 명확할 때.",
              "relatedTermIds": [
                "arch-schema-federation",
                "arch-graphql",
                "arch-nested-resolver",
                "arch-bff"
              ]
            },
            "relatedLinks": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-boundary-map",
                "partId": "knowledge-notes-architecture-boundary-map__한-줄-지도",
                "title": "연동 경계 한눈에 (BFF·Gateway·조회)"
              }
            ]
          }
        ]
      },
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
