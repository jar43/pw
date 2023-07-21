import { test, expect } from '@playwright/test';

/**
 * pouzite skratky:
 * PAP = polozka zo sekcie 'Avalaible Positions'
 */

test.describe('Open Application', () => {

  test('Open Application - PAP a filter', async ({ page }) => {
    await page.goto('https://www.vissim.no/career#1');
  
    // skontroluj, ci jedna z PAP je 'Open Application'
    await expect(page.locator('#block-6f83cad10c9b33fc06b4')).toHaveId('#yui_3_17_2_1_1689664139257_1663');
    await page.goBack();

    // skontroluj, ci filter 'TYPE OF LISTING' obsahuje moznost vyberu 'open application'
    await page.locator('#yui_3_17_2_1_1689885828204_1628').click();
    const type_of_listing_items = page.locator('#yui_3_17_2_1_1689885793641_1586');
    await expect(type_of_listing_items).toContainText('open application')
    await page.getByRole('link', { name: 'open application', exact: true }).click();
    await page.goBack();

    // skontroluj, ci po pouziti filtra 'TYPE OF LISTING' a vybere 'open application' sa zobrazi iba PAP 'Open Application'
    await page.locator('#yui_3_17_2_1_1689714840287_1620').click();
    await page.getByRole('link', { name: 'open application', exact: true }).click();
    /** 
    await page.locator('#yui_3_17_2_1_1689885828204_88').click();
    await page.locator('#yui_3_17_2_1_1689885828204_1654').click();
    */
    /** 
    const list = page.locator('list > .component');
    await expect(list).toHaveCount(3); 
    const locator = page.locator('.title');
    await expect(locator).toHaveText(/Welcome, Test User/);   
    */

  });

  test('Open Application - detail', async ({ page }) => {

    await page.goto('https://www.vissim.no/available-positions-1/open-application');

    // skontroluj, ci klikom na tlacidlo 'Apply now' ta presmeruje na formular s url 'https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275?live=1&share_id=7321C4CB'
    await page.getByRole('link', { name: 'Apply now' }).click();
    await expect(URL).toBe('https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275?live=1&share_id=7321C4CB');
    await page.goBack();

    // skontroluj, ci stranka obsahuje text 'send us an open application'
    await expect(page.locator('#block-fe84aba87e66386f6255')).toContainText('send us an open application');

  });

  /**
   * pokracovanie v subore 3.1.spec.ts => Open Application - formular
   */
});