import type { LexiconTrack } from '../data/lexiconLessonTypes';

export const lexiconTracks: LexiconTrack[] = [
  {
    "id": "terms-architecture",
    "label": "아키텍처",
    "folderName": "architecture",
    "lessons": [
      {
        "id": "knowledge-terms-architecture",
        "title": "아키텍처·구조 용어",
        "fileName": "architecture-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/architecture-terms.yaml",
        "parts": [
          {
            "id": "arch-layered",
            "title": "계층형 아키텍처",
            "section": "구조",
            "prompt": "요청 처리·비즈니스·데이터 접근처럼 역할을 층으로 나누는 구조.",
            "answer": "Layered architecture",
            "displayAnswer": "Layered architecture",
            "aliases": [],
            "example": "예: 계층형 아키텍처[Layered architecture]에서 Controller는 Service만 호출한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-feature-based",
            "title": "기능 단위 구조",
            "section": "구조",
            "prompt": "user·order처럼 도메인(기능)별로 폴더를 묶어 관련 코드를 한곳에 두는 방식.",
            "answer": "Feature-based structure",
            "displayAnswer": "Feature-based structure",
            "aliases": [],
            "example": "예: 기능 단위 구조[Feature-based structure]면 payment 관련 파일이 한 폴더에 모인다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__초기-제품의-배포-단위",
                "title": "초기 제품의 배포 단위"
              }
            ]
          },
          {
            "id": "arch-monolith",
            "title": "모놀리스",
            "section": "구조",
            "prompt": "한 배포 단위에 UI·API·비즈니스·DB 접근이 함께 묶인 단일 애플리케이션.",
            "answer": "Monolith",
            "displayAnswer": "Monolith",
            "aliases": [
              "Monolithic architecture"
            ],
            "example": "예: 초기는 모놀리스[Monolith]로 빠르게 만들고, 필요하면 서비스를 나눈다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__초기-제품의-배포-단위",
                "title": "초기 제품의 배포 단위"
              }
            ]
          },
          {
            "id": "arch-modular-monolith",
            "title": "모듈러 모놀리스",
            "section": "구조",
            "prompt": "배포는 하나지만 도메인 모듈 경계를 강하게 나눠 나중에 분리하기 쉽게 만든 구조.",
            "answer": "Modular monolith",
            "displayAnswer": "Modular monolith",
            "aliases": [],
            "example": "예: 모듈러 모놀리스[Modular monolith]는 모듈 간 직접 DB 공유를 피한다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__초기-제품의-배포-단위",
                "title": "초기 제품의 배포 단위"
              }
            ]
          },
          {
            "id": "arch-microservice",
            "title": "마이크로서비스",
            "section": "구조",
            "prompt": "기능을 독립 배포 가능한 작은 서비스로 나누고 API·메시지로 연동하는 구조.",
            "answer": "Microservice",
            "displayAnswer": "Microservice",
            "aliases": [
              "Microservices",
              "MSA"
            ],
            "example": "예: 결제만 따로 배포하려면 마이크로서비스[Microservice]로 분리한다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__bff와-api-gateway-중-어디를-둘까",
                "title": "BFF와 API Gateway 중 어디를 둘까"
              },
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__초기-제품의-배포-단위",
                "title": "초기 제품의 배포 단위"
              }
            ]
          },
          {
            "id": "arch-serverless",
            "title": "서버리스",
            "section": "구조",
            "prompt": "서버를 직접 운영하지 않고, 함수·관리형 서비스가 요청·이벤트에 따라 실행되는 방식.",
            "answer": "Serverless",
            "displayAnswer": "Serverless",
            "aliases": [],
            "example": "예: 야간 배치를 서버리스[Serverless] 함수로 두면 유휴 서버 비용이 없다.",
            "relatedDrills": []
          },
          {
            "id": "arch-headless",
            "title": "헤드리스",
            "section": "구조",
            "prompt": "화면(프레젠테이션) 없이 API만 제공하는 백엔드·CMS. 프론트는 별도 클라이언트가 담당한다.",
            "answer": "Headless",
            "displayAnswer": "Headless",
            "aliases": [
              "Headless architecture",
              "Headless CMS"
            ],
            "example": "예: 헤드리스[Headless] CMS면 웹·앱이 같은 콘텐츠 API를 공유한다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__콘텐츠를-headless로-둘까",
                "title": "콘텐츠를 Headless로 둘까"
              }
            ]
          },
          {
            "id": "arch-bff",
            "title": "BFF",
            "section": "연동·경계",
            "prompt": "웹·앱처럼 특정 클라이언트에 맞춰 API를 모아 주고 응답 형태를 맞추는 전용 백엔드.",
            "answer": "BFF",
            "displayAnswer": "BFF",
            "aliases": [
              "Backend For Frontend"
            ],
            "example": "예: 모바일 화면용 필드를 한 번에 받으려면 BFF[Backend For Frontend]에서 조합한다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__클라이언트-워터폴을-서버에서-묶기",
                "title": "클라이언트 워터폴을 서버에서 묶기"
              },
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__bff와-api-gateway-중-어디를-둘까",
                "title": "BFF와 API Gateway 중 어디를 둘까"
              },
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__schema-federation이-필요한가",
                "title": "Schema Federation이 필요한가"
              }
            ]
          },
          {
            "id": "arch-api-gateway",
            "title": "API 게이트웨이",
            "section": "연동·경계",
            "prompt": "여러 서비스 앞단의 공통 진입점. 라우팅·인증·제한 등을 한곳에서 처리한다.",
            "answer": "API Gateway",
            "displayAnswer": "API Gateway",
            "aliases": [],
            "example": "예: API 게이트웨이[API Gateway]가 `/users`는 user 서비스로 넘긴다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__bff와-api-gateway-중-어디를-둘까",
                "title": "BFF와 API Gateway 중 어디를 둘까"
              }
            ]
          },
          {
            "id": "arch-reverse-proxy",
            "title": "리버스 프록시",
            "section": "연동·경계",
            "prompt": "클라이언트 요청을 받아 뒤쪽 앱·정적 서버로 대신 전달하는 중계 서버.",
            "answer": "Reverse proxy",
            "displayAnswer": "Reverse proxy",
            "aliases": [],
            "example": "예: nginx 리버스 프록시[Reverse proxy]로 `/api`는 백엔드, 나머지는 SPA로 보낸다.",
            "relatedDrills": []
          },
          {
            "id": "arch-middleware",
            "title": "미들웨어",
            "section": "연동·경계",
            "prompt": "요청·응답 파이프라인에서 인증·로깅처럼 공통 처리를 끼워 넣는 계층.",
            "answer": "Middleware",
            "displayAnswer": "Middleware",
            "aliases": [],
            "example": "예: 인증 미들웨어[Middleware]를 컨트롤러보다 먼저 실행한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-controller",
            "title": "컨트롤러",
            "section": "백엔드 계층",
            "prompt": "HTTP 요청을 받아 응답하는 진입점. 비즈니스 로직은 두지 않는다.",
            "answer": "Controller",
            "displayAnswer": "Controller",
            "aliases": [],
            "example": "예: 컨트롤러[Controller]는 입력 검증 후 Service를 호출한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-service",
            "title": "서비스",
            "section": "백엔드 계층",
            "prompt": "비즈니스 규칙과 흐름을 담당하는 계층.",
            "answer": "Service",
            "displayAnswer": "Service",
            "aliases": [],
            "example": "예: 주문 취소 규칙은 서비스[Service]에 둔다.",
            "relatedDrills": []
          },
          {
            "id": "arch-repository",
            "title": "리포지토리",
            "section": "백엔드 계층",
            "prompt": "DB 조회·저장을 추상화하는 데이터 접근 계층.",
            "answer": "Repository",
            "displayAnswer": "Repository",
            "aliases": [],
            "example": "예: 리포지토리[Repository]에서만 SQL·ORM 호출을 한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-dto",
            "title": "전송 객체",
            "section": "백엔드 계층",
            "prompt": "API·계층 간에 데이터를 전달하기 위한 전송용 객체. Entity와 분리한다.",
            "answer": "DTO",
            "displayAnswer": "DTO",
            "aliases": [],
            "example": "예: 로그인 요청 바디는 전송 객체[DTO]로 받고 Entity를 그대로 노출하지 않는다.",
            "relatedDrills": []
          },
          {
            "id": "arch-entity",
            "title": "엔티티",
            "section": "백엔드 계층",
            "prompt": "DB 테이블에 대응하는 영속·도메인 모델.",
            "answer": "Entity",
            "displayAnswer": "Entity",
            "aliases": [],
            "example": "예: User 엔티티[Entity]는 users 테이블과 매핑된다.",
            "relatedDrills": []
          },
          {
            "id": "arch-mapper",
            "title": "매퍼",
            "section": "백엔드 계층",
            "prompt": "Entity와 DTO처럼 서로 다른 모델 사이를 변환하는 계층·유틸.",
            "answer": "Mapper",
            "displayAnswer": "Mapper",
            "aliases": [],
            "example": "예: 매퍼[Mapper]로 UserEntity를 UserResponse DTO로 바꾼다.",
            "relatedDrills": []
          },
          {
            "id": "arch-mvc",
            "title": "MVC",
            "section": "표현 패턴",
            "prompt": "Model·View·Controller로 데이터·화면·입력을 나누는 고전 구조.",
            "answer": "MVC",
            "displayAnswer": "MVC",
            "aliases": [
              "Model-View-Controller"
            ],
            "example": "예: MVC[Model-View-Controller]에서 Controller는 View에 넣을 데이터를 준비한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-hexagonal",
            "title": "헥사고날 아키텍처",
            "section": "표현 패턴",
            "prompt": "핵심 도메인을 가운데 두고, 외부 I/O는 포트·어댑터로 연결하는 구조.",
            "answer": "Hexagonal architecture",
            "displayAnswer": "Hexagonal architecture",
            "aliases": [
              "Ports and Adapters"
            ],
            "example": "예: 헥사고날 아키텍처[Hexagonal architecture]면 DB를 바꿔도 도메인 코드는 그대로다.",
            "relatedDrills": []
          },
          {
            "id": "arch-event-driven",
            "title": "이벤트 기반 아키텍처",
            "section": "표현 패턴",
            "prompt": "서비스가 직접 호출하기보다 이벤트 발행·구독으로 느슨하게 연동하는 방식.",
            "answer": "Event-driven architecture",
            "displayAnswer": "Event-driven architecture",
            "aliases": [
              "EDA"
            ],
            "example": "예: 주문 완료 후 메일 발송은 이벤트 기반 아키텍처[Event-driven architecture]로 분리한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-graphql",
            "title": "GraphQL",
            "section": "GraphQL·조회",
            "prompt": "클라이언트가 필요한 필드를 쿼리로 골라, 한 요청에 맞춰 받는 API 쿼리 언어·런타임.",
            "answer": "GraphQL",
            "displayAnswer": "GraphQL",
            "aliases": [],
            "example": "예: REST 여러 번 대신 GraphQL[GraphQL] 한 번으로 화면 데이터를 받는다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__schema-federation이-필요한가",
                "title": "Schema Federation이 필요한가"
              }
            ]
          },
          {
            "id": "arch-request-waterfall",
            "title": "요청 워터폴",
            "section": "조회·연동",
            "prompt": "앞 응답에 의존한 다음 요청이 이어져, 대기 시간이 계단처럼 쌓이는 현상.",
            "answer": "Request Waterfall",
            "displayAnswer": "Request Waterfall",
            "aliases": [
              "Waterfall"
            ],
            "example": "예: user 후 posts를 또 부르면 요청 워터폴[Request Waterfall]이 생긴다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__클라이언트-워터폴을-서버에서-묶기",
                "title": "클라이언트 워터폴을 서버에서 묶기"
              }
            ]
          },
          {
            "id": "arch-nested-query",
            "title": "중첩 쿼리",
            "section": "조회·연동",
            "prompt": "연관 데이터를 한 질의 안에서 깊게 이어 조회해, 연쇄 호출 없이 한 번에 묶어 받는 쿼리.",
            "answer": "Nested Query",
            "displayAnswer": "Nested Query",
            "aliases": [
              "Nested Queries",
              "Relational Query"
            ],
            "example": "예: 중첩 쿼리[Nested Query]로 주문과 주문상품·배송지를 한 번에 조회한다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__클라이언트-워터폴을-서버에서-묶기",
                "title": "클라이언트 워터폴을 서버에서 묶기"
              }
            ]
          },
          {
            "id": "arch-schema-federation",
            "title": "스키마 페더레이션",
            "section": "GraphQL·조회",
            "prompt": "서비스별 스키마는 독립 유지하되, 게이트웨이가 하나의 연합 스키마로 묶어 체이닝 조회를 가능하게 하는 구조.",
            "answer": "Schema Federation",
            "displayAnswer": "Schema Federation",
            "aliases": [
              "Federation",
              "Apollo Federation"
            ],
            "example": "예: 스키마 페더레이션[Schema Federation]으로 user·order 서비스를 한 그래프에 묶는다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__schema-federation이-필요한가",
                "title": "Schema Federation이 필요한가"
              }
            ]
          },
          {
            "id": "arch-resolver",
            "title": "리졸버",
            "section": "GraphQL·조회",
            "prompt": "스키마 필드 값을 실제로 조회·계산해 채우는 백엔드 함수.",
            "answer": "Resolver",
            "displayAnswer": "Resolver",
            "aliases": [],
            "example": "예: User.email 리졸버[Resolver]가 DB에서 이메일을 읽는다.",
            "relatedDrills": []
          },
          {
            "id": "arch-nested-resolver",
            "title": "중첩 리졸버",
            "section": "GraphQL·조회",
            "prompt": "부모 결과를 이어받아 하위 필드의 연관 데이터를 조회·조합하는 리졸버.",
            "answer": "Nested Resolver",
            "displayAnswer": "Nested Resolver",
            "aliases": [
              "Field Resolver"
            ],
            "example": "예: Post.author 중첩 리졸버[Nested Resolver]가 user 서비스에 이어서 조회한다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__schema-federation이-필요한가",
                "title": "Schema Federation이 필요한가"
              }
            ]
          },
          {
            "id": "arch-bounded-context",
            "title": "바운디드 컨텍스트",
            "section": "도메인·경계",
            "prompt": "같은 용어라도 의미가 통하는 범위로 도메인 모델을 나누는 경계. 서비스·모듈 분할의 기준이 된다.",
            "answer": "Bounded Context",
            "displayAnswer": "Bounded Context",
            "aliases": [],
            "example": "예: 주문과 재고의 '상품' 의미가 다르면 바운디드 컨텍스트[Bounded Context]를 나눈다.",
            "relatedDrills": []
          },
          {
            "id": "arch-strangler-fig",
            "title": "교살무화과 패턴",
            "section": "도메인·경계",
            "prompt": "레거시를 한 번에 교체하지 않고, 새 시스템으로 기능을 조금씩 가로채며 갈아타는 마이그레이션 방식.",
            "answer": "Strangler Fig",
            "displayAnswer": "Strangler Fig",
            "aliases": [
              "Strangler Fig Pattern",
              "Strangler Pattern"
            ],
            "example": "예: 결제만 새 서비스로 빼며 교살무화과 패턴[Strangler Fig]으로 이관한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-n-plus-one",
            "title": "N+1 문제",
            "section": "데이터·일관성",
            "prompt": "목록 1번 조회 뒤 각 행마다 연관 조회가 나가, 호출이 1+N번으로 폭증하는 성능 문제.",
            "answer": "N+1 Problem",
            "displayAnswer": "N+1 Problem",
            "aliases": [
              "N+1"
            ],
            "example": "예: 게시글 목록 후 작성자를 행마다 부르면 N+1 문제[N+1 Problem]다.",
            "relatedDrills": []
          },
          {
            "id": "arch-eventual-consistency",
            "title": "최종 일관성",
            "section": "데이터·일관성",
            "prompt": "당장 모든 복제본이 같지 않아도, 시간이 지나면 같은 상태가 되는 일관성 모델.",
            "answer": "Eventual Consistency",
            "displayAnswer": "Eventual Consistency",
            "aliases": [],
            "example": "예: 주문 후 재고 반영이 약간 늦어도 최종 일관성[Eventual Consistency]이면 허용한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-cqrs",
            "title": "CQRS",
            "section": "데이터·일관성",
            "prompt": "명령을 쓰는 모델과 조회를 읽는 모델을 분리해, 쓰기·읽기 각각에 맞게 최적화하는 패턴.",
            "answer": "CQRS",
            "displayAnswer": "CQRS",
            "aliases": [
              "Command Query Responsibility Segregation"
            ],
            "example": "예: 복잡한 대시보드 조회는 CQRS[CQRS]로 읽기 모델을 따로 둔다.",
            "relatedDrills": []
          },
          {
            "id": "arch-caching",
            "title": "캐싱",
            "section": "데이터·일관성",
            "prompt": "자주 쓰는 데이터를 빠른 저장소에 잠시 두어 원본 조회를 줄이는 기법.",
            "answer": "Caching",
            "displayAnswer": "Caching",
            "aliases": [
              "Cache"
            ],
            "example": "예: 상품 상세는 캐싱[Caching]으로 DB 부하를 줄인다.",
            "relatedDrills": []
          },
          {
            "id": "arch-message-queue",
            "title": "메시지 큐",
            "section": "연동·신뢰성",
            "prompt": "생산자가 메시지를 넣고 소비자가 나중에 꺼내 처리하는 비동기 전달 버퍼.",
            "answer": "Message Queue",
            "displayAnswer": "Message Queue",
            "aliases": [
              "MQ"
            ],
            "example": "예: 메일 발송은 메시지 큐[Message Queue]에 넣고 API는 바로 응답한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-circuit-breaker",
            "title": "서킷 브레이커",
            "section": "연동·신뢰성",
            "prompt": "장애 난 의존 호출을 잠시 끊어, 연쇄 실패와 대기 폭주를 막는 패턴.",
            "answer": "Circuit Breaker",
            "displayAnswer": "Circuit Breaker",
            "aliases": [],
            "example": "예: 결제 연동이 죽으면 서킷 브레이커[Circuit Breaker]로 빠르게 실패한다.",
            "relatedDrills": []
          },
          {
            "id": "arch-webhook",
            "title": "웹훅",
            "section": "연동·신뢰성",
            "prompt": "사건이 나면 상대 시스템이 등록해 둔 URL로 HTTP 콜백을 보내는 연동 방식.",
            "answer": "Webhook",
            "displayAnswer": "Webhook",
            "aliases": [],
            "example": "예: 결제 완료 시 웹훅[Webhook]으로 주문 서비스에 알린다.",
            "relatedDrills": []
          },
          {
            "id": "arch-rate-limiting",
            "title": "레이트 리미팅",
            "section": "연동·신뢰성",
            "prompt": "단위 시간당 요청 수를 제한해 남용·과부하로부터 API를 지키는 기법.",
            "answer": "Rate Limiting",
            "displayAnswer": "Rate Limiting",
            "aliases": [
              "Rate Limit"
            ],
            "example": "예: 로그인 API에 레이트 리미팅[Rate Limiting]을 건다.",
            "relatedDrills": []
          },
          {
            "id": "arch-async-communication",
            "title": "비동기 통신",
            "section": "연동·신뢰성",
            "prompt": "호출자가 즉시 응답을 기다리지 않고, 큐·이벤트 등으로 나중에 결과를 이어받는 통신.",
            "answer": "Asynchronous communication",
            "displayAnswer": "Asynchronous communication",
            "aliases": [
              "Async",
              "Asynchronous"
            ],
            "example": "예: 정산은 비동기 통신[Asynchronous communication]으로 배치에 맡긴다.",
            "relatedDrills": []
          },
          {
            "id": "arch-observability",
            "title": "관측 가능성",
            "section": "관측·배포",
            "prompt": "로그·메트릭·트레이스로 시스템 상태를 밖에서 파악할 수 있게 하는 능력.",
            "answer": "Observability",
            "displayAnswer": "Observability",
            "aliases": [],
            "example": "예: 지연 원인을 보려면 관측 가능성[Observability]으로 트레이스를 본다.",
            "relatedDrills": []
          },
          {
            "id": "arch-canary-deployment",
            "title": "카나리 배포",
            "section": "관측·배포",
            "prompt": "새 버전을 일부 트래픽에만 먼저 보내 위험을 줄인 뒤 전체를 전환하는 배포 방식.",
            "answer": "Canary Deployment",
            "displayAnswer": "Canary Deployment",
            "aliases": [
              "Canary Release"
            ],
            "example": "예: 결제 변경은 카나리 배포[Canary Deployment]로 1%만 먼저 본다.",
            "relatedDrills": []
          },
          {
            "id": "arch-feature-flag",
            "title": "피처 플래그",
            "section": "관측·배포",
            "prompt": "코드 배포와 기능 노출을 분리해, 설정으로 기능을 켜고 끄는 스위치.",
            "answer": "Feature Flag",
            "displayAnswer": "Feature Flag",
            "aliases": [
              "Feature Toggle"
            ],
            "example": "예: 새 결제 UI는 피처 플래그[Feature Flag]로 내부만 켠다.",
            "relatedDrills": []
          }
        ]
      }
    ]
  },
  {
    "id": "terms-dev",
    "label": "개발 용어",
    "folderName": "dev",
    "lessons": [
      {
        "id": "rule-dev-terms-readme-terms-dev",
        "title": "개발 실무 어휘",
        "fileName": "dev-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/dev-terms.yaml",
        "parts": [
          {
            "id": "rule-dev-terms-readme-terms-dev-term-1",
            "title": "스캐폴딩",
            "section": "프로젝트 시작 / 구조",
            "prompt": "프로젝트의 기본 뼈대나 초기 코드 구조를 자동으로 만들어 주는 작업.",
            "answer": "Scaffolding",
            "displayAnswer": "스캐폴딩[Scaffolding / Scaffold]",
            "aliases": [
              "Scaffold"
            ],
            "example": "예: 새 관리자 페이지는 CLI로 scaffold부터 해두자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-2",
            "title": "보일러플레이트",
            "section": "프로젝트 시작 / 구조",
            "prompt": "프로젝트를 시작할 때 반복해서 쓰는 기본 템플릿 코드.",
            "answer": "Boilerplate",
            "displayAnswer": "보일러플레이트[Boilerplate]",
            "aliases": [],
            "example": "예: 인증 로직은 팀 boilerplate를 가져와서 시작했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-3",
            "title": "블루프린트",
            "section": "프로젝트 시작 / 구조",
            "prompt": "설계 단계에서 전체 구조나 구성 방향을 잡아 둔 청사진.",
            "answer": "Blueprint",
            "displayAnswer": "블루프린트[Blueprint]",
            "aliases": [],
            "example": "예: 구현 전에 페이지 흐름 blueprint를 먼저 그렸다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-4",
            "title": "스켈레톤 화면",
            "section": "프로젝트 시작 / 구조",
            "prompt": "실제 콘텐츠 대신 회색 플레이스홀더로 레이아웃 뼈대를 먼저 보여 주는 로딩 UI. 스피너보다 최종 화면 구조를 미리 보여 준다.",
            "answer": "Skeleton",
            "displayAnswer": "스켈레톤 화면[Skeleton / Loading Skeleton]",
            "aliases": [
              "Skeleton Screen",
              "Loading Skeleton"
            ],
            "example": "예: API 응답을 기다리는 동안 loading skeleton으로 카드 자리를 먼저 잡자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-5",
            "title": "스텁",
            "section": "프로젝트 시작 / 구조",
            "prompt": "실제 동작 대신 임시로 넣는 간단한 구현물이나 반환값.",
            "answer": "Stub",
            "displayAnswer": "스텁[Stub]",
            "aliases": [],
            "example": "예: 백엔드가 아직 없어서 지금은 stub만 붙여뒀다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-6",
            "title": "목",
            "section": "프로젝트 시작 / 구조",
            "prompt": "테스트나 개발 중에 진짜 객체 대신 흉내 내는 가짜 객체나 데이터.",
            "answer": "Mock",
            "displayAnswer": "목[Mock]",
            "aliases": [],
            "example": "예: 외부 결제 모듈은 mock으로 대체해서 테스트했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-7",
            "title": "포팅",
            "section": "배포 / 환경 / 인프라",
            "prompt": "한 환경의 프로그램을 다른 환경으로 옮겨 동작하게 만드는 작업.",
            "answer": "Porting",
            "displayAnswer": "포팅[Porting / Port]",
            "aliases": [
              "Port"
            ],
            "example": "예: 이 라이브러리는 ARM 환경으로 porting이 필요하다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-8",
            "title": "배포",
            "section": "배포 / 환경 / 인프라",
            "prompt": "개발한 결과물을 실제 서버나 사용자 환경에 올리는 과정.",
            "answer": "Deployment",
            "displayAnswer": "배포[Deployment / Deploy]",
            "aliases": [
              "Deploy"
            ],
            "example": "예: 오늘 저녁에 운영 서버로 deploy할 예정이다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-9",
            "title": "컨테이너화",
            "section": "배포 / 환경 / 인프라",
            "prompt": "애플리케이션을 컨테이너 기반으로 실행 가능하게 포장하는 작업.",
            "answer": "Containerize",
            "displayAnswer": "컨테이너화[Containerize / Containerization]",
            "aliases": [
              "Containerization"
            ],
            "example": "예: 배포 단순화를 위해 앱을 먼저 containerize했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-10",
            "title": "프로비저닝",
            "section": "배포 / 환경 / 인프라",
            "prompt": "서버, 네트워크, 클라우드 자원을 자동으로 준비하고 설정하는 작업.",
            "answer": "Provisioning",
            "displayAnswer": "프로비저닝[Provisioning]",
            "aliases": [],
            "example": "예: Terraform으로 staging 서버 provisioning을 자동화했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-11",
            "title": "지속적 통합·배포",
            "section": "배포 / 환경 / 인프라",
            "prompt": "코드 통합과 배포를 자동화하는 파이프라인 개념.",
            "answer": "CI",
            "displayAnswer": "지속적 통합·배포[CI/CD]",
            "aliases": [
              "CD"
            ],
            "example": "예: 이 저장소는 CI/CD가 붙어 있어서 머지 후 자동 배포된다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-12",
            "title": "스케일링",
            "section": "배포 / 환경 / 인프라",
            "prompt": "서비스가 늘어나는 트래픽을 감당하도록 확장하는 작업.",
            "answer": "Scaling",
            "displayAnswer": "스케일링[Scaling / Scale Out / Scale Up]",
            "aliases": [
              "Scale Out",
              "Scale Up"
            ],
            "example": "예: 트래픽이 늘면 우선 scale out부터 검토하자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-13",
            "title": "로드 밸런서",
            "section": "배포 / 환경 / 인프라",
            "prompt": "요청을 여러 서버로 분산시키는 구성 요소.",
            "answer": "Load Balancer",
            "displayAnswer": "로드 밸런서[Load Balancer]",
            "aliases": [],
            "example": "예: 앞단에 load balancer를 두고 요청을 분산했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-14",
            "title": "리팩터링",
            "section": "코드 구조 / 설계",
            "prompt": "기능은 유지한 채 코드 구조만 더 좋게 정리하는 작업.",
            "answer": "Refactor",
            "displayAnswer": "리팩터링[Refactor / Refactoring]",
            "aliases": [
              "Refactoring"
            ],
            "example": "예: 이번 PR은 기능 추가보다 refactoring 비중이 더 크다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-15",
            "title": "추상화",
            "section": "코드 구조 / 설계",
            "prompt": "복잡한 내부를 숨기고 필요한 개념만 드러내는 설계 방식.",
            "answer": "Abstraction",
            "displayAnswer": "추상화[Abstraction / Abstract]",
            "aliases": [
              "Abstract"
            ],
            "example": "예: 공통 API 호출부를 abstraction해서 중복을 줄였다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-16",
            "title": "캡슐화",
            "section": "코드 구조 / 설계",
            "prompt": "데이터와 동작을 하나로 묶고 외부 접근을 제한하는 설계 방식.",
            "answer": "Encapsulation",
            "displayAnswer": "캡슐화[Encapsulation / Encapsulate]",
            "aliases": [
              "Encapsulate"
            ],
            "example": "예: 상태 변경 로직은 클래스 내부로 encapsulate했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-17",
            "title": "디커플링",
            "section": "코드 구조 / 설계",
            "prompt": "모듈 사이의 의존성을 줄여 서로 덜 얽히게 만드는 설계 방향.",
            "answer": "Decouple",
            "displayAnswer": "디커플링[Decouple / Loose Coupling]",
            "aliases": [
              "Loose Coupling"
            ],
            "example": "예: UI와 비즈니스 로직을 decouple하는 게 이번 작업의 핵심이다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-18",
            "title": "의존성 주입",
            "section": "코드 구조 / 설계",
            "prompt": "필요한 의존 객체를 내부에서 직접 만들지 않고 외부에서 넣어주는 방식.",
            "answer": "Dependency Injection",
            "displayAnswer": "의존성 주입[Dependency Injection / DI]",
            "aliases": [
              "DI"
            ],
            "example": "예: 테스트 편의를 위해 서비스 인스턴스는 DI로 주입한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-19",
            "title": "래퍼",
            "section": "코드 구조 / 설계",
            "prompt": "다른 함수나 객체를 감싸서 사용성을 바꾸거나 기능을 추가하는 래퍼.",
            "answer": "Wrapper",
            "displayAnswer": "래퍼[Wrapper]",
            "aliases": [],
            "example": "예: fetch wrapper를 만들어 공통 에러 처리를 넣었다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-20",
            "title": "어댑터",
            "section": "코드 구조 / 설계",
            "prompt": "서로 다른 인터페이스를 이어 붙여 호환되게 만드는 중간 계층.",
            "answer": "Adapter",
            "displayAnswer": "어댑터[Adapter]",
            "aliases": [],
            "example": "예: 레거시 응답 형식은 adapter로 한 번 변환해서 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-21",
            "title": "브리지",
            "section": "코드 구조 / 설계",
            "prompt": "서로 다른 계층이나 구현을 느슨하게 연결하는 구조 패턴.",
            "answer": "Bridge",
            "displayAnswer": "브리지[Bridge]",
            "aliases": [],
            "example": "예: 렌더러와 컨트롤러를 bridge 패턴처럼 분리했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-22",
            "title": "컴파일",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "소스 코드를 다른 언어나 실행 가능한 형태로 변환하는 과정.",
            "answer": "Compile",
            "displayAnswer": "컴파일[Compile / Compilation]",
            "aliases": [
              "Compilation"
            ],
            "example": "예: 배포 전에 타입스크립트 compile 단계가 먼저 돈다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-23",
            "title": "트랜스파일",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "한 언어를 비슷한 다른 언어 수준으로 변환하는 과정.",
            "answer": "Transpile",
            "displayAnswer": "트랜스파일[Transpile / Transpilation]",
            "aliases": [
              "Transpilation"
            ],
            "example": "예: 최신 문법은 Babel이 구형 브라우저용으로 transpile한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-24",
            "title": "번들링",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "여러 파일을 묶어 배포 단위로 만드는 작업.",
            "answer": "Bundle",
            "displayAnswer": "번들링[Bundle / Bundling]",
            "aliases": [
              "Bundling"
            ],
            "example": "예: 초기 로딩 속도를 위해 bundling 결과물을 쪼개자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-25",
            "title": "압축",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "코드 용량을 줄이기 위해 공백과 이름 등을 압축하는 작업.",
            "answer": "Minify",
            "displayAnswer": "압축[Minify / Minification]",
            "aliases": [
              "Minification"
            ],
            "example": "예: 운영 빌드에서는 minification이 자동 적용된다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-26",
            "title": "핫 리로드",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "코드 수정 사항이 즉시 반영되도록 다시 불러오는 개발 기능.",
            "answer": "Hot Reload",
            "displayAnswer": "핫 리로드[Hot Reload / HMR]",
            "aliases": [
              "HMR"
            ],
            "example": "예: 스타일 수정은 HMR 덕분에 바로 확인할 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-27",
            "title": "벤치마크",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "성능을 수치로 측정하고 비교하는 작업.",
            "answer": "Benchmark",
            "displayAnswer": "벤치마크[Benchmark / Benchmarking]",
            "aliases": [
              "Benchmarking"
            ],
            "example": "예: 캐시 적용 전후를 benchmark로 비교해보자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-28",
            "title": "스로틀링",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "짧은 시간에 너무 많이 호출되는 이벤트를 일정 간격으로 제한하는 기법.",
            "answer": "Throttling",
            "displayAnswer": "스로틀링[Throttling / Throttle]",
            "aliases": [
              "Throttle"
            ],
            "example": "예: 스크롤 이벤트는 throttle을 걸어야 부담이 적다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-29",
            "title": "디바운스",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "연속 호출이 멈춘 뒤 마지막 한 번만 실행하게 만드는 기법.",
            "answer": "Debounce",
            "displayAnswer": "디바운스[Debounce / Debouncing]",
            "aliases": [
              "Debouncing"
            ],
            "example": "예: 검색 입력창은 debounce를 넣는 편이 일반적이다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-30",
            "title": "프로파일링",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "병목 지점을 찾기 위해 실행 시간과 자원 사용을 분석하는 작업.",
            "answer": "Profiling",
            "displayAnswer": "프로파일링[Profiling / Profile]",
            "aliases": [
              "Profile"
            ],
            "example": "예: 느린 원인을 찾으려고 먼저 profiling부터 했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-31",
            "title": "단위 테스트",
            "section": "테스트 / 품질",
            "prompt": "가장 작은 단위의 기능을 독립적으로 검증하는 테스트.",
            "answer": "Unit Test",
            "displayAnswer": "단위 테스트[Unit Test]",
            "aliases": [],
            "example": "예: 유틸 함수는 unit test로 빠르게 검증할 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-32",
            "title": "통합 테스트",
            "section": "테스트 / 품질",
            "prompt": "여러 모듈이 함께 동작하는 흐름을 검증하는 테스트.",
            "answer": "Integration Test",
            "displayAnswer": "통합 테스트[Integration Test]",
            "aliases": [],
            "example": "예: 로그인 플로우는 integration test가 더 적합하다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-33",
            "title": "회귀 오류",
            "section": "테스트 / 품질",
            "prompt": "수정 후에 기존 기능이 깨지는 문제나 그 현상 자체.",
            "answer": "Regression",
            "displayAnswer": "회귀 오류[Regression]",
            "aliases": [],
            "example": "예: 이번 수정 때문에 검색 기능에 regression이 생겼다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-34",
            "title": "스모크 테스트",
            "section": "테스트 / 품질",
            "prompt": "시스템이 최소한 실행 가능한지만 빠르게 확인하는 테스트.",
            "answer": "Smoke Test",
            "displayAnswer": "스모크 테스트[Smoke Test]",
            "aliases": [],
            "example": "예: 배포 직후 smoke test만이라도 꼭 돌리자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-35",
            "title": "새니티 체크",
            "section": "테스트 / 품질",
            "prompt": "상식적인 수준에서 큰 이상이 없는지 빠르게 점검하는 확인 작업.",
            "answer": "Sanity Check",
            "displayAnswer": "새니티 체크[Sanity Check]",
            "aliases": [],
            "example": "예: 머지 전에 라우팅만 sanity check 해도 사고를 줄일 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-36",
            "title": "플래키 테스트",
            "section": "테스트 / 품질",
            "prompt": "테스트가 환경이나 타이밍에 따라 들쭉날쭉하게 실패하는 상태.",
            "answer": "Flaky Test",
            "displayAnswer": "플래키 테스트[Flaky Test]",
            "aliases": [],
            "example": "예: 그 테스트는 flaky test라서 다시 돌리면 통과하기도 한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-37",
            "title": "진행 중 작업",
            "section": "협업 / 커뮤니케이션",
            "prompt": "아직 끝나지 않고 진행 중인 작업 상태.",
            "answer": "WIP",
            "displayAnswer": "진행 중 작업[WIP]",
            "aliases": [],
            "example": "예: 이 브랜치는 아직 WIP라서 리뷰 요청 전이다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-38",
            "title": "예상 완료 시간",
            "section": "협업 / 커뮤니케이션",
            "prompt": "예상 완료 시점이나 예상 소요 시간을 묻는 표현.",
            "answer": "ETA",
            "displayAnswer": "예상 완료 시간[ETA]",
            "aliases": [],
            "example": "예: 이 이슈 ETA를 오늘 안으로 공유해줄 수 있을까?",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-41",
            "title": "요약",
            "section": "협업 / 커뮤니케이션",
            "prompt": "긴 내용을 아주 짧게 요약해서 보여줄 때 붙이는 표시.",
            "answer": "TL;DR",
            "displayAnswer": "요약[TL;DR]",
            "aliases": [],
            "example": "예: TL;DR, 원인은 캐시 키 충돌이고 수정은 이미 끝났다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-42",
            "title": "핸드오프",
            "section": "협업 / 커뮤니케이션",
            "prompt": "작업이나 문서, 책임을 다른 사람이나 다음 단계로 넘기는 과정.",
            "answer": "Handoff",
            "displayAnswer": "핸드오프[Handoff]",
            "aliases": [],
            "example": "예: 디자인 handoff가 끝나야 개발 일정도 확정된다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-43",
            "title": "싱크업",
            "section": "협업 / 커뮤니케이션",
            "prompt": "서로 생각이나 방향을 맞추기 위해 짧게 회의하거나 조율하는 것.",
            "answer": "Sync Up",
            "displayAnswer": "싱크업[Sync Up / Align]",
            "aliases": [
              "Align"
            ],
            "example": "예: 이건 먼저 PM이랑 sync up 한 뒤에 진행하자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-44",
            "title": "레거시",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "오래되어 유지보수가 어렵거나 구조가 낡은 기존 코드나 시스템.",
            "answer": "Legacy",
            "displayAnswer": "레거시[Legacy]",
            "aliases": [],
            "example": "예: 이 모듈은 legacy 코드라 건드릴 때 주의가 필요하다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-45",
            "title": "그린필드",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "아무것도 없는 상태에서 새로 시작하는 프로젝트.",
            "answer": "Greenfield",
            "displayAnswer": "그린필드[Greenfield]",
            "aliases": [],
            "example": "예: 이번 서비스는 완전한 greenfield 프로젝트에 가깝다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-46",
            "title": "브라운필드",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "이미 있는 시스템을 기반으로 개선하거나 확장하는 프로젝트.",
            "answer": "Brownfield",
            "displayAnswer": "브라운필드[Brownfield]",
            "aliases": [],
            "example": "예: 기존 ERP 위에 얹는 작업이라 brownfield 성격이 강하다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-47",
            "title": "기술 부채",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "지금은 빠르게 만들었지만 나중에 비용으로 돌아올 구조적 문제.",
            "answer": "Tech Debt",
            "displayAnswer": "기술 부채[Tech Debt / Technical Debt]",
            "aliases": [
              "Technical Debt"
            ],
            "example": "예: 급하게 넣은 예외 처리 때문에 tech debt가 꽤 쌓였다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-48",
            "title": "스파이크",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "짧은 시간 안에 기술 가능성을 검증하기 위해 만드는 실험용 작업.",
            "answer": "Spike",
            "displayAnswer": "스파이크[Spike]",
            "aliases": [],
            "example": "예: 본개발 전에 하루짜리 spike로 라이브러리를 검토했다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-49",
            "title": "개념 검증",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "아이디어 가능성만 빠르게 확인하는 작은 검증용 결과물.",
            "answer": "POC",
            "displayAnswer": "개념 검증[POC / Proof of Concept]",
            "aliases": [
              "Proof of Concept"
            ],
            "example": "예: 고객 설득용으로 간단한 POC를 먼저 만들었다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-50",
            "title": "도그푸딩",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "자사 제품을 내부 팀이 직접 사용하면서 문제를 발견하고 개선하는 문화.",
            "answer": "Dogfooding",
            "displayAnswer": "도그푸딩[Dogfooding]",
            "aliases": [],
            "example": "예: 정식 출시 전에 내부 팀이 dogfooding부터 시작했다.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-degrade",
            "title": "성능 저하",
            "section": "품질 / 안정성",
            "prompt": "수정이나 부하 때문에 원래보다 성능이나 품질이 나빠지는 현상.",
            "answer": "Degrade",
            "displayAnswer": "Degrade",
            "aliases": [
              "Degradation"
            ],
            "example": "예: 캐시를 끄자 응답 속도가 눈에 띄게 degrade됐다.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-deprecate",
            "title": "사용 중단 예정",
            "section": "품질 / 안정성",
            "prompt": "아직 동작은 하지만 더 이상 사용을 권장하지 않고 제거가 예정된 상태.",
            "answer": "Deprecate",
            "displayAnswer": "Deprecate",
            "aliases": [
              "Deprecated"
            ],
            "example": "예: 이 API는 deprecated라서 새 코드에서는 쓰지 말자.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-full-stack",
            "title": "풀스택",
            "section": "역할 / 구조",
            "prompt": "프론트엔드, API, DB까지 전 영역을 다루는 개발 범위나 개발자.",
            "answer": "Full Stack",
            "displayAnswer": "Full Stack",
            "aliases": [],
            "example": "예: 이번 프로젝트는 혼자라서 full stack으로 개발했다.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-tech-stack",
            "title": "기술 스택",
            "section": "역할 / 구조",
            "prompt": "프로젝트에 사용하는 언어, 프레임워크, 인프라 기술의 조합.",
            "answer": "Tech Stack",
            "displayAnswer": "Tech Stack",
            "aliases": [
              "Stack"
            ],
            "example": "예: 우리 tech stack은 React, Node, Postgres다.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-staging",
            "title": "스테이징 환경",
            "section": "배포 / 환경",
            "prompt": "운영 배포 전에 실제와 같은 조건으로 검증하는 중간 환경.",
            "answer": "Staging",
            "displayAnswer": "Staging",
            "aliases": [],
            "example": "예: 먼저 staging에 배포해서 확인한 뒤 prod로 올리자.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-production",
            "title": "운영 환경",
            "section": "배포 / 환경",
            "prompt": "실제 사용자가 쓰는 서비스 환경. 줄여서 prod라고 부른다.",
            "answer": "Production",
            "displayAnswer": "Production",
            "aliases": [
              "prod"
            ],
            "example": "예: production 장애라서 최우선으로 대응해야 한다.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-static-hosting",
            "title": "정적 호스팅",
            "section": "배포 / 환경",
            "prompt": "빌드된 HTML·JS·CSS 파일만 올려 서비스하는 호스팅 방식. GitHub Pages가 대표적이다.",
            "answer": "Static Hosting",
            "displayAnswer": "Static Hosting",
            "aliases": [],
            "example": "예: 프론트만 있는 앱이라 GitHub Pages 같은 static hosting이면 충분하다.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-closure",
            "title": "클로저",
            "section": "프로그래밍 기초",
            "prompt": "함수가 선언될 때의 바깥 변수를 기억해 계속 쓰는 동작.",
            "answer": "Closure",
            "displayAnswer": "클로저[Closure]",
            "aliases": [],
            "example": "예: 클로저[Closure]로 카운터 값을 숨겼다.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-callback",
            "title": "콜백",
            "section": "프로그래밍 기초",
            "prompt": "다른 함수에 인자로 넘겨 나중에 호출되게 하는 함수.",
            "answer": "Callback",
            "displayAnswer": "콜백[Callback]",
            "aliases": [],
            "example": "예: 완료되면 콜백[Callback]을 호출한다.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-pure-function",
            "title": "순수 함수",
            "section": "프로그래밍 기초",
            "prompt": "입력이 같으면 결과가 같고 바깥 상태를 바꾸지 않는 함수.",
            "answer": "Pure Function",
            "displayAnswer": "순수 함수[Pure Function]",
            "aliases": [],
            "example": "예: 계산 로직은 순수 함수[Pure Function]로 빼서 테스트하자.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-side-effect",
            "title": "부수 효과",
            "section": "프로그래밍 기초",
            "prompt": "함수가 결과 반환 외에 바깥 상태나 외부 시스템을 바꾸는 일.",
            "answer": "Side Effect",
            "displayAnswer": "부수 효과[Side Effect]",
            "aliases": [],
            "example": "예: API 호출 같은 부수 효과[Side Effect]는 한곳에 모으자.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-immutable",
            "title": "불변",
            "section": "프로그래밍 기초",
            "prompt": "한 번 만든 값을 고치지 않고 새 값을 만들어 쓰는 성질.",
            "answer": "Immutable",
            "displayAnswer": "불변[Immutable]",
            "aliases": [],
            "example": "예: 상태는 불변[Immutable]으로 다뤄야 변경 감지가 쉽다.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-generic",
            "title": "제네릭",
            "section": "프로그래밍 기초",
            "prompt": "타입을 매개변수로 받아 여러 타입에 재사용하는 문법.",
            "answer": "Generic",
            "displayAnswer": "제네릭[Generic]",
            "aliases": [],
            "example": "예: 응답 타입은 제네릭[Generic]으로 받자.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-inheritance",
            "title": "상속",
            "section": "프로그래밍 기초",
            "prompt": "부모 클래스의 속성과 동작을 자식 클래스가 물려받는 것.",
            "answer": "Inheritance",
            "displayAnswer": "상속[Inheritance]",
            "aliases": [],
            "example": "예: 상속[Inheritance]보다 조합을 먼저 검토하자.",
            "relatedDrills": []
          },
          {
            "id": "dev-basic-polymorphism",
            "title": "다형성",
            "section": "프로그래밍 기초",
            "prompt": "같은 호출이 객체 종류에 따라 다르게 동작하는 성질.",
            "answer": "Polymorphism",
            "displayAnswer": "다형성[Polymorphism]",
            "aliases": [],
            "example": "예: 다형성[Polymorphism]으로 결제 수단별 분기를 없앴다.",
            "relatedDrills": []
          },
          {
            "id": "dev-concurrency-concurrency",
            "title": "동시성",
            "section": "동시성 / 메모리",
            "prompt": "여러 작업을 번갈아 또는 겹쳐 진행하도록 다루는 방식.",
            "answer": "Concurrency",
            "displayAnswer": "동시성[Concurrency]",
            "aliases": [],
            "example": "예: 요청이 몰리면 동시성[Concurrency] 문제가 드러난다.",
            "relatedDrills": []
          },
          {
            "id": "dev-concurrency-thread",
            "title": "스레드",
            "section": "동시성 / 메모리",
            "prompt": "한 프로세스 안에서 실행 흐름을 이루는 단위.",
            "answer": "Thread",
            "displayAnswer": "스레드[Thread]",
            "aliases": [],
            "example": "예: 메인 스레드[Thread]를 막으면 화면이 멈춘다.",
            "relatedDrills": []
          },
          {
            "id": "dev-concurrency-race-condition",
            "title": "경쟁 상태",
            "section": "동시성 / 메모리",
            "prompt": "실행 순서에 따라 결과가 달라지는 동시성 버그.",
            "answer": "Race Condition",
            "displayAnswer": "경쟁 상태[Race Condition]",
            "aliases": [],
            "example": "예: 늦게 온 응답이 덮어쓰는 경쟁 상태[Race Condition]가 있다.",
            "relatedDrills": []
          },
          {
            "id": "dev-concurrency-deadlock",
            "title": "교착 상태",
            "section": "동시성 / 메모리",
            "prompt": "서로가 가진 자원을 기다리며 영원히 멈추는 상태.",
            "answer": "Deadlock",
            "displayAnswer": "교착 상태[Deadlock]",
            "aliases": [],
            "example": "예: 락 순서가 달라 교착 상태[Deadlock]가 났다.",
            "relatedDrills": []
          },
          {
            "id": "dev-concurrency-memory-leak",
            "title": "메모리 누수",
            "section": "동시성 / 메모리",
            "prompt": "더 이상 안 쓰는 메모리가 해제되지 않고 쌓이는 문제.",
            "answer": "Memory Leak",
            "displayAnswer": "메모리 누수[Memory Leak]",
            "aliases": [],
            "example": "예: 리스너를 안 지워서 메모리 누수[Memory Leak]가 생겼다.",
            "relatedDrills": []
          },
          {
            "id": "dev-design-solid",
            "title": "솔리드 원칙",
            "section": "설계 원칙",
            "prompt": "객체지향 설계의 다섯 원칙을 묶어 부르는 이름.",
            "answer": "SOLID",
            "displayAnswer": "솔리드 원칙[SOLID]",
            "aliases": [],
            "example": "예: 이 클래스는 SOLID 원칙[SOLID] 중 단일 책임을 어긴다.",
            "relatedDrills": []
          },
          {
            "id": "dev-design-dry",
            "title": "중복 금지 원칙",
            "section": "설계 원칙",
            "prompt": "같은 지식을 여러 곳에 반복하지 말라는 원칙.",
            "answer": "DRY",
            "displayAnswer": "중복 금지 원칙[DRY]",
            "aliases": [],
            "example": "예: DRY[DRY]도 좋지만 성급한 추상화는 피하자.",
            "relatedDrills": []
          },
          {
            "id": "dev-design-soc",
            "title": "관심사 분리",
            "section": "설계 원칙",
            "prompt": "서로 다른 책임을 다른 모듈로 나누는 설계 원칙.",
            "answer": "Separation of Concerns",
            "displayAnswer": "관심사 분리[Separation of Concerns]",
            "aliases": [],
            "example": "예: 관심사 분리[Separation of Concerns]로 UI와 조회 로직을 나눴다.",
            "relatedDrills": []
          },
          {
            "id": "dev-design-cohesion",
            "title": "응집도",
            "section": "설계 원칙",
            "prompt": "한 모듈 안의 요소들이 같은 목적으로 묶인 정도.",
            "answer": "Cohesion",
            "displayAnswer": "응집도[Cohesion]",
            "aliases": [],
            "example": "예: 응집도[Cohesion]가 낮으니 기능별로 파일을 나누자.",
            "relatedDrills": []
          },
          {
            "id": "dev-design-singleton",
            "title": "싱글턴",
            "section": "설계 원칙",
            "prompt": "인스턴스를 하나만 만들어 공유하는 패턴.",
            "answer": "Singleton",
            "displayAnswer": "싱글턴[Singleton]",
            "aliases": [],
            "example": "예: DB 커넥션 풀은 싱글턴[Singleton]으로 둔다.",
            "relatedDrills": []
          },
          {
            "id": "dev-design-observer",
            "title": "옵저버",
            "section": "설계 원칙",
            "prompt": "상태가 바뀌면 구독자들에게 알려 주는 패턴.",
            "answer": "Observer",
            "displayAnswer": "옵저버[Observer]",
            "aliases": [],
            "example": "예: 이벤트 구독은 옵저버[Observer] 패턴이다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-pull-request",
            "title": "풀 리퀘스트",
            "section": "협업 / 품질",
            "prompt": "브랜치 변경을 리뷰받고 합쳐 달라고 올리는 요청.",
            "answer": "Pull Request",
            "displayAnswer": "풀 리퀘스트[Pull Request]",
            "aliases": [],
            "example": "예: 풀 리퀘스트[Pull Request]는 작게 나눠 올리자.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-code-review",
            "title": "코드 리뷰",
            "section": "협업 / 품질",
            "prompt": "머지 전에 동료가 변경 내용을 읽고 의견을 주는 과정.",
            "answer": "Code Review",
            "displayAnswer": "코드 리뷰[Code Review]",
            "aliases": [],
            "example": "예: 코드 리뷰[Code Review]에서 예외 처리 누락을 잡았다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-merge-conflict",
            "title": "머지 충돌",
            "section": "협업 / 품질",
            "prompt": "같은 곳을 다르게 고쳐 자동으로 합치지 못하는 상태.",
            "answer": "Merge Conflict",
            "displayAnswer": "머지 충돌[Merge Conflict]",
            "aliases": [],
            "example": "예: 머지 충돌[Merge Conflict]을 풀고 다시 푸시했다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-linter",
            "title": "린터",
            "section": "협업 / 품질",
            "prompt": "코드의 오류 가능성과 규칙 위반을 자동으로 잡는 도구.",
            "answer": "Linter",
            "displayAnswer": "린터[Linter]",
            "aliases": [],
            "example": "예: CI에서 린터[Linter]를 통과해야 머지된다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-semver",
            "title": "유의적 버전",
            "section": "협업 / 품질",
            "prompt": "MAJOR.MINOR.PATCH로 변경의 성격을 나타내는 버전 규칙.",
            "answer": "Semantic Versioning",
            "displayAnswer": "유의적 버전[Semantic Versioning]",
            "aliases": [],
            "example": "예: 유의적 버전[Semantic Versioning]상 깨지는 변경은 메이저를 올린다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-monorepo",
            "title": "모노레포",
            "section": "협업 / 품질",
            "prompt": "여러 프로젝트를 한 저장소에서 관리하는 방식.",
            "answer": "Monorepo",
            "displayAnswer": "모노레포[Monorepo]",
            "aliases": [],
            "example": "예: 공통 UI 때문에 모노레포[Monorepo]로 합쳤다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-tdd",
            "title": "테스트 주도 개발",
            "section": "협업 / 품질",
            "prompt": "실패하는 테스트를 먼저 쓰고 구현하는 개발 방식.",
            "answer": "TDD",
            "displayAnswer": "테스트 주도 개발[TDD]",
            "aliases": [],
            "example": "예: 계산 로직은 테스트 주도 개발[TDD]로 짰다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-e2e",
            "title": "종단 간 테스트",
            "section": "협업 / 품질",
            "prompt": "실제 사용자처럼 화면부터 서버까지 흐름 전체를 검증하는 테스트.",
            "answer": "E2E Test",
            "displayAnswer": "종단 간 테스트[E2E Test]",
            "aliases": [],
            "example": "예: 결제 흐름은 종단 간 테스트[E2E Test]로 지킨다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-edge-case",
            "title": "엣지 케이스",
            "section": "협업 / 품질",
            "prompt": "드물지만 경계에서 일어나는 입력이나 상황.",
            "answer": "Edge Case",
            "displayAnswer": "엣지 케이스[Edge Case]",
            "aliases": [],
            "example": "예: 빈 배열 같은 엣지 케이스[Edge Case]도 확인했나요?",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-bottleneck",
            "title": "병목",
            "section": "협업 / 품질",
            "prompt": "전체 처리 속도를 제한하는 가장 느린 지점.",
            "answer": "Bottleneck",
            "displayAnswer": "병목[Bottleneck]",
            "aliases": [],
            "example": "예: 병목[Bottleneck]은 이미지 변환 단계였다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-trade-off",
            "title": "트레이드오프",
            "section": "협업 / 품질",
            "prompt": "하나를 얻으려면 다른 하나를 내줘야 하는 관계.",
            "answer": "Trade-off",
            "displayAnswer": "트레이드오프[Trade-off]",
            "aliases": [],
            "example": "예: 캐시는 속도와 정합성의 트레이드오프[Trade-off]다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-latency",
            "title": "지연 시간",
            "section": "협업 / 품질",
            "prompt": "요청을 보내고 응답을 받기까지 걸리는 시간.",
            "answer": "Latency",
            "displayAnswer": "지연 시간[Latency]",
            "aliases": [],
            "example": "예: p95 지연 시간[Latency]이 1초를 넘었다.",
            "relatedDrills": []
          },
          {
            "id": "dev-collab-throughput",
            "title": "처리량",
            "section": "협업 / 품질",
            "prompt": "단위 시간에 처리하는 요청이나 데이터의 양.",
            "answer": "Throughput",
            "displayAnswer": "처리량[Throughput]",
            "aliases": [],
            "example": "예: 인스턴스를 늘려 처리량[Throughput]을 높였다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-docker",
            "title": "도커",
            "section": "운영 / 신뢰성",
            "prompt": "앱과 실행 환경을 컨테이너로 묶어 실행하는 도구.",
            "answer": "Docker",
            "displayAnswer": "도커[Docker]",
            "aliases": [],
            "example": "예: 로컬 DB는 도커[Docker]로 띄우자.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-kubernetes",
            "title": "쿠버네티스",
            "section": "운영 / 신뢰성",
            "prompt": "여러 컨테이너의 배포와 확장, 복구를 자동화하는 플랫폼.",
            "answer": "Kubernetes",
            "displayAnswer": "쿠버네티스[Kubernetes]",
            "aliases": [],
            "example": "예: 서비스는 쿠버네티스[Kubernetes]에 배포된다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-rollback",
            "title": "롤백",
            "section": "운영 / 신뢰성",
            "prompt": "문제가 생긴 배포나 변경을 이전 상태로 되돌리는 것.",
            "answer": "Rollback",
            "displayAnswer": "롤백[Rollback]",
            "aliases": [],
            "example": "예: 에러율이 올라 바로 롤백[Rollback]했다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-hotfix",
            "title": "핫픽스",
            "section": "운영 / 신뢰성",
            "prompt": "운영 장애를 막기 위해 급히 내보내는 수정.",
            "answer": "Hotfix",
            "displayAnswer": "핫픽스[Hotfix]",
            "aliases": [],
            "example": "예: 결제 오류는 핫픽스[Hotfix]로 먼저 막았다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-env-var",
            "title": "환경 변수",
            "section": "운영 / 신뢰성",
            "prompt": "코드 밖에서 설정값을 넘기는 변수.",
            "answer": "Environment Variable",
            "displayAnswer": "환경 변수[Environment Variable]",
            "aliases": [],
            "example": "예: API 키는 환경 변수[Environment Variable]로 뺀다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-monitoring",
            "title": "모니터링",
            "section": "운영 / 신뢰성",
            "prompt": "서비스 상태와 지표를 지켜보고 이상을 감지하는 일.",
            "answer": "Monitoring",
            "displayAnswer": "모니터링[Monitoring]",
            "aliases": [],
            "example": "예: 모니터링[Monitoring] 알림이 먼저 울렸다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-sla",
            "title": "서비스 수준 협약",
            "section": "운영 / 신뢰성",
            "prompt": "가용성 같은 서비스 품질을 고객과 약속한 기준.",
            "answer": "SLA",
            "displayAnswer": "서비스 수준 협약[SLA]",
            "aliases": [],
            "example": "예: 서비스 수준 협약[SLA]은 가용성 99.9%다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-health-check",
            "title": "헬스 체크",
            "section": "운영 / 신뢰성",
            "prompt": "서버가 요청을 받을 수 있는지 주기적으로 확인하는 것.",
            "answer": "Health Check",
            "displayAnswer": "헬스 체크[Health Check]",
            "aliases": [],
            "example": "예: 헬스 체크[Health Check]에 실패한 인스턴스는 빠진다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-timeout",
            "title": "타임아웃",
            "section": "운영 / 신뢰성",
            "prompt": "정해진 시간 안에 응답이 없으면 실패로 처리하는 제한.",
            "answer": "Timeout",
            "displayAnswer": "타임아웃[Timeout]",
            "aliases": [],
            "example": "예: 외부 API 호출에는 타임아웃[Timeout]을 꼭 건다.",
            "relatedDrills": []
          },
          {
            "id": "dev-ops-retry",
            "title": "재시도",
            "section": "운영 / 신뢰성",
            "prompt": "일시적으로 실패한 작업을 다시 시도하는 것.",
            "answer": "Retry",
            "displayAnswer": "재시도[Retry]",
            "aliases": [],
            "example": "예: 멱등한 요청만 재시도[Retry]한다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-bean",
            "title": "스프링 빈",
            "section": "Spring / 빌드",
            "prompt": "스프링 컨테이너가 만들고 관리하는 객체.",
            "answer": "Spring Bean",
            "displayAnswer": "스프링 빈[Spring Bean]",
            "aliases": [],
            "example": "예: 서비스 클래스는 스프링 빈[Spring Bean]으로 등록된다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-ioc",
            "title": "IoC 컨테이너",
            "section": "Spring / 빌드",
            "prompt": "객체 생성과 연결을 대신 맡아 주는 스프링의 핵심.",
            "answer": "IoC Container",
            "displayAnswer": "IoC 컨테이너[IoC Container]",
            "aliases": [],
            "example": "예: IoC 컨테이너[IoC Container]가 의존성을 주입해 준다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-aop",
            "title": "관점 지향 프로그래밍",
            "section": "Spring / 빌드",
            "prompt": "트랜잭션·로깅처럼 여러 곳에 걸친 기능을 분리하는 기법.",
            "answer": "AOP",
            "displayAnswer": "관점 지향 프로그래밍[AOP]",
            "aliases": [],
            "example": "예: @Transactional도 AOP[AOP]로 동작한다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-jpa",
            "title": "JPA",
            "section": "Spring / 빌드",
            "prompt": "자바 객체와 DB 테이블을 연결하는 표준 ORM 명세.",
            "answer": "JPA",
            "displayAnswer": "JPA[JPA]",
            "aliases": [],
            "example": "예: JPA[JPA]의 구현체로 보통 Hibernate를 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-persistence-context",
            "title": "영속성 컨텍스트",
            "section": "Spring / 빌드",
            "prompt": "JPA가 조회한 엔티티를 트랜잭션 동안 관리하는 공간. 변경 감지의 기반.",
            "answer": "Persistence Context",
            "displayAnswer": "영속성 컨텍스트[Persistence Context]",
            "aliases": [],
            "example": "예: 영속성 컨텍스트[Persistence Context]에 있는 엔티티는 변경이 자동 반영된다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-fetch-type",
            "title": "지연 조회",
            "section": "Spring / 빌드",
            "prompt": "연관 엔티티를 실제로 쓰는 시점에 조회하는 JPA 전략. 프론트의 Lazy Loading과 구분.",
            "answer": "FetchType.LAZY",
            "displayAnswer": "지연 조회[FetchType.LAZY]",
            "aliases": [],
            "example": "예: 지연 조회[FetchType.LAZY]를 반복문에서 건드리면 N+1 문제가 난다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-build-tool",
            "title": "빌드 도구",
            "section": "Spring / 빌드",
            "prompt": "의존성 관리, 컴파일, 테스트, 패키징을 자동화하는 도구.",
            "answer": "Build Tool",
            "displayAnswer": "빌드 도구[Build Tool]",
            "aliases": [],
            "example": "예: Gradle은 자바 진영의 대표적인 빌드 도구[Build Tool]다.",
            "relatedDrills": []
          },
          {
            "id": "dev-spring-gradle-wrapper",
            "title": "그래들 래퍼",
            "section": "Spring / 빌드",
            "prompt": "프로젝트에 고정된 버전의 Gradle을 내려받아 실행하는 스크립트.",
            "answer": "Gradle Wrapper",
            "displayAnswer": "그래들 래퍼[Gradle Wrapper]",
            "aliases": [],
            "example": "예: CI에서도 그래들 래퍼[Gradle Wrapper]로 같은 버전을 쓴다.",
            "relatedDrills": []
          }
        ]
      }
    ]
  },
  {
    "id": "terms-frontend",
    "label": "프론트엔드",
    "folderName": "frontend",
    "lessons": [
      {
        "id": "knowledge-terms-frontend",
        "title": "프론트엔드 개발 어휘",
        "fileName": "frontend-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/frontend-terms.yaml",
        "parts": [
          {
            "id": "web-convention",
            "title": "컨벤션",
            "section": "네이밍 컨벤션",
            "prompt": "코드·문서·스타일에서 팀이나 업계가 공통으로 쓰는 이름 규칙과 약속된 표현.",
            "answer": "Convention",
            "displayAnswer": "Convention",
            "aliases": [],
            "example": "예: 클래스 이름을 마음대로 짓지 말고 팀 convention을 따르자.",
            "relatedDrills": []
          },
          {
            "id": "web-semantic-html",
            "title": "시맨틱 HTML",
            "section": "네이밍 컨벤션",
            "prompt": "header, nav, main, section, article, footer처럼 의미에 맞는 HTML 태그로 구조를 표현하는 방식.",
            "answer": "Semantic HTML",
            "displayAnswer": "Semantic HTML",
            "aliases": [
              "Semantic Tags"
            ],
            "example": "예: div만 쓰지 말고 semantic HTML로 구역을 나눠 보자.",
            "relatedDrills": []
          },
          {
            "id": "web-bem",
            "title": "BEM",
            "section": "네이밍 컨벤션",
            "prompt": "Block__Element--Modifier 형태로 CSS 클래스 이름을 짓는 네이밍 패턴.",
            "answer": "BEM",
            "displayAnswer": "BEM",
            "aliases": [
              "Block Element Modifier"
            ],
            "example": "예: card__title--large처럼 BEM으로 상태를 표현한다.",
            "relatedDrills": []
          },
          {
            "id": "web-container",
            "title": "컨테이너",
            "section": "네이밍 컨벤션",
            "prompt": "콘텐츠 폭을 가운데로 제한하는 레이아웃용 래퍼. CSS 클래스명으로도 자주 쓴다.",
            "answer": "Container",
            "displayAnswer": "Container",
            "aliases": [],
            "example": "예: 본문은 max-width가 있는 container 안에 넣자.",
            "relatedDrills": []
          },
          {
            "id": "web-wrapper",
            "title": "래퍼",
            "section": "네이밍 컨벤션",
            "prompt": "여러 요소를 묶어 배치·스타일을 주기 위한 바깥 감싸개. container와 비슷하게 쓰이지만 더 일반적이다.",
            "answer": "Wrapper",
            "displayAnswer": "Wrapper",
            "aliases": [],
            "example": "예: 카드들을 한 덩어리로 묶을 때 wrapper를 둔다.",
            "relatedDrills": []
          },
          {
            "id": "web-layout-classes",
            "title": "레이아웃 클래스",
            "section": "네이밍 컨벤션",
            "prompt": "row, col, grid, flex, gap처럼 배치·반응형을 나타내는 흔한 클래스·유틸 이름.",
            "answer": "Layout Classes",
            "displayAnswer": "Layout Classes",
            "aliases": [
              "Utility Classes"
            ],
            "example": "예: flex와 gap으로 카드 간격을 맞추는 layout classes를 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "web-state-class",
            "title": "상태 클래스",
            "section": "네이밍 컨벤션",
            "prompt": "is-active, is-hidden, disabled, error, success처럼 UI 상태를 나타내는 클래스·속성 이름.",
            "answer": "State Class",
            "displayAnswer": "State Class",
            "aliases": [
              "is-active"
            ],
            "example": "예: 열린 탭에 is-active state class를 붙인다.",
            "relatedDrills": []
          },
          {
            "id": "web-boolean-naming",
            "title": "불리언 네이밍",
            "section": "네이밍 컨벤션",
            "prompt": "isOpen, hasError, canSubmit처럼 true/false 변수에 is·has·can 접두를 쓰는 이름 규칙.",
            "answer": "Boolean Naming",
            "displayAnswer": "Boolean Naming",
            "aliases": [],
            "example": "예: open 대신 isOpen처럼 boolean naming을 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "web-handler-naming",
            "title": "핸들러 네이밍",
            "section": "네이밍 컨벤션",
            "prompt": "handleClick, onSubmit, fetchData, renderItem처럼 이벤트·데이터·렌더 함수에 쓰는 관례적 이름.",
            "answer": "Handler Naming",
            "displayAnswer": "Handler Naming",
            "aliases": [
              "Event Handler Naming"
            ],
            "example": "예: 클릭 처리는 handleClick으로 handler naming을 맞춘다.",
            "relatedDrills": []
          },
          {
            "id": "web-react-file-convention",
            "title": "React 파일 컨벤션",
            "section": "네이밍 컨벤션",
            "prompt": "components/Button.tsx, hooks/useFetch.ts처럼 폴더·파일·훅 이름(use*)을 역할에 맞게 나누는 규칙.",
            "answer": "React File Convention",
            "displayAnswer": "React File Convention",
            "aliases": [],
            "example": "예: 커스텀 훅은 hooks/에 use로 시작하는 React file convention을 따른다.",
            "relatedDrills": []
          },
          {
            "id": "web-server-state",
            "title": "서버 상태",
            "section": "프론트 아키텍처",
            "prompt": "API에서 가져와 캐시·동기화하는 원격 데이터 상태. 목록·상세·권한 정보가 해당한다.",
            "answer": "Server State",
            "displayAnswer": "서버 상태[Server State]",
            "aliases": [],
            "example": "예: 주문 목록은 Server State라서 캐시 무효화로 갱신한다.",
            "relatedDrills": []
          },
          {
            "id": "web-client-state",
            "title": "클라이언트 상태",
            "section": "프론트 아키텍처",
            "prompt": "모달 열림·탭 선택·입력 초안처럼 브라우저 UI에만 존재하는 로컬 상태.",
            "answer": "Client State",
            "displayAnswer": "클라이언트 상태[Client State]",
            "aliases": [],
            "example": "예: isOpen 같은 모달 플래그는 Client State로 둔다.",
            "relatedDrills": []
          },
          {
            "id": "web-container-presentational",
            "title": "컨테이너 프레젠테이셔널 패턴",
            "section": "프론트 아키텍처",
            "prompt": "데이터·로직은 Container, 표시만 Presentational로 나누는 컴포넌트 분리 패턴.",
            "answer": "Container Presentational",
            "displayAnswer": "컨테이너/프레젠테이셔널[Container Presentational]",
            "aliases": [
              "Container/Presentational",
              "Smart Dumb Components"
            ],
            "example": "예: fetch는 Container에, 카드 마크업은 Presentational에 둔다.",
            "relatedDrills": []
          },
          {
            "id": "web-code-splitting",
            "title": "코드 분할",
            "section": "프론트 아키텍처",
            "prompt": "번들을 여러 조각으로 나눠 필요한 시점에만 내려받게 하는 최적화 기법.",
            "answer": "Code Splitting",
            "displayAnswer": "코드 분할[Code Splitting]",
            "aliases": [],
            "example": "예: 관리자 라우트는 Code Splitting으로 첫 로드에서 뺀다.",
            "relatedDrills": []
          },
          {
            "id": "web-lazy-loading",
            "title": "지연 로딩",
            "section": "프론트 아키텍처",
            "prompt": "컴포넌트·이미지·라우트를 당장 쓰지 않을 때 나중에 불러오는 기법.",
            "answer": "Lazy Loading",
            "displayAnswer": "지연 로딩[Lazy Loading]",
            "aliases": [],
            "example": "예: 아래쪽 차트는 Lazy Loading으로 뷰포트 진입 시 로드한다.",
            "relatedDrills": []
          },
          {
            "id": "web-virtualization",
            "title": "가상화",
            "section": "프론트 아키텍처",
            "prompt": "긴 목록에서 보이는 행만 DOM에 그려 스크롤 성능을 유지하는 기법.",
            "answer": "Virtualization",
            "displayAnswer": "가상화[Virtualization]",
            "aliases": [
              "Windowing",
              "Virtual List"
            ],
            "example": "예: 수천 행 테이블은 Virtualization으로 렌더 비용을 줄인다.",
            "relatedDrills": []
          },
          {
            "id": "dev-extra-headless-ui",
            "title": "헤드리스 UI",
            "section": "프론트 라이브러리",
            "prompt": "동작과 접근성 로직만 제공하고 스타일은 사용자가 입히는 UI 라이브러리 방식.",
            "answer": "Headless UI",
            "displayAnswer": "Headless UI",
            "aliases": [],
            "example": "예: 디자인 자유도가 필요해서 headless UI 컴포넌트를 골랐다.",
            "relatedDrills": [
              {
                "kind": "note",
                "trackId": "notes-architecture",
                "lessonId": "knowledge-notes-architecture-scenarios",
                "partId": "knowledge-notes-architecture-scenarios__콘텐츠를-headless로-둘까",
                "title": "콘텐츠를 Headless로 둘까"
              }
            ]
          },
          {
            "id": "fe-spa",
            "title": "SPA",
            "section": "렌더링",
            "prompt": "한 번 받은 앱 셸에서 페이지 전환을 클라이언트 라우팅으로 처리하는 단일 페이지 애플리케이션.",
            "answer": "SPA",
            "displayAnswer": "SPA",
            "aliases": [
              "Single Page Application"
            ],
            "example": "예: 관리자 콘솔은 SPA[SPA]로 화면 전환을 부드럽게 한다.",
            "relatedDrills": []
          },
          {
            "id": "fe-ssr",
            "title": "SSR",
            "section": "렌더링",
            "prompt": "서버가 HTML을 만들어 내려보내, 첫 화면과 SEO에 유리한 렌더링 방식.",
            "answer": "SSR",
            "displayAnswer": "SSR",
            "aliases": [
              "Server-Side Rendering"
            ],
            "example": "예: 마케팅 랜딩은 SSR[Server-Side Rendering]로 첫 페인트와 검색 노출을 챙긴다.",
            "relatedDrills": []
          },
          {
            "id": "fe-csr",
            "title": "클라이언트 사이드 렌더링",
            "section": "렌더링 / 컴포넌트",
            "prompt": "브라우저가 자바스크립트를 실행해 화면을 그리는 방식.",
            "answer": "CSR",
            "displayAnswer": "클라이언트 사이드 렌더링[CSR]",
            "aliases": [],
            "example": "예: 관리자 화면은 클라이언트 사이드 렌더링[CSR]으로 충분하다.",
            "relatedDrills": []
          },
          {
            "id": "fe-ssg",
            "title": "정적 사이트 생성",
            "section": "렌더링 / 컴포넌트",
            "prompt": "빌드할 때 페이지를 미리 HTML로 만들어 두는 방식.",
            "answer": "SSG",
            "displayAnswer": "정적 사이트 생성[SSG]",
            "aliases": [],
            "example": "예: 문서 사이트는 정적 사이트 생성[SSG]으로 배포한다.",
            "relatedDrills": []
          },
          {
            "id": "fe-hydration",
            "title": "하이드레이션",
            "section": "렌더링 / 컴포넌트",
            "prompt": "서버가 보낸 HTML에 이벤트와 상태를 연결하는 과정.",
            "answer": "Hydration",
            "displayAnswer": "하이드레이션[Hydration]",
            "aliases": [],
            "example": "예: 서버와 값이 달라 하이드레이션[Hydration] 경고가 났다.",
            "relatedDrills": []
          },
          {
            "id": "fe-component",
            "title": "컴포넌트",
            "section": "렌더링 / 컴포넌트",
            "prompt": "화면을 이루는 재사용 가능한 UI 단위.",
            "answer": "Component",
            "displayAnswer": "컴포넌트[Component]",
            "aliases": [],
            "example": "예: 버튼을 공통 컴포넌트[Component]로 뺐다.",
            "relatedDrills": []
          },
          {
            "id": "fe-props",
            "title": "프롭스",
            "section": "렌더링 / 컴포넌트",
            "prompt": "부모 컴포넌트가 자식에게 넘기는 값.",
            "answer": "Props",
            "displayAnswer": "프롭스[Props]",
            "aliases": [],
            "example": "예: 프롭스[Props]가 너무 많으면 컴포넌트를 나누자.",
            "relatedDrills": []
          },
          {
            "id": "fe-hook",
            "title": "훅",
            "section": "렌더링 / 컴포넌트",
            "prompt": "함수 컴포넌트에서 상태와 생명주기 기능을 쓰게 하는 함수.",
            "answer": "Hook",
            "displayAnswer": "훅[Hook]",
            "aliases": [],
            "example": "예: 조회 로직은 커스텀 훅[Hook]으로 뺐다.",
            "relatedDrills": []
          },
          {
            "id": "fe-prop-drilling",
            "title": "프롭 드릴링",
            "section": "렌더링 / 컴포넌트",
            "prompt": "값을 쓰지 않는 중간 컴포넌트까지 거쳐 계속 넘기는 일.",
            "answer": "Prop Drilling",
            "displayAnswer": "프롭 드릴링[Prop Drilling]",
            "aliases": [],
            "example": "예: 프롭 드릴링[Prop Drilling]이 깊어 컨텍스트로 바꿨다.",
            "relatedDrills": []
          },
          {
            "id": "fe-memoization",
            "title": "메모이제이션",
            "section": "렌더링 / 컴포넌트",
            "prompt": "계산 결과를 기억해 같은 입력에 다시 계산하지 않는 기법.",
            "answer": "Memoization",
            "displayAnswer": "메모이제이션[Memoization]",
            "aliases": [],
            "example": "예: 무거운 목록 계산은 메모이제이션[Memoization]을 쓰자.",
            "relatedDrills": []
          },
          {
            "id": "fe-optimistic-update",
            "title": "낙관적 업데이트",
            "section": "렌더링 / 컴포넌트",
            "prompt": "서버 응답 전에 성공을 가정해 화면을 먼저 바꾸는 방식.",
            "answer": "Optimistic Update",
            "displayAnswer": "낙관적 업데이트[Optimistic Update]",
            "aliases": [],
            "example": "예: 좋아요는 낙관적 업데이트[Optimistic Update]로 처리한다.",
            "relatedDrills": []
          },
          {
            "id": "fe-tree-shaking",
            "title": "트리 셰이킹",
            "section": "렌더링 / 컴포넌트",
            "prompt": "번들에서 쓰지 않는 코드를 제거하는 최적화.",
            "answer": "Tree Shaking",
            "displayAnswer": "트리 셰이킹[Tree Shaking]",
            "aliases": [],
            "example": "예: 트리 셰이킹[Tree Shaking]이 되도록 ESM으로 가져오자.",
            "relatedDrills": []
          },
          {
            "id": "fe-polyfill",
            "title": "폴리필",
            "section": "렌더링 / 컴포넌트",
            "prompt": "구형 브라우저에 없는 기능을 코드로 채워 주는 것.",
            "answer": "Polyfill",
            "displayAnswer": "폴리필[Polyfill]",
            "aliases": [],
            "example": "예: 구형 브라우저용 폴리필[Polyfill]을 넣었다.",
            "relatedDrills": []
          },
          {
            "id": "fe-accessibility",
            "title": "접근성",
            "section": "렌더링 / 컴포넌트",
            "prompt": "장애가 있어도 누구나 쓸 수 있게 만드는 품질.",
            "answer": "Accessibility",
            "displayAnswer": "접근성[Accessibility]",
            "aliases": [],
            "example": "예: 모달은 접근성[Accessibility]상 포커스 이동이 필요하다.",
            "relatedDrills": []
          },
          {
            "id": "fe-responsive",
            "title": "반응형",
            "section": "렌더링 / 컴포넌트",
            "prompt": "화면 크기에 맞춰 레이아웃이 바뀌는 설계.",
            "answer": "Responsive",
            "displayAnswer": "반응형[Responsive]",
            "aliases": [],
            "example": "예: 표는 반응형[Responsive]에서 카드로 바뀐다.",
            "relatedDrills": []
          }
        ]
      }
    ]
  },
  {
    "id": "terms-web",
    "label": "웹 UX·UI",
    "folderName": "web",
    "lessons": [
      {
        "id": "rule-dev-terms-readme-terms-web",
        "title": "웹 UX·UI 어휘",
        "fileName": "web-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/web-terms.yaml",
        "parts": [
          {
            "id": "rule-dev-terms-readme-terms-web-term-2",
            "title": "히어로 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "페이지 최상단에 크게 배치되는 대표 소개 영역.",
            "answer": "Hero Sections",
            "displayAnswer": "히어로 섹션[Hero Sections]",
            "aliases": [],
            "example": "예: 첫 화면은 히어로 섹션[Hero Sections]에서 메시지를 강하게 보여줘야 한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-3",
            "title": "기능 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "제품이나 서비스의 핵심 기능[feature]을 나열하는 섹션.",
            "answer": "Feature Sections",
            "displayAnswer": "기능 섹션[Feature Sections]",
            "aliases": [],
            "example": "예: 제품의 장점은 기능 섹션[Feature Sections]에서 카드 형태로 정리한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-4",
            "title": "행동 유도 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "사용자에게 가입, 구매, 다운로드 같은 행동[action]을 유도하는 섹션.",
            "answer": "CTA Sections",
            "displayAnswer": "행동 유도 섹션[CTA Sections]",
            "aliases": [],
            "example": "예: 가격표 아래에 행동 유도 섹션[CTA Sections]을 한 번 더 넣자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-16",
            "title": "자주 묻는 질문 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "자주 묻는 질문과 답변을 모아 둔 섹션.",
            "answer": "FAQs",
            "displayAnswer": "자주 묻는 질문 섹션[FAQs]",
            "aliases": [],
            "example": "예: 문의가 많은 서비스라면 자주 묻는 질문 섹션[FAQs]이 꼭 필요하다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-17",
            "title": "푸터",
            "section": "페이지 / 섹션 명칭",
            "prompt": "페이지 맨 아래에 회사 정보, 링크, 저작권 등을 넣는 하단 영역.",
            "answer": "Footers",
            "displayAnswer": "푸터[Footers]",
            "aliases": [],
            "example": "예: 푸터[Footers]에는 개인정보처리방침 링크를 넣어야 한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-19",
            "title": "헤더",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "상단 네비게이션 컴포넌트 자체를 가리키는 이름.",
            "answer": "Headers",
            "displayAnswer": "헤더[Headers]",
            "aliases": [],
            "example": "예: 모바일에서는 헤더[Headers]를 더 단순하게 만드는 편이다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-20",
            "title": "플라이아웃 메뉴",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "호버나 클릭 시 옆이나 아래로 펼쳐지는 확장 메뉴.",
            "answer": "Flyout Menus",
            "displayAnswer": "플라이아웃 메뉴[Flyout Menus]",
            "aliases": [],
            "example": "예: 카테고리 목록은 플라이아웃 메뉴[Flyout Menus]로 처리할 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-21",
            "title": "배너",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "공지, 할인, 이벤트 같은 메시지를 띠 형태로 보여주는 UI.",
            "answer": "Banners",
            "displayAnswer": "배너[Banners]",
            "aliases": [],
            "example": "예: 이벤트 안내는 상단 배너[Banners] 한 줄로 처리하자.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-23",
            "title": "404 페이지",
            "section": "전체 페이지 명칭",
            "prompt": "페이지를 찾지 못했을 때 보여주는 오류 안내 페이지.",
            "answer": "404 Pages",
            "displayAnswer": "404 페이지[404 Pages]",
            "aliases": [],
            "example": "예: 잘 만든 404 페이지[404 Pages]는 이탈을 줄이는 데 도움이 된다.",
            "relatedDrills": []
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-25",
            "title": "랜딩 페이지",
            "section": "전체 페이지 명칭",
            "prompt": "제품 소개와 전환[conversion] 유도에 집중한 단일 목적 페이지.",
            "answer": "Landing Pages",
            "displayAnswer": "랜딩 페이지[Landing Pages]",
            "aliases": [],
            "example": "예: 광고 유입은 보통 전용 랜딩 페이지[Landing Pages]로 받는다.",
            "relatedDrills": []
          },
          {
            "id": "web-extra-toast",
            "title": "토스트",
            "section": "오버레이 / 알림",
            "prompt": "화면 상단이나 하단에서 잠깐 나타났다 사라지는 가벼운 알림창. \"저장되었습니다\" 같은 상태 변화를 알린다.",
            "answer": "Toast",
            "displayAnswer": "Toast",
            "aliases": [
              "Snackbar"
            ],
            "example": "예: 장바구니에 담기면 toast로 짧게 알려주자.",
            "relatedDrills": []
          },
          {
            "id": "web-extra-drawer",
            "title": "드로어",
            "section": "오버레이 / 알림",
            "prompt": "화면 옆에서 서랍처럼 밀려 나오는 패널. 모바일 메뉴나 상세 설정에 자주 쓴다.",
            "answer": "Drawer",
            "displayAnswer": "Drawer",
            "aliases": [],
            "example": "예: 모바일에서는 네비게이션을 drawer로 접어 두자.",
            "relatedDrills": []
          },
          {
            "id": "web-extra-modal",
            "title": "모달",
            "section": "오버레이 / 알림",
            "prompt": "화면 위에 떠서 사용자의 응답을 요구하는 대화 상자. 닫기 전에는 뒤 화면을 조작할 수 없다.",
            "answer": "Modal Dialog",
            "displayAnswer": "Modal Dialog",
            "aliases": [
              "Modal",
              "Dialog"
            ],
            "example": "예: 삭제 확인은 modal dialog로 한 번 더 물어보자.",
            "relatedDrills": []
          },
          {
            "id": "web-sidebar",
            "title": "사이드바",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "화면 옆쪽에 두는 보조 네비게이션이나 패널 영역.",
            "answer": "Sidebar",
            "displayAnswer": "Sidebar",
            "aliases": [],
            "example": "예: 설정 메뉴는 sidebar에 모아 두자.",
            "relatedDrills": []
          },
          {
            "id": "web-dashboard",
            "title": "대시보드",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "지표·목록·요약 카드를 한눈에 보는 관리·현황 화면.",
            "answer": "Dashboard",
            "displayAnswer": "Dashboard",
            "aliases": [],
            "example": "예: 관리자용 dashboard에 오늘 주문 수를 올렸다.",
            "relatedDrills": []
          },
          {
            "id": "web-breadcrumb",
            "title": "브레드크럼",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "현재 위치가 어디인지 경로로 보여주는 탐색 보조 UI. 홈 > 카테고리 > 상품처럼 쓴다.",
            "answer": "Breadcrumb",
            "displayAnswer": "Breadcrumb",
            "aliases": [
              "Breadcrumbs"
            ],
            "example": "예: 깊은 카테고리에는 breadcrumb이 필요하다.",
            "relatedDrills": []
          },
          {
            "id": "web-tabs",
            "title": "탭",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "같은 영역 안에서 여러 패널을 전환해 보여주는 네비게이션 UI.",
            "answer": "Tabs",
            "displayAnswer": "Tabs",
            "aliases": [],
            "example": "예: 상세/리뷰/문의는 tabs로 나누자.",
            "relatedDrills": []
          },
          {
            "id": "web-accordion",
            "title": "아코디언",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "클릭하면 펼쳐지고 접히는 FAQ형 콘텐츠 UI.",
            "answer": "Accordion",
            "displayAnswer": "Accordion",
            "aliases": [
              "Disclosure"
            ],
            "example": "예: FAQ는 accordion으로 구현하는 경우가 많다.",
            "relatedDrills": []
          },
          {
            "id": "web-carousel",
            "title": "캐러셀",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "이미지·카드를 좌우로 넘겨 보는 슬라이드 UI.",
            "answer": "Carousel",
            "displayAnswer": "Carousel",
            "aliases": [
              "Slider"
            ],
            "example": "예: 메인 배너는 carousel로 돌린다.",
            "relatedDrills": []
          },
          {
            "id": "web-navigation",
            "title": "네비게이션",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "메뉴 링크 묶음. 헤더·사이드바·탭 등에서 화면 이동을 담당한다.",
            "answer": "Navigation",
            "displayAnswer": "Navigation",
            "aliases": [
              "Nav",
              "Navbar"
            ],
            "example": "예: 주요 페이지 링크는 header navigation에 둔다.",
            "relatedDrills": []
          },
          {
            "id": "web-badge",
            "title": "뱃지",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "상태·개수·라벨을 작게 표시하는 UI. New, 3, Sale 같은 표시에 쓴다.",
            "answer": "Badge",
            "displayAnswer": "Badge",
            "aliases": [],
            "example": "예: 읽지 않은 알림 개수는 badge로 보여 주자.",
            "relatedDrills": []
          },
          {
            "id": "web-card",
            "title": "카드",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "관련 정보를 하나의 블록으로 묶은 UI 단위. 기능·상품·후기 목록에 자주 쓴다.",
            "answer": "Card",
            "displayAnswer": "Card",
            "aliases": [],
            "example": "예: Feature 목록은 card 그리드로 배치한다.",
            "relatedDrills": []
          },
          {
            "id": "web-design-system",
            "title": "디자인 시스템",
            "section": "화면 상태·디자인 체계",
            "prompt": "재사용 UI 컴포넌트·토큰·사용 규칙을 묶어 제품 전반의 일관성을 유지하는 체계.",
            "answer": "Design System",
            "displayAnswer": "디자인 시스템[Design System]",
            "aliases": [],
            "example": "예: 새 화면은 Design System 버튼부터 쓰고 예외만 커스텀한다.",
            "relatedDrills": []
          },
          {
            "id": "web-design-token",
            "title": "디자인 토큰",
            "section": "화면 상태·디자인 체계",
            "prompt": "색·간격·타이포·그림자 같은 디자인 값을 이름 있는 변수로 관리하는 단위.",
            "answer": "Design Token",
            "displayAnswer": "디자인 토큰[Design Token]",
            "aliases": [
              "Design Tokens"
            ],
            "example": "예: primary 색은 hex 대신 Design Token으로 참조한다.",
            "relatedDrills": []
          },
          {
            "id": "web-empty-state",
            "title": "빈 상태",
            "section": "화면 상태·디자인 체계",
            "prompt": "데이터가 없을 때 보여주는 안내 UI. 목록이 비었을 때 행동 유도 문구·버튼을 둔다.",
            "answer": "Empty State",
            "displayAnswer": "빈 상태[Empty State]",
            "aliases": [
              "Empty States"
            ],
            "example": "예: 검색 결과가 없으면 Empty State에 다시 검색 CTA를 넣는다.",
            "relatedDrills": []
          },
          {
            "id": "web-loading-state",
            "title": "로딩 상태",
            "section": "화면 상태·디자인 체계",
            "prompt": "데이터를 기다리는 동안의 UI 상태. 스피너·스켈레톤·비활성 버튼으로 표현한다.",
            "answer": "Loading State",
            "displayAnswer": "로딩 상태[Loading State]",
            "aliases": [],
            "example": "예: 첫 진입은 Loading State로 스켈레톤을 보여 준다.",
            "relatedDrills": []
          },
          {
            "id": "web-error-state",
            "title": "에러 상태",
            "section": "화면 상태·디자인 체계",
            "prompt": "요청 실패·권한 오류 등 실패를 사용자에게 알리고 재시도를 유도하는 UI 상태.",
            "answer": "Error State",
            "displayAnswer": "에러 상태[Error State]",
            "aliases": [],
            "example": "예: 500이면 Error State에 재시도 버튼을 둔다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-autocomplete",
            "title": "오토컴플리트",
            "section": "입력",
            "prompt": "입력하며 후보 목록을 좁혀 고르는 검색형 입력 UI.",
            "answer": "Autocomplete",
            "displayAnswer": "Autocomplete",
            "aliases": [],
            "example": "예: 도시 검색은 autocomplete로 후보를 띄운다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-switch",
            "title": "스위치",
            "section": "입력",
            "prompt": "켜짐/꺼짐 두 상태를 토글하는 스위치형 입력.",
            "answer": "Switch",
            "displayAnswer": "Switch",
            "aliases": [
              "Toggle"
            ],
            "example": "예: 알림 수신 여부는 switch로 바꾼다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-avatar",
            "title": "아바타",
            "section": "데이터 표시",
            "prompt": "사용자나 엔티티를 나타내는 원형·사각 프로필 이미지 UI.",
            "answer": "Avatar",
            "displayAnswer": "Avatar",
            "aliases": [],
            "example": "예: 댓글 작성자는 avatar와 닉네임을 함께 보여 준다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-chip",
            "title": "칩",
            "section": "데이터 표시",
            "prompt": "태그·필터·선택을 작은 알약 형태로 보여 주는 UI.",
            "answer": "Chip",
            "displayAnswer": "Chip",
            "aliases": [
              "Tag"
            ],
            "example": "예: 선택된 필터는 chip으로 표시하고 개별 삭제한다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-divider",
            "title": "디바이더",
            "section": "데이터 표시",
            "prompt": "구역을 가로·세로 선으로 나누는 구분선 UI.",
            "answer": "Divider",
            "displayAnswer": "Divider",
            "aliases": [],
            "example": "예: 메뉴 항목 그룹 사이에 divider를 넣는다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-tooltip",
            "title": "툴팁",
            "section": "데이터 표시",
            "prompt": "호버·포커스 시 짧게 떠서 부가 설명을 보여 주는 UI.",
            "answer": "Tooltip",
            "displayAnswer": "Tooltip",
            "aliases": [],
            "example": "예: 아이콘 버튼에는 tooltip으로 이름을 붙인다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-typography",
            "title": "타이포그래피",
            "section": "데이터 표시",
            "prompt": "제목·본문·캡션 등 텍스트 위계를 맞추는 타이포 컴포넌트·체계.",
            "answer": "Typography",
            "displayAnswer": "Typography",
            "aliases": [],
            "example": "예: 페이지 제목은 Typography의 h1 스타일로 통일한다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-alert",
            "title": "알림 배너",
            "section": "피드백",
            "prompt": "성공·경고·오류 메시지를 페이지 안에 고정해 보여 주는 피드백 UI.",
            "answer": "Alert",
            "displayAnswer": "Alert",
            "aliases": [],
            "example": "예: 저장 실패는 alert로 원인을 보여 준다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-progress",
            "title": "진행 표시",
            "section": "피드백",
            "prompt": "작업·로딩 진행률을 막대나 원형으로 보여 주는 UI.",
            "answer": "Progress Bar",
            "displayAnswer": "Progress Bar",
            "aliases": [
              "Progress",
              "Circular Progress"
            ],
            "example": "예: 파일 업로드는 progress bar로 진행률을 표시한다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-app-bar",
            "title": "앱 바",
            "section": "서피스",
            "prompt": "화면 상단에 고정되는 앱용 헤더 바. 로고·메뉴·액션을 담는다.",
            "answer": "App Bar",
            "displayAnswer": "App Bar",
            "aliases": [
              "AppBar"
            ],
            "example": "예: 대시보드 상단은 app bar에 검색과 프로필을 둔다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-bottom-nav",
            "title": "하단 네비게이션",
            "section": "네비게이션",
            "prompt": "모바일 화면 하단에 주요 탭을 고정하는 네비게이션.",
            "answer": "Bottom Navigation",
            "displayAnswer": "Bottom Navigation",
            "aliases": [],
            "example": "예: 홈·검색·마이페이지는 bottom navigation으로 전환한다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-menu",
            "title": "메뉴",
            "section": "네비게이션",
            "prompt": "클릭 시 항목 목록이 펼쳐지는 드롭다운형 선택 UI.",
            "answer": "Menu",
            "displayAnswer": "Menu",
            "aliases": [
              "Dropdown Menu"
            ],
            "example": "예: 계정 설정은 아바타 옆 menu로 연다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-stepper",
            "title": "스테퍼",
            "section": "네비게이션",
            "prompt": "다단계 절차의 현재 단계를 순서대로 보여 주는 네비게이션.",
            "answer": "Stepper",
            "displayAnswer": "Stepper",
            "aliases": [],
            "example": "예: 가입 흐름은 stepper로 1·2·3단계를 표시한다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-popover",
            "title": "팝오버",
            "section": "오버레이 / 알림",
            "prompt": "앵커 요소 옆에 떠서 추가 내용·액션을 보여 주는 오버레이.",
            "answer": "Popover",
            "displayAnswer": "Popover",
            "aliases": [],
            "example": "예: 필터 상세는 버튼 옆 popover로 연다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-data-grid",
            "title": "데이터 그리드",
            "section": "데이터 표시",
            "prompt": "정렬·필터·페이징이 있는 표 형태의 대용량 데이터 UI.",
            "answer": "Data Grid",
            "displayAnswer": "Data Grid",
            "aliases": [],
            "example": "예: 주문 목록 관리는 data grid로 구현한다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-date-picker",
            "title": "날짜 선택",
            "section": "입력",
            "prompt": "달력 UI로 날짜·기간을 고르는 입력 컴포넌트.",
            "answer": "Date Picker",
            "displayAnswer": "Date Picker",
            "aliases": [],
            "example": "예: 예약일은 date picker로 고르게 한다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-combobox",
            "title": "콤보박스",
            "section": "입력",
            "prompt": "입력과 목록 선택을 합친 검색 가능 선택 UI. 헤드리스 UI에서 자주 쓴다.",
            "answer": "Combobox",
            "displayAnswer": "Combobox",
            "aliases": [
              "Comboboxes"
            ],
            "example": "예: 담당자 지정은 combobox로 검색해 고른다.",
            "relatedDrills": []
          },
          {
            "id": "web-ui-primary-button",
            "title": "프라이머리 버튼",
            "section": "실무 패턴",
            "prompt": "화면에서 가장 중요한 행동을 강조하는 기본(강조) 버튼.",
            "answer": "Primary Button",
            "displayAnswer": "Primary Button",
            "aliases": [],
            "example": "예: 저장은 primary button, 취소는 텍스트 버튼으로 둔다.",
            "relatedDrills": []
          }
        ]
      }
    ]
  },
  {
    "id": "terms-rest",
    "label": "REST",
    "folderName": "rest",
    "lessons": [
      {
        "id": "rule-rest-readme-rest",
        "title": "REST 실무 용어",
        "fileName": "rest-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/rest-terms.yaml",
        "parts": [
          {
            "id": "rule-rest-readme-rest-term-1",
            "title": "요청",
            "section": "HTTP 기본",
            "prompt": "클라이언트가 서버에 보내는 요청 전체.",
            "answer": "Request",
            "displayAnswer": "요청[Request]",
            "aliases": [],
            "example": "예: 로그인 요청[Request]에는 보통 헤더와 바디가 함께 들어간다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-2",
            "title": "응답",
            "section": "HTTP 기본",
            "prompt": "서버가 클라이언트에게 돌려주는 응답 전체.",
            "answer": "Response",
            "displayAnswer": "응답[Response]",
            "aliases": [],
            "example": "예: 성공 시 응답[Response] 바디에 사용자 정보를 내려준다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-3",
            "title": "헤더",
            "section": "HTTP 기본",
            "prompt": "요청이나 응답의 부가 정보를 담는 메타데이터 영역.",
            "answer": "Header",
            "displayAnswer": "헤더[Header]",
            "aliases": [],
            "example": "예: `Authorization`은 대표적인 요청 헤더[Header]다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-4",
            "title": "바디",
            "section": "HTTP 기본",
            "prompt": "실제 데이터 본문을 담는 영역.",
            "answer": "Body",
            "displayAnswer": "바디[Body]",
            "aliases": [],
            "example": "예: POST 요청의 바디[Body]에는 JSON 데이터를 넣는다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-5",
            "title": "상태 코드",
            "section": "HTTP 기본",
            "prompt": "응답 결과를 숫자로 표현하는 규약.",
            "answer": "Status Code",
            "displayAnswer": "상태 코드[Status Code]",
            "aliases": [],
            "example": "예: 정상 조회면 `200`, 생성 성공이면 `201`을 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-6",
            "title": "엔드포인트",
            "section": "HTTP 기본",
            "prompt": "서버 자원을 식별하는 주소.",
            "answer": "Endpoint",
            "displayAnswer": "엔드포인트[Endpoint]",
            "aliases": [],
            "example": "예: 사용자 목록 엔드포인트[Endpoint]는 `/users`일 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-7",
            "title": "조회",
            "section": "HTTP 메서드",
            "prompt": "데이터를 조회할 때 쓰는 메서드.",
            "answer": "GET",
            "displayAnswer": "조회[GET]",
            "aliases": [],
            "example": "예: 사용자 목록 조회[GET]는 보통 `/users`로 요청한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-8",
            "title": "생성",
            "section": "HTTP 메서드",
            "prompt": "새 데이터를 만들 때 쓰는 메서드.",
            "answer": "POST",
            "displayAnswer": "생성[POST]",
            "aliases": [],
            "example": "예: 회원 가입 생성[POST] 요청은 `/users`로 보낼 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-9",
            "title": "수정",
            "section": "HTTP 메서드",
            "prompt": "기존 데이터를 전체 수정할 때 자주 쓰는 메서드.",
            "answer": "PUT",
            "displayAnswer": "수정[PUT]",
            "aliases": [],
            "example": "예: 프로필 전체 수정[PUT]은 전체 필드를 보내는 편이다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-10",
            "title": "부분 수정",
            "section": "HTTP 메서드",
            "prompt": "기존 데이터를 일부 수정할 때 자주 쓰는 메서드.",
            "answer": "PATCH",
            "displayAnswer": "부분 수정[PATCH]",
            "aliases": [],
            "example": "예: 닉네임만 바꿀 때는 부분 수정[PATCH]가 자연스럽다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-11",
            "title": "삭제",
            "section": "HTTP 메서드",
            "prompt": "데이터를 삭제할 때 쓰는 메서드.",
            "answer": "DELETE",
            "displayAnswer": "삭제[DELETE]",
            "aliases": [],
            "example": "예: 계정 삭제[DELETE] 요청은 `/users/1`처럼 보낼 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-12",
            "title": "성공",
            "section": "자주 보는 상태 코드",
            "prompt": "요청이 정상적으로 처리되었음을 뜻하는 코드.",
            "answer": "200 OK",
            "displayAnswer": "성공[200 OK]",
            "aliases": [],
            "example": "예: 목록 조회 성공이면 `200 OK`를 반환한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-13",
            "title": "생성 완료",
            "section": "자주 보는 상태 코드",
            "prompt": "새 리소스가 생성되었음을 뜻하는 코드.",
            "answer": "201 Created",
            "displayAnswer": "생성 완료[201 Created]",
            "aliases": [],
            "example": "예: 게시글 작성 성공 후 `201 Created`를 내려준다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-14",
            "title": "잘못된 요청",
            "section": "자주 보는 상태 코드",
            "prompt": "잘못된 요청 형식이나 유효성 오류를 뜻하는 코드.",
            "answer": "400 Bad Request",
            "displayAnswer": "잘못된 요청[400 Bad Request]",
            "aliases": [],
            "example": "예: 필수 값이 빠지면 `400 Bad Request`를 반환한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-15",
            "title": "인증 실패",
            "section": "자주 보는 상태 코드",
            "prompt": "인증 정보가 없거나 잘못된 상태를 뜻하는 코드.",
            "answer": "401 Unauthorized",
            "displayAnswer": "인증 실패[401 Unauthorized]",
            "aliases": [],
            "example": "예: 토큰이 없으면 `401 Unauthorized`를 내려준다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-16",
            "title": "권한 없음",
            "section": "자주 보는 상태 코드",
            "prompt": "권한은 있지만 해당 작업이 허용되지 않음을 뜻하는 코드.",
            "answer": "403 Forbidden",
            "displayAnswer": "권한 없음[403 Forbidden]",
            "aliases": [],
            "example": "예: 일반 유저가 관리자 API를 호출하면 `403 Forbidden`이다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-17",
            "title": "찾을 수 없음",
            "section": "자주 보는 상태 코드",
            "prompt": "요청한 자원이 존재하지 않음을 뜻하는 코드.",
            "answer": "404 Not Found",
            "displayAnswer": "찾을 수 없음[404 Not Found]",
            "aliases": [],
            "example": "예: 없는 게시글 ID면 `404 Not Found`를 반환한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-18",
            "title": "서버 오류",
            "section": "자주 보는 상태 코드",
            "prompt": "서버 내부 오류를 뜻하는 코드.",
            "answer": "500 Internal Server Error",
            "displayAnswer": "서버 오류[500 Internal Server Error]",
            "aliases": [],
            "example": "예: 처리 중 예외가 나면 `500 Internal Server Error`가 날 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-19",
            "title": "쿠키",
            "section": "인증 / 세션 / 토큰",
            "prompt": "브라우저에 저장되고 요청마다 자동으로 전송될 수 있는 작은 데이터 조각.",
            "answer": "Cookie",
            "displayAnswer": "쿠키[Cookie]",
            "aliases": [],
            "example": "예: 세션 기반 로그인에서는 쿠키[Cookie]에 세션 식별자를 담는다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-20",
            "title": "세션",
            "section": "인증 / 세션 / 토큰",
            "prompt": "서버가 사용자 로그인 상태를 저장해 두는 방식.",
            "answer": "Session",
            "displayAnswer": "세션[Session]",
            "aliases": [],
            "example": "예: 서버는 세션[Session] 저장소에서 로그인 상태를 확인한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-21",
            "title": "토큰 인증",
            "section": "인증 / 세션 / 토큰",
            "prompt": "서버가 상태를 저장하지 않고, 클라이언트가 토큰을 보관하는 방식.",
            "answer": "Token Authentication",
            "displayAnswer": "토큰 인증[Token Authentication]",
            "aliases": [],
            "example": "예: 모바일 앱은 토큰 인증[Token Authentication]을 많이 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-22",
            "title": "제이더블유티",
            "section": "인증 / 세션 / 토큰",
            "prompt": "JSON 형태로 서명된 토큰을 이용하는 인증 방식.",
            "answer": "JWT",
            "displayAnswer": "제이더블유티[JWT]",
            "aliases": [],
            "example": "예: 로그인 성공 후 JWT를 발급해서 API 호출에 사용한다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-23",
            "title": "베어러 토큰",
            "section": "인증 / 세션 / 토큰",
            "prompt": "인증 정보를 요청 헤더에 넣어 보내는 방식.",
            "answer": "Bearer Token",
            "displayAnswer": "베어러 토큰[Bearer Token]",
            "aliases": [],
            "example": "예: `Authorization: Bearer <token>` 형식으로 보낸다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-24",
            "title": "동일 출처 정책",
            "section": "CORS / 브라우저 보안",
            "prompt": "브라우저가 다른 출처 간 요청을 제한하는 보안 정책.",
            "answer": "Same-Origin Policy",
            "displayAnswer": "동일 출처 정책[Same-Origin Policy]",
            "aliases": [],
            "example": "예: 포트가 다르면 동일 출처 정책[Same-Origin Policy]에 걸릴 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-25",
            "title": "교차 출처 리소스 공유",
            "section": "CORS / 브라우저 보안",
            "prompt": "다른 출처 요청을 허용할지 정하는 브라우저 보안 규칙.",
            "answer": "CORS",
            "displayAnswer": "교차 출처 리소스 공유[CORS]",
            "aliases": [],
            "example": "예: 프론트와 API 서버 도메인이 다르면 CORS 설정이 필요하다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-26",
            "title": "프리플라이트 요청",
            "section": "CORS / 브라우저 보안",
            "prompt": "본 요청 전에 브라우저가 미리 보내는 사전 확인 요청.",
            "answer": "Preflight Request",
            "displayAnswer": "프리플라이트 요청[Preflight Request]",
            "aliases": [],
            "example": "예: `OPTIONS` 메서드로 프리플라이트 요청[Preflight Request]이 먼저 간다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-27",
            "title": "출처 허용 헤더",
            "section": "CORS / 브라우저 보안",
            "prompt": "서버가 어떤 출처를 허용하는지 알려주는 응답 헤더.",
            "answer": "Access-Control-Allow-Origin",
            "displayAnswer": "출처 허용 헤더[Access-Control-Allow-Origin]",
            "aliases": [],
            "example": "예: 개발 환경에서는 `http://localhost:3000`만 허용할 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-31",
            "title": "페이지네이션",
            "section": "실무 패턴",
            "prompt": "페이지 목록을 여러 조각으로 나눠서 조회하는 패턴.",
            "answer": "Pagination",
            "displayAnswer": "페이지네이션[Pagination]",
            "aliases": [],
            "example": "예: `/posts?page=2&limit=20`처럼 페이지네이션을 건다.",
            "relatedDrills": []
          },
          {
            "id": "rule-rest-readme-rest-term-32",
            "title": "멱등성",
            "section": "실무 패턴",
            "prompt": "같은 요청을 여러 번 보내도 결과가 같아야 하는 성질.",
            "answer": "Idempotency",
            "displayAnswer": "멱등성[Idempotency]",
            "aliases": [],
            "example": "예: 같은 삭제 요청을 두 번 보내도 최종 상태는 같아야 한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-content-type",
            "title": "Content-Type",
            "section": "주요 헤더",
            "prompt": "요청·응답 바디의 데이터 형식을 알려 주는 헤더. JSON이면 application/json을 쓴다.",
            "answer": "Content-Type",
            "displayAnswer": "Content-Type",
            "aliases": [],
            "example": "예: POST JSON을 보낼 때 Content-Type을 application/json으로 둔다.",
            "relatedDrills": []
          },
          {
            "id": "rest-authorization",
            "title": "Authorization",
            "section": "주요 헤더",
            "prompt": "로그인 토큰 등 인증 정보를 담는 요청 헤더. Bearer 토큰과 함께 자주 쓴다.",
            "answer": "Authorization",
            "displayAnswer": "Authorization",
            "aliases": [],
            "example": "예: Authorization 헤더에 Bearer 토큰을 넣어 API를 호출한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-accept",
            "title": "Accept",
            "section": "주요 헤더",
            "prompt": "클라이언트가 받고 싶은 응답 형식을 서버에 알리는 헤더.",
            "answer": "Accept",
            "displayAnswer": "Accept",
            "aliases": [],
            "example": "예: Accept에 application/json을 넣으면 JSON 응답을 기대한다는 뜻이다.",
            "relatedDrills": []
          },
          {
            "id": "rest-application-json",
            "title": "JSON 바디",
            "section": "바디 전송 방식",
            "prompt": "본문을 JSON으로 보내는 가장 흔한 REST 방식. Content-Type은 application/json.",
            "answer": "application/json",
            "displayAnswer": "application/json",
            "aliases": [
              "JSON Body"
            ],
            "example": "예: 로그인 API는 보통 application/json으로 id와 pw를 보낸다.",
            "relatedDrills": []
          },
          {
            "id": "rest-form-urlencoded",
            "title": "폼 URL 인코딩",
            "section": "바디 전송 방식",
            "prompt": "HTML form처럼 key=value&... 형태로 바디를 보내는 방식.",
            "answer": "application/x-www-form-urlencoded",
            "displayAnswer": "application/x-www-form-urlencoded",
            "aliases": [
              "Form URL Encoded"
            ],
            "example": "예: 전통적인 로그인 form은 application/x-www-form-urlencoded를 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "rest-multipart",
            "title": "멀티파트",
            "section": "바디 전송 방식",
            "prompt": "파일 업로드처럼 텍스트와 바이너리를 한 요청에 섞어 보낼 때 쓰는 바디 형식.",
            "answer": "multipart/form-data",
            "displayAnswer": "multipart/form-data",
            "aliases": [
              "Multipart"
            ],
            "example": "예: 프로필 이미지 업로드는 multipart/form-data로 보낸다.",
            "relatedDrills": []
          },
          {
            "id": "rest-local-storage",
            "title": "로컬 스토리지",
            "section": "브라우저 저장소",
            "prompt": "브라우저에 장기 저장하는 키-값 저장소. 탭을 닫아도 남고, 요청에 자동으로 안 붙는다.",
            "answer": "localStorage",
            "displayAnswer": "localStorage",
            "aliases": [],
            "example": "예: JWT를 localStorage에 두고 Authorization 헤더에 직접 넣는다.",
            "relatedDrills": []
          },
          {
            "id": "rest-session-storage",
            "title": "세션 스토리지",
            "section": "브라우저 저장소",
            "prompt": "탭(세션)이 열려 있는 동안만 유지되는 브라우저 키-값 저장소.",
            "answer": "sessionStorage",
            "displayAnswer": "sessionStorage",
            "aliases": [],
            "example": "예: 임시 입력값은 sessionStorage에 두면 탭을 닫을 때 사라진다.",
            "relatedDrills": []
          },
          {
            "id": "rest-httponly",
            "title": "HttpOnly 쿠키",
            "section": "브라우저 저장소",
            "prompt": "JavaScript에서 읽지 못하게 막아 XSS로 토큰이 훔쳐지기 어렵게 하는 쿠키 옵션.",
            "answer": "HttpOnly",
            "displayAnswer": "HttpOnly",
            "aliases": [
              "httpOnly"
            ],
            "example": "예: 세션 쿠키는 httpOnly로 심어 document.cookie로 못 읽게 한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-options",
            "title": "OPTIONS",
            "section": "HTTP 메서드",
            "prompt": "CORS 프리플라이트처럼 본 요청 전에 허용 여부를 묻는 데 쓰는 메서드.",
            "answer": "OPTIONS",
            "displayAnswer": "OPTIONS",
            "aliases": [],
            "example": "예: 브라우저가 먼저 OPTIONS로 서버 CORS 허용을 확인한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-credentials",
            "title": "credentials",
            "section": "CORS / 브라우저 보안",
            "prompt": "교차 출처 요청에 쿠키를 포함할지 정하는 옵션. 서버도 Allow-Credentials를 허용해야 한다.",
            "answer": "credentials",
            "displayAnswer": "credentials",
            "aliases": [
              "Access-Control-Allow-Credentials"
            ],
            "example": "예: fetch에 credentials include와 서버 CORS credentials true를 맞춘다.",
            "relatedDrills": []
          },
          {
            "id": "rest-openapi",
            "title": "OpenAPI",
            "section": "API 계약",
            "prompt": "REST API의 경로·메서드·스키마·응답을 기계가 읽을 수 있게 기술하는 명세 표준. Swagger UI와 함께 쓴다.",
            "answer": "OpenAPI",
            "displayAnswer": "OpenAPI[OpenAPI / Swagger]",
            "aliases": [
              "Swagger",
              "OpenAPI Spec"
            ],
            "example": "예: 프론트는 OpenAPI 스키마로 타입과 목을 맞춘다.",
            "relatedDrills": []
          },
          {
            "id": "rest-api-contract",
            "title": "API 계약",
            "section": "API 계약",
            "prompt": "프론트와 백엔드가 합의한 요청·응답·에러 규칙. 명세가 바뀌면 양쪽이 같이 맞춘다.",
            "answer": "API Contract",
            "displayAnswer": "API 계약[API Contract]",
            "aliases": [
              "Contract"
            ],
            "example": "예: 필드명을 바꾸기 전에 API Contract를 먼저 갱신한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-status-204",
            "title": "내용 없음",
            "section": "자주 보는 상태 코드",
            "prompt": "성공했지만 돌려줄 본문이 없다는 상태 코드.",
            "answer": "204 No Content",
            "displayAnswer": "내용 없음[204 No Content]",
            "aliases": [],
            "example": "예: 삭제 성공은 내용 없음[204 No Content]으로 응답한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-status-304",
            "title": "변경 없음",
            "section": "자주 보는 상태 코드",
            "prompt": "캐시한 내용을 그대로 써도 된다는 상태 코드.",
            "answer": "304 Not Modified",
            "displayAnswer": "변경 없음[304 Not Modified]",
            "aliases": [],
            "example": "예: 변경 없음[304 Not Modified]이면 본문을 받지 않는다.",
            "relatedDrills": []
          },
          {
            "id": "rest-status-409",
            "title": "충돌",
            "section": "자주 보는 상태 코드",
            "prompt": "현재 자원 상태와 맞지 않아 처리할 수 없다는 상태 코드.",
            "answer": "409 Conflict",
            "displayAnswer": "충돌[409 Conflict]",
            "aliases": [],
            "example": "예: 이메일이 중복되면 충돌[409 Conflict]을 돌려준다.",
            "relatedDrills": []
          },
          {
            "id": "rest-status-422",
            "title": "처리 불가 내용",
            "section": "자주 보는 상태 코드",
            "prompt": "형식은 맞지만 값이 규칙에 어긋난다는 상태 코드.",
            "answer": "422 Unprocessable Entity",
            "displayAnswer": "처리 불가 내용[422 Unprocessable Entity]",
            "aliases": [],
            "example": "예: 검증 실패는 처리 불가 내용[422 Unprocessable Entity]으로 준다.",
            "relatedDrills": []
          },
          {
            "id": "rest-status-429",
            "title": "요청 과다",
            "section": "자주 보는 상태 코드",
            "prompt": "정해진 한도를 넘겨 요청했다는 상태 코드.",
            "answer": "429 Too Many Requests",
            "displayAnswer": "요청 과다[429 Too Many Requests]",
            "aliases": [],
            "example": "예: 요청 과다[429 Too Many Requests]면 잠시 뒤 재시도한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-status-502",
            "title": "잘못된 게이트웨이",
            "section": "자주 보는 상태 코드",
            "prompt": "프록시가 상위 서버에서 잘못된 응답을 받았다는 상태 코드.",
            "answer": "502 Bad Gateway",
            "displayAnswer": "잘못된 게이트웨이[502 Bad Gateway]",
            "aliases": [],
            "example": "예: 앱 서버가 죽어 잘못된 게이트웨이[502 Bad Gateway]가 났다.",
            "relatedDrills": []
          },
          {
            "id": "rest-status-503",
            "title": "서비스 이용 불가",
            "section": "자주 보는 상태 코드",
            "prompt": "과부하나 점검으로 지금 처리할 수 없다는 상태 코드.",
            "answer": "503 Service Unavailable",
            "displayAnswer": "서비스 이용 불가[503 Service Unavailable]",
            "aliases": [],
            "example": "예: 점검 중에는 서비스 이용 불가[503 Service Unavailable]를 준다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-authentication",
            "title": "인증",
            "section": "보안",
            "prompt": "요청한 사람이 누구인지 확인하는 것. 실패하면 401.",
            "answer": "Authentication",
            "displayAnswer": "인증[Authentication]",
            "aliases": [],
            "example": "예: 토큰이 만료되면 인증[Authentication]부터 실패한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-authorization",
            "title": "인가",
            "section": "보안",
            "prompt": "확인된 사용자가 그 일을 할 권한이 있는지 판단하는 것. 실패하면 403.",
            "answer": "Authorization",
            "displayAnswer": "인가[Authorization]",
            "aliases": [],
            "example": "예: 로그인했어도 인가[Authorization]가 없으면 403이다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-oauth",
            "title": "오어스",
            "section": "보안",
            "prompt": "비밀번호를 넘기지 않고 다른 서비스에 권한을 위임하는 표준.",
            "answer": "OAuth",
            "displayAnswer": "오어스[OAuth]",
            "aliases": [],
            "example": "예: 구글 로그인은 오어스[OAuth]로 연동한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-sso",
            "title": "통합 로그인",
            "section": "보안",
            "prompt": "한 번 로그인으로 여러 서비스를 쓰게 하는 방식.",
            "answer": "SSO",
            "displayAnswer": "통합 로그인[SSO]",
            "aliases": [],
            "example": "예: 사내 도구는 통합 로그인[SSO]으로 묶었다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-refresh-token",
            "title": "리프레시 토큰",
            "section": "보안",
            "prompt": "만료된 액세스 토큰을 다시 발급받는 데 쓰는 토큰.",
            "answer": "Refresh Token",
            "displayAnswer": "리프레시 토큰[Refresh Token]",
            "aliases": [],
            "example": "예: 리프레시 토큰[Refresh Token]은 HttpOnly 쿠키에 둔다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-xss",
            "title": "교차 사이트 스크립팅",
            "section": "보안",
            "prompt": "공격자의 스크립트가 다른 사용자의 브라우저에서 실행되는 공격.",
            "answer": "XSS",
            "displayAnswer": "교차 사이트 스크립팅[XSS]",
            "aliases": [],
            "example": "예: 사용자 입력을 그대로 그리면 교차 사이트 스크립팅[XSS]에 뚫린다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-csrf",
            "title": "교차 사이트 요청 위조",
            "section": "보안",
            "prompt": "로그인된 사용자의 브라우저로 원치 않는 요청을 보내게 하는 공격.",
            "answer": "CSRF",
            "displayAnswer": "교차 사이트 요청 위조[CSRF]",
            "aliases": [],
            "example": "예: 쿠키 인증이면 교차 사이트 요청 위조[CSRF] 방어가 필요하다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-sql-injection",
            "title": "SQL 삽입",
            "section": "보안",
            "prompt": "입력값으로 쿼리 구조를 바꿔 DB를 조작하는 공격.",
            "answer": "SQL Injection",
            "displayAnswer": "SQL 삽입[SQL Injection]",
            "aliases": [],
            "example": "예: 파라미터 바인딩으로 SQL 삽입[SQL Injection]을 막는다.",
            "relatedDrills": []
          },
          {
            "id": "rest-security-hashing",
            "title": "해싱",
            "section": "보안",
            "prompt": "원문을 되돌릴 수 없는 고정 길이 값으로 바꾸는 것.",
            "answer": "Hashing",
            "displayAnswer": "해싱[Hashing]",
            "aliases": [],
            "example": "예: 비밀번호는 암호화가 아니라 해싱[Hashing]해서 저장한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-network-https",
            "title": "보안 HTTP",
            "section": "네트워크",
            "prompt": "TLS로 통신 내용을 암호화한 HTTP.",
            "answer": "HTTPS",
            "displayAnswer": "보안 HTTP[HTTPS]",
            "aliases": [],
            "example": "예: 쿠키의 Secure 옵션은 보안 HTTP[HTTPS]에서만 전송된다.",
            "relatedDrills": []
          },
          {
            "id": "rest-network-dns",
            "title": "도메인 이름 시스템",
            "section": "네트워크",
            "prompt": "도메인 이름을 IP 주소로 바꿔 주는 시스템.",
            "answer": "DNS",
            "displayAnswer": "도메인 이름 시스템[DNS]",
            "aliases": [],
            "example": "예: 도메인을 옮긴 뒤 도메인 이름 시스템[DNS] 전파를 기다렸다.",
            "relatedDrills": []
          },
          {
            "id": "rest-network-cdn",
            "title": "콘텐츠 전송 네트워크",
            "section": "네트워크",
            "prompt": "사용자와 가까운 서버에서 정적 파일을 내려 주는 네트워크.",
            "answer": "CDN",
            "displayAnswer": "콘텐츠 전송 네트워크[CDN]",
            "aliases": [],
            "example": "예: 이미지는 콘텐츠 전송 네트워크[CDN]로 서빙한다.",
            "relatedDrills": []
          },
          {
            "id": "rest-network-websocket",
            "title": "웹소켓",
            "section": "네트워크",
            "prompt": "서버와 클라이언트가 연결을 유지하며 양방향으로 통신하는 프로토콜.",
            "answer": "WebSocket",
            "displayAnswer": "웹소켓[WebSocket]",
            "aliases": [],
            "example": "예: 채팅은 웹소켓[WebSocket]으로 구현했다.",
            "relatedDrills": []
          },
          {
            "id": "rest-network-polling",
            "title": "폴링",
            "section": "네트워크",
            "prompt": "변경이 있는지 일정 간격으로 서버에 계속 묻는 방식.",
            "answer": "Polling",
            "displayAnswer": "폴링[Polling]",
            "aliases": [],
            "example": "예: 처리 상태는 5초 폴링[Polling]으로 확인한다.",
            "relatedDrills": []
          }
        ]
      }
    ]
  },
  {
    "id": "terms-sql",
    "label": "SQL·DB",
    "folderName": "sql",
    "lessons": [
      {
        "id": "knowledge-terms-sql",
        "title": "SQL·DB 실무 용어",
        "fileName": "sql-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/sql-terms.yaml",
        "parts": [
          {
            "id": "sql-rdb",
            "title": "관계형 데이터베이스",
            "section": "데이터 모델",
            "prompt": "데이터를 표(테이블)로 나누고, 키로 관계를 맺어 저장·조회하는 데이터베이스. MySQL, PostgreSQL, Oracle이 대표적이다.",
            "answer": "RDB",
            "displayAnswer": "RDB",
            "aliases": [
              "Relational Database",
              "RDBMS"
            ],
            "example": "예: 주문·회원처럼 관계가 분명한 도메인은 RDB가 잘 맞는다.",
            "relatedDrills": []
          },
          {
            "id": "sql-pk",
            "title": "기본 키",
            "section": "키 / 제약",
            "prompt": "테이블에서 각 행을 유일하게 식별하는 컬럼(또는 컬럼 조합). null을 허용하지 않는다.",
            "answer": "PK",
            "displayAnswer": "PK",
            "aliases": [
              "Primary Key"
            ],
            "example": "예: users 테이블의 user_id를 PK로 잡았다.",
            "relatedDrills": []
          },
          {
            "id": "sql-fk",
            "title": "외래 키",
            "section": "키 / 제약",
            "prompt": "다른 테이블의 기본 키를 참조해 두 테이블의 관계를 강제하는 키.",
            "answer": "FK",
            "displayAnswer": "FK",
            "aliases": [
              "Foreign Key"
            ],
            "example": "예: orders.user_id는 users.user_id를 가리키는 FK다.",
            "relatedDrills": []
          },
          {
            "id": "sql-uk",
            "title": "유니크 키",
            "section": "키 / 제약",
            "prompt": "테이블 안에서 값이 중복되지 않도록 막는 제약. 기본 키가 아니어도 쓸 수 있다.",
            "answer": "UK",
            "displayAnswer": "UK",
            "aliases": [
              "Unique Key",
              "Unique Constraint"
            ],
            "example": "예: 이메일은 로그인 식별자라서 UK로 걸었다.",
            "relatedDrills": []
          },
          {
            "id": "sql-ddl",
            "title": "데이터 정의 언어",
            "section": "SQL 분류",
            "prompt": "테이블·인덱스·제약 같은 구조(스키마)를 정의하거나 변경하는 SQL 분류. CREATE, ALTER, DROP이 여기에 속한다.",
            "answer": "DDL",
            "displayAnswer": "DDL",
            "aliases": [
              "Data Definition Language"
            ],
            "example": "예: 컬럼 추가는 DDL이라 배포 전에 마이그레이션으로 돌린다.",
            "relatedDrills": []
          },
          {
            "id": "sql-dml",
            "title": "데이터 조작 언어",
            "section": "SQL 분류",
            "prompt": "테이블의 실제 데이터를 조회·추가·수정·삭제하는 SQL 분류. SELECT, INSERT, UPDATE, DELETE가 여기에 속한다.",
            "answer": "DML",
            "displayAnswer": "DML",
            "aliases": [
              "Data Manipulation Language"
            ],
            "example": "예: 주문 상태 변경은 DML이라 트랜잭션으로 묶는 편이 안전하다.",
            "relatedDrills": []
          },
          {
            "id": "sql-schema",
            "title": "스키마",
            "section": "데이터 모델",
            "prompt": "테이블, 컬럼, 타입, 제약 등 데이터베이스 구조의 설계·정의.",
            "answer": "Schema",
            "displayAnswer": "Schema",
            "aliases": [],
            "example": "예: 스키마를 먼저 잡고 나서 애플리케이션 코드를 맞췄다.",
            "relatedDrills": []
          },
          {
            "id": "sql-index",
            "title": "인덱스",
            "section": "성능 / 구조",
            "prompt": "특정 컬럼 조회를 빠르게 하기 위해 미리 만들어 두는 검색용 자료구조. 쓰기가 조금 느려질 수 있다.",
            "answer": "Index",
            "displayAnswer": "Index",
            "aliases": [],
            "example": "예: WHERE email = ?가 잦아서 email에 index를 걸었다.",
            "relatedDrills": []
          },
          {
            "id": "sql-constraint",
            "title": "제약 조건",
            "section": "키 / 제약",
            "prompt": "PK, FK, UK, NOT NULL처럼 데이터가 지켜야 할 규칙을 데이터베이스가 강제하는 장치.",
            "answer": "Constraint",
            "displayAnswer": "Constraint",
            "aliases": [],
            "example": "예: 음수 재고를 막으려면 check constraint를 검토한다.",
            "relatedDrills": []
          },
          {
            "id": "sql-normalization",
            "title": "정규화",
            "section": "데이터 모델",
            "prompt": "중복을 줄이고 이상(anomaly)을 막기 위해 테이블을 논리적으로 나누는 설계 과정.",
            "answer": "Normalization",
            "displayAnswer": "Normalization",
            "aliases": [],
            "example": "예: 주소가 여러 곳에 중복되어 정규화로 분리했다.",
            "relatedDrills": []
          },
          {
            "id": "sql-transaction",
            "title": "트랜잭션",
            "section": "트랜잭션",
            "prompt": "여러 쿼리를 하나의 작업 단위로 묶어 전부 성공하거나 전부 취소되게 하는 개념.",
            "answer": "Transaction",
            "displayAnswer": "Transaction",
            "aliases": [],
            "example": "예: 이체 로직은 transaction으로 묶어야 중간 실패를 막는다.",
            "relatedDrills": []
          },
          {
            "id": "sql-acid",
            "title": "ACID",
            "section": "트랜잭션",
            "prompt": "트랜잭션이 보장해야 할 네 성질. 원자성[Atomicity], 일관성[Consistency], 격리[Isolation], 지속성[Durability].",
            "answer": "ACID",
            "displayAnswer": "ACID",
            "aliases": [],
            "example": "예: 결제 DB는 ACID를 강하게 보장하는 쪽을 고른다.",
            "relatedDrills": []
          },
          {
            "id": "sql-orm",
            "title": "객체 관계 매핑",
            "section": "도구",
            "prompt": "Prisma, TypeORM처럼 테이블을 객체로 다루게 해 SQL을 직접 쓰지 않아도 되게 하는 기법.",
            "answer": "ORM",
            "displayAnswer": "ORM",
            "aliases": [
              "Object-Relational Mapping"
            ],
            "example": "예: Prisma 같은 ORM을 쓰면 쿼리를 코드로 작성할 수 있다.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-join",
            "title": "조인",
            "section": "운영 / 확장",
            "prompt": "여러 테이블의 행을 연결 조건으로 합쳐 조회하는 것.",
            "answer": "Join",
            "displayAnswer": "조인[Join]",
            "aliases": [],
            "example": "예: 주문과 사용자를 조인[Join]해서 내려 주자.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-migration",
            "title": "마이그레이션",
            "section": "운영 / 확장",
            "prompt": "스키마 변경을 버전으로 관리해 적용하는 작업.",
            "answer": "Migration",
            "displayAnswer": "마이그레이션[Migration]",
            "aliases": [],
            "example": "예: 컬럼 추가는 마이그레이션[Migration] 파일로 남긴다.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-replication",
            "title": "복제",
            "section": "운영 / 확장",
            "prompt": "데이터를 여러 DB 서버에 복사해 두는 구성.",
            "answer": "Replication",
            "displayAnswer": "복제[Replication]",
            "aliases": [],
            "example": "예: 읽기 부하는 복제[Replication] 서버로 분산한다.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-sharding",
            "title": "샤딩",
            "section": "운영 / 확장",
            "prompt": "데이터를 기준값에 따라 여러 DB로 나눠 저장하는 방식.",
            "answer": "Sharding",
            "displayAnswer": "샤딩[Sharding]",
            "aliases": [],
            "example": "예: 테이블이 너무 커져 샤딩[Sharding]을 검토한다.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-nosql",
            "title": "비관계형 DB",
            "section": "운영 / 확장",
            "prompt": "테이블 관계 대신 문서나 키-값 등으로 저장하는 DB.",
            "answer": "NoSQL",
            "displayAnswer": "비관계형 DB[NoSQL]",
            "aliases": [],
            "example": "예: 세션 저장은 비관계형 DB[NoSQL]가 어울린다.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-isolation-level",
            "title": "격리 수준",
            "section": "운영 / 확장",
            "prompt": "동시에 도는 트랜잭션이 서로의 변경을 얼마나 보는지 정한 단계.",
            "answer": "Isolation Level",
            "displayAnswer": "격리 수준[Isolation Level]",
            "aliases": [],
            "example": "예: 격리 수준[Isolation Level]을 올리면 동시 처리량이 줄어든다.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-connection-pool",
            "title": "커넥션 풀",
            "section": "운영 / 확장",
            "prompt": "DB 연결을 미리 만들어 두고 재사용하는 묶음.",
            "answer": "Connection Pool",
            "displayAnswer": "커넥션 풀[Connection Pool]",
            "aliases": [],
            "example": "예: 커넥션 풀[Connection Pool]이 고갈돼 요청이 밀렸다.",
            "relatedDrills": []
          },
          {
            "id": "sql-extra-soft-delete",
            "title": "소프트 삭제",
            "section": "운영 / 확장",
            "prompt": "행을 지우지 않고 삭제 표시만 남기는 방식.",
            "answer": "Soft Delete",
            "displayAnswer": "소프트 삭제[Soft Delete]",
            "aliases": [],
            "example": "예: 주문은 소프트 삭제[Soft Delete]로 이력을 남긴다.",
            "relatedDrills": []
          }
        ]
      }
    ]
  },
  {
    "id": "terms-symbol",
    "label": "기호·영문",
    "folderName": "symbol",
    "lessons": [
      {
        "id": "rule-dev-terms-symbol-english",
        "title": "기호·영문 명칭",
        "fileName": "symbol-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/symbol-terms.yaml",
        "parts": [
          {
            "id": "symbol-parentheses",
            "title": "소괄호",
            "section": "괄호류",
            "prompt": "( ) — 함수 인자[argument]를 감싸는 괄호.",
            "answer": "parentheses",
            "displayAnswer": "parentheses",
            "aliases": [],
            "example": "예: 함수 호출은 parentheses 안에 인자를 넣는다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-square-brackets",
            "title": "대괄호",
            "section": "괄호류",
            "prompt": "[ ] — 배열 인덱스[index]에 쓰는 괄호.",
            "answer": "square brackets",
            "displayAnswer": "square brackets",
            "aliases": [],
            "example": "예: 배열 접근은 square brackets로 한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-curly-brackets",
            "title": "중괄호",
            "section": "괄호류",
            "prompt": "{ } — 코드 블록[code block]을 감싸는 괄호.",
            "answer": "curly brackets",
            "displayAnswer": "curly brackets",
            "aliases": [],
            "example": "예: 함수 본문은 curly brackets로 감싼다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-angle-brackets",
            "title": "꺾쇠괄호",
            "section": "괄호류",
            "prompt": "< > — 태그[tag]나 제네릭에 쓰는 괄호. 단독으로는 less than / greater than.",
            "answer": "angle brackets",
            "displayAnswer": "angle brackets",
            "aliases": [],
            "example": "예: HTML 태그는 angle brackets로 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-hash",
            "title": "샵",
            "section": "기호",
            "prompt": "# — 번호나 해시태그, URL 조각[fragment]에 쓰는 기호.",
            "answer": "number sign",
            "displayAnswer": "number sign",
            "aliases": [
              "pound",
              "hash"
            ],
            "example": "예: URL 뒤의",
            "relatedDrills": []
          },
          {
            "id": "symbol-at",
            "title": "골뱅이",
            "section": "기호",
            "prompt": "@ — 이메일 주소나 데코레이터에 쓰는 기호.",
            "answer": "at sign",
            "displayAnswer": "at sign",
            "aliases": [],
            "example": "예: 이메일 주소는 at sign으로 도메인을 구분한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-percent",
            "title": "퍼센트",
            "section": "기호",
            "prompt": "% — 백분율이나 나머지 연산에 쓰는 기호.",
            "answer": "percent sign",
            "displayAnswer": "percent sign",
            "aliases": [],
            "example": "예: 나머지 연산자도 percent sign을 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-asterisk",
            "title": "별표",
            "section": "기호",
            "prompt": "* — 곱셈이나 전체 선택[wildcard]에 쓰는 기호.",
            "answer": "asterisk",
            "displayAnswer": "asterisk",
            "aliases": [
              "star",
              "wildcard"
            ],
            "example": "예: 모든 파일을 뜻할 때 asterisk를 wildcard로 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-caret",
            "title": "캐럿",
            "section": "기호",
            "prompt": "^ — 문자열 시작이나 거듭제곱 표기에 쓰는 기호.",
            "answer": "caret",
            "displayAnswer": "caret",
            "aliases": [
              "circumflex"
            ],
            "example": "예: 정규식에서 caret은 문자열 시작을 뜻한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-dollar",
            "title": "달러",
            "section": "기호",
            "prompt": "$ — 문자열 끝(정규식)이나 변수 표기에 쓰는 기호.",
            "answer": "dollar sign",
            "displayAnswer": "dollar sign",
            "aliases": [],
            "example": "예: 정규식에서 dollar sign은 문자열 끝을 뜻한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-exclamation",
            "title": "느낌표",
            "section": "기호",
            "prompt": "! — 부정[not]에 쓰는 기호.",
            "answer": "exclamation mark",
            "displayAnswer": "exclamation mark",
            "aliases": [],
            "example": "예: 논리 부정은 exclamation mark로 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-question",
            "title": "물음표",
            "section": "기호",
            "prompt": "? — 삼항 연산자나 옵셔널에 쓰는 기호.",
            "answer": "question mark",
            "displayAnswer": "question mark",
            "aliases": [],
            "example": "예: 옵셔널 체이닝은 question mark와 dot을 붙여 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-colon",
            "title": "콜론",
            "section": "기호",
            "prompt": ": — 키와 값, 타입 표기를 구분하는 기호.",
            "answer": "colon",
            "displayAnswer": "colon",
            "aliases": [],
            "example": "예: 객체의 키와 값은 colon으로 구분한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-semicolon",
            "title": "세미콜론",
            "section": "기호",
            "prompt": "; — 문장 끝을 표시하는 기호.",
            "answer": "semicolon",
            "displayAnswer": "semicolon",
            "aliases": [],
            "example": "예: 문장 끝에는 semicolon을 붙인다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-comma",
            "title": "쉼표",
            "section": "기호",
            "prompt": ", — 값이나 요소를 나누는 기호.",
            "answer": "comma",
            "displayAnswer": "comma",
            "aliases": [],
            "example": "예: 배열 요소는 comma로 나눈다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-period",
            "title": "마침표",
            "section": "기호",
            "prompt": ". — 속성 접근이나 파일 확장자에 쓰는 기호.",
            "answer": "period",
            "displayAnswer": "period",
            "aliases": [
              "dot"
            ],
            "example": "예: 객체 속성은 dot으로 접근한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-hyphen",
            "title": "하이픈",
            "section": "기호",
            "prompt": "- — 복합어[compound word]나 CLI 옵션에 쓰는 기호.",
            "answer": "hyphen",
            "displayAnswer": "hyphen",
            "aliases": [
              "dash"
            ],
            "example": "예: CSS 속성 이름은 hyphen으로 잇는다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-underscore",
            "title": "밑줄",
            "section": "기호",
            "prompt": "_ — 변수 이름 연결이나 private 관례에 쓰는 기호.",
            "answer": "underscore",
            "displayAnswer": "underscore",
            "aliases": [],
            "example": "예: _private처럼 underscore로 내부용을 표시하기도 한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-plus",
            "title": "더하기",
            "section": "기호",
            "prompt": "+ — 덧셈이나 문자열 연결에 쓰는 기호.",
            "answer": "plus sign",
            "displayAnswer": "plus sign",
            "aliases": [],
            "example": "예: 문자열 연결에도 plus sign을 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-equal",
            "title": "등호",
            "section": "기호",
            "prompt": "= — 값 할당[assign]에 쓰는 기호.",
            "answer": "equal sign",
            "displayAnswer": "equal sign",
            "aliases": [],
            "example": "예: 변수 할당은 equal sign으로 한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-backslash",
            "title": "역슬래시",
            "section": "기호",
            "prompt": "\\ — 윈도우 파일 경로나 이스케이프에 쓰는 기호.",
            "answer": "backslash",
            "displayAnswer": "backslash",
            "aliases": [],
            "example": "예: 윈도우 경로 구분자는 backslash다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-forward-slash",
            "title": "슬래시",
            "section": "기호",
            "prompt": "/ — 유닉스 파일 경로나 나눗셈에 쓰는 기호.",
            "answer": "forward slash",
            "displayAnswer": "forward slash",
            "aliases": [],
            "example": "예: URL 경로는 forward slash로 나눈다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-backtick",
            "title": "백틱",
            "section": "기호",
            "prompt": "` — 템플릿 문자열[template string]을 감싸는 기호.",
            "answer": "backtick",
            "displayAnswer": "backtick",
            "aliases": [
              "grave accent"
            ],
            "example": "예: 템플릿 문자열은 backtick으로 감싼다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-double-quote",
            "title": "큰따옴표",
            "section": "기호",
            "prompt": "\" — 문자열을 감싸는 두 줄 따옴표.",
            "answer": "double quotation marks",
            "displayAnswer": "double quotation marks",
            "aliases": [],
            "example": "예: JSON 키는 double quotation marks만 허용한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-single-quote",
            "title": "작은따옴표",
            "section": "기호",
            "prompt": "' — 문자열을 감싸는 한 줄 따옴표.",
            "answer": "single quotation marks",
            "displayAnswer": "single quotation marks",
            "aliases": [],
            "example": "예: JS에서는 single quotation marks도 흔히 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-pipe",
            "title": "파이프",
            "section": "기호",
            "prompt": "| — 명령 출력을 다음 명령으로 넘기거나 OR에 쓰는 기호.",
            "answer": "pipe",
            "displayAnswer": "pipe",
            "aliases": [
              "vertical bar"
            ],
            "example": "예: 셸에서 pipe로 명령을 연결한다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-ampersand",
            "title": "앰퍼샌드",
            "section": "기호",
            "prompt": "& — AND 연산이나 백그라운드 실행에 쓰는 기호.",
            "answer": "ampersand",
            "displayAnswer": "ampersand",
            "aliases": [
              "and sign"
            ],
            "example": "예: 논리 AND는 ampersand 두 개로 쓴다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-tilde",
            "title": "물결",
            "section": "기호",
            "prompt": "~ — 홈 디렉터리[home directory]를 뜻하는 기호.",
            "answer": "tilde",
            "displayAnswer": "tilde",
            "aliases": [],
            "example": "예: 셸에서 tilde는 홈 디렉터리를 가리킨다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-delimiter",
            "title": "구분자",
            "section": "개념",
            "prompt": "쉼표, 세미콜론, 탭, 공백, 파이프처럼 데이터를 나누는 문자를 통칭하는 말.",
            "answer": "delimiter",
            "displayAnswer": "delimiter",
            "aliases": [],
            "example": "예: CSV의 delimiter는 comma다.",
            "relatedDrills": []
          },
          {
            "id": "symbol-parameter-argument",
            "title": "매개변수와 인자",
            "section": "개념",
            "prompt": "함수 정의에 쓰는 변수 이름과, 호출할 때 실제로 넘기는 값을 구분하는 용어.",
            "answer": "parameter / argument",
            "displayAnswer": "parameter / argument",
            "aliases": [],
            "example": "예: 정의에 있는 것은 parameter, 호출할 때 넘기는 것은 argument다.",
            "relatedDrills": []
          }
        ]
      }
    ]
  }
] as LexiconTrack[];
