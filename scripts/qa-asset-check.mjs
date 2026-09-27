import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');

console.log('🚀 Running Complete Site Asset & Route QA Verification...\n');

// 1. Scan all tsx, ts, and mjs files in src and scripts
function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (['node_modules', '.next', '.git', '.vscode', 'test-results', 'fixtures'].includes(file)) continue;
      results = results.concat(getFiles(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.ts', '.tsx', '.mjs', '.js', '.json'].includes(ext)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

const allCodeFiles = getFiles(path.join(projectRoot, 'src'))
  .concat(getFiles(path.join(projectRoot, 'scripts')));

// Regex to capture asset paths: /images/..., /icons/..., /files/...
const assetRegex = /["'`](?:https:\/\/aeobility\.com\.au)?(\/(?:images|icons|files)\/[a-zA-Z0-9_\-\/%.]+\.(?:webp|png|jpg|jpeg|svg|gif|ico|pdf|vcf))["'`]/g;

const checked = new Set();
const missing = [];
const verified = [];

for (const file of allCodeFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    let cleanPath = match[1];
    cleanPath = decodeURIComponent(cleanPath).replace(/^\//, '');

    if (checked.has(cleanPath)) continue;
    checked.add(cleanPath);

    const onDisk = path.join(publicDir, cleanPath);
    if (fs.existsSync(onDisk)) {
      verified.push(cleanPath);
    } else {
      missing.push({
        path: cleanPath,
        referencedIn: path.relative(projectRoot, file).replace(/\\/g, '/')
      });
    }
  }
}

console.log(`[1] Static Asset Disk Integrity:`);
console.log(`    Total unique structured asset references scanned: ${checked.size}`);
console.log(`    Successfully verified on disk: ${verified.length}`);
if (missing.length > 0) {
  console.error(`    ❌ FAILED: ${missing.length} missing files!`);
  console.error(missing);
  process.exit(1);
} else {
  console.log(`    ✅ PASSED: 100% of structured assets exist on disk!\n`);
}

// 2. Validate next.config.ts redirect integrity
console.log(`[2] Redirect Target Integrity in next.config.ts:`);
const nextConfig = fs.readFileSync(path.join(projectRoot, 'next.config.ts'), 'utf8');
const redirectRegex = /destination:\s*['"](\/(?:images|icons|files)\/[^'"]+)['"]/g;

let redirectMatch;
const checkedRedirects = new Set();
const missingRedirectTargets = [];

while ((redirectMatch = redirectRegex.exec(nextConfig)) !== null) {
  let target = redirectMatch[1].replace(/^\//, '');
  target = decodeURIComponent(target);
  
  if (checkedRedirects.has(target)) continue;
  checkedRedirects.add(target);

  const diskPath = path.join(publicDir, target);
  if (!fs.existsSync(diskPath)) {
    missingRedirectTargets.push(target);
  }
}

console.log(`    Total asset redirect destinations checked: ${checkedRedirects.size}`);
if (missingRedirectTargets.length > 0) {
  console.error(`    ❌ FAILED: ${missingRedirectTargets.length} redirect targets do not exist on disk!`);
  console.error(missingRedirectTargets);
  process.exit(1);
} else {
  console.log(`    ✅ PASSED: 100% of redirect destinations exist on disk!\n`);
}

// 3. Root Standards Compliance
console.log(`[3] Root Standards Protocol Files:`);
const requiredRootFiles = [
  'robots.txt',
  'site.webmanifest',
  'favicon.ico',
  'googlee59fa90c9a61212e.html',
  '99f72a3935774040b8814ad6a76e6e59.txt',
  'AGENTS.md',
  'llms.txt',
  'llms-full.txt',
  'brand-facts.json',
  'brand-tov.json',
  'vince-baker.vcf'
];

let rootPassed = true;
for (const rf of requiredRootFiles) {
  const p = path.join(publicDir, rf);
  if (fs.existsSync(p)) {
    console.log(`    ✅ Found ${rf} (${fs.statSync(p).size} bytes)`);
  } else {
    console.error(`    ❌ Missing required root file: ${rf}`);
    rootPassed = false;
  }
}

if (!rootPassed) {
  process.exit(1);
}

console.log('\n🎉 ALL QA AUDIT CHECKS PASSED WITH ZERO ERRORS!');
