import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const SRC_DIR = path.join(rootDir, 'src');

function getAllFiles(dir, exts = ['.tsx', '.ts']) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      files = files.concat(getAllFiles(filePath, exts));
    } else if (exts.includes(path.extname(file))) {
      files.push(filePath);
    }
  }
  return files;
}

const files = getAllFiles(SRC_DIR);
let errors = 0;
let schemaCount = 0;

console.log(`Auditing JSON-LD schemas across ${files.length} TypeScript source files...`);

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for JSON-LD schema objects or strings containing "@id": "..." or "@id": `...`
  const idMatches = [...content.matchAll(/["']@id["']\s*:\s*["'`]([^"'`]+)["'`]/g)];
  
  for (const match of idMatches) {
    schemaCount++;
    const idVal = match[1];
    
    // Ignore dynamic template expressions like `${...}`
    if (idVal.startsWith('$') || idVal.includes('${')) continue;
    
    // Check if ID is absolute (starts with https:// or http:// or urn: or mailto:)
    const isAbsolute = /^(https?:\/\/|urn:|mailto:)/.test(idVal);
    
    if (!isAbsolute) {
      console.error(`❌ Relative @id found in ${path.relative(rootDir, filePath)}: "${idVal}"`);
      errors++;
    }
  }

  // Look for mainEntity, provider, publisher @id references
  const mainEntityMatches = [...content.matchAll(/["'](mainEntity|provider|publisher|itemOffered)["']\s*:\s*\{\s*["']@id["']\s*:\s*["'`]([^"'`]+)["'`]/g)];
  for (const match of mainEntityMatches) {
    const propName = match[1];
    const idVal = match[2];
    if (idVal.startsWith('$') || idVal.includes('${')) continue;
    const isAbsolute = /^(https?:\/\/|urn:|mailto:)/.test(idVal);
    if (!isAbsolute) {
      console.error(`❌ Relative ${propName} @id found in ${path.relative(rootDir, filePath)}: "${idVal}"`);
      errors++;
    }
  }
}

console.log(`\nScan complete: Checked ${schemaCount} schema node references.`);
if (errors === 0) {
  console.log(`✅ All JSON-LD @id values and node references are 100% absolute URIs!`);
  process.exit(0);
} else {
  console.error(`❌ Found ${errors} relative @id references that need to be updated to absolute URIs.`);
  process.exit(1);
}
