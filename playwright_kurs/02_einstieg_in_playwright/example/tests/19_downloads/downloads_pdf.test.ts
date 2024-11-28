import { expect, test } from '@playwright/test';

test('Downloads pdf', async({ page }) => {

  await page.goto('/savings.html');

  const download = page.waitForEvent('download');
  await page.getByText('Jetzt Angebot herunterladen').click();
  const dl = await download;

  const suggestedFilename = dl.suggestedFilename();
  const filePath = 'downloads/' + suggestedFilename;
  await dl.saveAs(filePath);

});