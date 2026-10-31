const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const paintDir = 'd:\\office_project_siva\\anbutraders\\anbu-paint\\paint';
const scratchDir = 'd:\\office_project_siva\\anbutraders\\scratch';

const html = `<!DOCTYPE html>
<html>
<body>
<canvas id="c" width="1312" height="1200"></canvas>
<script>
  const img = new Image();
  img.src = 'file:///${path.join(paintDir, 'berger-bison-glow.webp').replace(/\\/g, '/')}';
  img.onload = () => {
    const c = document.getElementById('c');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const idata = ctx.getImageData(0, 0, c.width, c.height);
    const d = idata.data;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], g = d[i+1], b = d[i+2];
      // If near white, make transparent
      if (r > 240 && g > 240 && b > 240) {
        d[i+3] = 0;
      }
    }
    ctx.putImageData(idata, 0, 0);
    document.title = 'DONE';
  };
</script>
</body>
</html>`;

fs.writeFileSync(path.join(scratchDir, 'make_transparent.html'), html, 'utf8');

execFileSync(chromePath, [
  '--headless=new',
  '--screenshot=' + path.join(paintDir, 'berger-bison-glow-transparent.png'),
  '--window-size=1312,1200',
  '--default-background-color=00000000',
  'file:///' + path.join(scratchDir, 'make_transparent.html').replace(/\\/g, '/')
]);

console.log('Result exists:', fs.existsSync(path.join(paintDir, 'berger-bison-glow-transparent.png')));
