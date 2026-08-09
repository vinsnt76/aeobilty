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
      className="lg:hidden p-2 rounded-lg text-gray-900 hover:text-aeo-purple hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-aeo-cyan transition-colors cursor-pointer"
    >
      {isOpen ? <X className="w-6 h-6 text-aeo-cyan" /> : <Menu className="w-6 h-6 text-gray-900" />}
    </button>
  );
}

export default MobileMenuButton;
