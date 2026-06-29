import React from 'react';
import { Eye, Target, MessageSquare, Clock, ArrowUpRight, Cpu, MapPin } from 'lucide-react';

interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function USPCard({ icon, title, description }: USPCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white text-black border border-white/20 shadow-lg hover:shadow-[0_20px_40px_rgba(0,240,255,0.12)] hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 text-black mb-6 group-hover:bg-gradient-to-r group-hover:from-aeo-cyan/20 group-hover:to-aeo-purple/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-black/60 font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function USPGrid() {
  const usps = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'More Visibility',
      description: 'Show up where your potential clients are looking. Gain strong exposure across modern search, map results, and social networks.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'More Leads',
      description: 'Attract interested buyers ready to engage with your products or services. Optimize your pages to align with what customers actually type and ask.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'More Enquiries',
      description: 'Convert online attention into direct customer enquiries. Drive targeted interactions straight to your inbox or sales pipeline.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Saved',
      description: 'Automate content preparation, online profile optimization, and regular reports. Focus on running your business while we handle your digital presence.',
    },
    {
      icon: <ArrowUpRight className="w-6 h-6" />,
      title: 'Money Saved',
      description: 'Improve your organic visibility and reduce wasted effort. Build a lasting foundation that attracts customers naturally without recurring costs.',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI‑Ready Content',
      description: 'Format your brand info, service details, and articles so they are easily found, cited, and recommended by modern AI search assistants.',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Local Visibility',
      description: 'Put your business on the map. Optimize your listings and content to rank first when local customers search for immediate nearby solutions.',
    },
  ];

  return (
    <section id="usp" className="py-20 bg-black relative">
      {/* Decorative side glow */}
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-aeo-cyan glow-blur opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-widest text-aeo-cyan uppercase">
            Why AEObility
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineered for Organic Growth
          </h3>
          <p className="text-base text-white/60 font-light">
            We focus on real outcomes, giving your business the foundation to get found and get chosen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
