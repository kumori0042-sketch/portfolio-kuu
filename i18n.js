// 한국어/일본어/영어 3개국어 전환. localStorage에 저장하고, 없으면 브라우저 언어로 추정한다.
const I18N = {
  ko: {
    "meta.origin": "[ 한국 출신 · 일본에서 만듭니다 ]",
    "hero.eyebrow": "PORTFOLIO",
    "hero.wordmark.prefix": "개발자",
    "hero.wordmark.name": "KUU",
    "hero.sub": "아이디어 하나를 <strong>리서치 → 설계 → 빌드 → 배포 → 회고</strong>까지<br class=\"br-desktop\"> 혼자 완주합니다. 반응이 없어도 그 과정을 그대로 보여줍니다.",
    "hero.cta.projects": "프로젝트 보기 ↓",
    "hero.cta.qna": "Q&A",
    "hero.cta.github": "GitHub",
    "hero.liveBadge": "지금 실제로 작동하는 앱입니다",
    "projects.eyebrow": "PROJECTS",
    "projects.title": "만든 것들",
    "projects.lede": "완성도보다 과정을 먼저 봅니다. 카드를 누르면 어떻게 만들었는지까지 볼 수 있습니다.",
    "filter.all": "전체",
    "skills.eyebrow": "CROSS-PROJECT",
    "skills.title": "반복해서 하는 것들",
    "footer.visits": (n) => `누적 방문 ${n.toLocaleString("ko-KR")}명`,
    "footer.viewCode": "이 사이트 코드 보기",
    "footer.copyLink": "🔗 링크 복사",
    "footer.copied": "복사됐어요!",
    "footer.copyFailed": "복사 실패",
    "footer.qna": "Q&A",
    "footer.github": "GitHub",
    "footer.disquiet": "디스콰이엇",
    "footer.portfolio": "포트폴리오로",
    "footer.about": "이 사이트는?",
    "intro.title": "개발자KUU 포트폴리오에 오신 걸 환영해요 👋",
    "intro.body": "아이디어 하나를 <strong>리서치 → 설계 → 빌드 → 배포 → 회고</strong>까지 혼자 완주하는 과정을 그대로 기록하는 공간이에요. 반응이 있든 없든, 만든 과정을 솔직하게 보여드려요.",
    "intro.tip": "아래 프로젝트 카드를 눌러보면 어떻게 만들었는지 자세히 볼 수 있어요. 궁금한 게 있으면 Q&A에 남겨주세요.",
    "intro.cta": "둘러보기 시작",
    "qna.back": "← 포트폴리오로",
    "qna.login": "GitHub으로 로그인",
    "qna.logout": "로그아웃",
    "qna.eyebrow": "Q&A",
    "qna.title": "무엇이든 물어보세요",
    "qna.lede": "프로젝트, 기술 선택, 혹은 그냥 궁금한 것. 여기 남기시면 직접 답합니다.",
    "qna.nameLabel": "이름 (선택)",
    "qna.namePlaceholder": "익명이어도 괜찮아요",
    "qna.askAs": (name) => `"${name}"(GitHub) 이름으로 질문을 남깁니다.`,
    "qna.questionLabel": "질문",
    "qna.questionPlaceholder": "궁금한 걸 편하게 적어주세요.",
    "qna.submit": "질문 남기기",
    "qna.submitting": "등록 중...",
    "qna.submitted": "질문이 등록됐어요. 답변을 기다려주세요!",
    "qna.needQuestion": "질문을 입력해주세요.",
    "qna.listHead": "ALL QUESTIONS",
    "qna.count": (n) => `${n}개`,
    "qna.empty": "아직 질문이 없어요. 첫 질문을 남겨보세요.",
    "qna.loadError": "질문을 불러오지 못했어요. 새로고침해주세요.",
    "qna.answerBy": "개발자KUU의 답변",
    "qna.pending": "아직 답변 대기 중이에요.",
    "qna.answerToggleOwner": "답변 작성",
    "qna.answerToggleGuest": "답변하기 (관리자)",
    "qna.adminKeyLabel": "관리자 키",
    "qna.adminKeyPlaceholder": "키 입력",
    "qna.answerContentLabel": "답변 내용",
    "qna.answerContentPlaceholder": "답변을 적어주세요.",
    "qna.answerSubmit": "답변 등록",
    "qna.answerNeedBoth": "키와 답변을 모두 입력해주세요.",
    "qna.answerNeedText": "답변을 입력해주세요."
  },
  ja: {
    "meta.origin": "[ 韓国出身 · 日本で開発中 ]",
    "hero.eyebrow": "ポートフォリオ",
    "hero.wordmark.prefix": "開発者",
    "hero.wordmark.name": "KUU",
    "hero.sub": "一つのアイデアを<strong>リサーチ→設計→開発→リリース→振り返り</strong>まで<br class=\"br-desktop\">一人でやり遂げます。反応がなくても、そのプロセスをそのまま見せます。",
    "hero.cta.projects": "プロジェクトを見る ↓",
    "hero.cta.qna": "Q&A",
    "hero.cta.github": "GitHub",
    "hero.liveBadge": "今、実際に動いているアプリです",
    "projects.eyebrow": "PROJECTS",
    "projects.title": "作ったもの",
    "projects.lede": "完成度より過程を先に見せます。カードを押すと、どう作ったかまで見られます。",
    "filter.all": "すべて",
    "skills.eyebrow": "CROSS-PROJECT",
    "skills.title": "繰り返しやっていること",
    "footer.visits": (n) => `累計訪問 ${n.toLocaleString("ja-JP")}人`,
    "footer.viewCode": "このサイトのコードを見る",
    "footer.copyLink": "🔗 リンクをコピー",
    "footer.copied": "コピーしました！",
    "footer.copyFailed": "コピー失敗",
    "footer.qna": "Q&A",
    "footer.github": "GitHub",
    "footer.disquiet": "Disquiet",
    "footer.portfolio": "ポートフォリオへ",
    "footer.about": "このサイトは？",
    "intro.title": "開発者KUUのポートフォリオへようこそ 👋",
    "intro.body": "一つのアイデアを<strong>リサーチ→設計→開発→リリース→振り返り</strong>まで一人でやり遂げる過程をそのまま記録する場所です。反応があってもなくても、作った過程を正直に見せます。",
    "intro.tip": "下のプロジェクトカードを押すと、どう作ったか詳しく見られます。気になることがあればQ&amp;Aに残してください。",
    "intro.cta": "見てみる",
    "qna.back": "← ポートフォリオへ",
    "qna.login": "GitHubでログイン",
    "qna.logout": "ログアウト",
    "qna.eyebrow": "Q&A",
    "qna.title": "何でも聞いてください",
    "qna.lede": "プロジェクトのこと、技術選定、あるいはただの疑問でも。ここに残していただければ直接お答えします。",
    "qna.nameLabel": "お名前（任意）",
    "qna.namePlaceholder": "匿名でも大丈夫です",
    "qna.askAs": (name) => `"${name}"(GitHub)の名前で質問を送ります。`,
    "qna.questionLabel": "質問",
    "qna.questionPlaceholder": "気になることを気軽に書いてください。",
    "qna.submit": "質問を送る",
    "qna.submitting": "送信中...",
    "qna.submitted": "質問が届きました。回答をお待ちください！",
    "qna.needQuestion": "質問を入力してください。",
    "qna.listHead": "ALL QUESTIONS",
    "qna.count": (n) => `${n}件`,
    "qna.empty": "まだ質問がありません。最初の質問を送ってみてください。",
    "qna.loadError": "質問を読み込めませんでした。更新してください。",
    "qna.answerBy": "開発者KUUの回答",
    "qna.pending": "まだ回答をお待ちしています。",
    "qna.answerToggleOwner": "回答を書く",
    "qna.answerToggleGuest": "回答する（管理者）",
    "qna.adminKeyLabel": "管理者キー",
    "qna.adminKeyPlaceholder": "キーを入力",
    "qna.answerContentLabel": "回答内容",
    "qna.answerContentPlaceholder": "回答を書いてください。",
    "qna.answerSubmit": "回答を登録",
    "qna.answerNeedBoth": "キーと回答を両方入力してください。",
    "qna.answerNeedText": "回答を入力してください。"
  },
  en: {
    "meta.origin": "[ Korean · building from Japan ]",
    "hero.eyebrow": "PORTFOLIO",
    "hero.wordmark.prefix": "Developer",
    "hero.wordmark.name": "KUU",
    "hero.sub": "I take one idea all the way through <strong>research → design → build → launch → retro</strong><br class=\"br-desktop\"> — alone. Even with zero response, I show the process as it really was.",
    "hero.cta.projects": "See projects ↓",
    "hero.cta.qna": "Q&A",
    "hero.cta.github": "GitHub",
    "hero.liveBadge": "This is a real, working app right now",
    "projects.eyebrow": "PROJECTS",
    "projects.title": "What I've built",
    "projects.lede": "Process over polish. Click a card to see how it was actually made.",
    "filter.all": "All",
    "skills.eyebrow": "CROSS-PROJECT",
    "skills.title": "Things I keep doing",
    "footer.visits": (n) => `${n.toLocaleString("en-US")} visits so far`,
    "footer.viewCode": "View this site's code",
    "footer.copyLink": "🔗 Copy link",
    "footer.copied": "Copied!",
    "footer.copyFailed": "Copy failed",
    "footer.qna": "Q&A",
    "footer.github": "GitHub",
    "footer.disquiet": "Disquiet",
    "footer.portfolio": "Back to portfolio",
    "footer.about": "About this site",
    "intro.title": "Welcome to Developer KUU's portfolio 👋",
    "intro.body": "This is where I document, honestly, what it looks like to take one idea all the way through <strong>research → design → build → launch → retro</strong> — alone. Whether or not anyone responds, the process gets shown as it really happened.",
    "intro.tip": "Click a project card below to see exactly how it was built. Got a question? Leave it on the Q&A page.",
    "intro.cta": "Start exploring",
    "qna.back": "← Back to portfolio",
    "qna.login": "Sign in with GitHub",
    "qna.logout": "Sign out",
    "qna.eyebrow": "Q&A",
    "qna.title": "Ask me anything",
    "qna.lede": "About a project, a tech choice, or just something you're curious about. Leave it here and I'll answer directly.",
    "qna.nameLabel": "Name (optional)",
    "qna.namePlaceholder": "Anonymous is fine",
    "qna.askAs": (name) => `Posting as "${name}" (via GitHub).`,
    "qna.questionLabel": "Question",
    "qna.questionPlaceholder": "Write whatever's on your mind.",
    "qna.submit": "Ask",
    "qna.submitting": "Posting...",
    "qna.submitted": "Your question is in. I'll get back to it!",
    "qna.needQuestion": "Please write a question.",
    "qna.listHead": "ALL QUESTIONS",
    "qna.count": (n) => `${n}`,
    "qna.empty": "No questions yet. Be the first to ask.",
    "qna.loadError": "Couldn't load questions. Please refresh.",
    "qna.answerBy": "Developer KUU's answer",
    "qna.pending": "Not answered yet.",
    "qna.answerToggleOwner": "Write an answer",
    "qna.answerToggleGuest": "Answer (owner only)",
    "qna.adminKeyLabel": "Admin key",
    "qna.adminKeyPlaceholder": "Enter key",
    "qna.answerContentLabel": "Answer",
    "qna.answerContentPlaceholder": "Write your answer.",
    "qna.answerSubmit": "Submit answer",
    "qna.answerNeedBoth": "Please fill in both the key and the answer.",
    "qna.answerNeedText": "Please write an answer."
  }
};

(function () {
  "use strict";
  const LS_LANG = "kuu_lang";
  const SUPPORTED = ["ko", "ja", "en"];

  function detectLang() {
    const saved = localStorage.getItem(LS_LANG);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || "ko").slice(0, 2);
    return SUPPORTED.includes(nav) ? nav : "ko";
  }

  let currentLang = detectLang();

  window.t = function (key, ...args) {
    const entry = (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.ko[key];
    if (typeof entry === "function") return entry(...args);
    return entry ?? key;
  };
  window.getLang = function () {
    return currentLang;
  };
  window.setLang = function (lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(LS_LANG, lang);
    applyStaticI18n();
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  };

  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = window.t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", window.t(key));
    });
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = currentLang;
    applyStaticI18n();
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => window.setLang(btn.dataset.lang));
    });
  });
})();
