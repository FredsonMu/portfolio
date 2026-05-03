'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export function JourneySection() {
  return (
    <section className="min-h-[100svh] lg:h-screen w-full lg:w-[150vw] shrink-0 relative flex lg:items-center bg-[var(--blue)] border-r border-[#333] px-8 py-24 lg:py-0 lg:px-24 overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.06] mix-blend-overlay pointer-events-none"></div>

      {/* Decoration Images */}
      <div className="absolute top-[20%] right-[40%] w-32 h-32 lg:w-48 lg:h-48 opacity-40 mix-blend-screen pointer-events-none hidden lg:block">
        <Image src="/business-trip.svg" alt="Business Trip" fill className="object-contain" />
      </div>

      <div className="absolute bottom-[20%] lg:bottom-[30%] right-[10%] lg:right-[5%] w-24 h-24 lg:w-40 lg:h-40 opacity-70 mix-blend-screen pointer-events-none">
        <Image src="/Product-Development.png" alt="Development" fill className="object-contain" />
      </div>

      {/* Decorative large text */}
      <h2 className="absolute top-10 left-10 font-sans font-black tracking-tighter text-[15vw] leading-none text-white opacity-[0.04] whitespace-nowrap select-none pointer-events-none">
        M O Z A M B I Q U E
      </h2>
      <h2 className="absolute bottom-10 right-10 font-sans font-black tracking-tighter text-[15vw] leading-none text-[#ffffff] opacity-[0.04] whitespace-nowrap select-none pointer-events-none">
        P O R T U G A L
      </h2>

      <div className="w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-32 lg:items-center">
        
        {/* Title area */}
        <div className="lg:w-1/3 shrink-0 flex flex-col">
          <div className="inline-flex items-center gap-4 mb-8 lg:mb-12 border border-white/20 rounded-full px-6 py-2 w-max bg-white/5 backdrop-blur-sm shadow-md">
            <div className="w-2 h-2 rounded-full bg-[var(--acid)] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <span className="font-mono text-[10px] text-white uppercase tracking-widest">The Backstory</span>
          </div>
          <h3 className="font-sans font-black text-[16vw] lg:text-[8vw] leading-[0.8] text-[#f0f0f0] uppercase tracking-tighter mb-8 group cursor-default">
            My <br/>
            <span className="text-[var(--acid)] italic uppercase relative group-hover:text-white transition-colors duration-500">
              Journey
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-[var(--acid)] opacity-50 group-hover:opacity-10 transition-opacity" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </svg>
            </span>
          </h3>
          
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-white/20 flex items-center justify-center relative mt-6 lg:mt-10 group overflow-hidden cursor-crosshair">
             <div className="absolute inset-0 bg-[var(--acid)] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
             <svg className="animate-[spin_10s_linear_infinite] group-hover:text-[#121212] transition-colors text-white/80 relative z-10" width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
               <circle cx="50" cy="50" r="45" />
               <circle cx="50" cy="50" r="30" />
               <path d="M50 5 L50 95 M5 50 L95 50" />
             </svg>
          </div>
        </div>

        {/* Content area */}
        <div className="lg:w-2/3 flex flex-col gap-10 lg:gap-16 relative">
          <div className="hidden lg:block absolute -left-10 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--acid)] to-transparent opacity-30"></div>

          <p className="font-sans text-2xl lg:text-4xl text-white font-bold leading-[1.2] lg:leading-[1.1] tracking-tight max-w-3xl drop-shadow-sm uppercase">
            I’m originally from Mozambique, and moving to Portugal to study was a major step in my <span className="text-[var(--acid)] italic font-black">personal</span> and <span className="text-[var(--acid)] italic font-black">professional</span> growth.
          </p>

          <div className="flex flex-col lg:flex-row gap-10 lg:pt-8 lg:border-t border-white/20">
            <div className="pl-4 lg:pl-6 border-l-2 lg:border-l-[3px] border-[var(--acid)] flex flex-col gap-6 lg:gap-8 max-w-md">
              <p className="font-sans text-base lg:text-lg text-white/90 leading-relaxed font-light hover:text-white transition-colors">
                Adapting to a new environment pushed me to become more independent, resilient, and open to new perspectives.
              </p>
              <p className="font-sans text-base lg:text-lg text-white/90 leading-relaxed font-light hover:text-white transition-colors">
                Over time, I developed a strong interest in how technology can solve real business problems — combining digital tools, data, and a user-focused approach.
              </p>
            </div>

            <div className="bg-[#ffffff] text-[#121212] p-8 lg:p-10 rounded-3xl shadow-2xl max-w-md relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[40px] opacity-10 group-hover:opacity-40 transition-opacity duration-700"></div>
               
               <p className="font-sans text-xl md:text-2xl italic font-bold tracking-tight leading-[1.2] mb-8 relative z-10">
                 &quot;Today, I’m focused on building solutions that connect business needs with technology, especially through automation and emerging AI tools.&quot;
               </p>
               
               <div className="w-full h-[1px] bg-[#121212]/10 mb-6 group-hover:bg-[var(--accent)] transition-colors duration-500"></div>
               
               <p className="font-mono text-[10px] text-[#121212]/50 tracking-widest uppercase relative z-10 flex items-center justify-between font-bold">
                 <span className="text-[#121212]">Still learning</span>
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                 <span className="text-[var(--accent)]">Intentional path</span>
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
