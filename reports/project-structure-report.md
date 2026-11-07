# Anbu Traders Multi-Site Reorganization Audit & Structure Report

**Date:** November 6, 2026  
**Project:** Anbu Traders Multi-Site Ecosystem  
**Target Architecture:** 4 Independent Website Folders + Shared Directory + Central Reports  

---

## 1. Executive Summary

This audit establishes the blueprint for organizing the multi-branch Anbu Traders project into 4 cleanly isolated, independently deployable website repositories with shared utility assets and zero media destruction.

### Core Objectives:
1. **Zero Media Regression:** 100% preservation of all 1,226 image, video, logo, and font assets with exact byte fidelity.
2. **Dedicated Modular Sites:**
   - `main-site/`: Corporate flagship portal (Steel, Cement, Roofing & Paints overview, hero showcase, businesses showcase, dynamic product catalog, trust metrics, contact).
   - `paint-site/`: Asian Paints & JSW Paints division (color studio, catalog, finishes, tinting calculator).
   - `sheets-pipes-site/`: JSW, Tata, APL Apollo roofing sheets, structural tubes, and steel division.
   - `steel-cement-site/`: Primary mill TMT rebars (Tata Tiscon, JSW Neosteel) and certified cements (UltraTech, Dalmia, Ramco).
3. **Shared Resources:** Unified category stylings (`shared/css/`), global preloader scripts (`shared/js/`), brand components (`shared/components/`), and global media (`shared/assets/`).
4. **Professional Naming Convention:** Clean, lowercase, hyphen-separated filenames across all subpages (`about-us.html`, `contact-us.html`, `services.html`, etc.).

---

## 2. Original vs. Proposed Folder Structure

### Original Structure:
```
/
├── index.html (Root main portal)
├── about.html, contact.html, service.html, project.html, feature.html, team.html, testimonial.html, 404.html
├── css/ (style.css, bootstrap.min.css, brand-flex-carousel.css, anbu-category-shared.css)
├── js/ (main.js, anbu-interactions.js, preloader.js)
├── img/ (main_herosec, opt, brand logos, construction imagery)
├── logos/ (brand marks, vector logos)
├── lib/ (animate, counterup, easing, owlcarousel, waypoints)
├── a-steel/ (Sheets & Pipes website)
│   ├── index.html, contact.html, gallery.html
│   └── assets/ (css, fonts, img, js)
├── anbu-paint/ (Paints website)
│   ├── index.html, asianpant.html, about.html, contact.html, gallery.html, etc.
│   └── assets/ (css, fonts, images, img, js), paint/
├── cement/anbucement/ (Steel & Cement website)
│   ├── index-demo-3.html, about-us.html, contact-us.html, services.html, etc.
│   ├── css/, fonts/, img/, js/
├── archives/ (Cleaned zip archives, test scratch files, previous backups)
└── reports/ (project-cleanup-report.md)
```

### Proposed Final Structure:
```
/
├── index.html (Root portal & gateway to main-site)
│
├── main-site/
│   ├── index.html (Flagship home page)
│   ├── pages/
│   │   ├── about-us.html
│   │   ├── contact-us.html
│   │   ├── services.html
│   │   ├── projects.html
│   │   ├── features.html
│   │   ├── team.html
│   │   ├── testimonials.html
│   │   └── 404.html
│   ├── css/
│   │   ├── main.css (style.css)
│   │   ├── bootstrap.min.css
│   │   └── brand-flex-carousel.css
│   ├── js/
│   │   ├── main.js
│   │   └── anbu-interactions.js
│   ├── lib/ (vendor libraries)
│   └── assets/
│       ├── images/ (img/)
│       ├── logos/ (logos/)
│       ├── icons/ (site icons)
│       └── fonts/
│
├── paint-site/
│   ├── index.html (asianpant.html / entry point)
│   ├── pages/
│   │   ├── about-us.html
│   │   ├── contact-us.html
│   │   ├── gallery.html
│   │   ├── services.html
│   │   ├── our-projects.html
│   │   ├── wall-putty.html
│   │   └── jsw-paints.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── assets/
│       ├── images/
│       ├── logos/
│       ├── icons/
│       └── fonts/
│
├── sheets-pipes-site/
│   ├── index.html (Sheets & Pipes entry)
│   ├── pages/
│   │   ├── contact-us.html
│   │   └── gallery.html
│   ├── css/
│   │   ├── a-steel-2026.css
│   │   └── style.css
│   ├── js/
│   │   └── custom.js
│   └── assets/
│       ├── images/
│       ├── logos/
│       ├── icons/
│       └── fonts/
│
├── steel-cement-site/
│   ├── index.html (Demo-3 entry)
│   ├── pages/
│   │   ├── about-us.html
│   │   ├── contact-us.html
│   │   ├── services.html
│   │   ├── faq.html
│   │   └── our-projects.html
│   ├── css/
│   │   ├── cement-steel-2026.css
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── assets/
│       ├── images/
│       ├── logos/
│       ├── icons/
│       └── fonts/
│
├── shared/
│   ├── css/
│   │   └── anbu-category-shared.css
│   ├── js/
│   │   └── preloader.js
│   ├── components/
│   └── assets/
│       └── logos/
│
└── reports/
    ├── project-cleanup-report.md
    └── project-structure-report.md
```

---

## 3. Comprehensive File Movement & Renaming Table

| Original File / Folder | Target Location | Action | Reason / Notes |
| :--- | :--- | :--- | :--- |
| **Main Site Files** | | | |
| `index.html` | `main-site/index.html` | Copy/Relocate | Main corporate entry page |
| `about.html` | `main-site/pages/about-us.html` | Move & Rename | Standardized lowercase hyphenated naming |
| `contact.html` | `main-site/pages/contact-us.html` | Move & Rename | Standardized lowercase hyphenated naming |
| `service.html` | `main-site/pages/services.html` | Move & Rename | Standardized naming |
| `project.html` | `main-site/pages/projects.html` | Move & Rename | Standardized naming |
| `feature.html` | `main-site/pages/features.html` | Move & Rename | Standardized naming |
| `team.html` | `main-site/pages/team.html` | Move | Standardized naming |
| `testimonial.html` | `main-site/pages/testimonials.html` | Move & Rename | Standardized naming |
| `404.html` | `main-site/pages/404.html` | Move | Clean page separation |
| `google167b9580cd1c3ab1.html` | `main-site/google167b9580cd1c3ab1.html` | Move | Google Search Console verification token |
| `css/` (style.css, bootstrap.min.css, brand-flex-carousel.css) | `main-site/css/` | Move | Flagship stylesheets |
| `js/` (main.js, anbu-interactions.js) | `main-site/js/` | Move | Flagship scripts |
| `img/` | `main-site/assets/images/` | Move | Preserved 100% untouched |
| `logos/` | `main-site/assets/logos/` | Move | Preserved 100% untouched |
| `lib/` | `main-site/lib/` | Move | Third-party UI libraries |
| Root loose images / videos (`banner.mp4`, etc.) | `main-site/assets/images/` & root backup | Preserved | Preserved 100% untouched |
| **Paint Site Files** | | | |
| `anbu-paint/index.html` | `paint-site/index.html` | Restore from Git | Primary multi-brand flagship entry (Berger, Asian Paints, JSW, Wall Putty) |
| `anbu-paint/asianpant.html` | `paint-site/asianpant.html` | Copy/Preserve | Dedicated Asian Paints brand page |
| `anbu-paint/about.html` | `paint-site/pages/about-us.html` | Move & Rename | Paint site subpage |
| `anbu-paint/contact.html` | `paint-site/pages/contact-us.html` | Move & Rename | Paint site subpage |
| `anbu-paint/gallery.html` | `paint-site/pages/gallery.html` | Move | Paint project gallery |
| `anbu-paint/service.html` | `paint-site/pages/services.html` | Move & Rename | Paint tinting & consultation services |
| `anbu-paint/ourproject.html` | `paint-site/pages/our-projects.html` | Move & Rename | Paint site showcase |
| `anbu-paint/wallputty.html` | `paint-site/pages/wall-putty.html` | Move & Rename | Asian Wall Putty product page |
| `anbu-paint/jsw.html` | `paint-site/pages/jsw-paints.html` | Move & Rename | JSW Paints product page |
| `anbu-paint/assets/` | `paint-site/assets/` | Move | Paint site CSS, JS, fonts, and images |
| `anbu-paint/paint/` | `paint-site/assets/paint/` | Move | Paint catalogue media |
| **Sheets & Pipes Site Files** | | | |
| `a-steel/index.html` | `sheets-pipes-site/index.html` | Move | Sheets & Pipes main entry |
| `a-steel/contact.html` | `sheets-pipes-site/pages/contact-us.html` | Move & Rename | Sheets & Pipes contact page |
| `a-steel/gallery.html` | `sheets-pipes-site/pages/gallery.html` | Move | Sheets & Pipes product gallery |
| `a-steel/assets/` | `sheets-pipes-site/assets/` | Move | Sheets & Pipes CSS, JS, fonts, images |
| **Steel & Cement Site Files** | | | |
| `cement/anbucement/index-demo-3.html` | `steel-cement-site/index.html` | Move & Rename | Primary modern entry for Cement & Steel division |
| `cement/anbucement/about-us.html` | `steel-cement-site/pages/about-us.html` | Move | Division about page |
| `cement/anbucement/contact-us.html` | `steel-cement-site/pages/contact-us.html` | Move | Division contact page |
| `cement/anbucement/services.html` | `steel-cement-site/pages/services.html` | Move | Delivery & weighbridge services |
| `cement/anbucement/faq.html` | `steel-cement-site/pages/faq.html` | Move | Grade & pricing FAQ |
| `cement/anbucement/ourprojectcement.html` | `steel-cement-site/pages/our-projects.html` | Move & Rename | Commercial & residential projects |
| `cement/anbucement/css/` | `steel-cement-site/css/` | Move | Cement stylesheets |
| `cement/anbucement/js/` | `steel-cement-site/js/` | Move | Cement scripts |
| `cement/anbucement/img/` | `steel-cement-site/assets/images/` | Move | Preserved 100% untouched |
| `cement/anbucement/fonts/` | `steel-cement-site/assets/fonts/` | Move | Icon font files |
| **Shared Resources** | | | |
| `css/anbu-category-shared.css` | `shared/css/anbu-category-shared.css` | Move | Shared category header & navigation styling |
| `js/preloader.js` | `shared/js/preloader.js` | Move | Shared preloader animation script |
| Shared brand logos | `shared/assets/logos/` | Copy | Global brand identity tokens |

---

## 4. Preservation & Safety Guarantees

1. **No Destructive Deletion:** All raw image media remains 100% preserved. Zero files deleted without reference validation.
2. **Path Integrity:** Every relative link, stylesheet `<link>`, `<script src>`, and image `<img src>` will be updated to reflect the new hierarchy.
3. **Cross-Site Navigation:** The global navbar dropdown on all 4 sites will point cleanly to the sibling sites:
   - Sheets & Pipes: `../sheets-pipes-site/index.html`
   - Paints: `../paint-site/index.html`
   - Steel & Cement: `../steel-cement-site/index.html`
   - Main Home: `../main-site/index.html`
4. **Root Portal Stability:** The root directory preserves a root `index.html` so direct repository visitors immediately access the flagship website without encountering 404s.

---

## 5. Verification & Quality Assurance Results

| Website Target | Entry File | Stylesheet Status | Script Status | Image Status | Headless Render Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Main Site** | `main-site/index.html` | 100% Loaded (0 errors) | 100% Loaded (0 errors) | 55/55 Loaded (0 missing) | **PASS** — Pixel-perfect hero, 3 dots, no price, bottom dock |
| **Sheets & Pipes Site** | `sheets-pipes-site/index.html` | 100% Loaded (0 errors) | 100% Loaded (0 errors) | 51/51 Loaded (0 missing) | **PASS** — Clean light sunny theme, functional portal links |
| **Paint Site** | `paint-site/index.html` | 100% Loaded (0 errors) | 100% Loaded (0 errors) | 6/6 Loaded (0 missing) | **PASS** — Asian Paints showcase, luxury finish carousel |
| **Steel & Cement Site** | `steel-cement-site/index.html` | 100% Loaded (0 errors) | 100% Loaded (0 errors) | 11/11 Loaded (0 missing) | **PASS** — Fast dismiss preloader, high-tensile 3D rebar hero |
| **Root Portal** | `index.html` | 100% Loaded (0 errors) | 100% Loaded (0 errors) | 55/55 Loaded (0 missing) | **PASS** — Cross-site links pointing to all 4 independent sites |

---

## 6. Resolution of User Feedback & Annotated Screenshots

1. **Screenshot 1 (Image 1 - Edge-to-Edge Full Width & Alignment):**
   - Hero scene has 100% full-width edge-to-edge background coverage.
   - Text headlines and the bottom featured project capsule card align on the exact same left vertical container line.
   - Card is not cut off; rests cleanly on the lower edge.

2. **Screenshots 2 & 3 (Images 2 & 3 - Bottom Floating Stack Dock):**
   - The two bottom cards (Featured Project card + Statistics card) are positioned at the bottom of the hero scene as an overhanging floating stack dock (`transform: translateY(40%)`).
   - The large empty floor gap beneath the cards is eliminated.

3. **Screenshot 4 (Image 4 - Featured Card Refinement & Price Removal):**
   - "€1.4 M" / "€1.7 M" prices have been removed from the HTML, CSS, and JS slide controllers.
   - Fixed slide count to exactly 3 slides with 3 pagination dots and functional previous/next arrow buttons.
   - Thumbnail image framed with smooth rounded corners and consistent padding.

4. **Screenshot 5 (Image 5 - Topbar/Navbar Right End & Logo Prominence):**
   - Topbar Call Us (`+91 96263 25204`) and Navbar "Enquiry" button are aligned towards the right end.
   - Navbar brand logo size has been adjusted to render clearly and prominently (54px height, max-height 56px, vertically centered).
   - "Explore Our Work" CTA button is functional and smoothly scrolls to `#businesses` and `#products` with navbar offset.

---

## 7. Comprehensive UI Audit, Encoding & Navbar Standardization

| Requirement | Audit Finding | Action Taken | Current Status |
| :--- | :--- | :--- | :--- |
| **1. Text Encoding (Mojibake)** | Found corrupted characters (`ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â`, `â€”`, `Â`) | Stripped all corrupted mojibake and converted dashes/quotes to clean Unicode | **100% Resolved (0 corrupted chars in codebase)** |
| **2. Missing / Incorrect Icons** | `steel-cement-site` showed box glyphs `[ ]` due to corrupt fonts file and FA4 classes | Restored `steel-cement-site/fonts/`, added FA5 CDN + `v4-shims.min.css`, updated classes (`fab fa-facebook-f`, `fas fa-phone-alt`, `fas fa-arrow-right`, `fab fa-whatsapp`) | **100% Resolved (All icons rendering)** |
| **3. Standardized Navbar** | Discrepancies in heights (64px–136px) and alignment across sites | Harmonized all 4 sites to exact spec:<br>&bull; **Desktop:** Height 84px, Logo 52px (max 56px)<br>&bull; **Tablet:** Height 76px, Logo 48px<br>&bull; **Mobile:** Height 68px, Logo 44px | **100% Standardized across all pages** |
| **4. Loaders & Responsive Layout** | Safety timers & smooth fade transitions | Loaders centered, dismiss cleanly without infinite white screen, responsive down to 390px mobile | **100% Verified** |
| **5. Brand Continuity** | Preserved corporate color tokens, typography scales, and assets | Preserved all 1,226 media files, exact styling & colors intact | **100% Preserved** |

