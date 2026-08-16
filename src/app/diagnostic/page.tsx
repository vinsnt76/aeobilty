import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DiagnosticEngine from '@/components/DiagnosticEngine';

export const metadata = {
  title: 'AI Visibility Diagnostic | AEObility',
  description: 'Measure your AI Search Visibility and find out how AI engines understand your business.',
  alternates: {
    canonical: "https://aeobility.com.au/diagnostic",
  },
};

export default function DiagnosticPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/diagnostic#webpage",
        "url": "https://aeobility.com.au/diagnostic",
        "name": "AI Visibility Diagnostic | AEObility",
        "description": "Measure your AI Search Visibility and find out how AI engines understand your business.",
        "publisher": {
          "@type": "Organisation",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://aeobility.com.au/diagnostic#webapp",
        "name": "AEObility AI Visibility Diagnostic Engine",
        "url": "https://aeobility.com.au/diagnostic",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "description": "Interactive Answer Engine Optimisation (AEO) diagnostic tool evaluating brand entity salience and AI search visibility scores.",
        "provider": {
          "@type": "Organisation",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-24 flex flex-col items-center">
        <Suspense fallback={<div className="text-zinc-400 text-sm animate-pulse font-mono">Initialising Telemetry Engine...</div>}>
          <DiagnosticEngine />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
