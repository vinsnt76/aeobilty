'use client';

import React, { useState } from 'react';
import { Wrench, Stethoscope, Home, Check, ArrowRight } from 'lucide-react';

export default function LocalAudienceTabs() {
  const [activeTab, setActiveTab] = useState<'service-areas' | 'storefronts' | 'regional'>('service-areas');

  const scrollToContactForm = () => {
    if (typeof window !== 'undefined') {
      const formElement = document.getElementById('local-contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Audience Toggle Tabs */}
      <div className="flex justify-center border-b border-white/10 max-w-xl mx-auto overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('service-areas')}
          className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'service-areas'
              ? 'border-cyan-400 text-cyan-300 bg-cyan-950/40'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          🛠️ MOBILE &amp; SERVICE AREAS
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('storefronts')}
          className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'storefronts'
              ? 'border-purple-400 text-purple-300 bg-purple-950/40'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          🏥 STOREFRONTS &amp; CLINICS
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('regional')}
          className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'regional'
              ? 'border-emerald-400 text-emerald-300 bg-emerald-950/40'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          🏡 REGIONAL OPERATIONS
        </button>
      </div>

      {/* Tab Content 1: Mobile & Service Areas */}
      {activeTab === 'service-areas' && (
        <div id="service-areas-pathway" className="bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-cyan-950 border border-cyan-500/40 rounded-xl">
              <Wrench className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-soehne-breit">Mobile &amp; Service-Area Businesses</h3>
              <p className="text-xs text-zinc-400 font-serif">Plumbers, Electricians, Air Conditioning Specialists, Builders &amp; Mobile Technicians</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 font-serif">
            <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
              <strong className="text-white font-semibold block text-sm">Key Search Priorities:</strong>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Emergency &amp; urgent local service intent (&quot;electrician near me&quot;)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Mobile service area coverage across multiple target suburbs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Direct phone click-to-call lead generation for technicians</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
              <strong className="text-white font-semibold block text-sm">AEObility Sprint Actions:</strong>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>S1 Schema: Inject LocalBusiness &amp; GeoCircle service area radiuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>S4 Directory Clean-Up: Align NAP data across Yellow Pages &amp; Google Maps</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>S2 Page Restructuring: Turn generic services pages into suburb answer units</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition cursor-pointer"
            >
              <span>Request Scope for This Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab Content 2: Storefronts & Clinics */}
      {activeTab === 'storefronts' && (
        <div id="storefronts-pathway" className="bg-zinc-950/90 border border-purple-500/30 p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-950 border border-purple-500/40 rounded-xl">
              <Stethoscope className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-soehne-breit">Storefronts &amp; Local Clinics</h3>
              <p className="text-xs text-zinc-400 font-serif">Dental Practices, Allied Health Clinics, Medical Providers, Retail &amp; Commercial Offices</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 font-serif">
            <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
              <strong className="text-white font-semibold block text-sm">Key Search Priorities:</strong>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Practitioner &amp; physical location clarity per branch node</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Service &amp; condition intent matching for local queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>AHPRA-compliant trust messaging (no false acquisition guarantees)</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
              <strong className="text-white font-semibold block text-sm">AEObility Sprint Actions:</strong>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>S1 Schema: Deploy MedicalClinic &amp; Physician nested JSON-LD graphs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>S3 Linking Lattice: Connect location pages directly to online booking nodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>S4 Citation Clean-Up: Align clinic operating hours across healthcare directories</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500 text-black font-bold text-xs hover:bg-purple-400 transition cursor-pointer"
            >
              <span>Request Scope for This Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab Content 3: Regional Operations */}
      {activeTab === 'regional' && (
        <div id="regional-pathway" className="bg-zinc-950/90 border border-emerald-500/30 p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-950 border border-emerald-500/40 rounded-xl">
              <Home className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-soehne-breit">Regional Operations &amp; Commercial Hubs</h3>
              <p className="text-xs text-zinc-400 font-serif">Regional Services, Agricultural Suppliers, Industrial Services &amp; WA Regional Businesses</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 font-serif">
            <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
              <strong className="text-white font-semibold block text-sm">Key Search Priorities:</strong>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Regional hub &amp; wide geographic area coverage mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Commercial capability clarity for regional industry buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cross-suburb &amp; regional town service disambiguation</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
              <strong className="text-white font-semibold block text-sm">AEObility Sprint Actions:</strong>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>S1 Schema: Inject regional LocalBusiness &amp; AreaServed nodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>S2 Page Restructuring: Build regional town answer blocks for high-intent queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>S3 Lattice: Link regional hub nodes to primary service pages</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition cursor-pointer"
            >
              <span>Request Scope for This Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
