'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ServicePillItem {
  title: string;
  url: string;
}

interface ServicePillsProps {
  items?: ServicePillItem[];
  activeUrl?: string;
}

export const DEFAULT_HOMEPAGE_SERVICE_PILLS: ServicePillItem[] = [
  { title: "AEO Services", url: "/services/aeo" },
  { title: "AI Search Strategy", url: "/services/ai-search-marketing" },
  { title: "Local Business GEO", url: "/services/aeo/local-business" },
  { title: "Ecommerce AEO", url: "/services/aeo/shopify" },
  { title: "GEO Marketing", url: "/services/geo-marketing" },
  { title: "AEO Blueprint", url: "/solutions/aeo-blueprint" },
  { title: "AEO Sprints", url: "/solutions/aeo-sprint" },
];

export function ServicePills({ items = DEFAULT_HOMEPAGE_SERVICE_PILLS, activeUrl }: ServicePillsProps) {
  const pathname = usePathname();

  return (
    <nav className="w-full overflow-x-auto py-2.5 no-scrollbar scroll-smooth">
      <div className="flex items-center gap-2 px-4 max-w-7xl mx-auto min-w-max">
        {items.map((item) => {
          const isActive = activeUrl ? activeUrl === item.url : pathname === item.url;

          return (
            <Link
              key={item.url}
              href={item.url}
              className={`inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 backdrop-blur-md border ${
                isActive
                  ? /* Active Purple Pill: Dark Purple Base + Vibrant Border + Purple Glow */
                    'bg-purple-950/70 text-purple-200 border-purple-400 font-semibold shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  : /* Inactive Purple Pill: Dark Frost Base + High-Contrast Purple Text */
                    'bg-zinc-900/80 text-purple-300 border-purple-500/30 hover:bg-zinc-800/90 hover:text-purple-200 hover:border-purple-400/60 shadow-sm'
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default ServicePills;
