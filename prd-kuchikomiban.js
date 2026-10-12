// クチコミ番 기획서 1장. 사전등록 단계의 서비스라서 대부분이 "검증 전 가설"이고, 확인된 건 사전등록 페이지와 개발 착수 조건뿐이다.
// tag: done(구현·확인됨) · plan(계획) · hyp(검증 전 가설) · none(미측정)
// 기준일: 2026-10-12 (수치가 바뀌면 이 날짜와 같이 고친다)
const PRD = {
  title: {
    ko: "クチコミ番 — 기획서 1장",
    ja: "クチコミ番 — 企画書（1枚）",
    en: "クチコミ番 — one-page product brief"
  },
  note: {
    ko: "2026-10-12 기준입니다. 서비스 본체는 아직 만들지 않았고, 사전 등록 페이지만 공개돼 있습니다. 점주 인터뷰를 하기 전이라서 문제와 가치는 전부 검증 전 가설이고, 이 문서는 \"무엇을 확인하면 만들고, 무엇이 나오면 접는가\"를 먼저 적어 두는 용도입니다.",
    ja: "2026年10月12日時点です。サービス本体はまだ作っておらず、事前登録ページだけを公開しています。店舗オーナーへのインタビュー前なので、課題と価値はすべて検証前の仮説です。この文書は「何を確認できたら作り、何が出たらやめるか」を先に書いておくためのものです。",
    en: "As of 2026-10-12. The service itself is not built; only a pre-registration page is live. I have not interviewed shop owners yet, so every problem and value claim is an unvalidated hypothesis. This document records in advance what would make me build it and what would make me stop."
  },
  legend: [
    { tag: "done", text: { ko: "구현·확인됨", ja: "実装・確認済み", en: "Built and checked" } },
    { tag: "plan", text: { ko: "계획", ja: "計画", en: "Planned" } },
    { tag: "hyp", text: { ko: "검증 전 가설", ja: "検証前の仮説", en: "Unvalidated hypothesis" } },
    { tag: "none", text: { ko: "미측정", ja: "未計測", en: "Not measured" } }
  ],
  sections: [
    {
      title: { ko: "한 줄 요약", ja: "ひとこと要約", en: "In one line" },
      blocks: [
        {
          type: "p",
          text: {
            ko: "구글맵에 ★1~2 리뷰가 달리면 점주에게 LINE으로 알리고, AI가 쓴 답글 초안을 점주가 확인한 뒤에만 게시하게 해서 \"답글 쓰는 스트레스\"를 줄이는 일본 소상공인용 서비스. (월 1,500엔 예정)",
            ja: "Googleマップに★1〜2のクチコミが付いたらLINEでオーナーに知らせ、AIが作った返信の下書きをオーナーが確認した後にだけ投稿することで、「返信を書くストレス」を減らす日本の小規模店舗向けサービス。（月1,500円予定）",
            en: "A service for small shops in Japan: when a 1–2 star Google Maps review arrives, notify the owner on LINE and publish an AI-drafted reply only after the owner approves it, to take the stress out of replying. (Planned at 1,500 yen per month.)"
          }
        }
      ]
    },
    {
      title: { ko: "해결하려는 문제", ja: "解決したい課題", en: "The problem" },
      blocks: [
        {
          type: "list",
          items: [
            { tag: "hyp", text: { ko: "낮은 별점 리뷰에 어떻게 답할지 몰라서, 점주가 답글을 미루거나 아예 달지 않는다.", ja: "低評価のクチコミにどう返せばよいか分からず、オーナーが返信を後回しにしたり、書かなかったりする。", en: "Owners don't know how to answer low-star reviews, so they postpone replying or never reply." } },
            { tag: "hyp", text: { ko: "저평가 리뷰는 알림 자체보다 \"답글을 쓰는 부담\"이 더 크다. 그래서 가치는 알림이 아니라 답글 초안이다.", ja: "低評価のクチコミは、通知そのものより「返信を書く負担」のほうが大きい。価値は通知ではなく返信の下書きにある。", en: "For low-star reviews the burden is writing the reply, not learning about the review, so the value is the draft rather than the alert." } },
            { tag: "hyp", text: { ko: "점주는 이 문제에 월 1,500엔을 낼 만큼 불편을 느낀다.", ja: "オーナーはこの課題に月1,500円を払うほど不便を感じている。", en: "Owners feel the problem enough to pay 1,500 yen per month." } }
          ]
        },
        {
          type: "p",
          text: {
            ko: "세 가지 모두 점주에게 직접 확인하지 않았습니다. 첫 번째 가설이 틀리면 나머지는 의미가 없어서, 인터뷰 맨 앞에서 확인합니다.",
            ja: "3つとも、オーナーに直接は確認していません。1つ目が間違っていれば残りは意味を持たないので、インタビューの最初に確認します。",
            en: "None of these has been confirmed with owners. If the first one is wrong the rest do not matter, so I check it first in the interviews."
          }
        }
      ]
    },
    {
      title: { ko: "대상 사용자", ja: "対象ユーザー", en: "Who it's for" },
      blocks: [
        {
          type: "p",
          tag: "hyp",
          text: {
            ko: "구글 프로필을 직접 관리하는 음식점·미용실·클리닉·소매점의 점주. 낮은 별점을 받아 본 적이 있고 답글을 직접 쓰거나 쓰지 못하고 있는 사람을 우선합니다. (가설적 설정이며 인터뷰로 만든 페르소나가 아닙니다.)",
            ja: "Googleプロフィールを自分で管理している飲食店・美容室・クリニック・小売店のオーナー。低評価を受けた経験があり、返信を自分で書いている、または書けずにいる人を優先します。（仮の設定であり、インタビューから作ったペルソナではありません。）",
            en: "Owners of restaurants, salons, clinics and shops who manage their own Google profile, especially those who have received low ratings and either write replies themselves or can't. (An assumption, not a persona built from interviews.)"
          }
        }
      ]
    },
    {
      title: { ko: "해결 방식", ja: "解決の方法", en: "How it works" },
      blocks: [
        {
          type: "list",
          items: [
            { tag: "done", text: { ko: "사전 등록 페이지(가치 제안·요금·FAQ)와 이메일 사전 등록 저장, 사이트 안 문의 폼, 개인정보 처리방침까지 공개돼 있음. 개인 메일은 노출하지 않고 문의는 폼으로 받음.", ja: "事前登録ページ（価値提案・料金・FAQ）、メールの事前登録の保存、サイト内の問い合わせフォーム、プライバシーポリシーまで公開済み。個人のメールは出さず、問い合わせはフォームで受けています。", en: "Live: a pre-registration page (value proposition, price, FAQ) that stores email sign-ups, an in-site contact form and a privacy policy. My personal email is not shown; inquiries go through the form." } },
            { tag: "plan", text: { ko: "본체(개발 착수 조건을 넘은 뒤에만): 구글 비즈니스 프로필에서 새 리뷰 감지 → LINE 알림 → AI 답글 초안 → 점주가 확인하고 한 번 눌러 게시.", ja: "本体（着手条件を満たした後のみ）：Googleビジネスプロフィールで新しいクチコミを検知 → LINE通知 → AIの返信下書き → オーナーが確認してワンタップで投稿。", en: "The core (only after the go condition is met): detect new reviews on Google Business Profile, notify on LINE, draft a reply with AI, and publish with one tap after the owner confirms." } }
          ]
        }
      ]
    },
    {
      title: { ko: "하지 않는 것과 이유", ja: "やらないことと理由", en: "What it deliberately does not do" },
      blocks: [
        {
          type: "list",
          items: [
            { tag: "plan", text: { ko: "답글을 자동으로 게시하지 않는다. 점주가 내용을 보고 직접 보낸 때만 게시한다. AI가 사실과 다른 말을 쓸 수 있고, 구글의 정책도 건별 명시적 동의를 요구한다.", ja: "返信を自動では投稿しない。オーナーが内容を見て自分で送信した時だけ投稿する。AIが事実と違うことを書く可能性があり、Googleのポリシーも1件ごとの明示的な同意を求めている。", en: "No automatic posting. A reply goes live only when the owner reviews and sends it. The AI can state things that are not true, and Google's policy asks for explicit consent per reply." } },
            { tag: "plan", text: { ko: "가져온 리뷰 내용을 30일을 넘겨 저장하지 않는다 (구글 정책).", ja: "取得したクチコミの内容を30日を超えて保存しない（Googleのポリシー）。", en: "Imported review content is not stored beyond 30 days (Google policy)." } },
            { tag: "done", text: { ko: "확약 3곳을 받기 전에는 본체를 만들지 않는다. 그리고 결제 준비(결제 계정, 특정상거래법 표기, 이용약관, 판매자명)가 끝나기 전에는 선결제를 받지 않는다.", ja: "確約を3店舗いただく前に本体は作らない。また、決済の準備（決済アカウント、特定商取引法に基づく表記、利用規約、販売者名）が整うまで前払いは受け取らない。", en: "I do not build the core before three commitments, and I do not take prepayment until payment setup (payment account, the legally required seller disclosure, terms of service, seller name) is done." } }
          ]
        }
      ]
    },
    {
      title: { ko: "개발 착수·폐기 기준 (미리 정해 둠)", ja: "着手・撤退の基準（事前に設定）", en: "Go / stop criteria (set in advance)" },
      blocks: [
        {
          type: "table",
          head: [
            { ko: "단계", ja: "段階", en: "Stage" },
            { ko: "기준", ja: "基準", en: "Criterion" },
            { ko: "현재", ja: "現在", en: "Now" }
          ],
          rows: [
            [
              { ko: "인터뷰", ja: "インタビュー", en: "Interviews" },
              { ko: "점주 10곳에 접촉해 20분 인터뷰 (질문지와 접촉 문구 준비됨)", ja: "オーナー10店舗に連絡して20分のインタビュー（質問票と連絡文面は用意済み）", en: "Contact 10 owners for a 20-minute interview (script and outreach messages prepared)" },
              { tag: "none", ko: "접촉 0곳 (아직 시작 전)", ja: "連絡0店舗（未着手）", en: "0 contacted (not started)" }
            ],
            [
              { ko: "개발 착수", ja: "開発着手", en: "Go to build" },
              { ko: "서면 확약(월 1,500엔으로 쓰겠다는 서명 또는 메일 회신) 3곳 이상. 구두 관심은 세지 않음.", ja: "書面での確約（月1,500円で利用するという署名またはメール返信）が3店舗以上。口頭の関心は数えない。", en: "At least 3 written commitments (a signature or email reply saying they will use it at 1,500 yen per month). Verbal interest does not count." },
              { tag: "none", ko: "확약 0곳", ja: "確約0店舗", en: "0 commitments" }
            ],
            [
              { ko: "참고 지표", ja: "参考指標", en: "Reference signal" },
              { ko: "사전 등록 수와 문의 수 (목표는 아직 정하지 않음)", ja: "事前登録数と問い合わせ数（目標は未設定）", en: "Pre-registrations and inquiries (no target set yet)" },
              { tag: "none", ko: "사전 등록 0건 (2026-10-09 확인) · 홍보 전", ja: "事前登録0件（2026-10-09時点）・告知前", en: "0 pre-registrations (as of 2026-10-09), before any promotion" }
            ],
            [
              { ko: "출시 후", ja: "公開後", en: "After launch" },
              { ko: "착수 후 3주 안에 핵심 기능만 배포. 출시 4주 안에 유료 5건 미만이면 폐기.", ja: "着手後3週間以内にコア機能のみ公開。公開4週間以内に有料が5件未満なら撤退。", en: "Ship only the core within 3 weeks of starting; if fewer than 5 paying customers within 4 weeks of launch, stop." },
              { tag: "plan", ko: "착수 전", ja: "着手前", en: "Before start" }
            ]
          ]
        }
      ]
    },
    {
      title: { ko: "로드맵", ja: "ロードマップ", en: "Roadmap" },
      blocks: [
        {
          type: "list",
          items: [
            { tag: "done", text: { ko: "완료: 사전 등록 페이지, 문의 폼, 개인정보 처리방침, 점주 인터뷰 키트와 접촉 문구, 방문용 전단지(QR 2개)", ja: "完了：事前登録ページ、問い合わせフォーム、プライバシーポリシー、オーナー向けインタビューキットと連絡文面、訪問用チラシ（QR2つ）", en: "Done: pre-registration page, contact form, privacy policy, interview kit and outreach messages, a visit flyer with two QR codes" } },
            { tag: "plan", text: { ko: "지금: 점주 10곳 접촉과 인터뷰, 결과를 있는 그대로 기록", ja: "今：オーナー10店舗への連絡とインタビュー、結果をそのまま記録", en: "Now: contact and interview 10 owners and record the results as they are" } },
            { tag: "plan", text: { ko: "확약 3곳이 되면: 구글 API 접근 신청(60일 이상 인증된 프로필이 필요해서 파일럿 점주 1곳을 매니저로 추가받는 방식), 3주 개발", ja: "確約が3店舗に達したら：Google APIのアクセス申請（60日以上認証されたプロフィールが必要なため、パイロット店舗1つにマネージャーとして追加してもらう方式）、3週間で開発", en: "If 3 commitments are reached: apply for Google API access (it needs a profile verified for 60+ days, so I would be added as a manager by one pilot owner), then build for 3 weeks" } },
            { tag: "plan", text: { ko: "확약 3곳이 안 되면: 인터뷰에서 들은 이유를 근거로 방향을 바꾸거나 접고, 이 문서에 이유를 남김", ja: "確約が3店舗に届かなければ：インタビューで聞いた理由を根拠に方向を変えるか撤退し、この文書に理由を残す", en: "If it falls short: change direction or stop based on what I hear, and leave the reasons in this document" } }
          ]
        }
      ]
    },
    {
      title: { ko: "리스크와 대응", ja: "リスクと対応", en: "Risks and responses" },
      blocks: [
        {
          type: "list",
          items: [
            { tag: "plan", text: { ko: "구글 비즈니스 프로필 API 접근 승인: 승인 기간이 공식 문서에 없고, 60일 이상 인증된 프로필과 프로필에 등록된 웹사이트가 필요하다. 대응: 파일럿 점주 확보를 인터뷰의 목표에 넣음.", ja: "Googleビジネスプロフィール APIのアクセス承認：承認期間は公式ドキュメントに記載がなく、60日以上認証されたプロフィールとサイトの登録が必要。対応：パイロット店舗の確保をインタビューの目標に含める。", en: "Google Business Profile API approval: the review time is not in the official docs, and it requires a profile verified for 60+ days with a website listed. Response: securing a pilot owner is part of the interview goal." } },
            { tag: "plan", text: { ko: "OAuth 앱 검증: 본인 소유의 인증된 도메인이 필요하다. 대응: 확약 3곳을 받은 뒤에 도메인을 구매한다 (그 전에는 구매하지 않음).", ja: "OAuthアプリの審査：自分が所有する認証済みドメインが必要。対応：確約を3店舗いただいた後にドメインを購入する（それまでは購入しない）。", en: "OAuth app verification: needs a domain I own and have verified. Response: buy the domain only after three commitments." } },
            { tag: "plan", text: { ko: "AI 답글이 사실과 다르거나 어색함: 점주가 확인·수정하기 전에는 게시되지 않는다. 일본어 답글 품질은 아직 실제 점주 사례로 확인하지 않았다.", ja: "AIの返信が事実と違う・不自然：オーナーが確認・修正するまで投稿されない。日本語の返信の品質は、実際のオーナーの事例ではまだ確認していない。", en: "AI replies may be wrong or awkward: nothing is posted before the owner reviews and edits it. I have not yet checked Japanese reply quality against real owner cases." } },
            { tag: "done", text: { ko: "개인정보: 개인 메일을 공개하지 않고 사이트 안 문의 폼만 쓴다. 수집 항목은 처리방침에 적어 둠.", ja: "個人情報：個人のメールは公開せず、サイト内の問い合わせフォームだけを使う。収集項目はプライバシーポリシーに記載。", en: "Personal data: no personal email is published, only the in-site form is used, and what is collected is stated in the privacy policy." } },
            { tag: "plan", text: { ko: "판매자 표기: 유료로 팔기 전에 특정상거래법 표기용 판매자명(본명 또는 개업신고한 옥호)을 정해야 한다. 지금은 운영자명 KoU만 쓰고 있다.", ja: "販売者の表示：有料で販売する前に、特定商取引法に基づく表記用の販売者名（本名または開業届を出した屋号）を決める必要がある。現在は運営者名KoUのみを使用。", en: "Seller disclosure: before charging, I need a legally valid seller name (real name or a registered business name). For now only the operator name KoU is used." } }
          ]
        }
      ]
    },
    {
      title: { ko: "아직 답을 모르는 질문", ja: "まだ答えが分からない問い", en: "Open questions" },
      blocks: [
        {
          type: "list",
          items: [
            { tag: "hyp", text: { ko: "점주는 낮은 별점 리뷰에 실제로 어떻게 대응하고 있고, 어디에서 막히는가?", ja: "オーナーは低評価のクチコミに実際どう対応していて、どこで詰まっているのか？", en: "How do owners actually handle low-star reviews today, and where do they get stuck?" } },
            { tag: "hyp", text: { ko: "\"알림\"과 \"답글 초안\" 중 점주가 돈을 낼 만하다고 느끼는 쪽은 어느 쪽인가?", ja: "「通知」と「返信の下書き」のどちらに、オーナーはお金を払う価値を感じるのか？", en: "Which would owners pay for: the alert or the reply draft?" } },
            { tag: "hyp", text: { ko: "LINE이 점주에게 맞는 채널인가, 아니면 이메일이나 구글 앱이 나은가?", ja: "LINEはオーナーに合うチャネルか、それともメールやGoogleのアプリのほうがよいか？", en: "Is LINE the right channel for owners, or would email or Google's own app work better?" } },
            { tag: "hyp", text: { ko: "월 1,500엔은 너무 싼가, 비싼가, 적당한가?", ja: "月1,500円は安すぎるか、高すぎるか、ちょうどよいか？", en: "Is 1,500 yen per month too cheap, too expensive, or about right?" } },
            { tag: "hyp", text: { ko: "구글 API 접근 승인을 받을 수 있는 현실적인 경로가 파일럿 점주 방식뿐인가?", ja: "Google APIのアクセス承認を得る現実的な道は、パイロット店舗方式だけなのか？", en: "Is the pilot-owner route the only realistic way to get Google API access?" } }
          ]
        }
      ]
    }
  ]
};
