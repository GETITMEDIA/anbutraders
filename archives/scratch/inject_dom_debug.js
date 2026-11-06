const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const testSnippet = `
<script>
window.addEventListener('DOMContentLoaded', function() {
    var docWidth = document.documentElement.clientWidth;
    var bad = [];
    var all = document.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el.scrollWidth > docWidth + 2) {
            bad.push(el.tagName + '.' + (el.className || '') + '#' + (el.id || '') + ' w:' + el.scrollWidth);
        }
    }
    var div = document.createElement('div');
    div.id = 'DEBUG_OVERFLOW';
    div.textContent = 'DOC_W=' + docWidth + ' | ' + bad.slice(0, 10).join(' || ');
    document.body.prepend(div);
});
</script>
`;

html = html.replace('</head>', testSnippet + '</head>');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Injected DOM debug element');
