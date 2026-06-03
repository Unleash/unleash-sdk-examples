const { test, expect } = require('@playwright/test');

test('renders flag status', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/example-flag is (enabled|disabled)/)).toBeVisible();
});
