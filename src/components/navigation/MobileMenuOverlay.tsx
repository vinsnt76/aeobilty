'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function MobileMenuOverlay({ isOpen, onClose, children }: MobileMenuOverlayProps) {
  const mounted = React.useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
  const pathname = usePathname();

  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Unified single-effect route listener and open-state tracking
  const wasOpenRef = useRef(false);
  const openedPathname = useRef<string | null>(null);

  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      // Menu just opened: record initial state and pathname
      wasOpenRef.current = true;
      openedPathname.current = pathname || null;
    } else if (!isOpen) {
      // Menu closed: reset state
      wasOpenRef.current = false;
      openedPathname.current = null;
    } else if (
      isOpen &&
      wasOpenRef.current &&
      openedPathname.current !== null &&
      pathname &&
      pathname !== openedPathname.current
    ) {
      // Menu was already open and pathname changed to a new route -> close drawer
      onCloseRef.current();
    }
  }, [isOpen, pathname]);

  // Safe body scroll locking and Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      id="mobile-navigation-menu"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-[10000] flex justify-end"
    >
      {/* Backdrop overlay background */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 pointer-events-auto"
        onClick={() => onClose()}
        aria-hidden="true"
      />
      {/* Drawer panel content */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-neutral-950 border-l border-white/10 h-full overflow-y-auto p-6 text-white shadow-2xl flex flex-col justify-between pointer-events-auto">
        {children}
      </div>
    </div>,
    document.body
  );
}

export default MobileMenuOverlay;
