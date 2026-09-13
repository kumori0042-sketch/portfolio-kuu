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
  }
];
