const { test, expect } = require('@playwright/test');
import { homePage } from '../../pageObjects/home';
import { fragrancePage } from '../../pageObjects/fragrance';
import { addtoCartPage } from '../../pageObjects/addtoCart';
import { checkOutPage } from '../../pageObjects/checkOut';

test.beforeEach('Go to automation test store & navigate to fragrance tab', async ({page}) => {
    const home = new homePage(page);
    await home.gotoHomePage();

});

test('Sort fragrance products in ascending order', async ({page}) => {
    const fragrance = new fragrancePage(page);
    await fragrance.sortProductAscending();

});

test('Fetch all products displayed', async ({page}) => {
    const fragrance = new fragrancePage(page);
    await fragrance.fetchProductDetails();
    await fragrance.savedatainexcel();
});

test('Save fetched data in excel', async ({page}) => {
    const fragrance = new fragrancePage(page);
    await fragrance.savedatainexcel();
});

test('Add a product to the cart', async ({page}) => {
    const addtoCart = new addtoCartPage(page);
    await addtoCart.addtoCart();
});

test('Checkout the product added in the cart', async({page}) => {
    const checkout = new checkOutPage(page);
    await checkout.checkout();
});


