import fs from 'fs';
import path from 'path';
import parse from 'csv-simple-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const csvPath = path.join(rootDir, 'AEObility -IA & SLM.csv');
const rawContent = fs.readFileSync(csvPath, 'utf8');

const rawRecords = parse(rawContent, { header: true });
const records = rawRecords.filter(r => r.URL && r.URL.trim().length > 0);
console.log(`Parsed ${records.length} valid records from ${path.basename(csvPath)}.`);

let fixes = 0;

// AU spelling regex replacements
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

for (const row of records) {
  // Check AU spelling in all text fields
  for (const key of Object.keys(row)) {
    if (key === 'SchemaType') continue; // Preserve Schema.org Organization
    const val = row[key];
    if (typeof val === 'string') {
      const auVal = toAustralianEnglish(val);
      if (auVal !== val) {
        console.log(`[AU Spelling Fix] ${row.URL} -> ${key}`);
        row[key] = auVal;
        fixes++;
      }
    }
  }

  // Check character counts
  const seoTitle = row.SEOTitle || '';
  const metaDesc = row.MetaDescription || '';
  
  if (parseInt(row.SEOTitle_CharCount, 10) !== seoTitle.length) {
    console.log(`[CharCount Fix] ${row.URL} SEOTitle: was ${row.SEOTitle_CharCount}, now ${seoTitle.length}`);
    row.SEOTitle_CharCount = String(seoTitle.length);
    fixes++;
  }
  
  if (parseInt(row.MetaDescription_CharCount, 10) !== metaDesc.length) {
    console.log(`[CharCount Fix] ${row.URL} MetaDesc: was ${row.MetaDescription_CharCount}, now ${metaDesc.length}`);
    row.MetaDescription_CharCount = String(metaDesc.length);
    fixes++;
  }
}

// Convert back to CSV properly formatted
function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const headers = Object.keys(records[0]);
const csvRows = [headers.join(',')];

for (const row of records) {
  const line = headers.map(h => escapeCsv(row[h])).join(',');
  csvRows.push(line);
}

const updatedCsv = csvRows.join('\r\n') + '\r\n';
fs.writeFileSync(csvPath, updatedCsv, 'utf8');

console.log(`Audit complete: Made ${fixes} fixes and saved to ${path.basename(csvPath)}.`);
