const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

console.log('=== INDEX.HTML SECTION TRANSITIONS ===');
lines.forEach((l, i) => {
  if (
    l.includes('carousel-inner') ||
    l.includes('container-xxl') ||
    l.includes('container-fluid') ||
    l.includes('facts-simple') ||
    l.includes('our-businesses') ||
    l.includes('products') ||
    l.includes('feature') ||
    l.includes('brands-section') ||
    l.includes('testimonial-section') ||
    l.includes('anbu-unified-footer')
  ) {
    if (l.trim().startsWith('<')) {
      console.log(`L${i+1}: ${l.trim().substring(0, 85)}`);
    }
  }
});

