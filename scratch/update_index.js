const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace Untitled design paths with brands
html = html.replace(/img\/Untitled%20design\//g, 'img/brands/');
html = html.replace(/img\/Untitled design\//g, 'img/brands/');

// 2. Enhance meta tags and title
const oldMetaRegex = /<meta content="" name="keywords">\s*<meta content="" name="description">/i;
const newMeta = `<meta name="description" content="Anbu Traders is Pondicherry and Tamil Nadu's leading authorized wholesale and retail stockist for Steel (Tata Tiscon, JSW Neosteel), Cements (UltraTech, Dalmia, Ramco), Roofing Sheets, Pipes & Paints Showroom.">
    <meta name="keywords" content="Anbu Traders, steel suppliers Pondicherry, cement wholesale Pondicherry, TMT rebars, JSW sheets, APL Apollo pipes, Asian Paints showroom, Sedarapet, Vanur, construction materials">`;

if (oldMetaRegex.test(html)) {
  html = html.replace(oldMetaRegex, newMeta);
  console.log('Meta tags updated in index.html!');
}

// 3. Update Navbar to include 'More' dropdown
const navTarget = /<a href="service\.html" class="nav-item nav-link">Services<\/a>\s*<a href="contact\.html" class="nav-item nav-link">Contact<\/a>/i;
const newNavMenu = `<a href="service.html" class="nav-item nav-link">Services</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                <div class="dropdown-menu bg-light m-0 shadow-sm">
                    <a href="project.html" class="dropdown-item">Projects</a>
                    <a href="feature.html" class="dropdown-item">Why Choose Us</a>
                    <a href="team.html" class="dropdown-item">Our Organization</a>
                    <a href="testimonial.html" class="dropdown-item">Client Reviews</a>
                </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>`;

if (navTarget.test(html)) {
  html = html.replace(navTarget, newNavMenu);
  console.log('Navbar updated in index.html!');
}

// 4. Remove obsolete commented template sections (Rob Miller, Civil & Gas Engineering)
const obsoleteBlockRegex = /<!-- Service Start -->\s*<!-- <div class="container-xxl py-5">[\s\S]*?<!-- Team End -->/i;
if (obsoleteBlockRegex.test(html)) {
  html = html.replace(obsoleteBlockRegex, '<!-- Obsolete template placeholder sections removed for 2026 clean production -->');
  console.log('Cleaned up obsolete template blocks in index.html!');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html processing complete!');

