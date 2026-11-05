const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('class="why-choose-section"');
const end = html.indexOf('<!-- Why Choose Us End -->');
const snippet = html.substring(start, end);

console.log('=== VERIFYING MODERNIZED WHY CHOOSE US SECTION ===');

// Check image
const imgMatch = snippet.match(/src="([^"]+)"/);
console.log('Image in section:', imgMatch ? imgMatch[1] : 'NONE');
if (imgMatch && fs.existsSync(imgMatch[1])) {
  console.log(`  ✅ Image exists (${(fs.statSync(imgMatch[1]).size/1024).toFixed(1)} KB)`);
} else {
  console.log('  ❌ Image missing!');
}

// Check float badges
const badges = [...snippet.matchAll(/class="why-float-badge ([^"]+)"/g)].map(m => m[1]);
console.log('Floating Glass Badges found:', badges);

// Check feature cards
const cards = [...snippet.matchAll(/class="why-card-title">([^<]+)<\/h4>/g)].map(m => m[1]);
console.log('Feature Bento Cards found:', cards);

// Check links
const links = [...snippet.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
console.log('Action Links found:', links);

// Check CSS
const css = fs.readFileSync('css/style.css', 'utf8');
const keyRules = [
  '.why-choose-section',
  '.why-image-frame',
  '.why-float-badge',
  '@keyframes whyFloatA',
  '.why-features-grid',
  '.why-card',
  '.why-action-strip'
];

console.log('\nCSS Verification:');
let allCss = true;
keyRules.forEach(r => {
  const has = css.includes(r);
  console.log(`  ${has ? '✅' : '❌'} ${r}`);
  if (!has) allCss = false;
});

if (badges.length === 2 && cards.length === 4 && allCss) {
  console.log('\n🎉 WHY CHOOSE US SECTION IS 100% VERIFIED & READY!');
} else {
  console.log('\n❌ VERIFICATION FAILED');
  process.exit(1);
}

