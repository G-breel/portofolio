import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data.js';

export default function Certificates() {
  const { certifications, education, languages } = profile;
  const [selected, setSelected] = useState(null);

  return (
    <section id="sertifikasi" className="py-32 px-6">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Pendidikan &amp; Sertifikasi</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Latar Belakang</h2>
        </motion.div>

        {/* Education + Languages */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 mb-16">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#111111] border border-white/[0.06]"
            >
              <p className="text-xs text-[#a1a1aa] uppercase tracking-widest mb-2">Pendidikan</p>
              <h3 className="text-white font-semibold text-lg">{e.school}</h3>
              <p className="text-[#a1a1aa] text-sm mt-1">{e.program}</p>
              <p className="text-[#a1a1aa] text-sm">{e.note}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 rounded-2xl bg-[#111111] border border-white/[0.06]"
          >
            <p className="text-xs text-[#a1a1aa] uppercase tracking-widest mb-4">Bahasa</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l.name} className="px-3 py-1.5 rounded-full text-sm bg-white/[0.04] border border-white/[0.08] text-[#e4e4e7]">
                  {l.name} <span className="text-[#a1a1aa]">· {l.level}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certificates grid */}
        <p className="text-xs text-[#a1a1aa] uppercase tracking-widest mb-6">Sertifikasi</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -3, borderColor: 'rgba(59,130,246,0.35)' }}
              onClick={() => c.url && setSelected(c)}
              className={`p-5 rounded-2xl bg-[#111111] border border-white/[0.06] transition-all duration-300 ${c.url ? 'cursor-pointer hover:bg-blue-500/[0.04]' : ''}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-white text-sm font-medium leading-snug">{c.name}</p>
                  <p className="text-[#a1a1aa] text-xs mt-1.5">{c.issuer} · {c.year}</p>
                </div>
                {c.url && (
                  <span className="text-blue-400 text-xs shrink-0 mt-0.5">↗</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111111] border border-white/10 rounded-3xl p-8 max-w-md w-full"
            >
              <p className="text-white font-semibold text-lg mb-2">{selected.name}</p>
              <p className="text-[#a1a1aa] text-sm mb-6">{selected.issuer} · {selected.year}</p>
              <div className="flex gap-3">
                <a
                  href={selected.url}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold text-center transition-colors"
                >
                  Lihat Sertifikat
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-3 rounded-full border border-white/15 hover:border-white/30 text-white text-sm font-medium transition-all"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
