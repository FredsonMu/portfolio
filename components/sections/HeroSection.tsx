'use client';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="h-[100svh] w-screen shrink-0 relative flex flex-col bg-[var(--green)] overflow-hidden font-sans">
      
      {/* 
        =================
        TOP SECTION
        ================= 
      */}
      <div className="pt-6 md:pt-10 px-6 lg:px-12 flex-shrink-0 z-20 flex flex-col max-w-[100vw]">
        {/* Massive Typography matching reference image style */}
        <h1 className="font-sans font-black text-[16vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tighter uppercase text-[#121212] flex flex-col sm:flex-row w-full text-center sm:text-left justify-center sm:justify-start sm:gap-4 lg:gap-6">
          <span>DIGITAL</span>
          <span>SOLUTIONS</span>
        </h1>
        
        {/* Descriptions & CTA exactly like the reference image (columns under text) */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-4 lg:mt-8 gap-4 md:gap-8 text-[#121212] max-w-7xl w-full">
          <div className="w-full md:w-1/4 font-sans text-xs sm:text-xs md:text-sm font-black leading-tight uppercase tracking-tight">
            Fredson Munguambe
            <span className="block text-[#121212]/70 mt-1 font-semibold normal-case">Product-Minded Digital &amp; AI Problem Solver</span>
          </div>
          <div className="w-full md:w-1/3 font-sans text-xs md:text-sm lg:text-base font-semibold leading-snug">
            I’m interested in building digital solutions that connect business, technology, and user needs. Currently studying Informatics &amp; Business Management at ISCTE.
          </div>
          <div className="w-full md:w-1/3 font-sans text-xs md:text-sm lg:text-base font-semibold leading-snug">
            I’m developing skills in understanding users, analyzing processes, and exploring how digital tools and AI can improve how businesses operate.
          </div>
          <a href="mailto:fredson.alfredo.m@gmail.com" className="w-auto flex justify-start shrink-0 pt-2 md:pt-0 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest border-b-[2px] md:border-b-[3px] border-[#121212] pb-1 cursor-pointer hover:text-white transition-colors">
            Get in touch →
          </a>
        </div>
      </div>

      {/* 
        =================
        BOTTOM SECTION
        ================= 
      */}
      <div className="flex-1 mt-8 md:mt-12 w-full relative z-10 px-4 md:px-12 pb-0 flex flex-col justify-end min-h-0">
        {/* The arched container (white/cream with grid) */}
        <div className="w-full h-full bg-[#f4f4f0] rounded-t-[40px] md:rounded-t-[80px] lg:rounded-tr-[240px] lg:rounded-tl-none relative overflow-hidden flex-shrink border-t-8 border-x-8 border-b-0 border-[#121212] shadow-2xl">
          
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#d1cfc7 2px, transparent 2px), linear-gradient(90deg, #d1cfc7 2px, transparent 2px)', backgroundSize: '8vw 8vw' }}></div>

          {/* Photo */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95vw] md:w-[70vw] lg:w-[48vw] xl:w-[42vw] h-[98%] md:h-[95%] z-20 pointer-events-none flex items-end justify-center">
            <Image
              src="/fredson.png"
              alt="Fredson Munguambe"
              width={1000}
              height={1200}
              className="object-contain object-bottom w-full h-full grayscale contrast-125 saturate-0 drop-shadow-2xl"
              priority
            />
          </div>

          {/* BADGES / STICKERS (neo-brutalism styling) */}
          
          {/* Cyan Circle Badge (Data Strategy) */}
          <div className="absolute top-[5%] md:top-[15%] left-[2%] md:left-[5%] lg:left-[15%] z-30 flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-[#75d8d5] border-[3px] md:border-[4px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] text-center p-2 md:p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
             <div className="flex flex-col items-center">
               <div className="flex gap-1 md:gap-2 mb-1 md:mb-2">
                 <span className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#121212]"></span>
                 <span className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#121212]"></span>
               </div>
               <span className="font-sans font-black text-xs sm:text-base md:text-xl md:leading-[1.1] uppercase text-[#121212]">Data<br/>Strategy</span>
               <span className="text-[5px] sm:text-[7px] md:text-[9px] font-mono leading-tight mt-1 md:mt-2 uppercase text-[#121212] font-bold">Aligning your<br/>→ business<br/>&amp; tech needs</span>
             </div>
          </div>

          {/* Yellow Pill (AI / Workflows) */}
          <div className="absolute top-[35%] md:top-[45%] left-[0%] md:left-[2%] lg:left-[8%] z-30 bg-[#ffd400] border-[3px] md:border-[4px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] rounded-xl md:rounded-2xl px-3 sm:px-5 md:px-8 py-2 md:py-3 transform -rotate-12 hover:-rotate-3 transition-transform duration-300">
             <div className="font-sans font-black text-xs sm:text-base md:text-2xl uppercase text-[#121212] flex flex-col items-start leading-[1.15] md:leading-none">
               <span className="flex text-left items-center gap-1 md:gap-2">AI / ML <br className="md:hidden"/> <span className="bg-[#121212] text-[#ffd400] px-1 md:px-2 py-0 md:py-1 text-[8px] md:text-sm tracking-widest rounded-[2px] mt-1 md:mt-0">WORKFLOWS</span></span>
             </div>
          </div>

          {/* Orange Box (Process Automation) */}
          <div className="absolute bottom-[25%] md:bottom-[15%] lg:bottom-[20%] left-[5%] md:left-[8%] lg:left-[18%] z-30 bg-[#ff7a00] border-[3px] md:border-[4px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] rounded-lg md:rounded-xl px-3 sm:px-4 md:px-5 py-2 md:py-4 transform rotate-6 hover:rotate-12 transition-transform duration-300 hidden sm:block">
             <span className="font-sans font-black text-sm md:text-2xl uppercase text-white leading-[1.1] block">
               Process<br/>&amp; System<br/>
               <span className="flex items-center gap-1 md:gap-2 text-[#121212]">→ Design</span>
             </span>
          </div>
          
          {/* Pink Box (Business Intelligence) */}
          <div className="absolute top-[20%] md:top-[25%] right-[2%] md:right-[5%] lg:right-[15%] z-30 bg-[#ff3b68] border-[3px] md:border-[4px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 transform rotate-12 hover:rotate-6 transition-transform duration-300">
             <span className="font-sans font-black text-xs sm:text-base md:text-2xl uppercase text-white leading-[1.1] text-center block">
               Business<br/>
               <span className="bg-[#121212] text-[#ff3b68] px-1 md:px-2 py-0.5 md:py-1 inline-block mt-1 md:mt-2 rounded-sm border border-[#121212]">Intelligence©</span>
             </span>
          </div>

          {/* Mint Rectangle (Financial Data) */}
          <div className="absolute top-[55%] md:top-[60%] right-[0%] md:right-[3%] lg:right-[8%] z-30 bg-[#6de3c6] border-[3px] md:border-[4px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] rounded-lg md:rounded-xl px-3 sm:px-4 md:px-6 py-2 md:py-4 transform -rotate-[15deg] hover:-rotate-6 transition-transform duration-300">
             <span className="font-sans font-black text-[10px] sm:text-sm md:text-2xl uppercase text-[#121212] leading-[1.1] flex flex-col items-start">
               Financial &amp;<br/>Data Models
               <span className="text-[8px] md:text-xs border-[1px] md:border-[2px] border-[#121212] rounded-full px-2 md:px-3 py-0 md:py-0.5 mt-1 md:mt-2 font-bold inline-flex items-center">©&apos;24 <span className="ml-1 text-[10px] md:text-lg">*</span></span>
             </span>
          </div>

          {/* Acid Green Circle (Prompt Engineering) */}
          <div className="absolute bottom-[5%] md:bottom-[10%] right-[5%] md:right-[15%] lg:right-[25%] z-30 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-[var(--acid)] border-[3px] md:border-[4px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] flex items-center justify-center transform rotate-12 hover:scale-105 transition-transform duration-300">
             <div className="absolute inset-1 md:inset-2 border-[2px] md:border-[3px] border-dashed border-[#121212] rounded-full"></div>
             <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]">
                 <path id="circlePath2" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                 <text fontSize="13" fontWeight="900" className="uppercase fill-[#121212] font-sans tracking-tight">
                     <textPath href="#circlePath2" startOffset="0%">
                         * PROMPT * LOGIC
                     </textPath>
                 </text>
             </svg>
             <div className="w-8 h-8 md:w-12 md:h-12 border-[2px] md:border-[3px] border-[#121212] rounded-full flex items-center justify-center bg-white text-[#121212] relative z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 md:w-6 md:h-6"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

