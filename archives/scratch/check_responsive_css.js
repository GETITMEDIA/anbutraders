const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
const css = fs.readFileSync(cssPath, 'utf8');

console.log('--- CHECKING RESPONSIVE BREAKPOINTS IN CSS ---');
const mqRegex = /@media\s*\(([^)]+)\)\s*\{/gi;
let match;
const mqs = new Set();
while ((match = mqRegex.exec(css)) !== null) {
  mqs.add(match[1].trim());
}
console.log('Found media queries:', Array.from(mqs));

console.log('\n--- CHECKING OVERFLOW-X & CONTAINER WIDTHS ---');
console.log('Has overflow-x hidden on html/body:', css.includes('overflow-x: hidden'));
console.log('Has hero-bento-grid responsive rules:', css.includes('.hero-bento-grid'));
console.log('Has hero-bento-subgroup mobile rule:', css.includes('.hero-bento-subgroup'));
console.log('Has how-we-deliver-section rules:', css.includes('.how-we-deliver-section'));
console.log('Has cta-gradient-box rules:', css.includes('.cta-gradient-box'));

