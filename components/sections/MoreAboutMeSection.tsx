'use client';
import Image from 'next/image';

export function MoreAboutMeSection() {
  return (
    <section className="min-h-[100svh] lg:h-screen w-full lg:w-[160vw] xl:w-[140vw] shrink-0 relative flex flex-col justify-center bg-[#f4f4f0] border-r border-[#121212]/10 px-6 lg:px-20 py-24 lg:py-0 text-[#121212] overflow-x-hidden lg:overflow-hidden">
      
      {/* Background Graphic elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#e5e5d8 1px, transparent 1px), linear-gradient(90deg, #e5e5d8 1px, transparent 1px)', backgroundSize: '4vw 4vw' }}></div>
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[var(--blue)]/10 rounded-full blur-[80px] pointer-events-none"></div>



      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Column - A little more about me */}
        <div className="flex flex-col flex-1 w-full max-w-4xl relative">

          <div className="absolute -top-4 -right-4 lg:-top-12 lg:-right-8 w-24 h-24 lg:w-48 lg:h-48 opacity-90 mix-blend-multiply pointer-events-none drop-shadow-lg hidden md:block z-0">
            <Image src="/Product-Development.png" alt="Development" fill className="object-contain" />
          </div>

          <h2 className="relative z-10 font-sans font-black text-[12vw] sm:text-[8vw] lg:text-[4vw] xl:text-[5vw] leading-[0.85] tracking-tighter uppercase text-[#121212] mb-4 lg:mb-6">
            A little more <br/>
            <span className="italic font-black text-[var(--acid)] stroke-text">about me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {/* Cards / Bento Box Style */}
            <div className="bg-white border-[2px] lg:border-[3px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] p-4 lg:p-5 rounded-xl flex flex-col gap-2 transform transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[var(--pink)] border-[2px] border-[#121212] flex items-center justify-center font-bold text-sm mb-1">1</div>
              <p className="font-sans font-semibold text-xs lg:text-sm xl:text-[15px] leading-snug">
                I’m naturally curious and tend to understand things before acting — but I don’t stay in theory for long.
              </p>
              <p className="font-sans font-semibold text-xs lg:text-sm xl:text-[15px] leading-snug">
                I value collaboration and I’m comfortable saying <span className="bg-[#121212] text-white px-2 py-0.5 rounded-sm whitespace-nowrap">“I don’t know”</span> — as long as I’m actively working to figure it out.
              </p>
            </div>

            <div className="bg-[var(--blue)] text-white border-[2px] lg:border-[3px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] p-4 lg:p-5 rounded-xl flex flex-col gap-2 transform transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white text-[#121212] border-[2px] border-[#121212] flex items-center justify-center font-bold text-sm mb-1">2</div>
              <p className="font-sans font-bold text-xs lg:text-sm xl:text-[15px] leading-snug">
                I’m also interested in business and digital marketing, which helps me think beyond the technical side.
              </p>
              <p className="font-sans text-xs lg:text-sm xl:text-[15px] leading-snug text-white/90">
                I like understanding what users and clients actually need, and turning that into something simple, functional, and useful.
              </p>
            </div>

            <div className="md:col-span-2 bg-[#121212] text-white border-[2px] lg:border-[3px] border-[#121212] shadow-[4px_4px_0px_#121212] md:shadow-[6px_6px_0px_#121212] p-4 lg:p-5 rounded-xl flex flex-col lg:flex-row gap-4 items-center justify-between transform transition-transform hover:-translate-y-1">
              <div className="flex-1">
                <span className="font-mono text-[9px] lg:text-[10px] tracking-widest text-[var(--acid)] uppercase mb-1.5 block">AI & Consistency</span>
                <p className="font-sans font-semibold text-xs lg:text-sm xl:text-[15px] leading-snug mt-1">
                  I use AI as a tool to think, iterate, and improve — not as a shortcut, but as a way to work more efficiently and explore better solutions.
                </p>
                <div className="w-12 h-[2px] bg-white/20 my-2 lg:my-3"></div>
                <p className="font-sans text-xs lg:text-sm xl:text-[15px] leading-snug text-white/80">
                  Consistency is a big part of how I work. I may not be the fastest, but I keep improving, step by step.
                </p>
              </div>
              <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-full border-[2px] border-[var(--acid)] border-dashed animate-[spin_10s_linear_infinite] flex items-center justify-center">
                 <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[var(--acid)] rounded-full flex items-center justify-center text-[#121212] font-black italic text-sm lg:text-base">
                   +1%
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-[2px] h-[60vh] bg-[#121212] shrink-0 opacity-10 mx-4 xl:mx-8"></div>

        {/* Right Column - What I'm looking for */}
        <div className="flex flex-col flex-1 w-full max-w-2xl lg:max-w-xl relative">
          
          <div className="absolute -top-10 -right-4 lg:-top-20 lg:-right-16 w-32 h-32 lg:w-56 lg:h-56 opacity-90 mix-blend-multiply pointer-events-none drop-shadow-xl hidden md:block z-0">
            <Image src="/Rewards.png" alt="Rewards" fill className="object-contain" />
          </div>

          <h2 className="relative z-10 font-sans font-black text-[10vw] sm:text-[6vw] lg:text-[3.5vw] xl:text-[4vw] leading-[0.85] tracking-tighter uppercase text-[#121212] mb-4 lg:mb-6">
            What I&apos;m <br/>
            <span className="bg-[#121212] text-white px-2 py-1 inline-block mt-1 relative z-10">Looking for</span>
          </h2>

          <div className="bg-[#ffd400] border-[2px] lg:border-[3px] border-[#121212] shadow-[6px_6px_0px_#121212] lg:shadow-[8px_8px_0px_#121212] p-5 lg:p-6 xl:p-8 rounded-2xl relative">
            {/* Tape detail */}
            <div className="absolute -top-3 lg:-top-4 left-1/2 -translate-x-1/2 w-20 lg:w-28 h-5 lg:h-7 bg-white/40 backdrop-blur-sm transform rotate-[-2deg] border border-[#121212]/10 shadow-sm"></div>

            <p className="font-sans font-black text-[15px] lg:text-base xl:text-lg leading-tight text-[#121212] mb-3 lg:mb-5 tracking-tight uppercase">
              I’m looking for an opportunity where I can learn from experienced people, apply what I already know, and contribute in a meaningful way — even if I start small.
            </p>
            
            <div className="w-full h-[2px] lg:h-[3px] bg-[#121212] mb-3 lg:mb-5"></div>
            
            <p className="font-sans font-bold text-xs lg:text-sm xl:text-[15px] leading-snug text-[#121212]/80">
              I strongly believe that with consistency, curiosity, and the willingness to improve, it’s possible to achieve results <span className="text-[#121212] font-black underline decoration-[3px] lg:decoration-4 underline-offset-4 decoration-[var(--blue)]">above average</span>.
            </p>

            <div className="mt-5 lg:mt-6 flex items-center justify-between">
              <a href="mailto:fredson.alfredo.m@gmail.com" className="inline-flex items-center gap-2 font-mono text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white bg-[#121212] px-5 py-2.5 lg:px-6 lg:py-3 rounded-full hover:bg-[var(--blue)] transition-colors duration-300 shadow-[4px_4px_0px_rgba(18,18,18,0.3)]">
                Let&apos;s Talk 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
      
      {/* Scroll indicator for horizontal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden font-mono text-[9px] uppercase tracking-widest text-[#121212]/40 font-bold">
        Scroll →
      </div>
    </section>
  );
}
