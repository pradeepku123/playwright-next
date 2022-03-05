import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1980, height: 1020 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
  },
  testDir: "./tests",
};
export default config;
