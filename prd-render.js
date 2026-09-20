(function () {
  "use strict";
  const lang = () => (window.getLang ? window.getLang() : "ko");
  const L = (v) => (v && typeof v === "object" ? (v[lang()] ?? v.ko ?? "") : v ?? "");
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const LEGEND_LABEL = {};
  PRD.legend.forEach((l) => (LEGEND_LABEL[l.tag] = l.text));
  const tagHtml = (tag) => (tag ? `<span class="prd-tag prd-tag-${tag}">${esc(L(LEGEND_LABEL[tag]))}</span>` : "");

  function renderBlock(b) {
    if (b.type === "p") {
      return `<p class="prd-p">${tagHtml(b.tag)}${esc(L(b.text))}</p>`;
    }
    if (b.type === "list") {
      return `<ul class="prd-list">${b.items
        .map((it) => `<li>${tagHtml(it.tag)}<span>${esc(L(it.text))}</span></li>`)
        .join("")}</ul>`;
    }
    if (b.type === "table") {
      const head = b.head.map((h) => `<th>${esc(L(h))}</th>`).join("");
      const rows = b.rows
        .map(
          (r) =>
            `<tr>${r
              .map((c, i) => {
                const text = esc(L(c));
                if (i === r.length - 1 && c.tag) return `<td>${tagHtml(c.tag)}<span class="prd-cell-note">${text}</span></td>`;
                return `<td>${text}</td>`;
              })
              .join("")}</tr>`
        )
        .join("");
      return `<div class="prd-table-wrap"><table class="prd-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    return "";
  }

  function render() {
    document.getElementById("prd-title").textContent = L(PRD.title);
    document.title = L(PRD.title) + " · 개발자KUU";
    document.getElementById("prd-note").textContent = L(PRD.note);
    document.getElementById("prd-legend").innerHTML = PRD.legend
      .map((l) => `<li>${tagHtml(l.tag)}</li>`)
      .join("");
    document.getElementById("prd-body").innerHTML = PRD.sections
      .map(
        (s, i) => `
      <section class="prd-section">
        <h2><span class="prd-n mono">${String(i + 1).padStart(2, "0")}</span>${esc(L(s.title))}</h2>
        ${s.blocks.map(renderBlock).join("")}
      </section>`
      )
      .join("");
  }

  render();
  window.addEventListener("langchange", render);
})();
