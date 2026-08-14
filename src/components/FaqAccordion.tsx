'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  // Questions 0 and 1 open by default for optimal initial scan
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0, 1]));

  const toggleIndex = (idx: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3 w-full">
      {faqs.map((faq, idx) => {
        const isOpen = openSet.has(idx);
        return (
          <div
            key={idx}
            className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white focus:outline-none focus:ring-1 focus:ring-aeo-cyan"
            >
              <span className="flex items-center gap-2.5 leading-snug">
                <HelpCircle className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>{faq.q}</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-aeo-cyan' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${idx}`}
                className="px-5 pb-5 pt-1 text-xs text-white/70 font-light leading-relaxed border-t border-white/5"
              >
                <div className="pl-6">{faq.a}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
