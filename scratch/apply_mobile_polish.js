const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

const target = `  .hero-modal-title {
    font-size: 18px;
  }`;

const replacement = `  .hero-modal-title {
    font-size: 18px;
  }
  .featured-top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .featured-project-title {
    font-size: 15px;
  }
  .featured-price-tag {
    font-size: 13.5px;
  }`;

if (css.includes(target)) {
  css = css.replace(target, replacement);
  fs.writeFileSync('css/style.css', css, 'utf8');
  console.log('Mobile polish applied successfully!');
} else {
  console.log('Target not found!');
}
