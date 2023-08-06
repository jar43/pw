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

  test('location', async ({ page }) => {

    // skontroluj, ze existuje vo filtri PAP polozka >location>Kosice
    const location_items = page.locator('#yui_3_17_2_1_1689842969548_785');
    await expect.soft(location_items).toHaveText('Kosice');

    // vyber filter >location>Kosice
    const role = page.locator('#yui_3_17_2_1_1689503491914_1497');
    const Kosice = page.locator('#yui_3_17_2_1_1689540127954_1558');
    await role.click();
    await Kosice.click();

    // skontroluj, ci pole filtra 'LOCATION' ma text 'LOCATION:Kosice'
    const location = page.locator('#yui_3_17_2_1_1689540141171_1528');
    await expect.soft(location).toHaveText('LOCATION:Kosice');

    // skontroluj, ci vsetky vyfiltrovane PAP maju v nazve slovo 'Kosice'
    const pap = page.locator('#yui_3_17_2_1_1689540141171_88');
    await expect.soft(pap).toContainText('Kosice');
  });

  test('type of listing', async ({ page }) => {

    // skontroluj, ci default hodnota filtra 'type of listing' je 'All'
    const type_of_listing = page.locator('#yui_3_17_2_1_1689842969548_1712');
    await expect.soft(type_of_listing).toHaveValues([':All']);

    // z filtra 'type of listing' vyber moznost 'kosice'
    await page.locator('#yui_3_17_2_1_1689503491914_1501').click();
    await page.getByRole('link', { name: 'kosice' }).click();

    // skontroluj, ci vysledkom vyhladavania je zobrazenie PAP
    const pap = page.locator('#yui_3_17_2_1_1689540141171_88');
    await expect(pap).toHaveClass('slide-custom-link row');

  });

  test('location + type of listing', async ({ page }) => {

    // vyber filter >location>Kosice
    const role = page.locator('#yui_3_17_2_1_1689503491914_1497');
    const Kosice = page.locator('#yui_3_17_2_1_1689540127954_1558');
    await role.click();
    await Kosice.click();

    // z filtra 'type of listing' vyber moznost 'kosice'
    await page.locator('#yui_3_17_2_1_1689503491914_1501').click();
    await page.getByRole('link', { name: 'kosice' }).click();

    // skontroluj, ci vysledok vyhladavania je rovnaky ako v testoch 'location' a 'type of listing'

  });

  test('search', async ({ page }) => {

    // skontroluj, ci pole search je prazdne
    const search = page.getByPlaceholder('Search', { exact: true });
    await expect.soft(search).toBeEmpty();

    // otestuj vyhladavanie pre slovo 'testing'
    await page.getByPlaceholder('Search', { exact: true }).click();
    await page.getByPlaceholder('Search', { exact: true }).fill('testing');
    await page.getByPlaceholder('Search', { exact: true }).press('Enter');

    // skontroluj, ci po uspesnom vyhladavani sa zobrazia PAP

    // skontroluj, ci po neuspesnom vyhladavani sa zobrazi text s oznamom
    const search_message = page.locator('#yui_3_17_2_1_1689503491914_88');
    await expect.soft(search_message).toHaveText('.*');

  });

});