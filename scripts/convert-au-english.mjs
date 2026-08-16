import fs from 'fs';
import path from 'path';

const replacements = [
  [/\bOptimization\b/g, 'Optimisation'],
  [/\boptimization\b/g, 'optimisation'],
  [/\bOptimizations\b/g, 'Optimisations'],
  [/\boptimizations\b/g, 'optimisations'],
  [/\bOptimize\b/g, 'Optimise'],
  [/\boptimize\b/g, 'optimise'],
  [/\bOptimized\b/g, 'Optimised'],
  [/\boptimized\b/g, 'optimised'],
  [/\bOptimizing\b/g, 'Optimising'],
  [/\boptimizing\b/g, 'optimising'],
  [/\bSynthesize\b/g, 'Synthesise'],
  [/\bsynthesize\b/g, 'synthesise'],
  [/\bSynthesized\b/g, 'Synthesised'],
  [/\bsynthesized\b/g, 'synthesised'],
  [/\bSynthesizing\b/g, 'Synthesising'],
  [/\bsynthesizing\b/g, 'synthesising'],
  [/\bSpecialized\b/g, 'Specialised'],
  [/\bspecialized\b/g, 'specialised'],
  [/\bSpecializing\b/g, 'Specialising'],
  [/\bspecializing\b/g, 'specialising'],
  [/\bSpecialize\b/g, 'Specialise'],
  [/\bspecialize\b/g, 'specialise'],
  [/\bSpecializes\b/g, 'Specialises'],
  [/\bspecializes\b/g, 'specialises'],
  [/\bAnalyze\b/g, 'Analyse'],
  [/\banalyze\b/g, 'analyse'],
  [/\bAnalyzed\b/g, 'Analysed'],
  [/\banalyzed\b/g, 'analysed'],
  [/\bAnalyzing\b/g, 'Analysing'],
  [/\banalyzing\b/g, 'analysing'],
  [/\bPrioritize\b/g, 'Prioritise'],
  [/\bprioritize\b/g, 'prioritise'],
  [/\bPrioritized\b/g, 'Prioritised'],
  [/\bprioritized\b/g, 'prioritised'],
  [/\bPrioritizing\b/g, 'Prioritising'],
  [/\bprioritizing\b/g, 'prioritising'],
  [/\bOrganize\b/g, 'Organise'],
  [/\borganize\b/g, 'organise'],
  [/\bOrganized\b/g, 'Organised'],
  [/\borganized\b/g, 'organised'],
  [/\bOrganizing\b/g, 'Organising'],
  [/\borganizing\b/g, 'organising'],
  [/(?<!@type":\s*"|Schema.org\s*)\bOrganization\b/g, 'Organisation'],
  [/\borganization\b/g, 'organisation'],
  [/\bOrganizations\b/g, 'Organisations'],
  [/\borganizations\b/g, 'organisations'],
  [/\bCategorize\b/g, 'Categorise'],
  [/\bcategorize\b/g, 'categorise'],
  [/\bCategorized\b/g, 'Categorised'],
  [/\bcategorized\b/g, 'categorised'],
  [/\bCustomization\b/g, 'Customisation'],
  [/\bcustomization\b/g, 'customisation'],
  [/\bCustomize\b/g, 'Customise'],
  [/\bcustomize\b/g, 'customise'],
  [/\bCustomized\b/g, 'Customised'],
  [/\bcustomized\b/g, 'customised'],
  [/\bBehavior\b/g, 'Behaviour'],
  [/\bbehavior\b(?!\s*:)/g, 'behaviour'],
  [/\bBehaviors\b/g, 'Behaviours'],
  [/\bbehaviors\b/g, 'behaviours']
];

function processFile(filePath) {
  if (filePath.includes('node_modules') || filePath.includes('.next') || filePath.includes('.git') || filePath.includes('auEnglish.ts')) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Restore DOM API property behavior:
  content = content.replace(/behaviour\s*:/g, 'behavior:');

  for (const [regex, replacement] of replacements) {
    content = content.replace(regex, replacement);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated AU English in: ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverse(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.csv') || file.endsWith('.md')) {
      processFile(fullPath);
    }
  }
}

traverse(path.join(process.cwd(), 'src'));
processFile(path.join(process.cwd(), 'AEObility -IA & SLM.csv'));
if (fs.existsSync(path.join(process.cwd(), 'public', 'AGENTS.md'))) {
  processFile(path.join(process.cwd(), 'public', 'AGENTS.md'));
}
console.log('✔ AU English standardization sweep completed.');
