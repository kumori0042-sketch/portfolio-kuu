(function () {
  "use strict";

  const listEl = document.getElementById("qna-list");
  const emptyEl = document.getElementById("qna-empty");
  const countEl = document.getElementById("qna-count");
  const authArea = document.getElementById("auth-area");
  const nameField = document.getElementById("ask-name-field");
  const askAs = document.getElementById("ask-as");

  let currentUser = null;
  let isOwner = false;

  function escapeHtml(s) {
    const div = document.createElement("div");
    div.textContent = s == null ? "" : String(s);
    return div.innerHTML;
  }
  function timeAgo(iso) {
    return new Date(iso).toLocaleDateString("ko-KR", { year: "numeric", month: "short", day: "numeric" });
  }
  function showStatus(el, msg, isError) {
    el.textContent = msg;
    el.hidden = false;
    el.classList.toggle("error", !!isError);
  }

  // ---------- 인증 ----------
  async function loadAuth() {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      currentUser = data.user;
      isOwner = !!data.isOwner;
    } catch (e) {
      currentUser = null;
      isOwner = false;
    }
    renderAuth();
  }

  function renderAuth() {
    if (!currentUser) {
      authArea.innerHTML = `<a class="gh-login-btn" href="/api/auth/login">${window.t("qna.login")}</a>`;
      nameField.hidden = false;
      askAs.hidden = true;
      return;
    }
    authArea.innerHTML = `
      <div class="auth-user">
        <img src="${currentUser.avatar}" alt="${escapeHtml(currentUser.name)}">
        <span>${escapeHtml(currentUser.name)}</span>
        ${isOwner ? '<span class="owner-badge">OWNER</span>' : ""}
      </div>
      <button type="button" class="auth-logout" id="btn-logout">${window.t("qna.logout")}</button>
    `;
    document.getElementById("btn-logout").addEventListener("click", () => {
      window.location.href = "/api/auth/logout";
    });
    nameField.hidden = true;
    askAs.hidden = false;
    askAs.textContent = window.t("qna.askAs", currentUser.name);
  }

  // ---------- 목록 렌더 ----------
  function renderPost(p) {
    const item = document.createElement("div");
    item.className = "qna-item";
    const avatarImg = p.avatar ? `<img class="qna-avatar" src="${p.avatar}" alt="">` : "";
    item.innerHTML = `
      <div class="qna-meta">
        ${avatarImg}
        <span class="name">${escapeHtml(p.name)}</span>
        <span>${timeAgo(p.ts)}</span>
      </div>
      <p class="qna-question">${escapeHtml(p.question)}</p>
      ${p.answer ? renderAnswer(p) : renderPending(p)}
    `;
    if (!p.answer) wireAnswerForm(item, p);
    return item;
  }

  function renderAnswer(p) {
    return `<div class="qna-answer"><div class="k">${window.t("qna.answerBy")}</div><p>${escapeHtml(p.answer)}</p></div>`;
  }

  function renderPending(p) {
    if (isOwner) {
      // 소유자로 로그인한 경우 키 입력 없이 바로 답변 작성
      return `
        <p class="qna-pending">${window.t("qna.pending")}</p>
        <button type="button" class="answer-toggle" data-id="${p.id}">${window.t("qna.answerToggleOwner")}</button>
        <div class="answer-form" hidden data-id="${p.id}">
          <div class="field">
            <textarea rows="2" class="answer-text" placeholder="${window.t("qna.answerContentPlaceholder")}"></textarea>
          </div>
          <button type="button" class="btn btn-primary answer-submit" data-id="${p.id}">${window.t("qna.answerSubmit")}</button>
          <p class="status-line answer-status" hidden></p>
        </div>`;
    }
    return `
      <p class="qna-pending">${window.t("qna.pending")}</p>
      <button type="button" class="answer-toggle" data-id="${p.id}">${window.t("qna.answerToggleGuest")}</button>
      <div class="answer-form" hidden data-id="${p.id}">
        <div class="field">
          <label class="k">${window.t("qna.adminKeyLabel")}</label>
          <input type="password" class="admin-key-input" placeholder="${window.t("qna.adminKeyPlaceholder")}">
        </div>
        <div class="field">
          <label class="k">${window.t("qna.answerContentLabel")}</label>
          <textarea rows="2" class="answer-text" placeholder="${window.t("qna.answerContentPlaceholder")}"></textarea>
        </div>
        <button type="button" class="btn btn-primary answer-submit" data-id="${p.id}">${window.t("qna.answerSubmit")}</button>
        <p class="status-line answer-status" hidden></p>
      </div>`;
  }

  function wireAnswerForm(item, p) {
    const toggle = item.querySelector(".answer-toggle");
    const form = item.querySelector(".answer-form");
    toggle.addEventListener("click", () => {
      form.hidden = !form.hidden;
    });
    item.querySelector(".answer-submit").addEventListener("click", async (e) => {
      const keyInput = item.querySelector(".admin-key-input");
      const key = keyInput ? keyInput.value.trim() : undefined;
      const answer = item.querySelector(".answer-text").value.trim();
      const statusEl = item.querySelector(".answer-status");
      if (!answer || (!isOwner && !key)) {
        showStatus(statusEl, isOwner ? window.t("qna.answerNeedText") : window.t("qna.answerNeedBoth"), true);
        return;
      }
      const btn = e.currentTarget;
      btn.disabled = true;
      try {
        const res = await fetch("/api/qna", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "answer", id: p.id, answer, key })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "전송 실패");
        await loadPosts();
      } catch (err) {
        showStatus(statusEl, err.message, true);
        btn.disabled = false;
      }
    });
  }

  async function loadPosts() {
    try {
      const res = await fetch("/api/qna");
      const data = await res.json();
      listEl.innerHTML = "";
      if (!data.posts || data.posts.length === 0) {
        emptyEl.hidden = false;
        emptyEl.querySelector("p").textContent = window.t("qna.empty");
        countEl.textContent = "";
        return;
      }
      emptyEl.hidden = true;
      countEl.textContent = window.t("qna.count", data.posts.length);
      data.posts.forEach((p) => listEl.appendChild(renderPost(p)));
    } catch (e) {
      emptyEl.hidden = false;
      emptyEl.querySelector("p").textContent = window.t("qna.loadError");
    }
  }

  document.getElementById("btn-ask-submit").addEventListener("click", async () => {
    const name = document.getElementById("ask-name").value.trim();
    const question = document.getElementById("ask-question").value.trim();
    const statusEl = document.getElementById("ask-status");
    if (!question) {
      showStatus(statusEl, window.t("qna.needQuestion"), true);
      return;
    }
    const btn = document.getElementById("btn-ask-submit");
    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = window.t("qna.submitting");
    try {
      const res = await fetch("/api/qna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "ask", question, name })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "전송 실패");
      document.getElementById("ask-name").value = "";
      document.getElementById("ask-question").value = "";
      showStatus(statusEl, window.t("qna.submitted"), false);
      await loadPosts();
    } catch (err) {
      showStatus(statusEl, "등록하지 못했어요: " + err.message, true);
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  });

  window.addEventListener("langchange", () => {
    renderAuth();
    loadPosts();
  });

  (async function init() {
    await loadAuth();
    await loadPosts();
  })();
})();
