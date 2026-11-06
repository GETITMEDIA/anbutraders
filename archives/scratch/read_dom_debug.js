const fs = require('fs');
const dom = fs.readFileSync('scratch/dumped_dom.txt', 'utf8');
const match = dom.match(/id="DEBUG_OVERFLOW"[^>]*>([\s\S]*?)<\/div>/);
if (match) {
  console.log(match[1]);
} else {
  console.log('DEBUG_OVERFLOW not found');
}
