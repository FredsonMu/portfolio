'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="min-h-[100svh] lg:h-screen w-full lg:w-[90vw] shrink-0 relative flex py-32 lg:py-0 lg:items-center border-r border-[#121212]/10 px-8 lg:px-24 bg-[var(--pink)] overflow-hidden">
      
      {/* Decorative spinning star */}
      <svg className="absolute top-[10%] right-[5%] w-40 h-40 lg:w-64 lg:h-64 text-[#121212] opacity-5 animate-[spin_40s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
      </svg>
      {/* Decorative lines */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#121212]/20 to-transparent"></div>
      <div className="hidden lg:block absolute top-1/2 right-0 w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#121212]/20 to-transparent"></div>

      {/* Embedded Illustration */}
      <div className="absolute bottom-[5%] lg:bottom-[15%] right-[5%] lg:right-[15%] w-32 h-32 lg:w-48 lg:h-48 opacity-80 mix-blend-multiply pointer-events-none">
        <Image src="/Site-Builder.png" alt="Site Builder" fill className="object-contain" />
      </div>
      
      <div className="max-w-6xl relative z-10 w-full lg:pl-[5vw] group">
        <h2 className="font-sans font-medium text-[10px] tracking-widest uppercase text-[#121212]/60 mb-12 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#121212]/40"></span>
          ( 01. The Philosophy )
        </h2>
        
        <p className="font-sans font-black text-[12vw] lg:text-[4vw] leading-[0.85] text-[#121212] tracking-tighter mb-12 lg:mb-16 uppercase relative">
          I design and build <br/> 
          <span className="text-[var(--blue)] font-bold italic tracking-tight drop-shadow-md">digital solutions</span> <br/>
          that connect technology, <br className="hidden lg:block"/> 
          data, & business.
          <span className="absolute -left-[20px] lg:-left-[40px] top-[10%] text-[var(--accent)] text-2xl lg:text-5xl">*</span>
        </p>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-2xl font-sans text-lg lg:text-xl font-light leading-relaxed text-[#121212]/80 lg:ml-auto lg:mr-12">
          <p className="border-l-[2px] border-[var(--blue)] pl-6">
            I combine technology and business thinking to solve real-world problems. My background allows me to understand both systems and strategy.
          </p>
          <p className="border-l-[2px] border-[var(--blue)] pl-6">
            I turn ideas into practical solutions — from dashboards and insights to process automation — helping businesses work smarter.
          </p>
        </div>
      </div>
    </section>
  );
}
