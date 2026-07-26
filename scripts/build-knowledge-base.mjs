import fs from 'fs';
import path from 'path';
import parse from 'csv-simple-parser';

const VECTOR_DIM = 384;

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

async function main() {
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
    const pageName = row[0] ? row[0].trim() : '';
    const url = row[1] ? row[1].trim() : '';
    if (!pageName || !url) continue;

    const focusKeyphrase = row[4] ? row[4].trim() : '';
    const description = row[7] ? row[7].trim() : '';
    const h1 = row[9] ? row[9].trim() : (row[5] ? row[5].trim() : pageName);
    const primaryKeywords = row[10] ? row[10].replace(/\\n/g, ', ').trim() : '';
    const secondaryKeywords = row[11] ? row[11].replace(/\\n/g, ', ').trim() : '';
    const latentKeywords = row[13] ? row[13].trim() : '';
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
