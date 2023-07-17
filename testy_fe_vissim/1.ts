import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.vissim.no/career#1');
});

/**
 * pouzite skratky:
 * PAP = polozka zo sekcie 'Avalaible Positions'
 */

test.describe('filtrovanie poloziek ', () => {

  test('location - Kosice', async ({ page }) => {
    // vytvorenie noveho lokatora
    const role = page.locator('#yui_3_17_2_1_1689503491914_1497');
    const Kosice = page.locator('#yui_3_17_2_1_1689540127954_1558');
    // vyber filter >location>Kosice
    await role.click();
    await Kosice.click();

    // skontroluj, ci pole filtra 'LOCATION' ma text 'LOCATION:Kosice'
    await expect(page.locator('#yui_3_17_2_1_1689540141171_1528')).toHaveText('LOCATION:Kosice');
    // skontroluj, ci vsetky vyfiltrovane PAP obsahuju text 'Kosice'
    await expect(page.locator('#yui_3_17_2_1_1689540141171_88')).toContainText('Kosice');
  });

  test('type of listing', async ({ page }) => {
    await page.locator('#yui_3_17_2_1_1689503491914_1501').click();
    await page.getByRole('link', { name: 'vacancy' }).click();
  });

  test('search', async ({ page }) => {
    await page.getByPlaceholder('Search', { exact: true }).click();
    await page.getByPlaceholder('Search', { exact: true }).fill('testing');
    await page.getByPlaceholder('Search', { exact: true }).press('Enter');
    await page.locator('#yui_3_17_2_1_1689503491914_88').click();

    // skontroluj, ci pole search je prazdne
  });
});