const fs = require('fs');

['team.html', 'testimonial.html', '404.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const lines = html.split('\n');
  console.log(`\n================== ${f} ==================`);
  lines.forEach((l, i) => {
    if (l.includes('<section') || l.includes('class="container') || l.includes('facts-simple') || l.includes('my-5') || l.includes('py-5') || l.includes('class="row')) {
      console.log(`${i+1}: ${l.trim().substring(0, 90)}`);
    }
  });
});

