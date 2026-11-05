const fs = require('fs');

['contact.html', 'service.html', '404.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);
  const lines = html.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('</section>') || l.includes('Contact Section End') || l.includes('Service End') || l.includes('404 End')) {
      console.log(`Lines ${idx-2} to ${idx+3}:`);
      console.log(lines.slice(Math.max(0, idx - 3), idx + 3).join('\n'));
    }
  });
});

