'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Search, ArrowRight } from 'lucide-react';

export function HomepageScanCard() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !intent.trim()) return;

    const formattedUrl = url.startsWith('http') ? url.trim() : `https://${url.trim()}`;

    const searchParams = new URLSearchParams({
      url: formattedUrl,
      intent: intent.trim(),
      auto: 'true',
    });

    router.push(`/diagnostic?${searchParams.toString()}`);
  };

  return (
    <div className="p-6 bg-zinc-900/90 border border-white/15 rounded-2xl space-y-4 shadow-2xl backdrop-blur-xl">
      <div>
        <h3 className="text-xl font-bold text-white tracking-tight">Measure Your AI Visibility</h3>
        <p className="text-xs text-zinc-400 mt-1">
          See how AI search engines understand your business today. Zero email required upfront.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
            Australian Business URL
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com.au"
              spellCheck={false}
              suppressHydrationWarning
              className="w-full pl-10 pr-3 py-2.5 bg-black/60 border border-zinc-700 focus:border-emerald-500 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
            Primary Search Intent
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              required
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              placeholder="e.g. best solar installer Brisbane"
              spellCheck={false}
              suppressHydrationWarning
              className="w-full pl-10 pr-3 py-2.5 bg-black/60 border border-zinc-700 focus:border-emerald-500 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full group flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-xs transition shadow-[0_0_20px_rgba(16,185,129,0.2)] cursor-pointer"
        >
          <span>Generate My AI Visibility Score</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}
