const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. About Us Header
const aboutTarget = `            <!-- Text Column -->
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style="color: black;">
                <p class="fw-medium text-uppercase text-primary mb-2">About Us</p>
                <h2 class="display-5 mb-4">Welcome to Anbu Traders</h2>`;

const aboutReplacement = `            <!-- Text Column -->
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div class="unified-section-eyebrow text-start mb-2">
                    <span class="unified-pulse-dot"></span>
                    <span>ABOUT ANBU TRADERS</span>
                </div>
                <h2 class="unified-section-title text-start mb-2">Welcome to Anbu Traders</h2>
                <div class="unified-title-bar left-aligned mb-4"></div>`;

// 2. Businesses Header
const bizTarget = `            <!-- Section Header -->
            <div class="biz-showcase-header text-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="biz-eyebrow-pill">
                    <span class="biz-pulsing-dot"></span>
                    <span>OUR 4 SPECIALIZED DIVISIONS</span>
                </div>
                <h2 class="biz-main-title">
                    Core Wholesale &amp; <span class="biz-heading-accent">Retail Businesses</span>
                </h2>
                <div class="biz-title-bar"></div>
                <p class="biz-lead-text">
                    From foundation steel and certified cement to industrial roofing and computerized paint mixing — certified primary materials delivered direct to site.
                </p>
            </div>`;

const bizReplacement = `            <!-- Section Header -->
            <div class="unified-section-header text-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="unified-section-eyebrow mb-2">
                    <span class="unified-pulse-dot"></span>
                    <span>OUR 4 SPECIALIZED DIVISIONS</span>
                </div>
                <h2 class="unified-section-title mb-2">Core Wholesale &amp; Retail Businesses</h2>
                <div class="unified-title-bar mb-3"></div>
                <p class="unified-lead-text">
                    From foundation steel and certified cement to industrial roofing and computerized paint mixing — certified primary materials delivered direct to site.
                </p>
            </div>`;

// 3. Featured Products Header
const productsTarget = `        <!-- Section Header -->
        <div class="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 720px;">
            <span class="catalog-eyebrow">
                <i class="fa fa-boxes"></i> EXTENSIVE INVENTORY
            </span>
            <h2 class="catalog-main-title mt-2 mb-3">Our Featured Products</h2>`;

const productsReplacement = `        <!-- Section Header -->
        <div class="unified-section-header text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 720px;">
            <div class="unified-section-eyebrow mb-2">
                <span class="unified-pulse-dot"></span>
                <span>EXTENSIVE INVENTORY &bull; 3,000+ PRODUCTS</span>
            </div>
            <h2 class="unified-section-title mb-2">Our Featured Products</h2>
            <div class="unified-title-bar mb-3"></div>`;

// 4. Why Choose Us Header
const whyTarget = `                        <!-- Header -->
                        <div class="why-eyebrow-pill">
                            <span class="why-pulsing-dot"></span>
                            <span>WHY CHOOSE ANBU TRADERS</span>
                        </div>
                        <h2 class="why-main-title">
                            Built on <span class="why-heading-accent">Trust, Quality &amp; Precision</span>
                        </h2>
                        <div class="why-title-bar"></div>
                        <p class="why-lead-text">`;

const whyReplacement = `                        <!-- Header -->
                        <div class="unified-section-eyebrow text-start mb-2">
                            <span class="unified-pulse-dot"></span>
                            <span>WHY CHOOSE ANBU TRADERS</span>
                        </div>
                        <h2 class="unified-section-title text-start mb-2">Built on Trust, Quality &amp; Precision</h2>
                        <div class="unified-title-bar left-aligned mb-3"></div>
                        <p class="why-lead-text">`;

// 5. How We Deliver Header
const deliverTarget = `            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 680px;">
                <div class="why-eyebrow-pill">
                    <span class="why-pulsing-dot"></span>
                    <span>TRANSPARENT 4-STEP LOGISTICS</span>
                </div>
                <h2 class="display-6 fw-bold text-navy mt-2 mb-2">How We Deliver to Your Site</h2>
                <div class="biz-title-bar"></div>
                <p class="text-muted">A streamlined, transparent supply process from initial BOQ estimation to certified mechanical crane unloading.</p>
            </div>`;

const deliverReplacement = `            <div class="unified-section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 680px;">
                <div class="unified-section-eyebrow mb-2">
                    <span class="unified-pulse-dot"></span>
                    <span>TRANSPARENT 4-STEP LOGISTICS</span>
                </div>
                <h2 class="unified-section-title mb-2">How We Deliver to Your Site</h2>
                <div class="unified-title-bar mb-3"></div>
                <p class="unified-lead-text">A streamlined, transparent supply process from initial BOQ estimation to certified mechanical crane unloading.</p>
            </div>`;

// 6. Testimonials Header
const testTarget = `    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 650px;">
      <span class="testimonial-section-badge">
        <i class="fab fa-google text-primary me-1"></i> 4.9 ★ GOOGLE VERIFIED REVIEWS
      </span>
      <h2 class="display-5 fw-bold text-navy mt-2 mb-3">Real Reviews from Real Clients</h2>
      <p class="text-muted">
        Direct feedback from verified engineers, builders, contractors, and homeowners on Google Reviews.
      </p>
    </div>`;

const testReplacement = `    <div class="unified-section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 680px;">
      <div class="unified-section-eyebrow mb-2">
        <span class="unified-pulse-dot"></span>
        <span>4.9 ★ GOOGLE VERIFIED CLIENT REVIEWS</span>
      </div>
      <h2 class="unified-section-title mb-2">Real Reviews from Real Clients</h2>
      <div class="unified-title-bar mb-3"></div>
      <p class="unified-lead-text">
        Direct feedback from verified engineers, builders, contractors, and homeowners on Google Reviews.
      </p>
    </div>`;

// Normalizing helper for replacement regardless of CRLF or LF
function replaceSnippet(content, target, rep) {
  const targetCRLF = target.replace(/\n/g, '\r\n');
  const targetLF = target.replace(/\r\n/g, '\n');
  if (content.includes(targetCRLF)) {
    return content.replace(targetCRLF, rep.replace(/\n/g, '\r\n'));
  } else if (content.includes(targetLF)) {
    return content.replace(targetLF, rep.replace(/\r\n/g, '\n'));
  } else {
    console.warn('Target snippet not matched!');
    return content;
  }
}

html = replaceSnippet(html, aboutTarget, aboutReplacement);
html = replaceSnippet(html, bizTarget, bizReplacement);
html = replaceSnippet(html, productsTarget, productsReplacement);
html = replaceSnippet(html, whyTarget, whyReplacement);
html = replaceSnippet(html, deliverTarget, deliverReplacement);
html = replaceSnippet(html, testTarget, testReplacement);

fs.writeFileSync(indexPath, html);
console.log('Successfully applied unified headers to all sections in index.html!');

