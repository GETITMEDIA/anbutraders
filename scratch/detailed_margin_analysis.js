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

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n========================================`);
  console.log(`FILE: ${p}`);
  console.log(`========================================`);

  // 1. Check sections order and their spacing classes
  const lines = content.split('\n');
  let currentSection = null;
  let lineNum = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Look for top-level section/container tags
    if (line.includes('class="') && (
      line.includes('container-xxl') ||
      line.includes('anbu-page-hero') ||
      line.includes('brands-section') ||
      line.includes('facts-simple-wrapper') ||
      line.includes('container-fluid') && !line.includes('navbar') && !line.includes('top-bar')
    )) {
      console.log(`L${i+1}: ${line.trim()}`);
    }
  }
});

