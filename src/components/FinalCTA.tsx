import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Cyan Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-aeo-cyan/15 glow-blur pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Limited Audit Slots Available This Month</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Get More Leads<br />
          and Enquiries?
        </h2>

        <p className="text-base sm:text-lg text-white/60 font-light max-w-xl mx-auto leading-relaxed">
          Get absolute clarity on your digital footprint and see exactly what it takes to show up first across Search, AI, and Social.
        </p>

        <div className="pt-4">
          <a
            href="#audit-form"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:scale-[1.02] transition-transform duration-200"
          >
            Request My Free Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="text-xs text-white/30 font-light">
          Takes under 60 seconds • Completely free report • Clear roadmap
        </p>
      </div>
    </section>
  );
}
