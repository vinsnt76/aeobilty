import fs from 'fs';
import path from 'path';
import parse from 'csv-simple-parser';

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
    .replace(/\bOrganization\b/g, 'Organisation')
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

export function generateNavData() {
  console.log('⚡ Compiling AEObility NavData.ts from IA & SLM architecture...');

  const csvPath = path.join(process.cwd(), 'AEObility -IA & SLM.csv');
  const targetPath = path.join(process.cwd(), 'src', 'components', 'navigation', 'NavData.ts');

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ Cannot find IA dataset at: ${csvPath}`);
    return;
  }

  const csvRaw = fs.readFileSync(csvPath, 'utf8');
  const rows = parse(csvRaw, { header: true });

  // Custom Hub Ordering
  const hubOrder = ['/services', '/solutions', '/knowledge-hub', '/about'];

  const hubs = {
    '/services': {
      title: 'Services',
      href: '/services',
      children: []
    },
    '/solutions': {
      title: 'Packages',
      href: '/solutions',
      children: []
    },
    '/knowledge-hub': {
      title: 'Knowledge Hub',
      href: '/knowledge-hub',
      children: []
    },
    '/about': {
      title: 'About',
      href: '/about',
      children: []
    }
  };

  const footerLinks = [];

  rows.forEach((row) => {
    const pageName = toAustralianEnglish((row.PageName || '').trim());
    const url = (row.URL || '').trim();
    const metaDesc = toAustralianEnglish((row.MetaDescription || '').trim());

    if (!url || url === '/') return;

    const item = {
      title: pageName,
      href: url,
      description: metaDesc,
      entityName: pageName
    };

    // Determine Hub Membership
    if (url.startsWith('/services')) {
      // Avoid duplicate self link if Overview is already present
      if (!hubs['/services'].children.some(c => c.href === url)) {
        hubs['/services'].children.push(item);
      }
    } else if (url.startsWith('/solutions')) {
      if (!hubs['/solutions'].children.some(c => c.href === url)) {
        hubs['/solutions'].children.push(item);
      }
    } else if (url.startsWith('/knowledge-hub')) {
      if (!hubs['/knowledge-hub'].children.some(c => c.href === url)) {
        hubs['/knowledge-hub'].children.push(item);
      }
    } else if (url.startsWith('/about') || url === '/contact' || url === '/vince-baker' || url === '/support') {
      if (!hubs['/about'].children.some(c => c.href === url)) {
        hubs['/about'].children.push(item);
      }
    }

    if (row.HierarchySub && row.HierarchySub.includes('Footer')) {
      footerLinks.push(item);
    }
  });

  // Ensure Privacy & Terms exist in footer
  if (!footerLinks.some(f => f.href === '/privacy')) {
    footerLinks.push({
      title: 'Privacy Policy',
      href: '/privacy',
      description: 'AEObility privacy, personal data protection policies.',
      entityName: 'AEObility Privacy Policy'
    });
  }
  if (!footerLinks.some(f => f.href === '/terms')) {
    footerLinks.push({
      title: 'Terms of Service',
      href: '/terms',
      description: 'AEObility service terms and client agreements.',
      entityName: 'AEObility Terms of Service'
    });
  }

  const navDataArray = hubOrder.map(key => hubs[key]);

  const fileContent = `// Auto-generated from AEObility -IA & SLM.csv - DO NOT EDIT DIRECTLY
export interface NavItemL2 {
  title: string;
  href: string;
  description?: string;
  entityName: string;
}

export interface NavItemL1 {
  title: string;
  href?: string;
  children?: NavItemL2[];
}

export const NAVIGATION_DATA: NavItemL1[] = ${JSON.stringify(navDataArray, null, 2)};

export const FOOTER_NAVIGATION: NavItemL2[] = ${JSON.stringify(footerLinks, null, 2)};
`;

  fs.writeFileSync(targetPath, fileContent, 'utf8');
  console.log(`✅ Successfully generated NavData.ts at: ${targetPath}`);
}

// Execute if run directly via CLI
if (process.argv[1] && process.argv[1].includes('generate-navdata.mjs')) {
  generateNavData();
}
