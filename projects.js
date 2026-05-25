window.GOMGOM_PROJECTS = [
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
    sourceRepo: "gomgom-dev/gomgom-dev.github.io",
    repoUrl: "https://github.com/gomgom-dev/gomgom-dev.github.io/tree/main/geulttaogi",
    referenceUrl: "https://github.com/jhny-kor/jhny-kor.github.io/tree/main/geulttaogi",
    pagePath: "./geulttaogi/",
    supportUrl: "mailto:gomgomi.k.dev@gmail.com",
    policyUrl: "../privacy-policy/"
  },
  {
    slug: "my-shoebox",
    name: "My Shoebox",
    mark: "MS",
    type: "Web / Mobile App",
    category: "app",
    summary: "가족이나 팀이 함께 신발 위치, 사진, 공개 신발장, 구성원 권한을 관리하는 신발장 정리 앱입니다.",
    description: "My Shoebox는 신발장과 신발 사진을 등록하고, 구역과 칸 단위로 보관 위치를 관리하며, 공개 신발장은 방문자도 둘러볼 수 있도록 만든 Expo / Supabase 기반 앱입니다. 운영 Web URL은 https://my-shoebox.vercel.app 입니다.",
    highlights: [
      "신발장, 구역, 칸, 신발, 사진 기반 보관 위치 관리",
      "공개 신발장 조회와 two thumbs up 반응",
      "구성원 초대, 권한, 대표 신발장 설정",
      "신고, 운영자 검토, 개인정보 문서 라우트 제공"
    ],
    stack: ["Expo", "Supabase", "Vercel", "React Native"],
    liveUrl: "https://my-shoebox.vercel.app",
    liveLabel: "My Shoebox Web",
    liveShortLabel: "Web App",
    sourceRepo: "jhny-kor/my-shoebox",
    repoUrl: "https://github.com/jhny-kor/my-shoebox",
    pagePath: "./my-shoebox/",
    supportUrl: "https://my-shoebox.vercel.app/support",
    policyUrl: "https://my-shoebox.vercel.app/legal/privacy"
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
    referenceUrl: "https://github.com/jhny-kor/jhny-kor.github.io/tree/main/opentax",
    pagePath: "./opentax/",
    externalPage: "https://jhny-kor.github.io/opentax/",
    supportUrl: "https://github.com/jhny-kor/TaxMeter/issues",
    policyUrl: "https://jhny-kor.github.io/opentax/privacy.html"
  },
  {
    slug: "tax-ontology",
    name: "Tax Ontology",
    mark: "TO",
    type: "Data Site",
    category: "data",
    summary: "TaxMeter가 재사용할 수 있는 대한민국 세금 온톨로지와 데이터 흐름을 설명하는 사이트입니다.",
    description: "세목, 제도, 용어, 기한, 출처를 ID 기반 노드로 나누고 앱, MCP, 웹에서 같은 데이터를 쓰도록 안내하는 온톨로지 페이지입니다.",
    highlights: [
      "국세와 지방세 카테고리의 구조화",
      "정책지원과 사업자 세무 흐름 연결",
      "데이터 생성, 검증, export 파이프라인 설명",
      "TaxMeter 기능과 데이터 노드의 매핑 기반"
    ],
    stack: ["Ontology", "JSON", "Graph", "Tax"],
    sourceRepo: "jhny-kor/jhny-kor.github.io",
    repoUrl: "https://github.com/jhny-kor/jhny-kor.github.io/tree/main/tax-ontology",
    referenceUrl: "https://jhny-kor.github.io/tax-ontology/",
    pagePath: "./tax-ontology/",
    supportUrl: "https://github.com/jhny-kor/TaxMeter/issues",
    policyUrl: "https://jhny-kor.github.io/opentax/privacy.html"
  },
  {
    slug: "taxmeter",
    name: "TaxMeter",
    mark: "TM",
    icon: "assets/icons/taxmeter.png",
    type: "Tax App",
    category: "app",
    summary: "세금 기준, 위험 신호, 절세 체크리스트를 앱 표면으로 제공하기 위한 Python 기반 프로젝트입니다.",
    description: "TaxMeter는 OpenTax와 Tax Ontology의 데이터 표면을 실제 사용자 기능으로 연결하는 세금 도구 프로젝트입니다. 현재 대표 페이지에서는 레포, 온톨로지, 지원 경로를 한곳에 묶습니다.",
    highlights: [
      "세금 기준과 공식 출처 기반 설명",
      "OpenTax 온톨로지와 앱 기능 연결",
      "Python 기반 데이터 처리 흐름",
      "이슈 트래커를 통한 기준 누락 및 오류 접수"
    ],
    stack: ["Python", "Tax", "OpenTax", "Data"],
    sourceRepo: "jhny-kor/TaxMeter",
    repoUrl: "https://github.com/jhny-kor/TaxMeter",
    referenceUrl: "https://github.com/jhny-kor/TaxMeter",
    pagePath: "./taxmeter/",
    supportUrl: "https://github.com/jhny-kor/TaxMeter/issues",
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
    icon: "assets/icons/remote-control.svg",
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
    summary: "보안 점검과 스캐닝 도구를 다루는 Swift 기반 프로젝트입니다.",
    description: "KODA는 security scanner와 security tools 토픽을 가진 보안 점검 프로젝트입니다. 대표 페이지에서는 저장소, 목적, 지원 경로를 간결하게 제공합니다.",
    highlights: [
      "KODA 보안 점검 프로젝트",
      "Swift 기반 보안 도구 표면",
      "security-scanner, security-tools 토픽",
      "이슈 기반 개선 요청 연결"
    ],
    stack: ["Swift", "Security", "Scanner", "Tooling"],
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
