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

function media(image, label, mediaClass) {
  const wrap = el('div', { class: mediaClass });
  if (image) {
    wrap.appendChild(el('img', { attrs: { src: image, alt: label, loading: 'lazy' } }));
  } else {
    wrap.appendChild(el('span', { class: 'ph', text: 'Add image →' }));
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

/* ---------- Games (editorial entries, no card boxes) ---------- */
const gamesGrid = document.getElementById('games-grid');
gamesGrid.className = 'entries';
(C.featuredProjects || []).forEach(p => {
  const links = el('div', { class: 'entry-links' });
  if (p.playUrl) links.appendChild(el('a', { text: 'Play →', attrs: { href: p.playUrl, target: '_blank', rel: 'noopener' } }));
  if (p.codeUrl) links.appendChild(el('a', { text: 'Code →', attrs: { href: p.codeUrl, target: '_blank', rel: 'noopener' } }));

  const content = el('div', { class: 'entry-content' }, [
    el('span', { class: 'entry-type', text: p.type }),
    el('h3', { class: 'entry-title', text: p.title }),
    el('p', { class: 'entry-blurb', text: p.blurb }),
    p.designNote ? el('p', { class: 'entry-note', text: p.designNote }) : null,
    tagLine(p.tags),
    links
  ]);

  gamesGrid.appendChild(el('div', { class: 'entry' }, [media(p.image, p.title, 'entry-media'), content]));
});

/* ---------- Tabletop: one block per campaign, statblocks shown large ---------- */
document.getElementById('tabletop-intro').textContent = (C.tabletopWork?.intro || '').replace(/\s+/g, ' ').trim();

const campaignsWrap = document.getElementById('campaigns');
(C.tabletopWork?.campaigns || []).forEach(camp => {
  if (!camp.title) return;

  const headerChildren = [
    el('h3', { text: camp.title }),
    el('p', { text: camp.summary })
  ];
  if (camp.link) headerChildren.push(el('a', { text: 'Read more →', attrs: { href: camp.link, target: '_blank', rel: 'noopener' } }));
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
        sb.note ? el('p', { class: 'entry-blurb', text: sb.note }) : null
      ]);
      sbList.appendChild(el('div', { class: 'entry' }, [media(sb.image, sb.name, 'entry-media'), content]));
    });
    campaignBlock.appendChild(sbList);
  }

  campaignsWrap.appendChild(campaignBlock);
});

/* ---------- Technical projects (text-only entries, no images) ---------- */
const techGrid = document.getElementById('technical-grid');
techGrid.className = 'entries';
(C.technicalProjects || []).forEach(p => {
  const links = el('div', { class: 'entry-links' });
  if (p.codeUrl) links.appendChild(el('a', { text: 'Code →', attrs: { href: p.codeUrl, target: '_blank', rel: 'noopener' } }));

  const content = el('div', { class: 'entry-content' }, [
    el('span', { class: 'entry-type', text: p.type }),
    el('h3', { class: 'entry-title', text: p.title }),
    el('p', { class: 'entry-blurb', text: p.blurb }),
    tagLine(p.tags),
    links
  ]);
  techGrid.appendChild(el('div', { class: 'entry no-media' }, [content]));
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
    el('p', { class: 'skill-list', text: (items || []).join(' · ') })
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