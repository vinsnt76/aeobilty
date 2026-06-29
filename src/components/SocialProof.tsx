import React from 'react';

interface LogoItemProps {
  name: string;
}

function LogoBadge({ name }: LogoItemProps) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300">
      <span className="text-sm font-semibold tracking-wider text-white/60 hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function SocialProof() {
  const platforms = [
    'GOOGLE',
    'BING',
    'LINKEDIN',
    'FACEBOOK',
    'INSTAGRAM',
    'TIKTOK',
    'CHATGPT',
    'CLAUDE',
    'PERPLEXITY',
  ];

  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/40 mb-8">
          Showing up where your customers search, scroll, and ask AI
        </p>

        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:overflow-visible md:grid md:grid-cols-3 lg:grid-cols-9 scrollbar-none justify-start md:justify-items-stretch">
          {platforms.map((platform, idx) => (
            <LogoBadge key={idx} name={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
