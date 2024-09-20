const { test, expect } = require('@playwright/test');


test.describe('Demoblaze', () => {
    let signUp_link,signUp_userName, signUp_passWord, signUp_button, existing_username, existing_passWord, logIn_link, logIn_password, logIn_username, logIn_button;

    test.beforeEach('Open Website', async({page})=>{

        await page.goto("https://demoblaze.com/index.html");
        signUp_link = page.locator('#signin2');
        signUp_userName = page.locator('#sign-username');
        signUp_passWord = page.locator('#sign-password');
        signUp_button = page.getByRole('button', {name : 'Sign up'});
        existing_username = 'Chris';
        existing_passWord = 'chris@10';
        logIn_link = page.locator('a#login2');
        logIn_username = page.locator('#loginusername');
        logIn_password = page.locator('#loginpassword');
        logIn_button = page.locator('button[onclick="logIn()"]');

    });

    // test('User Signup - Positive Scenario', async ({ page }) => {

    //     signUp_link = page.locator('#signin2'),
    //     signUp_userName = page.locator('#sign-username'),
    //     signUp_passWord = page.locator('#sign-password'),
    //     signUp_button = page.getByRole('button', {name : 'Sign up'}),

    //     await page.goto("https://demoblaze.com/index.html"),
    //     await signUp_link.click();
    //     await signUp_userName.fill('Chris Ken');
    //     await signUp_passWord.fill('chris@10');
    //     await signUp_button.click();

    //     page.on('dialog', async dialog => {
    //         expect(dialog.message()).toBe('Sign up successful.');
    //         await dialog.accept();
    //     });
    // });

    // test('User Signup - Negative scenario - Clicking signUp button without entering user details', async ({page}) => {
        
    //     await signUp_link.click();
    //     await signUp_userName.fill('');
    //     await signUp_passWord.fill('');
    //     await signUp_button.click();
    //     page.on('dialog', async dialog => {
    //         expect(dialog.message()).toBe('Please fill out Username and Password.');
    //         await dialog.accept();
    //     });
    // });

    // test('User Signup - Negative scenario - Existing user details', async ({page}) => {

    //     await signUp_userName.fill(existing_username);
    //     await signUp_passWord.fill(existing_passWord);
    //     await signUp_button.click();
    //     await page.waitForTimeout(3000);
    //     page.on('dialog', async dialog => {
    //         expect(dialog.message()).toBe('This user already exist.');
    //         await dialog.accept();
    //     });      
    // });

    test('User Login - Positive scenario - Log in with valid username', async ({ page }) => {
        await logIn_link.click();
        await logIn_username.fill('Chris Ben'); 
        await logIn_password.fill('chris@10'); 
        await logIn_button.click();
        await page.waitForTimeout(2000); 
        // page.on('dialog', async dialog => {
        //     expect(dialog.message()).toBe('User does not exist.');
        //     await dialog.accept();
        //   }); 
     });

    // test('User Login - Negative scenario - Log in with invalid username', async ({ page }) => {
    //     await logIn_link.click();
    //     await logIn_username.fill('Christo'); 
    //     await logIn_password.fill('christ@10'); 
    //     await logIn_button.click();
    //     await page.waitForTimeout(2000); 
    //     page.on('dialog', async dialog => {
    //         expect(dialog.message()).toBe('User does not exist.');
    //         await dialog.accept();
    //       }); 
    //  });

    // test('User Login - Negative scenario - Login with invalid password', async ({ page }) => {
    //     await logIn_link.click();
    //     await logIn_username.fill('Christ'); 
    //     await logIn_password.fill('christ@11'); 
    //     await logIn_button.click();
    //     await page.waitForTimeout(2000); 
    //     page.on('dialog', async dialog => {
    //         expect(dialog.message()).toBe('Wrong password.');
    //         await dialog.accept();
        //   });
        //  await closeButton.click();
        // });

    test('Product Browsing - Products are displayed correctly', async({page}) => {
        const categories = {
        'Phones' : ['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6', 'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9'],
        'Laptops' :['Sony vaio i5', 'Sony vaio i7', 'MacBook air', 'Dell i7 8gb', '2017 Dell 15.6 Inch', 'MacBook Pro'],
        'Monitors' : ['Apple monitor 24', 'ASUS Full HD'],
        };

    
        const visible = await page.locator('.hrefch').tohavecount();
        if (visible = Phones.length) {
            await console.log("Products are displayed correctly");
        }
    });

    test('Verifying categories are navigating correctly', async({page}) => {
        

        const categories = await page.locator('.list-group-item');
        await page.locator('.list-group-item, hasText : Phones');

        test('Verify product categories can be navigated successfully', async ({ page }) => {
            const categories = {
              'Phones': ['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6', 'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9'],
              'Laptops': ['Sony vaio i5', 'Sony vaio i7', 'MacBook air', 'Dell i7 8gb', '2017 Dell 15.6 Inch', 'MacBook Pro'],
              'Monitors': ['Apple monitor 24', 'ASUS Full HD']
            };
        
            for (const [category, products] of Object.entries(categories)) {
              const categoryLink = page.locator(`a:has-text("${category}")`);
              await categoryLink.click();
              for (const product of products) {
                const productTitle = page.locator(`.card-title:has-text("${product}")`);
                await expect(productTitle).toBeVisible(); // Verify that the product title is visible
              }
            }
          });

    });

    test('Adding phones where prices are <= $650 to cart', async({page}) => {
        await logIn_link.click();
        await logIn_username.fill('Chris Ben'); 
        await logIn_password.fill('chris@10'); 
        await logIn_button.click();
        await page.waitForTimeout(2000); 
        const maxprice = 650;
        const phones = [];
        const Phones = ['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6', 'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9'];
        for (const Phone of Phones){
            const phoneproducts = page.locator('.hrefch').filter({hasText:{Phone}});
            //  ({hastext:"${Phone}"}); Page.locator(selector: string, options?: {has?: Locator;
            phones.push(phoneproducts);
        }
        console.log(phones);
        

    });



  
    
      


});
