const fs = require('fs');

const pages = [
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
  const html = fs.readFileSync(p, 'utf8');
  const footerIdx = html.indexOf('<footer');
  const jsIdx = html.indexOf('<!-- JavaScript');
  console.log(`\n=== ${p} ===`);
  if (footerIdx !== -1 && jsIdx !== -1) {
    console.log(`Footer at char ${footerIdx}, JS at char ${jsIdx}`);
    const segment = html.substring(footerIdx, jsIdx);
    console.log(`Segment length: ${segment.length}`);
    console.log(`First 80 chars: ${segment.substring(0, 80).replace(/\s+/g, ' ')}`);
    console.log(`Last 80 chars: ${segment.substring(segment.length - 80).replace(/\s+/g, ' ')}`);
  } else {
    console.log(`WARNING: footer or JS not found in ${p}`);
  }
});

