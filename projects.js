// 프로젝트가 늘어나면 이 배열에 객체만 추가하면 갤러리·모달에 자동 반영됩니다.
const PROJECTS = [
  {
    id: "jgrants-matching",
    featured: true,
    status: "live",
    statusNote: {
      ko: "AI 생성 기능은 아직 API 키 연결 전이에요",
      ja: "AI生成機能はまだAPIキー接続前です",
      en: "AI generation is not connected to an API key yet"
    },
    role: {
      ko: "기획 · 설계 · 개발 · 배포 (1인)",
      ja: "企画・設計・開発・公開（1人）",
      en: "Planning · design · dev · deploy (solo)"
    },
    oneLiner: {
      ko: "일본 중소기업이 보조금을 찾고 신청서 초안까지 쓰도록 돕는 7단계 웹서비스",
      ja: "中小企業が補助金を探し、申請書の下書きまで作れるよう支援する7ステップのWebサービス",
      en: "A 7-step web service that helps Japanese SMEs find subsidies and draft applications"
    },
    proof: {
      ko: "공식 jGrants API로 실시간 검색 · 실제 공모요령에서 심사기준 13개 추출 · 로그인과 기기 간 동기화까지 구현",
      ja: "jGrants公式APIでリアルタイム検索 · 実際の公募要領から審査基準13項目を抽出 · ログインと端末間同期まで実装",
      en: "Live search on the official jGrants API · 13 review criteria extracted from a real call for proposals · login and cross-device sync"
    },
    signals: ["define", "scope", "ship", "uat"],
    name: "補助金かんたん検索",
    nameL: { ko: "補助金かんたん検索", ja: "補助金かんたん検索", en: "補助金かんたん検索 (Easy Subsidy Search)" },
    tagline: "일본 중소기업의 보조금 신청서 작성을 돕는 7단계 웹서비스",
    year: "2026",
    tags: ["Web App", "Service Planning", "Solo"],
    accent: "#3182F6",
    accent2: "#12B886",
    cover: { type: "iframe", src: "https://jgrants-matching.vercel.app" },
    description:
      "경제산업성 jGrants 공식 API로 모집 중인 보조금을 검색하고, 회사 정보를 바탕으로 맞춤 추천을 받고, 질문에 답하면서 신청서 초안을 쓰고, 심사기준 체크리스트로 점검한 뒤 Word 파일로 내려받는 서비스입니다. 검색·기업 정보·로그인·기기 간 동기화·문서 다운로드는 실제로 동작하고, AI 생성 기능(구성안·초안·평가·추천)은 API 키를 연결하기 전 단계입니다.",
    stats: [
      { n: "7단계", l: "검색에서 서류 다운로드까지" },
      { n: "13개", l: "실제 공모요령에서 추출한 심사기준" },
      { n: "4개", l: "비교한 후보 아이템 중 1개 선정" },
      { n: "미연결", l: "AI 생성 기능 — API 키 연결 전", isNull: true }
    ],
    pivots: [
      {
        n: "01",
        title: "마이넘버 기반 자산 진단 → 보조금 매칭",
        body: "'일본판 토스'를 처음 떠올렸지만, 마이넘버법이 이용 목적을 세금·사회보장·재해 대응으로 제한하고 대출 진단은 등록 의무가 생길 수 있어서 접근할 수 없다고 판단했습니다. 후보 4개(부동산 분석, 보조금 매칭, 상권 분석, 구인 통합)를 비교해 공식 API가 열려 있고 경쟁이 적은 보조금 매칭을 골랐습니다."
      },
      {
        n: "02",
        title: "'한 번에 다 써줘' → 질문·답변으로 함께 쓰기",
        body: "AI가 신청서를 통째로 대신 써주는 기능은 행정사 업무 대행으로 보일 수 있고 결과도 뻔한 문장이 되기 쉽습니다. 그래서 AI가 항목별 질문을 던지고 사용자가 짧게 답하면, 그 답변만 근거로 문장을 다듬는 구조로 제한했습니다. 프롬프트에도 답변에 없는 사실이나 숫자를 만들지 않도록 넣었습니다."
      },
      {
        n: "03",
        title: "임의로 넣은 배점 → 실제 공모요령의 심사기준",
        body: "샘플 체크리스트에 임의의 배점을 넣었다가, 실제 공모요령(50쪽 PDF)을 직접 읽어보니 항목별 숫자 배점이 공개되어 있지 않다는 걸 확인했습니다. 임의 배점을 버리고 원문에서 심사기준 13개를 그대로 추출한 뒤, 이 기준을 채우려면 무엇을 물어야 하는지 역산해서 질문을 설계했습니다."
      },
      {
        n: "04",
        title: "고객 관점 UAT에서 발견한 치명적 문제",
        body: "처음 방문한 고객처럼 끝까지 눌러보니, AI 호출이 실패하면 다음 단계로 갈 방법이 아예 없었고 내부 설정 오류 문구가 그대로 노출되고 있었습니다. 'AI 없이 계속 진행' 탈출구를 추가하고, 고객에게는 일반 안내만 보이도록 고쳤습니다."
      }
    ],
    skills: [
      "공공 API 기반 서비스 기획",
      "법적 리스크 검토와 기능 범위 설정",
      "PDF에서 요건 추출",
      "프롬프트 설계 (사실만 사용)",
      "AI 비용 상한 설계",
      "고객 관점 UAT",
      "Next.js · TypeScript · Tailwind",
      "자체 인증 · 기기 간 동기화"
    ],
    links: {
      live: "https://jgrants-matching.vercel.app",
      github: "https://github.com/kumori0042-sketch/jgrants-matching"
    }
  },
  {
    id: "reverse-engineering-study",
    role: {
      ko: "기획 · 설계 · 개발 · 배포 (1인)",
      ja: "企画・設計・開発・公開（1人）",
      en: "Planning · design · dev · deploy (solo)"
    },
    status: "live",
    oneLiner: {
      ko: "PM 취준생이 매일 3분 역기획을 연습하는 습관 앱",
      ja: "PM志望者が毎日3分でリバース企画を練習する習慣アプリ",
      en: "A daily 3-minute reverse-engineering habit app for aspiring PMs"
    },
    proof: {
      ko: "리서치에서 출시까지 8일 · 방향을 3번 튼 과정을 기록 · 반응 0건이라는 결과까지 회고로 공개",
      ja: "リサーチからリリースまで8日 · 方向転換3回の過程を記録 · 反応ゼロという結果まで振り返りで公開",
      en: "Research to launch in 8 days · 3 pivots documented · even the zero-response result is written up"
    },
    signals: ["define", "scope", "ship", "learn"],
    name: "오늘의 역기획",
    nameL: { ko: "오늘의 역기획", ja: "今日のリバース企画", en: "Daily Reverse Engineering" },
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
    id: "daily-puzzles",
    role: {
      ko: "기획 · 설계 · 개발 · 배포 (1인)",
      ja: "企画・設計・開発・公開（1人）",
      en: "Planning · design · dev · deploy (solo)"
    },
    status: "live",
    oneLiner: {
      ko: "스도쿠·직소 등 6종을 골라서 푸는, 서버 없는 데일리 퍼즐 사이트",
      ja: "数独・ジグソーなど6種から選んで遊ぶ、サーバーなしのデイリーパズルサイト",
      en: "A serverless daily puzzle site with six puzzles to choose from"
    },
    proof: {
      ko: "문제를 날짜로 생성해 답이 하나인지 검증 · 난이도를 풀이 기법으로 채점 · 6개 게임이 공통 모듈 공유",
      ja: "問題を日付から生成し、答えが一つか検証 · 難易度を解法テクニックで採点 · 6ゲームが共通モジュールを共有",
      en: "Puzzles are generated from the date and checked for a unique answer · difficulty graded by solving techniques · six games share one module"
    },
    signals: ["scope", "ship", "learn"],
    name: "오늘의 퍼즐",
    nameL: { ko: "오늘의 퍼즐", ja: "今日のパズル", en: "Daily Puzzles" },
    tagline: "스도쿠·직소·노노그램 등 6종을 골라서 푸는, 서버 없는 데일리 퍼즐 사이트",
    year: "2026",
    tags: ["Web App", "Game", "Solo"],
    accent: "#3182F6",
    accent2: "#7C5CFF",
    cover: { type: "iframe", src: "https://daily-puzzles-rho.vercel.app" },
    description:
      "매일 모두에게 같은 문제가 나오는 데일리 퍼즐 사이트입니다. 첫 화면에서 스도쿠, 직소, 노노그램, 퀸즈, 이진 퍼즐, 슬라이드 중 오늘 풀 퍼즐을 고릅니다. 문제와 그림은 모두 날짜를 시드로 브라우저에서 생성하고 답이 하나인지 검증하기 때문에 서버도 DB도 이미지 파일도 없습니다.",
    stats: [
      { n: "6종", l: "목록에서 고르는 퍼즐" },
      { n: "0개", l: "서버 · DB · 이미지 파일" },
      { n: "60/60", l: "검증한 날짜 모두 답이 하나뿐 (스도쿠·노노그램·퀸즈·이진)" },
      { n: "3단계", l: "요일별 난이도" }
    ],
    pivots: [
      {
        n: "01",
        title: "퍼즐마다 사이트 → 하나의 게임 허브",
        body: "스도쿠와 직소를 각각 따로 배포했다가, 같은 디자인 시스템과 '매일 하나' 구조를 공유하므로 하나의 사이트로 합쳤습니다. 목록 화면은 게임 배열에 객체만 추가하면 카드가 생기고, 오늘의 진행 상태와 연속 기록은 각 게임이 저장한 값을 읽어 보여줍니다. 연속 기록은 그날 그 문제를 푼 경우에만 이어지게 해서 밀린 문제로 채우는 걸 막았습니다."
      },
      {
        n: "02",
        title: "남긴 힌트 수 → 풀이 기법으로 난이도 채점",
        body: "처음에는 지운 칸 수로만 스도쿠 난이도를 나눴는데, 힌트가 적어도 쉬운 판이 나올 수 있어서 체감과 어긋났습니다. 싱글·잠긴 후보·페어·X-윙 같은 사람이 쓰는 기법으로 직접 풀어보고, 필요한 기법으로 난이도를 매기도록 바꿨습니다. 60일치 시험에서 58일이 목표 난이도에 맞았고, 못 맞춘 날은 실제 채점 결과대로 표기합니다."
      },
      {
        n: "03",
        title: "퍼즐마다 복사 → 공통 셸로 추출",
        body: "스도쿠와 직소는 기록·연속·날짜 칩·타이머·완료 창을 각자 복사해서 썼는데, 네 개를 더 만들기 전에 공통 모듈로 뺐습니다. 새 퍼즐은 자기 규칙만 구현하면 되고, 결과 공유나 지난 6일 다시 풀기 같은 기능이 자동으로 따라옵니다."
      },
      {
        n: "04",
        title: "무작위 생성 → 답이 둘이면 고쳐서 유일해로",
        body: "퀸즈는 색 영역을 무작위로 만들어 답이 하나인 것만 고르는 방식으로는 10×10은 6000번을 시도해도 못 만드는 날이 있었습니다. 답이 둘이면 두 번째 해의 퀸이 있는 칸을 이웃 영역으로 넘겨 그 해를 깨뜨리는 방향으로 영역을 고치는 방식으로 바꿔서 60일치 모두 만들 수 있게 됐습니다. 노노그램은 줄 단위 논리만으로 끝까지 풀리는 그림만 채택해 추측이 필요 없게 했습니다."
      },
      {
        n: "05",
        title: "그림도 조각도 날짜로 생성, 이웃 조각은 같은 곡선 공유",
        body: "직소에 사진을 쓰면 저작권과 파일 관리가 따라와서 날짜를 시드로 그림을 생성했고, 조각끼리 구분이 되도록 단색 영역이 생기지 않게 질감 레이어를 더했습니다. 조각 모양은 각 변의 곡선을 한 번만 만들어 양쪽 조각이 (한쪽은 역방향으로) 같이 쓰게 해서 틈 없이 맞물립니다. 같은 그림 생성기를 슬라이드 퍼즐에도 재사용했습니다."
      }
    ],
    skills: [
      "시드 기반 절차적 생성 (PRNG)",
      "백트래킹 풀이 · 유일해 검증",
      "풀이 기법 기반 난이도 채점",
      "줄 단위 논리 풀이 (노노그램)",
      "해 검사로 영역을 고치는 생성 (퀸즈)",
      "Canvas 2D · 베지어 곡선 · 포인터 드래그",
      "공통 모듈 추출 · 다중 페이지 정적 사이트",
      "모바일 우선 반응형 · 다크 모드",
      "Vercel 배포"
    ],
    links: {
      live: "https://daily-puzzles-rho.vercel.app"
    }
  },
  {
    id: "dev-goods-shop",
    role: {
      ko: "기획 · 설계 · 개발 · 배포 (1인)",
      ja: "企画・設計・開発・公開（1人）",
      en: "Planning · design · dev · deploy (solo)"
    },
    status: "live",
    oneLiner: {
      ko: "개발자 굿즈 데모 쇼핑몰 — 결제는 가짜, 주문 접수는 진짜",
      ja: "開発者グッズのデモECサイト — 決済は模擬、注文受付は本物",
      en: "A demo shop for developer goods — payment is fake, order intake is real"
    },
    proof: {
      ko: "장바구니에서 주문번호 발급까지 실제 동작 · 결제는 의도적으로 제외 · 참고 사이트는 구조만 가져와 재디자인",
      ja: "カートから注文番号の発行まで実際に動作 · 決済は意図的に除外 · 参考サイトは構造だけを取り入れて再デザイン",
      en: "Works end to end from cart to order number · payment deliberately left out · a reference site's structure reused, not copied"
    },
    signals: ["scope", "ship"],
    name: "버그없음 마켓",
    nameL: { ko: "버그없음 마켓", ja: "バグなしマーケット", en: "No-Bug Market" },
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
    role: {
      ko: "기획 · 설계 · 개발 · 배포 (1인)",
      ja: "企画・設計・開発・公開（1人）",
      en: "Planning · design · dev · deploy (solo)"
    },
    status: "record",
    oneLiner: {
      ko: "실거래 자금으로 8개월 운영한 바이낸스 선물 자동매매 시스템의 엔지니어링 기록",
      ja: "実資金で8か月運用したバイナンス先物自動売買システムのエンジニアリング記録",
      en: "Engineering log of a Binance futures trading bot run with real money for eight months"
    },
    proof: {
      ko: "전략을 17번 넘게 갈아엎으며 로그 기반으로 개선 · 티어별 리스크 관리와 텔레그램 원격 제어 · 장애 감지 워치독",
      ja: "戦略を17回以上作り替え、ログを基に改善 · ティア別リスク管理とTelegram遠隔操作 · 障害検知ウォッチドッグ",
      en: "Strategy rebuilt 17+ times from log analysis · tiered risk management and Telegram remote control · failure-detecting watchdog"
    },
    signals: ["learn"],
    name: "크립토 자동매매 봇",
    nameL: { ko: "크립토 자동매매 봇", ja: "暗号資産 自動売買ボット", en: "Crypto Trading Bot" },
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
  }
];

// PM 역량 ↔ 증거. project는 위 PROJECTS의 id. 클릭하면 그 프로젝트 모달이 열린다. (모든 항목은 해당 프로젝트 카드에 근거가 적혀 있어야 함)
const EVIDENCE = {
  define: [
    {
      project: "jgrants-matching",
      text: {
        ko: "후보 4개를 비교해 공식 API가 열려 있고 경쟁이 적은 영역을 선택하고, 법적으로 막힌 아이디어(마이넘버 기반 자산 진단)는 근거를 정리해 기각",
        ja: "候補4つを比較し、公式APIが公開され競合が少ない領域を選択。法的に難しいアイデア（マイナンバーによる資産診断）は根拠を整理して見送り",
        en: "Compared four candidate ideas and picked the one with an open official API and little competition; dropped a legally blocked idea (My Number–based asset checks) with the reasoning written down"
      }
    },
    {
      project: "reverse-engineering-study",
      text: {
        ko: "5주 39만원짜리 코호트 스터디의 빈틈을 찾고, 기업 케이스 6개를 직접 리서치",
        ja: "5週間39万ウォンのコホート型スタディの隙間を見つけ、企業ケース6件を自分でリサーチ",
        en: "Found a gap in a 5-week paid cohort program and researched six company cases myself"
      }
    }
  ],
  scope: [
    {
      project: "daily-puzzles",
      text: {
        ko: "퍼즐마다 따로 만들던 사이트를 하나의 허브로 합치고, 새 퍼즐은 공통 모듈 위에 규칙만 얹도록 범위를 정리",
        ja: "パズルごとに別々だったサイトを一つのハブにまとめ、新しいパズルは共通モジュールの上にルールだけ載せる形に範囲を整理",
        en: "Merged separate puzzle sites into one hub and scoped new puzzles to only add their own rules on a shared module"
      }
    },
    {
      project: "jgrants-matching",
      text: {
        ko: "'한 번에 다 써주는 AI'를 만들지 않고 질문·답변 방식으로 범위를 제한 (법적 경계와 결과 품질을 함께 고려)",
        ja: "「丸ごと書いてくれるAI」は作らず、質問と回答で書き進める方式に範囲を限定（法的な線引きと成果物の質の両方を考慮）",
        en: "Did not build a one-click “write it all for me” AI; limited scope to a question-and-answer flow (legal boundary and output quality)"
      }
    },
    {
      project: "dev-goods-shop",
      text: {
        ko: "실제 결제는 의도적으로 제외하고, 주문 접수만 실제로 동작하게 범위를 나눔",
        ja: "実際の決済は意図的に除外し、注文受付だけを本物として動かすよう範囲を分けた",
        en: "Deliberately excluded real payment and made only order intake real"
      }
    },
    {
      project: "reverse-engineering-study",
      text: {
        ko: "인터뷰 먼저 → 출시 먼저 등 방향을 3번 틀며 범위를 좁힘",
        ja: "インタビュー先行からリリース先行へなど、3回方向転換して範囲を絞った",
        en: "Changed direction three times (e.g. interviews first → ship first) to narrow the scope"
      }
    }
  ],
  ship: [
    {
      project: "dev-goods-shop",
      text: {
        ko: "장바구니에서 주문번호 발급까지 실제로 동작하는 상태로 배포 (서버리스 주문 접수)",
        ja: "カートから注文番号の発行まで実際に動く状態で公開（サーバーレスの注文受付）",
        en: "Shipped a working flow from cart to order number (serverless order intake)"
      }
    },
    {
      project: "reverse-engineering-study",
      text: {
        ko: "리서치부터 배포까지 8일 만에 혼자 완주",
        ja: "リサーチからリリースまで、8日で一人でやり切った",
        en: "Went from research to launch alone in eight days"
      }
    },
    {
      project: "jgrants-matching",
      text: {
        ko: "검색에서 서류 다운로드까지 7단계를 모두 배포 (로그인·기기 간 동기화 포함)",
        ja: "検索から書類ダウンロードまでの7ステップをすべて公開（ログイン・端末間同期を含む）",
        en: "Shipped all seven steps from search to document download, including login and cross-device sync"
      }
    },
    {
      project: "daily-puzzles",
      text: {
        ko: "퍼즐 6종을 하나의 사이트로 배포하고, 홈 화면 설치와 오프라인 캐시까지 추가",
        ja: "パズル6種を一つのサイトとして公開し、ホーム画面への追加とオフラインキャッシュまで実装",
        en: "Shipped six puzzles as one site, with home-screen install and an offline cache"
      }
    }
  ],
  learn: [
    {
      project: "crypto-trading-bot",
      text: {
        ko: "실거래 로그를 분석해 전략을 17번 넘게 고치고, 수수료 구조를 계산해 Maker 진입으로 전환",
        ja: "実取引のログを分析して戦略を17回以上改良し、手数料構造を計算してMaker注文中心へ切り替え",
        en: "Revised the strategy 17+ times from live-trading logs and switched to maker entries after working out the fee structure"
      }
    },
    {
      project: "reverse-engineering-study",
      text: {
        ko: "반응 0건이라는 결과를 숨기지 않고 회고로 공개",
        ja: "反応ゼロという結果を隠さず、振り返りとして公開",
        en: "Published the zero-response result as a retrospective instead of hiding it"
      }
    },
    {
      project: "daily-puzzles",
      text: {
        ko: "남긴 힌트 수로 나눈 난이도가 체감과 어긋나서, 풀이 기법으로 채점하는 방식으로 바꿈",
        ja: "残したヒント数で分けた難易度が体感とずれていたため、解法テクニックで採点する方式に変更",
        en: "Difficulty by clue count didn't match how puzzles felt, so it now grades by solving techniques"
      }
    }
  ],
  uat: [
    {
      project: "jgrants-matching",
      text: {
        ko: "처음 방문한 고객처럼 끝까지 눌러보다, AI 실패 시 진행이 막히는 치명적 문제를 찾아 수정",
        ja: "初めて訪れた顧客として最後まで操作し、AI失敗時に先へ進めなくなる重大な問題を発見して修正",
        en: "Walked the whole flow as a first-time customer, found a blocker when AI fails, and fixed it"
      }
    }
  ]
};

// 연락 수단. 값을 채우면 연락 섹션에 자동으로 나타난다. (비어 있으면 표시하지 않음)
const CONTACT = {
  email: "",
  linkedin: "",
  resume: ""
};
