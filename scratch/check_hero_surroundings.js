const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
console.log('--- Lines 135 to 155 ---');
console.log(lines.slice(135, 155).join('\n'));
console.log('--- Lines 240 to 260 ---');
console.log(lines.slice(240, 260).join('\n'));
