/* ============================================================
   APP.JS — reads content.js and builds the page.
   You shouldn't need to edit this file to update your content —
   edit content.js instead. Only touch this if you want to change
   *how* things are laid out.
   ============================================================ */

const C = SITE_CONTENT;

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.text !== undefined) node.textContent = opts.text;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  children.forEach(c => c && node.appendChild(c));
  return node;
}

function media(image, label) {
  const wrap = el('div', { class: 'card-media' });
  if (image) {
    wrap.appendChild(el('img', { attrs: { src: image, alt: label, loading: 'lazy' } }));
  } else {
    wrap.appendChild(el('span', { class: 'ph', text: 'Add image →' }));
  }
  return wrap;
}

function tagRow(tags) {
  const row = el('div', { class: 'tag-row' });
  (tags || []).forEach(t => row.appendChild(el('span', { class: 'tag', text: t })));
  return row;
}

/* ---------- Nav + Hero ---------- */
document.getElementById('nav-name').textContent = C.identity.name;
document.getElementById('hero-name').textContent = C.identity.name;
document.getElementById('hero-tagline').textContent = C.identity.tagline;
document.getElementById('hero-eyebrow').textContent = C.identity.role;

const metaWrap = document.getElementById('hero-meta');
const metaParts = [C.identity.location, C.identity.email].filter(Boolean);
metaParts.forEach((m, i) => {
  metaWrap.appendChild(el('span', { text: m }));
  if (i < metaParts.length - 1 || (C.identity.links && C.identity.links.length)) {
    metaWrap.appendChild(el('span', { class: 'pipe', text: '/' }));
  }
});
(C.identity.links || []).forEach((link, i) => {
  metaWrap.appendChild(el('a', { text: link.label, attrs: { href: link.url, target: '_blank', rel: 'noopener' } }));
  if (i < C.identity.links.length - 1) metaWrap.appendChild(el('span', { class: 'pipe', text: '/' }));
});

/* ---------- About ---------- */
document.getElementById('about-text').textContent = (C.about || '').replace(/\s+/g, ' ').trim();

/* ---------- Games ---------- */
const gamesGrid = document.getElementById('games-grid');
(C.featuredProjects || []).forEach(p => {
  const links = el('div', { class: 'card-links' });
  if (p.playUrl) links.appendChild(el('a', { text: 'Play →', attrs: { href: p.playUrl, target: '_blank', rel: 'noopener' } }));
  if (p.codeUrl) links.appendChild(el('a', { text: 'Code →', attrs: { href: p.codeUrl, target: '_blank', rel: 'noopener' } }));

  const body = el('div', { class: 'card-body' }, [
    el('span', { class: 'card-type', text: p.type }),
    el('h3', { class: 'card-title', text: p.title }),
    el('p', { class: 'card-blurb', text: p.blurb }),
    p.designNote ? el('p', { class: 'card-note', text: p.designNote }) : null,
    tagRow(p.tags),
    links
  ]);

  gamesGrid.appendChild(el('div', { class: 'card' }, [media(p.image, p.title), body]));
});

/* ---------- Tabletop ---------- */
document.getElementById('tabletop-intro').textContent = (C.tabletopWork?.intro || '').replace(/\s+/g, ' ').trim();

const sbGrid = document.getElementById('statblocks-grid');
(C.tabletopWork?.statblocks || []).forEach(sb => {
  if (!sb.name) return;
  const block = el('div', { class: 'statblock' }, [
    media(sb.image, sb.name),
    el('h3', { text: sb.name }),
    sb.role ? el('div', { class: 'role', text: sb.role }) : null,
    sb.note ? el('p', { class: 'note', text: sb.note }) : null
  ]);
  sbGrid.appendChild(block);
});

const wb = C.tabletopWork?.worldbuildingSample;
if (wb && wb.title) {
  const sampleWrap = document.getElementById('worldbuilding-sample');
  const children = [
    el('h3', { text: wb.title }),
    el('p', { text: wb.summary })
  ];
  if (wb.link) children.push(el('a', { text: 'Read more →', attrs: { href: wb.link, target: '_blank', rel: 'noopener' } }));
  sampleWrap.appendChild(el('div', { class: 'worldbuilding-sample' }, children));
}

/* ---------- Technical projects ---------- */
const techGrid = document.getElementById('technical-grid');
(C.technicalProjects || []).forEach(p => {
  const links = el('div', { class: 'card-links' });
  if (p.codeUrl) links.appendChild(el('a', { text: 'Code →', attrs: { href: p.codeUrl, target: '_blank', rel: 'noopener' } }));

  const body = el('div', { class: 'card-body' }, [
    el('span', { class: 'card-type', text: p.type }),
    el('h3', { class: 'card-title', text: p.title }),
    el('p', { class: 'card-blurb', text: p.blurb }),
    tagRow(p.tags),
    links
  ]);
  techGrid.appendChild(el('div', { class: 'card' }, [body]));
});

/* ---------- Experience ---------- */
const expList = document.getElementById('experience-list');
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
Object.entries(C.skills || {}).forEach(([group, items]) => {
  skillsGrid.appendChild(el('div', { class: 'skill-group' }, [
    el('h3', { text: group }),
    tagRow(items)
  ]));
});

/* ---------- Education ---------- */
const eduList = document.getElementById('education-list');
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

/* ---------- Footer ---------- */
const resumeLink = document.getElementById('resume-link');
if (C.resumeUrl) {
  resumeLink.setAttribute('href', C.resumeUrl);
  resumeLink.setAttribute('download', '');
} else {
  resumeLink.style.display = 'none';
}
document.getElementById('footer-fine').textContent = `${C.identity.email}  /  ${C.identity.phone}`;

/* ---------- Mobile nav toggle ---------- */
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});
