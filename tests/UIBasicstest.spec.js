const {test, expect} = require('@playwright/test');

// test('First Playwright test', async ({page}) => {
//     await page.goto('https://dev01.sueldosnet.com/');
// });

test('Second Playwright test', async ({page}) => {
    await page.goto('https://dev01.sueldosnet.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('SueldosNet - Inicio de Sesión');


    await page.getByLabel('Nombre de Usuario').fill("Testing");
    await page.locator('[type=password]').fill('Testing!123');
    await page.locator('[id=btGuardar]').click("left");
});

 test('rahul shitty test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const userName = page.locator('#username');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    await signInBtn.click();
    // console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill('rahulshettyacademy');
    await signInBtn.click();

    const allTitles = await cardTitles.allTextContents();
    
    console.log(allTitles);
    
    await expect(allTitles).toContainText('iphone X');
    
 });

 test.only('UI Controls', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    
    //dropdown
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');  

    //selector
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();

    //checkbox
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    //blinking text, toHaveAttribute() method
    const documentLink = page.locator('[href*="documents-request"]');
    await expect(documentLink).toHaveAttribute('class', 'blinkingTexts');

    await page.pause();  
 })