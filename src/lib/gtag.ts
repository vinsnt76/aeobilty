declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-3WVLWVG6VH';

/**
 * Standard GA4 event dispatcher utility.
 * Safely dispatches telemetry events to window.gtag or fallback window.dataLayer.
 */
export const trackGaEvent = (
  eventName: string,
  eventParams: Record<string, unknown> = {}
): void => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
};
