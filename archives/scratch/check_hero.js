const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
let start = -1, end = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="hero"')) start = i;
  if (start !== -1 && lines[i].includes('</section>')) {
    end = i;
    break;
  }
}
console.log('Start line:', start + 1, 'End line:', end + 1);
console.log(lines.slice(start, start + 30).join('\n'));
