import { computeUncappedScore } from './src/lib/search/vectorEngine.js';
import fs from 'fs';

const knowledgeBaseData = JSON.parse(fs.readFileSync('./src/lib/search/knowledgeBase.json', 'utf8'));
const knowledgeBase = knowledgeBaseData.nodes;

const queries = [
  "What AEO services does AEObility provide in Perth?",
  "Show me evidence of AEObility's AEO results on a new domain.",
  "How did AEObility perform for AEO services Perth?"
];

for (const query of queries) {
  let bestMatch = null;
  let maxRankScore = -1;
  let maxRawCos = -1;

  for (const node of knowledgeBase) {
    const { rawCos, rankingScore } = computeUncappedScore(query, node);
    if (rankingScore > maxRankScore || (rankingScore === maxRankScore && rawCos > maxRawCos)) {
      maxRankScore = rankingScore;
      maxRawCos = rawCos;
      bestMatch = node;
    }
  }

  console.log(`Query: "${query}"`);
  console.log(`Top Match: ${bestMatch?.url}`);
  console.log(`Score: ${maxRankScore.toFixed(4)}\n`);
}
