const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const bizStart = html.indexOf('class="businesses-section"');
const bizEnd = html.indexOf('<!-- Businesses Section End -->');
const bizSnippet = html.substring(bizStart, bizEnd);

console.log('=== VERIFYING CLEAN 4-DIVISION SHOWCASE ===');

// Check cards
const cards = [...bizSnippet.matchAll(/class="biz-clean-card ([^"]+)"/g)].map(m => m[1]);
console.log('Cards detected:', cards);

// Check images
const imgs = [...bizSnippet.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
console.log('Images detected:');
let allExist = true;
imgs.forEach(src => {
  const exists = fs.existsSync(src);
  const size = exists ? (fs.statSync(src).size/1024).toFixed(1) + ' KB' : '0 KB';
  console.log(`  ${exists ? '✅' : '❌'} ${src} (${size})`);
  if (!exists) allExist = false;
});

// Check links
const links = [...bizSnippet.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
console.log('\nLinks detected:');
links.forEach(href => console.log('  🔗 ' + href));

// Check CSS
const css = fs.readFileSync('css/style.css', 'utf8');
const hasCardsRow = css.includes('.biz-cards-row');
const hasCleanCard = css.includes('.biz-clean-card');
console.log('\nCSS Rules:');
console.log(`  ${hasCardsRow ? '✅' : '❌'} .biz-cards-row`);
console.log(`  ${hasCleanCard ? '✅' : '❌'} .biz-clean-card`);

if (cards.length === 4 && allExist && hasCardsRow && hasCleanCard) {
  console.log('\n🎉 ALL 4 DIVISION CARDS VERIFIED PERFECTLY!');
} else {
  console.log('\n❌ VERIFICATION FAILED');
  process.exit(1);
}

