const fs = require('fs');

const projectHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Supplied Projects &amp; Infrastructure - Anbu Traders Pondicherry</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="View major construction projects supplied with certified TMT steel, high-grade cements, roofing sheets, and structural pipes by Anbu Traders across Pondicherry & Tamil Nadu.">
    <meta name="keywords" content="Anbu Traders projects, steel supplied projects, industrial shed materials Sedarapet, commercial builders Pondicherry, residential villas Auroville">

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
                        <a href="project.html" class="dropdown-item active">Projects</a>
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
                LANDMARK INFRASTRUCTURE SUPPLIED
            </span>
            <h1 class="hero-title-main">Construction Project Portfolio</h1>
            <p class="hero-subtitle-lead">
                Supplying verified high-strength TMT steel, certified grade cements, architectural roofing, and hollow structural sections to thousands of successful residential, commercial, and industrial sites across South India.
            </p>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">Projects</li>
            </ul>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="container-xxl py-5">
        <div class="container">
            <!-- Filter Bar -->
            <div class="project-filter-bar">
                <button class="project-filter-btn active" data-filter="all">All Projects</button>
                <button class="project-filter-btn" data-filter="industrial">Industrial Sheds</button>
                <button class="project-filter-btn" data-filter="residential">Residential Villas</button>
                <button class="project-filter-btn" data-filter="commercial">Commercial Complexes</button>
                <button class="project-filter-btn" data-filter="infrastructure">Infrastructure</button>
            </div>

            <!-- Bento Project Grid -->
            <div class="anbu-project-grid">

                <!-- Project 1: Industrial Warehouse Sheds -->
                <div class="anbu-project-card" data-category="industrial">
                    <div class="project-thumb-box">
                        <img src="img/project-1.jpg" alt="Pre-Engineered Industrial Warehouse Sheds">
                        <span class="project-category-badge">Industrial Shed</span>
                        <span class="project-location-chip"><i class="fa fa-map-marker-alt"></i> Sedarapet Industrial Estate</span>
                    </div>
                    <div class="project-card-body">
                        <h3 class="project-card-title">Pre-Engineered Warehouse Sheds</h3>
                        <p class="project-card-desc">Supplied complete roofing systems, structural MS hollow sections, and foundation steel for a 35,000 sq.ft industrial logistics warehouse.</p>
                        <div class="project-materials-list">
                            <div class="project-mat-label">Materials Supplied</div>
                            <div class="project-mat-chips">
                                <span class="mat-chip">JSW Pragati Blue Sheets</span>
                                <span class="mat-chip">APL Apollo Tubes</span>
                                <span class="mat-chip">Tata Tiscon Fe-550D</span>
                            </div>
                        </div>
                        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20have%20an%20Industrial%20Shed%20Project%20requirement." class="project-action-link" target="_blank" rel="noopener">
                            <span>Get Material Estimate</span>
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 2: Luxury Residential Coastal Villas -->
                <div class="anbu-project-card" data-category="residential">
                    <div class="project-thumb-box">
                        <img src="img/project-2.jpg" alt="Luxury Residential Coastal Villas">
                        <span class="project-category-badge">Residential Villa</span>
                        <span class="project-location-chip"><i class="fa fa-map-marker-alt"></i> Auroville / ECR Coast</span>
                    </div>
                    <div class="project-card-body">
                        <h3 class="project-card-title">Coastal Residential Enclave</h3>
                        <p class="project-card-desc">Delivered corrosion-resistant CRS earthquake-resistant rebars, waterproof PPC cement, and premium exterior protective coatings.</p>
                        <div class="project-materials-list">
                            <div class="project-mat-label">Materials Supplied</div>
                            <div class="project-mat-chips">
                                <span class="mat-chip">UltraTech Weatherguard PPC</span>
                                <span class="mat-chip">Agni 550D CRS Rebars</span>
                                <span class="mat-chip">Asian Paints Apex Ultima</span>
                            </div>
                        </div>
                        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20have%20a%20Residential%20Villa%20requirement." class="project-action-link" target="_blank" rel="noopener">
                            <span>Get Material Estimate</span>
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 3: Commercial & Retail Showroom Complex -->
                <div class="anbu-project-card" data-category="commercial">
                    <div class="project-thumb-box">
                        <img src="img/project-3.jpg" alt="Multi-Storey Commercial & Retail Complex">
                        <span class="project-category-badge">Commercial Complex</span>
                        <span class="project-location-chip"><i class="fa fa-map-marker-alt"></i> Puducherry Main Town</span>
                    </div>
                    <div class="project-card-body">
                        <h3 class="project-card-title">Multi-Storey Commercial Plaza</h3>
                        <p class="project-card-desc">Supplied heavy structural columns, 53-grade high compressive strength cement, and primary beam reinforcement steel on strict schedules.</p>
                        <div class="project-materials-list">
                            <div class="project-mat-label">Materials Supplied</div>
                            <div class="project-mat-chips">
                                <span class="mat-chip">Dalmia DSP 53 Grade</span>
                                <span class="mat-chip">Suryadev 550D TMT</span>
                                <span class="mat-chip">Berger PU Enamels</span>
                            </div>
                        </div>
                        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20have%20a%20Commercial%20Plaza%20requirement." class="project-action-link" target="_blank" rel="noopener">
                            <span>Get Material Estimate</span>
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 4: Bridge & Culvert Infrastructure -->
                <div class="anbu-project-card" data-category="infrastructure">
                    <div class="project-thumb-box">
                        <img src="img/project-4.jpg" alt="Bridge & Culvert Infrastructure">
                        <span class="project-category-badge">Civil Infrastructure</span>
                        <span class="project-location-chip"><i class="fa fa-map-marker-alt"></i> Villupuram - Pondy Corridor</span>
                    </div>
                    <div class="project-card-body">
                        <h3 class="project-card-title">Highway Drainage &amp; Culvert Slabs</h3>
                        <p class="project-card-desc">Heavy-tonnage certified deliveries of OPC 53 Grade cement and 25mm–32mm primary structural rebars with computerized weighbridge receipts.</p>
                        <div class="project-materials-list">
                            <div class="project-mat-label">Materials Supplied</div>
                            <div class="project-mat-chips">
                                <span class="mat-chip">Ramco Super OPC 53</span>
                                <span class="mat-chip">JSW Neosteel 550D</span>
                                <span class="mat-chip">Heavy MS Channels</span>
                            </div>
                        </div>
                        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20have%20an%20Infrastructure%20Project%20requirement." class="project-action-link" target="_blank" rel="noopener">
                            <span>Get Material Estimate</span>
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 5: Institutional Campus & Auditorium -->
                <div class="anbu-project-card" data-category="commercial">
                    <div class="project-thumb-box">
                        <img src="img/project-5.jpg" alt="Institutional Campus & Auditorium">
                        <span class="project-category-badge">Institutional</span>
                        <span class="project-location-chip"><i class="fa fa-map-marker-alt"></i> Kalapet Educational Hub</span>
                    </div>
                    <div class="project-card-body">
                        <h3 class="project-card-title">Educational Campus &amp; Hall</h3>
                        <p class="project-card-desc">Provided specialized color roofing sheets, truss tubes, and high-tensile TMT reinforcement for a 1,200-seat multi-purpose hall.</p>
                        <div class="project-materials-list">
                            <div class="project-mat-label">Materials Supplied</div>
                            <div class="project-mat-chips">
                                <span class="mat-chip">JSW Colouron+ Sheets</span>
                                <span class="mat-chip">Tata Structura Tubes</span>
                                <span class="mat-chip">JSW Concreel HD</span>
                            </div>
                        </div>
                        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20have%20an%20Institutional%20Project%20requirement." class="project-action-link" target="_blank" rel="noopener">
                            <span>Get Material Estimate</span>
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 6: Modern Healthcare & Diagnostics -->
                <div class="anbu-project-card" data-category="commercial">
                    <div class="project-thumb-box">
                        <img src="img/project-6.jpg" alt="Modern Healthcare & Diagnostics">
                        <span class="project-category-badge">Healthcare</span>
                        <span class="project-location-chip"><i class="fa fa-map-marker-alt"></i> Lawspet, Pondicherry</span>
                    </div>
                    <div class="project-card-body">
                        <h3 class="project-card-title">Healthcare &amp; Clinic Facility</h3>
                        <p class="project-card-desc">Supplied premium grade cements, fire-safe hollow steel sections, and antimicrobial interior emulsions for modern medical diagnostics.</p>
                        <div class="project-materials-list">
                            <div class="project-mat-label">Materials Supplied</div>
                            <div class="project-mat-chips">
                                <span class="mat-chip">UltraTech Super Cement</span>
                                <span class="mat-chip">Tata Tiscon 550D</span>
                                <span class="mat-chip">Asian Paints Royale Luxury</span>
                            </div>
                        </div>
                        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20have%20a%20Healthcare%20Project%20requirement." class="project-action-link" target="_blank" rel="noopener">
                            <span>Get Material Estimate</span>
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Custom BOQ Estimation CTA Banner -->
    <section class="container my-5">
        <div class="p-5 rounded-4 text-white text-center shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, var(--primary-navy) 0%, #031836 100%);">
            <h2 class="display-6 fw-bold mb-3 text-white">Planning Your Next Construction Project?</h2>
            <p class="lead mb-4 text-light mx-auto" style="max-width: 650px;">
                Send us your structural drawings or Bill of Quantities (BOQ). Our technical team will calculate exact tonnage and deliver competitive factory-direct wholesale pricing.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
                <a href="tel:+919626325204" class="btn btn-primary btn-lg px-4 py-3 fw-bold">
                    <i class="fa fa-phone-alt me-2"></i>Call Sales Desk: +91 96263 25204
                </a>
                <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20send%20my%20Project%20BOQ%20for%20rate%20estimation." class="btn btn-success btn-lg px-4 py-3 fw-bold" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp me-2"></i>Submit BOQ on WhatsApp
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
    <script>
        // Project category filter logic
        document.querySelectorAll('.project-filter-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                document.querySelectorAll('.anbu-project-card').forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    </script>
</body>

</html>
`;

fs.writeFileSync('project.html', projectHtml, 'utf8');
console.log('project.html rebuilt successfully!');

