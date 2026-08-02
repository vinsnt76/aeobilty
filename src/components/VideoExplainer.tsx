import React from 'react';

export default function VideoExplainer() {

  return (
    <section id="explainer-video" className="py-20 bg-black relative border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-aeo-purple/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-aeo-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        <div className="relative py-4">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <span>Our Mission</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-soehne-breit">
              Why Aussie Businesses Partner with AEObility
            </h2>
            <p className="text-base text-white/60 font-light max-w-xl mx-auto leading-relaxed font-serif">
              If your website traffic has dropped and the phone has stopped ringing, we fix it by getting you found where your customers are searching today.
            </p>
          </div>
        </div>

        {/* Video Player Container / Media Showcase */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_0_30px_rgba(0,205,216,0.1)] group">
          <img
            src="/aeobility-video-explainer.webp"
            alt="Why Aussie Businesses Partner with AEObility - AEO & GEO Marketing"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6 sm:p-8">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-aeo-cyan uppercase tracking-wider">
                Platform Overview &bull; 2 Min
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-aeo-cyan text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,205,216,0.4)] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-left space-y-0.5">
                <p className="text-sm sm:text-base font-bold text-white font-soehne-breit">Watch AEObility Overview</p>
                <p className="text-xs text-white/70 font-light">See how AEO &amp; GEO Marketing drive Perth SMB visibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
