const fs = require('fs');
const path = require('path');

const replacements = [
  // Paths object (H3s)
  { search: 'title: "AEO Technical Micro-Sprint"', replace: 'title: "AEO technical micro-sprint"' },
  { search: 'title: "Foundation Implementation"', replace: 'title: "Foundation implementation"' },
  { search: 'title: "The AEObility Blueprint"', replace: 'title: "The AEObility blueprint"' },
  // H2s & H3s & H4s
  { search: 'Choose Your Starting Point', replace: 'Choose your starting point' },
  { search: 'Action Entity Resolution Framework', replace: 'Action entity resolution framework' },
  { search: 'How AI Search Optimisation Works', replace: 'How AI search optimisation works' },
  { search: 'Readiness Audit', replace: 'Readiness audit' },
  { search: '4-5 Day Execution', replace: '4-5 day execution' },
  { search: 'Validation &amp; Handover', replace: 'Validation &amp; handover' },
  { search: 'Discuss Your AI Search Strategy', replace: 'Discuss your AI search strategy' },
  { search: 'Discuss AI Search Optimisation', replace: 'Discuss AI search optimisation' },
  { search: 'Enquiry Received', replace: 'Enquiry received' },
];

const cities = ['perth', 'melbourne', 'sydney', 'adelaide', 'brisbane'];

for (const city of cities) {
  const filePath = path.join(__dirname, 'src', 'app', 'services', 'ai-search-marketing', city, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // H1 replace (dynamic per city)
  // City names are Perth, Melbourne, Sydney, Adelaide, Brisbane
  const cityCap = city.charAt(0).toUpperCase() + city.slice(1);
  const h1Regex = new RegExp(`AI Search Marketing for <span className="text-gradient-aeo">${cityCap} Businesses</span>`, 'g');
  const h1Replace = `AI search marketing for <span className="text-gradient-aeo">${cityCap} businesses</span>`;
  
  if (h1Regex.test(content)) {
    content = content.replace(h1Regex, h1Replace);
  } else {
    console.log('H1 not found for ' + city);
  }

  // Loop through static replacements
  for (const { search, replace } of replacements) {
    // Need to use global regex to replace all instances (especially for the ones inside HTML tags)
    // Actually, split and join is safer for exact string replacement without regex escaping issues
    content = content.split(search).join(replace);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + city);
}
