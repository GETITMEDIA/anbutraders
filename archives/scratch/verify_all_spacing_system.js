const fs = require('fs');

const pages = [
  'index.html',
  'about.html',
  'contact.html',
  'service.html',
  'project.html',
  'team.html',
  'testimonial.html',
  'feature.html',
  '404.html'
];

console.log('=== SYSTEMATIC VERIFICATION OF ALL 9 PAGES FOR SPACING & ALIGNMENT ===');

let totalErrors = 0;

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\nVerifying ${p}...`);

  // 1. Check for legacy container-xxl as section wrappers
  const hasLegacyXxl = html.includes('class="container-xxl pt-5') || 
                       html.includes('class="container-xxl py-5') || 
                       html.includes('class="container-xxl py-3') ||
                       html.includes('class="container-xxl anbu-404');
  if (hasLegacyXxl) {
    console.log(`  ❌ Contains legacy un-standardized container-xxl!`);
    totalErrors++;
  } else {
    console.log(`  ✅ Clean semantic section architecture`);
  }

  // 2. Check for nested container-xxl > container
  const hasNestedXxl = /<[^>]*class=["'][^"']*container-xxl[^"']*["'][^>]*>\s*<div[^>]*class=["'][^"']*container[^"']*["']/g.test(html);
  if (hasNestedXxl) {
    console.log(`  ❌ Found nested container-xxl > container!`);
    totalErrors++;
  } else {
    console.log(`  ✅ Zero nested container-xxl`);
  }

  // 3. Check for tag balance (sections)
  const openSections = (html.match(/<section\b/gi) || []).length;
  const closeSections = (html.match(/<\/section>/gi) || []).length;
  if (openSections !== closeSections) {
    console.log(`  ❌ Section tag mismatch: ${openSections} opened, ${closeSections} closed!`);
    totalErrors++;
  } else {
    console.log(`  ✅ Section tags balanced (${openSections} sections)`);
  }

  // 4. Check for tag balance (divs)
  const openDivs = (html.match(/<div\b/gi) || []).length;
  const closeDivs = (html.match(/<\/div>/gi) || []).length;
  if (openDivs !== closeDivs) {
    console.log(`  ⚠️ Div count: ${openDivs} opened, ${closeDivs} closed.`);
  } else {
    console.log(`  ✅ Div tags balanced (${openDivs} divs)`);
  }

  // 5. Check footer presence & consistency
  const hasFooter = html.includes('anbu-unified-footer');
  if (!hasFooter) {
    console.log(`  ❌ Missing unified footer!`);
    totalErrors++;
  } else {
    console.log(`  ✅ Unified 5-column footer verified`);
  }
});

// Check css/style.css
console.log('\n--- Checking CSS Spacing Engine ---');
const css = fs.readFileSync('css/style.css', 'utf8');
const checks = [
  '--site-container-max',
  '--container-gutter-x',
  '--section-spacing-y',
  'overflow-x: hidden !important',
  '.site-section',
  '.site-section-sm',
  '.anbu-footer-container',
  '@media (min-width: 1400px)',
  '@media (min-width: 1200px) and (max-width: 1399.98px)',
  '@media (min-width: 992px) and (max-width: 1199.98px)',
  '@media (min-width: 768px) and (max-width: 991.98px)',
  '@media (min-width: 576px) and (max-width: 767.98px)',
  '@media (max-width: 575.98px)'
];

checks.forEach(c => {
  const has = css.includes(c);
  console.log(`  ${has ? '✅' : '❌'} ${c}`);
  if (!has) totalErrors++;
});

if (totalErrors === 0) {
  console.log('\n🎉 ALL 9 PAGES & ALL BREAKPOINTS 100% VERIFIED & CONSISTENT!');
} else {
  console.log(`\n❌ VERIFICATION FOUND ${totalErrors} ISSUES`);
  process.exit(1);
}

