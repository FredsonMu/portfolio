'use client';

export function ExperienceSection() {
    const experiences = [
      {
        year: "2024",
        role: "Digital & Mobile App",
        company: "Web/Mobile Dev Project",
        desc: "Development of a complete interactive solution focused on user experience as the main project for the course at ISCTE.",
        tags: ["React", "Mobile First", "Academic"]
      },
      {
        year: "2023",
        role: "System Architecture",
        company: "Software Engineering",
        desc: "Design, modeling, and architectural development of a scalable information system in an academic context.",
        tags: ["UML", "Architecture", "ISCTE"]
      },
      {
        year: "2022",
        role: "Data & UI/UX",
        company: "Data Analysis & Interaction",
        desc: "University project involving exploratory data analysis to inform design decisions in graphical interfaces.",
        tags: ["Data Analysis", "HCI", "Research"]
      }
    ];

  return (
    <section className="min-h-[100svh] lg:h-screen w-full lg:w-[200vw] xl:w-[160vw] shrink-0 relative flex flex-col justify-center bg-[#ffd400] border-r border-[#121212]/10 px-6 md:px-12 lg:px-24 py-24 lg:py-0 overflow-visible">
      {/* Structural grid lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#121212]/5 pointer-events-none hidden lg:block"></div>

      <div className="absolute top-[8%] lg:top-[12%] left-6 md:left-12 lg:left-24">
        <h2 className="font-mono text-[9px] lg:text-[10px] tracking-widest uppercase text-[#121212]/60 font-bold">
          ( 03. Academic Work )
        </h2>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 relative z-10 lg:items-center">
        <div className="w-full lg:w-[35%] xl:w-[30%] shrink-0 flex flex-col items-start">
          <h3 className="font-sans font-black text-[15vw] sm:text-[10vw] lg:text-[7vw] xl:text-[6vw] text-[#121212] leading-[0.85] uppercase tracking-tighter mb-4 lg:mb-6">
            Academic <br/>
            <span className="italic font-bold text-[#121212]/50">Projects</span>
          </h3>
          <p className="font-sans text-sm md:text-base text-[#121212]/80 leading-relaxed max-w-sm font-semibold">
            Bridging theory and practical application through university projects, focusing on digital workflows, data analysis, and system architecture.
          </p>
          
          <a href="https://iscte-iul.pt/cursos/curso/9189" target="_blank" rel="noopener noreferrer" className="mt-8 lg:mt-12 inline-flex flex-col gap-2 bg-white border-[2px] border-[#121212] p-4 lg:p-5 rounded-xl shadow-[4px_4px_0px_#121212] lg:shadow-[6px_6px_0px_#121212] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group max-w-sm w-full lg:max-w-[280px]">
             <div className="flex items-center justify-between w-full">
                <span className="font-mono text-[9px] tracking-widest uppercase font-bold text-[#121212]">ISCTE - IUL</span>
                <span className="w-2 h-2 rounded-full bg-[var(--blue)] animate-pulse"></span>
             </div>
             <span className="font-sans font-black uppercase text-[3.5vw] sm:text-lg lg:text-sm xl:text-base leading-tight text-[#121212] mt-1 shrink-0">
                Informatics &amp; Business <br className="hidden lg:block"/> Management
             </span>
             <span className="font-mono text-[9px] xl:text-[10px] uppercase tracking-widest text-[#121212]/60 mt-1 font-bold">
                Year 3 of 4
             </span>
             <span className="font-sans text-[10px] sm:text-xs font-bold underline decoration-2 decoration-[var(--acid)] underline-offset-2 mt-2 group-hover:text-[var(--blue)] transition-colors uppercase">Course Info →</span>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 w-full lg:flex-1">
          {experiences.map((exp, i) => (
             <div key={i} className="flex flex-col w-full lg:w-[320px] xl:w-[380px] shrink-0 relative group">
                <div className="font-mono text-[12vw] sm:text-[8vw] lg:text-[4vw] leading-none text-[#121212]/10 mb-4 lg:mb-6 font-medium -ml-1 transition-colors">
                  {exp.year}
                </div>
                
                <div className="pl-4 sm:pl-5 lg:pl-6 border-l border-[#121212]/20 relative">
                  {/* Decor node */}
                  <div className="absolute top-0 -left-[2px] w-[3px] h-6 lg:h-8 bg-[#121212]/10 group-hover:bg-[var(--accent)] transition-colors"></div>

                  <h4 className="font-sans font-black uppercase text-xl sm:text-2xl lg:text-xl xl:text-2xl text-[#121212] tracking-tighter mb-1">
                    {exp.role}
                  </h4>
                  <p className="font-sans font-bold italic text-xs sm:text-sm tracking-tight text-[#121212]/50 mb-3 lg:mb-6 uppercase">
                    {exp.company}
                  </p>
                  
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#121212]/80 leading-snug lg:leading-relaxed mb-6 lg:mb-10 lg:min-h-[60px] max-w-sm">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase font-bold border border-[#121212]/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[#121212]/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
