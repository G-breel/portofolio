import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Sertifikasi', href: '#sertifikasi' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`text-xl font-bold tracking-tighter ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity`}>
          Jibril<span className="text-[#3b82f6]">.</span>
        </a>

        {/* Desktop Nav in a floating pill container */}
        <div className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl shadow-2xl'
            : 'bg-transparent'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors rounded-full hover:bg-[rgba(255,255,255,0.05)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 flex flex-col gap-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#a1a1aa] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-xl font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
