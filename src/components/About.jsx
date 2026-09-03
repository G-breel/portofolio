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
    <section id="tentang" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Tentang</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Main About Text */}
          <FadeIn delay={0.1} className="md:col-span-2 bento-card">
            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">{summary}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                  <span className="text-[#fcd34d] mt-0.5 text-lg">✦</span>
                  <span className="text-[#a1a1aa] text-sm leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Skills Column */}
          <FadeIn delay={0.2} className="bento-card flex flex-col gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Teknis</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#e4e4e7]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#fcd34d]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
