const fs = require('fs');

const imgPath = 'C:/Users/Admin/.gemini/antigravity/brain/b8665a0a-01bb-475e-85a1-62cc2f021434/.user_uploaded/media_1793861036074_1e13236a.jpg';

// Read image header to find dimensions
const buffer = fs.readFileSync(imgPath);
console.log('Buffer length:', buffer.length);

// Check if sharp or jimp or canvas is available, or use pure node
let sharpAvailable = false;
try {
  require('sharp');
  sharpAvailable = true;
} catch (e) {}
console.log('Sharp available:', sharpAvailable);

