const fs = require('fs');

const heroData = {
  'about.html': {
    cls: 'hero-about',
    title: 'About Us',
    current: 'About Us'
  },
  'service.html': {
    cls: 'hero-service',
    title: 'Our Services',
    current: 'Services'
  },
  'contact.html': {
    cls: 'hero-contact',
    title: 'Contact Us',
    current: 'Contact Us'
  },
  'project.html': {
    cls: 'hero-project',
    title: 'Our Projects',
    current: 'Projects'
  },
  'feature.html': {
    cls: 'hero-feature',
    title: 'Why Choose Us',
    current: 'Why Choose Us'
  },
  'team.html': {
    cls: 'hero-team',
    title: 'Our Team',
    current: 'Our Team'
  },
  'testimonial.html': {
    cls: 'hero-testimonial',
    title: 'Client Reviews',
    current: 'Client Reviews'
  }
};

for (const [file, data] of Object.entries(heroData)) {
  let html = fs.readFileSync(file, 'utf8');
  const startStr = `<section class="anbu-page-hero ${data.cls}">`;
  const sIdx = html.indexOf(startStr);
  const eIdx = html.indexOf('</section>', sIdx);

  if (sIdx === -1 || eIdx === -1) {
    console.error(`ERROR: could not find hero section in ${file}`);
    continue;
  }

  const compactHero = `<section class="anbu-page-hero ${data.cls}">
        <div class="container wow fadeIn" data-wow-delay="0.1s">
            <h1 class="hero-title-main">${data.title}</h1>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">${data.current}</li>
            </ul>
        </div>
    </section>`;

  html = html.substring(0, sIdx) + compactHero + html.substring(eIdx + 10);
  fs.writeFileSync(file, html, 'utf8');
  console.log(`✅ ${file}: hero updated to compact title "${data.title}" + breadcrumbs`);
}

