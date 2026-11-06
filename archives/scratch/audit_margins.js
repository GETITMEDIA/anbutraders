const fs = require('fs');

const pages = [
  'index.html',
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'feature.html',
  'team.html',
  'testimonial.html',
  '404.html'
];

console.log('=== AUDITING MARGINS & SPACING ===\n');

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\nPage: ${p}`);

  // Check section tags and outer divs without containers or without spacing
  const sectionMatches = [...content.matchAll(/<(?:section|div)[^>]+class=["']([^"']*(?:py-|my-|container|section)[^"']*)["']/gi)].map(m => m[1]);
  console.log(`  Found ${sectionMatches.length} sections/containers with spacing classes.`);

  // Check for negative margins or potential culprits
  const negativeMargins = [...content.matchAll(/class=["'][^"']*(?:-m[tbxlre]?-|margin-top:\s*-)[^"']*["']/gi)];
  if (negativeMargins.length > 0) {
    console.log(`  Warning: ${negativeMargins.length} negative margins found:`, negativeMargins.map(m => m[0]));
  }

  // Check headers spacing (e.g. mb-0 or missing bottom margin on headings)
  const headings = [...content.matchAll(/<h[1-6][^>]*class=["']([^"']*)["'][^>]*>/gi)].map(m => m[1]);
  const tightHeadings = headings.filter(h => !h.includes('mb-') && !h.includes('my-'));
  console.log(`  Headings count: ${headings.length}, without explicit margin bottom class: ${tightHeadings.length}`);
});

