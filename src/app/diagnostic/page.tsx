import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DiagnosticEngine from '@/components/DiagnosticEngine';

export const metadata = {
  title: 'AI Visibility Diagnostic | AEObility',
  description: 'Measure your AI Search Visibility and find out how AI engines understand your business.',
};

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-24 flex flex-col items-center">
        <DiagnosticEngine />
      </main>

      <Footer />
    </div>
  );
}
