'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed left-0 top-0 h-full w-16 md:w-24 border-r border-[#0c0c0c]/10 flex flex-col justify-between items-center py-6 md:py-8 z-50 bg-transparent mix-blend-difference text-white pointer-events-none"
    >
      <div className="font-serif text-2xl flex flex-col tracking-tighter pointer-events-auto">
        <span>F</span>
        <span>M</span>
      </div>

      <nav className="flex flex-col gap-12 font-mono text-[10px] uppercase tracking-widest pointer-events-auto">
        <Link href="#about" scroll={false} className="hover:text-[var(--acid)] transition-colors rotate-180" style={{ writingMode: 'vertical-rl' }}>
          About
        </Link>
        <Link href="#skills" scroll={false} className="hover:text-[var(--acid)] transition-colors rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Skills
        </Link>
        <Link href="#projects" scroll={false} className="hover:text-[var(--acid)] transition-colors rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Projects
        </Link>
        <Link href="#contact" scroll={false} className="hover:text-[var(--accent)] transition-colors rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Contact
        </Link>
      </nav>

      <div className="rotate-180 font-mono text-[10px] tracking-widest uppercase pointer-events-auto" style={{ writingMode: 'vertical-rl' }}>
        © 2026
      </div>
    </motion.aside>
  );
}
