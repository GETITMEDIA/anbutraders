# Anbu Traders — Design System Master (2026 Edition)
**Generated with UI UX Pro Max Intelligence**
**Project:** Anbu Traders (Steel, Cement, Roofing Sheets, Pipes & Paints Stockist)
**Domain:** Construction Materials, Wholesale & Retail Supply
**Platform:** Responsive Web (Desktop, Tablet, Mobile)

---

## 1. Visual Foundation & Design Tokens

### 1.1 Color Tokens
```css
:root {
  /* Brand Core */
  --primary-navy: #062B5B;
  --primary-navy-dark: #031836;
  --primary-navy-light: #0B3D7D;
  --primary-orange: #F36A21;
  --primary-orange-hover: #DE550E;
  --primary-orange-soft: #FFF4ED;

  /* Division Signatures */
  --color-steel: #0284C7;       /* Steel, Sheets, Pipes */
  --color-steel-light: #E0F2FE;
  --color-cement: #059669;      /* Cement & Foundations */
  --color-cement-light: #ECFDF5;
  --color-paint: #EA580C;       /* Paints Showroom */
  --color-paint-light: #FFF7ED;

  /* Surfaces & Neutrals */
  --surface-white: #FFFFFF;
  --surface-elevated: #F8FAFC;
  --surface-subtle: #F1F5F9;
  --border-light: #E2E8F0;
  --border-hover: #CBD5E1;
  --text-primary: #0F172A;     /* WCAG AAA contrast */
  --text-secondary: #475569;   /* WCAG AAA contrast */
  --text-muted: #64748B;

  /* Elevation */
  --card-shadow: 0 4px 20px -2px rgba(6, 43, 91, 0.08);
  --card-shadow-hover: 0 16px 36px -4px rgba(6, 43, 91, 0.16);
  --card-radius: 16px;
  --btn-radius: 10px;
}
```

### 1.2 Typography Hierarchy
- **Heading Font Family:** `'Plus Jakarta Sans', system-ui, sans-serif`
  - H1 / Display: 800 (ExtraBold), letter-spacing: -0.02em, line-height: 1.15
  - H2 / Section Title: 800 (ExtraBold), letter-spacing: -0.015em, line-height: 1.2
  - H3 / Card Title: 700 (Bold), line-height: 1.3
  - H4-H6 / Subheadings: 600 (SemiBold), line-height: 1.4
- **Body Font Family:** `'Inter', system-ui, sans-serif`
  - Body Regular: 400, line-height: 1.65
  - Body Medium: 500, line-height: 1.6
  - Body Strong: 600, line-height: 1.5
  - Captions / Meta: 500, font-size: 0.85rem, letter-spacing: 0.02em

### 1.3 Spacing Rhythm (8px Basis)
- Component Gap: 8px, 12px, 16px, 20px, 24px
- Section Padding: clamp(3rem, 6vw, 6rem) top & bottom
- Container Max-Width: 1320px

---

## 2. Component Guidelines

### 2.1 Navigation Bar
- High-contrast white background with subtle bottom border (`#E2E8F0`)
- Sticky top with backdrop blur (`backdrop-filter: blur(12px)`)
- Logo: High-resolution Anbu Traders mark (`height: 72px`)
- Direct Dial CTA (`+91 96263 25204`) with interactive phone icon
- WhatsApp Enquiry CTA button with pulsating ripple badge

### 2.2 Cards & Bento Grid System
- Card background: `#FFFFFF`
- Card border: 1px solid `rgba(226, 232, 240, 0.9)`
- Card border-radius: 16px
- Card padding: 24px to 32px
- Hover state: `transform: translateY(-5px); box-shadow: var(--card-shadow-hover);`
- Smooth transition: `250ms cubic-bezier(0.16, 1, 0.3, 1)`

### 2.3 Buttons
- Primary CTA: Background `#F36A21`, color `#FFFFFF`, border-radius 10px, font-weight 600
- Secondary CTA: Background `#062B5B`, color `#FFFFFF`, border-radius 10px, font-weight 600
- Outline CTA: Background transparent, border 2px solid `#062B5B`, color `#062B5B`
- Active / Pressed State: `transform: scale(0.97)`

### 2.4 Accessibility & WCAG Compliance
- All body text maintains minimum 4.5:1 contrast against background
- Touch targets on mobile are minimum 44x44px
- Visible keyboard focus indicators (`outline: 2px solid var(--primary-orange); outline-offset: 2px`)
- Full reduced motion support (`prefers-reduced-motion: reduce`)

---

## 3. Page Architecture Reference
1. `index.html`: Flagship Portal, 3-category hero, core businesses, products catalog, brand partners, testimonials, footer.
2. `about.html`: Heritage since 2014, dual yards, metric stats strip, core operational pillars.
3. `service.html`: Steel supply, cement supply, fleet logistics, digital weighbridge, 4-step process flow.
4. `contact.html`: Sedarapet & Thiruchitrambalam yard locations, Google maps, interactive quotation form.
5. `project.html`: Real construction portfolio across residential, commercial, industrial, and infrastructure.
6. `feature.html`: Core value propositions (BIS mill certified, 100-ton weighbridge, factory stockist pricing, fast fleet).
7. `team.html`: Management, sales heads, technical paint consultants, dispatch logistics staff.
8. `testimonial.html`: Google verified 4.9★ reviews with filter tags and rating badges.
9. `404.html`: Helpful error state with direct navigation back to home and vertical divisions.

