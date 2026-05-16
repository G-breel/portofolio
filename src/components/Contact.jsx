import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data.js';

export default function Contact() {
  const { identity } = profile;

  return (
    <section id="kontak" className="py-32 px-6">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Kontak</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Mari Berkenalan
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-lg mx-auto leading-relaxed mb-12">
            Terbuka untuk diskusi magang, lowongan, atau kolaborasi proyek. Jangan ragu untuk menghubungi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`mailto:${identity.email}`}
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(59,130,246,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200"
            >
              {identity.email}
            </motion.a>
            {identity.linkedin && (
              <motion.a
                href={identity.linkedin}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-base transition-all duration-200"
              >
                LinkedIn
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20 p-8 rounded-3xl bg-[#111111] border border-white/[0.06] grid sm:grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-2xl mb-2">📍</p>
            <p className="text-white font-medium text-sm">Lokasi</p>
            <p className="text-[#a1a1aa] text-sm mt-1">{identity.location}</p>
          </div>
          <div>
            <p className="text-2xl mb-2">✉️</p>
            <p className="text-white font-medium text-sm">Email</p>
            <p className="text-[#a1a1aa] text-sm mt-1 break-all">{identity.email}</p>
          </div>
          <div>
            <p className="text-2xl mb-2">💼</p>
            <p className="text-white font-medium text-sm">Status</p>
            <p className="text-blue-400 text-sm mt-1">Terbuka untuk peluang</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
