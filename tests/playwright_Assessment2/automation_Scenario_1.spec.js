const { test, expect } = require('@playwright/test');

const userName = "//input[@id='userName']";
const userEmail = "//input[@id='userEmail']";
const CurrtAddress = "//textarea[@id='currentAddress']";
const permanentAddress = "//textarea[@id='permanentAddress']";
const name = 'Chris';
const invalidEmail = 'chris@gmail*com';
const validEmail = 'chris@gmail.com';
const currentAddress = '409 Fair St Carmel,NY';
const permAddress = '579 State 55 Rte Napanoch, NY';


test('DEMOQA automation scenario', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await expect(page).toHaveTitle('DEMOQA');

    await page.click("(//div[@class='card mt-4 top-card'])[1]");
    await page.click("//div[@class='element-list collapse show']//li[@id='item-0']");

    await page.fill(userName, name);
    await page.fill(userEmail, invalidEmail);
    await page.fill(CurrtAddress, currentAddress);
    await page.fill(permanentAddress, permAddress);
    await page.click("//button[@id='submit']");
    await page.waitForTimeout(1000);

    const borderColor = await page.evaluate(() => {
        const emailInput = document.querySelector("#userEmail");
        return getComputedStyle(emailInput).borderColor;
    });
    expect(borderColor).toBe('rgb(255, 0, 0)')

    await page.fill(userEmail, validEmail);
    await page.click("//button[@id='submit']");
    await page.waitForTimeout(1000);

    const displayedName = await page.textContent('//p[@id="name"]');
    expect(displayedName).toContain(name);

    const displayedEmail = await page.textContent('//p[@id="email"]');
    expect(displayedEmail).toContain(validEmail);

    const displayedCurrentAddress = await page.textContent('//p[@id="currentAddress"]');
    expect(displayedCurrentAddress).toContain(currentAddress);

    const displayedPermAddress = await page.textContent('//p[@id="permanentAddress"]');
    expect(displayedPermAddress).toContain(permAddress);

});
