'use client';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="min-h-[100svh] lg:h-screen w-full lg:w-[100vw] shrink-0 relative flex flex-col justify-between bg-[#121212] text-white px-8 lg:px-24 py-16 lg:py-24 overflow-hidden">
      {/* Top Header */}
      <div className="flex justify-between items-start border-b border-white/10 pb-8 relative z-10 mt-12 lg:mt-0">
        <div className="font-mono text-[10px] tracking-widest uppercase text-white/50">
          05. Connect
        </div>
        <div className="font-mono text-[10px] tracking-widest uppercase text-white/50 text-right">
          Open for <br/> opportunities
        </div>
      </div>

      {/* Massive Typographic Center */}
      <div className="flex-1 flex flex-col justify-center relative z-10 w-full">
        <h2 className="font-sans font-black text-[18vw] lg:text-[14vw] leading-[0.8] tracking-tighter uppercase text-white mb-8">
          Let&apos;s talk
        </h2>
        
        <div className="flex flex-col lg:flex-row max-w-2xl gap-8 lg:gap-16 items-start lg:items-center">
           <div className="w-16 h-[1px] bg-white/20 hidden md:block"></div>
           <p className="font-sans text-sm md:text-xl font-light text-white/60 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how automation and data can transform your workflow, my inbox is always open.
           </p>
        </div>
      </div>

      {/* Footer Details */}
      <div className="flex flex-col lg:flex-row justify-between items-start pt-8 border-t border-white/10 gap-12 lg:gap-0 relative z-10 pb-12 lg:pb-0 font-sans">
        
        <div className="flex flex-col gap-6">
          <a 
            href="mailto:fredson.alfredo.m@gmail.com" 
            className="group relative flex items-center gap-4 lg:gap-6 font-mono text-xs lg:text-sm uppercase tracking-widest text-[#ffffff] hover:text-[var(--acid)] transition-colors"
          >
            <span className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[var(--acid)] transition-colors">
               <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:-rotate-45 transition-transform duration-300" />
            </span>
            <span className="break-all text-left leading-normal">fredson.alfredo.m<br className="lg:hidden"/>@gmail.com</span>
          </a>

          <a 
            href="tel:+351934465546" 
            className="group relative flex items-center gap-4 lg:gap-6 font-mono text-xs lg:text-sm uppercase tracking-widest text-[#ffffff] hover:text-[var(--acid)] transition-colors"
          >
            <span className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[var(--acid)] transition-colors">
               <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:-rotate-45 transition-transform duration-300" />
            </span>
            <span>+351 934465546</span>
          </a>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12 font-mono text-[10px] uppercase tracking-widest text-white/50 lg:self-end">
          <a href="https://www.linkedin.com/in/fredson-alfredo-munguambe-51b865397" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <div className="text-white/30">© 2026</div>
        </div>
      </div>

      {/* Structural background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-white/5 pointer-events-none hidden lg:block"></div>
      <div className="absolute right-[16%] top-0 w-[1px] h-full bg-white/5 pointer-events-none hidden lg:block"></div>
    </section>
  );
}
