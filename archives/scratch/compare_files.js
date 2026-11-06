const fs = require('fs');

const f1 = fs.readFileSync('img/opt/hero-materials-composite.jpg');
const f2 = fs.readFileSync('C:/Users/Admin/.gemini/antigravity/brain/b8665a0a-01bb-475e-85a1-62cc2f021434/.user_uploaded/media_1793861036074_1e13236a.jpg');

console.log('f1 length:', f1.length);
console.log('f2 length:', f2.length);
console.log('f1 === f2:', f1.equals(f2));

