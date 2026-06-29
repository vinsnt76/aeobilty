import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import USPGrid from '@/components/USPGrid';
import HowItWorks from '@/components/HowItWorks';
import BlueprintSection from '@/components/BlueprintSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Hero />
      <SocialProof />
      <USPGrid />
      <HowItWorks />
      <BlueprintSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
