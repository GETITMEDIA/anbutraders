const fs = require('fs');

console.log('=== INSPECTING ANBU-PAINT/INDEX.HTML ===');
const paintHtml = fs.readFileSync('anbu-paint/index.html', 'utf8');
console.log('Size of anbu-paint/index.html:', paintHtml.length);
console.log('Head links in anbu-paint/index.html:');
const paintHead = paintHtml.substring(0, paintHtml.indexOf('</head>'));
paintHead.split('\n').filter(l => l.includes('<link') || l.includes('<style')).forEach(l => console.log('  ' + l.trim()));

console.log('\n=== INSPECTING CEMENT/ANBUCEMENT/INDEX-DEMO-3.HTML ===');
const cementHtml = fs.readFileSync('cement/anbucement/index-demo-3.html', 'utf8');
console.log('Size of cement/anbucement/index-demo-3.html:', cementHtml.length);
console.log('Head links in cement/anbucement/index-demo-3.html:');
const cementHead = cementHtml.substring(0, cementHtml.indexOf('</head>'));
cementHead.split('\n').filter(l => l.includes('<link') || l.includes('<style')).forEach(l => console.log('  ' + l.trim()));

