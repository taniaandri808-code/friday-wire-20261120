// statstrip.mjs
const NAVY = '#0b1f3a';
const CREAM = '#f7f1e1';
const COLORS = ['#0b1f3a', '#14345c', '#1f4e79', '#2e6da4', '#4b86c2', '#7dabc9'];

export function statStripHTML(D) {
  const stats = Array.isArray(D.stats) ? D.stats : [];
  const regions = Array.isArray(D.regions) ? D.regions : [];

  const style = `
  <style>
    .ss-wrap { display:flex; flex-direction:column; gap:10px; background:${CREAM}; padding:14px; border-radius:10px; }
    .ss-strip { display:flex; gap:10px; flex-wrap:wrap; }
    .ss-box { flex:1 1 0; min-width:90px; background:#fff; border-top:4px solid ${NAVY}; border-radius:6px; padding:10px 8px; text-align:center; box-shadow:0 1px 3px rgba(0,0,0,.12); }
    .ss-num { font-size:28px; font-weight:800; color:${NAVY}; line-height:1.1; }
    .ss-txt { font-size:12px; color:#334; margin-top:4px; }
    .ss-regions { display:flex; gap:8px; flex-wrap:wrap; }
    .ss-chip { display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:12px; color:#fff; font-size:11px; font-weight:700; letter-spacing:.4px; }
  </style>`;
  const boxes = stats.map(s =>
    `<div class="ss-box"><div class="ss-num">${s.n}</div><div class="ss-txt">${s.t}</div></div>`).join('');
  const chips = regions.map((r, i) =>
    `<span class="ss-chip" style="background:${COLORS[i % COLORS.length]}">${r[0]} ${r[1]}</span>`).join('');
  return style + '<div class="ss-wrap"><div class="ss-strip">' + boxes + '</div><div class="ss-regions">' + chips + '</div></div>';
}
