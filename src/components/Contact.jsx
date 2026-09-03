import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data.js';

export default function Contact() {
  const { identity } = profile;

  return (
    <section id="kontak" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Mari Berkenalan
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-lg mx-auto leading-relaxed">
            Terbuka untuk diskusi magang, lowongan, atau kolaborasi proyek. Jangan ragu untuk menghubungi.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bento-card max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-xl mb-4">📍</div>
            <p className="text-white font-medium text-base mb-1">Lokasi</p>
            <p className="text-[#a1a1aa] text-sm">{identity.location}</p>
          </div>
          <div className="flex flex-col items-center sm:border-x border-[rgba(255,255,255,0.05)] sm:px-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-xl mb-4">✉️</div>
            <p className="text-white font-medium text-base mb-1">Email</p>
            <p className="text-[#a1a1aa] text-sm break-all">{identity.email}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] flex items-center justify-center text-xl mb-4">💼</div>
            <p className="text-white font-medium text-base mb-1">Status</p>
            <p className="text-[#fcd34d] text-sm">Terbuka untuk peluang</p>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href={`mailto:${identity.email}`}
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-opacity-90 transition-all"
          >
            Kirim Pesan
          </a>
          {identity.linkedin && (
            <a
              href={identity.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-semibold hover:bg-[rgba(255,255,255,0.1)] transition-all"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
