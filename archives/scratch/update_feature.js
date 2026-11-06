const fs = require('fs');

const featureHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Why Choose Anbu Traders - Certified Quality &amp; Weighbridge Assurance</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Discover why contractors, civil engineers, and homeowners trust Anbu Traders in Pondicherry. Factory-direct BIS certified steel, 100-ton computerized weighbridge, and dedicated crane delivery.">
    <meta name="keywords" content="Why choose Anbu Traders, best steel supplier Pondicherry, certified cement dealer, accurate weighbridge, building material trust">

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="img/icon.png">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/brand-flex-carousel.css" rel="stylesheet">
</head>

<body>

    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-0">
        <div class="row g-0 d-none d-lg-flex">
            <div class="col-lg-6 ps-5 text-start">
                <div class="h-100 d-inline-flex align-items-center text-white">
                    <span>Follow Us:</span>
                    <a class="btn btn-link text-light" href="https://www.facebook.com/people/Anbu-Traders-Pondy/61574478773419/" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-link text-light" href="https://www.youtube.com/@anbutraders1353" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-link text-light" href="https://www.instagram.com/anbutraders_?igsh=MWY1cGtmOWFhejIyZA%3D%3D&utm_source=qr" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-6 text-end">
                <div class="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <a href="tel:+919626325204" class="topbar-call-link d-inline-flex align-items-center text-white text-decoration-none fw-bold fs-5" title="Click to Call Anbu Traders directly">
                        <i class="fa fa-phone-alt me-2 text-white"></i>
                        <span>Call Us: +91 96263 25204</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" class="navbar-brand ps-5 me-0 d-flex align-items-center">
            <img id="anbu-navbar-logo" src="img/ANUBU STEEL.png" alt="Anbu Traders Logo" style="height: 90px;width: 90px;">
        </a>
        
        <div class="d-flex align-items-center ms-auto me-2 d-lg-none gap-2">
            <a href="tel:+919626325204" class="btn btn-primary btn-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;" title="Call +91 96263 25204" aria-label="Call Now">
                <i class="fa fa-phone-alt text-white"></i>
            </a>
        </div>
        <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Businesses</a>
                    <div class="dropdown-menu bg-light m-0 shadow-sm">
                        <a href="./a-steel/index.html" class="dropdown-item">Sheets and Pipes</a>
                        <a href="./anbu-paint/index.html" class="dropdown-item">Paints</a>
                        <a href="cement/anbucement/index-demo-3.html" class="dropdown-item">Steels &amp; Cement</a>
                    </div>
                </div>
                <a href="index.html#products" class="nav-item nav-link">Products</a>
                <a href="service.html" class="nav-item nav-link">Services</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">More</a>
                    <div class="dropdown-menu bg-light m-0 shadow-sm">
                        <a href="project.html" class="dropdown-item">Projects</a>
                        <a href="feature.html" class="dropdown-item active">Why Choose Us</a>
                        <a href="team.html" class="dropdown-item">Our Organization</a>
                        <a href="testimonial.html" class="dropdown-item">Client Reviews</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a>
                <a href="tel:+919626325204" class="nav-item nav-link d-lg-none text-brand-orange fw-bold">
                    <i class="fa fa-phone-alt me-2"></i>Call: +91 96263 25204
                </a>
            </div>
            <div class="d-none d-lg-flex align-items-center gap-2">
                <a href="tel:+919626325204" class="btn btn-call-nav" title="Call Anbu Traders directly">
                    <i class="fa fa-phone-alt"></i>
                    <span>+91 96263 25204</span>
                </a>
                <a href="https://wa.me/9626325204?text=Hello, I would like to enquire about your cement, steel, and pipes prices and availability." class="btn btn-primary btn-glow btn-ripple px-4 py-2" target="_blank" rel="noopener">
                    Enquiry
                </a>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->

    <!-- Page Hero Banner -->
    <section class="anbu-page-hero">
        <div class="container">
            <span class="hero-badge-pill">
                <span class="pulse-dot"></span>
                THE ANBU ADVANTAGE
            </span>
            <h1 class="hero-title-main">Why Builders &amp; Contractors Choose Us</h1>
            <p class="hero-subtitle-lead">
                Setting the benchmark for construction material supply in Pondicherry and Tamil Nadu through certified mill origin, computerized weighment precision, direct wholesale pricing, and dedicated crane fleet logistics.
            </p>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">Why Choose Us</li>
            </ul>
        </div>
    </section>

    <!-- 6 Core Value Pillars (Bento Grid) -->
    <section class="anbu-features-section">
        <div class="container">
            <div class="text-center mx-auto mb-4" style="max-width: 650px;">
                <span class="hero-badge-pill" style="color: var(--primary-orange); border-color: rgba(243, 106, 33, 0.3); background: rgba(243, 106, 33, 0.08);">
                    OUR SIX PILLARS OF TRUST
                </span>
                <h2 class="display-6 fw-bold text-navy mt-2 mb-2">Uncompromising Structural Integrity</h2>
                <p class="text-muted">Every order fulfilled by Anbu Traders is backed by transparent verification and engineering standards.</p>
            </div>

            <div class="anbu-feature-grid">

                <!-- Pillar 1 -->
                <div class="anbu-feature-card">
                    <div class="feature-icon-wrapper icon-orange">
                        <i class="fa fa-certificate"></i>
                    </div>
                    <h3 class="feature-card-title">100% Certified BIS Mill Material</h3>
                    <p class="feature-card-desc">We stock only primary and authorized mill materials with zero compromise. Mill test certificates from Tata Tiscon, JSW, UltraTech, and Dalmia are provided for every batch.</p>
                    <ul class="feature-check-list">
                        <li><i class="fa fa-check-circle"></i> Direct factory consignment with batch traceability</li>
                        <li><i class="fa fa-check-circle"></i> Fe 500D, Fe 550D &amp; CRS standard compliant</li>
                        <li><i class="fa fa-check-circle"></i> Guaranteed zero re-rolled or substandard steel</li>
                    </ul>
                </div>

                <!-- Pillar 2 -->
                <div class="anbu-feature-card">
                    <div class="feature-icon-wrapper icon-navy">
                        <i class="fa fa-balance-scale"></i>
                    </div>
                    <h3 class="feature-card-title">100-Ton Digital Weighbridge</h3>
                    <p class="feature-card-desc">Our facility operates an advanced computerized electronic weighbridge. Every dispatch receives a computer-printed weight ticket with zero calculation discrepancy.</p>
                    <ul class="feature-check-list">
                        <li><i class="fa fa-check-circle"></i> Tare &amp; gross weight verification on every delivery</li>
                        <li><i class="fa fa-check-circle"></i> Government weights &amp; measures certified calibration</li>
                        <li><i class="fa fa-check-circle"></i> Complete billing transparency with no hidden short-weight</li>
                    </ul>
                </div>

                <!-- Pillar 3 -->
                <div class="anbu-feature-card">
                    <div class="feature-icon-wrapper icon-green">
                        <i class="fa fa-tags"></i>
                    </div>
                    <h3 class="feature-card-title">Direct Factory Wholesale Rates</h3>
                    <p class="feature-card-desc">As direct first-tier authorized distributors, we procure in high-volume railway rakes and pass substantial pricing advantages directly to our customers.</p>
                    <ul class="feature-check-list">
                        <li><i class="fa fa-check-circle"></i> Eliminates intermediary agent commissions</li>
                        <li><i class="fa fa-check-circle"></i> Tiered discounts for large-scale builder projects</li>
                        <li><i class="fa fa-check-circle"></i> Real-time daily market rate transparency</li>
                    </ul>
                </div>

                <!-- Pillar 4 -->
                <div class="anbu-feature-card">
                    <div class="feature-icon-wrapper icon-blue">
                        <i class="fa fa-truck-moving"></i>
                    </div>
                    <h3 class="feature-card-title">Fleet Logistics &amp; Crane Unloading</h3>
                    <p class="feature-card-desc">Our dedicated transport fleet includes heavy articulated lorries and truck-mounted cranes to deliver directly into difficult site bays with minimum turnaround.</p>
                    <ul class="feature-check-list">
                        <li><i class="fa fa-check-circle"></i> Same-day and zero-hour site dispatch</li>
                        <li><i class="fa fa-check-circle"></i> Mechanical crane offloading prevents material bending</li>
                        <li><i class="fa fa-check-circle"></i> Seamless delivery across Pondicherry, Cuddalore &amp; TN</li>
                    </ul>
                </div>

                <!-- Pillar 5 -->
                <div class="anbu-feature-card">
                    <div class="feature-icon-wrapper icon-orange">
                        <i class="fa fa-palette"></i>
                    </div>
                    <h3 class="feature-card-title">Computerized Color Showroom</h3>
                    <p class="feature-card-desc">Our flagship Anbu Paints division offers instantaneous computerized shade dispensing for over 2,000+ interior, exterior, and protective industrial coatings.</p>
                    <ul class="feature-check-list">
                        <li><i class="fa fa-check-circle"></i> Authorized Asian Paints, JSW Paints &amp; Berger center</li>
                        <li><i class="fa fa-check-circle"></i> Spectrophotometer digital color matching</li>
                        <li><i class="fa fa-check-circle"></i> Waterproofing and masonry chemical experts</li>
                    </ul>
                </div>

                <!-- Pillar 6 -->
                <div class="anbu-feature-card">
                    <div class="feature-icon-wrapper icon-navy">
                        <i class="fa fa-cubes"></i>
                    </div>
                    <h3 class="feature-card-title">Consolidated Structural Supply</h3>
                    <p class="feature-card-desc">Save procurement management time by sourcing everything from foundational rebars and cements to roofing sheets, pipes, and finishing coats under one trusted invoice.</p>
                    <ul class="feature-check-list">
                        <li><i class="fa fa-check-circle"></i> 3,000+ SKUs in continuous warehouse stock</li>
                        <li><i class="fa fa-check-circle"></i> Single billing account and unified project tracking</li>
                        <li><i class="fa fa-check-circle"></i> Over 11+ years serving Pondicherry &amp; Tamil Nadu</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <!-- Stats Ribbon -->
    <div class="container facts-simple-wrapper my-5">
        <div class="facts-simple-bar shadow-sm rounded-4 border bg-white p-4">
            <div class="row align-items-center g-0">
                <div class="col-6 col-lg-3 text-center p-3">
                    <div class="stat-simple-icon text-primary fs-2 mb-2"><i class="fa fa-award"></i></div>
                    <div class="display-6 fw-bold text-navy"><span data-toggle="counter-up">11</span><span class="text-primary">+</span></div>
                    <div class="text-muted fw-semibold small">Years Experience</div>
                </div>
                <div class="col-6 col-lg-3 text-center p-3 border-start">
                    <div class="stat-simple-icon text-primary fs-2 mb-2"><i class="fa fa-cubes"></i></div>
                    <div class="display-6 fw-bold text-navy"><span data-toggle="counter-up">3000</span><span class="text-primary">+</span></div>
                    <div class="text-muted fw-semibold small">Products Available</div>
                </div>
                <div class="col-6 col-lg-3 text-center p-3 border-start">
                    <div class="stat-simple-icon text-primary fs-2 mb-2"><i class="fa fa-users"></i></div>
                    <div class="display-6 fw-bold text-navy"><span data-toggle="counter-up">1</span><span class="fs-4 text-navy"> Lakh</span><span class="text-primary">+</span></div>
                    <div class="text-muted fw-semibold small">Satisfied Clients</div>
                </div>
                <div class="col-6 col-lg-3 text-center p-3 border-start">
                    <div class="stat-simple-icon text-primary fs-2 mb-2"><i class="fa fa-check-double"></i></div>
                    <div class="display-6 fw-bold text-navy"><span data-toggle="counter-up">10000</span><span class="text-primary">+</span></div>
                    <div class="text-muted fw-semibold small">Sites Fulfilled</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Direct Action Banner -->
    <section class="container my-5">
        <div class="p-5 rounded-4 text-white text-center shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, var(--primary-navy) 0%, #031836 100%);">
            <h2 class="display-6 fw-bold mb-3 text-white">Experience the Anbu Traders Standard Today</h2>
            <p class="lead mb-4 text-light mx-auto" style="max-width: 650px;">
                Connect with our technical desk for certified mill quotes, custom order scheduling, and weighbridge verification details.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
                <a href="tel:+919626325204" class="btn btn-primary btn-lg px-4 py-3 fw-bold">
                    <i class="fa fa-phone-alt me-2"></i>Call: +91 96263 25204
                </a>
                <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20know%20more%20about%20your%20materials%20and%20rates." class="btn btn-success btn-lg px-4 py-3 fw-bold" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp me-2"></i>Chat on WhatsApp
                </a>
            </div>
        </div>
    </section>

    <!-- Unified Footer Start -->
    <footer class="anbu-unified-footer">
        <div class="anbu-footer-container">
            <div class="anbu-footer-grid">
                <!-- Brand Column -->
                <div class="anbu-footer-col anbu-footer-brand-col">
                    <a href="index.html" class="anbu-footer-logo-badge logo-main-site" aria-label="Anbu Traders Logo">
                        <img src="img/ANUBU STEEL.png" alt="Anbu Traders Logo" class="anbu-footer-logo-img logo-main-padded" loading="lazy">
                    </a>
                    <p class="anbu-footer-brand-desc">Puducherry &amp; Tamil Nadu's trusted wholesale &amp; retail partner for Steel, Cement, Roofing Sheets, Pipes &amp; Paints.</p>
                    <div class="anbu-footer-socials">
                        <a class="anbu-footer-social-link" href="https://www.instagram.com/anbutraders_?igsh=MWY1cGtmOWFhejIyZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="anbu-footer-social-link" href="https://www.facebook.com/people/Anbu-Traders-Pondy/61574478773419/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="anbu-footer-social-link" href="https://www.youtube.com/@anbutraders1353" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <!-- Office Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Our Office</h5>
                    <div class="anbu-footer-info-item">
                        <span class="anbu-footer-icon"><i class="fa fa-map-marker-alt"></i></span>
                        <span>No.76/3, Pondy - Mailam Main Road, Sedarapet, Tamil Nadu 605111</span>
                    </div>
                    <div class="anbu-footer-info-item">
                        <span class="anbu-footer-icon"><i class="fa fa-phone-alt"></i></span>
                        <span><a href="tel:+919626325204">+91 96263 25204</a> / <a href="tel:+919655551468">+91 96555 51468</a></span>
                    </div>
                    <div class="anbu-footer-info-item">
                        <span class="anbu-footer-icon"><i class="fa fa-envelope"></i></span>
                        <span><a href="mailto:anbutraders1468@gmail.com">anbutraders1468@gmail.com</a></span>
                    </div>
                </div>

                <!-- Quick Links Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Quick Links</h5>
                    <div class="anbu-footer-links">
                        <a class="anbu-footer-link" href="about.html">About Us</a>
                        <a class="anbu-footer-link" href="contact.html">Contact Us</a>
                        <a class="anbu-footer-link" href="service.html">Our Services</a>
                        <a class="anbu-footer-link" href="project.html">Projects</a>
                        <a class="anbu-footer-link" href="feature.html">Why Choose Us</a>
                        <a class="anbu-footer-link" href="testimonial.html">Client Reviews</a>
                    </div>
                </div>

                <!-- Business Hours Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Business Hours</h5>
                    <p class="anbu-footer-hours-day">Monday - Saturday</p>
                    <p class="anbu-footer-hours-time">08:00 am - 08:00 pm</p>
                    <p class="anbu-footer-hours-day">Sunday</p>
                    <p class="anbu-footer-hours-time" style="margin-bottom: 0 !important;">08:00 am - 02:30 pm</p>
                </div>

                <!-- Google Review Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Leave a Review</h5>
                    <p class="anbu-footer-review-text">We value your feedback! Rate your experience with Anbu Traders on Google.</p>
                    <a href="https://maps.app.goo.gl/NRr4yAn8EpVjEPzx5" target="_blank" rel="noopener noreferrer" class="anbu-footer-review-cta">
                        <i class="fab fa-google me-2"></i>Review on Google
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->

    <!-- Copyright Start -->
    <div class="anbu-unified-copyright">
        <div class="anbu-footer-container">
            <div class="anbu-copyright-inner">
                <p>Copyright &copy; 2026 <a class="anbu-copyright-highlight" href="index.html">Anbu Traders</a>. All Rights Reserved.</p>
                <p>Leading Construction Materials Stockist in Puducherry &amp; Tamil Nadu</p>
            </div>
        </div>
    </div>
    <!-- Copyright End -->

    <!-- Floating WhatsApp Action -->
    <div class="floating-actions">
        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20your%20products." class="floating-btn floating-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" aria-label="Back to Top"><i class="bi bi-arrow-up"></i></a>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>

    <!-- Template Javascript & 2026 Interaction Engine -->
    <script src="js/anbu-interactions.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
`;

fs.writeFileSync('feature.html', featureHtml, 'utf8');
console.log('feature.html rebuilt successfully!');

