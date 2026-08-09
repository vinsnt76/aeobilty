'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  const router = useRouter();

  // Prefetch top intent targets on hover/focus engagement
  const handlePrefetch = () => {
    router.prefetch('/services/aeo');
    router.prefetch('/services/aeo/shopify');
    router.prefetch('/solutions/aeo-blueprint');
    router.prefetch('/diagnostic');
  };

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-menu"
      aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
      onClick={onToggle}
      onMouseEnter={handlePrefetch}
      onFocus={handlePrefetch}
      className="lg:hidden h-9 w-9 flex items-center justify-center rounded-lg bg-zinc-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 hover:bg-zinc-800 hover:text-cyan-200 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all cursor-pointer shadow-sm"
    >
      {isOpen ? <X className="w-5 h-5 text-cyan-200" /> : <Menu className="w-5 h-5 text-cyan-300" />}
    </button>
  );
}

export default MobileMenuButton;
