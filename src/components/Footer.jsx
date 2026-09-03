import React from 'react';
import { profile } from '../data.js';

export default function Footer() {
  const { identity } = profile;

  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] py-12 px-6 mt-12">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[#a1a1aa] text-sm">
          © {new Date().getFullYear()} {identity.name}. Dibangun dengan React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          {identity.github && (
            <a
              href={identity.github}
              target="_blank" rel="noopener noreferrer"
              className="text-[#a1a1aa] text-sm hover:text-white transition-colors bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] px-4 py-2 rounded-xl hover:bg-[rgba(255,255,255,0.1)]"
            >
              GitHub
            </a>
          )}
          {identity.linkedin && (
            <a
              href={identity.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="text-[#a1a1aa] text-sm hover:text-white transition-colors bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] px-4 py-2 rounded-xl hover:bg-[rgba(255,255,255,0.1)]"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${identity.email}`}
            className="text-[#a1a1aa] text-sm hover:text-white transition-colors bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] px-4 py-2 rounded-xl hover:bg-[rgba(255,255,255,0.1)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

