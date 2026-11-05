const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const targetStr = `                Enquiry
            </a>`;

const targetStrCRLF = `                Enquiry\r\n            </a>`;

const replacement = `                <i class="fa fa-paper-plane me-2"></i> Enquiry
            </a>`;

if (html.includes(targetStrCRLF)) {
  html = html.replace(targetStrCRLF, `                <i class="fa fa-paper-plane me-2"></i> Enquiry\r\n            </a>`);
  console.log('Replaced CRLF version');
} else if (html.includes(targetStr)) {
  html = html.replace(targetStr, replacement);
  console.log('Replaced LF version');
}

fs.writeFileSync(indexPath, html);
console.log('Done.');

