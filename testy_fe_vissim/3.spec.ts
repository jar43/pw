import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.vissim.no/career#1');
});

/**
 * pouzite skratky:
 * PAP = polozka zo sekcie 'Avalaible Positions'
 */

test.describe('Open Application', () => {

  test('', async ({ page }) => {

    // skontroluj, ci jedna z PAP ma nazov 'Open Application'
    // skontroluj, ci filter 'TYPE OF LISTING' obsahuje moznost vyberu 'open application'
    // skontroluj, ci po pouziti filtra 'TYPE OF LISTING' a vybere 'open application' sa zobrazi iba PAP 'Open Application'


    await page.goto('https://www.vissim.no/available-positions-1/open-application');

    // skontroluj, ci klikom na obe tlacidla 'Apply now' ta presmeruje na formular
    // skontroluj, ci formular ma url 'https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275'

    // skontroluj, ci stranka obsahuje text 'send us an open application'


    await page.goto('https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275');

    // skontroluj, ci formular funguje..
    - polia su prazdne, editovatelne, klikatelne
    - povinne polia pri chybnom vyplneni zobrazia chybu, text
    - ma funkcnu moznost 'Upload your CV'


  });
});