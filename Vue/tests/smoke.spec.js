import { expect, test } from '@playwright/test';

test('renders flag status', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(/Feature is (enabled|disabled)/)).toBeVisible();
});
