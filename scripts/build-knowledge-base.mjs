import fs from 'fs';
import path from 'path';
import parse from 'csv-simple-parser';

const VECTOR_DIM = 384;

function toAustralianEnglish(text) {
  if (!text) return text;
  return text
    .replace(/\bOptimization\b/g, 'Optimisation')
    .replace(/\boptimization\b/g, 'optimisation')
    .replace(/\bOptimizations\b/g, 'Optimisations')
    .replace(/\boptimizations\b/g, 'optimisations')
    .replace(/\bOptimize\b/g, 'Optimise')
    .replace(/\boptimize\b/g, 'optimise')
    .replace(/\bOptimized\b/g, 'Optimised')
    .replace(/\boptimized\b/g, 'optimised')
    .replace(/\bOptimizing\b/g, 'Optimising')
    .replace(/\boptimizing\b/g, 'optimising')
    .replace(/\bSynthesize\b/g, 'Synthesise')
    .replace(/\bsynthesize\b/g, 'synthesise')
    .replace(/\bSynthesized\b/g, 'Synthesised')
    .replace(/\bsynthesized\b/g, 'synthesised')
    .replace(/\bSynthesizing\b/g, 'Synthesising')
    .replace(/\bsynthesizing\b/g, 'synthesising')
    .replace(/\bSpecialized\b/g, 'Specialised')
    .replace(/\bspecialized\b/g, 'specialised')
    .replace(/\bSpecializing\b/g, 'Specialising')
    .replace(/\bspecializing\b/g, 'specialising')
    .replace(/\bSpecialize\b/g, 'Specialise')
    .replace(/\bspecialize\b/g, 'specialise')
    .replace(/\bAnalyze\b/g, 'Analyse')
    .replace(/\banalyze\b/g, 'analyse')
    .replace(/\bAnalyzed\b/g, 'Analysed')
    .replace(/\banalyzed\b/g, 'analysed')
    .replace(/\bAnalyzing\b/g, 'Analysing')
    .replace(/\banalyzing\b/g, 'analysing')
    .replace(/\bPrioritize\b/g, 'Prioritise')
    .replace(/\bprioritize\b/g, 'prioritise')
    .replace(/\bPrioritized\b/g, 'Prioritised')
    .replace(/\bprioritized\b/g, 'prioritised')
    .replace(/\bOrganize\b/g, 'Organise')
    .replace(/\borganize\b/g, 'organise')
    .replace(/(?<!LocalBusiness,\s*|@type":\s*"|Schema.org\s*)\bOrganization\b/g, 'Organisation')
    .replace(/\borganization\b/g, 'organisation')
    .replace(/\bCustomization\b/g, 'Customisation')
    .replace(/\bcustomization\b/g, 'customisation')
    .replace(/\bCustomize\b/g, 'Customise')
    .replace(/\bcustomize\b/g, 'customise')
    .replace(/\bBehavior\b/g, 'Behaviour')
    .replace(/\bbehavior\b/g, 'behaviour')
    .replace(/\bColor\b/g, 'Colour')
    .replace(/\bcolor\b/g, 'colour');
}

function buildVector(text, dim = VECTOR_DIM) {
  const vec = new Float64Array(dim);
  const clean = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const words = clean.split(/\s+/).filter(Boolean);

  const grams = [];
  for (const w of words) {
    grams.push(w);
    if (w.length >= 3) {
      for (let i = 0; i <= w.length - 3; i++) {
        grams.push(w.slice(i, i + 3));
      }
    }
  }

  for (const g of grams) {
    let hash = 0;
    for (let i = 0; i < g.length; i++) {
      hash = (hash << 5) - hash + g.charCodeAt(i);
      hash |= 0;
    }
    const idx = Math.abs(hash) % dim;
    vec[idx] += 1;
  }

  let norm = 0;
  for (let i = 0; i < dim; i++) {
    norm += vec[i] * vec[i];
  }
  norm = Math.sqrt(norm);
  if (norm > 0) {
    for (let i = 0; i < dim; i++) {
      vec[i] /= norm;
    }
  }

  return Array.from(vec);
}

import { generateNavData } from './generate-navdata.mjs';

async function main() {
  generateNavData();
  console.log('⚡ Compiling AEObility IA/SLM Knowledge Base Vector Manifest...');

  const csvPath = path.join(process.cwd(), 'AEObility -IA & SLM.csv');
  const targetDir = path.join(process.cwd(), 'src', 'lib', 'search');
  const targetJson = path.join(targetDir, 'knowledgeBase.json');

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV file not found at: ${csvPath}`);
    if (fs.existsSync(targetJson)) {
      console.log('⚠️ Using existing knowledgeBase.json manifest.');
      return;
    }
    process.exit(1);
  }

  const csvRaw = fs.readFileSync(csvPath, 'utf-8');
  const rows = parse(csvRaw);

  if (!rows || rows.length < 2) {
    console.error('❌ CSV contains no data rows.');
    process.exit(1);
  }

  const dataRows = rows.slice(1);
  console.log(`Processing ${dataRows.length} entities from IA/SLM architecture...`);

  const compiledNodes = [];

  for (let i = 0; i < dataRows.length; i++) {
    const row = dataRows[i];
    const pageName = toAustralianEnglish(row[0] ? row[0].trim() : '');
    const url = row[1] ? row[1].trim() : '';
    if (!pageName && !url) continue; // Skip trailing empty lines

    if (row.length !== 18) {
      console.error(`❌ CSV parsing error at row ${i + 2}: Expected 18 columns, but got ${row.length}. Check for unquoted commas!`);
      process.exit(1);
    }

    if (!url || (!url.startsWith('/') && !url.startsWith('http'))) {
      console.error(`❌ Invalid URL at CSV row ${i + 2}: "${url}". Check CSV alignment!`);
      process.exit(1);
    }

    const focusKeyphrase = toAustralianEnglish(row[4] ? row[4].trim() : '');
    const description = toAustralianEnglish(row[7] ? row[7].trim() : '');
    const h1 = toAustralianEnglish(row[9] ? row[9].trim() : (row[5] ? row[5].trim() : pageName));
    const primaryKeywords = toAustralianEnglish(row[10] ? row[10].replace(/\\n/g, ', ').trim() : '');
    const secondaryKeywords = toAustralianEnglish(row[11] ? row[11].replace(/\\n/g, ', ').trim() : '');
    const latentKeywords = toAustralianEnglish(row[13] ? row[13].trim() : '');
    const schemaType = row[14] ? row[14].trim() : 'WebPage';

    const textToEmbed = [
      `Page: ${pageName}`,
      `URL: ${url}`,
      `H1: ${h1}`,
      `Focus Keyphrase: ${focusKeyphrase}`,
      `Primary Keywords: ${primaryKeywords}`,
      `Secondary Keywords: ${secondaryKeywords}`,
      `Latent Keywords: ${latentKeywords}`,
      `Schema Type: ${schemaType}`,
      `Description: ${description}`
    ].filter(Boolean).join('. ');

    const embedding = buildVector(textToEmbed);

    compiledNodes.push({
      pageName,
      url,
      h1,
      focusKeyphrase,
      latentKeywords,
      schemaType,
      description,
      primaryKeywords,
      secondaryKeywords,
      embedding
    });
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(targetJson, JSON.stringify(compiledNodes, null, 2), 'utf-8');
  console.log(`✅ Successfully compiled ${compiledNodes.length} vector nodes to: ${targetJson}`);
}

main().catch(err => {
  console.error('Fatal error in build-knowledge-base script:', err);
  process.exit(1);
});
