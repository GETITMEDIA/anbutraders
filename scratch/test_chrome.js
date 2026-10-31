const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = path.join(__dirname, 'test.html');
const outPath = path.join(__dirname, 'test.png');

fs.writeFileSync(htmlPath, '<!DOCTYPE html><html><body style="margin:0;width:1920px;height:1080px;background:#050c18;"></body></html>');

execFileSync(chromePath, [
  '--headless=new',
  '--screenshot=' + outPath,
  '--window-size=1920,1080',
  '--default-background-color=00000000',
  '--hide-scrollbars',
  'file:///' + htmlPath.replace(/\\/g, '/')
]);

console.log('Result exists:', fs.existsSync(outPath), 'Size:', fs.statSync(outPath).size);
