// 프로젝트가 늘어나면 이 배열에 객체만 추가하면 갤러리·모달에 자동 반영됩니다.
const PROJECTS = [
  {
    id: "reverse-engineering-study",
    name: "오늘의 역기획",
    tagline: "PM 취준생을 위한 매일 3분 역기획 습관 앱",
    year: "2026",
    tags: ["Web App", "Product", "Solo"],
    accent: "#3182F6",
    accent2: "#7C5CFF",
    // cover.type: "iframe" | "video" | "image" — 나중에 데모 영상이 생기면 video로만 바꾸면 됨
    cover: { type: "iframe", src: "https://reverseengineeringstudyapp.vercel.app" },
    description:
      "5주 39만원짜리 코호트 스터디의 빈틈을 발견하고, 시장조사부터 빌드·배포·채널 공유까지 8일 만에 혼자 완주했습니다. 반응 0건이라는 결과도 그대로 남겼습니다.",
    stats: [
      { n: "8일", l: "기획부터 배포까지" },
      { n: "6개", l: "직접 리서치한 기업 케이스" },
      { n: "3번", l: "방향을 튼 피벗" },
      { n: "0건", l: "실사용자 반응 — 숨기지 않음", isNull: true }
    ],
    pivots: [
      {
        n: "01",
        title: "브레인스토밍 앱 → 역기획 앱",
        body: "막연한 아이디어 수집 앱에서, PM 면접 과제 포맷과 정확히 겹치는 역기획 기반으로 컨셉을 좁혔습니다."
      },
      {
        n: "02",
        title: "인터뷰 먼저 → 출시 먼저",
        body: "WTP 인터뷰 스크립트까지 준비했지만, 형식적 인터뷰보다 실제 배포 후 반응이 더 정직한 신호라고 판단해 방향을 틀었습니다."
      },
      {
        n: "03",
        title: "편집적 디자인 → 토스 스타일",
        body: "세리프 헤드라인의 실험적 디자인을 사용자 피드백을 받고 전면 재작업 — 실배포 제품과 리포트의 디자인 기준은 다르다는 걸 배웠습니다."
      }
    ],
    skills: [
      "시장·경쟁사 실사 리서치",
      "제품 요구사항 정의",
      "BYOK 아키텍처 설계",
      "프론트엔드 구현 (Vanilla JS)",
      "서버리스 함수 · 영구 저장소 구축",
      "Vercel 배포 · CI 연결",
      "가격 정책 페이크도어 테스트",
      "디자인 시스템 반복 개선",
      "커뮤니티 채널 운영",
      "데이터 기반 정직한 회고"
    ],
    links: {
      live: "https://reverseengineeringstudyapp.vercel.app",
      github: "https://github.com/kumori0042-sketch/reverse-engineering-study-app",
      caseStudy: "https://claude.ai/code/artifact/5db5e871-4dd1-40d7-bfb0-1e003d6f33b6"
    }
  },
  {
    id: "dev-goods-shop",
    name: "버그없음 마켓",
    tagline: "개발자를 위한, 개발자가 만든 굿즈 데모 쇼핑몰",
    year: "2026",
    tags: ["Web App", "E-commerce", "Solo"],
    accent: "#3182F6",
    accent2: "#12B886",
    cover: { type: "iframe", src: "https://dev-goods-shop.vercel.app" },
    description:
      "상품 목록 + 장바구니 + 체크아웃까지 실제로 눌러볼 수 있는 이커머스 데모입니다. 결제·배송은 처리하지 않지만, 주문 접수 자체는 서버리스 함수로 실제 동작해 주문번호가 발급됩니다.",
    stats: [
      { n: "8종", l: "개발자 굿즈 상품" },
      { n: "1개", l: "서버리스 함수" },
      { n: "0원", l: "실제 결제, 완전 데모", isNull: true },
      { n: "100%", l: "실제로 작동하는 주문 흐름" }
    ],
    pivots: [
      {
        n: "01",
        title: "실제 결제 대신 모의 체크아웃",
        body: "포트폴리오 데모에 진짜 결제 연동은 과하다고 판단 — 대신 주문 접수 자체는 서버로 실제 전송되고 주문번호가 발급되도록 만들어 '진짜 동작하는 절반'과 '데모인 절반'을 명확히 나눴습니다."
      },
      {
        n: "02",
        title: "덮어쓰기 대신 append-only 저장",
        body: "이전 프로젝트(Q&A 게시판)에서 Vercel Blob 덮어쓰기가 CDN 캐시 때문에 즉시 반영 안 되는 문제를 겪어서, 주문 데이터도 처음부터 새 파일만 추가하는 방식으로 설계했습니다."
      }
    ],
    skills: [
      "장바구니 상태 관리 (localStorage)",
      "체크아웃 플로우 설계",
      "서버리스 주문 접수 API",
      "Vercel Blob 영구 저장",
      "일관된 디자인 시스템 재사용",
      "Vercel 배포 · CI 연결"
    ],
    links: {
      live: "https://dev-goods-shop.vercel.app",
      github: "https://github.com/kumori0042-sketch/dev-goods-shop"
    }
  },
  {
    id: "crypto-trading-bot",
    name: "크립토 자동매매 봇",
    tagline: "실거래 자금으로 8개월 돌린 바이낸스 선물 자동매매 시스템",
    year: "2026",
    tags: ["Python", "Automation", "Solo"],
    accent: "#3182F6",
    accent2: "#F04452",
    cover: { type: "image", src: "crypto-bot-pipeline.svg" },
    description:
      "실제 자금(소액)으로 바이낸스 선물 자동매매 봇을 8개월간 운영했습니다. AI 신호 블렌딩, 다축 필터, 텔레그램 원격제어까지 17번 넘게 버전을 갈아엎으며 실거래 로그를 기반으로 전략을 계속 다듬었습니다.",
    stats: [
      { n: "8개월", l: "실거래 운영 기간" },
      { n: "17+", l: "전략 버전 반복 (v8~v9)" },
      { n: "8개", l: "동시 모니터링 심볼" },
      { n: "4단계", l: "티어별 리스크 관리 체계" }
    ],
    pivots: [
      {
        n: "01",
        title: "단일 기술지표 → AI 신호 블렌딩",
        body: "ADX·RSI·DI 같은 기술적 지표만으로는 부족하다고 판단해, Groq API로 공포·탐욕지수·펀딩비·BTC 상관관계 같은 실시간 시장 컨텍스트를 반영하는 AI 점수를 기술점수와 블렌딩하는 구조로 바꿨습니다."
      },
      {
        n: "02",
        title: "추세추종 전용 → 횡보장 대응 추가",
        body: "ADX가 낮은 횡보장에서 손실이 집중되는 걸 로그로 확인하고, 볼린저밴드 평균회귀 기반 RANGE 전략을 추가해 공포·탐욕 지수에 따라 진입 크기를 동적으로 조절하도록 만들었습니다."
      },
      {
        n: "03",
        title: "수수료가 손실의 41% 차지 → Maker 진입으로 전환",
        body: "10배 레버리지 + Taker 수수료 기준으로는 손익분기 승률이 43~48%까지 올라간다는 걸 계산하고, 왕복 수수료를 0.10%에서 0.04%로 낮추는 Maker(GTX) 진입을 필수 조건으로 바꿨습니다."
      }
    ],
    skills: [
      "실거래 자동매매 시스템 설계",
      "티어별 리스크 관리 (레버리지 · SL/TP)",
      "AI 신호 블렌딩 (Groq API)",
      "실거래 로그 기반 파라미터 튜닝",
      "Telegram 원격 제어 (/pause /closeall)",
      "장애 감지 · 워치독 구성",
      "데이터 기반 정직한 회고"
    ],
    links: {}
  },
  {
    id: "daily-sudoku",
    name: "오늘의 스도쿠",
    tagline: "서버 없이 날짜로 생성되는, 매일 하나의 스도쿠",
    year: "2026",
    tags: ["Web App", "Game", "Solo"],
    accent: "#3182F6",
    accent2: "#7C5CFF",
    cover: { type: "iframe", src: "https://daily-sudoku-mu.vercel.app" },
    description:
      "매일 모두에게 같은 문제가 나오는 데일리 스도쿠입니다. 문제를 미리 저장해두지 않고 날짜를 시드로 브라우저에서 생성하기 때문에 서버도 DB도 없고, 요일마다 난이도가 달라집니다.",
    stats: [
      { n: "0개", l: "서버 · DB" },
      { n: "3단계", l: "요일별 난이도" },
      { n: "30/30", l: "검증한 날짜 모두 해가 유일" },
      { n: "7일", l: "지난 문제 다시 풀기" }
    ],
    pivots: [
      {
        n: "01",
        title: "문제 DB → 날짜 시드 생성",
        body: "매일 올릴 문제를 미리 만들어 저장하는 대신, 날짜 문자열을 시드로 완성판을 만들고 칸을 지워 가며 해가 유일한지 매번 검증하도록 했습니다. 같은 날짜는 항상 같은 문제라 콘텐츠 관리도 서버도 필요 없습니다."
      },
      {
        n: "02",
        title: "규칙 충돌 검사 대신 정답 대조",
        body: "숫자를 규칙 충돌로만 판정하면 충돌은 없지만 정답이 아닌 숫자가 통과됩니다. 해가 유일하다는 점을 이용해 정답과 직접 대조하도록 설계했고, 틀린 숫자는 즉시 표시하며 실수로 기록합니다. 맞힌 칸은 잠가서 기록이 흔들리지 않게 했습니다."
      },
      {
        n: "03",
        title: "지난 문제는 연속 기록에서 제외",
        body: "지난 6일 문제를 다시 풀 수 있게 하되, 그날 푼 것만 연속 풀이에 반영합니다. 밀린 문제를 몰아서 풀어 스트릭을 채우는 걸 막아 '매일 하나'라는 습관 설계를 지켰습니다."
      }
    ],
    skills: [
      "시드 기반 절차적 생성 (PRNG)",
      "백트래킹 풀이 · 유일해 검증",
      "게임 상태 관리 (메모 · 되돌리기)",
      "연속 풀이 · 결과 공유 등 습관 설계",
      "모바일 우선 반응형 · 다크 모드",
      "Vercel 배포"
    ],
    links: {
      live: "https://daily-sudoku-mu.vercel.app"
    }
  }
];
