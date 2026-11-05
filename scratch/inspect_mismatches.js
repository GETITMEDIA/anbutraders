const fs = require('fs');

['contact.html', 'service.html', '404.html', 'testimonial.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);
  const lines = html.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('<!-- Contact End') || l.includes('<!-- Service End') || l.includes('<!-- 404 End') || l.includes('<!-- Testimonial Start')) {
      console.log(`Around line ${idx+1}:`);
      console.log(lines.slice(Math.max(0, idx - 4), idx + 4).join('\n'));
    }
  });
});

