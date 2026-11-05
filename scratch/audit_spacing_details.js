const fs = require('fs');

const pages = ['index.html', 'about.html', 'contact.html', 'service.html', 'project.html', 'team.html', 'testimonial.html', 'feature.html', '404.html'];

console.log('=== SYSTEMATIC AUDIT OF POTENTIAL SPACING/OVERFLOW ISSUES ===');

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\nChecking ${p}...`);

  // 1. Check fixed pixel widths in inline styles
  const fixedWidths = [...html.matchAll(/style="[^"]*width:\s*([0-9]{3,})px/g)].map(m => m[1]);
  if (fixedWidths.length > 0) {
    console.log(`  ⚠️ Fixed pixel widths found: ${fixedWidths.join(', ')} px`);
  }

  // 2. Check nested containers
  const nestedContainer = [...html.matchAll(/(class=["'][^"']*container(?:-xxl)?(?:-fluid)?[^"']*["'][\s\S]*?<div[^>]*class=["'][^"']*container(?:-xxl)?(?:-fluid)?[^"']*["'])/g)];
  // Better nested check: container-xxl with child container
  const regexNested = /<div[^>]*class=["'][^"']*container-xxl[^"']*["'][^>]*>\s*<div[^>]*class=["'][^"']*container[^"']*["']/g;
  const matchNested = [...html.matchAll(regexNested)];
  if (matchNested.length > 0) {
    console.log(`  ⚠️ Nested container-xxl > container: ${matchNested.length} instances`);
  }

  // 3. Check section tags with container class directly on section
  const sectionWithContainer = [...html.matchAll(/<section[^>]*class=["'][^"']*container[^"']*["']/g)];
  if (sectionWithContainer.length > 0) {
    console.log(`  ℹ️ <section class="container...": ${sectionWithContainer.length} instances`);
  }

  // 4. Check negative margins in inline styles
  const negMargins = [...html.matchAll(/style="[^"]*margin[^:]*:\s*-[^;"]+/g)].map(m => m[0]);
  if (negMargins.length > 0) {
    console.log(`  ⚠️ Negative inline margins:`, negMargins);
  }
});

