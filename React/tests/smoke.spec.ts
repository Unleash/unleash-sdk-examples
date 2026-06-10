import { test, expect } from '@playwright/test';

test('renders flag status', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/Example flag is (enabled|disabled)/)).toBeVisible();
});
