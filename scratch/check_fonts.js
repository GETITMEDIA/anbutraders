const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const head = html.slice(0, html.indexOf('</head>'));
const lines = head.split('\n');
lines.forEach(l => {
  if (l.includes('font') || l.includes('stylesheet') || l.includes('googleapis')) {
    console.log(l.trim());
  }
});
