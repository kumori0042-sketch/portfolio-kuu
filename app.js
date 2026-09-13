(function () {
  "use strict";

  // ---------- 프로젝트 갤러리 (PROJECTS 배열만 늘리면 자동 반영) ----------
  const grid = document.getElementById("project-grid");
  const filterRow = document.getElementById("filter-row");
  const skillGrid = document.getElementById("skill-grid");

  const ALL_TAG = "__all__";

  function allTags() {
    const set = new Set();
    PROJECTS.forEach((p) => p.tags.forEach((tag) => set.add(tag)));
    return [ALL_TAG, ...set];
  }

  function renderFilters() {
    const activeTag = filterRow.querySelector(".filter-chip.active")?.dataset.tag || ALL_TAG;
    filterRow.innerHTML = "";
    allTags().forEach((tag) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "filter-chip" + (tag === activeTag ? " active" : "");
      chip.textContent = tag === ALL_TAG ? window.t("filter.all") : tag;
      chip.dataset.tag = tag;
      chip.addEventListener("click", () => {
        filterRow.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderCards(tag);
      });
      filterRow.appendChild(chip);
    });
    renderCards(activeTag);
  }

  function renderCards(filterTag) {
    grid.innerHTML = "";
    const list = !filterTag || filterTag === ALL_TAG ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filterTag));
    list.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <div class="card-cover">
          ${p.cover.type === "iframe" ? '<span class="live-badge"><span class="live-dot"></span>LIVE</span>' : ""}
          <span class="card-cover-name">${p.name}</span>
        </div>
        <div class="card-body">
          <div class="card-year mono">${p.year}</div>
          <p class="card-tagline">${p.tagline}</p>
          <div class="card-tags">${p.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}</div>
        </div>
      `;
      card.addEventListener("click", () => openModal(p));
      enableCardTilt(card);
      grid.appendChild(card);
    });
    observeReveal(grid.querySelectorAll(".project-card"), 80);
  }

  function renderSkills() {
    const set = new Set();
    PROJECTS.forEach((p) => p.skills.forEach((s) => set.add(s)));
    skillGrid.innerHTML = [...set].map((s) => `<div class="skill-chip">${s}</div>`).join("");
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
    const titleEls = document.querySelectorAll(".hero-copy .eyebrow, .hero-copy .wordmark");
    const fadeEls = document.querySelectorAll(".hero-copy .hero-sub, .hero-copy .cta-row");
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

  let ledeObserver = null;
  function enableWordReveal(el) {
    if (!el || reduceMotion || !("IntersectionObserver" in window)) return;
    if (ledeObserver) ledeObserver.disconnect();
    wrapWordsPreservingTags(el, window.getLang ? window.getLang() : "ko");
    const words = el.querySelectorAll(".sw");
    if (!words.length) return;
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    ledeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progress = Math.min(1, entry.intersectionRatio / 0.8);
          const revealCount = Math.round(progress * words.length);
          words.forEach((w, i) => w.classList.toggle("sw-active", i < revealCount));
        });
      },
      { threshold: thresholds }
    );
    ledeObserver.observe(el);
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
      <h2 class="section-title" id="modal-title">${p.name}</h2>
      <p class="section-lede">${p.description}</p>

      ${coverMarkup(p)}

      <div class="stat-grid" style="margin-bottom:40px;">
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

      <h3 class="section-title" style="font-size:1.2rem;">어떻게 만들었나</h3>
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
        ${p.links.live ? `<a class="btn btn-primary" href="${p.links.live}" target="_blank" rel="noopener">라이브 데모 →</a>` : ""}
        ${p.links.github ? `<a class="btn btn-ghost btn-ghost" href="${p.links.github}" target="_blank" rel="noopener">GitHub</a>` : ""}
        ${p.links.caseStudy ? `<a class="btn btn-ghost btn-ghost" href="${p.links.caseStudy}" target="_blank" rel="noopener">케이스 스터디</a>` : ""}
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
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });

  renderFilters();
  renderSkills();

  const ledeEl = document.querySelector(".gallery-section .section-lede");
  enableWordReveal(ledeEl);

  window.addEventListener("langchange", () => {
    renderFilters();
    enableWordReveal(ledeEl);
  });

  playHeroEntrance();
  enableHeroTilt();

  observeReveal(
    document.querySelectorAll(".gallery-section .section-eyebrow, .gallery-section .filter-row"),
    0
  );
  observeReveal(document.querySelectorAll(".gallery-section .section-title"), 0, "title");
  observeReveal(document.querySelectorAll(".skills-section .section-eyebrow"), 0);
  observeReveal(document.querySelectorAll(".skills-section .section-title"), 0, "title");
  observeReveal(document.querySelectorAll(".skill-chip"), 40);
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
