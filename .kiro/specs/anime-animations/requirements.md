# Requirements Document

## Introduction

Upgrade animasi portofolio Jibril dari Framer Motion ke Anime.js untuk menghadirkan animasi yang lebih keren, halus, dan berkarakter. Animasi mencakup semua section: Hero, Navbar, About, Projects, Certificates, Contact, dan Footer. Framer Motion tetap bisa dipertahankan untuk interaksi hover/tap sederhana, namun animasi masuk (entrance), scroll-triggered, dan efek khusus menggunakan Anime.js.

## Glossary

- **Anime.js**: Library animasi JavaScript ringan dan powerful dari animejs.com
- **Entrance Animation**: Animasi yang berjalan saat elemen pertama kali muncul di layar
- **Scroll-triggered**: Animasi yang dipicu saat elemen masuk ke viewport saat scroll
- **Stagger**: Animasi berurutan dengan delay antar elemen
- **Timeline**: Rangkaian animasi yang dijalankan secara berurutan atau bersamaan
- **Orb**: Elemen lingkaran blur dekoratif di background Hero
- **Hero**: Section pertama halaman yang menampilkan nama, role, dan CTA
- **IntersectionObserver**: Web API untuk mendeteksi elemen masuk viewport

## Requirements

### Requirement 1: Instalasi dan Setup Anime.js

**User Story:** Sebagai developer, saya ingin menginstal Anime.js dan membuat utility hook, sehingga semua komponen bisa menggunakan animasi Anime.js secara konsisten.

#### Acceptance Criteria

1. THE System SHALL menginstal package `animejs` versi terbaru (v4+) via npm
2. THE System SHALL membuat custom hook `useAnime` yang menerima ref elemen dan konfigurasi animasi
3. THE System SHALL membuat custom hook `useScrollAnime` yang memicu animasi Anime.js saat elemen masuk viewport menggunakan IntersectionObserver
4. WHEN hook `useScrollAnime` dipanggil, THE System SHALL hanya memicu animasi satu kali (once) per elemen secara default
5. THE System SHALL membuat file `src/hooks/useAnime.js` sebagai entry point semua utility animasi

---

### Requirement 2: Animasi Hero Section

**User Story:** Sebagai pengunjung, saya ingin melihat animasi masuk yang dramatis di Hero section, sehingga kesan pertama portofolio terasa profesional dan berkarakter.

#### Acceptance Criteria

1. WHEN halaman pertama dimuat, THE Hero SHALL menjalankan timeline animasi masuk secara berurutan: badge → nama → typing role → subtitle → tombol CTA → meta info
2. THE Hero SHALL menganimasikan setiap elemen dengan efek `translateY` dari bawah dan `opacity` dari 0 ke 1 menggunakan easing `easeOutExpo`
3. THE Hero SHALL menganimasikan orb background dengan efek `scale` dan `opacity` pulsing secara looping menggunakan Anime.js
4. THE Hero SHALL menganimasikan scroll indicator dengan efek `translateY` bouncing looping
5. WHEN animasi masuk selesai, THE Hero SHALL memastikan semua elemen tetap visible (opacity: 1, transform: none)

---

### Requirement 3: Animasi Navbar

**User Story:** Sebagai pengunjung, saya ingin navbar muncul dengan animasi halus saat halaman dimuat, sehingga transisi terasa mulus.

#### Acceptance Criteria

1. WHEN halaman dimuat, THE Navbar SHALL slide masuk dari atas (`translateY: -80 → 0`) dengan `opacity: 0 → 1` menggunakan Anime.js
2. THE Navbar SHALL menganimasikan setiap nav link dengan stagger delay menggunakan Anime.js saat pertama muncul
3. WHEN mobile menu dibuka, THE Navbar SHALL menganimasikan setiap menu item dengan stagger slide-in dari kiri menggunakan Anime.js

---

### Requirement 4: Animasi About Section

**User Story:** Sebagai pengunjung, saya ingin elemen di About section muncul secara bertahap saat di-scroll, sehingga konten terasa hidup.

#### Acceptance Criteria

1. WHEN About section masuk viewport, THE About SHALL menganimasikan heading dan label dengan `translateY` dan `opacity` menggunakan Anime.js
2. WHEN About section masuk viewport, THE About SHALL menganimasikan highlight cards dengan stagger dari kiri ke kanan menggunakan Anime.js
3. WHEN About section masuk viewport, THE About SHALL menganimasikan skill badges dengan stagger `scale` dari 0.8 ke 1 dan `opacity` menggunakan Anime.js

---

### Requirement 5: Animasi Projects Section

**User Story:** Sebagai pengunjung, saya ingin project cards muncul dengan animasi yang menarik saat di-scroll, sehingga setiap proyek terasa penting.

#### Acceptance Criteria

1. WHEN Projects section masuk viewport, THE Projects SHALL menganimasikan heading dengan `translateY` dan `opacity` menggunakan Anime.js
2. WHEN setiap project card masuk viewport, THE Projects SHALL menganimasikan card dengan `translateY` dari bawah dan `opacity` menggunakan Anime.js dengan stagger antar card
3. THE Projects SHALL menganimasikan stack badge di dalam card dengan stagger `scale` saat card muncul

---

### Requirement 6: Animasi Certificates Section

**User Story:** Sebagai pengunjung, saya ingin certificate cards muncul dengan animasi grid yang rapi saat di-scroll, sehingga terlihat profesional.

#### Acceptance Criteria

1. WHEN Certificates section masuk viewport, THE Certificates SHALL menganimasikan heading dengan `translateY` dan `opacity` menggunakan Anime.js
2. WHEN certificate grid masuk viewport, THE Certificates SHALL menganimasikan setiap card dengan stagger `scale` dari 0.9 ke 1 dan `opacity` menggunakan Anime.js
3. WHEN modal sertifikat dibuka, THE Certificates SHALL menganimasikan modal masuk dengan `scale` dan `opacity` menggunakan Anime.js

---

### Requirement 7: Animasi Contact Section

**User Story:** Sebagai pengunjung, saya ingin Contact section muncul dengan animasi yang mengundang, sehingga saya terdorong untuk menghubungi.

#### Acceptance Criteria

1. WHEN Contact section masuk viewport, THE Contact SHALL menganimasikan heading, deskripsi, dan tombol secara berurutan dengan `translateY` dan `opacity` menggunakan Anime.js
2. WHEN contact info card masuk viewport, THE Contact SHALL menganimasikan setiap item info (lokasi, email, status) dengan stagger menggunakan Anime.js

---

### Requirement 8: Animasi Footer

**User Story:** Sebagai pengunjung, saya ingin footer muncul dengan animasi halus, sehingga halaman terasa lengkap dan konsisten.

#### Acceptance Criteria

1. WHEN Footer masuk viewport, THE Footer SHALL menganimasikan konten dengan `opacity` dan `translateY` menggunakan Anime.js

---

### Requirement 9: Performa dan Aksesibilitas

**User Story:** Sebagai pengunjung, saya ingin animasi tidak mengganggu performa atau aksesibilitas, sehingga pengalaman tetap nyaman untuk semua pengguna.

#### Acceptance Criteria

1. THE System SHALL menghormati preferensi `prefers-reduced-motion` dengan menonaktifkan atau meminimalkan animasi
2. THE System SHALL memastikan semua animasi menggunakan properti CSS yang GPU-accelerated (`transform`, `opacity`) untuk performa optimal
3. IF animasi gagal dijalankan, THEN THE System SHALL memastikan elemen tetap visible dengan fallback CSS (`opacity: 1`, `transform: none`)
