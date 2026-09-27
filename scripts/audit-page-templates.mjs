import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const APP_DIR = path.join(rootDir, 'src', 'app');

function classifyArchetype(routePath) {
  if (routePath.includes('knowledge-hub/articles/')) return '04-concept-article';
  if (routePath.includes('knowledge-hub/case-studies/')) return '05-evidence-case-study';
  if (routePath.includes('knowledge-hub/tutorials/') || routePath.includes('knowledge-hub/guides/')) return '06-practical-tutorial';
  if (routePath !== '/services/ai-search-marketing' && (routePath.startsWith('/services/ai-search-marketing/') || routePath.startsWith('/services/perth/'))) return '03-local-intent';
  if (routePath.includes('solutions/')) return '02-commercial-solution';
  if (routePath.includes('services/')) return '01-commercial-service';
  if (
    routePath === '/knowledge-hub' || 
    routePath === '/services' || 
    routePath === '/solutions' ||
    routePath.endsWith('/articles') || 
    routePath.endsWith('/case-studies') || 
    routePath.endsWith('/tutorials')
  ) {
    return '07-hub-index';
  }
  return '08-core-utility';
}

function findPageFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      results.push(fullPath);
    }
  }
  return results;
}

const pageFiles = findPageFiles(APP_DIR);

// Clean text to avoid false positives in code/schema
function stripCodeAndSchema(content) {
  return content
    .replace(/["']@type["']\s*:\s*["']Organization["']/g, '')
    .replace(/className\s*=\s*["'][^"']*["']/g, '')
    .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
}

const US_ENGLISH_TERMS = [
  { us: /\boptimization\b/gi, au: 'optimisation' },
  { us: /\boptimizations\b/gi, au: 'optimisations' },
  { us: /\boptimize\b/gi, au: 'optimise' },
  { us: /\boptimizes\b/gi, au: 'optimises' },
  { us: /\boptimizing\b/gi, au: 'optimising' },
  { us: /\boptimized\b/gi, au: 'optimised' },
  { us: /\bbehavior\b/gi, au: 'behaviour' },
  { us: /\bbehaviors\b/gi, au: 'behaviours' },
  { us: /\bspecialize\b/gi, au: 'specialise' },
  { us: /\bspecializes\b/gi, au: 'specialises' },
  { us: /\bspecializing\b/gi, au: 'specialising' },
  { us: /\borganization\b/gi, au: 'organisation' },
  { us: /\borganizations\b/gi, au: 'organisations' },
];

const resultsByArchetype = {};
const fullAuditPunchList = [];

for (const filePath of pageFiles) {
  const relPath = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  const route = relPath === 'page.tsx' ? '/' : `/${relPath.replace(/\/page\.tsx$/, '')}`;
  const archetype = classifyArchetype(route);

  if (!resultsByArchetype[archetype]) {
    resultsByArchetype[archetype] = [];
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const proseContent = stripCodeAndSchema(content);
  const issues = [];

  // Check 1: 'use client' at page root
  const hasUseClient = /^\s*['"]use client['"]/m.test(content.slice(0, 300));
  const exportsMetadata = /export\s+const\s+metadata\b/.test(content);
  if (hasUseClient) {
    issues.push({
      rule: 'Next.js 15 Server Component Root',
      severity: 'HIGH',
      message: `'use client' directive found at root of page.tsx. Move interactive client state to leaf components so server metadata can be exported.`,
    });
  } else if (!exportsMetadata && !content.includes('generateMetadata')) {
    issues.push({
      rule: 'Metadata Export',
      severity: 'MEDIUM',
      message: `Missing direct metadata or generateMetadata export on server component.`,
    });
  }

  // Check 2: Semantic H1 count
  const h1Matches = [...content.matchAll(/<h1[\s>]/gi)];
  if (h1Matches.length === 0) {
    issues.push({
      rule: 'Strict Semantic Single H1',
      severity: 'HIGH',
      message: `No <h1> tag detected in page.tsx.`,
    });
  } else if (h1Matches.length > 1) {
    issues.push({
      rule: 'Strict Semantic Single H1',
      severity: 'HIGH',
      message: `Multiple <h1> tags detected (${h1Matches.length}). Only one H1 is allowed per page in the Hero.`,
    });
  }

  // Check 3: Em dashes (Brand Don't)
  if (content.includes('—')) {
    const emDashCount = (content.match(/—/g) || []).length;
    issues.push({
      rule: 'Brand Style: No Em Dashes',
      severity: 'LOW',
      message: `Found ${emDashCount} em dash (—) character(s). Replace with standard hyphens, colons, or commas.`,
    });
  }

  // Check 4: US English spelling in user-facing text
  const usMatches = [];
  for (const { us, au } of US_ENGLISH_TERMS) {
    const found = proseContent.match(us);
    if (found) {
      usMatches.push(`${found[0]} -> ${au}`);
    }
  }
  if (usMatches.length > 0) {
    issues.push({
      rule: 'Australian English (AU)',
      severity: 'MEDIUM',
      message: `Potential US English variants detected in prose: ${[...new Set(usMatches)].join(', ')}`,
    });
  }

  // Check 5: Absolute Canonical URIs in Schema
  const relIdMatches = [...content.matchAll(/["']@id["']\s*:\s*["'](\/[^"']+)["']/g)];
  if (relIdMatches.length > 0) {
    issues.push({
      rule: 'Absolute Canonical Schema URIs',
      severity: 'HIGH',
      message: `Relative @id found in schema: "${relIdMatches[0][1]}". Must use "https://aeobility.com.au/..."`,
    });
  }

  const record = {
    route,
    file: path.relative(rootDir, filePath).replace(/\\/g, '/'),
    archetype,
    issues,
  };

  resultsByArchetype[archetype].push(record);
  fullAuditPunchList.push(record);
}

// Write punch list artifact
const punchListPath = path.join(rootDir, 'docs', 'templates', 'audit-discrepancies.json');
fs.writeFileSync(punchListPath, JSON.stringify(fullAuditPunchList, null, 2), 'utf8');

// Print Report
let totalIssues = 0;
let cleanPages = 0;

console.log('='.repeat(90));
console.log('📊 AEOBILITY PAGE TEMPLATE STANDARDISATION AUDIT REPORT');
console.log('='.repeat(90));

for (const [archetype, pages] of Object.entries(resultsByArchetype).sort()) {
  console.log(`\n📌 Archetype: [${archetype}] (${pages.length} routes)`);
  console.log('-'.repeat(90));

  for (const page of pages) {
    if (page.issues.length === 0) {
      cleanPages++;
      console.log(`  ✅ ${page.route.padEnd(45)} PASS (Compliant)`);
    } else {
      totalIssues += page.issues.length;
      console.log(`  ⚠️  ${page.route.padEnd(45)} ${page.issues.length} issue(s) flagged:`);
      for (const issue of page.issues) {
        const icon = issue.severity === 'HIGH' ? '❌' : issue.severity === 'MEDIUM' ? '⚡' : 'ℹ️';
        console.log(`     ${icon} [${issue.severity}] ${issue.rule}: ${issue.message}`);
      }
    }
  }
}

console.log('\n' + '='.repeat(90));
console.log(`🏁 AUDIT SUMMARY:`);
console.log(`   Total Routes Audited:   ${pageFiles.length}`);
console.log(`   Fully Compliant Pages:  ${cleanPages}`);
console.log(`   Pages with Deviations:  ${pageFiles.length - cleanPages}`);
console.log(`   Total Issues Flagged:   ${totalIssues}`);
console.log(`   Detailed Punch List:    docs/templates/audit-discrepancies.json`);
console.log('='.repeat(90) + '\n');
