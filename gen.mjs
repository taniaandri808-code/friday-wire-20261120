import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const D = JSON.parse(
  fs.readFileSync(
    path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      'poster_data.json'
    ),
    'utf8'
  )
);

export const TEMPLATE_CSS = `
  * { box-sizing: border-box; margin:0; padding:0; }
  body { font-family: Georgia, "Times New Roman", serif; line-height:1.2; color:#1a1a1a; }
  .page { width:1650px; padding:34px; background:#f5efe0; }
  .kick { letter-spacing:10px; text-transform:uppercase; color:#1d2d50; font-size:10px; }
  .masthead { text-align:center; font-size:44px; color:#1d2d50; text-transform:uppercase; }
  .datebanner { text-align:center; font-size:66px; font-style:italic; }
  .statline { font-size:10px; text-transform:uppercase; }
  .rule { border-top:3px solid #1d2d50; margin:8px 0; }
  .heroes { display:flex; border-top:1px solid #5a5a5a; border-bottom:1px solid #5a5a5a; }
  .hero { flex:1; padding:0 16px; }
  .htag { font-size:10px; color:#1d2d50; text-transform:uppercase; }
  .hhead { font-size:25px; font-weight:bold; }
  .hbody { font-size:12.5px; }
  .claim { font-size:10px; font-style:italic; color:gray; }
  .sec { font-size:13px; color:#1d2d50; text-transform:uppercase; letter-spacing:1px; position:relative; margin:16px 0; }
  .sec::before, .sec::after { content:""; position:absolute; top:50%; width:40%; border-top:1px solid #1d2d50; }
  .sec::before { left:0; }
  .sec::after { right:0; }
  .grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
  .card { display:flex; align-items:flex-start; }
  .card > .icon { width:80px; margin-right:8px; }
  .chead { font-size:16px; font-weight:bold; }
  .cbody { font-size:11.5px; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
  .also { column-count:2; column-gap:16px; }
  .aitem { display:flex; align-items:center; margin-bottom:8px; }
  .anum { width:18px; height:18px; border-radius:50%; background:#1d2d50; color:#fff; display:flex; align-items:center; justify-content:center; font-size:10px; margin-right:6px; }
  .mapwrap { display:flex; }
  .dcbox { border-left:6px solid #1d2d50; padding:8px; font-size:12px; }
  .footer { font-size:11px; text-align:center; margin-top:16px; }
`;
