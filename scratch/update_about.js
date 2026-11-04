const fs = require('fs');

const aboutHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>About Us - Anbu Traders | Steel, Cement & Paints Depot Pondicherry</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn about Anbu Traders, founded in 2014 in Pondicherry. Authorized stockist and wholesale distributor of premium steel, cement, roofing sheets, pipes, and paints.">
    <meta name="keywords" content="About Anbu Traders, steel stockist Pondicherry, cement wholesale dealer, building materials distributor, Sedarapet, Vanur, construction supply">

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
                <a href="about.html" class="nav-item nav-link active">About</a>
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
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                    <div class="dropdown-menu bg-light m-0 shadow-sm">
                        <a href="project.html" class="dropdown-item">Projects</a>
                        <a href="feature.html" class="dropdown-item">Why Choose Us</a>
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
                ESTD. 2014 &bull; 11+ YEARS OF TRUST
            </span>
            <h1 class="hero-title-main">About Anbu Traders</h1>
            <p class="hero-subtitle-lead">
                From foundational TMT steel and certified grade cements to architectural roofing sheets, hollow sections, and luxury paints — we supply the strength behind Pondicherry &amp; Tamil Nadu's finest structures.
            </p>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">About Us</li>
            </ul>
        </div>
    </section>

    <!-- Main About Showcase Section -->
    <section class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <!-- Images Column with Modern Floating Frames -->
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="about-hero-showcase position-relative">
                        <div class="about-main-frame shadow-lg rounded-3 overflow-hidden border">
                            <img src="img/anbu-main-shop.jpg" alt="Anbu Traders Main Branch - Steel & Cement Depot" class="about-primary-img img-fluid w-100">
                        </div>
                        <div class="about-overlap-frame d-none d-sm-block shadow-lg rounded-3 overflow-hidden border position-absolute" style="bottom: -25px; right: -25px; width: 62%; z-index: 2;">
                            <img src="img/paintshop.jpg" alt="Anbu Paints Division Showroom" class="about-sub-img img-fluid w-100">
                        </div>
                    </div>
                </div>

                <!-- Content Column -->
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.4s">
                    <div class="section-badge-pill mb-2">
                        <i class="fa fa-award me-2 text-primary"></i> CERTIFIED WHOLESALE STOCKIST
                    </div>
                    <h2 class="display-6 fw-bold mb-4 text-navy">Welcome to Anbu Traders</h2>
                    <p class="lead text-secondary mb-3">
                        Founded in 2014 as a proprietary enterprise in Pondicherry, Anbu Traders has steadily evolved into one of the region's most reputable wholesale and retail distributors of heavy structural building supplies.
                    </p>
                    <p class="text-secondary mb-4">
                        Over more than a decade of dedicated service, our unwavering commitment to factory-direct genuine materials, certified BIS standards, and computerized weighment has earned accolades from major infrastructure corporations, developers, civil contractors, and thousands of private homeowners.
                    </p>

                    <!-- Trust Checklist -->
                    <div class="row g-3 mb-4">
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-check-circle text-primary fs-5 me-2"></i>
                                <span class="fw-semibold text-dark">Authorized Mill Distributor</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-check-circle text-primary fs-5 me-2"></i>
                                <span class="fw-semibold text-dark">100-Ton Electronic Weighbridge</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-check-circle text-primary fs-5 me-2"></i>
                                <span class="fw-semibold text-dark">Zero Stale Cement Rake Supply</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-check-circle text-primary fs-5 me-2"></i>
                                <span class="fw-semibold text-dark">Own Heavy Delivery Fleet</span>
                            </div>
                        </div>
                    </div>

                    <!-- Direct Contact Strip -->
                    <div class="row g-3 pt-2 align-items-center about-contact-strip border-top">
                        <div class="col-12 col-sm-auto me-sm-4">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;">
                                    <i class="fa fa-envelope-open"></i>
                                </div>
                                <div class="ms-3">
                                    <span class="d-block text-muted text-uppercase fw-semibold" style="font-size: 0.75rem; letter-spacing: 0.5px;">Email us</span>
                                    <a href="mailto:anbutraders1468@gmail.com" class="fw-bold text-dark text-decoration-none email-link" style="font-size: 0.95rem;">anbutraders1468@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-auto">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;">
                                    <i class="fa fa-phone-alt"></i>
                                </div>
                                <div class="ms-3">
                                    <span class="d-block text-muted text-uppercase fw-semibold" style="font-size: 0.75rem; letter-spacing: 0.5px;">Call us</span>
                                    <a href="tel:+919626325204" class="fw-bold text-dark text-decoration-none phone-link" style="font-size: 1rem;">+91 96263 25204</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Clean & Simple Stats Strip (Elevated 2026 Floating Card) -->
    <div class="container facts-simple-wrapper my-5">
        <div class="facts-simple-bar shadow-sm rounded-4 border bg-white p-4">
            <div class="row align-items-center g-0">
                <!-- Stat 1: 11+ Years Experience -->
                <div class="col-6 col-lg-3 stat-item-simple text-center p-3">
                    <div class="stat-simple-icon text-primary fs-2 mb-2">
                        <i class="fa fa-award"></i>
                    </div>
                    <div class="stat-simple-number display-6 fw-bold text-navy">
                        <span data-toggle="counter-up">11</span><span class="stat-simple-plus text-primary">+</span>
                    </div>
                    <div class="stat-simple-label text-muted fw-semibold">Years Experience</div>
                </div>

                <!-- Stat 2: 3000+ Products -->
                <div class="col-6 col-lg-3 stat-item-simple stat-divider text-center p-3 border-start">
                    <div class="stat-simple-icon text-primary fs-2 mb-2">
                        <i class="fa fa-cubes"></i>
                    </div>
                    <div class="stat-simple-number display-6 fw-bold text-navy">
                        <span data-toggle="counter-up">3000</span><span class="stat-simple-plus text-primary">+</span>
                    </div>
                    <div class="stat-simple-label text-muted fw-semibold">Product Range</div>
                </div>

                <!-- Stat 3: 1 Lakh+ Happy Clients -->
                <div class="col-6 col-lg-3 stat-item-simple stat-divider text-center p-3 border-start">
                    <div class="stat-simple-icon text-primary fs-2 mb-2">
                        <i class="fa fa-users"></i>
                    </div>
                    <div class="stat-simple-number display-6 fw-bold text-navy">
                        <span data-toggle="counter-up">1</span><span class="stat-simple-unit fs-4 text-navy"> Lakh</span><span class="stat-simple-plus text-primary">+</span>
                    </div>
                    <div class="stat-simple-label text-muted fw-semibold">Happy Clients</div>
                </div>

                <!-- Stat 4: 10,000+ Projects Done -->
                <div class="col-6 col-lg-3 stat-item-simple stat-divider text-center p-3 border-start">
                    <div class="stat-simple-icon text-primary fs-2 mb-2">
                        <i class="fa fa-check-double"></i>
                    </div>
                    <div class="stat-simple-number display-6 fw-bold text-navy">
                        <span data-toggle="counter-up">10000</span><span class="stat-simple-plus text-primary">+</span>
                    </div>
                    <div class="stat-simple-label text-muted fw-semibold">Deliveries Fulfilled</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4 Operational Pillars Grid -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 650px;">
                <span class="hero-badge-pill" style="color: var(--primary-orange); border-color: rgba(243, 106, 33, 0.3); background: rgba(243, 106, 33, 0.08);">
                    OUR OPERATIONAL EXCELLENCE
                </span>
                <h2 class="display-6 fw-bold text-navy mt-2">Why Anbu Traders Stands Apart</h2>
                <p class="text-muted">Built on rigorous standards of quality, transparency, and client satisfaction.</p>
            </div>

            <div class="row g-4">
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white text-center">
                        <div class="feature-icon-wrapper icon-orange mx-auto mb-3">
                            <i class="fa fa-shield-alt"></i>
                        </div>
                        <h4 class="h5 fw-bold text-navy mb-2">100% BIS Certified</h4>
                        <p class="text-secondary small mb-0">Every batch of TMT steel and cement comes with original manufacturer test certificates guaranteeing strength specifications.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white text-center">
                        <div class="feature-icon-wrapper icon-blue mx-auto mb-3">
                            <i class="fa fa-balance-scale"></i>
                        </div>
                        <h4 class="h5 fw-bold text-navy mb-2">100-Ton Weighbridge</h4>
                        <p class="text-secondary small mb-0">Our dedicated digital weighbridge delivers transparent computerized weight slips with zero human calculation error.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white text-center">
                        <div class="feature-icon-wrapper icon-green mx-auto mb-3">
                            <i class="fa fa-truck-moving"></i>
                        </div>
                        <h4 class="h5 fw-bold text-navy mb-2">Dedicated Fleet</h4>
                        <p class="text-secondary small mb-0">Heavy vehicle fleet with crane offloading ensures rapid, safe, and undamaged direct-to-site delivery across the state.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white text-center">
                        <div class="feature-icon-wrapper icon-navy mx-auto mb-3">
                            <i class="fa fa-tags"></i>
                        </div>
                        <h4 class="h5 fw-bold text-navy mb-2">Factory Direct Rates</h4>
                        <p class="text-secondary small mb-0">Direct distributor tier agreements eliminate intermediaries, providing the most competitive wholesale rates in the market.</p>
                    </div>
                </div>
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

fs.writeFileSync('about.html', aboutHtml, 'utf8');
console.log('about.html rebuilt successfully!');

