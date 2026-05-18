# Implementation Plan: Anime.js Animations

## Overview

Upgrade animasi portofolio menggunakan Anime.js v4. Setiap task bersifat incremental dan langsung bisa diverifikasi di browser.

## Tasks

- [ ] 1. Install Anime.js dan buat utility hook
  - Install package `animejs` via npm
  - Buat file `src/hooks/useAnime.js` dengan hook `useScrollAnime` menggunakan IntersectionObserver
  - Hook harus respek `prefers-reduced-motion` dan hanya trigger sekali (once)
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 9.1_

- [ ] 2. Animasi Hero Section
  - [ ] 2.1 Tambahkan id pada elemen Hero (`hero-badge`, `hero-name`, `hero-typing`, `hero-subtitle`, `hero-buttons`, `hero-meta`, `scroll-indicator`)
    - Ganti `motion.div` entrance dengan elemen biasa + id untuk Anime.js
    - Pertahankan `motion.a` untuk hover/tap tombol
    - _Requirements: 2.1, 2.5_
  - [ ] 2.2 Implementasi `createTimeline` entrance animation di Hero
    - Timeline berurutan: badge → nama → typing → subtitle → tombol → meta
    - Easing `easeOutExpo`, duration 700ms per elemen
    - _Requirements: 2.1, 2.2_
  - [ ] 2.3 Implementasi orb pulsing dan scroll indicator bounce
    - Orb: `scale` + `opacity` loop dengan `easeInOutSine`
    - Scroll indicator: `translateY` bounce loop
    - _Requirements: 2.3, 2.4_

- [ ] 3. Animasi Navbar
  - [ ] 3.1 Ganti entrance Navbar dari Framer Motion ke Anime.js
    - Slide dari atas (`translateY: [-80, 0]`) + `opacity: [0, 1]`
    - Stagger nav links desktop saat pertama muncul
    - _Requirements: 3.1, 3.2_
  - [ ] 3.2 Animasi mobile menu dengan Anime.js stagger
    - Saat menu dibuka, stagger slide-in dari kiri untuk setiap item
    - _Requirements: 3.3_

- [ ] 4. Checkpoint — Pastikan Hero dan Navbar animasi berjalan dengan benar di browser

- [ ] 5. Animasi About Section
  - [ ] 5.1 Tambahkan ref dan class `animate-item` pada elemen About
    - Heading, label, highlight cards, skill badges
    - _Requirements: 4.1, 4.2, 4.3_
  - [ ] 5.2 Implementasi `useScrollAnime` di About
    - Heading: `translateY` + `opacity`
    - Highlight cards: stagger dari kiri
    - Skill badges: stagger `scale` + `opacity`
    - _Requirements: 4.1, 4.2, 4.3_

- [ ] 6. Animasi Projects Section
  - [ ] 6.1 Implementasi scroll-triggered animation per project card
    - Setiap card: `translateY` dari bawah + `opacity` dengan stagger
    - _Requirements: 5.1, 5.2_
  - [ ] 6.2 Stagger stack badges saat card muncul
    - `scale: [0.8, 1]` + `opacity` dengan stagger kecil
    - _Requirements: 5.3_

- [ ] 7. Animasi Certificates Section
  - [ ] 7.1 Implementasi stagger grid untuk certificate cards
    - `scale: [0.9, 1]` + `opacity` dengan stagger
    - _Requirements: 6.1, 6.2_
  - [ ] 7.2 Animasi modal sertifikat dengan Anime.js
    - Modal masuk: `scale: [0.9, 1]` + `opacity: [0, 1]`
    - _Requirements: 6.3_

- [ ] 8. Checkpoint — Pastikan semua section scroll-triggered berjalan dengan benar

- [ ] 9. Animasi Contact dan Footer
  - [ ] 9.1 Implementasi sequential entrance di Contact
    - Heading → deskripsi → tombol → info cards secara berurutan
    - _Requirements: 7.1, 7.2_
  - [ ] 9.2 Implementasi fade in di Footer
    - `opacity: [0, 1]` + `translateY: [16, 0]`
    - _Requirements: 8.1_

- [ ] 10. CSS Fallback dan cleanup
  - Tambahkan CSS fallback `.anime-target { opacity: 1; }` di `index.css`
  - Update teks footer dari "Framer Motion" ke "Anime.js"
  - Hapus import Framer Motion yang tidak lagi dipakai di komponen yang sudah dimigrasikan
  - _Requirements: 9.2, 9.3_

- [ ] 11. Final Checkpoint — Pastikan semua animasi berjalan, tidak ada elemen yang invisible, dan `prefers-reduced-motion` dihormati

## Notes

- Tasks bertanda `*` adalah opsional (efek tambahan, bisa diskip untuk MVP)
- Framer Motion tetap dipertahankan untuk `whileHover` dan `whileTap` — tidak perlu dihapus
- Setiap task bisa langsung diverifikasi dengan `npm run dev` di browser
