const fs = require('fs');
const path = require('path');

function searchNavbars(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && f !== 'node_modules' && f !== '.git' && f !== '.agents') {
      searchNavbars(full);
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const navMatches = content.match(/<nav[\s\S]*?<\/nav>/gi) || [];
      navMatches.forEach(nav => {
        if (/More/i.test(nav)) {
          console.log('Found "More" in nav in:', full);
          const lines = nav.split('\n').filter(l => /More/i.test(l));
          lines.forEach(l => console.log('   Line:', l.trim()));
        }
      });
      const headerMatches = content.match(/<header[\s\S]*?<\/header>/gi) || [];
      headerMatches.forEach(h => {
        if (/More/i.test(h) && !navMatches.some(n => h.includes(n))) {
          console.log('Found "More" in header in:', full);
          const lines = h.split('\n').filter(l => /More/i.test(l));
          lines.forEach(l => console.log('   Line:', l.trim()));
        }
      });
    }
  }
}

searchNavbars('.');

