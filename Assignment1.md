// Run tests for a single browser
npx playwright test --project=chromium

// Run in Playwright's UI mode
npx playwright test --ui

// Run in headed mode (headless is default)
npx playwright test --headed

// Run tests from a specific file
npx playwright test example.spec.ts

// Run tests with 2 workers
npx playwright test --workers=2
