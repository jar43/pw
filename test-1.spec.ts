import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=brave+search&oq=brave+search&aqs=chrome..69i57.3210j0j2&sourceid=chrome&ie=UTF-8');
  await page.getByRole('button', { name: 'Alles afwijzen' }).click();
  await page.getByRole('link', { name: 'Brave Search: Private Search Engine brave.com https://search.brave.com' }).click();
  await page.getByPlaceholder('Search the web privately…').click();
  await page.getByPlaceholder('Search the web privately…').fill('ai tools list');
  await page.getByPlaceholder('Search the web privately…').press('Enter');
  await page.getByPlaceholder('Search the web privately…').click();
  await page.getByPlaceholder('Search the web privately…').fill('ai tools list open source');
  await page.getByPlaceholder('Search the web privately…').press('Enter');
  await page.goto('https://search.brave.com/search?q=ai+tools+list&source=web');
});