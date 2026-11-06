const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const originalHtml = fs.readFileSync(indexPath, 'utf8');

console.log('Original index.html length:', originalHtml.length);
console.log('Original lines:', originalHtml.split('\n').length);

