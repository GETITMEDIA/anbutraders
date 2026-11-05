const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('anbu-paint').filter(f => f.endsWith('.html'));
const references = [];
htmlFiles.forEach(f => {
  const content = fs.readFileSync('anbu-paint/' + f, 'utf8');
  if (content.includes('src="js/') || content.includes("src='js/")) {
    references.push(f);
  }
});
console.log('Files referencing src="js/":', references);

