import { NextResponse } from 'next/server';
import { 
  BRAND_IDENTITY, 
  BRAND_DEFINITIONS, 
  BRAND_KNOWLEDGE_LATTICE, 
  PRICING_CONFIG, 
  BRAND_TEMPORAL_STATE,
  calculateFactCoverageScore,
  PROVENANCE_ENTITIES,
  PROVENANCE_GRAPH_SCHEMA
} from '@/lib/brandFacts';

export const runtime = 'edge';

export async function GET() {
  const coverageScores = calculateFactCoverageScore();
  
  return NextResponse.json({
    account: "AEObility CBKL Domain Engine",
    lastSynced: "2026-08-29T20:36:40+08:00",
    payload: {
      identity: BRAND_IDENTITY,
      definitions: BRAND_DEFINITIONS,
      provenanceLattice: BRAND_KNOWLEDGE_LATTICE,
      provenanceEntities: PROVENANCE_ENTITIES,
      provenanceGraphSchema: PROVENANCE_GRAPH_SCHEMA,
      commercialManifest: PRICING_CONFIG,
      temporalState: BRAND_TEMPORAL_STATE,
      metrics: {
        brandFactCoverageRatio: coverageScores
      }
    }
  }, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Content-Type': 'application/json'
    }
  });
}
