'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export interface UseAssistantSuppressionOptions {
  /**
   * CSS selectors for high-intent elements that should suppress the assistant
   * @default ['#hero-cta', '#diagnostic-scanner', '.diagnostic-input']
   */
  highIntentSelectors?: string[];
  /**
   * IntersectionObserver threshold required to trigger suppression
   * @default 0.15
   */
  threshold?: number;
  /**
   * Selector for the primary diagnostic form container
   * @default '#diagnostic-scanner form'
   */
  formSelector?: string;
}

/**
 * Custom hook to suppress floating assistants when high-intent conversion areas
 * or forms are active, preventing CTA conflict and mobile viewport obstruction.
 */
export function useAssistantSuppression({
  highIntentSelectors = ['#hero-cta', '#diagnostic-scanner', '.diagnostic-input'],
  threshold = 0.15,
  formSelector = '#diagnostic-scanner form'
}: UseAssistantSuppressionOptions = {}) {
  const [isSuppressed, setIsSuppressed] = useState(false);
  const activeIntersectionsRef = useRef<Map<Element, boolean>>(new Map());
  const isFormFocusedRef = useRef<boolean>(false);

  const evaluateSuppression = useCallback(() => {
    const isIntersecting = Array.from(activeIntersectionsRef.current.values()).some(Boolean);
    setIsSuppressed(isIntersecting || isFormFocusedRef.current);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const elements = document.querySelectorAll(highIntentSelectors.join(','));
    const form = document.querySelector(formSelector);

    // 1. Setup IntersectionObserver for viewport state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          activeIntersectionsRef.current.set(entry.target, entry.isIntersecting);
        });
        evaluateSuppression();
      },
      {
        root: null,
        threshold
      }
    );

    elements.forEach((el) => {
      activeIntersectionsRef.current.set(el, false);
      observer.observe(el);
    });

    // 2. Setup Form Focus Delegation (Zero timer / microtask flicker)
    const handleFocusIn = () => {
      isFormFocusedRef.current = true;
      setIsSuppressed(true);
    };

    const handleFocusOut = (e: FocusEvent) => {
      if (!form?.contains(e.relatedTarget as Node)) {
        isFormFocusedRef.current = false;
        evaluateSuppression();
      }
    };

    form?.addEventListener('focusin', handleFocusIn);
    form?.addEventListener('focusout', handleFocusOut as EventListener);

    return () => {
      observer.disconnect();
      activeIntersectionsRef.current.clear();
      form?.removeEventListener('focusin', handleFocusIn);
      form?.removeEventListener('focusout', handleFocusOut as EventListener);
    };
  }, [highIntentSelectors, threshold, formSelector, evaluateSuppression]);

  return { isSuppressed };
}
