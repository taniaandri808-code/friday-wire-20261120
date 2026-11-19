import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import buildHTML from './page.mjs';
import ICONS from './icons.mjs';
import HERO_ART from './heroes.mjs';
import HERO_ART2 from './heroes2.mjs';
import dottedMap from './mapdots.mjs';

const dir = path.dirname(fileURLToPath(import.meta.url));
const D = JSON.parse(fs.readFileSync(path.join(dir, 'poster_data.json'), 'utf8'));
const ART = [...HERO_ART, ...HERO_ART2];
const html = buildHTML(D, ICONS, ART, dottedMap);
fs.writeFileSync(path.join(dir, 'news.html'), html);
console.log('news.html written', html.length);
