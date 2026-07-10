import { NextRequest, NextResponse } from 'next/server';
import { computeProximity } from '@/lib/telemetry/proximity';
import { runSimulation } from '@/lib/telemetry/rag-sim';
import { extractEntityGraph } from '@/lib/telemetry/graph';
import { TelemetryResult } from '@/lib/telemetry/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { intent, clientText, competitors } = body;

    if (!intent || !clientText) {
      return NextResponse.json(
        { error: 'Missing core parameters: "intent" and "clientText" are required.' },
        { status: 400 }
      );
    }

    const competitorList = Array.isArray(competitors) ? competitors : [];

    // Run telemetry engines concurrently
    const [proximityNodes, simulations, triples] = await Promise.all([
      computeProximity(intent, clientText, competitorList),
      runSimulation(intent, clientText),
      extractEntityGraph(clientText)
    ]);

    // Calculate proximityScore based on Client similarity
    const clientNode = proximityNodes.find(n => n.label === 'Client');
    const clientSimilarity = clientNode ? clientNode.similarity : 0.5;
    const proximityScore = Math.round(clientSimilarity * 100);

    // Calculate overall AI readiness score
    const survivalRate = simulations.filter(s => s.survived).length / Math.max(1, simulations.length);
    const graphStrength = triples.length >= 3 ? 0.9 : triples.length * 0.3;
    const readinessScore = Math.round(((clientSimilarity + survivalRate + graphStrength) / 3) * 100);

    const result: TelemetryResult = {
      proximityScore,
      nodes: proximityNodes,
      triples,
      simulations,
      readinessScore
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Telemetry run error:', error);
    return NextResponse.json(
      { error: 'Internal server error running telemetry.' },
      { status: 500 }
    );
  }
}
