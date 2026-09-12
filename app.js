(function () {
  "use strict";

  // ---------- 프로젝트 갤러리 (PROJECTS 배열만 늘리면 자동 반영) ----------
  const grid = document.getElementById("project-grid");
  const filterRow = document.getElementById("filter-row");
  const skillGrid = document.getElementById("skill-grid");

  function allTags() {
    const set = new Set();
    PROJECTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["전체", ...set];
  }

  function renderFilters() {
    filterRow.innerHTML = "";
    allTags().forEach((tag, i) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "filter-chip" + (i === 0 ? " active" : "");
      chip.textContent = tag;
      chip.dataset.tag = tag;
      chip.addEventListener("click", () => {
        filterRow.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderCards(tag);
      });
      filterRow.appendChild(chip);
    });
  }

  function renderCards(filterTag) {
    grid.innerHTML = "";
    const list = !filterTag || filterTag === "전체" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filterTag));
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
      grid.appendChild(card);
    });
  }

  function renderSkills() {
    const set = new Set();
    PROJECTS.forEach((p) => p.skills.forEach((s) => set.add(s)));
    skillGrid.innerHTML = [...set].map((s) => `<div class="skill-chip">${s}</div>`).join("");
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
  renderCards("전체");
  renderSkills();
})();
