'use client';

export function WhatICanDoSection() {
  const capabilities = [
    { id: "01", category: "AI & Tools", title: "Prompt Engineering", desc: "Using AI to optimize daily tasks, brainstorm solutions, and improve efficiency." },
    { id: "02", category: "Data", title: "Data Analysis", desc: "Turning raw data into clear, structured information to help make better decisions." },
    { id: "03", category: "Visuals", title: "Dashboards", desc: "Solid base in Excel, currently taking advanced courses and learning Power BI for interactive reports.", badge: "Learning" },
    { id: "04", category: "Systems", title: "Automation", desc: "Exploring tools like Make to connect applications, reduce manual work, and streamline processes.", badge: "Learning" },
    { id: "05", category: "Strategy", title: "Business Focus", desc: "Aligning digital tools with broader business goals and understanding market needs." },
    { id: "06", category: "Integration", title: "Problem Solving", desc: "Translating technical concepts into simple, practical, and useful outcomes." }
  ];

  return (
    <section className="min-h-[100svh] lg:h-screen w-full lg:w-[140vw] xl:w-[130vw] shrink-0 relative flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 lg:py-0 border-r border-[#121212]/20 bg-[var(--green)] overflow-hidden">
      {/* Decorative Blueprint lines in dark tone */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-[#121212]/10 pointer-events-none hidden lg:block"></div>
      
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 lg:items-center">
        <div className="w-full lg:w-[35%] xl:w-[30%] shrink-0">
          <div className="flex items-center gap-4 mb-4 lg:mb-6">
            <span className="font-mono text-[9px] lg:text-[10px] tracking-widest uppercase text-[#121212]/60 font-bold">02. Expertise</span>
            <div className="flex-1 h-[1px] bg-[#121212]/20"></div>
          </div>
          <h3 className="font-sans font-black text-[15vw] sm:text-[10vw] lg:text-[5vw] xl:text-[4vw] leading-[0.85] tracking-tighter uppercase text-[#121212] mb-3 lg:mb-5">
            Current <br/>
            <span className="italic font-bold text-[#121212]/60">Focus</span>
          </h3>
          <p className="font-sans text-sm md:text-base text-[#121212]/80 max-w-sm font-semibold leading-relaxed">
            A practical approach to solving problems through data, logic, and continuous learning.
          </p>
        </div>

        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 lg:gap-y-10">
          {capabilities.map((item, i) => (
             <div key={i} className="flex flex-col border-t-2 border-[#121212] pt-3 lg:pt-4 group">
                <div className="flex justify-between items-start mb-2 lg:mb-3 pt-1 lg:pt-0">
                   <span className="font-mono text-[9px] lg:text-[10px] tracking-widest uppercase font-bold text-[#121212]">{item.id} — {item.category}</span>
                   {item.badge && (
                      <span className="inline-block bg-[#121212] text-[var(--acid)] font-mono text-[8px] lg:text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded-sm shrink-0 ml-2 shadow-[2px_2px_0px_rgba(18,18,18,0.3)]">
                        {item.badge}
                      </span>
                   )}
                </div>
                <h4 className="font-sans font-black uppercase tracking-tighter text-xl lg:text-2xl xl:text-[28px] mb-2 text-[#121212] group-hover:text-white transition-colors">{item.title}</h4>
                <p className="font-sans font-semibold text-xs sm:text-sm xl:text-[15px] text-[#121212]/80 max-w-xs xl:max-w-sm leading-snug">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
