const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const backupPath = path.join(__dirname, '..', 'index.backup.html');

// Create backup if not already present
if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(indexPath, backupPath);
  console.log('Created backup index.backup.html');
}

const html = fs.readFileSync(indexPath, 'utf8');

// Let's extract the exact untouched parts:
// 1. Head top (lines 1 to 29)
const headTopEndIdx = html.indexOf('<!-- Template Stylesheet -->');
const headTop = html.substring(0, headTopEndIdx);

// 2. Topbar and Navbar (lines 68 to 136)
const topbarStartIdx = html.indexOf('<!-- Topbar Start -->');
const navbarEndIdx = html.indexOf('<!-- Navbar End -->') + '<!-- Navbar End -->'.length;
const topbarAndNavbar = html.substring(topbarStartIdx, navbarEndIdx);

// 3. About Section (lines 402 to 473)
const aboutStartIdx = html.indexOf('<!-- About Start -->');
const aboutEndIdx = html.indexOf('<!-- About End -->') + '<!-- About End -->'.length;
let aboutSection = html.substring(aboutStartIdx, aboutEndIdx);

// In aboutSection, update primary image to img/opt/main-shop-1200.jpg and paintshop to img/opt/paintshop-900.jpg
aboutSection = aboutSection.replace('src="img/anbu-main-shop.jpg"', 'src="img/opt/main-shop-1200.jpg" width="600" height="450" loading="lazy"');
aboutSection = aboutSection.replace('src="paintshop.jpg"', 'src="img/opt/paintshop-900.jpg" width="300" height="200" loading="lazy"');
// Change h1 to h2
aboutSection = aboutSection.replace('<h1 class="display-5 mb-4">Welcome to Anbu Traders</h1>', '<h2 class="display-5 mb-4">Welcome to Anbu Traders</h2>');

// 4. Stats Strip (lines 476 to 526)
const statsStartIdx = html.indexOf('<!-- Clean & Simple Stats Strip');
const statsEndIdx = html.indexOf('<!-- Clean & Simple Stats Strip End -->') + '<!-- Clean & Simple Stats Strip End -->'.length;
let statsSection = html.substring(statsStartIdx, statsEndIdx);

// 5. Products Catalog Section (lines 675 to 1208)
const productsStartIdx = html.indexOf('<!-- ==============================================\n     ANBU TRADERS — FEATURED PRODUCTS CATALOG');
const productsEndIdx = html.indexOf('<section class="why-choose-section"');
const productsCatalogSection = html.substring(productsStartIdx, productsEndIdx);

// 6. Why Choose Us Section (lines 1210 to 1353)
const whyChooseStartIdx = html.indexOf('<section class="why-choose-section"');
const whyChooseEndIdx = html.indexOf('<!-- Why Choose Us End -->') + '<!-- Why Choose Us End -->'.length;
let whyChooseSection = html.substring(whyChooseStartIdx, whyChooseEndIdx);

// Update Why Choose Us image to optimized storefront
whyChooseSection = whyChooseSection.replace('src="ssss.jpg"', 'src="img/opt/storefront-1200.jpg" width="600" height="885" loading="lazy"');

// 7. Testimonials Section (lines 1574 to 1922)
const testimonialsStartIdx = html.indexOf('<!-- Testimonial Start -->');
const testimonialsEndIdx = html.indexOf('<!-- Testimonial End -->') + '<!-- Testimonial End -->'.length;
const testimonialsSection = html.substring(testimonialsStartIdx, testimonialsEndIdx);

// 8. Footer, Floating buttons, Copyright (lines 1924 to 2038)
const footerStartIdx = html.indexOf('<!-- Curved Transition to Footer -->');
const backToTopEndIdx = html.indexOf('<!-- Back to Top -->\n    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>') + '<!-- Back to Top -->\n    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>'.length;
const footerAndActions = html.substring(footerStartIdx, backToTopEndIdx);

console.log('Extracted all preserved core sections successfully.');

