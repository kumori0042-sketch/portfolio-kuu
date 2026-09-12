// 모든 페이지에서 공유하는 테마 토글. localStorage에 저장하고 data-theme 속성으로 오버라이드한다.
(function () {
  "use strict";
  const LS_THEME = "kuu_theme";

  function applyTheme() {
    const saved = localStorage.getItem(LS_THEME) || "system";
    if (saved === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", saved);
  }
  applyTheme();

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = localStorage.getItem(LS_THEME) || "system";
      const order = { system: "light", light: "dark", dark: "system" };
      localStorage.setItem(LS_THEME, order[current]);
      applyTheme();
    });
  });
})();
