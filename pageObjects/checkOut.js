import {expect} from '@playwright/test';

import { checkoutlocator } from '../locators/final_assesment_locators/checkoutlocator';
import { addtocartlocator } from '../locators/final_assesment_locators/addtocartlocator';

export class checkOutPage{
    constructor(page){
        this.page = page;
        this.firstname = checkoutlocator.firstname;
        this.lastname = checkoutlocator.lastname;
        this.email = checkoutlocator.email;
        this.address1 = checkoutlocator.address1;
        this.city = checkoutlocator.city;
        this.selectState = checkoutlocator.selectState;
        this.sameAddresscheck = checkoutlocator.sameAddresscheck;
        this.zone = checkoutlocator.zone;
        this.checkoutContinue = checkoutlocator.checkoutContinue;
        this.confirmationToast = checkoutlocator.confirmationToast;
    }
    async checkout(){
        await this.page.fill(this.firstname, test_data.firstname);
        await this.page.fill(this.lastname, test_data.lastname);
        await this.page.fill(this.email, test_data.email);
        await this.page.fill(this.address1, test_data.address1);
        await this.page.fill(this.city, test_data.city);
        await this.page.selectOption(this.zone, test_data.zone);
        await this.page.sameAddresscheck.check();
        await this.page.checkoutContinue.click();
        console.log('Confirmation Toast:', confirmationToast);
    }
}