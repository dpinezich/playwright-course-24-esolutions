import { test, expect } from '@playwright/test';

test.describe('Feature Group', () => { 

    test('Test 1', async ({ page }) => {
        await page.goto('');
        console.log("Test 1");
    });

    test('Test 2', async ({ page }) => {
        await page.goto('');
        console.log("Test 2");
    });

});
