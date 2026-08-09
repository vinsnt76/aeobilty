'use client';

import React from 'react';
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

  return (
    <nav
      aria-label={sectionTitle ? `${sectionTitle} Sub-navigation` : 'Page section navigation'}
      className="w-full sticky top-20 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur-md py-2.5 px-4 sm:px-6 transition-all"
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap text-xs font-medium scroll-smooth max-w-7xl mx-auto">
        {items.map((item, idx) => {
          const itemUrl = item.href || item.url || '#';
          const itemLabel = item.label || item.title || '';
          const isActive = item.isActive !== undefined ? item.isActive : pathname === itemUrl;

          return (
            <Link
              key={itemUrl + idx}
              href={itemUrl}
              className={`px-3.5 py-1.5 rounded-full flex-shrink-0 transition-all duration-200 backdrop-blur-md border ${
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
