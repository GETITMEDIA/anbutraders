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

const list = [
  'img/hero/steels-cement-hero.jpg',
  'img/hero/sheets-pipes-hero.jpg',
  'img/hero/paints-hero.jpg',
  'img/opt/steels-cement-1600.jpg',
  'img/opt/sheets-pipes-1200.jpg',
  'img/opt/cement-1200.jpg',
  'img/steel.jpg',
  'img/anbu-main-shop.jpg',
  'img/roofing-sheets.jpg'
];

list.forEach(f => {
  if (fs.existsSync(f)) {
    const buf = fs.readFileSync(f);
    console.log(f, getJpegDimensions(buf));
  }
});

