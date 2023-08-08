import { test, expect } from '@playwright/test';

/**
 * pouzite skratky:
 * PAP = polozka zo sekcie 'Avalaible Positions'
 */

test.describe('filtrovanie poloziek ', () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://www.vissim.no/career#1');
  });

  test('pouzitie filtra - location', async ({ page }) => {

    // vyber hodnotu filtra - location
    const hrefFilterValue = '/available-positions-1?location=Kosice'; // nahrad vybranou hodnotou filtra
    const filterValue = await page.waitForSelector('a[href="${hrefFilterValue}"]', {state: 'visible'});
    await filterValue.click();

    // skontroluj, ci titulok vyfiltrovanej PAP obsahuje nazov vybranej hodnoty filtra
    const papDataTitle = 'QA Automation Engineer for new hub (wind energy) - Kosice (Slovakia)' // nahrad titulkom vybranej vyfiltrovanej PAP
    const papFiltered = await page.waitForSelector('a:has-text("${papDataTitle}")', {state: 'visible'});
    await expect(papFiltered).toContain('Kosice');

  


  });
});