const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const targetSection = '<section class="trusted-brands-strip-section" aria-label="Our Trusted Brands">';
const targetIdx = html.indexOf(targetSection);

// Find the preceding comment
const commentMarker = '<!-- ==============================================';
const lastCommentIdx = html.lastIndexOf(commentMarker, targetIdx);

// Find the closing </section>
const closeTag = '</section>';
const endIdx = html.indexOf(closeTag, targetIdx) + closeTag.length;

console.log('lastCommentIdx:', lastCommentIdx, 'endIdx:', endIdx);
console.log('Snippet to replace:\n', html.substring(lastCommentIdx, endIdx));

const marqueeHtml = `<!-- ==============================================
         AUTHORIZED BRANDS INFINITE LOGO MARQUEE
         ============================================== -->
    <section class="brand-marquee-section" id="brands-strip" aria-label="Authorized Mill Brands">
        <div class="container text-center mb-3">
            <span class="hero-eyebrow-badge">
                <span class="hero-pulse-dot"></span> DIRECT MILL DISTRIBUTOR &bull; AUTHORIZED WHOLESALE DEALER
            </span>
        </div>
        <div class="brand-marquee-container" tabindex="0" role="region" aria-label="Authorized Brands Carousel">
            <div class="brand-marquee-track">
                <div class="brand-marquee-item">
                    <img src="img/tata-tiscon-logo.png" alt="Tata Tiscon" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Tata Tiscon</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/jsw-steel-logo.jpg" alt="JSW Steel" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">JSW Steel</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/brands/2.png" alt="UltraTech Cement" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">UltraTech</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/dalmiabrand.jpg" alt="Dalmia Cement" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Dalmia DSP</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/ramcobrand.jpg" alt="Ramco Cements" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Ramco Super</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/agni-tmt-logo.png" alt="Agni TMT" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Agni 550D</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/apl-apollo-logo.jpg" alt="APL Apollo Pipes" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">APL Apollo</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/brands/5.png" alt="Asian Paints" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Asian Paints</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/brands/6.png" alt="Berger Paints" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Berger Paints</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/jsw-paints-logo.jpg" alt="JSW Paints" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">JSW Paints</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/brands/1.png" alt="Birla Aerocon" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Birla Aerocon</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/Coromandellogo.png" alt="Coromandel King" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Coromandel</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/cube-logo.jpg" alt="Cubecrete" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Cubecrete</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/maha-cement-opc-53-1000x1000-removebg-preview.png" alt="Maha Cement" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Maha Cement</span>
                </div>
                <div class="brand-marquee-item">
                    <img src="img/priyacement-redlogo.svg" alt="Priya Cement" width="70" height="40" loading="lazy">
                    <span class="brand-name-tag">Priya Cement</span>
                </div>
            </div>
        </div>
    </section>`;

html = html.substring(0, lastCommentIdx) + marqueeHtml + html.substring(endIdx);
fs.writeFileSync(indexPath, html);
console.log('Successfully replaced static strip with Infinite Brand Marquee!');
