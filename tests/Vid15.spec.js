const {test, expect} = require('@playwright/test');

test('Browser Context-Validating Error login', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator("#login").click();

    // A way to wait for the page to finish loading before accessing the elements
    await page.waitForLoadState('networkidle');

    // However it may be a bit unreliable, another way could be this:
    await page.locator(".card-body b").waitFor(); //will wait for the element to load

    const titles = await page.locator('.card-body b').allTextContents();

    console.log(titles);
});