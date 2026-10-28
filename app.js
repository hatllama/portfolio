/* ============================================================
   APP.JS — reads content.js and builds the page.
   You shouldn't need to edit this file to update your content —
   edit content.js instead. Only touch this if you want to change
   *how* things are laid out.
   ============================================================ */

/* ---------- Language (EN / FR) ---------- */
// FR content overrides EN field by field; lists are matched by position.
function mergeContent(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over)) {
    return base.map((b, i) => mergeContent(b, over[i]));
  }
  if (base && over && typeof base === 'object' && typeof over === 'object' && !Array.isArray(base)) {
    const out = { ...base };
    Object.keys(over).forEach(k => { out[k] = k === 'skills' ? over[k] : mergeContent(base[k], over[k]); });
    return out;
  }
  return over;
}

const CONTENT = { en: SITE_CONTENT, fr: mergeContent(SITE_CONTENT, SITE_CONTENT_FR) };
let lang = 'en';
let C = CONTENT.en;
let T = UI_STRINGS.en;

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'fr' || q === 'en') return q;
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch (e) {}
  return (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.text !== undefined) node.textContent = opts.text;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  children.forEach(c => c && node.appendChild(c));
  return node;
}

function media(image, label, mediaClass) {
  const wrap = el('div', { class: mediaClass });
  if (image) {
    wrap.appendChild(el('img', { attrs: { src: image, alt: label, loading: 'lazy' } }));
  } else {
    wrap.appendChild(el('span', { class: 'ph', text: T.addImage }));
  }
  return wrap;
}

function tagLine(tags) {
  const line = el('div', { class: 'entry-tags' });
  (tags || []).forEach((t, i) => {
    if (i > 0) line.appendChild(el('span', { class: 'sep', text: '·' }));
    line.appendChild(el('span', { text: t }));
  });
  return line;
}

function builtList(items) {
  const clean = (items || []).filter(Boolean);
  if (!clean.length) return null;
  return el('div', { class: 'built' }, [
    el('div', { class: 'built-label', text: T.built }),
    el('ul', { class: 'built-items' }, clean.map(i => el('li', { text: i })))
  ]);
}

function render() {
  /* ---------- Nav + Hero ---------- */
  document.getElementById('nav-name').textContent = C.identity.name;
  document.getElementById('hero-name').textContent = C.identity.name;
  document.getElementById('hero-tagline').textContent = C.identity.tagline;
  document.getElementById('hero-eyebrow').textContent = C.identity.role;

  const metaWrap = document.getElementById('hero-meta');
  metaWrap.textContent = '';
  const metaParts = [C.identity.location, C.identity.email, C.identity.availability].filter(Boolean);
  metaParts.forEach((m, i) => {
    metaWrap.appendChild(el('span', { text: m }));
    if (i < metaParts.length - 1) metaWrap.appendChild(el('span', { class: 'pipe', text: '/' }));
  });

  /* ---------- About ---------- */
  document.getElementById('about-text').textContent = (C.about || '').replace(/\s+/g, ' ').trim();

  /* ---------- Games (editorial entries, no card boxes) ---------- */
  const gamesGrid = document.getElementById('games-grid');
  gamesGrid.className = 'entries';
  gamesGrid.textContent = '';
  (C.featuredProjects || []).forEach(p => {
    const links = el('div', { class: 'entry-links' });
    if (p.playUrl) links.appendChild(el('a', { text: T.play, attrs: { href: p.playUrl, target: '_blank', rel: 'noopener' } }));
    if (p.codeUrl) links.appendChild(el('a', { text: T.code, attrs: { href: p.codeUrl, target: '_blank', rel: 'noopener' } }));

    const content = el('div', { class: 'entry-content' }, [
      el('span', { class: 'entry-type', text: p.type }),
      el('h3', { class: 'entry-title', text: p.title }),
      p.role ? el('p', { class: 'entry-role', text: p.role }) : null,
      el('p', { class: 'entry-blurb', text: p.blurb }),
      builtList(p.built),
      p.designNote ? el('p', { class: 'entry-note', text: p.designNote }) : null,
      tagLine(p.tags),
      links
    ]);

    gamesGrid.appendChild(el('div', { class: 'entry' }, [media(p.image, p.title, 'entry-media'), content]));
  });

  /* ---------- Tabletop: one block per campaign, statblocks shown large ---------- */
  document.getElementById('tabletop-intro').textContent = (C.tabletopWork?.intro || '').replace(/\s+/g, ' ').trim();

  const campaignsWrap = document.getElementById('campaigns');
  campaignsWrap.textContent = '';
  (C.tabletopWork?.campaigns || []).forEach(camp => {
    if (!camp.title) return;

    const headerChildren = [
      el('h3', { text: camp.title }),
      el('p', { text: camp.summary })
    ];
    if (camp.link) headerChildren.push(el('a', { text: camp.linkLabel || T.readMore, attrs: { href: camp.link, target: '_blank', rel: 'noopener' } }));
    const campaignBlock = el('div', { class: 'campaign' }, [
      el('div', { class: 'worldbuilding-sample' }, headerChildren)
    ]);

    const statblocks = (camp.statblocks || []).filter(sb => sb.name);
    if (statblocks.length) {
      const sbList = el('div', { class: 'entries' });
      statblocks.forEach(sb => {
        const content = el('div', { class: 'entry-content' }, [
          sb.role ? el('span', { class: 'entry-type', text: sb.role }) : null,
          el('h3', { class: 'entry-title', text: sb.name }),
          sb.note ? el('p', { class: 'entry-blurb', text: sb.note }) : null,
          sb.outcome ? el('div', { class: 'outcome' }, [
            el('div', { class: 'built-label', text: T.atTable }),
            el('p', { class: 'outcome-text', text: sb.outcome })
          ]) : null
        ]);
        sbList.appendChild(el('div', { class: 'entry' }, [media(sb.image, sb.name, 'entry-media statblock-media'), content]));
      });
      campaignBlock.appendChild(sbList);
    }

    campaignsWrap.appendChild(campaignBlock);
  });



  /* ---------- Technical projects (image optional — most stay text-only) ---------- */
  const techGrid = document.getElementById('technical-grid');
  techGrid.className = 'entries';
  techGrid.textContent = '';
  (C.technicalProjects || []).forEach(p => {
    const links = el('div', { class: 'entry-links' });
    if (p.liveUrl) links.appendChild(el('a', { text: T.live, attrs: { href: p.liveUrl, target: '_blank', rel: 'noopener' } }));
    if (p.codeUrl) links.appendChild(el('a', { text: T.code, attrs: { href: p.codeUrl, target: '_blank', rel: 'noopener' } }));

    const content = el('div', { class: 'entry-content' }, [
      el('span', { class: 'entry-type', text: p.type }),
      el('h3', { class: 'entry-title', text: p.title }),
      p.role ? el('p', { class: 'entry-role', text: p.role }) : null,
      el('p', { class: 'entry-blurb', text: p.blurb }),
      p.disclaimer ? el('p', { class: 'entry-disclaimer', text: p.disclaimer }) : null,
      ...(p.sections || []).map(s => el('div', { class: 'outcome' }, [
        el('div', { class: 'built-label', text: s.label }),
        el('ul', { class: 'entry-points' }, (s.items || []).map(t => el('li', { text: t })))
      ])),
      p.designNote ? el('p', { class: 'entry-note', text: p.designNote }) : null,
      tagLine(p.tags),
      links
    ]);
    const entryEl = p.image
      ? el('div', { class: 'entry' }, [media(p.image, p.title, 'entry-media'), content])
      : el('div', { class: 'entry no-media' }, [content]);
    techGrid.appendChild(entryEl);
  });

  /* ---------- Experience ---------- */
  const expList = document.getElementById('experience-list');
  expList.textContent = '';
  (C.experience || []).forEach(job => {
    const ul = el('ul', {}, (job.points || []).map(pt => el('li', { text: pt })));
    expList.appendChild(el('div', { class: 'timeline-item' }, [
      el('div', { class: 'timeline-when', text: job.dates }),
      el('div', {}, [
        el('h3', { text: job.title }),
        el('div', { class: 'timeline-org', text: job.org }),
        ul
      ])
    ]));
  });

  /* ---------- Skills ---------- */
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.textContent = '';
  Object.entries(C.skills || {}).forEach(([group, items]) => {
    skillsGrid.appendChild(el('div', { class: 'skill-group' }, [
      el('h3', { text: group }),
      el('p', { class: 'skill-list', text: (items || []).join(' · ') })
    ]));
  });

  /* ---------- Education ---------- */
  const eduList = document.getElementById('education-list');
  eduList.textContent = '';
  (C.education || []).forEach(item => {
    const ul = item.points && item.points.length
      ? el('ul', {}, item.points.map(pt => el('li', { text: pt })))
      : null;
    eduList.appendChild(el('div', { class: 'timeline-item' }, [
      el('div', { class: 'timeline-when', text: item.dates }),
      el('div', {}, [
        el('h3', { text: item.title }),
        el('div', { class: 'timeline-org', text: item.org }),
        ul
      ])
    ]));
  });

  /* ---------- Influences / reading (hides itself while empty) ---------- */
  const influencesSection = document.getElementById('influences');
  const influenceItems = (C.influences?.items || []).filter(i => i && i.title);
  if (influenceItems.length) {
    document.getElementById('influences-intro').textContent =
      (C.influences.intro || '').replace(/\s+/g, ' ').trim();
    const list = document.getElementById('influences-list');
    list.textContent = '';
    influenceItems.forEach(i => {
      list.appendChild(el('li', {}, [
        el('span', { class: 'influence-title', text: i.title }),
        i.note ? el('span', { class: 'influence-note', text: i.note }) : null
      ]));
    });
  } else {
    influencesSection.style.display = 'none';
    const navItem = document.querySelector('.nav-links a[href="#influences"]');
    if (navItem) navItem.parentElement.style.display = 'none';
  }

  /* ---------- Personal (hides itself while empty) ---------- */
  const personalSection = document.getElementById('personal');
  const personalItems = (C.personal?.items || []).filter(Boolean);
  if (personalItems.length) {
    document.getElementById('personal-intro').textContent =
      (C.personal.intro || '').replace(/\s+/g, ' ').trim();
    const personalList = document.getElementById('personal-list');
    personalList.textContent = '';
    personalItems.forEach(i => personalList.appendChild(el('li', { text: i })));
  } else {
    personalSection.style.display = 'none';
    const navItem = document.querySelector('.nav-links a[href="#personal"]');
    if (navItem) navItem.parentElement.style.display = 'none';
  }

  /* ---------- Footer ---------- */
  const resumeLink = document.getElementById('resume-link');
  if (C.resumeUrl) {
    resumeLink.setAttribute('href', C.resumeUrl);
    resumeLink.setAttribute('download', '');
  } else {
    resumeLink.style.display = 'none';
  }
  document.getElementById('footer-fine').textContent = `${C.identity.email}  /  ${C.identity.phone}`;

  /* ---------- Links section ---------- */
  const linksRow = document.getElementById('links-row');
  linksRow.textContent = '';
  (C.identity.links || []).forEach(link => {
    linksRow.appendChild(el('a', { class: 'link-chip', text: link.label, attrs: { href: link.url, target: '_blank', rel: 'noopener' } }));
  });
}

function applyLang(next) {
  lang = next;
  C = CONTENT[lang];
  T = UI_STRINGS[lang];
  document.documentElement.lang = lang;
  document.title = T.title;
  document.querySelector('meta[name="description"]').setAttribute('content', T.description);
  document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = T[n.dataset.i18n]; });
  const toggle = document.getElementById('lang-toggle');
  toggle.textContent = T.toggleLabel;
  toggle.setAttribute('aria-label', T.toggleAria);
  toggle.setAttribute('lang', lang === 'en' ? 'fr' : 'en');
  document.getElementById('nav-toggle').setAttribute('aria-label', T.menuAria);
  render();
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(lang === 'en' ? 'fr' : 'en');
});

applyLang(initialLang());

/* ---------- Mobile nav toggle ---------- */
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

/* ---------- Image lightbox (click any project/statblock image to expand) ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.addEventListener('click', (e) => {
  const img = e.target.closest('.entry-media img');
  if (img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    return;
  }
  if (e.target === lightbox || e.target === lightboxImg) {
    lightbox.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});