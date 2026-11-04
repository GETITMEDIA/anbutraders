const fs = require('fs');

const teamHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Our Organization &amp; Dedicated Teams - Anbu Traders</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Meet the specialized management, technical advisory, and logistics dispatch teams behind Anbu Traders in Pondicherry. Round-the-clock service for civil contractors and builders.">
    <meta name="keywords" content="Anbu Traders team, steel sales staff Pondicherry, cement dispatch team, weighbridge operators Sedarapet, construction supply customer support">

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
                        <a href="feature.html" class="dropdown-item">Why Choose Us</a>
                        <a href="team.html" class="dropdown-item active">Our Organization</a>
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
                DEDICATED TECHNICAL &amp; DISPATCH TEAMS
            </span>
            <h1 class="hero-title-main">Our Organization &amp; Customer Support</h1>
            <p class="hero-subtitle-lead">
                Behind every timely site delivery and certified weighbridge slip is a specialized team of steel metallurgists, concrete advisors, showroom consultants, and heavy fleet logistics coordinators.
            </p>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">Our Organization</li>
            </ul>
        </div>
    </section>

    <!-- Organization Departments Section -->
    <section class="anbu-team-section">
        <div class="container">
            <div class="text-center mx-auto mb-4" style="max-width: 650px;">
                <span class="hero-badge-pill" style="color: var(--primary-orange); border-color: rgba(243, 106, 33, 0.3); background: rgba(243, 106, 33, 0.08);">
                    SPECIALIZED DIVISIONS
                </span>
                <h2 class="display-6 fw-bold text-navy mt-2 mb-2">Dedicated Departments at Your Service</h2>
                <p class="text-muted">Direct contact with the exact professionals managing your construction materials.</p>
            </div>

            <div class="anbu-team-grid">

                <!-- Department 1 -->
                <div class="anbu-team-card">
                    <div class="team-dept-icon">
                        <i class="fa fa-user-tie"></i>
                    </div>
                    <h3 class="team-card-title">Executive Management</h3>
                    <span class="team-role-pill">Direct Mill Contracting</span>
                    <p class="team-dept-desc">Coordinates corporate builder agreements, manufacturer railway rake allotments, and large-scale infrastructure supply partnerships.</p>
                    <ul class="team-dept-highlights">
                        <li><i class="fa fa-check"></i> High-volume wholesale agreements</li>
                        <li><i class="fa fa-check"></i> Manufacturer direct tier-1 pricing</li>
                        <li><i class="fa fa-check"></i> Corporate billing &amp; credit facilities</li>
                    </ul>
                    <a href="tel:+919626325204" class="team-dept-cta">
                        <i class="fa fa-phone-alt"></i> Contact Management
                    </a>
                </div>

                <!-- Department 2 -->
                <div class="anbu-team-card">
                    <div class="team-dept-icon">
                        <i class="fa fa-layer-group"></i>
                    </div>
                    <h3 class="team-card-title">Steel Technical Advisory</h3>
                    <span class="team-role-pill">Rebars &bull; Tubes &bull; Sheets</span>
                    <p class="team-dept-desc">Assists civil engineers, contractors, and fabricators in selecting Fe 500D, Fe 550D, CRS grades, and exact structural tube gauges.</p>
                    <ul class="team-dept-highlights">
                        <li><i class="fa fa-check"></i> Structural drawing BOQ estimation</li>
                        <li><i class="fa fa-check"></i> BIS mill test certificate handoff</li>
                        <li><i class="fa fa-check"></i> Custom length cutting coordination</li>
                    </ul>
                    <a href="tel:+919626325204" class="team-dept-cta">
                        <i class="fa fa-phone-alt"></i> Call Steel Desk
                    </a>
                </div>

                <!-- Department 3 -->
                <div class="anbu-team-card">
                    <div class="team-dept-icon">
                        <i class="fa fa-cube"></i>
                    </div>
                    <h3 class="team-card-title">Cement &amp; Foundation Team</h3>
                    <span class="team-role-pill">OPC 53 &bull; PPC &bull; AAC Blocks</span>
                    <p class="team-dept-desc">Ensures structural foundation integrity by recommending optimal concrete grades and moisture-resistant cement formulations.</p>
                    <ul class="team-dept-highlights">
                        <li><i class="fa fa-check"></i> Fresh rake inventory verification</li>
                        <li><i class="fa fa-check"></i> High compressive strength advisory</li>
                        <li><i class="fa fa-check"></i> Waterproofing chemical guidance</li>
                    </ul>
                    <a href="tel:+919626325204" class="team-dept-cta">
                        <i class="fa fa-phone-alt"></i> Call Cement Desk
                    </a>
                </div>

                <!-- Department 4 -->
                <div class="anbu-team-card">
                    <div class="team-dept-icon">
                        <i class="fa fa-truck-moving"></i>
                    </div>
                    <h3 class="team-card-title">Dispatch &amp; Weighbridge</h3>
                    <span class="team-role-pill">100-Ton Weighbridge &bull; Fleet</span>
                    <p class="team-dept-desc">Operates our calibrated digital electronic weighbridge and orchestrates articulated trucks and cranes for prompt site offloading.</p>
                    <ul class="team-dept-highlights">
                        <li><i class="fa fa-check"></i> Computerized weight ticket printing</li>
                        <li><i class="fa fa-check"></i> GPS site dispatch tracking</li>
                        <li><i class="fa fa-check"></i> Specialized mechanical crane unloading</li>
                    </ul>
                    <a href="tel:+919655551468" class="team-dept-cta">
                        <i class="fa fa-phone-alt"></i> Call Dispatch Desk
                    </a>
                </div>

            </div>
        </div>
    </section>

    <!-- Operational Values Ribbon -->
    <section class="container my-5">
        <div class="p-5 rounded-4 bg-light border">
            <div class="row g-4 text-center">
                <div class="col-6 col-lg-3">
                    <div class="text-primary fs-2 mb-2"><i class="fa fa-shield-alt"></i></div>
                    <h5 class="fw-bold text-navy mb-1">Total Integrity</h5>
                    <p class="text-muted small mb-0">100% genuine origin with zero counterfeit or re-rolled material.</p>
                </div>
                <div class="col-6 col-lg-3 border-start">
                    <div class="text-primary fs-2 mb-2"><i class="fa fa-balance-scale"></i></div>
                    <h5 class="fw-bold text-navy mb-1">True Weight</h5>
                    <p class="text-muted small mb-0">Computer-printed digital slips with tare and gross weight verification.</p>
                </div>
                <div class="col-6 col-lg-3 border-start">
                    <div class="text-primary fs-2 mb-2"><i class="fa fa-shipping-fast"></i></div>
                    <h5 class="fw-bold text-navy mb-1">On-Time Dispatch</h5>
                    <p class="text-muted small mb-0">Direct site delivery with crane offloading to prevent project delays.</p>
                </div>
                <div class="col-6 col-lg-3 border-start">
                    <div class="text-primary fs-2 mb-2"><i class="fa fa-handshake"></i></div>
                    <h5 class="fw-bold text-navy mb-1">Lasting Trust</h5>
                    <p class="text-muted small mb-0">11+ years serving builders, contractors, and individuals with pride.</p>
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

fs.writeFileSync('team.html', teamHtml, 'utf8');
console.log('team.html rebuilt successfully!');

