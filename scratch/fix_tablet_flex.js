const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

// Update tablet responsive rules to set flex: 0 0 auto so height is natural content height
css = css.replace(
`  .hero-featured-project-card {
    margin-top: 0;
    max-width: 100%;
    width: 100%;
  }
  .hero-stats-showcase-card {
    min-width: auto;
    max-width: 100%;
    width: 100%;
  }`,
`  .hero-featured-project-card {
    flex: 0 0 auto;
    margin-top: 0;
    max-width: 100%;
    width: 100%;
  }
  .hero-stats-showcase-card {
    flex: 0 0 auto;
    min-width: auto;
    max-width: 100%;
    width: 100%;
  }`
);

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('Fixed flex-basis in tablet breakpoint!');
