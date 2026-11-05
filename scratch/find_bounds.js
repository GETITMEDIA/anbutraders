const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const bizStart = html.indexOf('<section class="businesses-section"');
const bizEnd = html.indexOf('<!-- Businesses Section End -->') + '<!-- Businesses Section End -->'.length;

console.log('bizStart:', bizStart, 'bizEnd:', bizEnd);

const css = fs.readFileSync('css/style.css', 'utf8');
const cssStart = css.indexOf('.businesses-section');
const cssEnd = css.indexOf('/* ── Products Section (2026 Premium Architectural Redesign) ── */');

console.log('cssStart:', cssStart, 'cssEnd:', cssEnd);

