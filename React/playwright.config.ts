import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        baseURL: 'http://localhost:5174',
    },
    webServer: {
        command: 'pnpm start',
        url: 'http://localhost:5174',
        reuseExistingServer: !process.env.CI,
    },
});
