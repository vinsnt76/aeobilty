import fs from 'fs/promises';
import path from 'path';

const FIXTURES_DIR = path.join(process.cwd(), 'fixtures');

const TEST_CASES = [
  {
    name: 'saas-homepage',
    url: 'https://aeobility.com.au',
    intent: 'best AI marketing platform',
  },
  {
    name: 'ecommerce-site',
    url: 'https://www.bunnings.com.au',
    intent: 'hardware and garden supplies',
  },
  {
    name: 'local-business',
    url: 'https://www.bentobuzz.com.au',
    intent: 'kids bento lunch boxes',
  },
  {
    name: 'blog-site',
    url: 'https://techcrunch.com',
    intent: 'latest technology startup news',
  },
  {
    name: 'enterprise-site',
    url: 'https://www.salesforce.com',
    intent: 'enterprise crm software',
  }
];

async function runTests() {
  console.log('--- Starting Telemetry V3 Test Harness ---');
  
  // Ensure fixtures directory exists
  await fs.mkdir(FIXTURES_DIR, { recursive: true });

  for (const testCase of TEST_CASES) {
    console.log(`\nTesting: ${testCase.name} (${testCase.url})`);
    
    try {
      const startTime = Date.now();
      const response = await fetch('http://localhost:3000/api/telemetry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: testCase.url,
          intent: testCase.intent,
        }),
      });

      const data = await response.json();
      const duration = Date.now() - startTime;

      if (!response.ok) {
        console.error(`❌ Failed: ${response.status} ${response.statusText}`);
        console.error(data);
        continue;
      }

      console.log(`✅ Success in ${duration}ms. Readiness Score: ${data.readinessScore}`);
      
      const outputPath = path.join(FIXTURES_DIR, `${testCase.name}.json`);
      await fs.writeFile(outputPath, JSON.stringify(data, null, 2));
      console.log(`💾 Saved to ${outputPath}`);
      
    } catch (error) {
      console.error(`❌ Error testing ${testCase.name}:`, error);
    }
  }
  
  console.log('\n--- Telemetry V3 Test Harness Complete ---');
}

runTests();
