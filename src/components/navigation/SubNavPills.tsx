'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface PillItem {
  label?: string;
  title?: string;
  href?: string;
  url?: string;
  isActive?: boolean;
}

interface SubNavPillsProps {
  sectionTitle?: string;
  items: PillItem[];
}

export function SubNavPills({ sectionTitle, items }: SubNavPillsProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Keep visible near top of page
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down: hide subnav to maximize reading space
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 12) {
        // Scrolling up: reveal subnav
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!items || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label={sectionTitle ? `${sectionTitle} Sub-navigation` : 'Page section navigation'}
      className={`w-full sticky top-16 z-30 border-b border-white/10 bg-neutral-950/90 backdrop-blur-md py-2 sm:py-2.5 px-3 sm:px-6 relative transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Subtle Right Edge Fade for Mobile Horizontal Scroll Discovery */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-950/90 to-transparent pointer-events-none z-10 sm:hidden" />

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap text-xs font-medium scroll-smooth max-w-7xl mx-auto pr-6 sm:pr-0">
        {items.map((item, idx) => {
          const itemUrl = item.href || item.url || '#';
          const itemLabel = item.label || item.title || '';
          const isActive = item.isActive !== undefined ? item.isActive : pathname === itemUrl;

          return (
            <Link
              key={itemUrl + idx}
              href={itemUrl}
              className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex-shrink-0 transition-all duration-200 backdrop-blur-md border ${
                isActive
                  ? 'bg-cyan-950/60 text-cyan-200 border-cyan-400 font-semibold shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                  : 'bg-zinc-900/80 text-cyan-300 border-cyan-500/30 hover:bg-zinc-800/90 hover:text-cyan-200 hover:border-cyan-400/60 shadow-sm'
              }`}
            >
              {itemLabel}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default SubNavPills;
