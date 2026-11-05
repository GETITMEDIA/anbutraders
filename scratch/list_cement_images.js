const fs = require('fs');
const path = require('path');

function getImages(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      getImages(full, list);
    } else if (/\.(jpg|jpeg|png|webp|svg)$/i.test(e.name)) {
      list.push(full.replace(/\\/g, '/'));
    }
  }
  return list;
}

const cementImgs = getImages('cement/anbucement/img');
console.log('Cement images count:', cementImgs.length);
console.log(cementImgs.slice(0, 30).join('\n'));

console.log('\nRoot img folder:');
const rootImgs = getImages('img');
console.log(rootImgs.slice(0, 30).join('\n'));

