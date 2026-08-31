/**
 * AEObility 7-State Entity Classification Engine
 * Protocol: Herfindahl-Hirschman Index (HHI) for Entity Concentration
 * Path: src/lib/telemetry/entityClassifier.ts
 */

export type EntityState =
  | 'CANONICAL'
  | 'DILUTED'
  | 'FRAGMENTED'
  | 'UNDERDEVELOPED'
  | 'EMERGING'
  | 'MISALIGNED'
  | 'UNSUPPORTED';

export interface UrlMetricNode {
  url: string;
  impressions: number;
  clicks?: number;
  ctr?: number;
  averagePosition?: number;
  hasSchema?: boolean;
  hasAtomicBlocks?: boolean;
  isCommercialNode?: boolean;
  isInformationalNode?: boolean;
  urlAgeDays?: number;
}

export interface EntityClassificationParams {
  entityTopic: string;
  targetIntentType: 'transactional' | 'commercial' | 'informational' | 'navigational';
  observedNodes: UrlMetricNode[];
  targetCanonicalUrl?: string;
  minDemandThreshold?: number; // Default 10
  unsupportedDemandThreshold?: number; // Default 100
}

export interface UrlShareBreakdown {
  url: string;
  impressions: number;
  sharePercent: number;
}

export interface EntityClassificationResult {
  entityTopic: string;
  state: EntityState;
  ecs: number; // 0 to 10,000 (Herfindahl-Hirschman Index)
  totalImpressions: number;
  urlCount: number;
  topUrl: string | null;
  topUrlShare: number;
  urlShares: UrlShareBreakdown[];
  primaryDiagnosis: string;
  prescribedAction: string;
  aiBillPromptSummary: string;
}

/**
 * Computes the Entity Concentration Score (ECS) using the Herfindahl-Hirschman Index (HHI).
 * Range: (0, 10000]
 * Formula: ECS = SUM( (impr_i / total_impr * 100)^2 )
 */
export function calculateEntityConcentrationScore(nodes: UrlMetricNode[]): {
  ecs: number;
  totalImpressions: number;
  urlShares: UrlShareBreakdown[];
} {
  const activeNodes = nodes.filter((n) => n.impressions > 0);
  const totalImpressions = activeNodes.reduce((sum, n) => sum + n.impressions, 0);

  if (totalImpressions === 0 || activeNodes.length === 0) {
    return {
      ecs: 0,
      totalImpressions: 0,
      urlShares: [],
    };
  }

  const urlShares: UrlShareBreakdown[] = activeNodes
    .map((n) => {
      const sharePercent = (n.impressions / totalImpressions) * 100;
      return {
        url: n.url,
        impressions: n.impressions,
        sharePercent: Number(sharePercent.toFixed(2)),
      };
    })
    .sort((a, b) => b.sharePercent - a.sharePercent);

  const ecs = Number(
    urlShares
      .reduce((sum, item) => sum + Math.pow(item.sharePercent, 2), 0)
      .toFixed(2)
  );

  return {
    ecs,
    totalImpressions,
    urlShares,
  };
}

/**
 * 7-State Deterministic Entity Classifier
 */
export function classifyEntityState(
  params: EntityClassificationParams
): EntityClassificationResult {
  const {
    entityTopic,
    targetIntentType,
    observedNodes,
    targetCanonicalUrl,
    minDemandThreshold = 10,
    unsupportedDemandThreshold = 100,
  } = params;

  const { ecs, totalImpressions, urlShares } = calculateEntityConcentrationScore(observedNodes);
  const urlCount = urlShares.length;
  const topUrl = urlShares[0]?.url || null;
  const topUrlShare = urlShares[0]?.sharePercent || 0;
  const topNode = observedNodes.find((n) => n.url === topUrl);

  // 1. Check for UNSUPPORTED State
  // High demand with no dedicated or relevant landing nodes
  if (totalImpressions >= unsupportedDemandThreshold && urlCount === 0) {
    const diagnosis = `High observed search demand (${totalImpressions} impressions) for "${entityTopic}" with zero landing nodes.`;
    const action = `Build a dedicated canonical asset at a relevant path to capture and convert this demand.`;
    return buildResult('UNSUPPORTED', diagnosis, action);
  }

  // 2. Check for EMERGING State
  // Low observed demand (< min threshold) OR top URL published recently (<30 days) with focused intent
  const isRecentlyCreated = topNode?.urlAgeDays !== undefined && topNode.urlAgeDays < 30;
  if ((totalImpressions < minDemandThreshold || isRecentlyCreated) && urlCount <= 2) {
    const diagnosis = `Emerging methodology node for "${entityTopic}" with nascent search demand (${totalImpressions} impressions).`;
    const action = `Retain as foundational thought-leadership asset. Do not publish competing thin pages; inject contextual links from parent category hubs.`;
    return buildResult('EMERGING', diagnosis, action);
  }

  // 3. Check for MISALIGNED State
  // Query intent type mismatches the primary landing page type
  // (e.g. Transactional/Commercial intent routed to purely academic guide, or vice versa)
  if (topNode) {
    const isCommercialQuery = targetIntentType === 'transactional' || targetIntentType === 'commercial';
    const isInfoQuery = targetIntentType === 'informational';

    const hasIntentMismatch =
      (isCommercialQuery && topNode.isInformationalNode && !topNode.isCommercialNode) ||
      (isInfoQuery && topNode.isCommercialNode && !topNode.isInformationalNode);

    if (hasIntentMismatch && topUrlShare > 50) {
      const diagnosis = `Intent mismatch detected. Search engines route ${targetIntentType} queries for "${entityTopic}" to ${topUrl}.`;
      const action = isCommercialQuery
        ? `Deploy an explicit commercial bridge, pricing cards, and consultation CTAs on ${topUrl}, or adjust internal link anchors to point to your canonical service hub.`
        : `Refocus ${topUrl} with educational atomic answer units or restructure query fan-out headers.`;
      return buildResult('MISALIGNED', diagnosis, action);
    }
  }

  // 4. Evaluate by ECS Thresholds (HHI Distribution)

  // A. High Concentration (ECS >= 7,500)
  if (ecs >= 7500) {
    const hasSchema = topNode?.hasSchema ?? true;
    const hasAtomicBlocks = topNode?.hasAtomicBlocks ?? true;

    // Check if canonical URL matches intended destination
    const isTargetCanonical = !targetCanonicalUrl || targetCanonicalUrl === topUrl;

    if (hasSchema && hasAtomicBlocks && isTargetCanonical) {
      const diagnosis = `Canonical entity status verified for "${entityTopic}". Single URL (${topUrl}) commands ${topUrlShare}% of search salience (ECS: ${ecs}).`;
      const action = `Canonical status verified. Maintain internal link topology and update timestamp freshness quarterly.`;
      return buildResult('CANONICAL', diagnosis, action);
    } else {
      const diagnosis = `High URL concentration (ECS: ${ecs}) on ${topUrl}, but machine-readability or schema structures are incomplete.`;
      const action = `Enrich on-page content on ${topUrl} with structured JSON-LD schema (@type: Service/Article) and 40–80 token atomic answer blocks.`;
      return buildResult('UNDERDEVELOPED', diagnosis, action);
    }
  }

  // B. Moderate Dispersion / Differentiated Sub-Facets (4,000 <= ECS < 7,500)
  if (ecs >= 4000 && ecs < 7500) {
    const diagnosis = `Healthy semantic decomposition across ${urlCount} sub-facet URLs for "${entityTopic}" (ECS: ${ecs}).`;
    const action = `Maintain parent-to-child SubNavPills navigation relationships and ensure secondary nodes link up to the canonical hub.`;
    return buildResult('FRAGMENTED', diagnosis, action);
  }

  // C. Severe Dilution / Commercial Cannibalisation (ECS < 4,000)
  const commercialNodes = observedNodes.filter((n) => n.isCommercialNode && n.impressions > 0);
  const isCommercialDilution = commercialNodes.length >= 2;

  const diagnosis = isCommercialDilution
    ? `Commercial cannibalisation detected for "${entityTopic}". ${commercialNodes.length} service URLs are splitting search intent (ECS: ${ecs}).`
    : `Severe topical dilution observed across ${urlCount} competing URLs for "${entityTopic}" (ECS: ${ecs}).`;

  const action = isCommercialDilution
    ? `Consolidate commercial CTAs to the primary commercial hub (${commercialNodes[0].url}) and refocus secondary nodes as supporting decision enablers.`
    : `Consolidate competing URLs into a primary canonical guide using 301 redirects or explicit canonical link tags.`;

  return buildResult('DILUTED', diagnosis, action);

  // Helper factory
  function buildResult(
    state: EntityState,
    primaryDiagnosis: string,
    prescribedAction: string
  ): EntityClassificationResult {
    const aiBillPromptSummary = `[Entity State: ${state} | ECS: ${ecs}/10000 | Impressions: ${totalImpressions}] - ${primaryDiagnosis} Recommendation: ${prescribedAction}`;

    return {
      entityTopic,
      state,
      ecs,
      totalImpressions,
      urlCount,
      topUrl,
      topUrlShare,
      urlShares,
      primaryDiagnosis,
      prescribedAction,
      aiBillPromptSummary,
    };
  }
}
