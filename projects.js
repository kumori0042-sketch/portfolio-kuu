// 프로젝트가 늘어나면 이 배열에 객체만 추가하면 갤러리·모달에 자동 반영됩니다.
const PROJECTS = [
  {
    id: "jgrants-matching",
    featured: true,
    status: "live",
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
    signals: ["define", "scope", "ship", "uat", "learn"],
    name: "補助金かんたん検索",
    nameL: { ko: "補助金かんたん検索", ja: "補助金かんたん検索", en: "補助金かんたん検索 (Easy Subsidy Search)" },
    tagline: "일본 중소기업의 보조금 신청서 작성을 돕는 7단계 웹서비스",
    year: "2026",
    tags: ["Web App", "Service Planning", "Solo"],
    accent: "#3182F6",
    accent2: "#12B886",
    cover: { type: "iframe", src: "https://jgrants-matching.vercel.app" },
    description:
      "경제산업성 jGrants 공식 API로 모집 중인 보조금을 검색하고, 회사 정보를 바탕으로 맞춤 추천을 받고, 질문에 답하면서 신청서 초안을 쓰고, 심사기준 체크리스트로 점검한 뒤 Word 파일로 내려받는 서비스입니다. 검색·기업 정보·로그인·기기 간 동기화·문서 다운로드는 물론, AI 생성 기능(구성안·초안·평가·추천·PDF 심사기준 추출)도 무료 모델(Groq)로 실제 연결해 확인했습니다.",
    stats: [
      { n: "7단계", l: "검색에서 서류 다운로드까지" },
      { n: "13개", l: "실제 공모요령에서 추출한 심사기준" },
      { n: "4개", l: "비교한 후보 아이템 중 1개 선정" },
      { n: "5개", l: "실제 호출로 검증한 무료 AI 기능" }
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
      },
      {
        n: "05",
        title: "무료 키 연결 첫날 발견한 버그: 초안 5번 중 4번이 빈 문자열",
        body: "무료 Groq 키를 받아 연결해보니 코드에 넣어뒀던 모델이 그새 단종돼 있었습니다. 대체 모델로 바꾸자 이번엔 초안 생성 5번 중 4번이 빈 결과로 돌아왔는데, 추적해보니 '추론형' 모델이 답을 쓰기 전 하는 생각에 토큰 예산을 전부 써버리는 문제였습니다. 추론 강도를 낮게 고정해 5번 모두 안정적으로 답이 나오게 고친 뒤, 실제 기업 정보로 구성안·초안·체크리스트·추천·PDF 심사기준 추출 5개 기능 전부를 실제 호출로 확인했습니다."
      }
    ],
    skills: [
      "공공 API 기반 서비스 기획",
      "법적 리스크 검토와 기능 범위 설정",
      "PDF에서 요건 추출",
      "프롬프트 설계 (사실만 사용)",
      "AI 비용 상한 설계",
      "고객 관점 UAT",
      "무료 LLM 연동 · 장애 원인 추적",
      "Next.js · TypeScript · Tailwind",
      "자체 인증 · 기기 간 동기화"
    ],
    links: {
      live: "https://jgrants-matching.vercel.app",
      github: "https://github.com/kumori0042-sketch/jgrants-matching",
      prd: "prd-jgrants.html"
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
    id: "space-guessr",
    role: {
      ko: "기획 · 설계 · 개발 · 배포 (1인)",
      ja: "企画・設計・開発・公開（1人）",
      en: "Planning · design · dev · deploy (solo)"
    },
    status: "live",
    oneLiner: {
      ko: "위성사진 속 지형을 보고 지구 어디인지 맞히는 웹게임 — 4개 모드와 공유 리더보드",
      ja: "衛星写真の地形を見て、地球のどこかを当てるウェブゲーム — 4つのモードと共有ランキング",
      en: "A web game: guess where on Earth a satellite image is — four modes and a shared leaderboard"
    },
    proof: {
      ko: "라운드 전환 때 지도가 엉뚱한 곳에 멈추던 원인을 라이브러리 내부 동작까지 추적해 수정 · 서버가 점수·닉네임·도배를 검증하는 리더보드 · 날짜로 문제가 고정되는 오늘의 챌린지",
      ja: "ラウンド切り替え時に地図が別の場所で止まる原因をライブラリ内部の挙動まで追って修正 · サーバーがスコア・ニックネーム・連投を検証するランキング · 日付で問題が固定される今日のチャレンジ",
      en: "Traced a bug where the map stopped at the wrong place between rounds down to the library's internal behavior · a leaderboard whose server validates scores, names and spam · a daily challenge whose puzzles are fixed by the date"
    },
    signals: ["scope", "ship", "learn"],
    name: "Space Guessr",
    nameL: { ko: "Space Guessr", ja: "Space Guessr", en: "Space Guessr" },
    tagline: "위성사진 속 지형으로 지구 어디인지 맞히는 웹게임",
    year: "2026",
    tags: ["Web App", "Game", "Solo"],
    accent: "#3182F6",
    accent2: "#06B6D4",
    cover: { type: "iframe", src: "https://space-guessr.vercel.app" },
    description:
      "확대된 위성사진 조각을 보고 지구 어디인지 지도에서 찍어 맞히는 게임입니다. 단일 HTML 파일(Leaflet · 위성 타일)로 시작해 힌트, 제한시간과 속도 보너스, 난이도 세 단계, 모두가 같은 5문제를 푸는 오늘의 챌린지, 정답 위치로 줌아웃하는 공개 연출, 난이도별 공유 리더보드까지 붙였습니다. 리더보드 서버는 Cloudflare Workers와 D1로 만들었고 닉네임·점수 범위·도배를 서버에서 검증합니다. 점수는 브라우저에서 계산되므로 조작이 가능하다는 한계가 있어, 친구끼리 겨루는 용도로만 씁니다.",
    stats: [
      { n: "20곳", l: "지형 (한눈에 알아보는 곳부터 단서가 필요한 곳까지 3등급)" },
      { n: "4개", l: "모드 (오늘의 챌린지 · 쉬움 · 보통 · 어려움)" },
      { n: "0건", l: "리더보드 등록 (2026-10-10 기준 · 테스트 기록은 모두 삭제)" },
      { n: "185회 · 0건", l: "라운드 전환 자동 점검 횟수와 지도 위치 오류" }
    ],
    pivots: [
      {
        n: "01",
        title: "그냥 지도 맞히기 → 위성사진 속 지형으로",
        body: "처음 구상은 위성사진의 확대된 조각만 보고 지구 어디인지 맞히는 미니 게임이었고, 백엔드 없이 HTML과 오픈소스 지도 라이브러리만으로 첫 버전을 만드는 것이 목표였습니다. 위성 타일은 API 키 없이 쓸 수 있는 소스를 쓰고, 정답과의 거리는 두 좌표 사이의 대원 거리로 계산해 점수를 매겼습니다. 소개 화면과 조작 설명, 점수 구간별 코멘트와 탐험가 등급을 붙여 규칙을 몰라도 바로 시작할 수 있게 했습니다."
      },
      {
        n: "02",
        title: "'사진이 너무 커서 감이 안 온다' → 줌 완화, 지형 5곳 → 20곳",
        body: "직접 해보니 확대가 너무 심해서 질감만 보이고 단서가 없다는 느낌과, 같은 사진이 반복된다는 느낌이 있었습니다. 지형마다 시작 줌을 1~2단계 낮춰 주변 맥락이 보이게 하고, 지형을 5곳에서 10곳, 다시 20곳으로 늘려 판마다 무작위로 뽑게 했습니다. 장소마다 '알고 계셨나요?' 설명을 붙여 맞힌 뒤에도 얻는 게 있게 했습니다."
      },
      {
        n: "03",
        title: "'같은 사진 반복'의 진짜 원인 → 지도 라이브러리의 숨은 애니메이션",
        body: "사진이 반복되는 줄 알았지만 실제로는 라운드가 바뀔 때 지도가 새 위치로 가지 못하고 이전 위치나 기본 위치에 멈추는 버그였습니다. 처음에는 애니메이션을 끄면 된다고 판단했는데 고쳐지지 않았고, 화면이 그려지지 않는 상태에서 한 번만 읽는 제 테스트가 문제를 놓치고 있었습니다. 원인은 최소 줌을 올리면 라이브러리가 '이전 중심으로 줌 이동'을 다음 화면 갱신에 예약해 두었다가, 제가 지정한 위치를 덮어쓰는 것이었습니다. 호출 순서를 바꾸고 그런 예약이 생기는지 직접 감시하는 검증으로 바꿔서, 185회 라운드 전환에서 위치 오류 0건을 확인했습니다."
      },
      {
        n: "04",
        title: "Firebase → Cloudflare Workers + D1 리더보드",
        body: "공유 리더보드를 위해 먼저 Firebase를 시도했지만 구글 클라우드 이용약관 동의 단계에서 계속 막혀 방향을 바꿨습니다. 이미 로그인돼 있던 Cloudflare의 Workers와 D1로 만들고, 서버가 닉네임 길이·점수 범위·힌트 횟수를 검증하고, IP를 해시해 분당 3회·하루 50회로 도배를 제한하며, 허용한 도메인에서 온 요청만 받게 했습니다. 점수를 브라우저가 계산하는 구조라 조작은 막지 못한다는 한계를 그대로 두고, 친구끼리 겨루는 용도로 명시했습니다."
      },
      {
        n: "05",
        title: "하나의 순위 → 난이도 · 오늘의 챌린지 · 속도 보너스",
        body: "플레이가 반복되면 순위가 금방 포화되고 새로움이 줄어서 모드를 나눴습니다. 난이도(쉬움·보통·어려움)는 지형 풀, 제한시간, 점수 감쇠 곡선, 힌트 횟수를 다르게 하고 순위표도 따로 둡니다. 오늘의 챌린지는 일본·한국 시간 날짜를 시드로 모두가 같은 5문제를 풀며, 같은 닉네임은 하루 한 번만 등록됩니다. 남은 시간에 따라 라운드 점수에 최대 20%를 더하는 속도 보너스를 넣으면서 라운드 최고점이 5,000점에서 6,000점으로 늘어, 서버의 점수 상한도 같이 바꿨습니다."
      }
    ],
    skills: [
      "단일 파일 웹앱 (Tailwind · Leaflet)",
      "지도 · 위성 타일 · 대원 거리 계산",
      "서버리스 API 설계 (Cloudflare Workers · D1)",
      "서버 측 입력 검증 · 도배 제한 · CORS",
      "날짜 시드 기반 공통 문제 (PRNG)",
      "라이브러리 내부 동작 추적과 버그 원인 분석",
      "모바일 우선 레이아웃",
      "Vercel 배포 · 자동 점검 스크립트"
    ],
    links: {
      live: "https://space-guessr.vercel.app"
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
    id: "kuchikomiban",
    role: {
      ko: "기획 · 설계 · 개발 · 배포 (1인)",
      ja: "企画・設計・開発・公開（1人）",
      en: "Planning · design · dev · deploy (solo)"
    },
    status: "live",
    statusNote: {
      ko: "사전 등록 단계 — 구글 API 승인과 점주 인터뷰 전이라 서비스 본체는 아직 만들지 않았습니다",
      ja: "事前登録の段階 — Google APIの承認とオーナーへのインタビュー前のため、サービス本体はまだ作っていません",
      en: "Pre-launch waitlist stage — the core service is not built yet, pending Google API approval and owner interviews"
    },
    oneLiner: {
      ko: "일본 소상공인에게 ★1~2 구글 리뷰를 LINE으로 알리고 답글 초안까지 보내는 서비스의 사전 등록 페이지",
      ja: "日本の小規模店舗に、Googleの★1〜2クチコミをLINEで知らせ、返信案まで届けるサービスの先行登録ページ",
      en: "A waitlist page for a service that alerts small Japanese shops to 1–2★ Google reviews on LINE and drafts the reply"
    },
    proof: {
      ko: "가치를 '알림'이 아닌 '답글 스트레스 제거'로 재정의 · 개발 착수·폐기 조건을 먼저 문서화 · 개인 메일 없이 문의 창구를 갖춘 개인정보 처리방침",
      ja: "価値を「通知」ではなく「返信の負担をなくすこと」に定義し直し · 開発着手と撤退の条件を先に文書化 · 個人メールを出さずに窓口を備えたプライバシーポリシー",
      en: "Reframed the value from “alerts” to “removing the stress of replying” · wrote the go/kill conditions before building · privacy policy with a contact channel that does not expose a personal email"
    },
    signals: ["define", "scope", "ship"],
    name: "クチコミ番",
    nameL: { ko: "クチコミ番", ja: "クチコミ番", en: "Kuchikomi-ban" },
    tagline: "일본 소상공인용 구글 리뷰 알림·답글 서비스의 사전 등록 페이지",
    year: "2026",
    tags: ["Web App", "SaaS", "Solo"],
    accent: "#3182F6",
    accent2: "#06C755",
    cover: { type: "iframe", src: "https://kuchikomiban.vercel.app" },
    description:
      "구글맵에 ★1~2 리뷰가 달리면 LINE으로 알려주고, AI가 쓴 답글 초안을 원탭으로 게시하게 하는 서비스를 구상해 먼저 사전 등록 페이지만 만들어 공개했습니다. 구글의 기본 알림이 무료라서 가치는 알림이 아니라 답글을 쓰는 부담을 없애는 데 있다고 보고, 개발은 점주 인터뷰에서 선결제나 확약을 받은 뒤에 시작하기로 조건을 정해 두었습니다. 지금 있는 것은 일본어 소개·요금 페이지와 사전 등록·문의 폼, 개인정보 처리방침이고, 서비스 본체는 아직 없습니다.",
    stats: [
      { n: "0건", l: "사전 등록 (2026-10-09 기준 · 공개 직후)" },
      { n: "월 1,500엔", l: "1점포 요금 가설 (세금 포함 · 인터뷰 전)" },
      { n: "3곳", l: "개발 착수 조건: 점주의 선결제·확약" },
      { n: "4주 · 5건", l: "출시 후 유료 5건 미만이면 폐기" }
    ],
    pivots: [
      {
        n: "01",
        title: "알림 서비스 → 답글 스트레스 제거",
        body: "처음 컨셉은 저별점 리뷰를 빨리 알려주는 알림이었는데, 구글 기본 알림이 무료라서 알림만으로는 돈을 받을 이유가 약하다고 봤습니다. 점주가 실제로 힘들어하는 건 감정적으로 흔들리지 않으면서 정중한 답을 쓰는 일이라서, AI 답글 초안을 확인하고 원탭으로 게시하는 흐름을 핵심 가치로 정했습니다. 사전 등록 페이지의 첫 화면도 이 흐름(알림 → 초안 → 원탭 답글)을 그대로 보여줍니다."
      },
      {
        n: "02",
        title: "만들고 나서 팔기 → 확약 먼저, 폐기 조건도 미리",
        body: "구글 비즈니스 프로필 API는 승인까지 최대 14일이 걸립니다. 그 사이에 본체를 먼저 만드는 대신, 점주 인터뷰에서 선결제나 확약을 3곳 이상 받기 전에는 개발에 들어가지 않고, 착수하면 3주 안에 핵심 기능만 내며, 출시 4주 안에 유료가 5건 미만이면 접는다는 기준을 먼저 적어 두었습니다. 그래서 지금 만든 건 사전 등록 페이지까지입니다."
      },
      {
        n: "03",
        title: "개인 메일 공개 → 사이트 안 문의 폼",
        body: "개인정보를 받는 이상 열람·삭제 요청을 받을 창구가 필요한데, 개인 이메일 주소는 공개하고 싶지 않았습니다. 메일 대신 사이트 안 문의 폼(종류에 '등록 정보의 개시·정정·삭제')을 만들고, 내용은 도쿄 리전 DB에 저장하도록 했습니다. 한계는 새 문의가 와도 자동 알림이 없어서 대시보드를 직접 확인해야 한다는 점입니다."
      },
      {
        n: "04",
        title: "브라우저에서 DB 쓰기 → 서버 전용 열쇠로만 쓰기",
        body: "사전 등록 정보(이메일)를 브라우저가 직접 DB에 쓰게 하지 않고, 서버 액션만 쓸 수 있게 했습니다. 두 테이블 모두 행 수준 보안(RLS)을 켜고 정책을 만들지 않았으며, 쓰기 권한이 있는 service_role 키는 서버 코드에서만 읽도록(server-only) 두었습니다. 봇 방지용 숨김 입력칸을 두고, 같은 이메일로 다시 등록하면 등록 여부를 알려주지 않고 성공으로 처리합니다. 공개한 주소에서 등록과 저장, 삭제를 각각 확인했습니다."
      },
      {
        n: "05",
        title: "요금 미정 → 월 1,500엔 가설",
        body: "요금은 월 1,500엔(1점포·세금 포함)으로 잡았습니다. 낮은 가격은 문턱을 낮추지만 '있으면 좋은 것'으로 보여 확약을 받기 어려울 수 있어서, 인터뷰에서 확약을 받으며 검증해야 하는 가설로 둡니다. 페이지에는 요금을 싣되 '정식 출시 때 요금은 사전 등록자에게 가장 먼저 안내한다'는 문구도 함께 두었습니다."
      }
    ],
    skills: [
      "Next.js 15 (App Router) · Server Actions",
      "Supabase (Postgres · RLS) · 도쿄 리전",
      "서버 전용 비밀 키 · 봇 방지 · 중복 처리",
      "개인정보 처리방침 · 문의 창구 구성",
      "가설과 착수·폐기 조건 문서화",
      "일본어 랜딩 카피 · 요금 표시",
      "유입 경로 추적 (?src=)",
      "Vercel · GitHub 자동 배포"
    ],
    links: {
      live: "https://kuchikomiban.vercel.app"
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
  },
  {
    id: "suumo-alert",
    role: {
      ko: "기획 · 설계 · 개발 · 운영 (1인)",
      ja: "企画・設計・開発・運用（1人）",
      en: "Planning · design · dev · operation (solo)"
    },
    status: "record",
    statusNote: {
      ko: "개인용 도구라 공개 데모가 없고 저장소도 비공개입니다 · 가동 중이지만 저평가 판정은 아직 한 번도 나오지 않았습니다",
      ja: "個人用ツールのため公開デモはなくリポジトリも非公開です · 稼働中ですが、割安判定はまだ一度も出ていません",
      en: "A personal tool, so there is no public demo and the repository is private · it runs, but has not flagged an underpriced listing yet"
    },
    oneLiner: {
      ko: "중고 맨션 매물을 조건별로 감시해 저평가·가격 인하를 Discord로 알려주는 자동화",
      ja: "中古マンションの物件を条件別に監視し、割安・値下げをDiscordで知らせる自動化",
      en: "Automation that watches used-condo listings per search and flags underpriced or price-cut ones on Discord"
    },
    proof: {
      ko: "robots.txt의 요청 간격(30초)을 확인해 설계를 고침 · 새 매물과 가격 변동만 상세 조회해 실행 시간을 줄임 · 조건마다 알림 채널과 기준을 분리",
      ja: "robots.txtの要求間隔（30秒）を確認して設計を修正 · 新着と価格変動だけ詳細取得して実行時間を短縮 · 条件ごとに通知チャンネルと基準を分離",
      en: "Checked robots.txt's 30-second crawl delay and reworked the design · fetched details only for new or changed listings to cut runtime · separated notification channels and thresholds per search"
    },
    signals: ["define", "scope", "learn"],
    name: "중고 맨션 저평가 탐지 봇",
    nameL: { ko: "중고 맨션 저평가 탐지 봇", ja: "中古マンション割安検知ボット", en: "Used-Condo Deal Watcher" },
    tagline: "조건별 채널로 저평가·가격 인하를 알려주는 매물 감시 자동화",
    year: "2026",
    tags: ["Python", "Automation", "Solo"],
    accent: "#3182F6",
    accent2: "#5865F2",
    cover: { type: "image", src: "suumo-alert-pipeline.svg" },
    description:
      "SUUMO 중고 맨션 검색 결과를 하루 몇 차례 읽어, 조건(면적·준공연도·역 도보·세대수 등)에 맞는 매물을 SQLite에 쌓고 신규·가격 인하·저평가를 Discord로 알려주는 도구입니다. 저평가는 같은 역 매물의 ㎡당 가격 중앙값보다 10% 이상 싼 경우로 판정하고, 알림에는 ⭐저장·🗑삭제 버튼이 붙어 바로 정리할 수 있습니다. GitHub Actions에서 돌고 버튼 클릭은 Cloudflare Worker가 받으며, 사이트의 robots.txt 요청 간격을 지킵니다. 개인용 도구라 공개 데모는 없습니다.",
    stats: [
      { n: "4건 · 6건", l: "조건 통과 매물 · 상세 조건 탈락 매물 (2026-10-10 기준)" },
      { n: "0건", l: "저평가 · 가격 인하 알림 (역별 표본 5건 미만이라 아직 판정 불가)" },
      { n: "30초", l: "요청 간격 (robots.txt의 Crawl-delay 준수)" },
      { n: "2~3회", l: "하루 실제 실행 횟수 (예약은 4회, GitHub가 지연·누락)" }
    ],
    pivots: [
      {
        n: "01",
        title: "신규 매물 알림 → 저평가 판정 (역별 중앙값)",
        body: "처음에는 조건에 맞는 새 매물을 알려주는 단순 알림이었습니다. 목적이 싸게 나온 매물을 가려내는 것이라서, 매물을 DB에 계속 쌓고 같은 역의 ㎡당 가격 중앙값보다 10% 이상 싼 것만 '저평가'로 따로 알리고, 같은 매물의 가격이 내려가면 인하 횟수와 함께 알리도록 바꿨습니다. 역별 표본이 5건 미만이면 판정을 보류하는데, 지금은 그 기준을 채운 역이 없어 저평가 알림이 한 번도 나오지 않았습니다."
      },
      {
        n: "02",
        title: "요청 3초 간격 → robots.txt 확인 후 30초",
        body: "초기 스크립트는 요청 사이에 3초만 쉬었는데, robots.txt를 직접 확인해 보니 Crawl-delay가 30초였습니다. 간격을 30초로 지키면 후보 매물의 상세 페이지를 매번 전부 읽는 방식은 한 번에 약 27분이 걸려, 하루 여러 번 돌리면 무료 실행 분량을 넘길 수 있다고 계산했습니다. 그래서 새 매물이거나 목록 가격이 바뀐 매물만 상세 조회하고, 상세 조건에서 탈락한 매물은 7일간 다시 조회하지 않게 바꿨습니다. 최근 14번 실행 중 13번이 2~5분이었고 한 번(DB 초기화 직후)이 15분이었습니다. 후보가 많을 때 앞쪽 40건만 반복 조회되고 나머지는 영영 처리되지 않던 문제도 같이 사라졌습니다."
      },
      {
        n: "03",
        title: "하드 필터로 제외 → 경고 태그로 표시",
        body: "1층 매물을 아예 제외했더니 조건 통과 매물이 거의 없어 알림이 한 번도 오지 않았습니다. 걸러지던 매물을 로그로 확인해 보니, 다른 조건은 모두 통과하고 1층이라서만 제외되던 경우가 있었습니다. 1층은 걸러내지 않고 '1층' 경고 태그만 붙여 판단은 직접 하게 바꾸자 첫 알림이 왔습니다. 적립금이 낮거나 월 고정비가 높거나 오래된 건물도 같은 방식으로 태그만 붙입니다."
      },
      {
        n: "04",
        title: "여러 조건을 한 채널에 → 조건별 채널·기준값 분리",
        body: "검색 조건을 하나 더 추가하면서 URL을 한 목록으로 합쳐 돌렸더니, 두 번째 조건의 매물 31건이 첫 번째 조건의 채널에 한꺼번에 올라갔습니다. 조건마다 URL·알림 채널·기준값(예: 도보 분수)을 따로 갖는 설정 파일로 바꾸고, DB도 조건별로 상태를 따로 기록해 같은 매물이 두 조건에 걸려도 각자 알림을 받게 했습니다. 잘못 올라간 메시지 35건은 봇으로 삭제했습니다. 두 번째 조건은 채널이 정해질 때까지 꺼 둔 상태입니다."
      },
      {
        n: "05",
        title: "일반 웹훅 → 봇 + 버튼 클릭을 받는 서버",
        body: "알림에 ⭐저장·🗑삭제 버튼을 달려고 했는데, 버튼 클릭을 받으려면 메시지를 봇이 보내야 하고 클릭 요청의 서명을 검증해 응답하는 서버가 필요해서, 웹훅 대신 봇으로 전환하고 서버는 Cloudflare Worker로 만들었습니다. 저장은 다른 채널로 복사하고 삭제는 원본 메시지를 지웁니다. 도중에 봇이 보낸 요청이 403으로 막히는 일이 있었는데, 기본 요청 헤더(User-Agent)가 의심 트래픽으로 분류된 것이어서 헤더를 명시해 해결했습니다."
      }
    ],
    skills: [
      "웹 스크래핑 · robots.txt 준수 설계",
      "SQLite 스키마 설계와 마이그레이션",
      "통계 기반 판정 (중앙값 · 표본 기준)",
      "GitHub Actions 예약 실행 · 비밀값 관리",
      "Discord 봇 · 버튼 인터랙션 (Cloudflare Workers)",
      "조건별 설정 분리 (설정 파일 · 기준값 덮어쓰기)",
      "오프라인 시나리오 테스트 (가짜 응답)",
      "실행 비용·시간 최적화"
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
    },
    {
      project: "kuchikomiban",
      text: {
        ko: "구글 기본 알림이 무료라는 점에서 출발해, 서비스의 가치를 '알림'이 아닌 '답글 스트레스 제거'로 다시 정의",
        ja: "Google標準の通知が無料である点から出発し、サービスの価値を「通知」ではなく「返信の負担をなくすこと」に定義し直した",
        en: "Started from the fact that Google's built-in alerts are free and redefined the value from “alerts” to “removing the stress of replying”"
      }
    },
    {
      project: "suumo-alert",
      text: {
        ko: "단순 신규 알림을 '같은 역의 중앙값보다 싼 매물과 가격 인하'를 찾는 도구로 문제를 다시 정의",
        ja: "単なる新着通知を、「同じ駅の中央値より安い物件と値下げ」を見つけるツールとして問題を定義し直した",
        en: "Redefined a plain new-listing alert as a tool that finds listings below the station median and price cuts"
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
    },
    {
      project: "kuchikomiban",
      text: {
        ko: "서비스 본체보다 사전 등록 페이지만 먼저 만들고, 개발 착수·폐기 조건(확약 3곳 · 출시 4주 내 유료 5건)을 미리 정함",
        ja: "サービス本体より先に先行登録ページだけを作り、開発着手・撤退の条件（確約3店舗・公開後4週間で有料5件）を先に決めた",
        en: "Built only the waitlist page before the service itself and fixed the go/kill conditions up front (three commitments; five paying customers within four weeks of launch)"
      }
    },
    {
      project: "space-guessr",
      text: {
        ko: "하나의 순위로 시작해 모드·난이도·오늘의 챌린지로 나누고, 서버 검증이 필요한 부분만 서버리스로 분리",
        ja: "ひとつのランキングから始め、モード・難易度・今日のチャレンジに分け、サーバー検証が必要な部分だけをサーバーレスに切り出した",
        en: "Started with one ranking, split it into modes, difficulty levels and a daily challenge, and moved only the parts that need server validation to serverless"
      }
    },
    {
      project: "suumo-alert",
      text: {
        ko: "조건마다 URL·채널·기준값을 분리하고, 새 매물과 가격 변동만 상세 조회하도록 범위를 좁힘",
        ja: "条件ごとにURL・チャンネル・基準値を分け、新着と価格変動の物件だけを詳細取得するよう範囲を絞った",
        en: "Separated URL, channel and thresholds per search and narrowed detail fetching to new or price-changed listings"
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
    },
    {
      project: "kuchikomiban",
      text: {
        ko: "사전 등록 폼·문의 폼·개인정보 처리방침까지 갖춘 페이지를 도쿄 리전 DB와 함께 공개하고, 공개 주소에서 저장·삭제를 확인",
        ja: "先行登録・お問い合わせフォームとプライバシーポリシーを備えたページを東京リージョンのDBと共に公開し、公開URLで保存と削除を確認",
        en: "Published a page with a waitlist form, contact form and privacy policy on a Tokyo-region database, and checked saving and deleting on the live URL"
      }
    },
    {
      project: "space-guessr",
      text: {
        ko: "게임과 서버리스 리더보드를 공개 URL로 배포하고, 운영 DB에 등록·중복 거절·도배 제한이 동작하는 것을 실제 요청으로 확인",
        ja: "ゲームとサーバーレスのランキングを公開URLで公開し、本番DBへの登録・重複の拒否・連投制限が動くことを実際のリクエストで確認",
        en: "Shipped the game and a serverless leaderboard at a public URL and checked registration, duplicate rejection and spam limits against the production database with real requests"
      }
    }
  ],
  learn: [
    {
      project: "jgrants-matching",
      text: {
        ko: "무료 모델로 바꾼 뒤 초안 생성이 5번 중 4번 실패하는 걸 발견해 원인(추론 토큰 소진)을 추적하고 수정",
        ja: "無料モデルに切り替えた後、下書き生成が5回中4回失敗する不具合を発見し、原因（推論トークンの消費）を突き止めて修正",
        en: "After switching to a free model, found draft generation failing 4 out of 5 times, traced it to reasoning tokens eating the budget, and fixed it"
      }
    },
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
    },
    {
      project: "space-guessr",
      text: {
        ko: "'같은 사진 반복'이라는 피드백을 라이브러리의 숨은 애니메이션 문제로 추적하고, 잘못된 첫 수정과 검증 방식의 맹점까지 인정한 뒤 고침",
        ja: "「同じ写真の繰り返し」というフィードバックをライブラリの隠れたアニメーションの問題として追跡し、最初の誤った修正と検証方法の盲点まで認めたうえで修正",
        en: "Traced the “same image repeats” feedback to a hidden animation in the map library, and fixed it after admitting both the wrong first fix and the blind spot in my testing"
      }
    },
    {
      project: "suumo-alert",
      text: {
        ko: "robots.txt의 요청 간격을 확인해 설계를 고치고, 조건을 섞어 보낸 실수를 정리해 바로잡음. 저평가 알림이 아직 0건이라는 사실도 그대로 기록",
        ja: "robots.txtの要求間隔を確認して設計を直し、条件を混ぜて送ってしまった失敗を整理して修正。割安の通知がまだ0件であることもそのまま記録",
        en: "Checked the robots.txt crawl delay and fixed the design, and corrected the mistake of mixing searches in one channel; also recorded plainly that no underpriced alert has fired yet"
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
