'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Vestibular accessibility check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
      disable: prefersReducedMotion,
      duration: 380, // Keep snappy and under 400ms
      easing: 'ease-out-cubic',
      once: true, // Prevent jarring re-triggers on reverse scroll
      offset: 28, // Calibrated for mobile viewports to prevent blank content blocks
      delay: 0,
      mirror: false,
    });

    // Clean refresh on DOM mutation or dynamic page sizing
    const handleLoad = () => AOS.refresh();
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return <>{children}</>;
}
