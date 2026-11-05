const fs = require('fs');
const path = require('path');

const filesToDelete = [
  'js/brand-logos-data.js',
  'js/brand-flex-carousel.js',
  'js/hero-carousel.js',
  'cement/anbucement/js/cement-2026.js',
  'anbu-paint/assets/js/aero-shards.js',
  'anbu-paint/assets/js/OrbitControls.js',
  'anbu-paint/assets/js/three.min.js'
];

filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted unused file: ${file}`);
  }
});

const dirToDelete = 'anbu-paint/js';
if (fs.existsSync(dirToDelete)) {
  fs.rmSync(dirToDelete, { recursive: true, force: true });
  console.log(`Deleted redundant directory: ${dirToDelete}`);
}

