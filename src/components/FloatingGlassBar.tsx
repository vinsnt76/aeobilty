'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Sparkles, ArrowRight } from 'lucide-react';

const LiquidGlass = dynamic(
  () => import('liquid-glass-react').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="w-full h-full rounded-full bg-black/75 backdrop-blur-md" />,
  }
);

export function FloatingGlassBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Floating AI Visibility Diagnostic Bar"
      aria-hidden={!visible}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative rounded-full p-0.5 overflow-hidden shadow-2xl shadow-cyan-950/40">
        {/* Layer 0: Decorative Liquid Glass Underlay */}
        <div className="absolute inset-0 pointer-events-none">
          <LiquidGlass
            blurAmount={14}
            displacementScale={10}
            className="w-full h-full rounded-full bg-black/75"
          >
            <div className="w-full h-full" />
          </LiquidGlass>
        </div>

        {/* Layer 1: Foreground Navigation Pill */}
        <div className="relative z-10 px-5 py-2.5 flex items-center gap-4 bg-black/70 rounded-full border border-white/15 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="hidden sm:inline">AI Visibility Diagnostic</span>
          </div>

          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs transition-colors"
          >
            <span>Run Scan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default FloatingGlassBar;
