const fs = require('fs');

function inspectCSSContainers(cssPath) {
  if (!fs.existsSync(cssPath)) return;
  const css = fs.readFileSync(cssPath, 'utf8');
  console.log(`\n=== ${cssPath} ===`);
  const lines = css.split('\n');
  lines.forEach((line, idx) => {
    if (line.match(/(?:^|[ ,{])(\.container(?:-[a-z]+)?|\.site-container|\.container-fluid)\s*\{/)) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
      for (let j = idx; j < Math.min(lines.length, idx + 15); j++) {
        console.log(`  ${lines[j].trim()}`);
        if (lines[j].includes('}')) break;
      }
    }
  });
}

inspectCSSContainers('css/style.css');
inspectCSSContainers('css/anbu-category-shared.css');
inspectCSSContainers('a-steel/assets/css/style.css');
inspectCSSContainers('anbu-paint/assets/css/anbu-paint-2026.css');
inspectCSSContainers('cement/anbucement/css/cement-redesign.css');

