const fs = require('fs');

const files = [
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

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n================================`);
  console.log(`AUDIT: ${file}`);
  console.log(`================================`);

  // 1. Check sections order and their spacing classes
  const sectionRegex = /<(section|div)[^>]*class=["']([^"']*(?:container|brands-section|facts-simple|anbu-page-hero|py-|my-|pt-|pb-|mt-|mb-)[^"']*)["'][^>]*>/gi;
  let match;
  const sections = [];
  while ((match = sectionRegex.exec(html)) !== null) {
    const tag = match[1];
    const cls = match[2];
    // filter to top-level or significant containers
    if (cls.includes('container') || cls.includes('brands-section') || cls.includes('anbu-page-hero') || cls.includes('py-5') || cls.includes('my-5') || cls.includes('my-4')) {
      sections.push({ line: html.substring(0, match.index).split('\n').length, tag, cls });
    }
  }

  sections.forEach((s, i) => {
    console.log(`  [L${s.line}] <${s.tag} class="${s.cls}">`);
  });

  // 2. Check for missing margins on headings inside cards
  const cardHeadings = [...html.matchAll(/<(?:div)[^>]*class=["'][^"']*(?:card|body|item)[^"']*["'][^>]*>[\s\S]*?<h([1-6])[^>]*class=["']([^"']*)["']/gi)];
  const headingsMissingMargin = [];
  cardHeadings.forEach(m => {
    const hCls = m[2];
    if (!hCls.includes('mb-') && !hCls.includes('my-')) {
      headingsMissingMargin.push(m[0].substring(0, 80).replace(/\s+/g, ' '));
    }
  });
  if (headingsMissingMargin.length > 0) {
    console.log(`  Found ${headingsMissingMargin.length} card headings with no explicit margin:`);
    headingsMissingMargin.slice(0, 5).forEach(h => console.log(`    - ${h}`));
  }
});

