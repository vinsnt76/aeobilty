import http from 'https';

const TARGET_HOST = process.env.TARGET_HOST || 'aeobility.com.au';
const TARGET_PATH = '/api/search/answer';
const SIMULATED_ORIGIN = 'https://autonomous-agent-runtime.ai';

const defaultHeaders = {
  'Origin': SIMULATED_ORIGIN,
  'User-Agent': 'Mozilla/5.0 (compatible; GPTBot/1.2; +http://openai.com)',
  'Content-Type': 'application/json'
};

function makeRequest(host, path, method, headers, payload = null, redirectDepth = 0) {
  return new Promise((resolve, reject) => {
    if (redirectDepth > 3) {
      return reject(new Error('Too many redirects'));
    }
    const reqHeaders = { ...headers };
    if (payload) {
      reqHeaders['Content-Length'] = Buffer.byteLength(payload);
    }

    const req = http.request({
      hostname: host,
      path: path,
      method: method,
      headers: reqHeaders
    }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        console.log(`\x1b[33mFollowed ${res.statusCode} Redirect -> ${res.headers.location}\x1b[0m`);
        const redirectUrl = new URL(res.headers.location);
        return resolve(makeRequest(redirectUrl.hostname, redirectUrl.pathname + redirectUrl.search, method, headers, payload, redirectDepth + 1));
      }

      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, statusMessage: res.statusMessage, headers: res.headers, body: data }));
    });

    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

// 1. Run Preflight Phase
async function runPreflightCheck() {
  console.log(`\x1b[36m[1/2] Initiating Preflight Handshake (OPTIONS) -> https://${TARGET_HOST}${TARGET_PATH}...\x1b[0m`);
  
  const headers = {
    ...defaultHeaders,
    'Access-Control-Request-Method': 'POST',
    'Access-Control-Request-Headers': 'content-type,authorization'
  };

  const res = await makeRequest(TARGET_HOST, TARGET_PATH, 'OPTIONS', headers);
  console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
  const corsHeader = res.headers['access-control-allow-origin'];
  const corsMethods = res.headers['access-control-allow-methods'];
  
  if (res.statusCode === 200 && corsHeader === '*') {
    console.log('\x1b[32m✔ Preflight Succeeded: CORS Headers explicitly allowed by Edge runtime.\x1b[0m\n');
    return true;
  } else {
    console.log(`\x1b[31m✘ Preflight Failed: Origin: ${corsHeader || 'NONE'}, Methods: ${corsMethods || 'NONE'}\x1b[0m\n`);
    return false;
  }
}

// 2. Run Data Transaction Phase
async function runQueryTransaction() {
  console.log(`\x1b[36m[2/2] Initiating AI Payload Transaction (POST) -> https://${TARGET_HOST}${TARGET_PATH}...\x1b[0m`);
  
  const payload = JSON.stringify({
    query: "What AEO services does AEObility offer for Perth businesses?"
  });

  const res = await makeRequest(TARGET_HOST, TARGET_PATH, 'POST', defaultHeaders, payload);
  console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
  const corsHeader = res.headers['access-control-allow-origin'];
  
  if (res.statusCode === 200 && corsHeader === '*') {
    console.log('\x1b[32m✔ Transaction Succeeded: Payload successfully extracted.\x1b[0m');
    try {
      const parsed = JSON.parse(res.body);
      console.log('--- Agent Response Fragment ---');
      console.log(JSON.stringify(parsed, null, 2).slice(0, 300) + '...\n');
    } catch {
      console.log('Raw text returned instead of JSON syntax.');
    }
    return true;
  } else {
    console.log(`\x1b[31m✘ Transaction Blocked: HTTP Status ${res.statusCode}, CORS Origin: ${corsHeader || 'NONE'}\x1b[0m\n`);
    return false;
  }
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

