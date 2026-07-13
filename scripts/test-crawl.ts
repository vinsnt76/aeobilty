import { crawlUrl } from '../src/lib/telemetry/crawl';

const TEST_URLS = [
  {
    type: 'Article (Expected: Readability > Cheerio)',
    url: 'https://techcrunch.com/2024/02/15/openai-sora-generative-video/', // Standard article URL
  },
  {
    type: 'SaaS Landing Page (Expected: Cheerio > Readability)',
    url: 'https://aeobility.com.au', // Typical landing page
  },
  {
    type: 'JS-Heavy SPA (Expected: Hydration Required)',
    url: 'https://react.dev', // Good example of React SPA that might trip up simple crawlers, though they have SSR. We'll observe the results.
  }
];

async function runCrawlTests() {
  console.log('--- Starting Crawl Quality Tests ---');

  for (const testCase of TEST_URLS) {
    console.log(`\nTesting: ${testCase.type}`);
    console.log(`URL: ${testCase.url}`);
    
    try {
      const startTime = Date.now();
      const result = await crawlUrl(testCase.url);
      const duration = Date.now() - startTime;

      console.log(`⏱️ Duration: ${duration}ms`);
      console.log(`📊 Crawl Quality Score: ${result.crawlQuality.score}`);
      console.log(`🛠️ Extraction Method Used: ${result.crawlQuality.method}`);
      console.log(`💧 Hydration Required: ${result.crawlQuality.hydrationRequired}`);
      console.log(`📝 Extracted Text Length: ${result.textContent.length} chars`);
      
    } catch (error) {
      console.error(`❌ Error crawling ${testCase.url}:`, error);
    }
  }

  console.log('\n--- Crawl Quality Tests Complete ---');
}

runCrawlTests();
