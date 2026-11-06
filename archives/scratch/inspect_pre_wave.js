const fs = require('fs');

['contact.html', '404.html', 'service.html', 'testimonial.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);
  const waveIdx = html.indexOf('svg-wave-divider');
  console.log('Snippet before svg-wave-divider:');
  console.log(html.substring(waveIdx - 200, waveIdx));
});

