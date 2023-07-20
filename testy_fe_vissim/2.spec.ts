import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.vissim.no/career#1');
});

/**
 * pouzite skratky:
 * PAP = polozka zo sekcie 'Avalaible Positions'
 */

test.describe('otvorenie PAP', () => {

  test('', async ({ page }) => {
    await page.locator('#yui_3_17_2_1_1689577210750_1502').click();
    await page.locator('#yui_3_17_2_1_1689577297058_953').click();

    // skontroluj, ci vsetky PAP po prejdeni kurzorom rozroluju detailne info
    

    // skontroluj, ci sa vsetky PAP otvoria klikom na tlacidlo 'Read More'

    // skontroluj, ci sa vsetky PAP otvoria klikom na text s detailnymi info / datumom


  });
});