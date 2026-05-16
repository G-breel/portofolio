import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data.js';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { summary, highlights, skills } = profile;

  return (
    <section id="tentang" className="py-32 px-6">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <FadeIn>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Tentang</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Profil Profesional</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <FadeIn delay={0.1}>
            <p className="text-[#a1a1aa] text-lg leading-relaxed">{summary}</p>
            <div className="mt-8 grid gap-3" id="keahlian">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-300"
                >
                  <span className="text-blue-400 mt-0.5 text-lg">✓</span>
                  <span className="text-[#a1a1aa] text-sm leading-relaxed">{h}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#a1a1aa] mb-4">Teknis</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.5)' }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/[0.04] border border-white/[0.08] text-[#e4e4e7] cursor-default transition-all duration-200"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#a1a1aa] mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300 cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
