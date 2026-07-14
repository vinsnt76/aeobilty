import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Cyan Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-aeo-cyan/15 glow-blur pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan animate-pulse" />
          <span>Check Your AI Visibility Score Now</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Get More Leads<br />
          and Enquiries?
        </h2>

        <p className="text-base sm:text-lg text-white/60 font-light max-w-xl mx-auto leading-relaxed">
          Improve your organic visibility and reduce wasted effort. See exactly what it takes to show up first across Search, Maps, and AI assistants.
        </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostic"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-aeo-cyan text-black font-bold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)]"
            >
              Generate My Score
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>

        <p className="text-xs text-white/30 font-light">
          Takes under 60 seconds • Completely free report • Clear roadmap
        </p>
      </div>
    </section>
  );
}
