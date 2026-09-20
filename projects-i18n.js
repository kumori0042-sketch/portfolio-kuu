// 프로젝트 상세(모달)의 일본어·영어 번역. 한국어 원문은 projects.js에 있고, 여기는 같은 순서의 배열로 대응한다.
// stats / pivots / skills의 개수와 순서는 projects.js와 같아야 한다 (check-portfolio.js가 검사).
const PROJECT_I18N = {
  "jgrants-matching": {
    ja: {
      description:
        "経済産業省のjGrants公式APIで募集中の補助金を検索し、会社情報をもとにおすすめを受け取り、質問に答えながら申請書の下書きを作り、審査基準チェックリストで点検してからWordファイルでダウンロードするサービスです。検索・企業情報・ログイン・端末間同期・文書ダウンロードは実際に動作します。AI生成機能（構成案・下書き・評価・おすすめ）はAPIキーを接続する前の段階です。",
      stats: [
        { n: "7ステップ", l: "検索から書類ダウンロードまで" },
        { n: "13項目", l: "実際の公募要領から抽出した審査基準" },
        { n: "4案", l: "比較した候補アイデアから1つを選定" },
        { n: "未接続", l: "AI生成機能 — APIキー接続前" }
      ],
      pivots: [
        {
          title: "マイナンバーによる資産診断 → 補助金マッチング",
          body: "最初は「日本版Toss」を考えましたが、マイナンバー法が利用目的を税・社会保障・災害対応に限定していること、融資の診断には登録義務が生じうることから、手が出せないと判断しました。候補4つ（不動産分析、補助金マッチング、商圏分析、求人統合）を比較し、公式APIが公開されていて競合が少ない補助金マッチングを選びました。"
        },
        {
          title: "「全部書いて」 → 質問と回答で一緒に書く",
          body: "AIが申請書を丸ごと代筆する機能は、行政書士業務の代行と受け取られるおそれがあり、ありきたりな文章にもなりがちです。そこで、AIが項目ごとに質問し、ユーザーが短く答え、その回答だけを根拠に文章を整える構造に絞りました。プロンプトにも、回答にない事実や数字を作らないよう入れています。"
        },
        {
          title: "仮に入れた配点 → 実際の公募要領の審査基準",
          body: "サンプルのチェックリストに仮の配点を入れていましたが、実際の公募要領（50ページのPDF）を読むと、項目ごとの数値配点は公開されていないと分かりました。仮の配点をやめ、原文から審査基準13項目をそのまま抽出し、この基準を満たすには何を聞くべきかを逆算して質問を設計しました。"
        },
        {
          title: "顧客視点のUATで見つけた致命的な問題",
          body: "初めて訪れた顧客になったつもりで最後まで操作すると、AI呼び出しが失敗したときに次のステップへ進む手段がなく、内部の設定エラー文がそのまま表示されていました。「AIなしで続ける」という逃げ道を追加し、顧客には一般的な案内だけが見えるよう直しました。"
        }
      ],
      skills: [
        "公的APIを使ったサービス企画",
        "法的リスクの検討と機能範囲の設定",
        "PDFからの要件抽出",
        "プロンプト設計（事実のみ使用）",
        "AIコスト上限の設計",
        "顧客視点のUAT",
        "Next.js · TypeScript · Tailwind",
        "独自認証 · 端末間同期"
      ]
    },
    en: {
      description:
        "A service that searches open subsidies through the Ministry of Economy, Trade and Industry's official jGrants API, recommends matches from your company profile, walks you through questions to draft an application, checks it against a review-criteria checklist, and exports a Word file. Search, company info, login, cross-device sync and document download work for real. The AI generation features (outline, draft, evaluation, recommendations) are built but not yet connected to an API key.",
      stats: [
        { n: "7 steps", l: "from search to document download" },
        { n: "13", l: "review criteria extracted from a real call for proposals" },
        { n: "4", l: "candidate ideas compared, 1 chosen" },
        { n: "Not connected", l: "AI generation — no API key yet" }
      ],
      pivots: [
        {
          title: "My Number–based asset checks → subsidy matching",
          body: "I first imagined a \"Japanese Toss,\" but the My Number Act limits its use to tax, social security and disaster response, and loan assessment can trigger registration duties, so I judged it out of reach. I compared four candidates (real-estate analysis, subsidy matching, trade-area analysis, job-listing aggregation) and chose subsidy matching: an open official API and little competition."
        },
        {
          title: "\"Write it all for me\" → answer questions and write together",
          body: "Having AI write a whole application could look like doing an administrative scrivener's work, and the result tends to be generic. So I limited it to a structure where AI asks per-section questions, the user answers briefly, and the text is polished using only those answers. The prompt also forbids inventing facts or numbers that aren't in the answers."
        },
        {
          title: "Made-up scores → the real call for proposals' criteria",
          body: "I had put made-up point values in a sample checklist, but reading the actual call for proposals (a 50-page PDF) showed that per-item numeric scores aren't published. I dropped the invented scores, extracted the 13 review criteria verbatim from the source, and worked backwards to design the questions needed to satisfy them."
        },
        {
          title: "A critical problem found in customer-side UAT",
          body: "Clicking through to the end like a first-time customer, I found there was no way to reach the next step if an AI call failed, and an internal configuration error message was shown as-is. I added a \"continue without AI\" way out and changed it so customers only see a generic message."
        }
      ],
      skills: [
        "Service planning on a public API",
        "Legal-risk review and feature scoping",
        "Extracting requirements from PDFs",
        "Prompt design (facts only)",
        "AI cost-cap design",
        "Customer-side UAT",
        "Next.js · TypeScript · Tailwind",
        "Custom auth · cross-device sync"
      ]
    }
  },

  "reverse-engineering-study": {
    ja: {
      description:
        "5週間39万ウォンのコホート型スタディの隙間を見つけ、市場調査からビルド・公開・チャネル共有まで、8日間で一人でやり切りました。反応ゼロという結果もそのまま残しています。",
      stats: [
        { n: "8日", l: "企画から公開まで" },
        { n: "6社", l: "自分でリサーチした企業ケース" },
        { n: "3回", l: "方向転換（ピボット）" },
        { n: "0件", l: "実ユーザーの反応 — 隠していません" }
      ],
      pivots: [
        {
          title: "ブレインストーミングアプリ → リバース企画アプリ",
          body: "漠然としたアイデア収集アプリから、PM面接の課題形式とぴったり重なるリバース企画を軸にコンセプトを絞りました。"
        },
        {
          title: "インタビューが先 → 公開が先",
          body: "支払意思（WTP）インタビューのスクリプトまで用意しましたが、形式的なインタビューより公開後の実際の反応のほうが正直なシグナルだと判断し、方向を変えました。"
        },
        {
          title: "編集的なデザイン → Tossスタイル",
          body: "セリフ体の見出しを使った実験的なデザインを、ユーザーのフィードバックを受けて全面的に作り直しました。実際に公開する製品とレポートでは、デザインの基準が違うと学びました。"
        }
      ],
      skills: [
        "市場・競合の実地リサーチ",
        "プロダクト要件定義",
        "BYOKアーキテクチャ設計",
        "フロントエンド実装（Vanilla JS）",
        "サーバーレス関数・永続ストレージの構築",
        "Vercelデプロイ · CI連携",
        "価格ポリシーのフェイクドアテスト",
        "デザインシステムの継続改善",
        "コミュニティチャネルの運営",
        "データに基づく誠実な振り返り"
      ]
    },
    en: {
      description:
        "I spotted a gap in a 5-week, 390,000-won cohort study program and took it solo from market research through build, deploy and channel sharing in 8 days. The zero-response result is left in the record as it is.",
      stats: [
        { n: "8 days", l: "from planning to deploy" },
        { n: "6", l: "company cases researched firsthand" },
        { n: "3", l: "pivots" },
        { n: "0", l: "real-user responses — not hidden" }
      ],
      pivots: [
        {
          title: "Brainstorming app → reverse-engineering app",
          body: "I narrowed a vague idea-collection app to a reverse-engineering concept that overlaps exactly with the PM interview assignment format."
        },
        {
          title: "Interviews first → launch first",
          body: "I had even prepared a willingness-to-pay interview script, but decided that real reactions after launch are a more honest signal than formal interviews, and changed course."
        },
        {
          title: "Editorial design → Toss style",
          body: "After user feedback I reworked an experimental serif-headline design from scratch — I learned that the design bar for a shipped product differs from that for a report."
        }
      ],
      skills: [
        "Field research on markets and competitors",
        "Defining product requirements",
        "BYOK architecture design",
        "Front-end implementation (Vanilla JS)",
        "Serverless functions · persistent storage",
        "Vercel deploy · CI hookup",
        "Fake-door test for pricing",
        "Iterating on a design system",
        "Running community channels",
        "Honest, data-based retrospectives"
      ]
    }
  },

  "daily-puzzles": {
    ja: {
      description:
        "毎日みんなに同じ問題が出るデイリーパズルサイトです。最初の画面で、数独・ジグソー・ノノグラム・クイーンズ・バイナリ・スライドの中から今日遊ぶパズルを選びます。問題も絵もすべて日付をシードにブラウザ上で生成し、答えが一つだけか検証するため、サーバーもDBも画像ファイルもありません。",
      stats: [
        { n: "6種", l: "一覧から選べるパズル" },
        { n: "0個", l: "サーバー · DB · 画像ファイル" },
        { n: "60/60", l: "検証した日付すべてで答えが一つだけ（数独・ノノグラム・クイーンズ・バイナリ）" },
        { n: "3段階", l: "曜日ごとの難易度" }
      ],
      pivots: [
        {
          title: "パズルごとにサイト → ひとつのゲームハブ",
          body: "数独とジグソーを別々に公開していましたが、同じデザインシステムと「毎日ひとつ」という構造を共有しているので、ひとつのサイトにまとめました。一覧画面はゲームの配列にオブジェクトを足すだけでカードができ、今日の進み具合と連続記録は各ゲームが保存した値を読んで表示します。連続記録はその日の問題を解いた場合だけ続くようにして、過去の問題で埋めることを防ぎました。"
        },
        {
          title: "残したヒント数 → 解法テクニックで難易度を採点",
          body: "最初は空けたマスの数だけで数独の難易度を分けていましたが、ヒントが少なくても易しい盤面ができることがあり、体感とずれていました。シングル・隠れた候補・ペア・X-ウィングなど人が使うテクニックで実際に解いてみて、必要なテクニックで難易度を決めるよう変えました。60日分のテストで58日が目標難易度に合い、外れた日は実際の採点結果のまま表示します。"
        },
        {
          title: "パズルごとにコピー → 共通シェルに抽出",
          body: "数独とジグソーでは、記録・連続・日付チップ・タイマー・完了ウィンドウをそれぞれコピーして使っていましたが、あと4つ作る前に共通モジュールへ切り出しました。新しいパズルは自分のルールだけ実装すればよく、結果の共有や過去6日分の再挑戦といった機能も自動で付いてきます。"
        },
        {
          title: "ランダム生成 → 答えが二つなら直して一意解に",
          body: "クイーンズは、色の領域をランダムに作って答えが一つのものだけを選ぶ方式だと、10×10では6000回試しても作れない日がありました。答えが二つあるときは、二つ目の解のクイーンがいるマスを隣の領域に移して、その解を崩す方向に領域を直す方式に変え、60日分すべて作れるようになりました。ノノグラムは、行・列単位の論理だけで最後まで解ける絵だけを採用し、推測が要らないようにしました。"
        },
        {
          title: "絵もピースも日付から生成、隣り合うピースは同じ曲線を共有",
          body: "ジグソーに写真を使うと著作権とファイル管理がついてくるため、日付をシードに絵を生成し、ピース同士が区別できるよう単色の領域ができないテクスチャ層を加えました。ピースの形は、各辺の曲線を一度だけ作って両側のピースが（片方は逆向きで）共有するので、隙間なく噛み合います。同じ絵の生成器をスライドパズルにも再利用しました。"
        }
      ],
      skills: [
        "シードベースの手続き的生成（PRNG）",
        "バックトラッキング解法 · 一意解の検証",
        "解法テクニックに基づく難易度採点",
        "行・列単位の論理解法（ノノグラム）",
        "解の検査で領域を直す生成（クイーンズ）",
        "Canvas 2D · ベジェ曲線 · ポインタドラッグ",
        "共通モジュールの抽出 · 複数ページの静的サイト",
        "モバイルファーストのレスポンシブ · ダークモード",
        "Vercelデプロイ"
      ]
    },
    en: {
      description:
        "A daily puzzle site where everyone gets the same puzzle each day. On the first screen you pick today's puzzle from Sudoku, Jigsaw, Nonogram, Queens, Binary and Slide. Every puzzle and picture is generated in the browser from the date as a seed and checked for a unique answer, so there is no server, no database and no image file.",
      stats: [
        { n: "6", l: "puzzles to choose from" },
        { n: "0", l: "servers · databases · image files" },
        { n: "60/60", l: "tested dates all have exactly one answer (Sudoku, Nonogram, Queens, Binary)" },
        { n: "3 levels", l: "difficulty by weekday" }
      ],
      pivots: [
        {
          title: "One site per puzzle → a single game hub",
          body: "I first deployed Sudoku and Jigsaw separately, then merged them into one site since they share a design system and the \"one per day\" structure. The list screen makes a card just by adding an object to the games array, and today's progress and streak are read from the values each game saved. A streak continues only if you solved that day's puzzle, so it can't be filled in with backlog puzzles."
        },
        {
          title: "Number of clues left → grading difficulty by solving techniques",
          body: "At first I set Sudoku difficulty only by how many cells were blanked, but a board with few clues can still be easy, which didn't match how it felt. I switched to solving each board with human techniques — singles, hidden candidates, pairs, X-Wing — and grading by the techniques required. In a 60-day test, 58 days hit the target difficulty; the days that missed are labeled with their actual graded result."
        },
        {
          title: "Copy per puzzle → extract a shared shell",
          body: "Sudoku and Jigsaw each had their own copy of the records, streak, date chip, timer and completion window; before building four more, I pulled them into a shared module. A new puzzle only implements its own rules, and features like result sharing and replaying the past six days come along automatically."
        },
        {
          title: "Random generation → repair until the answer is unique",
          body: "For Queens, generating random color regions and keeping only those with one answer failed on some 10×10 days even after 6,000 tries. When there were two answers, I instead moved the second solution's queen cell into a neighboring region to break that solution, and all 60 days could then be generated. For Nonograms I only accept pictures that solve fully by line logic, so no guessing is ever needed."
        },
        {
          title: "Pictures and pieces generated from the date; neighbors share one curve",
          body: "Using photos for the jigsaw would bring copyright and file management, so I generate the picture from the date seed and add a texture layer so no solid-color areas make pieces indistinguishable. Each edge's curve is created once and shared by both neighboring pieces (one of them reversed), so they interlock with no gaps. The same picture generator is reused for the slide puzzle."
        }
      ],
      skills: [
        "Seed-based procedural generation (PRNG)",
        "Backtracking solver · unique-solution checks",
        "Difficulty grading by solving techniques",
        "Line-logic solving (Nonogram)",
        "Generation that repairs regions using solution checks (Queens)",
        "Canvas 2D · Bézier curves · pointer dragging",
        "Extracting shared modules · multi-page static site",
        "Mobile-first responsive · dark mode",
        "Vercel deploy"
      ]
    }
  },

  "dev-goods-shop": {
    ja: {
      description:
        "商品一覧・カート・チェックアウトまで実際に操作できるECのデモです。決済と配送は処理しませんが、注文の受付自体はサーバーレス関数で実際に動作し、注文番号が発行されます。",
      stats: [
        { n: "8種", l: "開発者向けグッズ" },
        { n: "1つ", l: "サーバーレス関数" },
        { n: "0円", l: "実際の決済 — 完全なデモ" },
        { n: "100%", l: "実際に動く注文フロー" }
      ],
      pivots: [
        {
          title: "本物の決済の代わりに模擬チェックアウト",
          body: "ポートフォリオのデモに本物の決済連携は過剰だと判断しました。その代わり、注文の受付自体はサーバーへ実際に送信されて注文番号が発行されるようにし、「本当に動く半分」と「デモの半分」をはっきり分けました。"
        },
        {
          title: "上書きの代わりにappend-only保存",
          body: "以前のプロジェクト（Q&A掲示板）で、Vercel Blobの上書きがCDNキャッシュのせいで即座に反映されない問題に遭ったため、注文データも最初から新しいファイルを追加するだけの方式で設計しました。"
        }
      ],
      skills: [
        "カートの状態管理（localStorage）",
        "チェックアウトフローの設計",
        "サーバーレスの注文受付API",
        "Vercel Blobによる永続保存",
        "一貫したデザインシステムの再利用",
        "Vercelデプロイ · CI連携"
      ]
    },
    en: {
      description:
        "An e-commerce demo you can actually click through: product list, cart and checkout. Payment and shipping aren't processed, but order intake really works through a serverless function and issues an order number.",
      stats: [
        { n: "8", l: "developer-goods products" },
        { n: "1", l: "serverless function" },
        { n: "¥0", l: "real payments — pure demo" },
        { n: "100%", l: "of the order flow really works" }
      ],
      pivots: [
        {
          title: "Mock checkout instead of real payment",
          body: "I judged real payment integration to be overkill for a portfolio demo. Instead, order intake itself is really sent to the server and gets an order number, drawing a clear line between the half that truly works and the half that is demo."
        },
        {
          title: "Append-only storage instead of overwriting",
          body: "In an earlier project (a Q&A board) overwriting a Vercel Blob file didn't show up right away because of CDN caching, so I designed order data from the start to only add new files."
        }
      ],
      skills: [
        "Cart state management (localStorage)",
        "Checkout flow design",
        "Serverless order-intake API",
        "Persistent storage with Vercel Blob",
        "Reusing a consistent design system",
        "Vercel deploy · CI hookup"
      ]
    }
  },

  "crypto-trading-bot": {
    ja: {
      description:
        "実際の資金（少額）でバイナンス先物の自動売買ボットを8か月間運用しました。AIシグナルのブレンド、多軸フィルタ、Telegram遠隔操作まで、17回以上バージョンを作り替えながら、実取引のログを基に戦略を磨き続けました。",
      stats: [
        { n: "8か月", l: "実取引の運用期間" },
        { n: "17+", l: "戦略バージョンの反復（v8〜v9）" },
        { n: "8銘柄", l: "同時に監視するシンボル" },
        { n: "4段階", l: "ティア別のリスク管理体系" }
      ],
      pivots: [
        {
          title: "単一のテクニカル指標 → AIシグナルのブレンド",
          body: "ADX・RSI・DIのようなテクニカル指標だけでは足りないと考え、Groq APIで恐怖・強欲指数、資金調達率、BTCとの相関といったリアルタイムの市場コンテキストを反映するAIスコアを、テクニカルスコアとブレンドする構造に変えました。"
        },
        {
          title: "トレンドフォロー専用 → レンジ相場への対応を追加",
          body: "ADXが低いレンジ相場で損失が集中していることをログで確認し、ボリンジャーバンドの平均回帰によるRANGE戦略を追加しました。恐怖・強欲指数に応じてエントリーサイズを動的に調整するようにしました。"
        },
        {
          title: "手数料が損失の41% → Makerエントリーへ切り替え",
          body: "10倍レバレッジ＋Taker手数料だと損益分岐の勝率が43〜48%まで上がることを計算し、往復手数料を0.10%から0.04%に下げるMaker（GTX）エントリーを必須条件に変えました。"
        }
      ],
      skills: [
        "実取引の自動売買システム設計",
        "ティア別リスク管理（レバレッジ · SL/TP）",
        "AIシグナルのブレンド（Groq API）",
        "実取引ログに基づくパラメータ調整",
        "Telegram遠隔操作（/pause /closeall）",
        "障害検知 · ウォッチドッグの構成",
        "データに基づく誠実な振り返り"
      ]
    },
    en: {
      description:
        "I ran a Binance futures trading bot with real (small) funds for eight months. Through 17+ version rebuilds — AI signal blending, multi-axis filters, Telegram remote control — I kept refining the strategy from live-trading logs.",
      stats: [
        { n: "8 months", l: "live-trading period" },
        { n: "17+", l: "strategy version iterations (v8–v9)" },
        { n: "8", l: "symbols monitored at once" },
        { n: "4 tiers", l: "tiered risk-management scheme" }
      ],
      pivots: [
        {
          title: "Single technical indicator → AI signal blending",
          body: "I judged that technical indicators like ADX, RSI and DI weren't enough on their own, so I changed the design to blend the technical score with an AI score from the Groq API that reflects live market context such as the Fear & Greed index, funding rate and BTC correlation."
        },
        {
          title: "Trend-following only → add range-market handling",
          body: "Logs showed losses concentrating in low-ADX range markets, so I added a RANGE strategy based on Bollinger Band mean reversion, with entry size adjusted dynamically by the Fear & Greed index."
        },
        {
          title: "Fees are 41% of losses → switch to Maker entries",
          body: "I calculated that with 10x leverage and taker fees the break-even win rate rises to 43–48%, and made Maker (GTX) entries mandatory, cutting round-trip fees from 0.10% to 0.04%."
        }
      ],
      skills: [
        "Designing a live-trading bot system",
        "Tiered risk management (leverage · SL/TP)",
        "AI signal blending (Groq API)",
        "Parameter tuning from live-trading logs",
        "Telegram remote control (/pause /closeall)",
        "Failure detection · watchdog setup",
        "Honest, data-based retrospectives"
      ]
    }
  }
};
