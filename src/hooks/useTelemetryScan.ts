import { useState } from 'react';
import { TelemetryResult } from '@/lib/telemetry/types';

export function useTelemetryScan() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TelemetryResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runScan = async (url: string, targetIntent: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          intent: targetIntent,
          url: url
        }),
      });

      if (!response.ok) throw new Error('Telemetry scan failed to execute.');

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'An unexpected diagnostic error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return { runScan, result, loading, error };
}
