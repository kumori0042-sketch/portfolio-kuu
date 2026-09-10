(function () {
  "use strict";

  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, dpr;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  const orbs = [
    { x: 0.2, y: 0.3, r: 0.38, color: "58,130,246", vx: 0.00010, vy: 0.00007, t: 0 },
    { x: 0.78, y: 0.65, r: 0.42, color: "155,107,255", vx: -0.00008, vy: 0.00009, t: 2 },
    { x: 0.55, y: 0.15, r: 0.28, color: "255,122,156", vx: 0.00006, vy: -0.00006, t: 4 }
  ];

  function drawStatic() {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#0B0D12");
    g.addColorStop(1, "#0B0D12");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    orbs.forEach((o) => paintOrb(o, o.x, o.y));
  }

  function paintOrb(o, nx, ny) {
    const cx = nx * w;
    const cy = ny * h;
    const radius = o.r * Math.max(w, h);
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    grad.addColorStop(0, `rgba(${o.color},0.35)`);
    grad.addColorStop(1, `rgba(${o.color},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  if (reduceMotion) {
    drawStatic();
    return;
  }

  let frame = 0;
  function loop() {
    frame++;
    ctx.fillStyle = "#0B0D12";
    ctx.fillRect(0, 0, w, h);
    orbs.forEach((o) => {
      const nx = o.x + Math.sin(frame * o.vx + o.t) * 0.06;
      const ny = o.y + Math.cos(frame * o.vy + o.t) * 0.06;
      paintOrb(o, nx, ny);
    });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
