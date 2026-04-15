/**
 * Sunting semua data portofolio di file ini untuk keperluan HR / rekrutmen.
 * Ganti URL, nama, dan teks sesuai profil Anda.
 */

export const profile = {
  identity: {
    name: 'Jibril Fathanneo Putra P',
    headline: 'Junior Web Developer · Growth Mindset dan Siap Berkembang',
    location: 'Bogor, Indonesia',
    email: 'jibrilfathanneo10@gmail.com',
    phone: '',
    linkedin: 'https://www.linkedin.com/in/jibrilf',
    github: 'https://github.com/G-breel',
    portfolioUrl: 'https://example.com',
  },

  summary: `Saya adalah junior web developer dengan fokus pada pengembangan aplikasi web yang rapi, fungsional, dan mudah digunakan.
Memiliki pengalaman belajar dan praktik menggunakan JavaScript, React, Node.js, serta database.
Aktif membangun proyek untuk memperkuat kemampuan teknis, problem solving, dan kolaborasi tim.`,

  highlights: [
    'Konsisten mengembangkan kemampuan melalui proyek dan praktik rutin',
    'Membangun fitur web dari frontend hingga backend secara bertahap',
    'Terbiasa menggunakan Git dan GitHub untuk kolaborasi dan version control',
  ],

  skills: {
    technical: [
      'JavaScript (ES6+)',
      'React',
      'Node.js & Express',
      'REST API',
      'MongoDB',
      'MySQL',
      'HTML & CSS / Tailwind',
      'Git',
    ],
    soft: ['Komunikasi', 'Manajemen waktu', 'Problem solving', 'Belajar cepat'],
  },

  projects: [
    {
      title: 'TabunganQu — Aplikasi Pengelola Tabungan',
      period: '2026',
      role: 'Full Stack Developer (Capstone)',
      stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      description:
        'Aplikasi web untuk mencatat pemasukan dan pengeluaran, memantau saldo, serta mengelola wishlist tabungan dengan target nominal.',
      outcomes: [
        'Autentikasi pengguna dan proteksi route',
        'CRUD transaksi dan agregasi untuk laporan',
        'Modul wishlist dengan progres tabungan',
      ],
      links: {
        repo: 'https://github.com/username/Capstone-projek',
        demo: 'https://tabungan-qu-frontend.vercel.app',
      },
    },
    {
      title: 'Portofolio Interaktif (situs ini)',
      period: '2026',
      role: 'Frontend',
      stack: ['Vite', 'Vanilla JS', 'CSS'],
      description:
        'Landing page portofolio satu halaman yang ringan, responsif, dan mudah disesuaikan untuk lamaran kerja.',
      outcomes: ['Struktur data terpisah untuk konten', 'Build statis siap deploy (Vercel / Netlify / hosting statis)'],
      links: {
        repo: 'https://github.com/username/porto',
        demo: '#',
      },
    },
  ],

  education: [
    {
      school: 'SMKN 1 Ciomas',
      program: 'Software and Game Development (PPLG)',
      period: 'Student',
      note: 'Major: Software and Game Development (Pengembangan Perangkat Lunak dan Game).',
    },
  ],

  certifications: [
    {
      name: 'Belajar Dasar AI',
      issuer: 'Dicoding',
      year: '2025',
      url: 'https://www.dicoding.com/certificates/4EXG30W8DZRL',
    },
    {
      name: 'Belajar Dasar Cloud dan Gen AI di AWS',
      issuer: 'Dicoding',
      year: '2026',
      url: 'https://www.dicoding.com/certificates/1OP8JKR2VPQK',
    },
    {
      name: 'Belajar Dasar Pemrograman JavaScript',
      issuer: 'Dicoding',
      year: '2026',
      url: 'https://www.dicoding.com/certificates/GRX5J5Q7YX0M',
    },
    {
      name: 'Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding',
      year: '2026',
      url: 'https://www.dicoding.com/certificates/6RPNGE7G9Z2M',
    },
    {
      name: 'Belajar Membuat Aplikasi Web dengan React',
      issuer: 'Dicoding',
      year: '2026',
      url: 'https://www.dicoding.com/certificates/81P2OG74NZOY',
    },
    {
      name: 'Belajar Membuat Front-End Web untuk Pemula',
      issuer: 'Dicoding',
      year: '2026',
      url: 'https://www.dicoding.com/certificates/GRX5JV3GYX0M',
    },
    {
      name: 'Financial Literacy 101',
      issuer: 'Dicoding',
      year: '2025',
      url: 'https://www.dicoding.com/certificates/GRX5382WKZ0M',
    },
    {
      name: 'Literasi Keuangan: Edukasi Pembiayaan Program CSR FIFGROUP PINTAR',
      issuer: 'FIFGROUP CSR',
      year: '2025',
    },
    {
      name: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      issuer: 'Dicoding',
      year: '2026',
      url: 'https://www.dicoding.com/certificates/N9ZO2VN96PG5',
    },
    {
      name: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
      issuer: 'Dicoding',
      year: '2026',
      url: 'https://www.dicoding.com/certificates/MEPJ2159WP3V',
    },
  ],

  languages: [
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'English', level: 'Basic' },
  ],
};
