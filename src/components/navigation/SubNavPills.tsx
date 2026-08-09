import React from 'react';
import Link from 'next/link';

export interface PillItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface SubNavPillsProps {
  sectionTitle?: string;
  items: PillItem[];
}

export function SubNavPills({ sectionTitle, items }: SubNavPillsProps) {
  return (
    <nav
      aria-label={sectionTitle ? `${sectionTitle} Sub-navigation` : 'Page section navigation'}
      className="w-full sticky top-20 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur-md py-2.5 px-4 sm:px-6 transition-all"
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap text-xs font-medium scroll-smooth max-w-7xl mx-auto">
        {sectionTitle && (
          <span className="text-white/40 uppercase tracking-wider font-semibold mr-1 flex-shrink-0 text-[11px]">
            {sectionTitle}:
          </span>
        )}
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 transition-all text-xs ${
              item.isActive
                ? 'bg-aeo-cyan/20 text-aeo-cyan border border-aeo-cyan/40 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default SubNavPills;
