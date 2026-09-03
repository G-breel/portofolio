import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data.js';
import LogoLoop from './LogoLoop.jsx';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

const skillLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React", title: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", alt: "Vite", title: "Vite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind", title: "TailwindCSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js", title: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML5", title: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS3", title: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", alt: "Figma", title: "Figma" }
];

export default function Hero() {
  const { identity, summary } = profile;

  return (
    <section className="hero-section relative">
      <div className="hero-content relative z-20" style={{ padding: '8rem 1.5rem 4rem', maxWidth: '72rem', width: '100%', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Introduction Card (Spans 2 cols) */}
          <motion.div {...fadeUp(0.1)} className="bento-card md:col-span-2 md:row-span-2 flex flex-col justify-center items-start p-8 md:p-12 text-left">
            <div className="flex mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-[#60a5fa] text-sm font-medium shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                Terbuka untuk magang &amp; full-time
              </span>
            </div>
            
            <div className="flex flex-col items-start w-full">
              <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6 text-white">
                Hi, I'm <br/>
                <span>
                  {identity.name.split(' ')[0]}<span className="text-[#3b82f6]">.</span>
                </span>
              </h1>
              
              <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed max-w-xl">
                Saya merancang dan membangun antarmuka web yang interaktif, cepat, dan punya nilai estetika tinggi. Saat ini fokus mendalami ekosistem React dan animasi modern.
              </p>
            </div>
          </motion.div>

          {/* Profile Photo / Right Column */}
          <motion.div {...fadeUp(0.2)} className="bento-card md:col-span-1 md:row-span-2 flex flex-col items-center justify-center relative overflow-hidden group min-h-[300px]">
             {/* Decorative Background (shows while image loads or if transparent) */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#111] opacity-50 z-0"></div>
             
             {/* The Profile Image */}
             <img 
               src="/profile.jpg" 
               alt="Jibril" 
               className="absolute inset-0 w-full h-full object-cover z-10 profile-photo-fx"
             />
             
             {/* Subtle Inner Shadow overlay */}
             <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-20 pointer-events-none"></div>
          </motion.div>


          {/* Skills Logo Loop (Spans full width) */}
          <motion.div {...fadeUp(0.4)} className="bento-card md:col-span-3 flex flex-col justify-center items-center py-6 px-4 overflow-hidden">
            <LogoLoop
              logos={skillLogos}
              speed={100}
              pauseOnHover={true}
              scaleOnHover={true}
              logoHeight={40}
              gap={32}
              fadeOut={false}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
