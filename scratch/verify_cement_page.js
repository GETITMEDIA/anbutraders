const fs = require('fs');

const html = fs.readFileSync('cement/anbucement/index-demo-3.html', 'utf8');

// Check image paths
const imgMatches = [...html.matchAll(/background-image:\s*url\('([^']+)'\)/g)].map(m => m[1]);
console.log('Background images found in cement hero:');
imgMatches.forEach(p => {
  const full = 'cement/anbucement/' + p;
  console.log(' - ' + p + ' -> exists: ' + fs.existsSync(full));
});

// Check css paths
const cssMatches = [...html.matchAll(/<link[^>]+href=["']([^"']+\.css(\?[^"']*)?)["']/g)].map(m => m[1]);
console.log('CSS files linked in cement:');
cssMatches.forEach(p => {
  const full = p.startsWith('http') ? p : 'cement/anbucement/' + p;
  if (!p.startsWith('http')) {
    console.log(' - ' + p + ' -> exists: ' + fs.existsSync(full));
  }
});

// Check js paths
const jsMatches = [...html.matchAll(/<script[^>]+src=["']([^"']+\.js(\?[^"']*)?)["']/g)].map(m => m[1]);
console.log('JS files linked in cement:');
jsMatches.forEach(p => {
  const full = p.startsWith('http') ? p : 'cement/anbucement/' + p;
  if (!p.startsWith('http')) {
    console.log(' - ' + p + ' -> exists: ' + fs.existsSync(full));
  }
});

