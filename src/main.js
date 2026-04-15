import { profile } from './data.js';
import './style.css';

const { identity, summary, highlights, skills, projects, education, certifications, languages } =
  profile;

function esc(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function mailto(email) {
  return `mailto:${email}`;
}

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="site-header__inner">
      <a href="#top" class="logo">${esc(identity.name.split(' ')[0])} · Portofolio</a>
      <nav class="nav" aria-label="Navigasi utama">
        <a href="#tentang">Tentang</a>
        <a href="#keahlian">Keahlian</a>
        <a href="#proyek">Proyek</a>
        <a href="#pendidikan">Pendidikan</a>
        <a href="#kontak">Kontak</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="section hero" aria-labelledby="hero-title">
      <div>
        <span class="hero__badge">Terbuka untuk magang &amp; full-time</span>
        <h1 id="hero-title">${esc(identity.name)}</h1>
        <p class="hero__headline">${esc(identity.headline)}</p>
        <div class="hero__meta">
          <span>📍 ${esc(identity.location)}</span>
          <span>✉️ <a href="${mailto(identity.email)}">${esc(identity.email)}</a></span>
        </div>
        <div class="hero__actions">
          <a class="btn btn--primary" href="${mailto(identity.email)}">Hubungi via email</a>
          ${identity.github ? `<a class="btn btn--ghost" href="${esc(identity.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
          ${identity.linkedin ? `<a class="btn btn--ghost" href="${esc(identity.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ''}
        </div>
      </div>
      <aside class="hero__card">
        <h3>Ringkasan singkat</h3>
        <p>${esc(summary.split('\n')[0].trim())}</p>
      </aside>
    </section>

    <section class="section" id="tentang" aria-labelledby="about-title">
      <p class="section__label">Tentang</p>
      <h2 class="section__title" id="about-title">Profil profesional</h2>
      <p class="prose">${esc(summary)}</p>
      <div class="highlights">
        ${highlights.map((h) => `<div class="highlight">${esc(h)}</div>`).join('')}
      </div>
    </section>

    <section class="section" id="keahlian" aria-labelledby="skills-title">
      <p class="section__label">Keahlian</p>
      <h2 class="section__title" id="skills-title">Teknis &amp; non-teknis</h2>
      <div class="skill-groups">
        <div class="skill-group">
          <h3>Teknis</h3>
          <div class="pills">
            ${skills.technical.map((s) => `<span class="pill">${esc(s)}</span>`).join('')}
          </div>
        </div>
        <div class="skill-group">
          <h3>Soft skills</h3>
          <div class="pills">
            ${skills.soft.map((s) => `<span class="pill">${esc(s)}</span>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="proyek" aria-labelledby="projects-title">
      <p class="section__label">Proyek</p>
      <h2 class="section__title" id="projects-title">Yang pernah dibangun</h2>
      <div class="projects">
        ${projects
          .map(
            (p) => `
          <article class="project">
            <div>
              <h3 class="project__title">${esc(p.title)}</h3>
              <p class="project__meta">${esc(p.period)} · ${esc(p.role)}</p>
              <div class="project__stack">
                ${p.stack.map((t) => `<span>${esc(t)}</span>`).join('')}
              </div>
              <p>${esc(p.description)}</p>
              <ul>
                ${p.outcomes.map((o) => `<li>${esc(o)}</li>`).join('')}
              </ul>
            </div>
            <div class="project__links">
              ${p.links?.repo ? `<a class="btn btn--ghost" href="${esc(p.links.repo)}" target="_blank" rel="noopener noreferrer">Repositori</a>` : ''}
              ${p.links?.demo && p.links.demo !== '#' ? `<a class="btn btn--primary" href="${esc(p.links.demo)}" target="_blank" rel="noopener noreferrer">Demo</a>` : ''}
            </div>
          </article>
        `
          )
          .join('')}
      </div>
    </section>

    <section class="section" id="pendidikan" aria-labelledby="edu-title">
      <p class="section__label">Pendidikan &amp; lainnya</p>
      <h2 class="section__title" id="edu-title">Latar belakang</h2>
      <div class="grid-3">
        <div class="card-simple">
          <h4>Pendidikan</h4>
          ${education
            .map(
              (e) => `
            <div class="education-block">
              <p class="sub">${esc(e.program)}</p>
              <p><strong>${esc(e.school)}</strong></p>
              <p class="sub">${esc(e.period)}</p>
              <p>${esc(e.note)}</p>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="card-simple">
          <h4>Bahasa</h4>
          <ul class="list-plain">
            ${languages
              .map(
                (l) => `
              <li>
                <span class="name">${esc(l.name)}</span>
                <span class="detail">${esc(l.level)}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
        <div class="card-simple">
          <h4>Sertifikasi</h4>
          <ul class="list-plain">
            ${certifications
              .map(
                (c) => `
              <li>
                ${
                  c.url
                    ? `<a class="cert-link" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">
                <span class="name">${esc(c.name)}</span>
                <span class="detail">${esc(c.issuer)} · ${esc(c.year)}</span>
              </a>`
                    : `<span class="name">${esc(c.name)}</span>
                <span class="detail">${esc(c.issuer)} · ${esc(c.year)}</span>`
                }
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </div>
    </section>

    <section class="section" id="kontak" aria-labelledby="contact-title">
      <p class="section__label">Kontak</p>
      <h2 class="section__title" id="contact-title">Mari berkenalan</h2>
      <p class="prose">
        Untuk diskusi magang, lowongan, atau kolaborasi proyek, silakan hubungi melalui email atau profil profesional di bawah ini.
      </p>
      <div class="hero__actions" style="margin-top: 1.25rem;">
        <a class="btn btn--primary" href="${mailto(identity.email)}">${esc(identity.email)}</a>
        ${identity.phone ? `<span class="btn btn--ghost" style="cursor: default;">${esc(identity.phone)}</span>` : ''}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${esc(identity.name)} · Dibangun dengan Vite &amp; vanilla JS · <a href="${esc(identity.portfolioUrl || '#')}">Portofolio</a></p>
  </footer>
`;

const root = document.documentElement;
const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (supportsFinePointer && !reducedMotion) {
  window.addEventListener('mousemove', (event) => {
    root.style.setProperty('--mouse-x', `${event.clientX}px`);
    root.style.setProperty('--mouse-y', `${event.clientY}px`);
  });
}
