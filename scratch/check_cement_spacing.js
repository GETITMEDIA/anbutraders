const fs = require('fs');

const content = fs.readFileSync('cement/anbucement/index-demo-3.html', 'utf8');
const lines = content.split('\n');

console.log('Inspecting cement/anbucement/index-demo-3.html sections:');
lines.forEach((line, idx) => {
  if (/<section|<div[^>]+class=["'][^"']*(?:section|area|hero|container|stats|footer)/i.test(line)) {
    if (line.includes('class=')) {
      const match = line.match(/class=["']([^"']+)["']/i);
      if (match) console.log(`Line ${idx+1}: ${match[1]}`);
    }
  }
});

