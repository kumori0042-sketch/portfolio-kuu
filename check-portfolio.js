// 배포 전 점검: node check-portfolio.js
// 카드의 역량 태그(signals)마다 EVIDENCE에 근거가 있는지, 다국어 필드가 빠지지 않았는지, 매트릭스가 실제 프로젝트를 가리키는지 확인한다.
const fs = require("fs");
const load = (f) => fs.readFileSync(f, "utf8");
const { PROJECTS, EVIDENCE, CONTACT } = new Function(load("projects.js") + "; return { PROJECTS, EVIDENCE, CONTACT };")();
const I18N_SRC = load("i18n.js").split("\n(function () {")[0] + "\n; return I18N;";
const I18N = new Function(I18N_SRC)();

const errors = [];
const ids = new Set(PROJECTS.map((p) => p.id));
const langs = ["ko", "ja", "en"];

for (const p of PROJECTS) {
  for (const f of ["oneLiner", "proof", "role", "nameL"]) {
    for (const l of langs) if (!p[f] || !p[f][l]) errors.push(`${p.id}.${f}.${l} 누락`);
  }
  if (p.statusNote) for (const l of langs) if (!p.statusNote[l]) errors.push(`${p.id}.statusNote.${l} 누락`);
  for (const sig of p.signals || []) {
    const backed = (EVIDENCE[sig] || []).some((e) => e.project === p.id);
    if (!backed) errors.push(`${p.id}의 역량 태그 "${sig}"에 EVIDENCE 근거가 없음`);
  }
}
for (const [sig, rows] of Object.entries(EVIDENCE)) {
  for (const l of langs) if (!I18N[l]["sig." + sig]) errors.push(`i18n ${l} sig.${sig} 누락`);
  for (const r of rows) {
    if (!ids.has(r.project)) errors.push(`EVIDENCE.${sig}가 없는 프로젝트 ${r.project}를 가리킴`);
    for (const l of langs) if (!r.text || !r.text[l]) errors.push(`EVIDENCE.${sig}/${r.project}.${l} 누락`);
  }
}
const koKeys = Object.keys(I18N.ko);
for (const l of ["ja", "en"]) for (const k of koKeys) if (!(k in I18N[l])) errors.push(`i18n ${l}.${k} 누락`);

console.log(`프로젝트 ${PROJECTS.length}개, 문서화한 의사결정 ${PROJECTS.reduce((a, p) => a + p.pivots.length, 0)}개, 라이브 ${PROJECTS.filter((p) => p.links.live).length}개`);
console.log(`연락 수단: ${Object.entries(CONTACT).filter(([, v]) => v).map(([k]) => k).join(", ") || "(이메일·LinkedIn·이력서 미설정 — Q&A와 GitHub만 표시)"}`);
if (errors.length) {
  console.log("\n실패:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("모든 점검 통과");
