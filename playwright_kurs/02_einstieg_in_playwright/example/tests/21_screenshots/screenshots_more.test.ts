import test, { expect } from "@playwright/test";

test('Screenshots', async ({ page }) => {
    page.goto('/');

    await page.getByRole('button', { name: 'Registrieren'}).click();

    await page.screenshot({
        path: 'screenshots/screenshot-better.jpg',
        fullPage: true
        //mask: await page.getByTestId('location').all() // Timeout entfernen
    });

    await expect(page.locator('.invalid-feedback')).toHaveCount(5);

});