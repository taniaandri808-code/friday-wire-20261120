import { TEMPLATE_CSS } from './gen.mjs';
import { CSSX } from './cssx.mjs';

export default function buildHTML(D, ICONS, ART, dottedMap) {
  const e = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const heroes = D.heroes.map((h, i) =>
    `<div class="hero"><div class="art">${ART[i]}</div><div class="htag">${e(h.tag)}</div>` +
    `<div class="hhead">${e(h.headline)}</div><div class="hbody">${e(h.body)}</div>` +
    `<div class="claim">${e(h.claim)}</div></div>`).join('');
  const cards = D.cards.map(c =>
    `<div class="card"><div class="icon">${ICONS[c.icon]}</div><div>` +
    `<div class="chead">${e(c.headline)}</div><div class="cbody">${e(c.body)}</div>` +
    `<div class="claim">${e(c.claim)}</div></div></div>`).join('');
  const also = D.also_on.map((a, i) =>
    `<div class="aitem"><span class="anum">${i + 1}</span><span><b>${e(a[0])}</b> — ${e(a[1])}</span></div>`).join('');
  const cols = ['#1d2d50', '#0f6e6e', '#c0392b', '#b06a1f', '#6a4c93', '#2f6b3a'];
  const legend = D.map.legend.map((l, i) =>
    `<div><span class="lsw" style="background:${cols[i]}"></span>${e(l)}</div>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>${TEMPLATE_CSS}${CSSX}</style></head><body>` +
    `<div class="page"><div class="kick">${e(D.kicker)}</div>` +
    `<div class="masthead">THE WEDNESDAY WIRE</div><div class="statline">${e(D.stats)}</div>` +
    `<div class="rule"></div><div class="datebanner">${e(D.day)} ${e(D.date)}</div>` +
    `<div style="border-top:1px solid #5a5a5a"></div><div class="heroes">${heroes}</div>` +
    `<div class="sec">THE DAY IN SIX</div><div class="grid3">${cards}</div>` +
    `<div class="sec">ALSO ON WEDNESDAY 18 NOVEMBER</div><div class="also">${also}</div>` +
    `<div class="sec">WHERE IT HAPPENED</div>` +
    `<div class="maprow"><div style="flex:1.4">${dottedMap(D.map.pins)}</div>` +
    `<div class="legend" style="flex:1">${legend}</div></div>` +
    `<div class="dcbox"><div class="dch">DATE CHECK</div>${e(D.date_check)}</div>` +
    `<div class="footer">${e(D.footer)}<div class="srcs">${e(D.sources)}</div></div>` +
    `</div></body></html>`;
}
