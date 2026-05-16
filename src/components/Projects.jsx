import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data.js';

export default function Projects() {
  const { projects } = profile;

  return (
    <section id="proyek" className="py-32 px-6">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Proyek</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Yang Pernah Dibangun</h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl">Beberapa proyek yang mencerminkan kemampuan teknis dan problem-solving.</p>
        </motion.div>

        <div className="mt-16 grid gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative p-8 rounded-3xl bg-[#111111] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-400 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  </div>
                  <p className="text-[#a1a1aa] text-sm mb-4">{p.period} · {p.role}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">{p.description}</p>

                  <ul className="space-y-1.5">
                    {p.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                        <span className="text-blue-400 mt-0.5 text-xs">→</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-row md:flex-col gap-3 shrink-0">
                  {p.links?.repo && (
                    <motion.a
                      href={p.links.repo}
                      target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium transition-all duration-200 text-center"
                    >
                      Repositori
                    </motion.a>
                  )}
                  {p.links?.demo && p.links.demo !== '#' && (
                    <motion.a
                      href={p.links.demo}
                      target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(59,130,246,0.3)' }}
                      whileTap={{ scale: 0.96 }}
                      className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 text-center"
                    >
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
