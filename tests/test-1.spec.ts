import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ethereum.network/');
  await page.goto('https://www.ethereum.network/faq/');
  await page.getByRole('link', { name: 'BLOG' }).click();
  await page.getByRole('link', { name: 'BLOG' }).click();
  await page.getByRole('link', { name: 'EN Guides: #1 – Get started', exact: true }).click();
});