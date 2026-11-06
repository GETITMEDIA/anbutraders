const fs = require('fs');

const cssFiles = [
  'css/style.css',
  'css/anbu-category-shared.css',
  'a-steel/assets/css/a-steel-2026.css',
  'anbu-paint/assets/css/anbu-paint-2026.css',
  'cement/anbucement/css/cement-redesign.css'
];

cssFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=== Scanning ${file} for potential overflow rules ===`);
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    // Check fixed widths in px > 400
    if (/width:\s*[4-9]\d{2,}px|width:\s*[1-9]\d{3,}px/.test(line) && !line.includes('max-width')) {
      if (!line.includes('@media') && !line.includes('translate')) {
        console.log(`  Line ${idx+1} [Fixed width]: ${line.trim()}`);
      }
    }
    // Check negative margins
    if (/margin(?:-left|-right)?:\s*-\d{2,}px/.test(line)) {
      if (!line.includes('row') && !line.includes('divider') && !line.includes('skew')) {
        console.log(`  Line ${idx+1} [Negative margin]: ${line.trim()}`);
      }
    }
  });
});
