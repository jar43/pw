import { test, expect } from '@playwright/test';

test.describe('Open Application - formular', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275?live=1&share_id=7321C4CB');
  });
  
  test('Textove polia - funkcnost editovania a vyplnania', async ({ page }) => {

    const name = page.getByLabel('Name', { exact: true });
    const surname = page.getByLabel('Surname');
    const email = page.getByPlaceholder('@');
    const phone = page.getByLabel('Phone number');
    const linkedin = page.getByPlaceholder('https://www.linkedin.com/…');
    const message = page.getByLabel('Message');

    // skontroluj, ze textove polia neobsahuju ziaden text
    await expect(name).toBeEmpty();
    await expect(surname).toBeEmpty();
    await expect(email).toBeEmpty();
    await expect(phone).toBeEmpty();
    await expect(linkedin).toBeEmpty();
    await expect(message).toBeEmpty();

    // textove polia su klikatelne
    await name.click();
    await surname.click();
    await email.click();
    await phone.click();
    await linkedin.click();
    await message.click();

    // textove polia su editovatelne
    await name.fill('Jozko');
    await surname.fill('Mrkvicka');
    await email.fill('jozko.mrkvicka@example.com');
    await phone.fill('1234567890');
    await linkedin.fill('https://www.linkedin.com/in/jozkomrkvicka');
    await message.fill('Volam sa Jozko Mrkvicka');

    // skontroluj, ze textove polia maju spravny text
    await expect(name).toHaveValue('Jozko');
    await expect(surname).toHaveValue('Mrkvicka');
    await expect(email).toHaveValue('jozko.mrkvicka@example.com');
    await expect(phone).toHaveValue('1234567890');
    await expect(linkedin).toHaveValue('https://www.linkedin.com/in/jozkomrkvicka');
    await expect(message).toHaveValue('Volam sa Jozko Mrkvicka');

    // skontroluj, ci sa textove polia daju vymazat
    await name.clear();
    await surname.clear();
    await email.clear();
    await phone.clear();
    await linkedin.clear();
    await message.clear();

    await expect(name).toHaveValue('');
    await expect(surname).toHaveValue('');
    await expect(email).toHaveValue('');
    await expect(phone).toHaveValue('');
    await expect(linkedin).toHaveValue('');
    await expect(message).toHaveValue('');

  });

  test('Email - format', async ({ page }) => {

    // vypln pole textom v nespravnom formate
    const email = page.getByPlaceholder('@');
    await email.fill('invalid-email-format');
    await page.locator('#snippet--content').click();

    // skontroluj, ci sa zobrazi upozornenie
    await expect(page.getByText('Please fill in the e-mail in the correct format')).toHaveText('Please fill in the e-mail in the correct format');

    // vypln pole testom v spravnom formate
    await email.fill('jozko.mrkvicka@example.com');
    await page.locator('#snippet--content').click();

    // skontroluj, ze sa nezobrazi upozornenie
    await expect(page.getByText('Please fill in the e-mail in the correct format')).not.toBeVisible();

  });

  test('Upload your CV', async ({ page }) => {

    // skontroluj, ci je funkcne nahravanie suborov 'Upload your CV'
    const cv = page.getByText('Select a file');
    await expect(cv).toBeEnabled();
    await expect(cv).toBeEditable();

    // nahraj subor
    await cv.setInputFiles('/path/to/your/resume.pdf');

    // skontroluj, ci je subor nahraty
    await expect(cv).toHaveValue('resume.pdf');

  });

  test('I agree to processing of personal data.', async ({ page }) => {

    // zaskrtni pole 'I agree to processing of personal data.'
    const agreement = page.locator('i');
    await expect(agreement).toBeEnabled();
    await agreement.click();

    // skontroluj, ci je pole zaskrtnute
    await expect(agreement).toBeChecked();

    // skontroluj, ci sa pole da odskrtnut
    await agreement.uncheck();
    await expect(agreement).not.toBeChecked();

  });

  test('Captcha', async ({ page }) => {

    // skontroluj, ze captcha je viditelne
    const captcha = page.getByRole('checkbox', { name: 'I\'m not a robot' });
    await expect(captcha).toBeVisible();

    // zaskrtni pole captcha
    await captcha.click();

    // skontroluj, ze captcha nie je viditelne po uspesnom prejdeni
    await expect(captcha).not.toBeVisible();

  });

  test('Odoslanie formulara - neuspesne', async ({ page }) => {

    // odosli formular bez vyplnenych poli
    const send = page.getByRole('button', { name: 'Send' });
    await send.click();

    // skontroluj, ci sa zobrazi upozornenie o nevyplnenych poliach
    await expect(page.getByRole('button', { name: 'Send' })).toHaveText('First name is required.');

  });

});



    






