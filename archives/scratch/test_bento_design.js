const fs = require('fs');

console.log('Testing image availability for Bento Showcase:');
const images = [
  'cement/anbucement/img/cement_hero_cinematic.jpg',
  'img/hero/steels-cement-hero.jpg',
  'a-steel/assets/img/service/roofsheethome.jpg',
  'anbu-paint/img/brand-cluster-asian.jpg'
];

images.forEach(img => {
  console.log((fs.existsSync(img) ? '✅' : '❌') + ' ' + img);
});

