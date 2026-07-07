import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Calendar, ShieldCheck, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: "Book a Clarity Call | AEObility",
  description: "Book a complimentary 15-minute call with an AEO and AI search specialist to review your visibility roadmap.",
  keywords: [
    "Book a Call",
    "Clarity Call",
    "AEO consultation",
    "AI search strategy call",
    "AEObility scheduling"
  ]
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative">
      {/* Absolute Radial Gradient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-radial from-aeo-purple/10 via-aeo-cyan/5 to-transparent glow-blur pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-grow w-full py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          
          {/* Header Block */}
          <div className="text-center space-y-4 max-w-xl mx-auto relative">
            {/* Geometric Grid Background Motif */}
            <div className="absolute inset-y-0 -inset-x-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
                <Compass className="w-3.5 h-3.5" />
                <span>AI Search & Visibility Specialist</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-soehne-breit">
                Book your <span className="text-gradient-aeo">Clarity Call</span>
              </h1>
              
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
                Select a time below for a complimentary 15-minute call. Let's discuss how to make your business discoverable and trusted across Search, Maps & AI.
              </p>
            </div>
          </div>

          {/* Cal.com Embed Container */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-2 md:p-4 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-aeo-cyan to-aeo-purple"></div>
            
            <iframe
              src="https://cal.com/vince-baker-aeo-call/15min"
              style={{
                width: '100%',
                height: '900px',
                border: 'none',
                borderRadius: '12px'
              }}
              allow="camera; microphone; fullscreen"
            />
          </div>

          {/* Trust Banner */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/40 pt-2">
            <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
            <span>Complimentary call. No obligations. Australian Service team.</span>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
