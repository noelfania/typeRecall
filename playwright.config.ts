import { defineConfig, devices } from "@playwright/test";

const pagesBase = "/typeRecall/";
const origin = "http://127.0.0.1:4000";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  use: {
    baseURL: `${origin}${pagesBase}`,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run build && npm run preview",
    url: `${origin}${pagesBase}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
