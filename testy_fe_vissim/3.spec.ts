import { test, expect } from '@playwright/test';

/**
 * pouzite skratky:
 * PAP = polozka zo sekcie 'Avalaible Positions'
 */

test.describe('Open Application', () => {

  test('Open Application - PAP a filter', async ({ page }) => {
    await page.goto('https://www.vissim.no/career#1');
  
    // skontroluj, ci jedna z PAP ma nazov 'Open Application'
    await expect(page.locator('#block-6f83cad10c9b33fc06b4')).toHaveId('#yui_3_17_2_1_1689664139257_1663');

    // skontroluj, ci filter 'TYPE OF LISTING' obsahuje moznost vyberu 'open application'
    // Get the list of items on the page.
    const items = await page.locator('#items').querySelectorAll('li');
    // Filter the items by text.
    const filteredItems = await items.filter((item) => item.textContent.includes('The'));
    // Assert that the filtered items contain the expected text.
    for (const item of filteredItems) {
    expect(item.textContent).toContain('');

    // skontroluj, ci po pouziti filtra 'TYPE OF LISTING' a vybere 'open application' sa zobrazi iba PAP 'Open Application'
    await page.locator('#yui_3_17_2_1_1689714840287_1620').click();
    await page.getByRole('link', { name: 'open application', exact: true }).click();
    const list = page.locator('list > .component');
    await expect(list).toHaveCount(3); 
    const locator = page.locator('.title');
    await expect(locator).toHaveText(/Welcome, Test User/);
    await expect(locator).toHaveText(/Welcome, .*/);
  });

  test('Open Application - detail', async ({ page }) => {

    await page.goto('https://www.vissim.no/available-positions-1/open-application');

    // skontroluj, ci klikom na obe tlacidla 'Apply now' ta presmeruje na formular
    // skontroluj, ci formular ma url 'https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275'

    // skontroluj, ci stranka obsahuje text 'send us an open application'
  });

    test('Open Application - formular', async ({ page }) => {

    await page.goto('https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275');

    // skontroluj, ci formular funguje..
    // - polia su prazdne, editovatelne, klikatelne
    // - povinne polia pri chybnom vyplneni zobrazia chybu, text
    // - ma funkcnu moznost 'Upload your CV'


  });
});