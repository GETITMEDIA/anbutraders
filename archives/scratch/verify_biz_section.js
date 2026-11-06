const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');

console.log('=== VERIFYING NEW BENTO BUSINESSES SECTION ===');

// Check filter buttons
const filters = [...html.matchAll(/data-filter="([^"]+)"/g)].map(m => m[1]);
console.log('Filters found:', filters);

// Check bento cards
const cards = [...html.matchAll(/class="biz-bento-card[^"]*"\s+data-category="([^"]+)"/g)].map(m => m[1]);
console.log('Bento Cards found:', cards);

// Check images in biz section
const bizStart = html.indexOf('class="businesses-section"');
const bizEnd = html.indexOf('<!-- Businesses Section End -->');
const bizHtml = html.substring(bizStart, bizEnd);

const imgMatches = [...bizHtml.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
console.log('\nImages in Businesses Section:');
let allExist = true;
imgMatches.forEach(src => {
  const exists = fs.existsSync(src);
  console.log(`  ${exists ? '✅' : '❌'} ${src}`);
  if (!exists) allExist = false;
});

// Check CSS rules
const css = fs.readFileSync('css/style.css', 'utf8');
const keyRules = [
  '.businesses-section',
  '.biz-eyebrow-pill',
  '.biz-pulsing-dot',
  '.biz-main-title',
  '.biz-heading-accent',
  '.biz-filter-nav',
  '.biz-filter-btn',
  '.biz-bento-grid',
  '.biz-bento-card',
  '.biz-card-visual',
  '.biz-card-img',
  '@keyframes bentoFadeIn',
  '@keyframes bizPulse'
];

console.log('\nCSS Animation & Layout Rules:');
let allCss = true;
keyRules.forEach(rule => {
  const has = css.includes(rule);
  console.log(`  ${has ? '✅' : '❌'} ${rule}`);
  if (!has) allCss = false;
});

// Check JS
const js = fs.readFileSync('js/anbu-interactions.js', 'utf8');
const hasJsFilter = js.includes('initBusinessesBento') && js.includes('filtered-out') && js.includes('perspective');
console.log(`\nJS Bento & Tilt Engine: ${hasJsFilter ? '✅ OK' : '❌ MISSING'}`);

if (allExist && allCss && hasJsFilter) {
  console.log('\n🎉 BENTO BUSINESSES SECTION IS 100% VERIFIED & READY!');
} else {
  console.log('\n❌ VERIFICATION FAILED');
  process.exit(1);
}
