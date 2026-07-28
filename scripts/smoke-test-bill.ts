import { execSync } from 'child_process';

console.log("⚡ Executing Bill 6-Step Smoke Test Suite via Vitest...\n");

try {
  const output = execSync('npx vitest run src/app/api/bill/__tests__/smoke.test.ts', {
    encoding: 'utf-8',
    stdio: 'inherit'
  });
  console.log("\n🎉 All 6 Smoke Test Scenarios Passed Successfully!");
} catch (error) {
  console.error("\n❌ Smoke test suite failed.");
  process.exit(1);
}
