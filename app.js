(function () {
  "use strict";

  // ---------- 프로젝트 갤러리 (PROJECTS 배열만 늘리면 자동 반영) ----------
  const grid = document.getElementById("project-grid");
  const skillGrid = document.getElementById("skill-grid");

  const lang = () => (window.getLang ? window.getLang() : "ko");
  // {ko, ja, en} 형태의 다국어 필드와 일반 문자열을 모두 받는다
  const L = (v) => (v && typeof v === "object" ? (v[lang()] ?? v.ko ?? "") : v ?? "");
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const projectById = (id) => PROJECTS.find((p) => p.id === id);
  const nm = (p) => L(p.nameL) || p.name;
  const featured = () => PROJECTS.find((p) => p.featured) || PROJECTS[0];

  function statusMarkup(p) {
    if (p.status === "record") return `<span class="status-pill record">${window.t("status.record")}</span>`;
    return `<span class="status-pill live"><span class="live-dot"></span>${window.t("status.live")}</span>`;
  }

  function renderCards() {
    grid.innerHTML = "";
    PROJECTS.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card" + (p.featured ? " featured" : "");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", nm(p));
      card.innerHTML = `
        <div class="card-cover">
          ${p.featured ? `<span class="flag">${window.t("card.flagship")}</span>` : ""}
          <span class="card-cover-name">${esc(nm(p))}</span>
        </div>
        <div class="card-body">
          <div class="card-status">${statusMarkup(p)}<span class="card-year mono">${p.year}</span></div>
          <p class="card-oneliner">${esc(L(p.oneLiner))}</p>
          <ul class="card-proof">
            <li>${esc(L(p.proof))}</li>
            ${p.statusNote ? `<li class="note">${esc(L(p.statusNote))}</li>` : ""}
          </ul>
          <div class="card-role"><span class="k">${window.t("card.role")}</span>${esc(L(p.role))}</div>
          <div class="card-signals">${(p.signals || []).map((k) => `<span class="sig">${window.t("sig." + k)}</span>`).join("")}</div>
          <div class="card-open">${window.t("card.open")}</div>
        </div>`;
      const open = () => openModal(p);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
      enableCardTilt(card);
      grid.appendChild(card);
    });
    observeReveal(grid.querySelectorAll(".project-card"), 80);
  }

  function renderSkills() {
    const set = new Set();
    PROJECTS.forEach((p) => p.skills.forEach((s) => set.add(s)));
    skillGrid.innerHTML = [...set].map((s) => `<div class="skill-chip">${esc(s)}</div>`).join("");
  }

  // 첫 화면 증거 칩: 숫자는 데이터에서 세어서 항상 실제와 맞는다
  function renderHeroChips() {
    const el = document.getElementById("hero-chips");
    if (!el) return;
    const decisions = PROJECTS.reduce((sum, p) => sum + p.pivots.length, 0);
    const live = PROJECTS.filter((p) => p.links && p.links.live).length;
    el.innerHTML = [
      window.t("hero.chip.projects", PROJECTS.length),
      window.t("hero.chip.live", live),
      window.t("hero.chip.decisions", decisions)
    ]
      .map((x) => `<span class="hero-chip">${x}</span>`)
      .join("");
  }

  // 면접관용 3분 가이드
  function renderGuide() {
    const ol = document.getElementById("guide-steps");
    if (!ol) return;
    const steps = [
      { k: "s1", act: "live" },
      { k: "s2", act: "open" },
      { k: "s3", act: "writing" },
      { k: "s4", act: "contact" }
    ];
    ol.innerHTML = steps
      .map(
        (st, i) => `
      <li class="guide-step">
        <div class="guide-head"><span class="guide-n mono">${i + 1}</span><span class="guide-time mono">${window.t("guide." + st.k + ".time")}</span></div>
        <h3>${window.t("guide." + st.k + ".title")}</h3>
        <p>${window.t("guide." + st.k + ".body")}</p>
        <button type="button" class="guide-btn" data-act="${st.act}">${window.t("guide." + st.k + ".btn")}</button>
      </li>`
      )
      .join("");
  }

  // PM 역량 ↔ 증거 (EVIDENCE는 projects.js)
  function renderMatrix() {
    const el = document.getElementById("matrix");
    if (!el || typeof EVIDENCE === "undefined") return;
    el.innerHTML = ["define", "scope", "ship", "learn", "uat"]
      .map((key) => {
        const items = (EVIDENCE[key] || [])
          .map((r) => {
            const p = projectById(r.project);
            if (!p) return "";
            return `<li><button type="button" class="matrix-item" data-project="${p.id}"><span class="matrix-proj">${esc(nm(p))}</span><span class="matrix-text">${esc(L(r.text))}</span></button></li>`;
          })
          .join("");
        return `<div class="matrix-row"><div class="matrix-label">${window.t("sig." + key)}</div><ul class="matrix-items">${items}</ul></div>`;
      })
      .join("");
  }

  // 연락 수단: CONTACT(projects.js)에 값이 있는 것만 보여준다
  function renderContact() {
    const el = document.getElementById("contact-links");
    if (!el) return;
    const c = typeof CONTACT !== "undefined" ? CONTACT : {};
    const items = [`<a class="btn btn-primary" href="qna.html">${window.t("contact.qna")}</a>`];
    if (c.email) items.push(`<a class="btn btn-ghost" href="mailto:${esc(c.email)}">${window.t("contact.email")}</a>`);
    if (c.linkedin) items.push(`<a class="btn btn-ghost" href="${esc(c.linkedin)}" target="_blank" rel="noopener">${window.t("contact.linkedin")}</a>`);
    if (c.resume) items.push(`<a class="btn btn-ghost" href="${esc(c.resume)}" target="_blank" rel="noopener">${window.t("contact.resume")}</a>`);
    items.push(`<a class="btn btn-ghost" href="https://github.com/kumori0042-sketch" target="_blank" rel="noopener">${window.t("contact.github")}</a>`);
    el.innerHTML = items.join("");
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }

  document.addEventListener("click", (e) => {
    const act = e.target.closest("[data-act]");
    if (act) {
      const a = act.dataset.act;
      if (a === "live") window.open(featured().links.live, "_blank", "noopener");
      else if (a === "open") openModal(featured());
      else if (a === "writing") scrollToId("writing");
      else if (a === "contact") scrollToId("contact");
      return;
    }
    const proj = e.target.closest("[data-project]");
    if (proj) {
      const p = projectById(proj.dataset.project);
      if (p) openModal(p);
    }
  });
  const ctaFeatured = document.getElementById("cta-featured");
  if (ctaFeatured) ctaFeatured.addEventListener("click", () => openModal(featured()));

  function renderAll() {
    renderHeroChips();
    renderGuide();
    renderCards();
    renderMatrix();
    renderSkills();
    renderWritings();
    renderContact();
  }

  // ---------- 스크롤 등장 애니메이션 / 마우스 반응형 ----------
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const revealObserver =
    !reduceMotion && "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                revealObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        )
      : null;

  function observeReveal(elements, stagger, variant) {
    if (!revealObserver) return; // reduced-motion이거나 미지원 브라우저면 그냥 기본 상태로 보임
    const cls = variant === "title" ? "title-reveal" : "reveal-init";
    elements.forEach((el, i) => {
      el.classList.add(cls);
      if (stagger) el.style.transitionDelay = `${i * stagger}ms`;
      revealObserver.observe(el);
    });
  }

  // 히어로는 스크롤 없이 바로 보이는 영역이라 IntersectionObserver 대신 로드 시 바로 재생
  function playHeroEntrance() {
    if (!revealObserver) return;
    // 역할 줄(eyebrow)은 처음부터 바로 읽혀야 해서 애니메이션에서 뺀다
    const titleEls = document.querySelectorAll(".hero-copy .wordmark");
    const fadeEls = document.querySelectorAll(".hero-copy .hero-sub, .hero-copy .hero-chips, .hero-copy .cta-row");
    titleEls.forEach((el, i) => {
      el.classList.add("title-reveal");
      el.style.transitionDelay = `${i * 110}ms`;
    });
    fadeEls.forEach((el, i) => {
      el.classList.add("reveal-init");
      el.style.transitionDelay = `${titleEls.length * 110 + i * 110}ms`;
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        titleEls.forEach((el) => el.classList.add("reveal-visible"));
        fadeEls.forEach((el) => el.classList.add("reveal-visible"));
      });
    });
  }

  // 히어로 브라우저 목업: 마우스 위치에 따라 살짝 기울어지는 패럴랙스
  function enableHeroTilt() {
    const preview = document.querySelector(".hero-preview");
    const frame = document.querySelector(".hero-frame");
    if (!preview || !frame || !finePointer || reduceMotion) return;
    preview.addEventListener("mousemove", (e) => {
      const rect = preview.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) scale(1.015)`;
    });
    preview.addEventListener("mouseleave", () => {
      frame.style.transform = "";
    });
  }

  // 프로젝트 카드: 마우스 위치에 따라 기울어지고 은은한 하이라이트가 따라다님
  function enableCardTilt(card) {
    if (!finePointer || reduceMotion) return;
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      card.style.transform = `perspective(700px) rotateX(${(-(py - 0.5) * 10).toFixed(2)}deg) rotateY(${((px - 0.5) * 10).toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      card.classList.add("tilt-active");
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.classList.remove("tilt-active");
    });
  }

  // ---------- 문단 스크롤 워드 리빌 (studioloop.com.br 참고) ----------
  // 공백이 없는 일본어도 제대로 나뉘도록 Intl.Segmenter 우선 사용, 미지원 브라우저는 공백 분리로 폴백
  function segmentText(text, lang) {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      try {
        return [...new Intl.Segmenter(lang || "ko", { granularity: "word" }).segment(text)];
      } catch (e) {
        /* fall through */
      }
    }
    return text.split(/(\s+)/).filter(Boolean).map((s) => ({ segment: s, isWordLike: !/^\s+$/.test(s) }));
  }

  function wrapWordsPreservingTags(root, lang) {
    function walk(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        segmentText(node.textContent, lang).forEach(({ segment, isWordLike }) => {
          if (isWordLike) {
            const span = document.createElement("span");
            span.className = "sw";
            span.textContent = segment;
            frag.appendChild(span);
          } else {
            frag.appendChild(document.createTextNode(segment));
          }
        });
        node.replaceWith(frag);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        [...node.childNodes].forEach(walk);
      }
    }
    [...root.childNodes].forEach(walk);
  }

  const ledeObservers = new Map();
  function enableWordReveal(el) {
    if (!el || reduceMotion || !("IntersectionObserver" in window)) return;
    const prev = ledeObservers.get(el);
    if (prev) prev.disconnect();
    wrapWordsPreservingTags(el, window.getLang ? window.getLang() : "ko");
    const words = el.querySelectorAll(".sw");
    if (!words.length) return;
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progress = Math.min(1, entry.intersectionRatio / 0.8);
          const revealCount = Math.round(progress * words.length);
          words.forEach((w, i) => w.classList.toggle("sw-active", i < revealCount));
        });
      },
      { threshold: thresholds }
    );
    obs.observe(el);
    ledeObservers.set(el, obs);
  }

  // ---------- 회고 · 노트 ----------
  function renderWritings() {
    const list = document.getElementById("writing-list");
    if (!list || typeof WRITINGS === "undefined") return;
    list.innerHTML = WRITINGS.map(
      (w) => `
      <a class="writing-item" href="${w.url}" target="_blank" rel="noopener">
        <span class="writing-date mono">${w.date}</span>
        <span class="writing-body">
          <span class="writing-title">${w.title}</span>
          <span class="writing-summary">${w.summary}</span>
        </span>
        <span class="writing-arrow">→</span>
      </a>`
    ).join("");
    observeReveal(list.querySelectorAll(".writing-item"), 60);
  }

  // ---------- 모달 ----------
  const backdrop = document.getElementById("modal-backdrop");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  function coverMarkup(p) {
    if (p.cover.type === "iframe") {
      return `
        <div class="browser-frame">
          <div class="browser-bar">
            <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
            <span class="browser-url mono">${p.cover.src.replace(/^https?:\/\//, "")}</span>
          </div>
          <iframe class="browser-iframe" src="${p.cover.src}" title="${p.name} 라이브 데모" loading="lazy"></iframe>
        </div>`;
    }
    if (p.cover.type === "video") {
      return `
        <div class="browser-frame">
          <video class="browser-iframe" src="${p.cover.src}" controls playsinline></video>
        </div>`;
    }
    return `<div class="browser-frame"><img class="browser-iframe" src="${p.cover.src}" alt="${p.name} 스크린샷" style="object-fit:cover;"></div>`;
  }

  function openModal(p) {
    modalBody.innerHTML = `
      <p class="section-eyebrow">${p.year} · ${p.tags.join(" · ")}</p>
      <h2 class="section-title" id="modal-title">${esc(nm(p))}</h2>
      ${window.t("modal.koOnly") ? `<p class="modal-note">${window.t("modal.koOnly")}</p>` : ""}
      <p class="section-lede">${p.description}</p>

      ${coverMarkup(p)}

      <div class="stat-grid" style="margin-bottom:40px; --stat-cols:${p.stats.length};">
        ${p.stats
          .map(
            (s) => `
          <div class="stat-tile ${s.isNull ? "stat-null" : ""}">
            <div class="stat-n mono">${s.n}</div>
            <div class="stat-l">${s.l}</div>
          </div>`
          )
          .join("")}
      </div>

      <h3 class="section-title" style="font-size:1.2rem;">${window.t("modal.howBuilt")}</h3>
      <div class="pivot-grid" style="margin-bottom:40px;">
        ${p.pivots
          .map(
            (pv) => `
          <div class="pivot-card">
            <div class="pivot-n mono">${pv.n}</div>
            <h3>${pv.title}</h3>
            <p>${pv.body}</p>
          </div>`
          )
          .join("")}
      </div>

      <div class="cta-row" style="justify-content:flex-start;">
        ${p.links.live ? `<a class="btn btn-primary" href="${p.links.live}" target="_blank" rel="noopener">${window.t("modal.live")}</a>` : ""}
        ${p.links.github ? `<a class="btn btn-ghost btn-ghost" href="${p.links.github}" target="_blank" rel="noopener">GitHub</a>` : ""}
        ${p.links.caseStudy ? `<a class="btn btn-ghost btn-ghost" href="${p.links.caseStudy}" target="_blank" rel="noopener">${window.t("modal.caseStudy")}</a>` : ""}
      </div>
    `;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    modalBody.innerHTML = "";
  }
  modalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  // ---------- 첫 방문 환영 모달 ----------
  const LS_INTRO_SEEN = "kuu_intro_seen";
  const introBackdrop = document.getElementById("intro-backdrop");
  const introClose = document.getElementById("intro-close");
  const introCta = document.getElementById("intro-cta");
  const introReplayBtn = document.getElementById("btn-intro-replay");

  function openIntro() {
    introBackdrop.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeIntro() {
    introBackdrop.hidden = true;
    document.body.style.overflow = "";
    localStorage.setItem(LS_INTRO_SEEN, "1");
  }
  introClose.addEventListener("click", closeIntro);
  introCta.addEventListener("click", closeIntro);
  introBackdrop.addEventListener("click", (e) => {
    if (e.target === introBackdrop) closeIntro();
  });
  introReplayBtn.addEventListener("click", openIntro);

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!introBackdrop.hidden) closeIntro();
    else if (!backdrop.hidden) closeModal();
  });

  renderAll();
  // 소개 문단은 스크롤로 글자가 서서히 진해지는 효과를 쓰지 않는다. 처음 보는 사람이 바로 읽을 수 있어야 해서.
  window.addEventListener("langchange", renderAll);

  playHeroEntrance();
  enableHeroTilt();

  observeReveal(document.querySelectorAll(".about-section .section-eyebrow, .about-section .now-badge"), 0);
  observeReveal(document.querySelectorAll(".about-section .section-title"), 0, "title");
  observeReveal(
    document.querySelectorAll(".gallery-section .section-eyebrow, .gallery-section .filter-row"),
    0
  );
  observeReveal(document.querySelectorAll(".gallery-section .section-title"), 0, "title");
  observeReveal(document.querySelectorAll(".skills-section .section-eyebrow"), 0);
  observeReveal(document.querySelectorAll(".skills-section .section-title"), 0, "title");
  observeReveal(document.querySelectorAll(".skill-chip"), 40);
  observeReveal(document.querySelectorAll(".writing-section .section-eyebrow"), 0);
  observeReveal(document.querySelectorAll(".writing-section .section-title"), 0, "title");
  observeReveal(document.querySelectorAll(".site-footer"), 0);

  const metaYearEl = document.getElementById("meta-year");
  if (metaYearEl) metaYearEl.textContent = new Date().getFullYear();

  // ---------- 방문자 카운터 ----------
  let visitCount = null;
  function renderVisitCount() {
    const el = document.getElementById("visit-count");
    if (!el || visitCount == null) return;
    el.textContent = window.t("footer.visits", visitCount);
  }
  (async function trackVisit() {
    const el = document.getElementById("visit-count");
    if (!el) return;
    try {
      const alreadyCounted = sessionStorage.getItem("kuu_visit_counted");
      const res = await fetch("/api/visits", { method: alreadyCounted ? "GET" : "POST" });
      const data = await res.json();
      sessionStorage.setItem("kuu_visit_counted", "1");
      visitCount = data.count;
      renderVisitCount();
    } catch (e) {
      el.textContent = "";
    }
  })();
  window.addEventListener("langchange", renderVisitCount);

  // ---------- 링크 복사 ----------
  const copyBtn = document.getElementById("btn-copy-link");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const original = copyBtn.textContent;
        copyBtn.textContent = window.t("footer.copied");
        setTimeout(() => (copyBtn.textContent = original), 1500);
      } catch (e) {
        copyBtn.textContent = window.t("footer.copyFailed");
      }
    });
  }
})();
