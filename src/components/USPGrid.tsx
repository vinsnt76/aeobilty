import React from 'react';
import { Eye, Target, MessageSquare } from 'lucide-react';

interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function USPCard({ icon, title, description }: USPCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-neutral-900/40 text-white border border-white/5 shadow-2xl hover:border-aeo-cyan/20 hover:bg-neutral-900/60 hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 font-soehne-breit">{title}</h3>
        <p className="text-sm text-white/60 font-light leading-relaxed font-serif">{description}</p>
      </div>
    </div>
  );
}

export default function USPGrid() {
  const usps = [
    {
      icon: <Eye className="w-6 h-6 text-aeo-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />,
      title: 'Stop Losing Traffic on Google, Maps and AI',
      description: 'We get your brand positioned clearly across Google, Maps, and emerging AI answer engines so local customers actually see your name first.',
    },
    {
      icon: <Target className="w-6 h-6 text-aeo-purple drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" />,
      title: 'Get Consistent Enquiries',
      description: 'No more relying on outdated tricks. We construct a clear, understandable digital presence that turns online searches into real customer enquiries.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-pink-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />,
      title: 'Straight to Your Inbox',
      description: 'We focus on real outcomes. Receive direct phone calls, email enquiries, and booking requests straight to your day-to-day business pipeline.',
    },
  ];

  return (
    <section id="usp" className="py-20 bg-black relative">
      {/* Decorative side glow */}
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-aeo-cyan glow-blur opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="relative text-center max-w-2xl mx-auto mb-16">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 -m-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <h2 className="text-xs font-semibold tracking-widest text-aeo-cyan uppercase">
              Why AEObility?
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-soehne-breit">
              Put Your Business on the Map
            </h3>
            <p className="text-base text-white/60 font-light font-serif">
              We focus on real outcomes, giving your business the foundation to get found and get chosen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, idx) => (
            <USPCard
              key={idx}
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
