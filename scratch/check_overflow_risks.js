const fs = require('fs');

const pages = ['index.html', 'about.html', 'contact.html', 'service.html', 'project.html', 'team.html', 'testimonial.html', 'feature.html', '404.html'];

console.log('=== CHECKING POTENTIAL OVERFLOW RISKS IN HTML FILES ===');

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\n--- ${p} ---`);
  
  // 1. Rows not inside containers
  const rowMatches = [...html.matchAll(/<div[^>]*class=["'][^"']*\brow\b[^"']*["']/g)];
  console.log(`  Total .row elements: ${rowMatches.length}`);
  
  // 2. Inline widths
  const inlineWidths = [...html.matchAll(/style=["'][^"']*width:\s*([^;]+)/g)].map(m => m[1].trim());
  const largeWidths = inlineWidths.filter(w => !w.includes('%') && !w.includes('auto') && parseInt(w) > 300);
  if (largeWidths.length > 0) {
    console.log(`  Large inline widths: ${largeWidths.join(', ')}`);
  }

  // 3. Elements with px-5 or pe-5 or ps-5 on mobile
  const p5Matches = [...html.matchAll(/class=["'][^"']*\b(p[xse]-[45])\b[^"']*["']/g)].map(m => m[1]);
  if (p5Matches.length > 0) {
    console.log(`  Large padding utilities (p-4/p-5): ${[...new Set(p5Matches)].join(', ')}`);
  }
});

