const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split(/\r?\n/);
lines.forEach((l, i) => {
  const t = l.trim();
  if (/^<!--\s*[A-Z=]/.test(t) && !t.includes('====') || t.startsWith('<section') || t.startsWith('<footer') || t.startsWith('<nav')) {
    console.log(`L${i + 1}: ${t.slice(0, 110)}`);
  }
});
console.log('\nTotal lines:', lines.length);
const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(m => m[1]);
const styles = [...html.matchAll(/<link[^>]*href="([^"]+\.css[^"]*)"/g)].map(m => m[1]);
console.log('Scripts:', scripts);
console.log('Styles:', styles);
const fonts = [...html.matchAll(/fonts\.googleapis\.com[^"]+/g)].map(m => m[0]);
console.log('Fonts:', fonts);

