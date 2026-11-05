const fs = require('fs');

['contact.html', '404.html', 'service.html', 'testimonial.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);
  const idx = html.indexOf('anbu-unified-footer');
  console.log('Snippet before footer:');
  console.log(html.substring(idx - 300, idx));
});

