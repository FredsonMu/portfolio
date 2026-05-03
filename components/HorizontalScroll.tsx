'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 0.1, // Much faster, highly responsive
          end: () => `+=${container.scrollWidth}`,
          invalidateOnRefresh: true, // Recalculates on resize
        }
      });
      
      tl.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth), // Precise alignment to the right edge
        ease: "none",
      });
      
      return () => {
        tl.kill();
      }
    });

    // Important for Next.js routing and resizing
    // to cleanly recalculate if dimensions change
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      clearTimeout(timeout);
      mm.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="overflow-hidden bg-[var(--bg-color)] w-full">
      <div 
        ref={containerRef} 
        className="flex flex-col lg:flex-row lg:h-screen lg:flex-nowrap w-full lg:w-max"
      >
        {children}
      </div>
    </div>
  );
}
