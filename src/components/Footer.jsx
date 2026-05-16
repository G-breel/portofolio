import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data.js';

export default function Footer() {
  const { identity } = profile;

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-5xl mx-auto px-6 w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="text-[#a1a1aa] text-sm">
          © {new Date().getFullYear()} {identity.name}. Dibangun dengan React &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          {identity.github && (
            <motion.a
              href={identity.github}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ color: '#fff' }}
              className="text-[#a1a1aa] text-sm hover:text-white transition-colors duration-200"
            >
              GitHub
            </motion.a>
          )}
          {identity.linkedin && (
            <motion.a
              href={identity.linkedin}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ color: '#fff' }}
              className="text-[#a1a1aa] text-sm hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </motion.a>
          )}
          <motion.a
            href={`mailto:${identity.email}`}
            whileHover={{ color: '#fff' }}
            className="text-[#a1a1aa] text-sm hover:text-white transition-colors duration-200"
          >
            Email
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
