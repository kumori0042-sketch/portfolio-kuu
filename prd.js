// 대표작(補助金かんたん検索) 기획서 1장. 구현된 것 / 계획 / 검증 전 가설 / 미측정을 구분해서 적는다.
// tag: done(구현·확인됨) · plan(계획) · hyp(검증 전 가설) · none(미측정)
const PRD = {
  title: {
    ko: "補助金かんたん検索 — 기획서 1장",
    ja: "補助金かんたん検索 — 企画書（1枚）",
    en: "補助金かんたん検索 — one-page product brief"
  },
  note: {
    ko: "개발하면서 정한 기획과 앞으로의 계획입니다. 사용자 인터뷰나 실사용 지표는 아직 없어서, 문제 정의는 검증 전 가설로, 지표는 미측정으로 표시했습니다.",
    ja: "開発しながら決めた企画と今後の計画です。ユーザーインタビューや実利用の指標はまだないため、課題は検証前の仮説、指標は未計測として表示しています。",
    en: "This is the plan I set while building, and what comes next. There are no user interviews or usage metrics yet, so problems are marked as unvalidated hypotheses and metrics as not yet measured."
  },
  legend: [
    { tag: "done", text: { ko: "구현·확인됨", ja: "実装・確認済み", en: "Built and checked" } },
    { tag: "unv", text: { ko: "구현됨·AI 결과는 미확인", ja: "実装済み・AIの出力は未確認", en: "Built, AI output not yet checked" } },
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
            ko: "일본 중소기업이 모집 중인 보조금을 찾고, 자신의 답변으로 신청서 초안을 쓰고, 심사기준으로 점검해 Word 파일로 내려받도록 돕는 웹서비스.",
            ja: "日本の中小企業が、募集中の補助金を探し、自分の回答で申請書の下書きを作り、審査基準で点検してWordで保存できるよう支援するWebサービス。",
            en: "A web service that helps Japanese SMEs find open subsidies, draft an application from their own answers, check it against the review criteria, and download it as a Word file."
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
            { tag: "hyp", text: { ko: "보조금 정보가 여러 곳에 흩어져 있어서, 자기 회사에 맞는 것을 찾는 데 시간이 든다.", ja: "補助金の情報が各所に散らばっていて、自社に合うものを探すのに時間がかかる。", en: "Subsidy information is scattered, so finding the right one for your company takes time." } },
            { tag: "hyp", text: { ko: "심사기준을 모르면 신청서에 무엇을 써야 할지 막막하다.", ja: "審査基準が分からないと、申請書に何を書けばよいか分からない。", en: "Without knowing the review criteria, it's hard to tell what to write in the application." } },
            { tag: "hyp", text: { ko: "전문가(행정사 등)에게 맡기면 비용이 든다.", ja: "専門家（行政書士など）に頼むと費用がかかる。", en: "Hiring a professional (e.g. an administrative scrivener) costs money." } }
          ]
        },
        {
          type: "p",
          text: {
            ko: "세 가지 모두 아직 실제 사용자에게 확인하지 않았습니다. 베타에서 관찰로 검증할 계획입니다.",
            ja: "3つとも、まだ実際のユーザーには確認していません。ベータでの観察で検証する計画です。",
            en: "None of these has been confirmed with real users yet; I plan to validate them by observing beta users."
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
            ko: "보조금 신청 경험이 적은 중소기업의 경영자·담당자. (가설적 설정이며 인터뷰로 만든 페르소나가 아닙니다.)",
            ja: "補助金の申請経験が少ない中小企業の経営者・担当者。（仮の設定であり、インタビューから作ったペルソナではありません。）",
            en: "Owners and staff at SMEs with little experience applying for subsidies. (An assumption, not a persona built from interviews.)"
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
            { tag: "done", text: { ko: "7단계 화면과 흐름: 검색(jGrants 공식 API) → 기업 정보 → 구성 확인 → 질문에 답하기 → 초안 → 심사기준 체크 → Word 다운로드", ja: "7ステップの画面と流れ：検索（jGrants公式API）→ 企業情報 → 構成確認 → 質問に回答 → 下書き → 審査基準チェック → Wordダウンロード", en: "Seven screens and flow: search (official jGrants API) → company info → outline → answer questions → draft → review-criteria check → Word download" } },
            { tag: "unv", text: { ko: "AI가 하는 부분(구성안 제안·초안 작성·심사기준 평가·검색 키워드 추천·공모요령 PDF에서 심사기준 추출)은 코드가 있지만, 실제 모델의 결과는 아직 확인하지 못했다.", ja: "AIが担う部分（構成案の提案・下書き作成・審査基準の評価・検索キーワードの提案・公募要領PDFからの審査基準抽出）はコードがあるものの、実際のモデルの出力はまだ確認できていない。", en: "The AI parts (outline suggestions, drafting, criteria evaluation, keyword recommendations, criteria extraction from call PDFs) are coded, but real model output hasn't been checked yet." } },
            { tag: "done", text: { ko: "로그인은 선택. 로그인하면 여러 기기에서 같은 작업을 이어서 할 수 있음", ja: "ログインは任意。ログインすると複数の端末で作業を続けられる", en: "Login is optional; with it, work continues across devices" } }
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
            { tag: "done", text: { ko: "신청서를 한 번에 대신 써주지 않는다: 행정사 업무 대행으로 보일 수 있고, 결과도 뻔한 문장이 되기 쉽다. 질문에 답한 내용만 근거로 문장을 다듬는다.", ja: "申請書を丸ごと代筆しない：行政書士業務の代行と見られるおそれがあり、文章も平凡になりやすい。質問への回答だけを根拠に文章を整える。", en: "It does not write the whole application for you: that could look like professional-services work and tends to produce generic text. It only polishes what the user answered." } },
            { tag: "done", text: { ko: "사용자가 말하지 않은 사실이나 숫자를 만들지 않는다 (프롬프트에서 금지).", ja: "ユーザーが述べていない事実や数値を作らない（プロンプトで禁止）。", en: "It never invents facts or numbers the user didn't state (forbidden in the prompt)." } },
            { tag: "done", text: { ko: "신청을 대행하거나 제출하지 않는다. 공식 jGrants 사이트로 안내한다.", ja: "申請の代行や提出は行わない。公式のjGrantsサイトへ案内する。", en: "It does not apply or submit on the user's behalf; it points to the official jGrants site." } },
            { tag: "done", text: { ko: "보조금별 정확한 배점을 약속하지 않는다. 실제 공모요령에 숫자 배점이 없는 경우가 있고, 참고 심사기준을 쓸 때는 화면에 그렇게 표시한다.", ja: "補助金ごとの正確な配点は約束しない。実際の公募要領に数値配点がない場合があり、参考の審査基準を使うときは画面にそう表示する。", en: "It doesn't promise exact scoring per subsidy: real calls sometimes publish no numeric weights, and a notice is shown whenever reference criteria are used." } }
          ]
        }
      ]
    },
    {
      title: { ko: "성공 지표 (제안)", ja: "成功指標（案）", en: "Success metrics (proposed)" },
      blocks: [
        {
          type: "table",
          head: [
            { ko: "관점", ja: "観点", en: "Aspect" },
            { ko: "지표", ja: "指標", en: "Metric" },
            { ko: "목표", ja: "目標", en: "Target" },
            { ko: "상태", ja: "状態", en: "Status" }
          ],
          rows: [
            [
              { ko: "활성화", ja: "アクティベーション", en: "Activation" },
              { ko: "검색한 방문 중 '書類作成を始める'를 누른 비율", ja: "検索した訪問のうち「書類作成を始める」を押した割合", en: "Share of searching visits that click 'start drafting'" },
              { ko: "베타에서 기준선을 재고 정함", ja: "ベータで基準値を測って設定", en: "Set after measuring a baseline in beta" },
              { tag: "none", ko: "계측 미구현", ja: "計測は未実装", en: "Tracking not built" }
            ],
            [
              { ko: "핵심 가치", ja: "コアバリュー", en: "Core value" },
              { ko: "초안 5개 섹션을 끝까지 완료한 세션 비율", ja: "下書き5セクションを最後まで完了したセッションの割合", en: "Share of sessions that complete all five draft sections" },
              { ko: "베타에서 기준선을 재고 정함", ja: "ベータで基準値を測って設定", en: "Set after measuring a baseline in beta" },
              { tag: "none", ko: "계측 미구현", ja: "計測は未実装", en: "Tracking not built" }
            ],
            [
              { ko: "품질", ja: "品質", en: "Quality" },
              { ko: "체크리스트에서 '부족' 항목이 수정 후 '충분'으로 바뀐 수", ja: "チェックリストで「不足」が修正後に「十分」に変わった件数", en: "Criteria that moved from 'missing' to 'sufficient' after edits" },
              { ko: "베타에서 기준선을 재고 정함", ja: "ベータで基準値を測って設定", en: "Set after measuring a baseline in beta" },
              { tag: "none", ko: "계측 미구현", ja: "計測は未実装", en: "Tracking not built" }
            ],
            [
              { ko: "신뢰·안전", ja: "信頼・安全", en: "Trust & safety" },
              { ko: "'사실과 다르다'는 신고 수", ja: "「事実と違う」という報告の件数", en: "Reports of statements that don't match the user's facts" },
              { ko: "0건", ja: "0件", en: "Zero" },
              { tag: "none", ko: "신고 수단 미구현", ja: "報告手段は未実装", en: "Reporting not built" }
            ],
            [
              { ko: "비용", ja: "コスト", en: "Cost" },
              { ko: "하루 AI 호출 수", ja: "1日のAI呼び出し数", en: "AI calls per day" },
              { ko: "하루 40회 이하", ja: "1日40回以下", en: "40 or fewer per day" },
              { tag: "done", ko: "상한 구현됨", ja: "上限を実装済み", en: "Cap implemented" }
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
            { tag: "done", text: { ko: "완료: 7개 화면, 로그인·기기 간 동기화, 고객 관점 UAT와 수정 (AI 생성 부분 제외)", ja: "完了：7つの画面、ログイン・端末間同期、顧客視点のUATと修正（AI生成部分を除く）", en: "Done: seven screens, login and cross-device sync, customer-side UAT and fixes (AI-generated parts excluded)" } },
            { tag: "plan", text: { ko: "지금: AI 생성 기능을 무료 모델로 연결하고 일본어 결과 품질을 직접 확인 (코드는 준비됨, 키 발급 대기)", ja: "今：AI生成機能を無料モデルにつなぎ、日本語の出力品質を自分で確認（コードは準備済み、キー発行待ち）", en: "Now: connect AI generation to a free model and check Japanese output quality myself (code is ready, waiting for a key)" } },
            { tag: "plan", text: { ko: "다음: 중소기업 3~5곳 베타 모집·관찰, 위 지표 계측 추가", ja: "次：中小企業3〜5社のベータ募集・観察、上記指標の計測を追加", en: "Next: recruit and observe 3–5 SMEs in beta, add tracking for the metrics above" } },
            { tag: "plan", text: { ko: "그다음: 다른 보조금 공모요령까지 심사기준 자동 추출 범위 확대, 비밀번호 재설정", ja: "その次：他の補助金の公募要領まで審査基準の自動抽出範囲を拡大、パスワード再設定", en: "Later: widen automatic criteria extraction to other subsidies' calls, add password reset" } }
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
            { tag: "done", text: { ko: "법적(행정사 업무 경계): 질문·답변 구조로 제한하고, '제출 전 직접 확인' 안내를 항상 보이게 고정", ja: "法的（行政書士業務との線引き）：質問と回答の形式に限定し、「提出前にご自身で確認」の注意を常時表示", en: "Legal (professional-services boundary): limited to a Q&A flow, with a permanent 'check it yourself before submitting' notice" } },
            { tag: "done", text: { ko: "AI가 없는 사실을 지어냄: 답변에 없는 내용 금지 규칙, 사용자가 문장을 직접 편집 가능", ja: "AIが事実を作り出す：回答にない内容を禁止するルール、ユーザーが文章を直接編集可能", en: "AI inventing facts: a no-unsupported-claims rule, and the user can edit every sentence" } },
            { tag: "none", text: { ko: "무료 모델의 일본어 비즈니스 문장 품질: 아직 실제 호출로 확인하지 못했음", ja: "無料モデルの日本語ビジネス文章の品質：まだ実際の呼び出しで確認できていない", en: "Free model's Japanese business-writing quality: not yet checked with real calls" } },
            { tag: "done", text: { ko: "심사기준 불일치: 참고 기준을 쓸 때 경고 배너를 띄우고, 공모요령 추출은 사용자가 직접 켜는 옵트인", ja: "審査基準の不一致：参考基準を使うときは警告バナーを表示し、公募要領からの抽出はユーザーが自分で有効化するオプトイン", en: "Criteria mismatch: a warning banner whenever reference criteria are used; extraction from the real call is opt-in" } },
            { tag: "done", text: { ko: "AI 비용 폭주: 하루 호출 상한, 무료 모델 우선", ja: "AIコストの急増：1日の呼び出し上限、無料モデルを優先", en: "Runaway AI cost: a daily call cap, free model first" } },
            { tag: "done", text: { ko: "개인정보: 로그인은 선택이고, 회사 정보는 로그인했을 때만 서버에 저장", ja: "個人情報：ログインは任意で、会社情報はログインしたときだけサーバーに保存", en: "Privacy: login is optional, and company info is stored on the server only when logged in" } },
            { tag: "done", text: { ko: "jGrants 공식 API의 일시 오류(관찰된 적 있음): 서버에서 5xx·네트워크 오류에 한해 최대 2회 자동 재시도, 그래도 실패하면 기존 오류 안내를 그대로 보여줌", ja: "jGrants公式APIの一時的なエラー（観測あり）：サーバー側で5xx・ネットワークエラーに限り最大2回まで自動再試行し、それでも失敗した場合は従来どおりのエラー表示", en: "Transient errors from the official jGrants API (seen once): the server now retries up to twice, but only for 5xx or network errors; if it still fails, the existing error message is shown as before" } }
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
            { tag: "hyp", text: { ko: "실제 중소기업이 신청서 초안에 얼마나 시간을 쓰고, 어디에서 가장 막히는가?", ja: "実際の中小企業は申請書の下書きにどれくらい時間をかけ、どこで一番つまずくのか？", en: "How long do real SMEs spend on a draft, and where do they get stuck most?" } },
            { tag: "hyp", text: { ko: "공모요령 형식이 보조금마다 다른데, 심사기준 자동 추출을 어디까지 믿을 수 있는가?", ja: "公募要領の形式は補助金ごとに違うが、審査基準の自動抽出はどこまで信頼できるか？", en: "Call formats differ by subsidy; how far can automatic criteria extraction be trusted?" } },
            { tag: "hyp", text: { ko: "무료 모델로 충분한 품질이 나오는가, 아니면 유료 모델이 꼭 필요한가?", ja: "無料モデルで十分な品質が出るか、それとも有料モデルが必要か？", en: "Is a free model good enough, or is a paid model necessary?" } },
            { tag: "hyp", text: { ko: "정식 오픈 후에도 무료로 둘 것인가, 수익 모델이 필요한가?", ja: "正式公開後も無料にするのか、収益モデルが必要か？", en: "Stay free after launch, or does it need a revenue model?" } }
          ]
        }
      ]
    }
  ]
};
