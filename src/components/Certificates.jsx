import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data.js';

export default function Certificates() {
  const { certifications, education, languages } = profile;
  const [selected, setSelected] = useState(null);

  return (
    <section id="sertifikasi" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Latar Belakang</h2>
        </motion.div>

        {/* Education + Languages */}
        <div className="mt-12 grid md:grid-cols-2 gap-4 mb-12">
          {education.map((e, i) => (
            <div key={i} className="bento-card">
              <p className="text-xs text-[#a1a1aa] uppercase tracking-widest mb-4">Pendidikan</p>
              <h3 className="text-white font-bold text-xl">{e.school}</h3>
              <p className="text-[#a1a1aa] text-sm mt-1 mb-3">{e.program}</p>
              <p className="text-[#a1a1aa] text-sm">{e.note}</p>
            </div>
          ))}
          <div className="bento-card bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
            <p className="text-xs text-[#a1a1aa] uppercase tracking-widest mb-6">Bahasa</p>
            <div className="flex flex-wrap gap-3">
              {languages.map((l) => (
                <span key={l.name} className="px-4 py-2 rounded-xl text-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white">
                  {l.name} <span className="text-[#a1a1aa] ml-2">· {l.level}</span>
                </span>
              ))}
            </div>
          </div>
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
              onClick={() => c.url && setSelected(c)}
              className={`bento-card flex flex-col justify-between ${c.url ? 'cursor-pointer hover:border-[rgba(255,255,255,0.3)]' : ''}`}
            >
              <div>
                <p className="text-white text-base font-semibold leading-snug">{c.name}</p>
                <p className="text-[#a1a1aa] text-sm mt-2">{c.issuer} · {c.year}</p>
              </div>
              {c.url && (
                <div className="mt-4 flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white text-sm">↗</span>
                </div>
              )}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bento-card p-8 max-w-md w-full bg-[#111]"
            >
              <p className="text-white font-bold text-xl mb-2">{selected.name}</p>
              <p className="text-[#a1a1aa] text-sm mb-8">{selected.issuer} · {selected.year}</p>
              <div className="flex gap-3">
                <a
                  href={selected.url}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-4 rounded-xl bg-white text-black text-sm font-semibold text-center hover:bg-opacity-90 transition-all"
                >
                  Lihat Sertifikat
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-sm font-semibold transition-all hover:bg-[rgba(255,255,255,0.1)]"
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
