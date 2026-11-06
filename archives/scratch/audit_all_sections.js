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

console.log('=== DETAILED SECTION & SPACING AUDIT ACROSS ALL 9 PAGES ===');

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\n========================================\nPAGE: ${p}\n========================================`);
  
  // Find all sections or section-like elements
  const lines = html.split('\n');
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('<section') || 
        (trimmed.startsWith('<div') && (trimmed.includes('container-xxl') || trimmed.includes('py-') || trimmed.includes('my-') || trimmed.includes('section')))) {
      console.log(`Line ${idx + 1}: ${trimmed.substring(0, 100)}`);
    }
  });
});

