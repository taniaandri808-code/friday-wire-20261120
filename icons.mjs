const NAVY="#1d2d50",RED="#c0392b",GRAY="#5a5a5a";
const svg=b=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">${b}</svg>`;
export default {
  virus: svg(`<circle cx="40" cy="40" r="14" fill="${NAVY}"/><g stroke="${NAVY}" stroke-width="4">${[...Array(8)].map((_,i)=>{const a=i*Math.PI/4;return `<line x1="${40+14*Math.cos(a)}" y1="${40+14*Math.sin(a)}" x2="${40+20*Math.cos(a)}" y2="${40+20*Math.sin(a)}"/>`;}).join('')}</g><g fill="${RED}">${[...Array(8)].map((_,i)=>{const a=i*Math.PI/4+Math.PI/8;return `<circle cx="${40+22*Math.cos(a)}" cy="${40+22*Math.sin(a)}" r="3"/>`;}).join('')}</g>`),
  chip: svg(`<rect x="20" y="20" width="40" height="40" rx="4" fill="${NAVY}"/><rect x="30" y="30" width="20" height="20" fill="${GRAY}"/><g stroke="${GRAY}" stroke-width="3">${[26,40,54].flatMap(v=>[`<line x1="${v}" y1="20" x2="${v}" y2="12"/>`,`<line x1="${v}" y1="60" x2="${v}" y2="68"/>`]).join('')}</g>`),
  ballot: svg(`<rect x="20" y="20" width="40" height="50" rx="4" fill="${NAVY}"/><line x1="25" y1="35" x2="55" y2="35" stroke="${GRAY}" stroke-width="3"/><line x1="25" y1="45" x2="55" y2="45" stroke="${GRAY}" stroke-width="3"/><line x1="25" y1="55" x2="55" y2="55" stroke="${GRAY}" stroke-width="3"/>`),
  gamepad: svg(`<circle cx="40" cy="40" r="28" fill="${NAVY}"/><rect x="20" y="30" width="40" height="20" rx="10" fill="${GRAY}"/><circle cx="30" cy="40" r="5" fill="${RED}"/><circle cx="50" cy="40" r="5" fill="${RED}"/>`),
  cloud: svg(`<path d="M20 50c0 6 4 10 10 10 6 0 10-4 10-10 0-4-3-8-7-9v-6c0-4 4-8 8-8 6 0 10 4 10 10" fill="${NAVY}"/><path d="M20 50c0-6 4-10 10-10 6 0 10 4 10 10" fill="${GRAY}"/>`),
  gavel: svg(`<rect x="30" y="20" width="20" height="40" rx="5" fill="${NAVY}"/><polygon points="35,20 45,20 40,10" fill="${RED}"/>`)
};
