'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function MobileMenuOverlay({ isOpen, onClose, children }: MobileMenuOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Mount safety check for SSR hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Route Listener: Auto-close drawer on App Router client SPA navigation
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  // Safe body scroll locking and Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex justify-end transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-sm sm:max-w-md bg-neutral-950 border-l border-white/10 h-full overflow-y-auto p-6 text-white shadow-2xl relative flex flex-col justify-between select-none">
        {children}
      </div>
    </div>,
    document.body
  );
}

export default MobileMenuOverlay;
