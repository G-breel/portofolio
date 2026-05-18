# Design Document: Anime.js Animations

## Overview

Upgrade animasi portofolio dari Framer Motion ke Anime.js v4. Framer Motion tetap dipakai untuk interaksi hover/tap (karena sudah terintegrasi baik), tapi semua entrance animation, scroll-triggered animation, dan efek looping diganti ke Anime.js untuk hasil yang lebih dramatis dan berkarakter.

Anime.js v4 menggunakan ES module imports:
```js
import { animate, createTimeline, stagger } from 'animejs';
```

## Architecture

```
src/
├── hooks/
│   └── useAnime.js          ← utility hooks (useScrollAnime)
├── components/
│   ├── Hero.jsx             ← timeline entrance + orb + scroll indicator
│   ├── Navbar.jsx           ← slide-in + stagger nav links
│   ├── About.jsx            ← scroll-triggered stagger
│   ├── Projects.jsx         ← scroll-triggered per card
│   ├── Certificates.jsx     ← stagger grid + modal animation
│   ├── Contact.jsx          ← sequential entrance
│   └── Footer.jsx           ← fade in
```

Framer Motion dipertahankan hanya untuk `whileHover` dan `whileTap` pada tombol/link karena sudah berfungsi baik dan tidak perlu diganti.

## Components and Interfaces

### `useScrollAnime` hook

```js
// src/hooks/useAnime.js
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

/**
 * Memicu animasi Anime.js saat elemen masuk viewport.
 * @param {Function} animateFn - fungsi yang menerima (targets) dan menjalankan animate()
 * @param {Object} options - { threshold: 0.15, once: true }
 */
export function useScrollAnime(ref, animateFn, deps = [], options = {}) {
  const { threshold = 0.15, once = true } = options;
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasRun.current)) {
          hasRun.current = true;
          if (!prefersReduced) {
            animateFn(el);
          }
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, deps);
}
```

### Hero Timeline

```js
// Dijalankan sekali saat mount dengan createTimeline
useEffect(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const tl = createTimeline({ defaults: { ease: 'easeOutExpo', duration: 700 } });
  tl
    .add('#hero-badge',    { opacity: [0, 1], translateY: [20, 0] }, 0)
    .add('#hero-name',     { opacity: [0, 1], translateY: [28, 0] }, 150)
    .add('#hero-typing',   { opacity: [0, 1], translateY: [20, 0] }, 300)
    .add('#hero-subtitle', { opacity: [0, 1], translateY: [20, 0] }, 420)
    .add('#hero-buttons',  { opacity: [0, 1], translateY: [16, 0] }, 540)
    .add('#hero-meta',     { opacity: [0, 1], translateY: [12, 0] }, 650);

  // Orb pulsing loop
  animate('.orb-1', { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6], duration: 4000, loop: true, ease: 'easeInOutSine' });
  animate('.orb-2', { scale: [1, 1.1, 1],  opacity: [0.5, 0.9, 0.5], duration: 5000, loop: true, ease: 'easeInOutSine', delay: 1000 });

  // Scroll indicator bounce
  animate('#scroll-indicator', { translateY: [0, 10, 0], duration: 1500, loop: true, ease: 'easeInOutSine' });
}, []);
```

### Scroll-triggered Pattern (About, Projects, Certificates, Contact, Footer)

Setiap section menggunakan `useScrollAnime` dengan pola yang konsisten:

```js
const sectionRef = useRef(null);
useScrollAnime(sectionRef, (el) => {
  animate(el.querySelectorAll('.animate-item'), {
    opacity: [0, 1],
    translateY: [28, 0],
    delay: stagger(80),
    duration: 600,
    ease: 'easeOutExpo',
  });
});
```

## Data Models

Tidak ada perubahan data model. Semua animasi bersifat presentational dan tidak mempengaruhi `src/data.js`.

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Visibility Guarantee (Fallback)

*For any* elemen yang dianimasikan, jika JavaScript gagal atau animasi tidak berjalan, elemen tersebut harus tetap visible karena CSS default-nya adalah `opacity: 1` dan tidak ada `transform` yang tersembunyi.

**Validates: Requirements 2.5, 9.3**

Implementasi: Semua elemen yang dianimasikan dimulai dengan CSS `opacity: 1` (bukan 0). Anime.js akan menganimasikan dari nilai awal yang di-set via parameter `opacity: [0, 1]` — artinya nilai awal 0 hanya ada selama animasi berjalan, bukan di CSS statis. Untuk memastikan ini, elemen-elemen kritis diberi class `anime-target` dengan CSS:

```css
.anime-target { opacity: 1; } /* fallback jika JS gagal */
```

Dan Anime.js menggunakan `from` value di dalam tween, bukan mengubah CSS awal.

### Property 2: Reduced Motion Compliance

*For any* pengguna yang mengaktifkan `prefers-reduced-motion: reduce`, semua animasi Anime.js tidak boleh dijalankan, sehingga elemen langsung muncul tanpa transisi.

**Validates: Requirements 9.1**

Implementasi: Setiap titik di mana `animate()` atau `createTimeline()` dipanggil, didahului dengan pengecekan:
```js
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) return;
```

## Error Handling

- Jika `ref.current` adalah `null` saat `useScrollAnime` dijalankan, hook langsung return tanpa error
- Jika `IntersectionObserver` tidak tersedia (browser lama), elemen tetap visible karena CSS fallback
- Jika `animejs` gagal di-import, komponen tetap render karena Framer Motion masih ada untuk hover/tap

## Testing Strategy

### Unit Tests
- Verifikasi bahwa `useScrollAnime` tidak memanggil `animateFn` lebih dari sekali ketika `once: true`
- Verifikasi bahwa `useScrollAnime` tidak memanggil `animateFn` ketika `prefers-reduced-motion: reduce` aktif

### Property Tests
Tidak ada property-based test yang diperlukan untuk fitur ini karena semua behavior bersifat visual/DOM dan lebih tepat diverifikasi dengan unit tests dan manual visual testing.

**Dual approach:**
- Unit tests: untuk behavior `useScrollAnime` hook (once, reduced-motion)
- Visual testing: manual review di browser untuk memastikan animasi terlihat bagus
- Tidak menggunakan property-based testing karena tidak ada fungsi murni dengan input/output yang bisa di-generate secara random
