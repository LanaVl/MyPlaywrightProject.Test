import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config({ debug: false });

import { json } from 'stream/consumers';
// import path from 'path';

export default defineConfig({
 // timeout: 10000,
  testDir: './tests',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['json', {outputFile: '/test-results/jsonResult.json'}],
   // ["allure-playwright",]
  ],

  /* Shared settings for all the projects. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  // Base URL to use in actions like `await page.goto('/')`.
   // baseURL: 'http://localhost:3000',
  //  baseURL: 'https://demo.nopcommerce.com/',
  //   baseURL: 'https://webapp-xgczr7dk5pfqs.azurewebsites.net/',

    baseURL: process.env.BASE_URL,
    headless: true,

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',
    actionTimeout: 5000,
    navigationTimeout: 10000,
    
  /*  contextOptions: {
      ignoreHTTPSErrors: true,
      permissions: [],
    },*/
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  /*  {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
*/
    {
    name: 'msedge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },  
    },
    
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
