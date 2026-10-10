// 프로젝트 상세(모달)의 일본어·영어 번역. 한국어 원문은 projects.js에 있고, 여기는 같은 순서의 배열로 대응한다.
// stats / pivots / skills의 개수와 순서는 projects.js와 같아야 한다 (check-portfolio.js가 검사).
const PROJECT_I18N = {
  "jgrants-matching": {
    ja: {
      description:
        "経済産業省のjGrants公式APIで募集中の補助金を検索し、会社情報をもとにおすすめを受け取り、質問に答えながら申請書の下書きを作り、審査基準チェックリストで点検してからWordファイルでダウンロードするサービスです。検索・企業情報・ログイン・端末間同期・文書ダウンロードはもちろん、AI生成機能（構成案・下書き・評価・おすすめ・PDF審査基準抽出）も無料モデル（Groq）で実際に接続して確認しました。",
      stats: [
        { n: "7ステップ", l: "検索から書類ダウンロードまで" },
        { n: "13項目", l: "実際の公募要領から抽出した審査基準" },
        { n: "4案", l: "比較した候補アイデアから1つを選定" },
        { n: "5機能", l: "実際に呼び出して確認した無料AI機能" }
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
        },
        {
          title: "無料キー接続初日に見つけたバグ：下書き5回中4回が空文字",
          body: "無料のGroqキーを受け取って接続してみると、コードに入れていたモデルがいつの間にか廃止されていました。代替モデルに変えると、今度は下書き生成が5回中4回空の結果で返ってくる問題が発生。追跡すると、「推論型」モデルが答えを書く前の思考にトークン予算をすべて使ってしまうことが原因でした。推論の強度を低く固定して5回とも安定して答えが出るように直したあと、実際の企業情報で構成案・下書き・チェックリスト・おすすめ・PDF審査基準抽出の5機能すべてを実際の呼び出しで確認しました。"
        }
      ],
      skills: [
        "公的APIを使ったサービス企画",
        "法的リスクの検討と機能範囲の設定",
        "PDFからの要件抽出",
        "プロンプト設計（事実のみ使用）",
        "AIコスト上限の設計",
        "顧客視点のUAT",
        "無料LLM連携・障害原因の追跡",
        "Next.js · TypeScript · Tailwind",
        "独自認証 · 端末間同期"
      ]
    },
    en: {
      description:
        "A service that searches open subsidies through the Ministry of Economy, Trade and Industry's official jGrants API, recommends matches from your company profile, walks you through questions to draft an application, checks it against a review-criteria checklist, and exports a Word file. Search, company info, login, cross-device sync and document download work for real — and so does the AI (outline, draft, evaluation, recommendations, PDF criteria extraction), now actually connected and verified with a free model (Groq).",
      stats: [
        { n: "7 steps", l: "from search to document download" },
        { n: "13", l: "review criteria extracted from a real call for proposals" },
        { n: "4", l: "candidate ideas compared, 1 chosen" },
        { n: "5", l: "free AI features verified with real calls" }
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
        },
        {
          title: "Day-one bug with the free key: drafts came back empty 4 times out of 5",
          body: "The moment I got a free Groq key and connected it, I found the model I'd coded against had been discontinued in the meantime. Switching to a replacement model, draft generation then came back empty 4 out of 5 times. Tracing it down, the \"reasoning\" model was spending its whole token budget thinking before it ever wrote an answer. I pinned reasoning effort to low so all 5 runs came back reliably, then verified all five AI features — outline, draft, checklist, recommendations, and PDF criteria extraction — with real company data and real calls."
        }
      ],
      skills: [
        "Service planning on a public API",
        "Legal-risk review and feature scoping",
        "Extracting requirements from PDFs",
        "Prompt design (facts only)",
        "AI cost-cap design",
        "Customer-side UAT",
        "Free-LLM integration · failure diagnosis",
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

  "space-guessr": {
    ja: {
      description:
        "拡大された衛星写真の一部を見て、地球のどこかを地図上で当てるゲームです。単一のHTMLファイル（Leaflet・衛星タイル）から始め、ヒント、制限時間とスピードボーナス、3段階の難易度、全員が同じ5問を解く今日のチャレンジ、正解位置へズームアウトする答え合わせの演出、難易度別の共有ランキングまで加えました。ランキングのサーバーはCloudflare WorkersとD1で作り、ニックネーム・スコア範囲・連投をサーバー側で検証します。スコアはブラウザで計算されるため改ざんできるという限界があり、友人同士で競う用途にとどめています。",
      stats: [
        { n: "20か所", l: "地形（一目で分かる場所から手がかりが要る場所まで3段階）" },
        { n: "4つ", l: "モード（今日のチャレンジ · かんたん · ふつう · むずかしい）" },
        { n: "0件", l: "ランキング登録（2026-10-10時点・テスト記録はすべて削除）" },
        { n: "185回・0件", l: "ラウンド切り替えの自動点検回数と地図位置のずれ" }
      ],
      pivots: [
        {
          title: "ただの地図当て → 衛星写真の地形へ",
          body: "最初の構想は、拡大した衛星写真の一部だけを見て地球のどこかを当てるミニゲームで、バックエンドなしにHTMLとオープンソースの地図ライブラリだけで最初のバージョンを作ることが目標でした。衛星タイルはAPIキー不要のものを使い、正解との距離は2点間の大円距離で計算して得点にしました。紹介画面と操作説明、得点帯ごとのコメントと探検家ランクを付け、ルールを知らなくてもすぐ始められるようにしました。"
        },
        {
          title: "「写真が大きすぎて分からない」 → ズームを緩め、地形を5か所から20か所へ",
          body: "実際に遊んでみると、拡大が強すぎて質感しか見えず手がかりがない感覚と、同じ写真が繰り返される感覚がありました。地形ごとの初期ズームを1〜2段階下げて周囲の様子が見えるようにし、地形を5か所から10か所、さらに20か所に増やして、毎回ランダムに選ぶようにしました。場所ごとに「知っていましたか？」の解説を付け、当てたあとにも得るものがあるようにしました。"
        },
        {
          title: "「同じ写真の繰り返し」の本当の原因 → 地図ライブラリの隠れたアニメーション",
          body: "写真が繰り返されていると思っていましたが、実際はラウンドが変わるときに地図が新しい位置へ移れず、前の位置や初期位置で止まるバグでした。最初はアニメーションを切れば直ると判断しましたが直らず、画面が描画されない状態で一度だけ読む私のテストが問題を見逃していました。原因は、最小ズームを上げると、ライブラリが「以前の中心へのズーム移動」を次の画面更新に予約し、あとから指定した位置を上書きすることでした。呼び出し順を変え、その予約が生まれるかを直接監視する検証に切り替え、185回のラウンド切り替えで位置のずれ0件を確認しました。"
        },
        {
          title: "Firebase → Cloudflare Workers + D1 のランキング",
          body: "共有ランキングのためにまずFirebaseを試しましたが、Google Cloudの利用規約への同意の段階で何度も止まったため方向を変えました。すでにログインしていたCloudflareのWorkersとD1で作り、サーバーがニックネームの長さ・スコア範囲・ヒント回数を検証し、IPをハッシュ化して1分3回・1日50回で連投を制限し、許可したドメインからのリクエストだけを受け付けます。スコアをブラウザが計算する構造のため改ざんは防げないという限界はそのままにし、友人同士で競う用途と明記しました。"
        },
        {
          title: "ひとつのランキング → 難易度 · 今日のチャレンジ · スピードボーナス",
          body: "遊び続けるとランキングがすぐ飽和し新鮮さが減るため、モードを分けました。難易度（かんたん・ふつう・むずかしい）は、地形のプール、制限時間、得点の減衰カーブ、ヒント回数を変え、ランキングも別にしています。今日のチャレンジは日本・韓国時間の日付をシードに全員が同じ5問を解き、同じニックネームは1日1回しか登録できません。残り時間に応じてラウンド得点に最大20%を加えるスピードボーナスを入れたことでラウンドの最高点が5,000点から6,000点になり、サーバーの得点上限も合わせて変えました。"
        }
      ],
      skills: [
        "単一ファイルのウェブアプリ（Tailwind · Leaflet）",
        "地図 · 衛星タイル · 大円距離の計算",
        "サーバーレスAPI設計（Cloudflare Workers · D1）",
        "サーバー側の入力検証 · 連投制限 · CORS",
        "日付シードによる共通問題（PRNG）",
        "ライブラリ内部の挙動の追跡とバグ原因の分析",
        "モバイルファーストのレイアウト",
        "Vercelデプロイ · 自動点検スクリプト"
      ]
    },
    en: {
      description:
        "A game where you look at a zoomed-in piece of satellite imagery and pin on a map where on Earth it is. It started as a single HTML file (Leaflet and satellite tiles) and grew to include hints, a time limit with a speed bonus, three difficulty levels, a daily challenge where everyone plays the same five puzzles, a zoom-out reveal of the answer, and shared leaderboards per difficulty. The leaderboard server runs on Cloudflare Workers and D1 and validates nicknames, score ranges and spam on the server. Scores are computed in the browser, so they can be tampered with; I limit it to friendly competition.",
      stats: [
        { n: "20", l: "locations (three levels, from instantly recognizable to clue-dependent)" },
        { n: "4", l: "modes (Daily Challenge · Easy · Normal · Hard)" },
        { n: "0", l: "leaderboard entries (as of 2026-10-10 · all test records deleted)" },
        { n: "185 · 0", l: "automated round-transition checks and map position errors" }
      ],
      pivots: [
        {
          title: "Just guessing on a map → terrain in satellite imagery",
          body: "The first idea was a mini game where you see only a zoomed-in piece of satellite imagery and guess where on Earth it is, with the goal of a first version using only HTML and an open-source map library, no backend. I used a satellite tile source that needs no API key and scored guesses by the great-circle distance between two coordinates. An intro screen with controls, per-score comments and explorer ranks let people start without knowing the rules."
        },
        {
          title: "“The image is too zoomed to get a feel” → looser zoom, 5 → 20 locations",
          body: "Playing it myself, the zoom was so tight that only texture showed with no clues, and the same images seemed to repeat. I lowered each location's starting zoom by one or two levels so the surroundings are visible, and grew the pool from 5 to 10 to 20 locations, drawn at random each game. Each place got a “Did you know?” note so there is something to take away even after guessing."
        },
        {
          title: "The real cause of “the same image repeats” → a hidden animation in the map library",
          body: "I thought images were repeating, but the real bug was that the map failed to move to the new location between rounds and stayed on the previous or default position. My first call was that turning off animation would fix it; it did not, and my test, which read the state once on a screen that was not being painted, was missing the problem. The cause: raising the minimum zoom made the library schedule a “zoom to the old center” for the next screen update, which later overwrote the position I had set. I changed the call order and switched to a check that directly watches whether such a scheduled animation is created, and confirmed zero position errors over 185 round transitions."
        },
        {
          title: "Firebase → a Cloudflare Workers + D1 leaderboard",
          body: "I tried Firebase first for the shared leaderboard, but it kept stopping at the Google Cloud Terms of Service step, so I changed direction. I built it on Cloudflare Workers and D1, where I was already logged in. The server validates nickname length, score range and hint count, hashes the IP to limit spam to three submissions per minute and 50 per day, and accepts requests only from the allowed domain. Because scores are computed in the browser, tampering is not prevented; I kept that limit explicit and describe it as for friendly competition."
        },
        {
          title: "One ranking → difficulty levels, a daily challenge and a speed bonus",
          body: "Repeated play saturated the ranking quickly and novelty faded, so I split it into modes. Difficulty (Easy, Normal, Hard) changes the location pool, time limit, score falloff curve and hint count, with separate leaderboards. The daily challenge seeds five puzzles from the Japan/Korea date so everyone plays the same ones, and one nickname can register once per day. The speed bonus adds up to 20% of a round's score by remaining time, which raised the per-round maximum from 5,000 to 6,000, so I changed the server's score ceiling to match."
        }
      ],
      skills: [
        "Single-file web app (Tailwind · Leaflet)",
        "Maps · satellite tiles · great-circle distance",
        "Serverless API design (Cloudflare Workers · D1)",
        "Server-side validation · spam limits · CORS",
        "Date-seeded shared puzzles (PRNG)",
        "Tracing library internals to find a bug's cause",
        "Mobile-first layout",
        "Vercel deploy · automated check scripts"
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

  "kuchikomiban": {
    ja: {
      description:
        "Googleマップに★1〜2のクチコミが付いたらLINEで知らせ、AIが書いた返信案をワンタップで投稿できるサービスを構想し、まず先行登録ページだけを作って公開しました。Googleの標準通知が無料なので、価値は通知ではなく返信を書く負担をなくすことにあると考え、開発はオーナーへのインタビューで前払いか確約を得てから始める条件を決めています。今あるのは日本語の紹介・料金ページと、先行登録・お問い合わせフォーム、プライバシーポリシーで、サービス本体はまだありません。",
      stats: [
        { n: "0件", l: "先行登録（2026-10-09時点・公開直後）" },
        { n: "月1,500円", l: "1店舗あたりの料金仮説（税込・インタビュー前）" },
        { n: "3店舗", l: "開発着手の条件：オーナーの前払い・確約" },
        { n: "4週間・5件", l: "公開後、有料が5件に満たなければ撤退" }
      ],
      pivots: [
        {
          title: "通知サービス → 返信のストレスをなくす",
          body: "最初のコンセプトは低評価クチコミをすぐ知らせる通知でしたが、Googleの標準通知が無料なので、通知だけでは対価をもらう理由が弱いと考えました。オーナーが本当に大変なのは、感情的にならず丁寧な返信を書くことなので、AIの返信案を確認してワンタップで投稿する流れを中核の価値に据えました。先行登録ページの最初の画面も、この流れ（通知 → 下書き → ワンタップ返信）をそのまま見せています。"
        },
        {
          title: "作ってから売る → 先に確約、撤退条件も先に",
          body: "Googleビジネスプロフィール APIは承認まで最長14日かかります。その待ち時間に本体を先に作るのではなく、オーナーへのインタビューで前払いか確約を3店舗以上得るまでは開発に入らず、着手したら3週間でコア機能だけを出し、公開後4週間で有料が5件に満たなければ撤退する、という基準を先に書きました。そのため今作ったのは先行登録ページまでです。"
        },
        {
          title: "個人メールを公開 → サイト内のお問い合わせフォーム",
          body: "個人情報を受け取る以上、開示・削除の依頼を受ける窓口が必要ですが、個人のメールアドレスは公開したくありませんでした。メールの代わりにサイト内のお問い合わせフォーム（種類に「登録情報の開示・訂正・削除」を用意）を作り、内容は東京リージョンのDBに保存するようにしました。限界は、新しい問い合わせが来ても自動通知がなく、ダッシュボードを自分で見に行く必要があることです。"
        },
        {
          title: "ブラウザからDB書き込み → サーバー専用の鍵でのみ書き込み",
          body: "先行登録の情報（メール）をブラウザから直接DBに書かせず、サーバーアクションだけが書けるようにしました。2つのテーブルとも行レベルセキュリティ（RLS）を有効にしてポリシーは作らず、書き込み権限のあるservice_roleキーはサーバーのコードからだけ読めるように（server-only）しています。ボット対策の隠し入力欄を置き、同じメールで再登録された場合は登録済みかどうかを知らせず成功として扱います。公開したURLで、登録・保存・削除をそれぞれ確認しました。"
        },
        {
          title: "料金未定 → 月1,500円の仮説",
          body: "料金は月1,500円（1店舗・税込）としました。低い価格は入りやすい一方で「あるといいもの」に見えやすく、確約を得にくくなる可能性があるため、インタビューで確約を取りながら検証する仮説として扱います。ページには料金を載せつつ、「正式リリース時の料金は先行登録者に最初にお知らせします」という文言も添えています。"
        }
      ],
      skills: [
        "Next.js 15（App Router）· Server Actions",
        "Supabase（Postgres · RLS）· 東京リージョン",
        "サーバー専用のシークレットキー · ボット対策 · 重複登録の処理",
        "プライバシーポリシー · 問い合わせ窓口の設計",
        "仮説と着手・撤退条件の文書化",
        "日本語のランディングコピー · 料金表示",
        "流入経路の計測（?src=）",
        "Vercel · GitHub連携の自動デプロイ"
      ]
    },
    en: {
      description:
        "I conceived a service that alerts a shop on LINE when a 1–2★ Google review appears and lets the owner post an AI-drafted reply with one tap, and built and published only the waitlist page first. Because Google's built-in notifications are free, I see the value not in alerts but in removing the burden of writing the reply, and I set the condition that development starts only after owners give a prepayment or firm commitment in interviews. What exists now is a Japanese intro and pricing page, a waitlist form, a contact form and a privacy policy; the core service does not exist yet.",
      stats: [
        { n: "0", l: "waitlist signups (as of 2026-10-09, just after launch)" },
        { n: "¥1,500/mo", l: "price hypothesis per shop (tax incl., before interviews)" },
        { n: "3", l: "shops that must prepay or commit before development starts" },
        { n: "4 wk · 5", l: "drop it if fewer than 5 paying customers after launch" }
      ],
      pivots: [
        {
          title: "Alert service → removing the stress of replying",
          body: "The first concept was an alert for low-star reviews, but Google's built-in notifications are free, so alerts alone were a weak reason to charge. What owners actually struggle with is writing a polite reply without getting emotional, so I made “review an AI-drafted reply and post it with one tap” the core value. The first screen of the waitlist page shows exactly that flow: alert → draft → one-tap reply."
        },
        {
          title: "Build then sell → commitments first, kill criteria in writing",
          body: "The Google Business Profile API can take up to 14 days to approve. Instead of building the core service while waiting, I wrote the rules first: no development until at least three owners give a prepayment or firm commitment in interviews; once started, ship only the core in three weeks; and drop it if there are fewer than five paying customers four weeks after launch. So what exists is the waitlist page only."
        },
        {
          title: "Public personal email → on-site contact form",
          body: "Collecting personal data means I need a channel for access and deletion requests, but I did not want to publish my personal email address. I built an on-site contact form (one option is “access, correction or deletion of my data”) and store submissions in the Tokyo-region database. The limitation is that new inquiries trigger no automatic notification, so I have to check the dashboard myself."
        },
        {
          title: "Browser writes to the DB → writes only through a server-only key",
          body: "I did not let the browser write signup data (emails) straight to the database; only a server action can. Both tables have row-level security on with no policies, and the service_role key that can write is readable only from server code (server-only). A hidden honeypot field blocks simple bots, and a repeat signup with the same email is treated as a success without revealing whether it was already registered. On the live URL I checked that a signup is saved and can be deleted."
        },
        {
          title: "No price → a ¥1,500/month hypothesis",
          body: "I set the price at ¥1,500 per month (one shop, tax included). A low price lowers the barrier but can make the product look like a nice-to-have and make firm commitments harder to get, so I treat it as a hypothesis to test in interviews. The page shows the price alongside a line saying the final price will be announced to waitlist members first."
        }
      ],
      skills: [
        "Next.js 15 (App Router) · Server Actions",
        "Supabase (Postgres · RLS) · Tokyo region",
        "Server-only secret keys · bot protection · duplicate handling",
        "Privacy policy and contact channel design",
        "Writing down hypotheses and go/kill conditions",
        "Japanese landing copy · price display",
        "Traffic-source tracking (?src=)",
        "Vercel · GitHub auto deploy"
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
  },
  "suumo-alert": {
    ja: {
      description:
        "SUUMOの中古マンション検索結果を1日に数回読み取り、条件（面積・築年・駅徒歩・総戸数など）に合う物件をSQLiteに蓄積して、新着・値下げ・割安をDiscordで知らせるツールです。割安は、同じ駅の物件の㎡単価の中央値より10%以上安い場合と判定し、通知には⭐保存・🗑削除ボタンが付いてその場で整理できます。GitHub Actionsで動き、ボタンのクリックはCloudflare Workerが受け、サイトのrobots.txtの要求間隔を守ります。個人用ツールのため公開デモはありません。",
      stats: [
        { n: "4件・6件", l: "条件を通過した物件 · 詳細条件で除外した物件（2026-10-10時点）" },
        { n: "0件", l: "割安・値下げの通知（駅ごとのサンプルが5件未満のため判定できない）" },
        { n: "30秒", l: "リクエスト間隔（robots.txtのCrawl-delayを順守）" },
        { n: "2〜3回", l: "1日の実際の実行回数（予約は4回、GitHub側の遅延・欠落）" }
      ],
      pivots: [
        {
          title: "新着通知 → 割安の判定（駅ごとの中央値）",
          body: "最初は条件に合う新着を知らせるだけの単純な通知でした。目的は安く出ている物件を見分けることなので、物件をDBに貯め続け、同じ駅の㎡単価の中央値より10%以上安いものだけを「割安」として別に知らせ、同じ物件の価格が下がったら下げ幅と回数も合わせて知らせるよう変えました。駅ごとのサンプルが5件未満だと判定を保留しますが、今はその基準を満たす駅がなく、割安の通知は一度も出ていません。"
        },
        {
          title: "リクエスト間隔3秒 → robots.txtを確認して30秒",
          body: "初期のスクリプトはリクエストの間を3秒しか空けていませんでしたが、robots.txtを直接確認するとCrawl-delayは30秒でした。間隔を30秒守ると、候補物件の詳細ページを毎回すべて読む方式では1回に約27分かかり、1日に何度も動かすと無料の実行枠を超えかねないと計算しました。そこで、新着または一覧の価格が変わった物件だけ詳細を取得し、詳細条件で除外した物件は7日間再取得しないよう変えました。直近14回の実行のうち13回が2〜5分で、1回（DB初期化の直後）が15分でした。候補が多いときに先頭の40件だけが繰り返し取得され、残りが永遠に処理されない問題も同時に解消しました。"
        },
        {
          title: "ハードフィルターで除外 → 警告タグで表示",
          body: "1階の物件を丸ごと除外したところ、条件を通る物件がほとんどなく、通知が一度も来ませんでした。除外されていた物件をログで確認すると、ほかの条件はすべて通り、1階であることだけが理由で外れているものがありました。1階は除外せず「1階」の警告タグだけを付けて判断は自分でする形に変えると、最初の通知が来ました。積立金が低い、月の固定費が高い、築年が古い建物も、同じようにタグだけを付けます。"
        },
        {
          title: "複数の条件を1つのチャンネルに → 条件別のチャンネル・基準値に分離",
          body: "検索条件をもう1つ追加する際にURLを1つのリストにまとめて動かしたところ、2つ目の条件の物件31件が1つ目の条件のチャンネルにまとめて投稿されてしまいました。条件ごとにURL・通知チャンネル・基準値（例：徒歩の分数）を別々に持つ設定ファイルに変え、DBも条件別に状態を記録して、同じ物件が2つの条件に該当しても、それぞれに通知が届くようにしました。誤って投稿されたメッセージ35件はボットで削除しました。2つ目の条件は、チャンネルが決まるまで停止しています。"
        },
        {
          title: "通常のWebhook → ボット + ボタンのクリックを受けるサーバー",
          body: "通知に⭐保存・🗑削除ボタンを付けたかったのですが、ボタンのクリックを受けるにはメッセージをボットが送る必要があり、クリックの署名を検証して応答するサーバーも必要なため、Webhookからボットに切り替え、サーバーはCloudflare Workerで作りました。保存は別チャンネルへのコピー、削除は元のメッセージを消します。途中でボットのリクエストが403で弾かれることがありましたが、既定のリクエストヘッダー（User-Agent）が不審なトラフィックと判定されたためで、ヘッダーを明示して解決しました。"
        }
      ],
      skills: [
        "ウェブスクレイピング · robots.txtを守る設計",
        "SQLiteのスキーマ設計とマイグレーション",
        "統計に基づく判定（中央値 · サンプル基準）",
        "GitHub Actionsの定期実行 · シークレット管理",
        "Discordボット · ボタンインタラクション（Cloudflare Workers）",
        "条件別の設定分離（設定ファイル · 基準値の上書き）",
        "オフラインのシナリオテスト（偽のレスポンス）",
        "実行コスト・時間の最適化"
      ]
    },
    en: {
      description:
        "A tool that reads SUUMO used-condo search results several times a day, stores listings that match my criteria (area, build year, walking time, number of units and so on) in SQLite, and posts new, price-cut and underpriced listings to Discord. A listing counts as underpriced when its price per square meter is at least 10% below the median for the same station, and each alert carries Save and Delete buttons for quick triage. It runs on GitHub Actions, a Cloudflare Worker receives the button clicks, and it respects the site's robots.txt crawl delay. It is a personal tool, so there is no public demo.",
      stats: [
        { n: "4 · 6", l: "listings that passed the criteria · listings rejected at the detail stage (as of 2026-10-10)" },
        { n: "0", l: "underpriced or price-cut alerts (no station has the five samples needed to judge yet)" },
        { n: "30 s", l: "request interval (follows robots.txt Crawl-delay)" },
        { n: "2–3", l: "actual runs per day (four are scheduled; GitHub delays or drops some)" }
      ],
      pivots: [
        {
          title: "New-listing alerts → underpriced detection (per-station median)",
          body: "At first it was a simple alert for new listings matching my criteria. Since the goal is to spot listings priced low, I changed it to accumulate listings in a database, flag as “underpriced” only those at least 10% below the same station's median price per square meter, and report price cuts together with how many times a listing has dropped. Judgment is held back when a station has fewer than five samples; no station meets that yet, so no underpriced alert has ever fired."
        },
        {
          title: "3-second request gaps → 30 seconds after checking robots.txt",
          body: "The first script paused only three seconds between requests, but checking robots.txt myself showed a Crawl-delay of 30 seconds. At 30 seconds, reading every candidate's detail page on every run would take about 27 minutes, and I calculated that running several times a day could exceed the free run allowance. So I fetch details only for new listings or ones whose listed price changed, and skip rejected listings for seven days. In the last 14 runs, 13 took 2–5 minutes and one (right after a database reset) took 15. A problem where only the first 40 candidates were fetched repeatedly and the rest never got processed disappeared with it."
        },
        {
          title: "Hard filter → a warning tag",
          body: "Excluding ground-floor units outright left almost nothing passing, so no alert ever came. Checking the log for what was being filtered, some listings passed every other criterion and were rejected only for being on the first floor. I changed it to keep them and add a “1st floor” warning tag, leaving the call to me, and the first alert arrived. Low reserve funds, high monthly fixed costs and older buildings are tagged the same way."
        },
        {
          title: "Several searches in one channel → separate channel and thresholds per search",
          body: "When I added a second search I merged the URLs into one list, and 31 listings from the second search were posted at once to the first search's channel. I switched to a config file where each search has its own URL, channel and thresholds (for example, walking minutes), and the database now records state per search, so a listing matching both searches alerts each one. I deleted the 35 wrongly posted messages with the bot. The second search stays off until its channel is decided."
        },
        {
          title: "Plain webhook → a bot plus a server for button clicks",
          body: "I wanted Save and Delete buttons on each alert. Receiving button clicks requires the message to be sent by a bot and a server that verifies the click signature and responds, so I moved from a webhook to a bot and built the server as a Cloudflare Worker. Save copies the alert to another channel and Delete removes the original. Along the way the bot's requests were blocked with 403; the default request header (User-Agent) was being treated as suspicious traffic, and setting it explicitly fixed that."
        }
      ],
      skills: [
        "Web scraping · design that respects robots.txt",
        "SQLite schema design and migration",
        "Statistical judgment (median · minimum sample)",
        "GitHub Actions scheduling · secrets management",
        "Discord bot · button interactions (Cloudflare Workers)",
        "Per-search config separation (config file · threshold overrides)",
        "Offline scenario tests (fake responses)",
        "Optimizing run cost and time"
      ]
    }
  }
};
