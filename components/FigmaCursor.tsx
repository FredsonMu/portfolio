'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

export function FigmaCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const trailPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const animate = useCallback(() => {
    // Smooth lerp for the trail/ring
    const lerp = 0.15;
    trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * lerp;
    trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * lerp;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }
    if (trailRef.current) {
      trailRef.current.style.transform = `translate3d(${trailPosRef.current.x}px, ${trailPosRef.current.y}px, 0)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${trailPosRef.current.x}px, ${trailPosRef.current.y}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check if mobile/touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      if (interactive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      if (interactive) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  // Don't render on mobile/touch devices
  if (isMobile) return null;

  return (
    <>
      {/* Global cursor hide */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer ring - follows with delay */}
      <div
        ref={ringRef}
        className="figma-cursor-ring"
        style={{
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          opacity: isHovering ? 0.6 : 0.3,
          borderColor: isHovering ? 'var(--acid)' : '#ffffff',
        }}
      />

      {/* Trail dot */}
      <div
        ref={trailRef}
        className="figma-cursor-trail"
        style={{
          width: isHovering ? '8px' : '5px',
          height: isHovering ? '8px' : '5px',
          background: isHovering ? 'var(--acid)' : 'rgba(255,255,255,0.5)',
        }}
      />

      {/* Main cursor - Figma-style arrow pointer */}
      <div
        ref={cursorRef}
        className="figma-cursor-main"
        style={{
          transform: `translate3d(-100px, -100px, 0) scale(${isPressed ? 0.85 : 1})`,
        }}
      >
        {/* SVG Arrow - Figma style cursor */}
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            transition: 'transform 0.15s ease',
            transform: isHovering ? 'rotate(-8deg) scale(1.1)' : 'rotate(0deg)',
          }}
        >
          {/* Shadow/outline */}
          <path
            d="M1 1L7.5 22L10.5 14.5L18 13L1 1Z"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Main arrow body */}
          <path
            d="M1 1L7.5 22L10.5 14.5L18 13L1 1Z"
            fill={isHovering ? 'var(--acid)' : '#ffffff'}
            stroke={isHovering ? '#121212' : '#121212'}
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{ transition: 'fill 0.2s ease' }}
          />
        </svg>

        {/* Figma-style name tag */}
        <div
          className="figma-cursor-tag"
          style={{
            opacity: isHovering ? 1 : 0,
            transform: `translateY(${isHovering ? '0' : '4px'})`,
          }}
        >
          <span>FM</span>
        </div>
      </div>
    </>
  );
}
