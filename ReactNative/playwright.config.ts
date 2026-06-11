import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:8081",
  },
  webServer: {
    command: "pnpm start",
    url: "http://localhost:8081",
    reuseExistingServer: !process.env.CI,
  },
});
