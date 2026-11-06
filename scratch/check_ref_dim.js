const fs = require('fs');
const path = 'C:/Users/Admin/.gemini/antigravity/brain/77c93636-6764-4f3a-a2d2-b797918c9e03/.user_uploaded/media_1793946354699_5c1a86e4.jpg';
const buf = fs.readFileSync(path);
// Check JPEG size: find SOF0 (0xFF, 0xC0) or SOF2 (0xFF, 0xC2)
let offset = 2;
while (offset < buf.length) {
  if (buf[offset] === 0xFF && (buf[offset + 1] === 0xC0 || buf[offset + 1] === 0xC2)) {
    const height = buf.readUInt16BE(offset + 5);
    const width = buf.readUInt16BE(offset + 7);
    console.log('JPEG dimensions:', width, 'x', height);
    break;
  }
  offset += 2 + buf.readUInt16BE(offset + 2);
}
