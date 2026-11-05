const fs = require('fs');

function fixIndexHtml() {
  let html = fs.readFileSync('index.html', 'utf8');

  // Specific known mojibake replacements
  html = html.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ/g, '&ldquo;');
  html = html.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â/g, '&rdquo;');
  html = html.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢/g, "'");
  html = html.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â/g, '&mdash;');
  html = html.replace(/ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¦/g, '&#9733;');
  html = html.replace(/Ãƒâ€šÃ‚Â·/g, '&bull;');
  html = html.replace(/ÃƒÂ¢CÃ¢â‚¬Å¡Ã‚Â¬/g, '&bull;');
  html = html.replace(/ÃƒÂ¢Ã¢â‚¬Â Ã¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬Â Ã¢â€šÂ¬/g, '--');
  html = html.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“/g, '&ndash;');

  // Generic fallback if any leftover
  html = html.replace(/ÃƒÂ¢[^\s<>"',]+/g, '');
  html = html.replace(/Ãƒ[^\s<>"',]+/g, '');

  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Fixed index.html mojibake.');
}

function fixStyleCss() {
  let css = fs.readFileSync('css/style.css', 'utf8');

  css = css.replace(/â€”/g, '—');
  css = css.replace(/â”€/g, '─');
  css = css.replace(/â€¢/g, '•');
  css = css.replace(/â€“/g, '–');
  css = css.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â/g, '—');
  css = css.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ/g, '"');
  css = css.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â/g, '"');
  css = css.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢/g, "'");

  // Fix comments with clean dashes
  css = css.replace(/\/\*[\s\S]*?\*\//g, (comment) => {
    return comment
      .replace(/â€”/g, '--')
      .replace(/â”€+/g, '---')
      .replace(/â€¢/g, '*')
      .replace(/â€“/g, '-');
  });

  fs.writeFileSync('css/style.css', css, 'utf8');
  console.log('Fixed css/style.css mojibake.');
}

fixIndexHtml();
fixStyleCss();
