import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // enter the site
  await page.goto('https://www.ethereum.network/');

  // click "Learn here"
  await page.goto('https://www.ethereum.network/faq/');
  
  await page.getByRole('link', { name: 'BLOG' }).click();
  await page.getByRole('link', { name: 'BLOG' }).click();
  await page.getByRole('link', { name: 'EN Guides: #1 – Get started', exact: true }).click();
});