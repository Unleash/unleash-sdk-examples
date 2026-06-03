const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use: {
        baseURL: 'http://localhost:1234',
    },
    webServer: {
        command: 'npm start',
        url: 'http://localhost:1234',
        reuseExistingServer: !process.env.CI,
    },
});
