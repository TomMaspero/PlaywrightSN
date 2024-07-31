# Playwright

## QA - Automation Course

https://www.udemy.com/course/playwright-tutorials-automation-testing

https://playwright.dev/docs

---

## Glossary:

> ### Fixtures:
>
> ### Assertions: 

## Notes:

> Tests present in the same file will run sequentially.
> Different test files however, will run in paralel.

## Commands:

> 1. To run all the tests in the project:
>    **--headed** flag will open the browsers visually
>    if the file contains a test marked as **test.only**, only that test will be executed.
>
> ```
> npx playwright test
> ```
>

## General functions and methods:

> ### page.pause()
>
> ```javascript
> await page.pause()
> ```
>
> Pauses the execution, can be used in headed mode to prevent the testing window from closing and opens the **Playwright Inspector** for debugging.

## Section 3: Getting started with Playwright Automation Core concepts

> ### newContext( options ):
>
> necessary to open a fresh browser context, without plugins or cookies. With this, we can then create a new page from that context.
>
> ```javascript
> test('First Playwright test', async ({browser}) =>{
>     chrome - plugins/ cookies
>     const context = await browser.newContext();    
>     const page = await context.newPage();
>     await page.goto('...');
> })
> ```
>
> If we don't need to pass any particular information to the context, we can simply call the **{page}** fixture and ommit those consts.
>
> ```javascript
> test('First Playwright test', async ({page}) => {
>     await page.goto('...');
> })
> ```

## Section 4: 

> ### Auto-Waiting:
>
> under the "Auto-Wait" section of the Playwright documentation, we can see which checks have to pass for playwright to perform a certain action. 
> However, it is important to note that some methods do not need to pass any checks, hence, playwright will not wait to perform the subsequent action.
> For example, 
>
> ```javascript
> console.log(await cardTitles.nth(2).textContent());
> ```
>
> This action will wait until the **nth(2)** **element is loaded in the DOM** before performing the console log.
> BUT, something like this:
>
> ```javascript
> console.log(await cardTitles.allTextContents());
> ```
>
> WILL NOT wait until the elements are loaded. Since the method "allTextContents()" returns an array, it doesn't know how long the array should be, i.e. how many elements it should wait for. So it will simply return an empty array.
> One way to circumvent this is to make it wait for the first() or some nth() element before accesing the array. **WRONG**
>
> ***QUESTION: How the heck does it work for the lastElement()?*** 
>
> ## Techniques to wait dynamically in service based applications:
>
> (For this, check the Network tab in the inspector, and select Fetch/XHR to view the API, or *Network* calls)
> So, Paywright has a method to wait until ALL the calls are made. 
>
> ```javascript
> await page.waitForLoadState('networkidle');
> ```
>
> This method waits until the network is in an 'idle' state
>
> ### HOWEVER
>
> This method is **DISCOURAGED** by playwright. In the documentation they encourage to rely on web asertations to assess readiness instead, since this method may not work reliably.
> A more reliable way is to wait for a specific element to load: ((**BUT we need to specify a SINGLE element**))
>
> ```javascript
> await page.locator(".card-body b").first().waitFor();
> ```

## Section 5 Handling UI Components

> ### Select Dropdowns
>
> To access dropdown menus, simply use select the menu itself and then use the ".selectOption(value)" method
>
> ```javascript
> const dropdown = page.locator('#select.form-control');
> await dropdown.selectOption('consult');
> ```
>
> ### Radio Buttons:
>
> When accessing radio buttons that are linked together, there may not be a unique css tag to each one of them. So we simply have to use the .first(), .last() or .nth(n) methods.
>
> ```javascript
> await page.locator('.radioBtns').last().click();
> ```
>
> Radio buttons can access the assertion method **.toBeChecked()**
>
> ```javascript
> await expect(page.locator('radioBtns').last()).toBeChecked();
> ```
>
> And they can also access the **.isChecked()** method, which is not an assertion, instead returning true or false.
>
> ```javascript
> console.log(await page.locator('radioBtns').last().isChecked());
> ```
>
> ### Checkboxes:
>
> Can also use the method **.toBeChecked()** and also has access to the **.uncheck()** method
>
> ```javascript
> await page.locator('#termsCheckbox').click();
> await expect(page.locator('#termsCheckbox')).toBeChecked();
> await page.locator('#termsCheckbox').uncheck();
> ```
>
> 

