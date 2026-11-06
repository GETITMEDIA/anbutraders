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

console.log('=== CHECKING FOR UNCONTAINED ROWS OR HORIZONTAL OVERFLOW RISKS ===\n');

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    // Check if row has no parent container or if negative margin classes are used
    if (l.includes('class="row') && !l.includes('container')) {
      // check previous 5 lines for container
      const prev5 = lines.slice(Math.max(0, i-5), i).join(' ');
      if (!prev5.includes('container')) {
        console.log(`${p} line ${i+1}: row potentially outside container -> ${l.trim()}`);
      }
    }
  });
});
console.log('Uncontained rows check completed.');

