import type { LexiconTrack } from '../data/lexiconLessonTypes';

export const lexiconTracks: LexiconTrack[] = [
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
            "example": "예: 새 관리자 페이지는 CLI로 scaffold부터 해두자."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-2",
            "title": "보일러플레이트",
            "section": "프로젝트 시작 / 구조",
            "prompt": "프로젝트를 시작할 때 반복해서 쓰는 기본 템플릿 코드.",
            "answer": "Boilerplate",
            "displayAnswer": "보일러플레이트[Boilerplate]",
            "example": "예: 인증 로직은 팀 boilerplate를 가져와서 시작했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-3",
            "title": "블루프린트",
            "section": "프로젝트 시작 / 구조",
            "prompt": "설계 단계에서 전체 구조나 구성 방향을 잡아 둔 청사진.",
            "answer": "Blueprint",
            "displayAnswer": "블루프린트[Blueprint]",
            "example": "예: 구현 전에 페이지 흐름 blueprint를 먼저 그렸다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-4",
            "title": "스켈레톤 화면",
            "section": "프로젝트 시작 / 구조",
            "prompt": "실제 콘텐츠 대신 회색 플레이스홀더로 레이아웃 뼈대를 먼저 보여 주는 로딩 UI. 스피너보다 최종 화면 구조를 미리 보여 준다.",
            "answer": "Skeleton",
            "displayAnswer": "스켈레톤 화면[Skeleton / Loading Skeleton]",
            "example": "예: API 응답을 기다리는 동안 loading skeleton으로 카드 자리를 먼저 잡자."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-5",
            "title": "스텁",
            "section": "프로젝트 시작 / 구조",
            "prompt": "실제 동작 대신 임시로 넣는 간단한 구현물이나 반환값.",
            "answer": "Stub",
            "displayAnswer": "스텁[Stub]",
            "example": "예: 백엔드가 아직 없어서 지금은 stub만 붙여뒀다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-6",
            "title": "목",
            "section": "프로젝트 시작 / 구조",
            "prompt": "테스트나 개발 중에 진짜 객체 대신 흉내 내는 가짜 객체나 데이터.",
            "answer": "Mock",
            "displayAnswer": "목[Mock]",
            "example": "예: 외부 결제 모듈은 mock으로 대체해서 테스트했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-7",
            "title": "포팅",
            "section": "배포 / 환경 / 인프라",
            "prompt": "한 환경의 프로그램을 다른 환경으로 옮겨 동작하게 만드는 작업.",
            "answer": "Porting",
            "displayAnswer": "포팅[Porting / Port]",
            "example": "예: 이 라이브러리는 ARM 환경으로 porting이 필요하다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-8",
            "title": "배포",
            "section": "배포 / 환경 / 인프라",
            "prompt": "개발한 결과물을 실제 서버나 사용자 환경에 올리는 과정.",
            "answer": "Deployment",
            "displayAnswer": "배포[Deployment / Deploy]",
            "example": "예: 오늘 저녁에 운영 서버로 deploy할 예정이다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-9",
            "title": "컨테이너화",
            "section": "배포 / 환경 / 인프라",
            "prompt": "애플리케이션을 컨테이너 기반으로 실행 가능하게 포장하는 작업.",
            "answer": "Containerize",
            "displayAnswer": "컨테이너화[Containerize / Containerization]",
            "example": "예: 배포 단순화를 위해 앱을 먼저 containerize했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-10",
            "title": "프로비저닝",
            "section": "배포 / 환경 / 인프라",
            "prompt": "서버, 네트워크, 클라우드 자원을 자동으로 준비하고 설정하는 작업.",
            "answer": "Provisioning",
            "displayAnswer": "프로비저닝[Provisioning]",
            "example": "예: Terraform으로 staging 서버 provisioning을 자동화했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-11",
            "title": "지속적 통합·배포",
            "section": "배포 / 환경 / 인프라",
            "prompt": "코드 통합과 배포를 자동화하는 파이프라인 개념.",
            "answer": "CI",
            "displayAnswer": "지속적 통합·배포[CI/CD]",
            "example": "예: 이 저장소는 CI/CD가 붙어 있어서 머지 후 자동 배포된다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-12",
            "title": "스케일링",
            "section": "배포 / 환경 / 인프라",
            "prompt": "서비스가 늘어나는 트래픽을 감당하도록 확장하는 작업.",
            "answer": "Scaling",
            "displayAnswer": "스케일링[Scaling / Scale Out / Scale Up]",
            "example": "예: 트래픽이 늘면 우선 scale out부터 검토하자."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-13",
            "title": "로드 밸런서",
            "section": "배포 / 환경 / 인프라",
            "prompt": "요청을 여러 서버로 분산시키는 구성 요소.",
            "answer": "Load Balancer",
            "displayAnswer": "로드 밸런서[Load Balancer]",
            "example": "예: 앞단에 load balancer를 두고 요청을 분산했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-14",
            "title": "리팩터링",
            "section": "코드 구조 / 설계",
            "prompt": "기능은 유지한 채 코드 구조만 더 좋게 정리하는 작업.",
            "answer": "Refactor",
            "displayAnswer": "리팩터링[Refactor / Refactoring]",
            "example": "예: 이번 PR은 기능 추가보다 refactoring 비중이 더 크다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-15",
            "title": "추상화",
            "section": "코드 구조 / 설계",
            "prompt": "복잡한 내부를 숨기고 필요한 개념만 드러내는 설계 방식.",
            "answer": "Abstraction",
            "displayAnswer": "추상화[Abstraction / Abstract]",
            "example": "예: 공통 API 호출부를 abstraction해서 중복을 줄였다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-16",
            "title": "캡슐화",
            "section": "코드 구조 / 설계",
            "prompt": "데이터와 동작을 하나로 묶고 외부 접근을 제한하는 설계 방식.",
            "answer": "Encapsulation",
            "displayAnswer": "캡슐화[Encapsulation / Encapsulate]",
            "example": "예: 상태 변경 로직은 클래스 내부로 encapsulate했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-17",
            "title": "디커플링",
            "section": "코드 구조 / 설계",
            "prompt": "모듈 사이의 의존성을 줄여 서로 덜 얽히게 만드는 설계 방향.",
            "answer": "Decouple",
            "displayAnswer": "디커플링[Decouple / Loose Coupling]",
            "example": "예: UI와 비즈니스 로직을 decouple하는 게 이번 작업의 핵심이다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-18",
            "title": "의존성 주입",
            "section": "코드 구조 / 설계",
            "prompt": "필요한 의존 객체를 내부에서 직접 만들지 않고 외부에서 넣어주는 방식.",
            "answer": "Dependency Injection",
            "displayAnswer": "의존성 주입[Dependency Injection / DI]",
            "example": "예: 테스트 편의를 위해 서비스 인스턴스는 DI로 주입한다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-19",
            "title": "래퍼",
            "section": "코드 구조 / 설계",
            "prompt": "다른 함수나 객체를 감싸서 사용성을 바꾸거나 기능을 추가하는 래퍼.",
            "answer": "Wrapper",
            "displayAnswer": "래퍼[Wrapper]",
            "example": "예: fetch wrapper를 만들어 공통 에러 처리를 넣었다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-20",
            "title": "어댑터",
            "section": "코드 구조 / 설계",
            "prompt": "서로 다른 인터페이스를 이어 붙여 호환되게 만드는 중간 계층.",
            "answer": "Adapter",
            "displayAnswer": "어댑터[Adapter]",
            "example": "예: 레거시 응답 형식은 adapter로 한 번 변환해서 쓴다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-21",
            "title": "브리지",
            "section": "코드 구조 / 설계",
            "prompt": "서로 다른 계층이나 구현을 느슨하게 연결하는 구조 패턴.",
            "answer": "Bridge",
            "displayAnswer": "브리지[Bridge]",
            "example": "예: 렌더러와 컨트롤러를 bridge 패턴처럼 분리했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-22",
            "title": "컴파일",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "소스 코드를 다른 언어나 실행 가능한 형태로 변환하는 과정.",
            "answer": "Compile",
            "displayAnswer": "컴파일[Compile / Compilation]",
            "example": "예: 배포 전에 타입스크립트 compile 단계가 먼저 돈다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-23",
            "title": "트랜스파일",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "한 언어를 비슷한 다른 언어 수준으로 변환하는 과정.",
            "answer": "Transpile",
            "displayAnswer": "트랜스파일[Transpile / Transpilation]",
            "example": "예: 최신 문법은 Babel이 구형 브라우저용으로 transpile한다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-24",
            "title": "번들링",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "여러 파일을 묶어 배포 단위로 만드는 작업.",
            "answer": "Bundle",
            "displayAnswer": "번들링[Bundle / Bundling]",
            "example": "예: 초기 로딩 속도를 위해 bundling 결과물을 쪼개자."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-25",
            "title": "압축",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "코드 용량을 줄이기 위해 공백과 이름 등을 압축하는 작업.",
            "answer": "Minify",
            "displayAnswer": "압축[Minify / Minification]",
            "example": "예: 운영 빌드에서는 minification이 자동 적용된다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-26",
            "title": "핫 리로드",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "코드 수정 사항이 즉시 반영되도록 다시 불러오는 개발 기능.",
            "answer": "Hot Reload",
            "displayAnswer": "핫 리로드[Hot Reload / HMR]",
            "example": "예: 스타일 수정은 HMR 덕분에 바로 확인할 수 있다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-27",
            "title": "벤치마크",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "성능을 수치로 측정하고 비교하는 작업.",
            "answer": "Benchmark",
            "displayAnswer": "벤치마크[Benchmark / Benchmarking]",
            "example": "예: 캐시 적용 전후를 benchmark로 비교해보자."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-28",
            "title": "스로틀링",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "짧은 시간에 너무 많이 호출되는 이벤트를 일정 간격으로 제한하는 기법.",
            "answer": "Throttling",
            "displayAnswer": "스로틀링[Throttling / Throttle]",
            "example": "예: 스크롤 이벤트는 throttle을 걸어야 부담이 적다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-29",
            "title": "디바운스",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "연속 호출이 멈춘 뒤 마지막 한 번만 실행하게 만드는 기법.",
            "answer": "Debounce",
            "displayAnswer": "디바운스[Debounce / Debouncing]",
            "example": "예: 검색 입력창은 debounce를 넣는 편이 일반적이다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-30",
            "title": "프로파일링",
            "section": "빌드 / 런타임 / 성능",
            "prompt": "병목 지점을 찾기 위해 실행 시간과 자원 사용을 분석하는 작업.",
            "answer": "Profiling",
            "displayAnswer": "프로파일링[Profiling / Profile]",
            "example": "예: 느린 원인을 찾으려고 먼저 profiling부터 했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-31",
            "title": "단위 테스트",
            "section": "테스트 / 품질",
            "prompt": "가장 작은 단위의 기능을 독립적으로 검증하는 테스트.",
            "answer": "Unit Test",
            "displayAnswer": "단위 테스트[Unit Test]",
            "example": "예: 유틸 함수는 unit test로 빠르게 검증할 수 있다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-32",
            "title": "통합 테스트",
            "section": "테스트 / 품질",
            "prompt": "여러 모듈이 함께 동작하는 흐름을 검증하는 테스트.",
            "answer": "Integration Test",
            "displayAnswer": "통합 테스트[Integration Test]",
            "example": "예: 로그인 플로우는 integration test가 더 적합하다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-33",
            "title": "회귀 오류",
            "section": "테스트 / 품질",
            "prompt": "수정 후에 기존 기능이 깨지는 문제나 그 현상 자체.",
            "answer": "Regression",
            "displayAnswer": "회귀 오류[Regression]",
            "example": "예: 이번 수정 때문에 검색 기능에 regression이 생겼다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-34",
            "title": "스모크 테스트",
            "section": "테스트 / 품질",
            "prompt": "시스템이 최소한 실행 가능한지만 빠르게 확인하는 테스트.",
            "answer": "Smoke Test",
            "displayAnswer": "스모크 테스트[Smoke Test]",
            "example": "예: 배포 직후 smoke test만이라도 꼭 돌리자."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-35",
            "title": "새니티 체크",
            "section": "테스트 / 품질",
            "prompt": "상식적인 수준에서 큰 이상이 없는지 빠르게 점검하는 확인 작업.",
            "answer": "Sanity Check",
            "displayAnswer": "새니티 체크[Sanity Check]",
            "example": "예: 머지 전에 라우팅만 sanity check 해도 사고를 줄일 수 있다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-36",
            "title": "플래키 테스트",
            "section": "테스트 / 품질",
            "prompt": "테스트가 환경이나 타이밍에 따라 들쭉날쭉하게 실패하는 상태.",
            "answer": "Flaky Test",
            "displayAnswer": "플래키 테스트[Flaky Test]",
            "example": "예: 그 테스트는 flaky test라서 다시 돌리면 통과하기도 한다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-37",
            "title": "진행 중 작업",
            "section": "협업 / 커뮤니케이션",
            "prompt": "아직 끝나지 않고 진행 중인 작업 상태.",
            "answer": "WIP",
            "displayAnswer": "진행 중 작업[WIP]",
            "example": "예: 이 브랜치는 아직 WIP라서 리뷰 요청 전이다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-38",
            "title": "예상 완료 시간",
            "section": "협업 / 커뮤니케이션",
            "prompt": "예상 완료 시점이나 예상 소요 시간을 묻는 표현.",
            "answer": "ETA",
            "displayAnswer": "예상 완료 시간[ETA]",
            "example": "예: 이 이슈 ETA를 오늘 안으로 공유해줄 수 있을까?"
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-39",
            "title": "참고",
            "section": "협업 / 커뮤니케이션",
            "prompt": "참고만 해 달라는 의미로 공유할 때 붙이는 말.",
            "answer": "FYI",
            "displayAnswer": "참고[FYI]",
            "example": "예: FYI, 운영 배포 시간이 내일 오전으로 바뀌었다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-40",
            "title": "개인 의견",
            "section": "협업 / 커뮤니케이션",
            "prompt": "개인 의견임을 전제로 의견을 말할 때 붙이는 표현.",
            "answer": "IMO",
            "displayAnswer": "개인 의견[IMO]",
            "example": "예: IMO, 이 함수는 지금 분리하는 편이 더 깔끔하다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-41",
            "title": "요약",
            "section": "협업 / 커뮤니케이션",
            "prompt": "긴 내용을 아주 짧게 요약해서 보여줄 때 붙이는 표시.",
            "answer": "TL;DR",
            "displayAnswer": "요약[TL;DR]",
            "example": "예: TL;DR, 원인은 캐시 키 충돌이고 수정은 이미 끝났다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-42",
            "title": "핸드오프",
            "section": "협업 / 커뮤니케이션",
            "prompt": "작업이나 문서, 책임을 다른 사람이나 다음 단계로 넘기는 과정.",
            "answer": "Handoff",
            "displayAnswer": "핸드오프[Handoff]",
            "example": "예: 디자인 handoff가 끝나야 개발 일정도 확정된다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-43",
            "title": "싱크업",
            "section": "협업 / 커뮤니케이션",
            "prompt": "서로 생각이나 방향을 맞추기 위해 짧게 회의하거나 조율하는 것.",
            "answer": "Sync Up",
            "displayAnswer": "싱크업[Sync Up / Align]",
            "example": "예: 이건 먼저 PM이랑 sync up 한 뒤에 진행하자."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-44",
            "title": "레거시",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "오래되어 유지보수가 어렵거나 구조가 낡은 기존 코드나 시스템.",
            "answer": "Legacy",
            "displayAnswer": "레거시[Legacy]",
            "example": "예: 이 모듈은 legacy 코드라 건드릴 때 주의가 필요하다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-45",
            "title": "그린필드",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "아무것도 없는 상태에서 새로 시작하는 프로젝트.",
            "answer": "Greenfield",
            "displayAnswer": "그린필드[Greenfield]",
            "example": "예: 이번 서비스는 완전한 greenfield 프로젝트에 가깝다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-46",
            "title": "브라운필드",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "이미 있는 시스템을 기반으로 개선하거나 확장하는 프로젝트.",
            "answer": "Brownfield",
            "displayAnswer": "브라운필드[Brownfield]",
            "example": "예: 기존 ERP 위에 얹는 작업이라 brownfield 성격이 강하다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-47",
            "title": "기술 부채",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "지금은 빠르게 만들었지만 나중에 비용으로 돌아올 구조적 문제.",
            "answer": "Tech Debt",
            "displayAnswer": "기술 부채[Tech Debt / Technical Debt]",
            "example": "예: 급하게 넣은 예외 처리 때문에 tech debt가 꽤 쌓였다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-48",
            "title": "스파이크",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "짧은 시간 안에 기술 가능성을 검증하기 위해 만드는 실험용 작업.",
            "answer": "Spike",
            "displayAnswer": "스파이크[Spike]",
            "example": "예: 본개발 전에 하루짜리 spike로 라이브러리를 검토했다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-49",
            "title": "개념 검증",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "아이디어 가능성만 빠르게 확인하는 작은 검증용 결과물.",
            "answer": "POC",
            "displayAnswer": "개념 검증[POC / Proof of Concept]",
            "example": "예: 고객 설득용으로 간단한 POC를 먼저 만들었다."
          },
          {
            "id": "rule-dev-terms-readme-terms-dev-term-50",
            "title": "도그푸딩",
            "section": "개발 문화 / 실무 맥락",
            "prompt": "자사 제품을 내부 팀이 직접 사용하면서 문제를 발견하고 개선하는 문화.",
            "answer": "Dogfooding",
            "displayAnswer": "도그푸딩[Dogfooding]",
            "example": "예: 정식 출시 전에 내부 팀이 dogfooding부터 시작했다."
          },
          {
            "id": "dev-extra-degrade",
            "title": "성능 저하",
            "section": "품질 / 안정성",
            "prompt": "수정이나 부하 때문에 원래보다 성능이나 품질이 나빠지는 현상.",
            "answer": "Degrade",
            "displayAnswer": "Degrade",
            "example": "예: 캐시를 끄자 응답 속도가 눈에 띄게 degrade됐다."
          },
          {
            "id": "dev-extra-deprecate",
            "title": "사용 중단 예정",
            "section": "품질 / 안정성",
            "prompt": "아직 동작은 하지만 더 이상 사용을 권장하지 않고 제거가 예정된 상태.",
            "answer": "Deprecate",
            "displayAnswer": "Deprecate",
            "example": "예: 이 API는 deprecated라서 새 코드에서는 쓰지 말자."
          },
          {
            "id": "dev-extra-full-stack",
            "title": "풀스택",
            "section": "역할 / 구조",
            "prompt": "프론트엔드, API, DB까지 전 영역을 다루는 개발 범위나 개발자.",
            "answer": "Full Stack",
            "displayAnswer": "Full Stack",
            "example": "예: 이번 프로젝트는 혼자라서 full stack으로 개발했다."
          },
          {
            "id": "dev-extra-tech-stack",
            "title": "기술 스택",
            "section": "역할 / 구조",
            "prompt": "프로젝트에 사용하는 언어, 프레임워크, 인프라 기술의 조합.",
            "answer": "Tech Stack",
            "displayAnswer": "Tech Stack",
            "example": "예: 우리 tech stack은 React, Node, Postgres다."
          },
          {
            "id": "dev-extra-serverless",
            "title": "서버리스",
            "section": "배포 / 환경",
            "prompt": "서버를 직접 관리하지 않고 함수나 서비스 단위로 실행 환경을 빌려 쓰는 방식.",
            "answer": "Serverless",
            "displayAnswer": "Serverless",
            "example": "예: 이 배치 작업은 serverless 함수로 옮기면 관리가 쉽다."
          },
          {
            "id": "dev-extra-staging",
            "title": "스테이징 환경",
            "section": "배포 / 환경",
            "prompt": "운영 배포 전에 실제와 같은 조건으로 검증하는 중간 환경.",
            "answer": "Staging",
            "displayAnswer": "Staging",
            "example": "예: 먼저 staging에 배포해서 확인한 뒤 prod로 올리자."
          },
          {
            "id": "dev-extra-production",
            "title": "운영 환경",
            "section": "배포 / 환경",
            "prompt": "실제 사용자가 쓰는 서비스 환경. 줄여서 prod라고 부른다.",
            "answer": "Production",
            "displayAnswer": "Production",
            "example": "예: production 장애라서 최우선으로 대응해야 한다."
          },
          {
            "id": "dev-extra-static-hosting",
            "title": "정적 호스팅",
            "section": "배포 / 환경",
            "prompt": "빌드된 HTML·JS·CSS 파일만 올려 서비스하는 호스팅 방식. GitHub Pages가 대표적이다.",
            "answer": "Static Hosting",
            "displayAnswer": "Static Hosting",
            "example": "예: 프론트만 있는 앱이라 GitHub Pages 같은 static hosting이면 충분하다."
          },
          {
            "id": "dev-extra-headless-ui",
            "title": "헤드리스 UI",
            "section": "프론트엔드",
            "prompt": "동작과 접근성 로직만 제공하고 스타일은 사용자가 입히는 UI 라이브러리 방식.",
            "answer": "Headless UI",
            "displayAnswer": "Headless UI",
            "example": "예: 디자인 자유도가 필요해서 headless UI 컴포넌트를 골랐다."
          },
          {
            "id": "dev-extra-semantic",
            "title": "시맨틱",
            "section": "프론트엔드",
            "prompt": "이름이나 태그가 겉모습이 아니라 의미를 드러내도록 작성하는 방식. 시맨틱 CSS, 시맨틱 태그처럼 쓴다.",
            "answer": "Semantic",
            "displayAnswer": "Semantic",
            "example": "예: 클래스 이름은 semantic하게 역할 기준으로 짓자."
          }
        ]
      }
    ]
  },
  {
    "id": "terms-web",
    "label": "웹 UI 용어",
    "folderName": "web",
    "lessons": [
      {
        "id": "rule-dev-terms-readme-terms-web",
        "title": "웹 실무 어휘",
        "fileName": "web-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/web-terms.yaml",
        "parts": [
          {
            "id": "rule-dev-terms-readme-terms-web-term-1",
            "title": "페이지 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "웹페이지를 구성하는 여러 구역을 통틀어 부르는 일반 명칭.",
            "answer": "Page Sections",
            "displayAnswer": "페이지 섹션[Page Sections]",
            "example": "예: 이 랜딩 페이지는 5개의 페이지 섹션[Page Sections]으로 나뉜다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-2",
            "title": "히어로 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "페이지 최상단에 크게 배치되는 대표 소개 영역.",
            "answer": "Hero Sections",
            "displayAnswer": "히어로 섹션[Hero Sections]",
            "example": "예: 첫 화면은 히어로 섹션[Hero Sections]에서 메시지를 강하게 보여줘야 한다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-3",
            "title": "기능 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "제품이나 서비스의 핵심 기능[feature]을 나열하는 섹션.",
            "answer": "Feature Sections",
            "displayAnswer": "기능 섹션[Feature Sections]",
            "example": "예: 제품의 장점은 기능 섹션[Feature Sections]에서 카드 형태로 정리한다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-4",
            "title": "행동 유도 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "사용자에게 가입, 구매, 다운로드 같은 행동[action]을 유도하는 섹션.",
            "answer": "CTA Sections",
            "displayAnswer": "행동 유도 섹션[CTA Sections]",
            "example": "예: 가격표 아래에 행동 유도 섹션[CTA Sections]을 한 번 더 넣자."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-5",
            "title": "벤토 그리드",
            "section": "페이지 / 섹션 명칭",
            "prompt": "카드 크기를 다르게 섞어 배치하는 격자형 레이아웃.",
            "answer": "Bento Grids",
            "displayAnswer": "벤토 그리드[Bento Grids]",
            "example": "예: 대시보드 소개는 벤토 그리드[Bento Grids]가 잘 어울린다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-6",
            "title": "가격 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "요금제나 플랜을 비교해서 보여주는 섹션.",
            "answer": "Pricing Sections",
            "displayAnswer": "가격 섹션[Pricing Sections]",
            "example": "예: SaaS 사이트에서는 가격 섹션[Pricing Sections]이 전환율에 큰 영향을 준다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-7",
            "title": "헤더 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "페이지 상단에 로고, 메뉴, 버튼 등이 들어가는 머리 영역.",
            "answer": "Header Sections",
            "displayAnswer": "헤더 섹션[Header Sections]",
            "example": "예: 헤더 섹션[Header Sections]에는 로고와 네비게이션을 넣는다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-8",
            "title": "뉴스레터 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "이메일 구독을 유도하는 뉴스레터 신청 영역.",
            "answer": "Newsletter Sections",
            "displayAnswer": "뉴스레터 섹션[Newsletter Sections]",
            "example": "예: 푸터 위에 뉴스레터 섹션[Newsletter Sections]을 배치해 보자."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-9",
            "title": "통계 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "숫자 지표로 성과나 규모를 강조하는 섹션.",
            "answer": "Stats",
            "displayAnswer": "통계 섹션[Stats]",
            "example": "예: 사용자 수와 전환율은 통계 섹션[Stats]에서 강조한다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-10",
            "title": "후기 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "사용자 후기나 고객 리뷰를 보여주는 신뢰 확보 섹션.",
            "answer": "Testimonials",
            "displayAnswer": "후기 섹션[Testimonials]",
            "example": "예: B2B 서비스는 후기 섹션[Testimonials]이 신뢰 형성에 중요하다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-11",
            "title": "블로그 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "최신 글이나 추천 글 목록을 보여주는 블로그 영역.",
            "answer": "Blog Sections",
            "displayAnswer": "블로그 섹션[Blog Sections]",
            "example": "예: 메인 하단에 블로그 섹션[Blog Sections]을 두면 SEO에 도움 된다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-12",
            "title": "문의 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "문의 폼, 이메일, 전화번호 같은 연락 수단을 모아둔 섹션.",
            "answer": "Contact Sections",
            "displayAnswer": "문의 섹션[Contact Sections]",
            "example": "예: 마지막 구역은 문의 섹션[Contact Sections]으로 마무리하자."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-13",
            "title": "팀 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "팀원 소개를 위한 구성원 안내 섹션.",
            "answer": "Team Sections",
            "displayAnswer": "팀 섹션[Team Sections]",
            "example": "예: 회사 소개 페이지에는 팀 섹션[Team Sections]이 자주 들어간다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-14",
            "title": "콘텐츠 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "설명문, 가이드, 문서성 텍스트를 담는 일반 콘텐츠 영역.",
            "answer": "Content Sections",
            "displayAnswer": "콘텐츠 섹션[Content Sections]",
            "example": "예: 긴 설명은 콘텐츠 섹션[Content Sections]으로 따로 빼는 편이 좋다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-15",
            "title": "로고 클라우드",
            "section": "페이지 / 섹션 명칭",
            "prompt": "고객사, 파트너사, 협업사 로고를 모아 보여주는 영역.",
            "answer": "Logo Clouds",
            "displayAnswer": "로고 클라우드[Logo Clouds]",
            "example": "예: 협업사를 보여줄 때는 로고 클라우드[Logo Clouds]를 많이 쓴다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-16",
            "title": "자주 묻는 질문 섹션",
            "section": "페이지 / 섹션 명칭",
            "prompt": "자주 묻는 질문과 답변을 모아 둔 섹션.",
            "answer": "FAQs",
            "displayAnswer": "자주 묻는 질문 섹션[FAQs]",
            "example": "예: 문의가 많은 서비스라면 자주 묻는 질문 섹션[FAQs]이 꼭 필요하다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-17",
            "title": "푸터",
            "section": "페이지 / 섹션 명칭",
            "prompt": "페이지 맨 아래에 회사 정보, 링크, 저작권 등을 넣는 하단 영역.",
            "answer": "Footers",
            "displayAnswer": "푸터[Footers]",
            "example": "예: 푸터[Footers]에는 개인정보처리방침 링크를 넣어야 한다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-18",
            "title": "요소",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "버튼, 카드, 입력창처럼 페이지를 구성하는 작은 단위 요소.",
            "answer": "Elements",
            "displayAnswer": "요소[Elements]",
            "example": "예: 버튼과 입력창은 가장 기본적인 요소[Elements]다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-19",
            "title": "헤더",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "상단 네비게이션 컴포넌트 자체를 가리키는 이름.",
            "answer": "Headers",
            "displayAnswer": "헤더[Headers]",
            "example": "예: 모바일에서는 헤더[Headers]를 더 단순하게 만드는 편이다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-20",
            "title": "플라이아웃 메뉴",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "호버나 클릭 시 옆이나 아래로 펼쳐지는 확장 메뉴.",
            "answer": "Flyout Menus",
            "displayAnswer": "플라이아웃 메뉴[Flyout Menus]",
            "example": "예: 카테고리 목록은 플라이아웃 메뉴[Flyout Menus]로 처리할 수 있다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-21",
            "title": "배너",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "공지, 할인, 이벤트 같은 메시지를 띠 형태로 보여주는 UI.",
            "answer": "Banners",
            "displayAnswer": "배너[Banners]",
            "example": "예: 이벤트 안내는 상단 배너[Banners] 한 줄로 처리하자."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-22",
            "title": "피드백",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "사용자 의견을 받기 위한 별점, 설문, 의견 입력 UI.",
            "answer": "Feedback",
            "displayAnswer": "피드백[Feedback]",
            "example": "예: 결제 완료 후 피드백[Feedback] 팝업을 띄울 수 있다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-23",
            "title": "404 페이지",
            "section": "전체 페이지 명칭",
            "prompt": "페이지를 찾지 못했을 때 보여주는 오류 안내 페이지.",
            "answer": "404 Pages",
            "displayAnswer": "404 페이지[404 Pages]",
            "example": "예: 잘 만든 404 페이지[404 Pages]는 이탈을 줄이는 데 도움이 된다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-24",
            "title": "페이지 예시",
            "section": "전체 페이지 명칭",
            "prompt": "완성된 페이지 템플릿이나 샘플 화면을 모아 둔 카테고리.",
            "answer": "Page Examples",
            "displayAnswer": "페이지 예시[Page Examples]",
            "example": "예: 디자인 방향을 잡을 때 페이지 예시[Page Examples]를 먼저 본다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-25",
            "title": "랜딩 페이지",
            "section": "전체 페이지 명칭",
            "prompt": "제품 소개와 전환[conversion] 유도에 집중한 단일 목적 페이지.",
            "answer": "Landing Pages",
            "displayAnswer": "랜딩 페이지[Landing Pages]",
            "example": "예: 광고 유입은 보통 전용 랜딩 페이지[Landing Pages]로 받는다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-26",
            "title": "가격 페이지",
            "section": "전체 페이지 명칭",
            "prompt": "가격 정책과 플랜 비교를 중심으로 구성한 전용 페이지.",
            "answer": "Pricing Pages",
            "displayAnswer": "가격 페이지[Pricing Pages]",
            "example": "예: 가격 정책이 복잡하면 가격 페이지[Pricing Pages]를 따로 만드는 편이 낫다."
          },
          {
            "id": "rule-dev-terms-readme-terms-web-term-27",
            "title": "소개 페이지",
            "section": "전체 페이지 명칭",
            "prompt": "회사, 팀, 미션, 연혁을 소개하는 페이지.",
            "answer": "About Pages",
            "displayAnswer": "소개 페이지[About Pages]",
            "example": "예: 회사 철학은 소개 페이지[About Pages]에서 자연스럽게 풀어낸다."
          },
          {
            "id": "web-extra-toast",
            "title": "토스트",
            "section": "오버레이 / 알림",
            "prompt": "화면 상단이나 하단에서 잠깐 나타났다 사라지는 가벼운 알림창. \"저장되었습니다\" 같은 상태 변화를 알린다.",
            "answer": "Toast",
            "displayAnswer": "Toast",
            "example": "예: 장바구니에 담기면 toast로 짧게 알려주자."
          },
          {
            "id": "web-extra-drawer",
            "title": "드로어",
            "section": "오버레이 / 알림",
            "prompt": "화면 옆에서 서랍처럼 밀려 나오는 패널. 모바일 메뉴나 상세 설정에 자주 쓴다.",
            "answer": "Drawer",
            "displayAnswer": "Drawer",
            "example": "예: 모바일에서는 네비게이션을 drawer로 접어 두자."
          },
          {
            "id": "web-extra-modal",
            "title": "모달",
            "section": "오버레이 / 알림",
            "prompt": "화면 위에 떠서 사용자의 응답을 요구하는 대화 상자. 닫기 전에는 뒤 화면을 조작할 수 없다.",
            "answer": "Modal Dialog",
            "displayAnswer": "Modal Dialog",
            "example": "예: 삭제 확인은 modal dialog로 한 번 더 물어보자."
          },
          {
            "id": "web-convention",
            "title": "컨벤션",
            "section": "네이밍 컨벤션",
            "prompt": "코드·문서·스타일에서 팀이나 업계가 공통으로 쓰는 이름 규칙과 약속된 표현.",
            "answer": "Convention",
            "displayAnswer": "Convention",
            "example": "예: 클래스 이름을 마음대로 짓지 말고 팀 convention을 따르자."
          },
          {
            "id": "web-semantic-html",
            "title": "시맨틱 HTML",
            "section": "네이밍 컨벤션",
            "prompt": "header, nav, main, section, article, footer처럼 의미에 맞는 HTML 태그로 구조를 표현하는 방식.",
            "answer": "Semantic HTML",
            "displayAnswer": "Semantic HTML",
            "example": "예: div만 쓰지 말고 semantic HTML로 구역을 나눠 보자."
          },
          {
            "id": "web-bem",
            "title": "BEM",
            "section": "네이밍 컨벤션",
            "prompt": "Block__Element--Modifier 형태로 CSS 클래스 이름을 짓는 네이밍 패턴.",
            "answer": "BEM",
            "displayAnswer": "BEM",
            "example": "예: card__title--large처럼 BEM으로 상태를 표현한다."
          },
          {
            "id": "web-container",
            "title": "컨테이너",
            "section": "네이밍 컨벤션",
            "prompt": "콘텐츠 폭을 가운데로 제한하는 레이아웃용 래퍼. CSS 클래스명으로도 자주 쓴다.",
            "answer": "Container",
            "displayAnswer": "Container",
            "example": "예: 본문은 max-width가 있는 container 안에 넣자."
          },
          {
            "id": "web-wrapper",
            "title": "래퍼",
            "section": "네이밍 컨벤션",
            "prompt": "여러 요소를 묶어 배치·스타일을 주기 위한 바깥 감싸개. container와 비슷하게 쓰이지만 더 일반적이다.",
            "answer": "Wrapper",
            "displayAnswer": "Wrapper",
            "example": "예: 카드들을 한 덩어리로 묶을 때 wrapper를 둔다."
          },
          {
            "id": "web-layout-classes",
            "title": "레이아웃 클래스",
            "section": "네이밍 컨벤션",
            "prompt": "row, col, grid, flex, gap처럼 배치·반응형을 나타내는 흔한 클래스·유틸 이름.",
            "answer": "Layout Classes",
            "displayAnswer": "Layout Classes",
            "example": "예: flex와 gap으로 카드 간격을 맞추는 layout classes를 쓴다."
          },
          {
            "id": "web-state-class",
            "title": "상태 클래스",
            "section": "네이밍 컨벤션",
            "prompt": "is-active, is-hidden, disabled, error, success처럼 UI 상태를 나타내는 클래스·속성 이름.",
            "answer": "State Class",
            "displayAnswer": "State Class",
            "example": "예: 열린 탭에 is-active state class를 붙인다."
          },
          {
            "id": "web-boolean-naming",
            "title": "불리언 네이밍",
            "section": "네이밍 컨벤션",
            "prompt": "isOpen, hasError, canSubmit처럼 true/false 변수에 is·has·can 접두를 쓰는 이름 규칙.",
            "answer": "Boolean Naming",
            "displayAnswer": "Boolean Naming",
            "example": "예: open 대신 isOpen처럼 boolean naming을 쓴다."
          },
          {
            "id": "web-handler-naming",
            "title": "핸들러 네이밍",
            "section": "네이밍 컨벤션",
            "prompt": "handleClick, onSubmit, fetchData, renderItem처럼 이벤트·데이터·렌더 함수에 쓰는 관례적 이름.",
            "answer": "Handler Naming",
            "displayAnswer": "Handler Naming",
            "example": "예: 클릭 처리는 handleClick으로 handler naming을 맞춘다."
          },
          {
            "id": "web-react-file-convention",
            "title": "React 파일 컨벤션",
            "section": "네이밍 컨벤션",
            "prompt": "components/Button.tsx, hooks/useFetch.ts처럼 폴더·파일·훅 이름(use*)을 역할에 맞게 나누는 규칙.",
            "answer": "React File Convention",
            "displayAnswer": "React File Convention",
            "example": "예: 커스텀 훅은 hooks/에 use로 시작하는 React file convention을 따른다."
          },
          {
            "id": "web-sidebar",
            "title": "사이드바",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "화면 옆쪽에 두는 보조 네비게이션이나 패널 영역.",
            "answer": "Sidebar",
            "displayAnswer": "Sidebar",
            "example": "예: 설정 메뉴는 sidebar에 모아 두자."
          },
          {
            "id": "web-dashboard",
            "title": "대시보드",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "지표·목록·요약 카드를 한눈에 보는 관리·현황 화면.",
            "answer": "Dashboard",
            "displayAnswer": "Dashboard",
            "example": "예: 관리자용 dashboard에 오늘 주문 수를 올렸다."
          },
          {
            "id": "web-breadcrumb",
            "title": "브레드크럼",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "현재 위치가 어디인지 경로로 보여주는 탐색 보조 UI. 홈 > 카테고리 > 상품처럼 쓴다.",
            "answer": "Breadcrumb",
            "displayAnswer": "Breadcrumb",
            "example": "예: 깊은 카테고리에는 breadcrumb이 필요하다."
          },
          {
            "id": "web-tabs",
            "title": "탭",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "같은 영역 안에서 여러 패널을 전환해 보여주는 네비게이션 UI.",
            "answer": "Tabs",
            "displayAnswer": "Tabs",
            "example": "예: 상세/리뷰/문의는 tabs로 나누자."
          },
          {
            "id": "web-accordion",
            "title": "아코디언",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "클릭하면 펼쳐지고 접히는 FAQ형 콘텐츠 UI.",
            "answer": "Accordion",
            "displayAnswer": "Accordion",
            "example": "예: FAQ는 accordion으로 구현하는 경우가 많다."
          },
          {
            "id": "web-carousel",
            "title": "캐러셀",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "이미지·카드를 좌우로 넘겨 보는 슬라이드 UI.",
            "answer": "Carousel",
            "displayAnswer": "Carousel",
            "example": "예: 메인 배너는 carousel로 돌린다."
          },
          {
            "id": "web-navigation",
            "title": "네비게이션",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "메뉴 링크 묶음. 헤더·사이드바·탭 등에서 화면 이동을 담당한다.",
            "answer": "Navigation",
            "displayAnswer": "Navigation",
            "example": "예: 주요 페이지 링크는 header navigation에 둔다."
          },
          {
            "id": "web-badge",
            "title": "뱃지",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "상태·개수·라벨을 작게 표시하는 UI. New, 3, Sale 같은 표시에 쓴다.",
            "answer": "Badge",
            "displayAnswer": "Badge",
            "example": "예: 읽지 않은 알림 개수는 badge로 보여 주자."
          },
          {
            "id": "web-card",
            "title": "카드",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "관련 정보를 하나의 블록으로 묶은 UI 단위. 기능·상품·후기 목록에 자주 쓴다.",
            "answer": "Card",
            "displayAnswer": "Card",
            "example": "예: Feature 목록은 card 그리드로 배치한다."
          },
          {
            "id": "web-button",
            "title": "버튼",
            "section": "컴포넌트 / UI 명칭",
            "prompt": "클릭으로 행동을 실행하는 기본 UI. CTA, 제출, 취소에 쓴다.",
            "answer": "Button",
            "displayAnswer": "Button",
            "example": "예: 가입 CTA는 큰 primary button으로 둔다."
          },
          {
            "id": "web-design-system",
            "title": "디자인 시스템",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "재사용 UI 컴포넌트·토큰·사용 규칙을 묶어 제품 전반의 일관성을 유지하는 체계.",
            "answer": "Design System",
            "displayAnswer": "디자인 시스템[Design System]",
            "example": "예: 새 화면은 Design System 버튼부터 쓰고 예외만 커스텀한다."
          },
          {
            "id": "web-design-token",
            "title": "디자인 토큰",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "색·간격·타이포·그림자 같은 디자인 값을 이름 있는 변수로 관리하는 단위.",
            "answer": "Design Token",
            "displayAnswer": "디자인 토큰[Design Token]",
            "example": "예: primary 색은 hex 대신 Design Token으로 참조한다."
          },
          {
            "id": "web-server-state",
            "title": "서버 상태",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "API에서 가져와 캐시·동기화하는 원격 데이터 상태. 목록·상세·권한 정보가 해당한다.",
            "answer": "Server State",
            "displayAnswer": "서버 상태[Server State]",
            "example": "예: 주문 목록은 Server State라서 캐시 무효화로 갱신한다."
          },
          {
            "id": "web-client-state",
            "title": "클라이언트 상태",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "모달 열림·탭 선택·입력 초안처럼 브라우저 UI에만 존재하는 로컬 상태.",
            "answer": "Client State",
            "displayAnswer": "클라이언트 상태[Client State]",
            "example": "예: isOpen 같은 모달 플래그는 Client State로 둔다."
          },
          {
            "id": "web-container-presentational",
            "title": "컨테이너 프레젠테이셔널 패턴",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "데이터·로직은 Container, 표시만 Presentational로 나누는 컴포넌트 분리 패턴.",
            "answer": "Container Presentational",
            "displayAnswer": "컨테이너/프레젠테이셔널[Container Presentational]",
            "example": "예: fetch는 Container에, 카드 마크업은 Presentational에 둔다."
          },
          {
            "id": "web-empty-state",
            "title": "빈 상태",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "데이터가 없을 때 보여주는 안내 UI. 목록이 비었을 때 행동 유도 문구·버튼을 둔다.",
            "answer": "Empty State",
            "displayAnswer": "빈 상태[Empty State]",
            "example": "예: 검색 결과가 없으면 Empty State에 다시 검색 CTA를 넣는다."
          },
          {
            "id": "web-loading-state",
            "title": "로딩 상태",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "데이터를 기다리는 동안의 UI 상태. 스피너·스켈레톤·비활성 버튼으로 표현한다.",
            "answer": "Loading State",
            "displayAnswer": "로딩 상태[Loading State]",
            "example": "예: 첫 진입은 Loading State로 스켈레톤을 보여 준다."
          },
          {
            "id": "web-code-splitting",
            "title": "코드 분할",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "번들을 여러 조각으로 나눠 필요한 시점에만 내려받게 하는 최적화 기법.",
            "answer": "Code Splitting",
            "displayAnswer": "코드 분할[Code Splitting]",
            "example": "예: 관리자 라우트는 Code Splitting으로 첫 로드에서 뺀다."
          },
          {
            "id": "web-lazy-loading",
            "title": "지연 로딩",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "컴포넌트·이미지·라우트를 당장 쓰지 않을 때 나중에 불러오는 기법.",
            "answer": "Lazy Loading",
            "displayAnswer": "지연 로딩[Lazy Loading]",
            "example": "예: 아래쪽 차트는 Lazy Loading으로 뷰포트 진입 시 로드한다."
          },
          {
            "id": "web-virtualization",
            "title": "가상화",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "긴 목록에서 보이는 행만 DOM에 그려 스크롤 성능을 유지하는 기법.",
            "answer": "Virtualization",
            "displayAnswer": "가상화[Virtualization]",
            "example": "예: 수천 행 테이블은 Virtualization으로 렌더 비용을 줄인다."
          },
          {
            "id": "web-error-state",
            "title": "에러 상태",
            "section": "화면 설계 / 프론트 아키텍처",
            "prompt": "요청 실패·권한 오류 등 실패를 사용자에게 알리고 재시도를 유도하는 UI 상태.",
            "answer": "Error State",
            "displayAnswer": "에러 상태[Error State]",
            "example": "예: 500이면 Error State에 재시도 버튼을 둔다."
          },
          {
            "id": "web-ui-autocomplete",
            "title": "오토컴플리트",
            "section": "입력",
            "prompt": "입력하며 후보 목록을 좁혀 고르는 검색형 입력 UI.",
            "answer": "Autocomplete",
            "displayAnswer": "Autocomplete",
            "example": "예: 도시 검색은 autocomplete로 후보를 띄운다."
          },
          {
            "id": "web-ui-button-group",
            "title": "버튼 그룹",
            "section": "입력",
            "prompt": "관련 버튼을 한 묶음으로 붙여 배치하는 UI.",
            "answer": "Button Group",
            "displayAnswer": "Button Group",
            "example": "예: 정렬 옵션은 button group으로 묶는다."
          },
          {
            "id": "web-ui-rating",
            "title": "평점",
            "section": "입력",
            "prompt": "별점처럼 점수를 고르거나 표시하는 입력·표시 UI.",
            "answer": "Rating",
            "displayAnswer": "Rating",
            "example": "예: 리뷰 작성 시 rating으로 점수를 받는다."
          },
          {
            "id": "web-ui-switch",
            "title": "스위치",
            "section": "입력",
            "prompt": "켜짐/꺼짐 두 상태를 토글하는 스위치형 입력.",
            "answer": "Switch",
            "displayAnswer": "Switch",
            "example": "예: 알림 수신 여부는 switch로 바꾼다."
          },
          {
            "id": "web-ui-toggle-button",
            "title": "토글 버튼",
            "section": "입력",
            "prompt": "눌린/안 눌린 상태를 유지하는 버튼. 정렬·필터처럼 선택 상태를 보여 줄 때 쓴다.",
            "answer": "Toggle Button",
            "displayAnswer": "Toggle Button",
            "example": "예: 그리드/리스트 전환은 toggle button으로 둔다."
          },
          {
            "id": "web-ui-avatar",
            "title": "아바타",
            "section": "데이터 표시",
            "prompt": "사용자나 엔티티를 나타내는 원형·사각 프로필 이미지 UI.",
            "answer": "Avatar",
            "displayAnswer": "Avatar",
            "example": "예: 댓글 작성자는 avatar와 닉네임을 함께 보여 준다."
          },
          {
            "id": "web-ui-chip",
            "title": "칩",
            "section": "데이터 표시",
            "prompt": "태그·필터·선택을 작은 알약 형태로 보여 주는 UI.",
            "answer": "Chip",
            "displayAnswer": "Chip",
            "example": "예: 선택된 필터는 chip으로 표시하고 개별 삭제한다."
          },
          {
            "id": "web-ui-divider",
            "title": "디바이더",
            "section": "데이터 표시",
            "prompt": "구역을 가로·세로 선으로 나누는 구분선 UI.",
            "answer": "Divider",
            "displayAnswer": "Divider",
            "example": "예: 메뉴 항목 그룹 사이에 divider를 넣는다."
          },
          {
            "id": "web-ui-tooltip",
            "title": "툴팁",
            "section": "데이터 표시",
            "prompt": "호버·포커스 시 짧게 떠서 부가 설명을 보여 주는 UI.",
            "answer": "Tooltip",
            "displayAnswer": "Tooltip",
            "example": "예: 아이콘 버튼에는 tooltip으로 이름을 붙인다."
          },
          {
            "id": "web-ui-typography",
            "title": "타이포그래피",
            "section": "데이터 표시",
            "prompt": "제목·본문·캡션 등 텍스트 위계를 맞추는 타이포 컴포넌트·체계.",
            "answer": "Typography",
            "displayAnswer": "Typography",
            "example": "예: 페이지 제목은 Typography의 h1 스타일로 통일한다."
          },
          {
            "id": "web-ui-alert",
            "title": "알림 배너",
            "section": "피드백",
            "prompt": "성공·경고·오류 메시지를 페이지 안에 고정해 보여 주는 피드백 UI.",
            "answer": "Alert",
            "displayAnswer": "Alert",
            "example": "예: 저장 실패는 alert로 원인을 보여 준다."
          },
          {
            "id": "web-ui-progress",
            "title": "진행 표시",
            "section": "피드백",
            "prompt": "작업·로딩 진행률을 막대나 원형으로 보여 주는 UI.",
            "answer": "Progress Bar",
            "displayAnswer": "Progress Bar",
            "example": "예: 파일 업로드는 progress bar로 진행률을 표시한다."
          },
          {
            "id": "web-ui-app-bar",
            "title": "앱 바",
            "section": "서피스",
            "prompt": "화면 상단에 고정되는 앱용 헤더 바. 로고·메뉴·액션을 담는다.",
            "answer": "App Bar",
            "displayAnswer": "App Bar",
            "example": "예: 대시보드 상단은 app bar에 검색과 프로필을 둔다."
          },
          {
            "id": "web-ui-paper",
            "title": "페이퍼",
            "section": "서피스",
            "prompt": "배경 위에 살짝 떠 보이는 면 컨테이너. 카드·패널의 기본 표면으로 쓴다.",
            "answer": "Paper",
            "displayAnswer": "Paper",
            "example": "예: 설정 패널은 paper 위에 폼을 올린다."
          },
          {
            "id": "web-ui-bottom-nav",
            "title": "하단 네비게이션",
            "section": "네비게이션",
            "prompt": "모바일 화면 하단에 주요 탭을 고정하는 네비게이션.",
            "answer": "Bottom Navigation",
            "displayAnswer": "Bottom Navigation",
            "example": "예: 홈·검색·마이페이지는 bottom navigation으로 전환한다."
          },
          {
            "id": "web-ui-link",
            "title": "링크",
            "section": "네비게이션",
            "prompt": "다른 페이지·앵커로 이동하는 텍스트·인라인 내비게이션 요소.",
            "answer": "Link",
            "displayAnswer": "Link",
            "example": "예: 약관 문구 안의 link로 상세 페이지를 연다."
          },
          {
            "id": "web-ui-menu",
            "title": "메뉴",
            "section": "네비게이션",
            "prompt": "클릭 시 항목 목록이 펼쳐지는 드롭다운형 선택 UI.",
            "answer": "Menu",
            "displayAnswer": "Menu",
            "example": "예: 계정 설정은 아바타 옆 menu로 연다."
          },
          {
            "id": "web-ui-stepper",
            "title": "스테퍼",
            "section": "네비게이션",
            "prompt": "다단계 절차의 현재 단계를 순서대로 보여 주는 네비게이션.",
            "answer": "Stepper",
            "displayAnswer": "Stepper",
            "example": "예: 가입 흐름은 stepper로 1·2·3단계를 표시한다."
          },
          {
            "id": "web-ui-stack",
            "title": "스택",
            "section": "레이아웃",
            "prompt": "자식 요소를 세로·가로로 일정한 간격 두고 쌓는 레이아웃 헬퍼.",
            "answer": "Stack",
            "displayAnswer": "Stack",
            "example": "예: 폼 필드는 stack으로 세로 간격을 맞춘다."
          },
          {
            "id": "web-ui-popover",
            "title": "팝오버",
            "section": "오버레이 / 알림",
            "prompt": "앵커 요소 옆에 떠서 추가 내용·액션을 보여 주는 오버레이.",
            "answer": "Popover",
            "displayAnswer": "Popover",
            "example": "예: 필터 상세는 버튼 옆 popover로 연다."
          },
          {
            "id": "web-ui-data-grid",
            "title": "데이터 그리드",
            "section": "데이터 표시",
            "prompt": "정렬·필터·페이징이 있는 표 형태의 대용량 데이터 UI.",
            "answer": "Data Grid",
            "displayAnswer": "Data Grid",
            "example": "예: 주문 목록 관리는 data grid로 구현한다."
          },
          {
            "id": "web-ui-date-picker",
            "title": "날짜 선택",
            "section": "입력",
            "prompt": "달력 UI로 날짜·기간을 고르는 입력 컴포넌트.",
            "answer": "Date Picker",
            "displayAnswer": "Date Picker",
            "example": "예: 예약일은 date picker로 고르게 한다."
          },
          {
            "id": "web-ui-combobox",
            "title": "콤보박스",
            "section": "입력",
            "prompt": "입력과 목록 선택을 합친 검색 가능 선택 UI. 헤드리스 UI에서 자주 쓴다.",
            "answer": "Combobox",
            "displayAnswer": "Combobox",
            "example": "예: 담당자 지정은 combobox로 검색해 고른다."
          },
          {
            "id": "web-ui-listbox",
            "title": "리스트박스",
            "section": "입력",
            "prompt": "목록에서 하나 또는 여러 항목을 고르는 선택 UI.",
            "answer": "Listbox",
            "displayAnswer": "Listbox",
            "example": "예: 권한 목록은 listbox로 다중 선택한다."
          },
          {
            "id": "web-ui-fieldset",
            "title": "필드셋",
            "section": "입력",
            "prompt": "관련 폼 컨트롤을 하나의 그룹으로 묶는 HTML·UI 단위.",
            "answer": "Fieldset",
            "displayAnswer": "Fieldset",
            "example": "예: 배송 주소 입력은 fieldset으로 묶는다."
          },
          {
            "id": "web-ui-primary-button",
            "title": "프라이머리 버튼",
            "section": "실무 패턴",
            "prompt": "화면에서 가장 중요한 행동을 강조하는 기본(강조) 버튼.",
            "answer": "Primary Button",
            "displayAnswer": "Primary Button",
            "example": "예: 저장은 primary button, 취소는 텍스트 버튼으로 둔다."
          },
          {
            "id": "web-ui-signup-form",
            "title": "회원가입 폼",
            "section": "실무 패턴",
            "prompt": "계정 생성을 위한 가입 입력 폼. 이메일·비밀번호·약관 동의가 흔하다.",
            "answer": "Sign-up Form",
            "displayAnswer": "Sign-up Form",
            "example": "예: 랜딩 CTA는 sign-up form으로 연결한다."
          },
          {
            "id": "web-ui-cta-button",
            "title": "행동 유도 버튼",
            "section": "실무 패턴",
            "prompt": "가입·구매·문의처럼 전환을 유도하는 핵심 클릭 버튼.",
            "answer": "Call-to-action Button",
            "displayAnswer": "Call-to-action Button",
            "example": "예: 히어로에는 call-to-action button을 하나만 둔다."
          },
          {
            "id": "web-ui-card-layout",
            "title": "카드 레이아웃",
            "section": "실무 패턴",
            "prompt": "카드 단위로 콘텐츠를 격자·목록 배치하는 화면 구성 방식.",
            "answer": "Card Layout",
            "displayAnswer": "Card Layout",
            "example": "예: 기능 소개는 card layout으로 3열 배치한다."
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
            "example": "예: 로그인 요청[Request]에는 보통 헤더와 바디가 함께 들어간다."
          },
          {
            "id": "rule-rest-readme-rest-term-2",
            "title": "응답",
            "section": "HTTP 기본",
            "prompt": "서버가 클라이언트에게 돌려주는 응답 전체.",
            "answer": "Response",
            "displayAnswer": "응답[Response]",
            "example": "예: 성공 시 응답[Response] 바디에 사용자 정보를 내려준다."
          },
          {
            "id": "rule-rest-readme-rest-term-3",
            "title": "헤더",
            "section": "HTTP 기본",
            "prompt": "요청이나 응답의 부가 정보를 담는 메타데이터 영역.",
            "answer": "Header",
            "displayAnswer": "헤더[Header]",
            "example": "예: `Authorization`은 대표적인 요청 헤더[Header]다."
          },
          {
            "id": "rule-rest-readme-rest-term-4",
            "title": "바디",
            "section": "HTTP 기본",
            "prompt": "실제 데이터 본문을 담는 영역.",
            "answer": "Body",
            "displayAnswer": "바디[Body]",
            "example": "예: POST 요청의 바디[Body]에는 JSON 데이터를 넣는다."
          },
          {
            "id": "rule-rest-readme-rest-term-5",
            "title": "상태 코드",
            "section": "HTTP 기본",
            "prompt": "응답 결과를 숫자로 표현하는 규약.",
            "answer": "Status Code",
            "displayAnswer": "상태 코드[Status Code]",
            "example": "예: 정상 조회면 `200`, 생성 성공이면 `201`을 쓴다."
          },
          {
            "id": "rule-rest-readme-rest-term-6",
            "title": "엔드포인트",
            "section": "HTTP 기본",
            "prompt": "서버 자원을 식별하는 주소.",
            "answer": "Endpoint",
            "displayAnswer": "엔드포인트[Endpoint]",
            "example": "예: 사용자 목록 엔드포인트[Endpoint]는 `/users`일 수 있다."
          },
          {
            "id": "rule-rest-readme-rest-term-7",
            "title": "조회",
            "section": "HTTP 메서드",
            "prompt": "데이터를 조회할 때 쓰는 메서드.",
            "answer": "GET",
            "displayAnswer": "조회[GET]",
            "example": "예: 사용자 목록 조회[GET]는 보통 `/users`로 요청한다."
          },
          {
            "id": "rule-rest-readme-rest-term-8",
            "title": "생성",
            "section": "HTTP 메서드",
            "prompt": "새 데이터를 만들 때 쓰는 메서드.",
            "answer": "POST",
            "displayAnswer": "생성[POST]",
            "example": "예: 회원 가입 생성[POST] 요청은 `/users`로 보낼 수 있다."
          },
          {
            "id": "rule-rest-readme-rest-term-9",
            "title": "수정",
            "section": "HTTP 메서드",
            "prompt": "기존 데이터를 전체 수정할 때 자주 쓰는 메서드.",
            "answer": "PUT",
            "displayAnswer": "수정[PUT]",
            "example": "예: 프로필 전체 수정[PUT]은 전체 필드를 보내는 편이다."
          },
          {
            "id": "rule-rest-readme-rest-term-10",
            "title": "부분 수정",
            "section": "HTTP 메서드",
            "prompt": "기존 데이터를 일부 수정할 때 자주 쓰는 메서드.",
            "answer": "PATCH",
            "displayAnswer": "부분 수정[PATCH]",
            "example": "예: 닉네임만 바꿀 때는 부분 수정[PATCH]가 자연스럽다."
          },
          {
            "id": "rule-rest-readme-rest-term-11",
            "title": "삭제",
            "section": "HTTP 메서드",
            "prompt": "데이터를 삭제할 때 쓰는 메서드.",
            "answer": "DELETE",
            "displayAnswer": "삭제[DELETE]",
            "example": "예: 계정 삭제[DELETE] 요청은 `/users/1`처럼 보낼 수 있다."
          },
          {
            "id": "rule-rest-readme-rest-term-12",
            "title": "성공",
            "section": "자주 보는 상태 코드",
            "prompt": "요청이 정상적으로 처리되었음을 뜻하는 코드.",
            "answer": "200 OK",
            "displayAnswer": "성공[200 OK]",
            "example": "예: 목록 조회 성공이면 `200 OK`를 반환한다."
          },
          {
            "id": "rule-rest-readme-rest-term-13",
            "title": "생성 완료",
            "section": "자주 보는 상태 코드",
            "prompt": "새 리소스가 생성되었음을 뜻하는 코드.",
            "answer": "201 Created",
            "displayAnswer": "생성 완료[201 Created]",
            "example": "예: 게시글 작성 성공 후 `201 Created`를 내려준다."
          },
          {
            "id": "rule-rest-readme-rest-term-14",
            "title": "잘못된 요청",
            "section": "자주 보는 상태 코드",
            "prompt": "잘못된 요청 형식이나 유효성 오류를 뜻하는 코드.",
            "answer": "400 Bad Request",
            "displayAnswer": "잘못된 요청[400 Bad Request]",
            "example": "예: 필수 값이 빠지면 `400 Bad Request`를 반환한다."
          },
          {
            "id": "rule-rest-readme-rest-term-15",
            "title": "인증 실패",
            "section": "자주 보는 상태 코드",
            "prompt": "인증 정보가 없거나 잘못된 상태를 뜻하는 코드.",
            "answer": "401 Unauthorized",
            "displayAnswer": "인증 실패[401 Unauthorized]",
            "example": "예: 토큰이 없으면 `401 Unauthorized`를 내려준다."
          },
          {
            "id": "rule-rest-readme-rest-term-16",
            "title": "권한 없음",
            "section": "자주 보는 상태 코드",
            "prompt": "권한은 있지만 해당 작업이 허용되지 않음을 뜻하는 코드.",
            "answer": "403 Forbidden",
            "displayAnswer": "권한 없음[403 Forbidden]",
            "example": "예: 일반 유저가 관리자 API를 호출하면 `403 Forbidden`이다."
          },
          {
            "id": "rule-rest-readme-rest-term-17",
            "title": "찾을 수 없음",
            "section": "자주 보는 상태 코드",
            "prompt": "요청한 자원이 존재하지 않음을 뜻하는 코드.",
            "answer": "404 Not Found",
            "displayAnswer": "찾을 수 없음[404 Not Found]",
            "example": "예: 없는 게시글 ID면 `404 Not Found`를 반환한다."
          },
          {
            "id": "rule-rest-readme-rest-term-18",
            "title": "서버 오류",
            "section": "자주 보는 상태 코드",
            "prompt": "서버 내부 오류를 뜻하는 코드.",
            "answer": "500 Internal Server Error",
            "displayAnswer": "서버 오류[500 Internal Server Error]",
            "example": "예: 처리 중 예외가 나면 `500 Internal Server Error`가 날 수 있다."
          },
          {
            "id": "rule-rest-readme-rest-term-19",
            "title": "쿠키",
            "section": "인증 / 세션 / 토큰",
            "prompt": "브라우저에 저장되고 요청마다 자동으로 전송될 수 있는 작은 데이터 조각.",
            "answer": "Cookie",
            "displayAnswer": "쿠키[Cookie]",
            "example": "예: 세션 기반 로그인에서는 쿠키[Cookie]에 세션 식별자를 담는다."
          },
          {
            "id": "rule-rest-readme-rest-term-20",
            "title": "세션",
            "section": "인증 / 세션 / 토큰",
            "prompt": "서버가 사용자 로그인 상태를 저장해 두는 방식.",
            "answer": "Session",
            "displayAnswer": "세션[Session]",
            "example": "예: 서버는 세션[Session] 저장소에서 로그인 상태를 확인한다."
          },
          {
            "id": "rule-rest-readme-rest-term-21",
            "title": "토큰 인증",
            "section": "인증 / 세션 / 토큰",
            "prompt": "서버가 상태를 저장하지 않고, 클라이언트가 토큰을 보관하는 방식.",
            "answer": "Token Authentication",
            "displayAnswer": "토큰 인증[Token Authentication]",
            "example": "예: 모바일 앱은 토큰 인증[Token Authentication]을 많이 쓴다."
          },
          {
            "id": "rule-rest-readme-rest-term-22",
            "title": "제이더블유티",
            "section": "인증 / 세션 / 토큰",
            "prompt": "JSON 형태로 서명된 토큰을 이용하는 인증 방식.",
            "answer": "JWT",
            "displayAnswer": "제이더블유티[JWT]",
            "example": "예: 로그인 성공 후 JWT를 발급해서 API 호출에 사용한다."
          },
          {
            "id": "rule-rest-readme-rest-term-23",
            "title": "베어러 토큰",
            "section": "인증 / 세션 / 토큰",
            "prompt": "인증 정보를 요청 헤더에 넣어 보내는 방식.",
            "answer": "Bearer Token",
            "displayAnswer": "베어러 토큰[Bearer Token]",
            "example": "예: `Authorization: Bearer <token>` 형식으로 보낸다."
          },
          {
            "id": "rule-rest-readme-rest-term-24",
            "title": "동일 출처 정책",
            "section": "CORS / 브라우저 보안",
            "prompt": "브라우저가 다른 출처 간 요청을 제한하는 보안 정책.",
            "answer": "Same-Origin Policy",
            "displayAnswer": "동일 출처 정책[Same-Origin Policy]",
            "example": "예: 포트가 다르면 동일 출처 정책[Same-Origin Policy]에 걸릴 수 있다."
          },
          {
            "id": "rule-rest-readme-rest-term-25",
            "title": "교차 출처 리소스 공유",
            "section": "CORS / 브라우저 보안",
            "prompt": "다른 출처 요청을 허용할지 정하는 브라우저 보안 규칙.",
            "answer": "CORS",
            "displayAnswer": "교차 출처 리소스 공유[CORS]",
            "example": "예: 프론트와 API 서버 도메인이 다르면 CORS 설정이 필요하다."
          },
          {
            "id": "rule-rest-readme-rest-term-26",
            "title": "프리플라이트 요청",
            "section": "CORS / 브라우저 보안",
            "prompt": "본 요청 전에 브라우저가 미리 보내는 사전 확인 요청.",
            "answer": "Preflight Request",
            "displayAnswer": "프리플라이트 요청[Preflight Request]",
            "example": "예: `OPTIONS` 메서드로 프리플라이트 요청[Preflight Request]이 먼저 간다."
          },
          {
            "id": "rule-rest-readme-rest-term-27",
            "title": "출처 허용 헤더",
            "section": "CORS / 브라우저 보안",
            "prompt": "서버가 어떤 출처를 허용하는지 알려주는 응답 헤더.",
            "answer": "Access-Control-Allow-Origin",
            "displayAnswer": "출처 허용 헤더[Access-Control-Allow-Origin]",
            "example": "예: 개발 환경에서는 `http://localhost:3000`만 허용할 수 있다."
          },
          {
            "id": "rule-rest-readme-rest-term-28",
            "title": "제이슨 API 패턴",
            "section": "실무 패턴",
            "prompt": "클라이언트가 JSON을 보내고 서버가 JSON으로 응답하는 가장 흔한 패턴.",
            "answer": "JSON API Pattern",
            "displayAnswer": "제이슨 API 패턴[JSON API Pattern]",
            "example": "예: `Content-Type: application/json`을 헤더에 넣는다."
          },
          {
            "id": "rule-rest-readme-rest-term-29",
            "title": "토큰 로그인 플로우",
            "section": "실무 패턴",
            "prompt": "로그인 후 토큰을 받아 이후 요청 헤더에 넣는 흐름.",
            "answer": "Token Login Flow",
            "displayAnswer": "토큰 로그인 플로우[Token Login Flow]",
            "example": "예: 로그인 성공 후 받은 토큰으로 `/me` API를 호출한다."
          },
          {
            "id": "rule-rest-readme-rest-term-30",
            "title": "쿠키 세션 플로우",
            "section": "실무 패턴",
            "prompt": "로그인 후 쿠키를 저장하고 이후 요청에서 자동 인증하는 흐름.",
            "answer": "Cookie Session Flow",
            "displayAnswer": "쿠키 세션 플로우[Cookie Session Flow]",
            "example": "예: 브라우저는 저장된 쿠키를 다음 요청에 자동으로 붙인다."
          },
          {
            "id": "rule-rest-readme-rest-term-31",
            "title": "페이지네이션",
            "section": "실무 패턴",
            "prompt": "페이지 목록을 여러 조각으로 나눠서 조회하는 패턴.",
            "answer": "Pagination",
            "displayAnswer": "페이지네이션[Pagination]",
            "example": "예: `/posts?page=2&limit=20`처럼 페이지네이션을 건다."
          },
          {
            "id": "rule-rest-readme-rest-term-32",
            "title": "멱등성",
            "section": "실무 패턴",
            "prompt": "같은 요청을 여러 번 보내도 결과가 같아야 하는 성질.",
            "answer": "Idempotency",
            "displayAnswer": "멱등성[Idempotency]",
            "example": "예: 같은 삭제 요청을 두 번 보내도 최종 상태는 같아야 한다."
          },
          {
            "id": "rest-content-type",
            "title": "Content-Type",
            "section": "주요 헤더",
            "prompt": "요청·응답 바디의 데이터 형식을 알려 주는 헤더. JSON이면 application/json을 쓴다.",
            "answer": "Content-Type",
            "displayAnswer": "Content-Type",
            "example": "예: POST JSON을 보낼 때 Content-Type을 application/json으로 둔다."
          },
          {
            "id": "rest-authorization",
            "title": "Authorization",
            "section": "주요 헤더",
            "prompt": "로그인 토큰 등 인증 정보를 담는 요청 헤더. Bearer 토큰과 함께 자주 쓴다.",
            "answer": "Authorization",
            "displayAnswer": "Authorization",
            "example": "예: Authorization 헤더에 Bearer 토큰을 넣어 API를 호출한다."
          },
          {
            "id": "rest-accept",
            "title": "Accept",
            "section": "주요 헤더",
            "prompt": "클라이언트가 받고 싶은 응답 형식을 서버에 알리는 헤더.",
            "answer": "Accept",
            "displayAnswer": "Accept",
            "example": "예: Accept에 application/json을 넣으면 JSON 응답을 기대한다는 뜻이다."
          },
          {
            "id": "rest-application-json",
            "title": "JSON 바디",
            "section": "바디 전송 방식",
            "prompt": "본문을 JSON으로 보내는 가장 흔한 REST 방식. Content-Type은 application/json.",
            "answer": "application/json",
            "displayAnswer": "application/json",
            "example": "예: 로그인 API는 보통 application/json으로 id와 pw를 보낸다."
          },
          {
            "id": "rest-form-urlencoded",
            "title": "폼 URL 인코딩",
            "section": "바디 전송 방식",
            "prompt": "HTML form처럼 key=value&... 형태로 바디를 보내는 방식.",
            "answer": "application/x-www-form-urlencoded",
            "displayAnswer": "application/x-www-form-urlencoded",
            "example": "예: 전통적인 로그인 form은 application/x-www-form-urlencoded를 쓴다."
          },
          {
            "id": "rest-multipart",
            "title": "멀티파트",
            "section": "바디 전송 방식",
            "prompt": "파일 업로드처럼 텍스트와 바이너리를 한 요청에 섞어 보낼 때 쓰는 바디 형식.",
            "answer": "multipart/form-data",
            "displayAnswer": "multipart/form-data",
            "example": "예: 프로필 이미지 업로드는 multipart/form-data로 보낸다."
          },
          {
            "id": "rest-local-storage",
            "title": "로컬 스토리지",
            "section": "브라우저 저장소",
            "prompt": "브라우저에 장기 저장하는 키-값 저장소. 탭을 닫아도 남고, 요청에 자동으로 안 붙는다.",
            "answer": "localStorage",
            "displayAnswer": "localStorage",
            "example": "예: JWT를 localStorage에 두고 Authorization 헤더에 직접 넣는다."
          },
          {
            "id": "rest-session-storage",
            "title": "세션 스토리지",
            "section": "브라우저 저장소",
            "prompt": "탭(세션)이 열려 있는 동안만 유지되는 브라우저 키-값 저장소.",
            "answer": "sessionStorage",
            "displayAnswer": "sessionStorage",
            "example": "예: 임시 입력값은 sessionStorage에 두면 탭을 닫을 때 사라진다."
          },
          {
            "id": "rest-httponly",
            "title": "HttpOnly 쿠키",
            "section": "브라우저 저장소",
            "prompt": "JavaScript에서 읽지 못하게 막아 XSS로 토큰이 훔쳐지기 어렵게 하는 쿠키 옵션.",
            "answer": "HttpOnly",
            "displayAnswer": "HttpOnly",
            "example": "예: 세션 쿠키는 httpOnly로 심어 document.cookie로 못 읽게 한다."
          },
          {
            "id": "rest-options",
            "title": "OPTIONS",
            "section": "HTTP 메서드",
            "prompt": "CORS 프리플라이트처럼 본 요청 전에 허용 여부를 묻는 데 쓰는 메서드.",
            "answer": "OPTIONS",
            "displayAnswer": "OPTIONS",
            "example": "예: 브라우저가 먼저 OPTIONS로 서버 CORS 허용을 확인한다."
          },
          {
            "id": "rest-credentials",
            "title": "credentials",
            "section": "CORS / 브라우저 보안",
            "prompt": "교차 출처 요청에 쿠키를 포함할지 정하는 옵션. 서버도 Allow-Credentials를 허용해야 한다.",
            "answer": "credentials",
            "displayAnswer": "credentials",
            "example": "예: fetch에 credentials include와 서버 CORS credentials true를 맞춘다."
          },
          {
            "id": "rest-req-body",
            "title": "요청 바디 읽기",
            "section": "실무 패턴",
            "prompt": "Express 등에서 클라이언트가 보낸 JSON 본문을 읽는 객체. req.body.",
            "answer": "req.body",
            "displayAnswer": "req.body",
            "example": "예: 로그인 핸들러에서 const { id, pw } = req.body로 꺼낸다."
          },
          {
            "id": "rest-req-headers",
            "title": "요청 헤더 읽기",
            "section": "실무 패턴",
            "prompt": "Express 등에서 클라이언트가 보낸 헤더를 읽는 객체. req.headers.",
            "answer": "req.headers",
            "displayAnswer": "req.headers",
            "example": "예: Authorization은 req.headers.authorization으로 확인한다."
          },
          {
            "id": "rest-openapi",
            "title": "OpenAPI",
            "section": "API 계약",
            "prompt": "REST API의 경로·메서드·스키마·응답을 기계가 읽을 수 있게 기술하는 명세 표준. Swagger UI와 함께 쓴다.",
            "answer": "OpenAPI",
            "displayAnswer": "OpenAPI[OpenAPI / Swagger]",
            "example": "예: 프론트는 OpenAPI 스키마로 타입과 목을 맞춘다."
          },
          {
            "id": "rest-api-contract",
            "title": "API 계약",
            "section": "API 계약",
            "prompt": "프론트와 백엔드가 합의한 요청·응답·에러 규칙. 명세가 바뀌면 양쪽이 같이 맞춘다.",
            "answer": "API Contract",
            "displayAnswer": "API 계약[API Contract]",
            "example": "예: 필드명을 바꾸기 전에 API Contract를 먼저 갱신한다."
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
            "example": "예: 주문·회원처럼 관계가 분명한 도메인은 RDB가 잘 맞는다."
          },
          {
            "id": "sql-pk",
            "title": "기본 키",
            "section": "키 / 제약",
            "prompt": "테이블에서 각 행을 유일하게 식별하는 컬럼(또는 컬럼 조합). null을 허용하지 않는다.",
            "answer": "PK",
            "displayAnswer": "PK",
            "example": "예: users 테이블의 user_id를 PK로 잡았다."
          },
          {
            "id": "sql-fk",
            "title": "외래 키",
            "section": "키 / 제약",
            "prompt": "다른 테이블의 기본 키를 참조해 두 테이블의 관계를 강제하는 키.",
            "answer": "FK",
            "displayAnswer": "FK",
            "example": "예: orders.user_id는 users.user_id를 가리키는 FK다."
          },
          {
            "id": "sql-uk",
            "title": "유니크 키",
            "section": "키 / 제약",
            "prompt": "테이블 안에서 값이 중복되지 않도록 막는 제약. 기본 키가 아니어도 쓸 수 있다.",
            "answer": "UK",
            "displayAnswer": "UK",
            "example": "예: 이메일은 로그인 식별자라서 UK로 걸었다."
          },
          {
            "id": "sql-ddl",
            "title": "데이터 정의 언어",
            "section": "SQL 분류",
            "prompt": "테이블·인덱스·제약 같은 구조(스키마)를 정의하거나 변경하는 SQL 분류. CREATE, ALTER, DROP이 여기에 속한다.",
            "answer": "DDL",
            "displayAnswer": "DDL",
            "example": "예: 컬럼 추가는 DDL이라 배포 전에 마이그레이션으로 돌린다."
          },
          {
            "id": "sql-dml",
            "title": "데이터 조작 언어",
            "section": "SQL 분류",
            "prompt": "테이블의 실제 데이터를 조회·추가·수정·삭제하는 SQL 분류. SELECT, INSERT, UPDATE, DELETE가 여기에 속한다.",
            "answer": "DML",
            "displayAnswer": "DML",
            "example": "예: 주문 상태 변경은 DML이라 트랜잭션으로 묶는 편이 안전하다."
          },
          {
            "id": "sql-schema",
            "title": "스키마",
            "section": "데이터 모델",
            "prompt": "테이블, 컬럼, 타입, 제약 등 데이터베이스 구조의 설계·정의.",
            "answer": "Schema",
            "displayAnswer": "Schema",
            "example": "예: 스키마를 먼저 잡고 나서 애플리케이션 코드를 맞췄다."
          },
          {
            "id": "sql-index",
            "title": "인덱스",
            "section": "성능 / 구조",
            "prompt": "특정 컬럼 조회를 빠르게 하기 위해 미리 만들어 두는 검색용 자료구조. 쓰기가 조금 느려질 수 있다.",
            "answer": "Index",
            "displayAnswer": "Index",
            "example": "예: WHERE email = ?가 잦아서 email에 index를 걸었다."
          },
          {
            "id": "sql-constraint",
            "title": "제약 조건",
            "section": "키 / 제약",
            "prompt": "PK, FK, UK, NOT NULL처럼 데이터가 지켜야 할 규칙을 데이터베이스가 강제하는 장치.",
            "answer": "Constraint",
            "displayAnswer": "Constraint",
            "example": "예: 음수 재고를 막으려면 check constraint를 검토한다."
          },
          {
            "id": "sql-normalization",
            "title": "정규화",
            "section": "데이터 모델",
            "prompt": "중복을 줄이고 이상(anomaly)을 막기 위해 테이블을 논리적으로 나누는 설계 과정.",
            "answer": "Normalization",
            "displayAnswer": "Normalization",
            "example": "예: 주소가 여러 곳에 중복되어 정규화로 분리했다."
          },
          {
            "id": "sql-transaction",
            "title": "트랜잭션",
            "section": "트랜잭션",
            "prompt": "여러 쿼리를 하나의 작업 단위로 묶어 전부 성공하거나 전부 취소되게 하는 개념.",
            "answer": "Transaction",
            "displayAnswer": "Transaction",
            "example": "예: 이체 로직은 transaction으로 묶어야 중간 실패를 막는다."
          },
          {
            "id": "sql-acid",
            "title": "ACID",
            "section": "트랜잭션",
            "prompt": "트랜잭션이 보장해야 할 네 성질. 원자성[Atomicity], 일관성[Consistency], 격리[Isolation], 지속성[Durability].",
            "answer": "ACID",
            "displayAnswer": "ACID",
            "example": "예: 결제 DB는 ACID를 강하게 보장하는 쪽을 고른다."
          },
          {
            "id": "sql-orm",
            "title": "객체 관계 매핑",
            "section": "도구",
            "prompt": "Prisma, TypeORM처럼 테이블을 객체로 다루게 해 SQL을 직접 쓰지 않아도 되게 하는 기법.",
            "answer": "ORM",
            "displayAnswer": "ORM",
            "example": "예: Prisma 같은 ORM을 쓰면 쿼리를 코드로 작성할 수 있다."
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
            "example": "예: 함수 호출은 parentheses 안에 인자를 넣는다."
          },
          {
            "id": "symbol-square-brackets",
            "title": "대괄호",
            "section": "괄호류",
            "prompt": "[ ] — 배열 인덱스[index]에 쓰는 괄호.",
            "answer": "square brackets",
            "displayAnswer": "square brackets",
            "example": "예: 배열 접근은 square brackets로 한다."
          },
          {
            "id": "symbol-curly-brackets",
            "title": "중괄호",
            "section": "괄호류",
            "prompt": "{ } — 코드 블록[code block]을 감싸는 괄호.",
            "answer": "curly brackets",
            "displayAnswer": "curly brackets",
            "example": "예: 함수 본문은 curly brackets로 감싼다."
          },
          {
            "id": "symbol-angle-brackets",
            "title": "꺾쇠괄호",
            "section": "괄호류",
            "prompt": "< > — 태그[tag]나 제네릭에 쓰는 괄호. 단독으로는 less than / greater than.",
            "answer": "angle brackets",
            "displayAnswer": "angle brackets",
            "example": "예: HTML 태그는 angle brackets로 쓴다."
          },
          {
            "id": "symbol-hash",
            "title": "샵",
            "section": "기호",
            "prompt": "# — 번호나 해시태그, URL 조각[fragment]에 쓰는 기호.",
            "answer": "number sign",
            "displayAnswer": "number sign",
            "example": "예: URL 뒤의"
          },
          {
            "id": "symbol-at",
            "title": "골뱅이",
            "section": "기호",
            "prompt": "@ — 이메일 주소나 데코레이터에 쓰는 기호.",
            "answer": "at sign",
            "displayAnswer": "at sign",
            "example": "예: 이메일 주소는 at sign으로 도메인을 구분한다."
          },
          {
            "id": "symbol-percent",
            "title": "퍼센트",
            "section": "기호",
            "prompt": "% — 백분율이나 나머지 연산에 쓰는 기호.",
            "answer": "percent sign",
            "displayAnswer": "percent sign",
            "example": "예: 나머지 연산자도 percent sign을 쓴다."
          },
          {
            "id": "symbol-asterisk",
            "title": "별표",
            "section": "기호",
            "prompt": "* — 곱셈이나 전체 선택[wildcard]에 쓰는 기호.",
            "answer": "asterisk",
            "displayAnswer": "asterisk",
            "example": "예: 모든 파일을 뜻할 때 asterisk를 wildcard로 쓴다."
          },
          {
            "id": "symbol-caret",
            "title": "캐럿",
            "section": "기호",
            "prompt": "^ — 문자열 시작이나 거듭제곱 표기에 쓰는 기호.",
            "answer": "caret",
            "displayAnswer": "caret",
            "example": "예: 정규식에서 caret은 문자열 시작을 뜻한다."
          },
          {
            "id": "symbol-dollar",
            "title": "달러",
            "section": "기호",
            "prompt": "$ — 문자열 끝(정규식)이나 변수 표기에 쓰는 기호.",
            "answer": "dollar sign",
            "displayAnswer": "dollar sign",
            "example": "예: 정규식에서 dollar sign은 문자열 끝을 뜻한다."
          },
          {
            "id": "symbol-exclamation",
            "title": "느낌표",
            "section": "기호",
            "prompt": "! — 부정[not]에 쓰는 기호.",
            "answer": "exclamation mark",
            "displayAnswer": "exclamation mark",
            "example": "예: 논리 부정은 exclamation mark로 쓴다."
          },
          {
            "id": "symbol-question",
            "title": "물음표",
            "section": "기호",
            "prompt": "? — 삼항 연산자나 옵셔널에 쓰는 기호.",
            "answer": "question mark",
            "displayAnswer": "question mark",
            "example": "예: 옵셔널 체이닝은 question mark와 dot을 붙여 쓴다."
          },
          {
            "id": "symbol-colon",
            "title": "콜론",
            "section": "기호",
            "prompt": ": — 키와 값, 타입 표기를 구분하는 기호.",
            "answer": "colon",
            "displayAnswer": "colon",
            "example": "예: 객체의 키와 값은 colon으로 구분한다."
          },
          {
            "id": "symbol-semicolon",
            "title": "세미콜론",
            "section": "기호",
            "prompt": "; — 문장 끝을 표시하는 기호.",
            "answer": "semicolon",
            "displayAnswer": "semicolon",
            "example": "예: 문장 끝에는 semicolon을 붙인다."
          },
          {
            "id": "symbol-comma",
            "title": "쉼표",
            "section": "기호",
            "prompt": ", — 값이나 요소를 나누는 기호.",
            "answer": "comma",
            "displayAnswer": "comma",
            "example": "예: 배열 요소는 comma로 나눈다."
          },
          {
            "id": "symbol-period",
            "title": "마침표",
            "section": "기호",
            "prompt": ". — 속성 접근이나 파일 확장자에 쓰는 기호.",
            "answer": "period",
            "displayAnswer": "period",
            "example": "예: 객체 속성은 dot으로 접근한다."
          },
          {
            "id": "symbol-hyphen",
            "title": "하이픈",
            "section": "기호",
            "prompt": "- — 복합어[compound word]나 CLI 옵션에 쓰는 기호.",
            "answer": "hyphen",
            "displayAnswer": "hyphen",
            "example": "예: CSS 속성 이름은 hyphen으로 잇는다."
          },
          {
            "id": "symbol-underscore",
            "title": "밑줄",
            "section": "기호",
            "prompt": "_ — 변수 이름 연결이나 private 관례에 쓰는 기호.",
            "answer": "underscore",
            "displayAnswer": "underscore",
            "example": "예: _private처럼 underscore로 내부용을 표시하기도 한다."
          },
          {
            "id": "symbol-plus",
            "title": "더하기",
            "section": "기호",
            "prompt": "+ — 덧셈이나 문자열 연결에 쓰는 기호.",
            "answer": "plus sign",
            "displayAnswer": "plus sign",
            "example": "예: 문자열 연결에도 plus sign을 쓴다."
          },
          {
            "id": "symbol-equal",
            "title": "등호",
            "section": "기호",
            "prompt": "= — 값 할당[assign]에 쓰는 기호.",
            "answer": "equal sign",
            "displayAnswer": "equal sign",
            "example": "예: 변수 할당은 equal sign으로 한다."
          },
          {
            "id": "symbol-backslash",
            "title": "역슬래시",
            "section": "기호",
            "prompt": "\\ — 윈도우 파일 경로나 이스케이프에 쓰는 기호.",
            "answer": "backslash",
            "displayAnswer": "backslash",
            "example": "예: 윈도우 경로 구분자는 backslash다."
          },
          {
            "id": "symbol-forward-slash",
            "title": "슬래시",
            "section": "기호",
            "prompt": "/ — 유닉스 파일 경로나 나눗셈에 쓰는 기호.",
            "answer": "forward slash",
            "displayAnswer": "forward slash",
            "example": "예: URL 경로는 forward slash로 나눈다."
          },
          {
            "id": "symbol-backtick",
            "title": "백틱",
            "section": "기호",
            "prompt": "` — 템플릿 문자열[template string]을 감싸는 기호.",
            "answer": "backtick",
            "displayAnswer": "backtick",
            "example": "예: 템플릿 문자열은 backtick으로 감싼다."
          },
          {
            "id": "symbol-double-quote",
            "title": "큰따옴표",
            "section": "기호",
            "prompt": "\" — 문자열을 감싸는 두 줄 따옴표.",
            "answer": "double quotation marks",
            "displayAnswer": "double quotation marks",
            "example": "예: JSON 키는 double quotation marks만 허용한다."
          },
          {
            "id": "symbol-single-quote",
            "title": "작은따옴표",
            "section": "기호",
            "prompt": "' — 문자열을 감싸는 한 줄 따옴표.",
            "answer": "single quotation marks",
            "displayAnswer": "single quotation marks",
            "example": "예: JS에서는 single quotation marks도 흔히 쓴다."
          },
          {
            "id": "symbol-pipe",
            "title": "파이프",
            "section": "기호",
            "prompt": "| — 명령 출력을 다음 명령으로 넘기거나 OR에 쓰는 기호.",
            "answer": "pipe",
            "displayAnswer": "pipe",
            "example": "예: 셸에서 pipe로 명령을 연결한다."
          },
          {
            "id": "symbol-ampersand",
            "title": "앰퍼샌드",
            "section": "기호",
            "prompt": "& — AND 연산이나 백그라운드 실행에 쓰는 기호.",
            "answer": "ampersand",
            "displayAnswer": "ampersand",
            "example": "예: 논리 AND는 ampersand 두 개로 쓴다."
          },
          {
            "id": "symbol-tilde",
            "title": "물결",
            "section": "기호",
            "prompt": "~ — 홈 디렉터리[home directory]를 뜻하는 기호.",
            "answer": "tilde",
            "displayAnswer": "tilde",
            "example": "예: 셸에서 tilde는 홈 디렉터리를 가리킨다."
          },
          {
            "id": "symbol-delimiter",
            "title": "구분자",
            "section": "개념",
            "prompt": "쉼표, 세미콜론, 탭, 공백, 파이프처럼 데이터를 나누는 문자를 통칭하는 말.",
            "answer": "delimiter",
            "displayAnswer": "delimiter",
            "example": "예: CSV의 delimiter는 comma다."
          },
          {
            "id": "symbol-parameter-argument",
            "title": "매개변수와 인자",
            "section": "개념",
            "prompt": "함수 정의에 쓰는 변수 이름과, 호출할 때 실제로 넘기는 값을 구분하는 용어.",
            "answer": "parameter / argument",
            "displayAnswer": "parameter / argument",
            "example": "예: 정의에 있는 것은 parameter, 호출할 때 넘기는 것은 argument다."
          }
        ]
      }
    ]
  },
  {
    "id": "terms-architecture",
    "label": "architecture",
    "folderName": "architecture",
    "lessons": [
      {
        "id": "knowledge-terms-architecture",
        "title": "프로젝트 구조·계층 용어",
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
            "example": "예: 계층형 아키텍처[Layered architecture]에서 Controller는 Service만 호출한다."
          },
          {
            "id": "arch-feature-based",
            "title": "기능 단위 구조",
            "section": "구조",
            "prompt": "user·order처럼 도메인(기능)별로 폴더를 묶어 관련 코드를 한곳에 두는 방식.",
            "answer": "Feature-based structure",
            "displayAnswer": "Feature-based structure",
            "example": "예: 기능 단위 구조[Feature-based structure]면 payment 관련 파일이 한 폴더에 모인다."
          },
          {
            "id": "arch-controller",
            "title": "컨트롤러",
            "section": "백엔드 계층",
            "prompt": "HTTP 요청을 받아 응답하는 진입점. 비즈니스 로직은 두지 않는다.",
            "answer": "Controller",
            "displayAnswer": "Controller",
            "example": "예: 컨트롤러[Controller]는 입력 검증 후 Service를 호출한다."
          },
          {
            "id": "arch-service",
            "title": "서비스",
            "section": "백엔드 계층",
            "prompt": "비즈니스 규칙과 흐름을 담당하는 계층.",
            "answer": "Service",
            "displayAnswer": "Service",
            "example": "예: 주문 취소 규칙은 서비스[Service]에 둔다."
          },
          {
            "id": "arch-repository",
            "title": "리포지토리",
            "section": "백엔드 계층",
            "prompt": "DB 조회·저장을 추상화하는 데이터 접근 계층.",
            "answer": "Repository",
            "displayAnswer": "Repository",
            "example": "예: 리포지토리[Repository]에서만 SQL·ORM 호출을 한다."
          },
          {
            "id": "arch-dto",
            "title": "전송 객체",
            "section": "백엔드 계층",
            "prompt": "API·계층 간에 데이터를 전달하기 위한 전송용 객체. Entity와 분리한다.",
            "answer": "DTO",
            "displayAnswer": "DTO",
            "example": "예: 로그인 요청 바디는 전송 객체[DTO]로 받고 Entity를 그대로 노출하지 않는다."
          },
          {
            "id": "arch-entity",
            "title": "엔티티",
            "section": "백엔드 계층",
            "prompt": "DB 테이블에 대응하는 영속·도메인 모델.",
            "answer": "Entity",
            "displayAnswer": "Entity",
            "example": "예: User 엔티티[Entity]는 users 테이블과 매핑된다."
          }
        ]
      }
    ]
  },
  {
    "id": "terms-camera",
    "label": "camera",
    "folderName": "camera",
    "lessons": [
      {
        "id": "knowledge-terms-camera",
        "title": "촬영 실무 어휘",
        "fileName": "camera-terms.yaml",
        "sourcePath": "assets/raw/knowledge/terms/camera-terms.yaml",
        "parts": [
          {
            "id": "camera-headspace",
            "title": "헤드스페이스",
            "section": "사진",
            "prompt": "피사체가 바라보는 방향에 여백을 두어 시선의 흐름과 여유를 연출하는 구도.",
            "answer": "Headspace",
            "displayAnswer": "Headspace",
            "example": "예: 인물이 오른쪽을 보면 오른쪽에 헤드스페이스[Headspace]를 남긴다."
          },
          {
            "id": "camera-rule-of-thirds",
            "title": "룰 오브 써드",
            "section": "사진",
            "prompt": "화면을 3×3으로 나누어 주요 피사체나 수평선을 교차점·선 위에 배치하는 구도.",
            "answer": "Rule of Thirds",
            "displayAnswer": "Rule of Thirds",
            "example": "예: 수평선은 룰 오브 써드[Rule of Thirds] 위쪽 선에 맞춘다."
          },
          {
            "id": "camera-leading-lines",
            "title": "리딩 라인",
            "section": "사진",
            "prompt": "선이나 형태를 이용해 시선을 자연스럽게 피사체로 유도하는 기법.",
            "answer": "Leading Lines",
            "displayAnswer": "Leading Lines",
            "example": "예: 도로의 리딩 라인[Leading Lines]으로 시선을 건물로 이끈다."
          },
          {
            "id": "camera-symmetry",
            "title": "대칭 구도",
            "section": "사진",
            "prompt": "좌우 대칭을 활용해 안정감·질서·강한 인상을 연출하는 구도.",
            "answer": "Symmetry",
            "displayAnswer": "Symmetry",
            "example": "예: 반사된 호수로 대칭 구도[Symmetry]를 잡았다."
          },
          {
            "id": "camera-framing",
            "title": "프레이밍",
            "section": "사진",
            "prompt": "주변 요소를 액자처럼 활용해 피사체를 강조하고 집중도를 높이는 기법.",
            "answer": "Framing",
            "displayAnswer": "Framing",
            "example": "예: 아치로 피사체를 프레이밍[Framing]했다."
          },
          {
            "id": "camera-foreground",
            "title": "전경 활용",
            "section": "사진",
            "prompt": "전경을 포함해 깊이감과 공간감을 표현하는 기법.",
            "answer": "Foreground",
            "displayAnswer": "Foreground",
            "example": "예: 나뭇가지를 전경[Foreground]에 넣어 깊이감을 살렸다."
          },
          {
            "id": "camera-shallow-dof",
            "title": "얕은 심도",
            "section": "사진",
            "prompt": "조리개를 열어 배경을 흐리게 하여 피사체를 돋보이게 하는 심도 표현.",
            "answer": "Shallow DOF",
            "displayAnswer": "Shallow DOF",
            "example": "예: 인물 촬영은 얕은 심도[Shallow DOF]로 배경을 날린다."
          },
          {
            "id": "camera-deep-dof",
            "title": "깊은 심도",
            "section": "사진",
            "prompt": "조리개를 조여 전경부터 배경까지 모두 선명하게 표현하는 심도.",
            "answer": "Deep DOF",
            "displayAnswer": "Deep DOF",
            "example": "예: 풍경은 깊은 심도[Deep DOF]로 전경·배경을 함께 살린다."
          },
          {
            "id": "camera-negative-space",
            "title": "네거티브 스페이스",
            "section": "사진",
            "prompt": "여백을 적극 활용해 단순함과 메시지의 여운을 강조하는 구도.",
            "answer": "Negative Space",
            "displayAnswer": "Negative Space",
            "example": "예: 하늘 여백으로 네거티브 스페이스[Negative Space]를 크게 잡았다."
          },
          {
            "id": "camera-close-up",
            "title": "클로즈업",
            "section": "사진",
            "prompt": "피사체를 가까이 촬영해 디테일·질감·감정을 강조하는 샷.",
            "answer": "Close-up",
            "displayAnswer": "Close-up",
            "example": "예: 손의 질감은 클로즈업[Close-up]으로 보여 준다."
          },
          {
            "id": "camera-long-shot",
            "title": "롱 샷",
            "section": "사진",
            "prompt": "넓은 배경을 포함해 피사체와 환경의 관계를 강조하는 샷.",
            "answer": "Long Shot",
            "displayAnswer": "Long Shot",
            "example": "예: 도시와 인물의 관계는 롱 샷[Long Shot]으로 잡는다."
          },
          {
            "id": "camera-high-angle",
            "title": "하이 앵글",
            "section": "사진",
            "prompt": "피사체를 위에서 내려다보는 구도. 작고 약한 느낌이나 전개를 표현한다.",
            "answer": "High Angle",
            "displayAnswer": "High Angle",
            "example": "예: 하이 앵글[High Angle]로 피사체를 작게 보이게 했다."
          },
          {
            "id": "camera-low-angle",
            "title": "로우 앵글",
            "section": "사진",
            "prompt": "피사체를 아래에서 올려다보는 구도. 크고 강한 느낌·위엄을 표현한다.",
            "answer": "Low Angle",
            "displayAnswer": "Low Angle",
            "example": "예: 로우 앵글[Low Angle]로 건물의 위엄을 살렸다."
          },
          {
            "id": "camera-golden-ratio",
            "title": "골든 비율",
            "section": "사진",
            "prompt": "황금비율(1:1.618)을 활용해 조화롭고 자연스러운 구도를 연출하는 기법.",
            "answer": "Golden Ratio",
            "displayAnswer": "Golden Ratio",
            "example": "예: 주 피사체를 골든 비율[Golden Ratio] 곡선 위에 놓았다."
          },
          {
            "id": "camera-pattern",
            "title": "패턴",
            "section": "사진",
            "prompt": "반복되는 형태나 패턴을 활용해 리듬감과 통일감을 강조하는 구도.",
            "answer": "Pattern",
            "displayAnswer": "Pattern",
            "example": "예: 창문의 반복 패턴[Pattern]으로 리듬을 만들었다."
          },
          {
            "id": "camera-contrast",
            "title": "대비",
            "section": "사진",
            "prompt": "명암·색상·크기 등의 대비로 강렬한 인상과 주목도를 높이는 기법.",
            "answer": "Contrast",
            "displayAnswer": "Contrast",
            "example": "예: 밝은 피사체와 어두운 배경의 대비[Contrast]를 살렸다."
          },
          {
            "id": "camera-silhouette",
            "title": "실루엣",
            "section": "사진",
            "prompt": "역광을 활용해 실루엣으로 촬영해 형태와 분위기를 강조하는 기법.",
            "answer": "Silhouette",
            "displayAnswer": "Silhouette",
            "example": "예: 석양 앞 인물을 실루엣[Silhouette]으로 담았다."
          },
          {
            "id": "camera-backlight",
            "title": "역광",
            "section": "사진",
            "prompt": "빛을 뒤에서 비춰 피사체에 빛의 윤곽과 분위기를 더하는 조명.",
            "answer": "Backlight",
            "displayAnswer": "Backlight",
            "example": "예: 역광[Backlight]으로 머리카락에 윤곽광을 만들었다."
          },
          {
            "id": "camera-motion-blur",
            "title": "모션 블러",
            "section": "사진",
            "prompt": "느린 셔터속도로 움직임을 흐리게 표현해 속도감과 역동성을 연출하는 기법.",
            "answer": "Motion Blur",
            "displayAnswer": "Motion Blur",
            "example": "예: 달리는 차를 모션 블러[Motion Blur]로 표현했다."
          },
          {
            "id": "camera-panorama",
            "title": "파노라마",
            "section": "사진",
            "prompt": "가로로 넓게 촬영해 광활한 풍경과 스케일을 표현하는 기법.",
            "answer": "Panorama",
            "displayAnswer": "Panorama",
            "example": "예: 능선 전체를 파노라마[Panorama]로 이어 찍었다."
          },
          {
            "id": "camera-crane-up",
            "title": "크레인 업",
            "section": "영상",
            "prompt": "카메라가 위로 올라가며 넓은 시야를 보여주는 무브. 공간의 확장·웅장함을 준다.",
            "answer": "Crane Up",
            "displayAnswer": "Crane Up",
            "example": "예: 엔딩은 크레인 업[Crane Up]으로 공간을 넓힌다."
          },
          {
            "id": "camera-crane-down",
            "title": "크레인 다운",
            "section": "영상",
            "prompt": "카메라가 아래로 내려오며 피사체를 점차 부각하는 무브. 긴장·집중을 만든다.",
            "answer": "Crane Down",
            "displayAnswer": "Crane Down",
            "example": "예: 크레인 다운[Crane Down]으로 주인공에게 시선을 모은다."
          },
          {
            "id": "camera-jib-up",
            "title": "지브 업",
            "section": "영상",
            "prompt": "지브(긴 암)로 카메라를 위로 올리는 무브. 스케일과 입체감을 강조한다.",
            "answer": "Jib Up",
            "displayAnswer": "Jib Up",
            "example": "예: 지브 업[Jib Up]으로 세트 전체 스케일을 보여 준다."
          },
          {
            "id": "camera-jib-down",
            "title": "지브 다운",
            "section": "영상",
            "prompt": "지브로 카메라를 아래로 내리는 무브. 압박감 있는 상황을 표현한다.",
            "answer": "Jib Down",
            "displayAnswer": "Jib Down",
            "example": "예: 지브 다운[Jib Down]으로 압박감을 실었다."
          },
          {
            "id": "camera-dolly-in",
            "title": "달리 인",
            "section": "영상",
            "prompt": "카메라가 피사체를 향해 앞으로 다가가는 무브. 몰입·긴장·감정 고조를 만든다.",
            "answer": "Dolly In",
            "displayAnswer": "Dolly In",
            "example": "예: 대화 클라이맥스는 달리 인[Dolly In]으로 다가간다."
          },
          {
            "id": "camera-dolly-out",
            "title": "달리 아웃",
            "section": "영상",
            "prompt": "카메라가 피사체에서 물러나는 무브. 상황 정리·감정의 거리를 표현한다.",
            "answer": "Dolly Out",
            "displayAnswer": "Dolly Out",
            "example": "예: 장면 마무리는 달리 아웃[Dolly Out]으로 거리를 둔다."
          },
          {
            "id": "camera-dolly-left",
            "title": "달리 레프트",
            "section": "영상",
            "prompt": "카메라가 좌로 이동하는 무브. 시선 이동·관계 변화를 표현한다.",
            "answer": "Dolly Left",
            "displayAnswer": "Dolly Left",
            "example": "예: 달리 레프트[Dolly Left]로 옆 인물에게 시선을 옮긴다."
          },
          {
            "id": "camera-dolly-right",
            "title": "달리 라이트",
            "section": "영상",
            "prompt": "카메라가 우로 이동하는 무브. 시선 이동·관계 변화를 표현한다.",
            "answer": "Dolly Right",
            "displayAnswer": "Dolly Right",
            "example": "예: 달리 라이트[Dolly Right]로 관계의 전환을 보여 준다."
          },
          {
            "id": "camera-zoom-in",
            "title": "줌 인",
            "section": "영상",
            "prompt": "화각을 좁혀 피사체를 키우는 무브. 강조·집중·긴장을 만든다.",
            "answer": "Zoom In",
            "displayAnswer": "Zoom In",
            "example": "예: 표정에 줌 인[Zoom In]해 감정을 강조한다."
          },
          {
            "id": "camera-zoom-out",
            "title": "줌 아웃",
            "section": "영상",
            "prompt": "화각을 넓혀 피사체를 작게 보이게 하는 무브. 상황 설명·여유·위축감을 준다.",
            "answer": "Zoom Out",
            "displayAnswer": "Zoom Out",
            "example": "예: 줌 아웃[Zoom Out]으로 주변 상황을 드러낸다."
          },
          {
            "id": "camera-crash-zoom-in",
            "title": "크래시 줌 인",
            "section": "영상",
            "prompt": "줌과 전진을 빠르게 동시에 쓰는 무브. 충격·놀람·극적 강조를 만든다.",
            "answer": "Crash Zoom In",
            "displayAnswer": "Crash Zoom In",
            "example": "예: 반전 순간은 크래시 줌 인[Crash Zoom In]으로 충격을 준다."
          },
          {
            "id": "camera-crash-zoom-out",
            "title": "크래시 줌 아웃",
            "section": "영상",
            "prompt": "줌과 후진을 빠르게 동시에 쓰는 무브. 충격·혼란·극적 전환을 만든다.",
            "answer": "Crash Zoom Out",
            "displayAnswer": "Crash Zoom Out",
            "example": "예: 크래시 줌 아웃[Crash Zoom Out]으로 장면이 급전환된다."
          },
          {
            "id": "camera-tilt-up",
            "title": "틸트 업",
            "section": "영상",
            "prompt": "카메라 각도를 위로 기울이는 무브. 피사체의 키·웅장함을 강조한다.",
            "answer": "Tilt Up",
            "displayAnswer": "Tilt Up",
            "example": "예: 틸트 업[Tilt Up]으로 건물 높이를 보여 준다."
          },
          {
            "id": "camera-tilt-down",
            "title": "틸트 다운",
            "section": "영상",
            "prompt": "카메라 각도를 아래로 기울이는 무브. 상황 파악·압박감을 표현한다.",
            "answer": "Tilt Down",
            "displayAnswer": "Tilt Down",
            "example": "예: 틸트 다운[Tilt Down]으로 바닥에 놓인 소품을 드러낸다."
          },
          {
            "id": "camera-overhead",
            "title": "오버헤드",
            "section": "영상",
            "prompt": "피사체를 바로 위에서 내려다보며 촬영. 전체 상황 파악·관계 드러내기에 쓴다.",
            "answer": "Overhead",
            "displayAnswer": "Overhead",
            "example": "예: 오버헤드[Overhead]로 테이블 위 배치를 한눈에 보여 준다."
          },
          {
            "id": "camera-static",
            "title": "스태틱",
            "section": "영상",
            "prompt": "카메라를 고정하고 촬영하는 방식. 안정감과 관찰자 시점의 시선이 된다.",
            "answer": "Static",
            "displayAnswer": "Static",
            "example": "예: 대화 신은 스태틱[Static]으로 안정감을 유지한다."
          },
          {
            "id": "camera-handheld",
            "title": "핸드헬드",
            "section": "영상",
            "prompt": "손으로 카메라를 들고 촬영. 사실감·긴장·생동감을 만든다.",
            "answer": "Handheld",
            "displayAnswer": "Handheld",
            "example": "예: 추격 신은 핸드헬드[Handheld]로 긴장감을 살린다."
          },
          {
            "id": "camera-car-chasing",
            "title": "카 체이싱",
            "section": "영상",
            "prompt": "차량을 이용해 추격 장면을 촬영. 속도·긴박·액션을 강조한다.",
            "answer": "Car Chasing",
            "displayAnswer": "Car Chasing",
            "example": "예: 고속도로 추격은 카 체이싱[Car Chasing]으로 찍는다."
          },
          {
            "id": "camera-lazy-susan",
            "title": "레이지 수잔",
            "section": "영상",
            "prompt": "카메라(또는 피사체)를 수평으로 회전시키는 무브. 관계 변화·긴장·탐색을 표현한다.",
            "answer": "Lazy Susan",
            "displayAnswer": "Lazy Susan",
            "example": "예: 레이지 수잔[Lazy Susan]으로 인물 관계를 천천히 드러낸다."
          }
        ]
      }
    ]
  }
] as LexiconTrack[];
