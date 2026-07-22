window.GOMGOM_PROJECTS = [
  {
    slug: "sairo",
    name: "사이로",
    mark: "SR",
    icon: "assets/icons/sairo.png",
    type: "iOS App",
    category: "app",
    summary: "지도를 고르고 도보 경로를 추천받으며, 걸은 길을 GPS로 기록·분석하는 SwiftUI 산책 앱입니다.",
    description: "사이로는 Apple·카카오·네이버·구글 지도 중에서 골라 도보 경로를 추천하고, 자유 기록 모드로 걸은 길을 GPS로 남겨 거리·시간·새로움을 Core ML로 기기 안에서 분석하는 iOS 앱입니다. 모든 학습과 기록은 외부 서버 없이 기기에 저장됩니다.",
    highlights: [
      "Apple·카카오·네이버·구글 지도 선택과 도보 경로 추천",
      "어제와 덜 겹치는 새로운 경로 우선 추천",
      "출발·도착 없이 걷는 자유 GPS 기록과 분석",
      "Core ML 온디바이스 학습, 홈 화면 위젯, 실시간 날씨"
    ],
    stack: ["SwiftUI", "CoreLocation", "MapKit", "CoreML", "WeatherKit"],
    sourceRepo: "jhny-kor/novalane",
    repoUrl: "https://github.com/jhny-kor/novalane",
    pagePath: "./sairo/",
    supportUrl: "mailto:gomgomi.k.dev@gmail.com",
    policyUrl: "#sairo"
  },
  {
    slug: "geulttaogi",
    name: "글따오기",
    mark: "GT",
    icon: "assets/icons/geulttaogi.png",
    type: "macOS App",
    category: "app",
    summary: "스크린샷과 이미지에서 텍스트를 추출하고 요약, 수정, 재분석까지 연결하는 OCR 앱입니다.",
    description: "이미지 속 텍스트를 빠르게 불러오고 필요한 구역만 다시 분석할 수 있도록 만든 생산성 앱입니다. 기존 gomgom-dev Pages의 글따오기 소개 페이지를 통합 템플릿으로 정리했습니다.",
    highlights: [
      "이미지와 스크린샷의 텍스트 추출",
      "요약과 전체 내용 확인 및 직접 수정",
      "선택 영역 재분석 흐름",
      "삭제한 분석 내용 아카이브 복원"
    ],
    stack: ["macOS", "OCR", "Swift", "App Store"],
    storeLinks: [
      {
        label: "iOS App Store",
        shortLabel: "iOS Store",
        url: "https://apps.apple.com/kr/app/%EA%B8%80%EB%94%B0%EC%98%A4%EA%B8%B0/id6764681575"
      },
      {
        label: "macOS App Store",
        shortLabel: "macOS Store",
        url: "https://apps.apple.com/kr/app/%EA%B8%80%EB%94%B0%EC%98%A4%EA%B8%B0/id6764681575?mt=12"
      }
    ],
    sourceRepo: "local 글따오기 workspace",
    repoUrl: "https://github.com/gomgom-dev/gomgom-dev.github.io/tree/main/geulttaogi",
    referenceUrl: "https://github.com/jhny-kor/jhny-kor.github.io/tree/main/geulttaogi",
    pagePath: "./geulttaogi/",
    supportUrl: "mailto:gomgomi.k.dev@gmail.com",
    policyUrl: "../privacy-policy/"
  },
  {
    slug: "my-shoebox",
    name: "우리 가족의 신발장",
    mark: "MS",
    icon: "assets/icons/my-shoebox.png",
    type: "Web / Mobile App",
    category: "app",
    summary: "가족 코드로 함께 쓰는 신발장과 신발 위치를 관리하는 모바일 브라우저용 웹 MVP입니다.",
    description: "우리 가족의 신발장은 가족 코드로 같은 Supabase/Postgres 데이터를 공유하고, 정사각형 구역과 칸 단위로 신발 위치를 관리하는 모바일 브라우저용 웹 MVP입니다. 현재 운영 Web URL은 https://shoebox-blue.vercel.app 입니다.",
    highlights: [
      "신발장, 구역, 칸, 신발, 사진 기반 보관 위치 관리",
      "가족 코드 기반 공동 신발장 접근",
      "구역과 칸의 추가, 삭제, 이동 및 소유자 기록",
      "Next.js API route와 Supabase/Postgres 연동"
    ],
    stack: ["Next.js", "Supabase", "Vercel", "TypeScript"],
    liveUrl: "https://shoebox-blue.vercel.app",
    liveLabel: "Shoebox Web MVP",
    liveShortLabel: "Web MVP",
    sourceRepo: "jhny-kor/shoebox",
    repoUrl: "https://github.com/jhny-kor/shoebox",
    pagePath: "./my-shoebox/",
    supportUrl: "https://github.com/jhny-kor/shoebox/issues",
    policyUrl: "../privacy-policy/"
  },
  {
    slug: "fly-above",
    name: "fly above",
    mark: "FA",
    type: "iOS App",
    category: "app",
    summary: "현재 위치 주변의 항공기, 하늘 방향, 관측 기록을 확인하는 SwiftUI 기반 항공 관측 앱입니다.",
    description: "fly above는 현재 위치를 기준으로 주변 항공기와 하늘 방향을 계산하고, 항공편 검색, 모니터링, 관측 기록을 하나의 iOS 앱 안에서 다루도록 만든 프로젝트입니다.",
    highlights: [
      "현재 위치 기준 30km 주변 항공기 탐색",
      "방향, 거리, 고도각 기반 시야 가능성 계산",
      "항공편 검색과 모니터링 목록 관리",
      "관측 기록을 기기 내부에 저장"
    ],
    stack: ["SwiftUI", "CoreLocation", "MapKit", "Aviation"],
    sourceRepo: "local fly above workspace",
    pagePath: "./fly-above/",
    supportUrl: "mailto:gomgomi.k.dev@gmail.com",
    policyUrl: "#fly-above"
  },
  {
    slug: "opentax",
    name: "OpenTax",
    mark: "OT",
    icon: "assets/icons/opentax.png",
    type: "Web / MCP",
    category: "site",
    summary: "대한민국 세금, 공제, 정책지원, 신고기한을 검증 가능한 지식 그래프로 묶는 웹 가이드입니다.",
    description: "jhny-kor Pages의 OpenTax를 기준으로, 세금 정보와 정책지원 데이터를 앱과 문서에서 재사용할 수 있는 표면으로 정리합니다. 공개 온톨로지, MCP endpoint, 지원 문서를 한 페이지에서 연결합니다.",
    highlights: [
      "세목, 공제, 정책지원, 신고기한의 그래프형 탐색",
      "공식 출처와 기준일 중심의 설명 구조",
      "JSON export와 MCP endpoint 연결",
      "지원, 약관, 개인정보 문서 링크 정리"
    ],
    stack: ["HTML", "CSS", "JavaScript", "MCP"],
    sourceRepo: "jhny-kor/TaxMeter",
    repoUrl: "https://github.com/jhny-kor/TaxMeter",
    referenceUrl: "https://jhny-kor.github.io/TaxMeter/opentax/",
    pagePath: "./opentax/",
    externalPage: "https://jhny-kor.github.io/TaxMeter/opentax/",
    supportUrl: "https://github.com/jhny-kor/TaxMeter/issues",
    policyUrl: "https://jhny-kor.github.io/TaxMeter/opentax/privacy.html"
  },
  {
    slug: "tax-ontology",
    name: "TaxMeter Ontology",
    mark: "TO",
    type: "Data Site",
    category: "data",
    summary: "세금, 지원금, 금융상품을 같은 기준으로 연결하는 TaxMeter 공개 온톨로지 허브입니다.",
    description: "TaxMeter Ontology는 OpenTax와 OpenFin을 하나의 공개 데이터 표면으로 묶고, 앱과 MCP가 같은 manifest와 출처를 읽도록 연결하는 허브입니다.",
    highlights: [
      "국세와 지방세 카테고리의 구조화",
      "정책지원과 사업자 세무 흐름 연결",
      "데이터 생성, 검증, export 파이프라인 설명",
      "TaxMeter 기능과 데이터 노드의 매핑 기반"
    ],
    stack: ["Ontology", "JSON", "Graph", "Tax"],
    sourceRepo: "jhny-kor/TaxMeter",
    repoUrl: "https://github.com/jhny-kor/TaxMeter",
    referenceUrl: "https://jhny-kor.github.io/TaxMeter/",
    pagePath: "./tax-ontology/",
    supportUrl: "https://github.com/jhny-kor/TaxMeter/issues",
    policyUrl: "https://jhny-kor.github.io/TaxMeter/opentax/privacy.html"
  },
  {
    slug: "taxmeter",
    name: "TaxMeter",
    mark: "TM",
    icon: "assets/icons/taxmeter.png",
    type: "Tax App",
    category: "app",
    summary: "소득·지출·자산과 제도 기준선을 비교해 세금·복지 정보를 탐색하는 iOS 앱 프로젝트입니다.",
    description: "TaxMeter는 사용자의 소득·지출·자산과 제도 기준선을 비교하고, OpenTax와 OpenFin의 검증 가능한 데이터를 앱 기능으로 연결하는 iOS 세금·복지 네비게이터입니다.",
    highlights: [
      "세금 기준과 공식 출처 기반 설명",
      "OpenTax 온톨로지와 앱 기능 연결",
      "SwiftUI iOS 앱과 JSON/MCP 데이터 표면",
      "이슈 트래커를 통한 기준 누락 및 오류 접수"
    ],
    stack: ["SwiftUI", "iOS", "OpenTax", "OpenFin"],
    sourceRepo: "jhny-kor/TaxMeter",
    repoUrl: "https://github.com/jhny-kor/TaxMeter",
    referenceUrl: "https://github.com/jhny-kor/TaxMeter",
    pagePath: "./taxmeter/",
    supportUrl: "https://github.com/jhny-kor/TaxMeter/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "openfin",
    name: "OpenFin",
    mark: "OF",
    type: "Web / MCP",
    category: "data",
    summary: "세금, 지원금, 카드, 은행, 보험 데이터를 하나의 금융 온톨로지로 묶는 공개 탐색면입니다.",
    description: "OpenFin은 TaxMeter의 금융 통합 온톨로지로, 검색·탐색·비교·추천 결과와 출처를 같은 manifest에서 확인하고 GitHub Pages와 MCP로 제공합니다.",
    highlights: [
      "세금·지원금·카드·은행·보험 도메인 통합",
      "manifest, 샤드 인덱스, 기준일과 출처 노출",
      "OpenFin Explorer와 Cloudflare MCP 연결",
      "조건 기반 금융상품 비교와 추천 표면"
    ],
    stack: ["HTML", "JSON", "MCP", "Cloudflare"],
    sourceRepo: "jhny-kor/TaxMeter",
    repoUrl: "https://github.com/jhny-kor/TaxMeter",
    referenceUrl: "https://jhny-kor.github.io/TaxMeter/openfin/",
    pagePath: "./openfin/",
    supportUrl: "https://github.com/jhny-kor/TaxMeter/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "open-trader",
    name: "OpenTrader",
    mark: "OT",
    image: "assets/projects/open-trader.png",
    type: "Trading Platform",
    category: "automation",
    summary: "Toss를 실거래 브로커로 연결하고 KIS를 조회·보조 데이터에 사용하는 로컬 주식 운영 도구입니다.",
    description: "OpenTrader는 한국·미국 주식 시세 수집, 종목 분석, 수동 주문, 자동매매, 주문 복구와 Telegram 알림을 하나의 로컬 운영 화면으로 묶습니다.",
    highlights: [
      "Toss·KIS 계좌, 보유자산, 주문, 체결 조회",
      "한국·미국 종목 마스터와 1분 시세 수집",
      "dry-run, readiness, 리스크 사전검증 중심 주문 흐름",
      "공모주·뉴스·공시·분석 리포트와 Telegram 알림"
    ],
    stack: ["Python", "Toss OpenAPI", "KIS API", "Telegram"],
    sourceRepo: "jhny-kor/OpenTrader",
    repoUrl: "https://github.com/jhny-kor/OpenTrader",
    pagePath: "./open-trader/",
    supportUrl: "https://github.com/jhny-kor/OpenTrader/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "auto-coin-trading",
    name: "AutoCoinTrading",
    mark: "AC",
    type: "Trading Bot",
    category: "automation",
    summary: "비트코인, 이더리움, 리플 등 코인 자동매매 전략과 운영 자동화를 다루는 Python 프로젝트입니다.",
    description: "jhny-kor의 AutoCoinTrading 공개 레포를 기준으로 코인 자동매매 봇의 목적, 실행 표면, 운영 문서 진입점을 대표 Pages 안에 정리했습니다.",
    highlights: [
      "코인 자동매매 프로그램",
      "AI agent, bitcoin, ethereum, ripple 토픽 기반",
      "거래 전략과 운영 자동화 분리",
      "GitHub 레포를 원본 문서로 연결"
    ],
    stack: ["Python", "Trading", "Automation", "Crypto"],
    sourceRepo: "jhny-kor/AutoCoinTrading",
    repoUrl: "https://github.com/jhny-kor/AutoCoinTrading",
    referenceUrl: "https://github.com/jhny-kor/AutoCoinTrading",
    pagePath: "./auto-coin-trading/",
    supportUrl: "https://github.com/jhny-kor/AutoCoinTrading/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "auto-stock-trading",
    name: "AutoStockTrading",
    mark: "AS",
    icon: "assets/icons/auto-stock-trading.png",
    type: "Trading Bot",
    category: "automation",
    summary: "주식 자동매매 운영 흐름과 분석 작업을 묶는 Python 기반 프로젝트입니다.",
    description: "AutoStockTrading은 주식 매매 자동화와 데이터 수집 흐름을 위한 레포입니다. 대표 Pages에서는 실행 코드보다 프로젝트 목적과 원본 저장소 링크를 우선 제공합니다.",
    highlights: [
      "주식 자동매매 프로젝트 진입점",
      "Python 기반 운영 스크립트 레포",
      "분석, 주문, 알림 흐름의 문서화 대상",
      "원본 GitHub 이슈와 저장소 연결"
    ],
    stack: ["Python", "Stock", "Automation", "Trading"],
    sourceRepo: "jhny-kor/AutoStockTrading",
    repoUrl: "https://github.com/jhny-kor/AutoStockTrading",
    referenceUrl: "https://github.com/jhny-kor/AutoStockTrading",
    pagePath: "./auto-stock-trading/",
    supportUrl: "https://github.com/jhny-kor/AutoStockTrading/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "remote-control",
    name: "Remote Control",
    mark: "RC",
    icon: "assets/icons/remote-control.png",
    type: "Remote Control Automation",
    category: "automation",
    summary: "Codex와 로컬 macOS 프로젝트를 원격으로 관리하는 Python/Telegram 기반 매니저입니다.",
    description: "Remote Control은 Codex 작업, 로컬 프로젝트, Telegram 명령을 연결하는 원격 제어 매니저입니다. 대표 페이지에서는 운영 대상과 자동화 링크를 명확히 분리합니다.",
    highlights: [
      "Codex 및 로컬 macOS 프로젝트 원격 관리",
      "Telegram bot 기반 제어 흐름",
      "Python 자동화 스크립트 중심",
      "remote control, macOS, automation 토픽"
    ],
    stack: ["Python", "Telegram", "macOS", "Codex"],
    sourceRepo: "jhny-kor/RemoteControl",
    repoUrl: "https://github.com/jhny-kor/RemoteControl",
    referenceUrl: "https://github.com/jhny-kor/RemoteControl",
    pagePath: "./remote-control/",
    supportUrl: "https://github.com/jhny-kor/RemoteControl/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "porta",
    name: "porta",
    mark: "PT",
    icon: "assets/icons/porta.png",
    type: "iOS / macOS App",
    category: "app",
    summary: "iPhone, iPad, Mac에서 Mac 화면을 보고 조작하는 Apple 원격 제어 클라이언트 앱입니다.",
    description: "porta는 Mac에서 실행되는 host 앱과 연결해 화면 스트리밍, 클릭, 텍스트 입력을 처리하는 Apple 플랫폼 원격 제어 앱입니다. App Store 준비 흐름과 지원 문서를 별도 페이지로 분리해 관리합니다.",
    highlights: [
      "Bonjour 기반 로컬 네트워크 Mac 검색",
      "6자리 페어링 코드로 연결 승인",
      "ScreenCaptureKit과 H.264 기반 화면 스트리밍",
      "iPhone, iPad, Mac 클라이언트 앱 표면"
    ],
    stack: ["Swift", "Network.framework", "ScreenCaptureKit", "App Store"],
    sourceRepo: "jhny-kor/porta",
    repoUrl: "https://github.com/jhny-kor/porta",
    referenceUrl: "https://github.com/jhny-kor/porta",
    pagePath: "./porta/",
    supportUrl: "https://github.com/jhny-kor/porta/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "koda",
    name: "KODA",
    mark: "KD",
    icon: "assets/icons/koda.png",
    type: "Security App",
    category: "app",
    summary: "KODA(Korean On-Device Auditor)는 로컬 환경에서 보안 점검과 스캐닝을 수행하는 보안 도구입니다.",
    description: "KODA는 on-device·on-premise 보안 점검, 품질 게이트, 스캐닝과 리포트 생성을 제공하는 프로젝트입니다. macOS 앱과 Python 대시보드, CLI 사용 흐름을 함께 연결합니다.",
    highlights: [
      "KODA 보안 점검 프로젝트",
      "macOS 앱, Python 대시보드, CLI 흐름",
      "security-scanner, security-tools 토픽",
      "이슈 기반 개선 요청 연결"
    ],
    stack: ["Python", "Swift", "Security", "Scanner"],
    storeLinks: [
      {
        label: "macOS App Store",
        shortLabel: "macOS Store",
        url: "https://apps.apple.com/kr/app/koda/id6770264012?mt=12"
      }
    ],
    sourceRepo: "jhny-kor/sec-chk",
    repoUrl: "https://github.com/jhny-kor/sec-chk",
    referenceUrl: "https://github.com/jhny-kor/sec-chk",
    pagePath: "./koda/",
    supportUrl: "https://github.com/jhny-kor/sec-chk/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "muma",
    name: "MuMA",
    mark: "MM",
    image: "assets/projects/muma.png",
    type: "macOS App",
    category: "app",
    summary: "프롬프트 기반 생성, 오디오 편집, 스템 분리, 믹싱을 연결하는 네이티브 AI 음악 워크스테이션입니다.",
    description: "MuMA는 SwiftUI/AppKit과 C++20 오디오 코어를 기반으로, AI 생성 작업과 타임라인 편집, 녹음, 스템 분리, 렌더링을 하나의 macOS 앱에서 다루는 프로젝트입니다.",
    highlights: [
      "프롬프트 생성과 Suno·ACE-Step 호환 provider",
      "웨이브폼 타임라인, 녹음, 분할·트림·믹싱",
      "Demucs 기반 ML-first stem separation",
      "CoreAudio, C++ DSP, 캐시 기반 고속 렌더링"
    ],
    stack: ["SwiftUI", "AppKit", "C++20", "CoreAudio", "AI"],
    sourceRepo: "jhny-kor/MuMA",
    repoUrl: "https://github.com/jhny-kor/MuMA",
    pagePath: "./muma/",
    supportUrl: "https://github.com/jhny-kor/MuMA/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "owntology-kit",
    name: "OWNtology Kit",
    mark: "OK",
    image: "assets/projects/owntology-kit.png",
    type: "macOS Utility",
    category: "automation",
    summary: "카카오톡, SMS, 메일, 메모, Safari 탭과 GitHub 스타를 개인 온톨로지 볼트로 수집하는 로컬 킷입니다.",
    description: "OWNtology Kit은 개인 기록을 기기 밖으로 보내지 않고 Markdown 기반 볼트로 보존하며, 웹 설정 화면과 원터치 수집·온톨로지화·MCP 연결을 제공합니다.",
    highlights: [
      "카카오톡·SMS·메일·Apple 메모·Safari 탭 수집",
      "수집 원문과 변환된 지식 노트 분리",
      "웹에서 수집 소스와 개인정보 필드 제어",
      "로컬 MCP와 선택적 원격 볼트 미러링"
    ],
    stack: ["Python", "macOS", "Markdown", "MCP"],
    sourceRepo: "jhny-kor/OWNtology-Kit",
    repoUrl: "https://github.com/jhny-kor/OWNtology-Kit",
    pagePath: "./owntology-kit/",
    supportUrl: "https://github.com/jhny-kor/OWNtology-Kit/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "ghwpx",
    name: "gHwpx",
    mark: "HW",
    type: "Python CLI",
    category: "automation",
    summary: "HWPX 템플릿의 문단 서식을 유지하면서 표식과 입력값으로 새 공문서를 생성하는 도구입니다.",
    description: "gHwpx는 기존 한/글 HWPX를 템플릿으로 보존하고, {{body}} 같은 표식만 바꿔 같은 양식의 문서를 안정적으로 생성하는 Python CLI입니다.",
    highlights: [
      "HWPX XML과 템플릿 문단 서식 보존",
      "인라인 필드와 여러 문단 본문 표식 지원",
      "원본을 덮어쓰지 않는 mark·render 흐름",
      "대화형 wizard와 템플릿 inspect/list 명령"
    ],
    stack: ["Python", "HWPX", "XML", "CLI"],
    sourceRepo: "jhny-kor/gHwpx",
    repoUrl: "https://github.com/jhny-kor/gHwpx",
    pagePath: "./ghwpx/",
    supportUrl: "https://github.com/jhny-kor/gHwpx/issues",
    policyUrl: "./privacy-policy/"
  },
  {
    slug: "ai-news",
    name: "AI-News",
    mark: "AI",
    type: "Pages",
    category: "site",
    summary: "AI 관련 페이지와 뉴스성 콘텐츠를 정리하기 위한 Pages 프로젝트입니다.",
    description: "AI-News는 공개 레포 설명 기준으로 AI pages를 제공하는 프로젝트입니다. gomgom-dev 대표 사이트에서는 향후 뉴스, 리포트, 정리 페이지의 진입점으로 둡니다.",
    highlights: [
      "AI 관련 Pages 프로젝트",
      "뉴스와 리포트형 콘텐츠 확장 대상",
      "정적 사이트로 배포하기 쉬운 구조",
      "대표 허브에서 Sites 그룹으로 분류"
    ],
    stack: ["AI", "Pages", "Content", "Static Site"],
    sourceRepo: "jhny-kor/AI-News",
    repoUrl: "https://github.com/jhny-kor/AI-News",
    referenceUrl: "https://github.com/jhny-kor/AI-News",
    pagePath: "./ai-news/",
    supportUrl: "https://github.com/jhny-kor/AI-News/issues",
    policyUrl: "./privacy-policy/"
  }
];
