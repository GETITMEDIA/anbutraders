const fs = require('fs');

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  console.log(`=== Analyzing ${filePath} ===`);
  lines.forEach((line, idx) => {
    if (/[\u00C0-\u00FF\u0100-\u017F\u0180-\u024F]/.test(line)) {
      if (/Ã|Â|â|€/.test(line)) {
        console.log(`L${idx+1}: ${line.trim().slice(0, 100)}`);
      }
    }
  });
}

analyzeFile('index.html');
analyzeFile('css/style.css');

