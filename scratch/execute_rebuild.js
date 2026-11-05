const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const originalHtml = fs.readFileSync(indexPath, 'utf8');

// 1. Head top (lines 1 to 29)
const headTopEndIdx = originalHtml.indexOf('<!-- Template Stylesheet -->');
const headTop = originalHtml.substring(0, headTopEndIdx);

// 2. Topbar and Navbar (lines 68 to 136)
const topbarStartIdx = originalHtml.indexOf('<!-- Topbar Start -->');
const navbarEndIdx = originalHtml.indexOf('<!-- Navbar End -->') + '<!-- Navbar End -->'.length;
const topbarAndNavbar = originalHtml.substring(topbarStartIdx, navbarEndIdx);

// 3. About Section (lines 402 to 473)
const aboutStartIdx = originalHtml.indexOf('<!-- About Start -->');
const aboutEndIdx = originalHtml.indexOf('<!-- About End -->') + '<!-- About End -->'.length;
let aboutSection = originalHtml.substring(aboutStartIdx, aboutEndIdx);

aboutSection = aboutSection.replace('src="img/anbu-main-shop.jpg"', 'src="img/opt/main-shop-1200.jpg" width="600" height="450" loading="lazy"');
aboutSection = aboutSection.replace('src="paintshop.jpg"', 'src="img/opt/paintshop-900.jpg" width="300" height="200" loading="lazy"');
aboutSection = aboutSection.replace('<h1 class="display-5 mb-4">Welcome to Anbu Traders</h1>', '<h2 class="display-5 mb-4">Welcome to Anbu Traders</h2>');

// 4. Stats Strip
const statsStartIdx = originalHtml.indexOf('<!-- Clean & Simple Stats Strip');
const statsEndIdx = originalHtml.indexOf('<!-- Clean & Simple Stats Strip End -->') + '<!-- Clean & Simple Stats Strip End -->'.length;
let statsSection = originalHtml.substring(statsStartIdx, statsEndIdx);

// 5. Products Catalog Section
const productsStartIdx = originalHtml.indexOf('<!-- ==============================================\n     ANBU TRADERS — FEATURED PRODUCTS CATALOG');
const productsEndIdx = originalHtml.indexOf('<section class="why-choose-section"');
const productsCatalogSection = originalHtml.substring(productsStartIdx, productsEndIdx);

// 6. Why Choose Us Section
const whyChooseStartIdx = originalHtml.indexOf('<section class="why-choose-section"');
const whyChooseEndIdx = originalHtml.indexOf('<!-- Why Choose Us End -->') + '<!-- Why Choose Us End -->'.length;
let whyChooseSection = originalHtml.substring(whyChooseStartIdx, whyChooseEndIdx);
whyChooseSection = whyChooseSection.replace('src="ssss.jpg"', 'src="img/opt/storefront-1200.jpg" width="600" height="885" loading="lazy"');

// 7. Testimonials Section
const testimonialsStartIdx = originalHtml.indexOf('<!-- Testimonial Start -->');
const testimonialsEndIdx = originalHtml.indexOf('<!-- Testimonial End -->') + '<!-- Testimonial End -->'.length;
const testimonialsSection = originalHtml.substring(testimonialsStartIdx, testimonialsEndIdx);

// 8. Footer, Floating buttons, Copyright
const footerStartIdx = originalHtml.indexOf('<!-- Curved Transition to Footer -->');
const backToTopMarker = '<!-- Back to Top -->\n    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>';
const backToTopEndIdx = originalHtml.indexOf(backToTopMarker) + backToTopMarker.length;
const footerAndActions = originalHtml.substring(footerStartIdx, backToTopEndIdx);

// Construct new index.html
const newIndexHtml = `${headTop}<!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    <link rel="preload" as="image" href="img/opt/steels-cement-1600.jpg">

    <!-- Schema.org LocalBusiness Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "HomeGoodsStore",
      "name": "Anbu Traders",
      "image": "img/ANUBU STEEL.png",
      "description": "Puducherry & Tamil Nadu's Premier Wholesale & Retail Supplier of Tata Tiscon, JSW Steel, UltraTech Cement, Dalmia, Roofing Sheets, and Asian Paints.",
      "telephone": "+919626325204",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No.76/3, Pondy - Mailam Main Road, Sedarapet",
        "addressLocality": "Puducherry",
        "postalCode": "605111",
        "addressRegion": "Tamil Nadu / Puducherry",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "08:00",
          "closes": "14:30"
        }
      ]
    }
    </script>
</head>

<body>
${topbarAndNavbar}

    <!-- ==============================================
         2026 HERO SECTION START (Split Industrial Swiss + 3-Division Bento)
         ============================================== -->
    <section id="hero" class="anbu-split-hero-section" aria-label="Anbu Traders Industrial Materials Showcase">
        <div class="hero-blueprint-grid" aria-hidden="true"></div>

        <div class="container position-relative" style="z-index: 2;">
            <div class="row align-items-center g-4 g-lg-5">
                
                <!-- Left Editorial Column -->
                <div class="col-lg-6 col-xl-7 hero-text-col">
                    <div class="hero-eyebrow-badge">
                        <span class="hero-pulse-dot"></span>
                        <span>PUDUCHERRY &amp; TAMIL NADU’S PREMIER INDUSTRIAL MATERIALS PARTNER</span>
                    </div>

                    <h1 class="hero-main-h1">
                        Wholesale &amp; Retail <span class="hero-highlight">Steel, Cement, Roofing &amp; Paints</span> Direct to Site
                    </h1>

                    <p class="hero-lead-text">
                        Authorized primary mill stockist of Tata Tiscon, JSW Steel, UltraTech, Dalmia, APL Apollo, and Asian Paints. Verified with 100-Ton digital electronic weighbridge accuracy, certified mill reports, and rapid site delivery.
                    </p>

                    <!-- Dual Action Buttons -->
                    <div class="hero-cta-group">
                        <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20would%20like%20to%20get%20today%27s%20live%20material%20rates%20for%20my%20project." class="btn-hero-primary btn-ripple" target="_blank" rel="noopener">
                            <i class="fab fa-whatsapp me-2"></i> Instant WhatsApp Quote
                        </a>
                        <a href="#products" class="btn-hero-secondary btn-ripple">
                            <i class="fa fa-boxes me-2"></i> Explore Products
                        </a>
                    </div>

                    <!-- Inline Trust Proof Stats -->
                    <div class="hero-trust-strip">
                        <div class="hero-trust-item">
                            <span class="trust-val">11+</span>
                            <span class="trust-lbl">Years Established</span>
                        </div>
                        <div class="hero-trust-divider"></div>
                        <div class="hero-trust-item">
                            <span class="trust-val">100-Ton</span>
                            <span class="trust-lbl">Electronic Weighbridge</span>
                        </div>
                        <div class="hero-trust-divider"></div>
                        <div class="hero-trust-item">
                            <span class="trust-val">10,000+</span>
                            <span class="trust-lbl">Deliveries Completed</span>
                        </div>
                    </div>
                </div>

                <!-- Right Bento Image Showcase (3 Divisions) -->
                <div class="col-lg-6 col-xl-5 hero-visual-col">
                    <div class="hero-bento-grid">
                        
                        <!-- Tile 1: Steels & Cement (Featured Primary Tile) -->
                        <a href="cement/anbucement/index-demo-3.html" class="hero-bento-card card-featured" aria-label="Explore Steel and Cement Division">
                            <img src="img/opt/steels-cement-1600.jpg" alt="Primary TMT Rebars and Certified Construction Cements" class="hero-bento-img" width="800" height="450">
                            <div class="hero-bento-gradient"></div>
                            <div class="hero-bento-content">
                                <span class="hero-bento-tag tag-orange"><i class="fa fa-layer-group me-1"></i> TMT Steel &amp; Cement</span>
                                <h3 class="hero-bento-title">Tata Tiscon, JSW &amp; UltraTech</h3>
                                <p class="hero-bento-desc">Fe-550D Billet Rebars &amp; Grade-53 Fresh Rake Cements</p>
                                <span class="hero-bento-link">Explore Division <i class="fa fa-arrow-right ms-1"></i></span>
                            </div>
                        </a>

                        <div class="hero-bento-subgroup">
                            <!-- Tile 2: Sheets & Pipes -->
                            <a href="a-steel/index.html" class="hero-bento-card card-small" aria-label="Explore Roofing Sheets and Hollow Pipes">
                                <img src="img/opt/sheets-pipes-1200.jpg" alt="Roofing Sheets and Hollow Pipes" class="hero-bento-img" width="600" height="335">
                                <div class="hero-bento-gradient"></div>
                                <div class="hero-bento-content">
                                    <span class="hero-bento-tag tag-blue"><i class="fa fa-warehouse me-1"></i> Sheets &amp; Pipes</span>
                                    <h4 class="hero-bento-title-sm">JSW Colouron+ &amp; Apollo</h4>
                                    <span class="hero-bento-link">View Profiles <i class="fa fa-arrow-right ms-1"></i></span>
                                </div>
                            </a>

                            <!-- Tile 3: Paints Division -->
                            <a href="anbu-paint/index.html" class="hero-bento-card card-small" aria-label="Explore Paints and Color Tinting">
                                <img src="img/opt/paints-1200.jpg" alt="Asian Paints and Color Mixing Lab" class="hero-bento-img" width="600" height="335">
                                <div class="hero-bento-gradient"></div>
                                <div class="hero-bento-content">
                                    <span class="hero-bento-tag tag-purple"><i class="fa fa-paint-roller me-1"></i> Paints &amp; Mixing</span>
                                    <h4 class="hero-bento-title-sm">Asian Paints &amp; Berger Lab</h4>
                                    <span class="hero-bento-link">Visit Lab <i class="fa fa-arrow-right ms-1"></i></span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- ==============================================
         HERO SECTION END
         ============================================== -->

    <!-- ==============================================
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
    </section>

    <!-- Curved Section Transition: Hero to About -->
    <div class="svg-wave-divider wave-light" style="background:#f8fafc;">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width:100%;height:48px;display:block;">
            <path d="M0 0C320 38 640 48 960 24C1200 4 1360 36 1440 28V48H0V0Z" fill="#F8FAFC"/>
        </svg>
    </div>

${aboutSection}

${statsSection}

    <!-- Curved Section Transition: Stats to Businesses -->
    <div class="svg-wave-divider wave-white" style="background:#062B5B;">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width:100%;height:48px;display:block;">
            <path d="M0 24C360 48 720 0 1080 32C1260 48 1380 20 1440 16V48H0V24Z" fill="#FFFFFF"/>
        </svg>
    </div>

    <!-- ==============================================
         ANBU TRADERS — OUR 4 SPECIALIZED DIVISIONS (COMPACT SHOWCASE)
         ============================================== -->
    <section class="businesses-section site-section" id="businesses">
        <div class="container">
            <!-- Section Header -->
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
            </div>

            <!-- 4-Column Clean Showcase Grid -->
            <div class="biz-cards-row">
                
                <!-- CARD 1: CEMENTS -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.1s">
                    <div class="biz-clean-card card-cement">
                        <div class="biz-clean-visual">
                            <img src="img/opt/cement-1200.jpg" alt="Certified Construction Cements" class="biz-clean-img" width="600" height="335" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-cube"></i> Cements</span>
                            <span class="biz-clean-tag">OPC 53 &bull; PPC</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Construction Cements</h3>
                            <div class="biz-clean-brands">UltraTech &bull; Dalmia &bull; Ramco &bull; JSW</div>
                            <p class="biz-clean-desc">
                                Grade-53 high-strength cements and weatherproof composites with 100-Ton digital weighbridge slips.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="cement/anbucement/index-demo-3.html" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Cement." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD 2: TMT STEEL -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.15s">
                    <div class="biz-clean-card card-steel">
                        <div class="biz-clean-visual">
                            <img src="img/opt/steels-cement-1600.jpg" alt="Primary TMT Steel Rebars" class="biz-clean-img" width="600" height="335" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-layer-group"></i> TMT Steel</span>
                            <span class="biz-clean-tag">Fe 550D Billet</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Primary TMT Rebars</h3>
                            <div class="biz-clean-brands">Tata Tiscon &bull; JSW Neosteel &bull; Agni</div>
                            <p class="biz-clean-desc">
                                High-tensile Fe 550D earthquake-resistant billet rebars in straight 12m bundles with mill test certificates.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="cement/anbucement/index-demo-3.html#products" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20TMT%20Rods." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD 3: SHEETS & PIPES -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.2s">
                    <div class="biz-clean-card card-sheets">
                        <div class="biz-clean-visual">
                            <img src="img/opt/sheets-pipes-1200.jpg" alt="Colour-Coated Roofing Sheets & Hollow Pipes" class="biz-clean-img" width="600" height="335" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-warehouse"></i> Sheets &amp; Pipes</span>
                            <span class="biz-clean-tag">Galvalume &bull; GI</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Roofing &amp; Pipes</h3>
                            <div class="biz-clean-brands">JSW Colouron+ &bull; Tata &bull; Apollo Pipes</div>
                            <p class="biz-clean-desc">
                                Corrosion-resistant Galvalume roofing sheets, heavy MS square tubes, and GI pipes with site cutting.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="a-steel/index.html" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919655551468?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Roofing%20Sheets%20and%20Pipes." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD 4: PAINTS & MIXING -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.25s">
                    <div class="biz-clean-card card-paints">
                        <div class="biz-clean-visual">
                            <img src="img/opt/paints-cans-1000.jpg" alt="Paints & Computerized Shade Mixing" class="biz-clean-img" width="600" height="335" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-paint-roller"></i> Paints &amp; Mixing</span>
                            <span class="biz-clean-tag">2,000+ Shades</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Paints &amp; Colour Lab</h3>
                            <div class="biz-clean-brands">Asian Paints &bull; Berger &bull; JSW Paints</div>
                            <p class="biz-clean-desc">
                                Automated spectrophotometer shade dispenser for luxury emulsions, exterior guards, and waterproofing.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="anbu-paint/index.html" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325232?text=Hello%20Anbu%20Paints%2C%20I%20want%20a%20price%20quote%20for%20Paints%20and%20Color%20Mixing." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

${productsCatalogSection}

${whyChooseSection}

    <!-- ==============================================
         4-STEP LOGISTICS WORKFLOW TIMELINE
         ============================================== -->
    <section class="how-we-deliver-section site-section" id="workflow">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 680px;">
                <div class="why-eyebrow-pill">
                    <span class="why-pulsing-dot"></span>
                    <span>TRANSPARENT 4-STEP LOGISTICS</span>
                </div>
                <h2 class="display-6 fw-bold text-navy mt-2 mb-2">How We Deliver to Your Site</h2>
                <div class="biz-title-bar"></div>
                <p class="text-muted">A streamlined, transparent supply process from initial BOQ estimation to certified mechanical crane unloading.</p>
            </div>

            <div class="row g-4 align-items-stretch">
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="deliver-step-card">
                        <div class="deliver-step-badge">STEP 01</div>
                        <div class="deliver-step-icon icon-orange"><i class="fa fa-calculator"></i></div>
                        <h4 class="deliver-step-title">Estimation &amp; BOQ</h4>
                        <p class="deliver-step-desc">Share your material requirements or Bill of Quantities (BOQ). Our technical experts calculate optimal grades and best wholesale prices.</p>
                        <span class="deliver-step-tag">Instant Quote Desk</span>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="deliver-step-card">
                        <div class="deliver-step-badge">STEP 02</div>
                        <div class="deliver-step-icon icon-emerald"><i class="fa fa-balance-scale"></i></div>
                        <h4 class="deliver-step-title">100-Ton Weighment</h4>
                        <p class="deliver-step-desc">Vehicle loads are weighed on our calibrated 100-Ton digital electronic weighbridge. A computer-generated weight ticket is printed.</p>
                        <span class="deliver-step-tag">Zero Shortage</span>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="deliver-step-card">
                        <div class="deliver-step-badge">STEP 03</div>
                        <div class="deliver-step-icon icon-blue"><i class="fa fa-truck-moving"></i></div>
                        <h4 class="deliver-step-title">Fleet Site Dispatch</h4>
                        <p class="deliver-step-desc">Our dedicated transport fleet departs immediately for your project site, keeping your site engineering schedule uninterrupted.</p>
                        <span class="deliver-step-tag">Pondy &amp; TN Rapid Fleet</span>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="deliver-step-card">
                        <div class="deliver-step-badge">STEP 04</div>
                        <div class="deliver-step-icon icon-purple"><i class="fa fa-clipboard-check"></i></div>
                        <h4 class="deliver-step-title">Crane Offloading</h4>
                        <p class="deliver-step-desc">Materials are safely mechanically offloaded directly at your designated storage bay with invoice and mill test certificate handoff.</p>
                        <span class="deliver-step-tag">Mill Test Certified</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

${testimonialsSection}

    <!-- ==============================================
         HIGH-IMPACT PRE-FOOTER CTA BAND
         ============================================== -->
    <section class="anbu-cta-band-section" id="quick-enquiry">
        <div class="container">
            <div class="cta-gradient-box wow fadeInUp" data-wow-delay="0.1s">
                <div class="row align-items-center g-4">
                    <div class="col-lg-8">
                        <div class="cta-badge-pill">
                            <span class="hero-pulse-dot"></span> DIRECT DISPATCH DESK &bull; SEDARAPET DEPOT
                        </div>
                        <h2 class="cta-title">Ready to Supply Your Construction Project?</h2>
                        <p class="cta-subtext">Contact our sales engineers today for daily wholesale prices on Tata Tiscon, JSW Steel, UltraTech Cement, Roofing Sheets, and Asian Paints.</p>
                        <div class="cta-quick-contacts">
                            <span><i class="fa fa-clock text-warning me-1"></i> Mon–Sat: 8:00 AM – 8:00 PM</span>
                            <span class="ms-3"><i class="fa fa-map-marker-alt text-danger me-1"></i> Pondy-Mailam Road, Sedarapet</span>
                        </div>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <div class="cta-btn-group">
                            <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20would%20like%20to%20get%20live%20material%20rates%20for%20my%20site." target="_blank" rel="noopener" class="btn-cta-whatsapp">
                                <i class="fab fa-whatsapp me-2"></i> WhatsApp Dispatch
                            </a>
                            <a href="tel:+919626325204" class="btn-cta-call">
                                <i class="fa fa-phone-alt me-2"></i> Call: 96263 25204
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

${footerAndActions}

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>

    <!-- WhatsApp Quick Order Modal Script -->
    <script>
    document.addEventListener("DOMContentLoaded", function() {
      const popup = document.getElementById("popupForm");
      const closeBtn = document.querySelector(".close-btn");
      const productInput = document.getElementById("product");
      const form = document.getElementById("orderForm");

      document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function() {
          const productName = this.getAttribute("data-product");
          if (productInput) productInput.value = productName;
          if (popup) popup.style.display = "block";
        });
      });

      if (closeBtn && popup) {
        closeBtn.addEventListener("click", () => popup.style.display = "none");
        window.addEventListener("click", e => {
          if (e.target === popup) popup.style.display = "none";
        });
      }

      if (form) {
        form.addEventListener("submit", function(e) {
          e.preventDefault();
          const name = document.getElementById("name") ? document.getElementById("name").value : '';
          const phone = document.getElementById("phone") ? document.getElementById("phone").value : '';
          const address = document.getElementById("address") ? document.getElementById("address").value : '';
          const product = document.getElementById("product") ? document.getElementById("product").value : '';

          const message = \`Name: \${name}%0APhone: \${phone}%0AAddress: \${address}%0AProduct: \${product}\`;
          const whatsappURL = \`https://wa.me/+919994011468?text=\${message}\`;
          
          window.open(whatsappURL, "_blank");
          if (popup) popup.style.display = "none";
          form.reset();
        });
      }
    });
    </script>

    <!-- Featured Products Filter & Search Logic -->
    <script>
    (function() {
      function initProductsCatalog() {
        const filterBtns = document.querySelectorAll('.cat-filter-btn');
        const searchInput = document.getElementById('catalogSearch');
        const clearBtn = document.getElementById('catalogSearchClear');
        const resetBtn = document.getElementById('resetCatalogFilter');
        const products = document.querySelectorAll('#featuredProductsGrid .product');
        const noResults = document.getElementById('catalogNoResults');
        let currentFilter = 'all';

        function applyFilter() {
          const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
          if (clearBtn) {
            clearBtn.style.display = query.length > 0 ? 'inline-flex' : 'none';
          }

          let visibleCount = 0;
          products.forEach(function(card) {
            const cat = card.getAttribute('data-category') || '';
            const titleEl = card.querySelector('.product-title');
            const descEl = card.querySelector('.product-desc');
            const text = ((titleEl ? titleEl.textContent : '') + ' ' + (descEl ? descEl.textContent : '')).toLowerCase();

            const matchCat = (currentFilter === 'all') || (cat === currentFilter);
            const matchSearch = !query || text.indexOf(query) !== -1;

            if (matchCat && matchSearch) {
              card.classList.remove('is-hidden');
              visibleCount++;
            } else {
              card.classList.add('is-hidden');
            }
          });

          if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
          }
        }

        filterBtns.forEach(function(btn) {
          btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter') || 'all';
            applyFilter();
          });
        });

        if (searchInput) {
          searchInput.addEventListener('input', applyFilter);
        }

        if (clearBtn) {
          clearBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            applyFilter();
          });
        }

        if (resetBtn) {
          resetBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            currentFilter = 'all';
            filterBtns.forEach(function(b) {
              b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
            });
            applyFilter();
          });
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProductsCatalog);
      } else {
        initProductsCatalog();
      }
    })();
    </script>

    <!-- 2026 Interaction Engine (Reveal, Counters, Ripple, Parallax, Marquee, Shrinking Navbar) -->
    <script src="js/anbu-interactions.js"></script>
</body>

</html>
`;

fs.writeFileSync(indexPath, newIndexHtml);
console.log('Successfully rebuilt index.html! New length:', newIndexHtml.length);

