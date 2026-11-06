const fs = require('fs');

['index.html', 'about.html', 'service.html', 'contact.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);
  const lines = html.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('<link') || l.includes('<script')) {
      console.log(`  L${i+1}: ${l.trim()}`);
    }
  });
});

