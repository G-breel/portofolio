import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data.js';

const roles = ['Frontend Developer', 'Web Developer', 'Junior Engineer'];

function useTyping(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    let timeout;
    if (!deleting) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), speed / 2);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, words, speed, pause]);

  return display;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const typed = useTyping(roles);
  const { identity, summary } = profile;

  return (
    <section className="hero-section">
      {/* Orbs */}
      <div className="orb-1" />
      <div className="orb-2" />

      <div className="hero-content">
        {/* Badge */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem 1rem', borderRadius: '999px',
            border: '1px solid rgba(59,130,246,0.35)',
            background: 'rgba(59,130,246,0.1)',
            color: '#93c5fd', fontSize: '0.875rem', fontWeight: 500,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#60a5fa', animation: 'pulse 2s infinite' }} />
            Terbuka untuk magang &amp; full-time
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: '1.25rem',
        }}>
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {identity.name.split(' ')[0]}
          </span>
        </motion.h1>

        {/* Typing */}
        <motion.div {...fadeUp(0.2)} style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
          fontWeight: 500,
          color: '#a1a1aa',
          marginBottom: '1.5rem',
          minHeight: '2.5rem',
        }}>
          <span style={{ color: '#ffffff' }}>{typed}</span>
          <span style={{ color: '#60a5fa', animation: 'blink 1s step-end infinite' }}>|</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.3)} style={{
          color: '#a1a1aa', fontSize: '1.1rem',
          maxWidth: '36rem', margin: '0 auto 2.5rem',
          lineHeight: 1.75,
        }}>
          {summary.split('\n')[0].trim()}
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.4)} style={{
          display: 'flex', flexWrap: 'wrap',
          gap: '1rem', justifyContent: 'center',
        }}>
          <motion.a
            href={`mailto:${identity.email}`}
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(59,130,246,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.875rem 2rem', borderRadius: '999px',
              background: '#2563eb', color: '#fff',
              fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', display: 'inline-block',
              transition: 'background 0.2s',
            }}
          >
            Hubungi via Email
          </motion.a>
          {identity.github && (
            <motion.a
              href={identity.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.875rem 2rem', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.04)', color: '#fff',
                fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none', display: 'inline-block',
              }}
            >
              GitHub
            </motion.a>
          )}
          {identity.linkedin && (
            <motion.a
              href={identity.linkedin} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.875rem 2rem', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.04)', color: '#fff',
                fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none', display: 'inline-block',
              }}
            >
              LinkedIn
            </motion.a>
          )}
        </motion.div>

        {/* Meta */}
        <motion.div {...fadeUp(0.5)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '1.5rem', marginTop: '3rem',
          color: '#a1a1aa', fontSize: '0.875rem', flexWrap: 'wrap',
        }}>
          <span>📍 {identity.location}</span>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
          <span>✉️ {identity.email}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '2rem',
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.65rem', color: '#a1a1aa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
        />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
    </section>
  );
}
