(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}})();const k={identity:{name:"Jibril Fathanneo Putra P",headline:"Junior Web Developer · Growth Mindset dan Siap Berkembang",location:"Bogor, Indonesia",email:"jibrilfathanneo10@gmail.com",linkedin:"https://www.linkedin.com/in/jibrilf",github:"https://github.com/G-breel",portfolioUrl:"https://example.com"},summary:`Saya adalah junior web developer dengan fokus pada pengembangan aplikasi web yang rapi, fungsional, dan mudah digunakan.
Memiliki pengalaman belajar dan praktik menggunakan JavaScript, React, Node.js, serta database.
Aktif membangun proyek untuk memperkuat kemampuan teknis, problem solving, dan kolaborasi tim.`,highlights:["Konsisten mengembangkan kemampuan melalui proyek dan praktik rutin","Membangun fitur web dari frontend hingga backend secara bertahap","Terbiasa menggunakan Git dan GitHub untuk kolaborasi dan version control"],skills:{technical:["JavaScript (ES6+)","React","Node.js & Express","REST API","MongoDB","MySQL","HTML & CSS / Tailwind","Git"],soft:["Komunikasi","Manajemen waktu","Problem solving","Belajar cepat"]},projects:[{title:"TabunganQu — Aplikasi Pengelola Tabungan",period:"2026",role:"Full Stack Developer (Capstone)",stack:["React","Vite","Node.js","Express","MongoDB","JWT"],description:"Aplikasi web untuk mencatat pemasukan dan pengeluaran, memantau saldo, serta mengelola wishlist tabungan dengan target nominal.",outcomes:["Autentikasi pengguna dan proteksi route","CRUD transaksi dan agregasi untuk laporan","Modul wishlist dengan progres tabungan"],links:{repo:"https://github.com/G-breel/Capstone-projek",demo:"https://tabungan-qu-frontend.vercel.app"}},{title:"Portofolio Interaktif (situs ini)",period:"2026",role:"Frontend",stack:["Vite","Vanilla JS","CSS"],description:"Landing page portofolio satu halaman yang ringan, responsif, dan mudah disesuaikan untuk lamaran kerja.",outcomes:["Struktur data terpisah untuk konten","Build statis siap deploy (Vercel / Netlify / hosting statis)"],links:{repo:"https://github.com/username/porto",demo:"#"}}],education:[{school:"SMKN 1 Ciomas",program:"Software and Game Development (PPLG)",period:"Student",note:"Major: Software and Game Development (Pengembangan Perangkat Lunak dan Game)."}],certifications:[{name:"Belajar Dasar AI",issuer:"Dicoding",year:"2025",url:"https://www.dicoding.com/certificates/4EXG30W8DZRL"},{name:"Belajar Dasar Cloud dan Gen AI di AWS",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/1OP8JKR2VPQK"},{name:"Belajar Dasar Pemrograman JavaScript",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/GRX5J5Q7YX0M"},{name:"Belajar Dasar Pemrograman Web",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/6RPNGE7G9Z2M"},{name:"Belajar Membuat Aplikasi Web dengan React",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/81P2OG74NZOY"},{name:"Belajar Membuat Front-End Web untuk Pemula",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/GRX5JV3GYX0M"},{name:"Financial Literacy 101",issuer:"Dicoding",year:"2025",url:"https://www.dicoding.com/certificates/GRX5382WKZ0M"},{name:"Literasi Keuangan: Edukasi Pembiayaan Program CSR FIFGROUP PINTAR",issuer:"FIFGROUP CSR",year:"2025"},{name:"Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/N9ZO2VN96PG5"},{name:"Pengenalan ke Logika Pemrograman (Programming Logic 101)",issuer:"Dicoding",year:"2026",url:"https://www.dicoding.com/certificates/MEPJ2159WP3V"}],languages:[{name:"Bahasa Indonesia",level:"Native"},{name:"English",level:"Basic"}]},{identity:t,summary:u,highlights:b,skills:m,projects:f,education:v,certifications:y,languages:$}=k;function a(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}function d(e){return`mailto:${e}`}document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <div class="site-header__inner">
      <a href="#top" class="logo">${a(t.name.split(" ")[0])} · Portofolio</a>
      <button
        class="nav-toggle"
        type="button"
        aria-label="Buka navigasi"
        aria-expanded="false"
        aria-controls="site-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="nav" id="site-nav" aria-label="Navigasi utama">
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
        <h1 id="hero-title">${a(t.name)}</h1>
        <p class="hero__headline">${a(t.headline)}</p>
        <div class="hero__meta">
          <span>📍 ${a(t.location)}</span>
          <span>✉️ <a href="${d(t.email)}">${a(t.email)}</a></span>
        </div>
        <div class="hero__actions">
          <a class="btn btn--primary" href="${d(t.email)}">Hubungi via email</a>
          ${`<a class="btn btn--ghost" href="${a(t.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`}
          ${`<a class="btn btn--ghost" href="${a(t.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`}
        </div>
      </div>
      <aside class="hero__card">
        <h3>Ringkasan singkat</h3>
        <p>${a(u.split(`
`)[0].trim())}</p>
      </aside>
    </section>

    <section class="section" id="tentang" aria-labelledby="about-title">
      <p class="section__label">Tentang</p>
      <h2 class="section__title" id="about-title">Profil profesional</h2>
      <p class="prose">${a(u)}</p>
      <div class="highlights">
        ${b.map(e=>`<div class="highlight">${a(e)}</div>`).join("")}
      </div>
    </section>

    <section class="section" id="keahlian" aria-labelledby="skills-title">
      <p class="section__label">Keahlian</p>
      <h2 class="section__title" id="skills-title">Teknis &amp; non-teknis</h2>
      <div class="skill-groups">
        <div class="skill-group">
          <h3>Teknis</h3>
          <div class="pills">
            ${m.technical.map(e=>`<span class="pill">${a(e)}</span>`).join("")}
          </div>
        </div>
        <div class="skill-group">
          <h3>Soft skills</h3>
          <div class="pills">
            ${m.soft.map(e=>`<span class="pill">${a(e)}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="proyek" aria-labelledby="projects-title">
      <p class="section__label">Proyek</p>
      <h2 class="section__title" id="projects-title">Yang pernah dibangun</h2>
      <div class="projects">
        ${f.map(e=>{var i,l;return`
          <article class="project">
            <div>
              <h3 class="project__title">${a(e.title)}</h3>
              <p class="project__meta">${a(e.period)} · ${a(e.role)}</p>
              <div class="project__stack">
                ${e.stack.map(o=>`<span>${a(o)}</span>`).join("")}
              </div>
              <p>${a(e.description)}</p>
              <ul>
                ${e.outcomes.map(o=>`<li>${a(o)}</li>`).join("")}
              </ul>
            </div>
            <div class="project__links">
              ${(i=e.links)!=null&&i.repo?`<a class="btn btn--ghost" href="${a(e.links.repo)}" target="_blank" rel="noopener noreferrer">Repositori</a>`:""}
              ${(l=e.links)!=null&&l.demo&&e.links.demo!=="#"?`<a class="btn btn--primary" href="${a(e.links.demo)}" target="_blank" rel="noopener noreferrer">Demo</a>`:""}
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
          ${v.map(e=>`
            <div class="education-block">
              <p class="sub">${a(e.program)}</p>
              <p><strong>${a(e.school)}</strong></p>
              <p class="sub">${a(e.period)}</p>
              <p>${a(e.note)}</p>
            </div>
          `).join("")}
        </div>
        <div class="card-simple">
          <h4>Bahasa</h4>
          <ul class="list-plain">
            ${$.map(e=>`
              <li>
                <span class="name">${a(e.name)}</span>
                <span class="detail">${a(e.level)}</span>
              </li>
            `).join("")}
          </ul>
        </div>
        <div class="card-simple">
          <h4>Sertifikasi</h4>
          <ul class="list-plain">
            ${y.map(e=>`
              <li>
                ${e.url?`<a class="cert-link" href="${a(e.url)}" target="_blank" rel="noopener noreferrer">
                <span class="name">${a(e.name)}</span>
                <span class="detail">${a(e.issuer)} · ${a(e.year)}</span>
              </a>`:`<span class="name">${a(e.name)}</span>
                <span class="detail">${a(e.issuer)} · ${a(e.year)}</span>`}
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
        <a class="btn btn--primary" href="${d(t.email)}">${a(t.email)}</a>
        
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${a(t.name)} · Dibangun dengan Vite &amp; vanilla JS · <a href="${a(t.portfolioUrl)}">Portofolio</a></p>
  </footer>
`;const g=document.documentElement,w=window.matchMedia("(pointer: fine)").matches,_=window.matchMedia("(prefers-reduced-motion: reduce)").matches;w&&!_&&window.addEventListener("mousemove",e=>{g.style.setProperty("--mouse-x",`${e.clientX}px`),g.style.setProperty("--mouse-y",`${e.clientY}px`)});const r=document.querySelector(".nav-toggle"),p=document.querySelector("#site-nav"),h=window.matchMedia("(max-width: 768px)");if(r&&p){const e=i=>{p.classList.toggle("is-open",i),r.classList.toggle("is-active",i),r.setAttribute("aria-expanded",String(i)),r.setAttribute("aria-label",i?"Tutup navigasi":"Buka navigasi")};e(!1),r.addEventListener("click",()=>{const i=r.getAttribute("aria-expanded")==="true";e(!i)}),p.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{h.matches&&e(!1)})}),h.addEventListener("change",i=>{i.matches||e(!1)})}
