const fs = require('fs');
const path = require('path');
const dir = '.agents/skills/ui-ux-pro-max/data';
const terms = (process.argv[2] || 'industrial,manufactur,construction,b2b,logistics').split(',');
const files = (process.argv[3] || '').split(',').filter(Boolean);
const list = files.length ? files : fs.readdirSync(dir).filter(f => f.endsWith('.csv'));
list.forEach(f => {
  const lines = fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n/);
  const hits = lines.slice(1).filter(l => terms.some(t => l.toLowerCase().includes(t)));
  if (hits.length) {
    console.log(`\n### ${f} (${hits.length} hits) header: ${lines[0].slice(0, 200)}`);
    hits.slice(0, 4).forEach(h => console.log('- ' + h.slice(0, 700)));
  }
});

