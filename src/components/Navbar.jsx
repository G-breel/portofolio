import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data.js';

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#sertifikasi', label: 'Sertifikasi' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[rgba(11,11,15,0.85)] backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 w-full" style={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <motion.a
          href="#"
          className="text-white font-semibold text-lg tracking-tight"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          {profile.identity.name.split(' ')[0]}
          <span className="text-[#3b82f6]">.</span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${active === l.href
                  ? 'text-white bg-white/10'
                  : 'text-[#a1a1aa] hover:text-white hover:bg-white/[0.06]'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white rounded-full origin-center transition-all"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white rounded-full origin-center transition-all"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[rgba(11,11,15,0.95)] backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { setOpen(false); setActive(l.href); }}
                  className="py-3 px-4 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-all"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
