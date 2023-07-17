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

    // skontroluj, ci filter 'TYPE OF LISTING' obsahuje moznost vyberu 'open application'
    // skontroluj, ci po pouziti filtra 'TYPE OF LISTING' a vybere 'open application' sa zobrazi iba PAP 'Open Application'


  });
});