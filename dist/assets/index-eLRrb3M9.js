(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const m={identity:{name:"Jibril Fathanneo Putra P",headline:"Junior Web Developer · Growth Mindset dan Siap Berkembang",location:"Bogor, Indonesia",email:"jibrilfathanneo10@gmail.com",linkedin:"https://www.linkedin.com/in/jibrilf",github:"https://github.com/G-breel",portfolioUrl:"https://example.com"},summary:`Saya adalah junior web developer dengan fokus pada pengembangan aplikasi web yang rapi, fungsional, dan mudah digunakan.
Memiliki pengalaman belajar dan praktik menggunakan JavaScript, React, Node.js, serta database.
Aktif membangun proyek untuk memperkuat kemampuan teknis, problem solving, dan kolaborasi tim.`,highlights:["Konsisten mengembangkan kemampuan melalui proyek dan praktik rutin","Membangun fitur web dari frontend hingga backend secara bertahap","Terbiasa menggunakan Git dan GitHub untuk kolaborasi dan version control"],skills:{technical:["JavaScript (ES6+)","React","Node.js & Express","REST API","MongoDB","MySQL","HTML & CSS / Tailwind","Git"],soft:["Komunikasi","Manajemen waktu","Problem solving","Belajar cepat"]},projects:[{title:"TabunganQu — Aplikasi Pengelola Tabungan",period:"2026",role:"Full Stack Developer (Capstone)",stack:["React","Vite","Node.js","Express","MongoDB","JWT"],description:"Aplikasi web untuk mencatat pemasukan dan pengeluaran, memantau saldo, serta mengelola wishlist tabungan dengan target nominal.",outcomes:["Autentikasi pengguna dan proteksi route","CRUD transaksi dan agregasi untuk laporan","Modul wishlist dengan progres tabungan"],links:{repo:"https://github.com/username/Capstone-projek",demo:"https://tabungan-qu-frontend.vercel.app"}},{title:"Portofolio Interaktif (situs ini)",period:"2026",role:"Frontend",stack:["Vite","Vanilla JS","CSS"],description:"Landing page portofolio satu halaman yang ringan, responsif, dan mudah disesuaikan untuk lamaran kerja.",outcomes:["Struktur data terpisah untuk konten","Build statis siap deploy (Vercel / Netlify / hosting statis)"],links:{repo:"https://github.com/username/porto",demo:"#"}}],education:[{school:"Universitas / Politeknik Anda",program:"S1 Teknik Informatika / Sistem Informasi",period:"2022 — 2026 (sesuaikan)",note:"Relevant coursework: Pemrograman Web, Basis Data, Rekayasa Perangkat Lunak."}],certifications:[{name:"Belajar Dasar AI",issuer:"Dicoding",year:"2025",url:"https://www.dicoding.com/certificates/4EXG30W8DZRL"},{name:"Belajar Dasar Cloud dan Gen AI di AWS",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/1OP8JKR2VPQK"},{name:"Belajar Dasar Pemrograman JavaScript",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/GRX5J5Q7YX0M"},{name:"Belajar Dasar Pemrograman Web",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/6RPNGE7G9Z2M"},{name:"Belajar Membuat Aplikasi Web dengan React",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/81P2OG74NZOY"},{name:"Belajar Membuat Front-End Web untuk Pemula",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/GRX5JV3GYX0M"},{name:"Financial Literacy 101",issuer:"Dicoding",year:"2025",url:"https://www.dicoding.com/certificates/GRX5382WKZ0M"},{name:"Literasi Keuangan: Edukasi Pembiayaan Program CSR FIFGROUP PINTAR",issuer:"FIFGROUP CSR",year:"2025"},{name:"Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/N9ZO2VN96PG5"},{name:"Pengenalan ke Logika Pemrograman (Programming Logic 101)",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/MEPJ2159WP3V"}],languages:[{name:"Bahasa Indonesia",level:"Native"},{name:"English",level:"Basic"}]},{identity:n,summary:d,highlights:g,skills:p,projects:h,education:k,certifications:b,languages:f}=m;function e(a){const t=document.createElement("div");return t.textContent=a,t.innerHTML}function c(a){return`mailto:${a}`}document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <div class="site-header__inner">
      <a href="#top" class="logo">${e(n.name.split(" ")[0])} · Portofolio</a>
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
        <h1 id="hero-title">${e(n.name)}</h1>
        <p class="hero__headline">${e(n.headline)}</p>
        <div class="hero__meta">
          <span>📍 ${e(n.location)}</span>
          <span>✉️ <a href="${c(n.email)}">${e(n.email)}</a></span>
        </div>
        <div class="hero__actions">
          <a class="btn btn--primary" href="${c(n.email)}">Hubungi via email</a>
          ${`<a class="btn btn--ghost" href="${e(n.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`}
          ${`<a class="btn btn--ghost" href="${e(n.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`}
        </div>
      </div>
      <aside class="hero__card">
        <h3>Ringkasan singkat</h3>
        <p>${e(d.split(`
`)[0].trim())}</p>
      </aside>
    </section>

    <section class="section" id="tentang" aria-labelledby="about-title">
      <p class="section__label">Tentang</p>
      <h2 class="section__title" id="about-title">Profil profesional</h2>
      <p class="prose">${e(d)}</p>
      <div class="highlights">
        ${g.map(a=>`<div class="highlight">${e(a)}</div>`).join("")}
      </div>
    </section>

    <section class="section" id="keahlian" aria-labelledby="skills-title">
      <p class="section__label">Keahlian</p>
      <h2 class="section__title" id="skills-title">Teknis &amp; non-teknis</h2>
      <div class="skill-groups">
        <div class="skill-group">
          <h3>Teknis</h3>
          <div class="pills">
            ${p.technical.map(a=>`<span class="pill">${e(a)}</span>`).join("")}
          </div>
        </div>
        <div class="skill-group">
          <h3>Soft skills</h3>
          <div class="pills">
            ${p.soft.map(a=>`<span class="pill">${e(a)}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="proyek" aria-labelledby="projects-title">
      <p class="section__label">Proyek</p>
      <h2 class="section__title" id="projects-title">Yang pernah dibangun</h2>
      <div class="projects">
        ${h.map(a=>{var t,o;return`
          <article class="project">
            <div>
              <h3 class="project__title">${e(a.title)}</h3>
              <p class="project__meta">${e(a.period)} · ${e(a.role)}</p>
              <div class="project__stack">
                ${a.stack.map(r=>`<span>${e(r)}</span>`).join("")}
              </div>
              <p>${e(a.description)}</p>
              <ul>
                ${a.outcomes.map(r=>`<li>${e(r)}</li>`).join("")}
              </ul>
            </div>
            <div class="project__links">
              ${(t=a.links)!=null&&t.repo?`<a class="btn btn--ghost" href="${e(a.links.repo)}" target="_blank" rel="noopener noreferrer">Repositori</a>`:""}
              ${(o=a.links)!=null&&o.demo&&a.links.demo!=="#"?`<a class="btn btn--primary" href="${e(a.links.demo)}" target="_blank" rel="noopener noreferrer">Demo</a>`:""}
            </div>
          </article>
        `}).join("")}
      </div>
    </section>

    <section class="section" id="pendidikan" aria-labelledby="edu-title">
      <p class="section__label">Pendidikan &amp; lainnya</p>
      <h2 class="section__title" id="edu-title">Latar belakang</h2>
      <div class="grid-3">
        <div class="card-simple">
          <h4>Pendidikan</h4>
          ${k.map(a=>`
            <div class="education-block">
              <p class="sub">${e(a.program)}</p>
              <p><strong>${e(a.school)}</strong></p>
              <p class="sub">${e(a.period)}</p>
              <p>${e(a.note)}</p>
            </div>
          `).join("")}
        </div>
        <div class="card-simple">
          <h4>Bahasa</h4>
          <ul class="list-plain">
            ${f.map(a=>`
              <li>
                <span class="name">${e(a.name)}</span>
                <span class="detail">${e(a.level)}</span>
              </li>
            `).join("")}
          </ul>
        </div>
        <div class="card-simple">
          <h4>Sertifikasi</h4>
          <ul class="list-plain">
            ${b.map(a=>`
              <li>
                ${a.url?`<a class="cert-link" href="${e(a.url)}" target="_blank" rel="noopener noreferrer">
                <span class="name">${e(a.name)}</span>
                <span class="detail">${e(a.issuer)} · ${e(a.year)}</span>
              </a>`:`<span class="name">${e(a.name)}</span>
                <span class="detail">${e(a.issuer)} · ${e(a.year)}</span>`}
              </li>
            `).join("")}
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
        <a class="btn btn--primary" href="${c(n.email)}">${e(n.email)}</a>
        
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${e(n.name)} · Dibangun dengan Vite &amp; vanilla JS · <a href="${e(n.portfolioUrl)}">Portofolio</a></p>
  </footer>
`;const u=document.documentElement,v=window.matchMedia("(pointer: fine)").matches,y=window.matchMedia("(prefers-reduced-motion: reduce)").matches;v&&!y&&window.addEventListener("mousemove",a=>{u.style.setProperty("--mouse-x",`${a.clientX}px`),u.style.setProperty("--mouse-y",`${a.clientY}px`)});
