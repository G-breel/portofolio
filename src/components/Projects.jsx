import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data.js';

export default function Projects() {
  const { projects } = profile;

  return (
    <section id="proyek" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Yang Pernah Dibangun</h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl">Beberapa proyek yang mencerminkan kemampuan teknis dan problem-solving.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bento-card flex flex-col"
            >
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-[#a1a1aa] text-sm">{p.period} · {p.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#e4e4e7]">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">{p.description}</p>

                <ul className="space-y-2 mb-8">
                  {p.outcomes.map((o, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                      <span className="text-[#f9a8d4] mt-0.5 text-xs">✦</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)]">
                {p.links?.demo && p.links.demo !== '#' && (
                  <a
                    href={p.links.demo}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-white text-black text-sm font-semibold text-center hover:bg-opacity-90 transition-all"
                  >
                    Demo
                  </a>
                )}
                {p.links?.repo && (
                  <a
                    href={p.links.repo}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-sm font-semibold text-center hover:bg-[rgba(255,255,255,0.1)] transition-all"
                  >
                    Repositori
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
