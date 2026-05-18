# Project Context: Portfolio Jibril

## Tentang Web Ini

Portfolio pribadi milik **Jibril Fathanneo Putra P**, seorang Junior Web Developer dari Bogor, Indonesia.
Web ini adalah single-page application (SPA) yang digunakan untuk keperluan lamaran kerja / magang.

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v4 |
| Animasi utama | Framer Motion 12 (hover/tap) |
| Animasi background | Canvas API via `requestAnimationFrame` (CubesBg.jsx) |
| Deployment | Netlify (sudah terkonfigurasi di `.netlify/`) |
| Package manager | npm |

---

## Struktur File

```
src/
├── App.jsx                  ← root component, urutan section
├── main.jsx                 ← entry point React
├── index.css                ← global styles + Tailwind
├── data.js                  ← SEMUA konten portofolio (nama, skill, proyek, dll)
├── components/
│   ├── Navbar.jsx           ← navigasi fixed top, responsive mobile
│   ├── Hero.jsx             ← section pertama, typing effect, CTA buttons
│   ├── About.jsx            ← profil, highlights, skill badges
│   ├── Projects.jsx         ← daftar proyek dari data.js
│   ├── Certificates.jsx     ← sertifikasi + pendidikan + modal
│   ├── Contact.jsx          ← kontak info + tombol email/linkedin
│   ├── Footer.jsx           ← copyright + social links
│   └── CubesBg.jsx          ← animasi kubus canvas background di Hero
```

---

## File Utama yang Perlu Diketahui

### `src/data.js` — SATU-SATUNYA file untuk update konten
Semua teks, link, nama, skill, proyek, sertifikasi ada di sini.
Ganti file ini untuk update portofolio tanpa menyentuh komponen lain.

Struktur `profile` object:
- `identity` — nama, email, linkedin, github, lokasi
- `summary` — paragraf deskripsi diri
- `highlights` — 3 poin keunggulan
- `skills.technical` — array skill teknis
- `skills.soft` — array soft skills
- `projects` — array proyek (title, stack, description, outcomes, links)
- `education` — array pendidikan
- `certifications` — array sertifikat (name, issuer, year, url)
- `languages` — array bahasa

### `src/components/CubesBg.jsx` — Animasi background
Canvas-based, 60 kubus floating naik dengan warna biru/indigo/purple.
Otomatis berhenti jika user aktifkan `prefers-reduced-motion`.
Hanya dipakai di Hero section.

---

## Yang BOLEH Diubah

- `src/data.js` — bebas ganti semua konten
- `src/index.css` — warna, font, spacing global
- Jumlah kubus di `CubesBg.jsx` (konstanta `CUBE_COUNT`)
- Warna kubus di `CubesBg.jsx` (array `COLORS`)
- Teks navigasi di `Navbar.jsx` (array `links`)
- Urutan section di `App.jsx`
- Menambah section baru sebagai komponen baru

## Yang JANGAN Diubah Sembarangan

- `vite.config.js` — konfigurasi build, jangan ubah kecuali perlu
- `.netlify/` — konfigurasi deployment Netlify
- `package.json` — dependency versions, gunakan `npm install` untuk tambah package baru
- Struktur `profile` object di `data.js` — komponen bergantung pada key yang ada, jangan hapus key yang sudah ada (boleh tambah)

---

## Cara Jalankan Lokal

```bash
npm install
npm run dev        # dev server di http://localhost:5173
```

## Cara Build & Deploy

```bash
npm run build      # output ke /dist
npm run preview    # preview build lokal
```

Deploy otomatis ke Netlify saat push ke branch main (sudah terkonfigurasi).
Bisa juga drag-and-drop folder `/dist` ke Netlify dashboard.

---

## Konvensi Kode

- Semua komponen pakai **functional component** + hooks
- Styling pakai **Tailwind utility classes** + inline style untuk nilai dinamis
- Animasi hover/tap pakai **Framer Motion** (`motion.div`, `whileHover`, `whileTap`)
- Animasi entrance/scroll pakai **CSS** atau **Canvas** (bukan library berat)
- Tidak ada state management global (tidak pakai Redux/Zustand)
- Tidak ada routing (single page, navigasi pakai anchor `#id`)

---

## Catatan Penting

- Web ini **tidak punya backend** — semua data statis dari `data.js`
- Tidak ada form submission yang berfungsi — tombol kontak langsung ke `mailto:`
- Responsive mobile sudah ditangani Tailwind (`md:` breakpoint)
- Background gelap `#0b0b0f` adalah warna utama, jangan diganti ke warna terang
