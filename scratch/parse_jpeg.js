const fs = require('fs');

function getJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const length = buffer.readUInt16BE(offset + 2);
    offset += 2 + length;
  }
  return null;
}

const buffer = fs.readFileSync('C:/Users/Admin/.gemini/antigravity/brain/b8665a0a-01bb-475e-85a1-62cc2f021434/.user_uploaded/media_1793861036074_1e13236a.jpg');
console.log('JPEG dimensions:', getJpegDimensions(buffer));

