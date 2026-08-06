import http from 'https';

const TARGET_HOST = process.env.TARGET_HOST || 'aeobility.com.au';
const TARGET_PATH = '/api/search/answer';
const SIMULATED_ORIGIN = 'https://autonomous-agent-runtime.ai';

const defaultHeaders = {
  'Origin': SIMULATED_ORIGIN,
  'User-Agent': 'Mozilla/5.0 (compatible; GPTBot/1.2; +http://openai.com)',
  'Content-Type': 'application/json'
};

// 1. Run Preflight Phase
function runPreflightCheck() {
  return new Promise((resolve, reject) => {
    console.log(`\x1b[36m[1/2] Initiating Preflight Handshake (OPTIONS) -> https://${TARGET_HOST}${TARGET_PATH}...\x1b[0m`);
    
    const req = http.request({
      hostname: TARGET_HOST,
      path: TARGET_PATH,
      method: 'OPTIONS',
      headers: {
        ...defaultHeaders,
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'content-type,authorization'
      }
    }, (res) => {
      console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
      const corsHeader = res.headers['access-control-allow-origin'];
      const corsMethods = res.headers['access-control-allow-methods'];
      
      if (res.statusCode === 200 && corsHeader === '*') {
        console.log('\x1b[32m✔ Preflight Succeeded: CORS Headers explicitly allowed by Edge runtime.\x1b[0m\n');
        resolve(true);
      } else {
        console.log(`\x1b[31m✘ Preflight Failed: Origin: ${corsHeader || 'NONE'}, Methods: ${corsMethods || 'NONE'}\x1b[0m\n`);
        resolve(false);
      }
    });

    req.on('error', reject);
    req.end();
  });
}

// 2. Run Data Transaction Phase
function runQueryTransaction() {
  return new Promise((resolve, reject) => {
    console.log(`\x1b[36m[2/2] Initiating AI Payload Transaction (POST) -> https://${TARGET_HOST}${TARGET_PATH}...\x1b[0m`);
    
    const payload = JSON.stringify({
      query: "What AEO services does AEObility offer for Perth businesses?"
    });

    const req = http.request({
      hostname: TARGET_HOST,
      path: TARGET_PATH,
      method: 'POST',
      headers: {
        ...defaultHeaders,
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
        const corsHeader = res.headers['access-control-allow-origin'];
        
        if (res.statusCode === 200 && corsHeader === '*') {
          console.log('\x1b[32m✔ Transaction Succeeded: Payload successfully extracted.\x1b[0m');
          try {
            const parsed = JSON.parse(data);
            console.log('--- Agent Response Fragment ---');
            console.log(JSON.stringify(parsed, null, 2).slice(0, 300) + '...\n');
          } catch {
            console.log('Raw text returned instead of JSON syntax.');
          }
          resolve(true);
        } else {
          console.log(`\x1b[31m✘ Transaction Blocked: HTTP Status ${res.statusCode}, CORS Origin: ${corsHeader || 'NONE'}\x1b[0m\n`);
          resolve(false);
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// Orchestrate Suite
(async () => {
  try {
    if (process.env.GITHUB_ACTIONS) {
      console.log("Detected GitHub Actions environment. Sleeping for 45 seconds to allow deployment build to clear...");
      await new Promise(resolve => setTimeout(resolve, 45000));
    }

    const preflightPassed = await runPreflightCheck();
    if (preflightPassed) {
      const transactionPassed = await runQueryTransaction();
      if (!transactionPassed) {
        process.exit(1);
      }
    } else {
      process.exit(1);
    }
  } catch (err) {
    console.error('\x1b[31mRuntime Error during agent simulation execution:\x1b[0m', err);
    process.exit(1);
  }
})();
