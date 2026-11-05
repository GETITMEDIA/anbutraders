const fs = require('fs');

const paintHtml = fs.readFileSync('anbu-paint/index.html', 'utf8');

console.log('=== CSS LINKS IN ANBU-PAINT/INDEX.HTML ===');
const head = paintHtml.substring(0, paintHtml.indexOf('</head>'));
head.split('\n').filter(l => l.includes('<link')).forEach(l => console.log('  ' + l.trim()));

console.log('\n=== SCRIPTS IN ANBU-PAINT/INDEX.HTML ===');
const scripts = [...paintHtml.matchAll(/<script[^>]*src=["']([^"']*)["'][^>]*>/gi)].map(m => m[1]);
scripts.forEach(s => console.log('  ' + s));

