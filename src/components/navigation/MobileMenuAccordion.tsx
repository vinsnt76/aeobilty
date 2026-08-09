'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { NAVIGATION_DATA } from './NavData';

export function MobileMenuAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Start with all accordions closed
  const pathname = usePathname();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 my-6 font-sans">
      {NAVIGATION_DATA.map((item, idx) => {
        const isOpen = openIndex === idx;
        const isL1Active = item.href && (pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/'));
        
        return (
          <div key={idx} className="border-b border-white/10 pb-3">
            {item.children && item.children.length > 0 ? (
              <>
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center text-base font-bold text-white py-2 transition-colors hover:text-aeo-cyan text-left"
                >
                  <span className={isL1Active ? 'text-aeo-cyan font-extrabold' : ''}>{item.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-aeo-cyan' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-2 ml-2 space-y-2 border-l-2 border-aeo-cyan/40 pl-3 py-1">
                    {(item.href === '/services'
                      ? item.children.filter(sub => sub.isServicePillar)
                      : item.href === '/knowledge-hub'
                      ? item.children.filter(sub => sub.isKnowledgeCapsule)
                      : item.children
                    ).map((sub, subIdx) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <div key={subIdx} className="group">
                          <Link
                            href={sub.href}
                            className={`flex items-center justify-between text-xs py-1.5 font-medium transition-all ${
                              isSubActive
                                ? 'text-aeo-cyan font-bold bg-white/5 px-2.5 rounded-md'
                                : 'text-white/80 hover:text-white hover:bg-white/[0.02] px-2.5 rounded-md'
                            }`}
                          >
                              <span>{sub.title}</span>
                            <ArrowRight className="w-3 h-3 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href || '#'}
                className={`block text-base font-bold py-2 transition-colors hover:text-aeo-cyan ${
                  isL1Active ? 'text-aeo-cyan' : 'text-white'
                }`}
              >
                {item.title}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MobileMenuAccordion;
