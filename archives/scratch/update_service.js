const fs = require('fs');

const serviceHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Our Services - Anbu Traders | Steel, Cement & Wholesale Fleet Logistics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Explore Anbu Traders' supply and logistics services in Pondicherry & Tamil Nadu. Primary TMT steel reinforcement, direct factory cement supply, and heavy fleet transport with 100-ton computerized weighbridge.">
    <meta name="keywords" content="Steel supply Pondicherry, Cement supply Tamil Nadu, TMT rebars wholesale, crane delivery, 100 ton weighbridge, Anbu Traders services">

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
                <a href="service.html" class="nav-item nav-link active">Services</a>
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
                <a href="https://wa.me/9626325204?text=Hello, I would like to enquire about your services and daily material rates." class="btn btn-primary btn-glow btn-ripple px-4 py-2" target="_blank" rel="noopener">
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
                COMPLETE INDUSTRIAL SUPPLY CHAIN
            </span>
            <h1 class="hero-title-main">Industrial Supply &amp; Logistics Services</h1>
            <p class="hero-subtitle-lead">
                Delivering certified construction materials directly to residential, commercial, and infrastructure sites across Pondicherry and Tamil Nadu with guaranteed weighbridge accuracy and specialized crane unloading.
            </p>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">Our Services</li>
            </ul>
        </div>
    </section>

    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 680px;">
                <span class="hero-badge-pill" style="color: var(--primary-orange); border-color: rgba(243, 106, 33, 0.3); background: rgba(243, 106, 33, 0.08);">
                    OUR CORE CAPABILITIES
                </span>
                <h2 class="display-6 fw-bold text-navy mt-2 mb-3">Comprehensive Site Supply Solutions</h2>
                <p class="text-muted">
                    Engineered to meet the exact specifications of architects, structural consultants, and large-scale builders.
                </p>
            </div>

            <!-- 3 Main Service Cards -->
            <div class="row g-4">

                <!-- Service 1: Steel Supply -->
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="super-service-card card h-100 border rounded-4 overflow-hidden shadow-sm bg-white">
                        <div class="super-service-img-box position-relative" style="height: 220px; overflow: hidden; background: #031836;">
                            <img src="img/tmt-rod-1000x1000.png" alt="Steel Supply - TMT Rebars" class="w-100 h-100" style="object-fit: cover;">
                            <span class="super-service-badge position-absolute top-0 start-0 m-3 badge bg-primary text-white px-3 py-2 rounded-2">Primary Reinforcement</span>
                            <div class="super-service-icon position-absolute bottom-0 end-0 m-3 btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;"><i class="fa fa-layer-group"></i></div>
                        </div>
                        <div class="super-service-body p-4 d-flex flex-column flex-grow-1">
                            <h3 class="super-service-title h4 fw-bold text-navy mb-2">Steel Supply</h3>
                            <p class="super-service-desc text-secondary small mb-3">
                                Direct mill stockist for India's leading TMT rebars, structural hollow pipes, MS angles, channels, and weather-proof roofing sheets.
                            </p>
                            <ul class="super-service-list list-unstyled mb-4 d-flex flex-column gap-2 small">
                                <li><i class="fa fa-check-circle text-primary me-2"></i> Fe 500, Fe 550 &amp; Fe 550D / CRS Earthquake-Resistant Rebars</li>
                                <li><i class="fa fa-check-circle text-primary me-2"></i> 8mm to 32mm All Standard Diameters in Continuous Stock</li>
                                <li><i class="fa fa-check-circle text-primary me-2"></i> Computerized 100-Ton Weighbridge Slip with Every Dispatch</li>
                            </ul>
                            <div class="super-service-tags mb-4 d-flex flex-wrap gap-1">
                                <span class="badge bg-light text-dark border">Tata Tiscon</span>
                                <span class="badge bg-light text-dark border">JSW Neosteel</span>
                                <span class="badge bg-light text-dark border">Agni 550D</span>
                                <span class="badge bg-light text-dark border">Suryadev</span>
                                <span class="badge bg-light text-dark border">APL Apollo</span>
                            </div>
                            <div class="super-service-actions mt-auto d-flex gap-2">
                                <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20Steel%20Supply." class="btn btn-outline-success flex-grow-1 d-flex align-items-center justify-content-center gap-1" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-whatsapp"></i> WhatsApp
                                </a>
                                <a href="tel:+919626325204" class="btn btn-primary flex-grow-1 d-flex align-items-center justify-content-center gap-1">
                                    <i class="fa fa-phone-alt"></i> Call Rates
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Service 2: Cement Supply -->
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="super-service-card card h-100 border rounded-4 overflow-hidden shadow-sm bg-white">
                        <div class="super-service-img-box position-relative" style="height: 220px; overflow: hidden; background: #031836;">
                            <img src="img/cement_showcase_hero.jpg" alt="Cement Supply - Authorized Dealership" class="w-100 h-100" style="object-fit: cover;">
                            <span class="super-service-badge position-absolute top-0 start-0 m-3 badge bg-success text-white px-3 py-2 rounded-2">Structural Binding</span>
                            <div class="super-service-icon position-absolute bottom-0 end-0 m-3 btn btn-success rounded-circle d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;"><i class="fa fa-cube"></i></div>
                        </div>
                        <div class="super-service-body p-4 d-flex flex-column flex-grow-1">
                            <h3 class="super-service-title h4 fw-bold text-navy mb-2">Cement Supply</h3>
                            <p class="super-service-desc text-secondary small mb-3">
                                Fresh factory rake deliveries of certified OPC 53, OPC 43, and advanced water-shield PPC cements for high compressive concrete strength.
                            </p>
                            <ul class="super-service-list list-unstyled mb-4 d-flex flex-column gap-2 small">
                                <li><i class="fa fa-check-circle text-success me-2"></i> OPC 53 Grade, PPC &amp; Water-Repellent Formulations</li>
                                <li><i class="fa fa-check-circle text-success me-2"></i> Direct Factory Railway Rake Shipments (Zero Stale Stock)</li>
                                <li><i class="fa fa-check-circle text-success me-2"></i> 50kg Bags &amp; Bulk Tonnage Supply Delivered to Site</li>
                            </ul>
                            <div class="super-service-tags mb-4 d-flex flex-wrap gap-1">
                                <span class="badge bg-light text-dark border">UltraTech</span>
                                <span class="badge bg-light text-dark border">JSW Cement</span>
                                <span class="badge bg-light text-dark border">Dalmia DSP</span>
                                <span class="badge bg-light text-dark border">Ramco Super</span>
                                <span class="badge bg-light text-dark border">Priya Cement</span>
                            </div>
                            <div class="super-service-actions mt-auto d-flex gap-2">
                                <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20Cement%20Supply." class="btn btn-outline-success flex-grow-1 d-flex align-items-center justify-content-center gap-1" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-whatsapp"></i> WhatsApp
                                </a>
                                <a href="tel:+919626325204" class="btn btn-success flex-grow-1 d-flex align-items-center justify-content-center gap-1">
                                    <i class="fa fa-phone-alt"></i> Call Rates
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Service 3: Wholesale Logistics & Weighbridge -->
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="super-service-card card h-100 border rounded-4 overflow-hidden shadow-sm bg-white">
                        <div class="super-service-img-box position-relative" style="height: 220px; overflow: hidden; background: #031836;">
                            <img src="img/slide2.jpg" alt="Wholesale Distribution & Fleet Logistics" class="w-100 h-100" style="object-fit: cover;">
                            <span class="super-service-badge position-absolute top-0 start-0 m-3 badge bg-info text-white px-3 py-2 rounded-2">Direct Logistics</span>
                            <div class="super-service-icon position-absolute bottom-0 end-0 m-3 btn btn-info text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;"><i class="fa fa-truck-moving"></i></div>
                        </div>
                        <div class="super-service-body p-4 d-flex flex-column flex-grow-1">
                            <h3 class="super-service-title h4 fw-bold text-navy mb-2">Fleet Logistics &amp; Weighbridge</h3>
                            <p class="super-service-desc text-secondary small mb-3">
                                Equipped with heavy vehicle transport, mechanical crane offloading, and an on-site 100-ton computerized electronic weighbridge.
                            </p>
                            <ul class="super-service-list list-unstyled mb-4 d-flex flex-column gap-2 small">
                                <li><i class="fa fa-check-circle text-info me-2"></i> 100-Ton Digital Electronic Weighbridge for 100% Accuracy</li>
                                <li><i class="fa fa-check-circle text-info me-2"></i> Heavy Vehicle Fleet with On-Site Crane Offloading</li>
                                <li><i class="fa fa-check-circle text-info me-2"></i> Rapid Same-Day Site Dispatch Across Pondicherry &amp; TN</li>
                            </ul>
                            <div class="super-service-tags mb-4 d-flex flex-wrap gap-1">
                                <span class="badge bg-light text-dark border">Weighbridge Slips</span>
                                <span class="badge bg-light text-dark border">Crane Unloading</span>
                                <span class="badge bg-light text-dark border">Fleet Logistics</span>
                                <span class="badge bg-light text-dark border">Site Dispatch</span>
                            </div>
                            <div class="super-service-actions mt-auto d-flex gap-2">
                                <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20Wholesale%20Distribution." class="btn btn-outline-success flex-grow-1 d-flex align-items-center justify-content-center gap-1" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-whatsapp"></i> WhatsApp
                                </a>
                                <a href="tel:+919626325204" class="btn btn-dark flex-grow-1 d-flex align-items-center justify-content-center gap-1">
                                    <i class="fa fa-phone-alt"></i> Call Logistics
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Service End -->

    <!-- Trust Highlights Ribbon -->
    <section class="container my-5">
        <div class="p-4 p-md-5 rounded-4 bg-white border shadow-sm">
            <div class="row g-4 text-center">
                <div class="col-6 col-lg-3">
                    <i class="fa fa-certificate text-primary fs-2 mb-2"></i>
                    <h5 class="fw-bold text-navy mb-1">100% BIS Certified</h5>
                    <p class="text-muted small mb-0">Mill Test Certificate with Every TMT Batch</p>
                </div>
                <div class="col-6 col-lg-3 border-start">
                    <i class="fa fa-balance-scale text-primary fs-2 mb-2"></i>
                    <h5 class="fw-bold text-navy mb-1">100-Ton Weighbridge</h5>
                    <p class="text-muted small mb-0">Certified Computerized Digital Weight Slip</p>
                </div>
                <div class="col-6 col-lg-3 border-start">
                    <i class="fa fa-clock text-primary fs-2 mb-2"></i>
                    <h5 class="fw-bold text-navy mb-1">Same-Day Dispatch</h5>
                    <p class="text-muted small mb-0">Prompt Delivery Across Puducherry &amp; TN</p>
                </div>
                <div class="col-6 col-lg-3 border-start">
                    <i class="fa fa-hand-holding-usd text-primary fs-2 mb-2"></i>
                    <h5 class="fw-bold text-navy mb-1">Wholesale Pricing</h5>
                    <p class="text-muted small mb-0">Authorized Mill Distributor Direct Rates</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 4-Step Process Flow -->
    <section class="container-xxl py-5 bg-light">
        <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 600px;">
                <span class="hero-badge-pill" style="color: var(--primary-orange); border-color: rgba(243, 106, 33, 0.3); background: rgba(243, 106, 33, 0.08);">
                    SIMPLE 4-STEP WORKFLOW
                </span>
                <h2 class="display-6 fw-bold text-navy mt-2 mb-2">How We Deliver to Your Site</h2>
                <p class="text-muted">A streamlined, transparent supply process from initial quote to on-site unloading.</p>
            </div>

            <div class="row g-4">
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="p-4 bg-white rounded-4 border h-100 shadow-sm">
                        <div class="badge bg-primary text-white rounded-pill px-3 py-1 mb-3 fw-bold">STEP 01</div>
                        <h5 class="fw-bold text-navy mb-2">Estimation &amp; BOQ</h5>
                        <p class="text-secondary small mb-0">Share your material requirements or Bill of Quantities (BOQ). Our technical experts calculate optimal grades and best wholesale prices.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="p-4 bg-white rounded-4 border h-100 shadow-sm">
                        <div class="badge bg-primary text-white rounded-pill px-3 py-1 mb-3 fw-bold">STEP 02</div>
                        <h5 class="fw-bold text-navy mb-2">Electronic Weighment</h5>
                        <p class="text-secondary small mb-0">Vehicle loads are weighed on our calibrated 100-Ton digital electronic weighbridge. A computer-generated weight ticket is printed.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="p-4 bg-white rounded-4 border h-100 shadow-sm">
                        <div class="badge bg-primary text-white rounded-pill px-3 py-1 mb-3 fw-bold">STEP 03</div>
                        <h5 class="fw-bold text-navy mb-2">Fleet Site Dispatch</h5>
                        <p class="text-secondary small mb-0">Our dedicated transport fleet departs immediately for your project site, keeping your site engineering schedule uninterrupted.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="p-4 bg-white rounded-4 border h-100 shadow-sm">
                        <div class="badge bg-primary text-white rounded-pill px-3 py-1 mb-3 fw-bold">STEP 04</div>
                        <h5 class="fw-bold text-navy mb-2">Crane Offloading</h5>
                        <p class="text-secondary small mb-0">Materials are safely mechanically offloaded directly at your designated storage bay with invoice and mill test certificate handoff.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Project CTA Banner -->
    <section class="container my-5">
        <div class="p-5 rounded-4 text-white text-center shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, var(--primary-navy) 0%, #031836 100%);">
            <h2 class="display-6 fw-bold mb-3 text-white">Have an Upcoming Project or Wholesale Requirement?</h2>
            <p class="lead mb-4 text-light mx-auto" style="max-width: 650px;">
                Get real-time rates for Tata Tiscon, JSW Neosteel, UltraTech, Dalmia, APL Apollo, and Asian Paints directly from our sales desk.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
                <a href="tel:+919626325204" class="btn btn-primary btn-lg px-4 py-3 fw-bold">
                    <i class="fa fa-phone-alt me-2"></i>Call Desk: +91 96263 25204
                </a>
                <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20need%20a%20rate%20quote%20for%20my%20construction%20project." class="btn btn-success btn-lg px-4 py-3 fw-bold" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp me-2"></i>Instant WhatsApp Quote
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
        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20your%20services." class="floating-btn floating-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" aria-label="WhatsApp">
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

fs.writeFileSync('service.html', serviceHtml, 'utf8');
console.log('service.html rebuilt successfully!');

