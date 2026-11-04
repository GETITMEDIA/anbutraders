const fs = require('fs');
const path = require('path');

const targetDir = path.join('img', 'banners');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const bannerMap = {
  'about-hero.jpg': 'img/about-banner.png',
  'services-hero.jpg': 'img/services-banner.jpg',
  'contact-hero.jpg': 'img/contact-banner.jpg',
  'project-hero.jpg': 'steel-banner-1.jpg',
  'feature-hero.jpg': 'cement-banner-1.jpg',
  'team-hero.jpg': '2148102088.jpg',
  'testimonial-hero.jpg': 'Steel-banner-2.jpg',
  '404-hero.jpg': 'pipiandsheet.jpg'
};

Object.entries(bannerMap).forEach(([targetName, srcPath]) => {
  const destPath = path.join(targetDir, targetName);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${srcPath} -> ${destPath} (${Math.round(fs.statSync(destPath).size/1024)} KB)`);
});

console.log('Banner assets successfully populated in img/banners/ !');

