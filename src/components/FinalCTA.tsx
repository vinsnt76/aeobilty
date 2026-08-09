'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Search, ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    const formattedUrl = url.startsWith('http') ? url.trim() : `https://${url.trim()}`;
    const searchParams = new URLSearchParams({
      url: formattedUrl,
      intent: intent.trim() || 'AEO visibility audit',
      auto: 'true',
    });

    router.push(`/diagnostic?${searchParams.toString()}`);
  };

  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Cyan & Purple Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-radial from-aeo-cyan/15 via-aeo-purple/10 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
          <Sparkles className="w-3.5 h-3.5 text-aeo-cyan animate-pulse" />
          <span>Instant AI Search & Maps Audit</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
          Ready to Get More Leads<br />
          and Enquiries?
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed font-serif">
          Improve your organic visibility and reduce wasted effort. See exactly what it takes to show up first across Search, Maps, and AI assistants.
        </p>

        {/* Interactive Audit Form */}
        <div className="max-w-2xl mx-auto p-6 md:p-8 bg-zinc-900/90 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-xl text-left space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5 font-mono">
                  Australian Business URL
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com.au"
                    spellCheck={false}
                    className="w-full pl-10 pr-3.5 py-3 bg-black/70 border border-zinc-700 focus:border-aeo-cyan rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5 font-mono">
                  Primary Search Intent (Optional)
                </label>
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    placeholder="e.g. best solar installer Brisbane"
                    spellCheck={false}
                    className="w-full pl-10 pr-3.5 py-3 bg-black/70 border border-zinc-700 focus:border-aeo-cyan rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple hover:opacity-95 text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_25px_rgba(0,240,255,0.25)] cursor-pointer"
            >
              <span>Generate My Score</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <p className="text-center text-xs text-white/50 font-light pt-2">
            Takes under 60 seconds • Completely free report • Clear roadmap
          </p>
        </div>
      </div>
    </section>
  );
}
