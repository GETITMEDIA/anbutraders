const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const testSnippet = `
<script>
window.addEventListener('DOMContentLoaded', function() {
    var docWidth = document.documentElement.offsetWidth;
    var all = document.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el.offsetWidth > docWidth) {
            console.log('OVERFLOW ELEMENT:', el.tagName, el.className, el.id, el.offsetWidth, 'vs docWidth:', docWidth);
        }
    }
});
</script>
`;

html = html.replace('</head>', testSnippet + '</head>');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Injected debug overflow check');
