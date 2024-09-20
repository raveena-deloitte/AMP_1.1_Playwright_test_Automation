import { addtocartlocator } from '../locators/final_assesment_locators/addtocartlocator';

export class addtoCartPage{
    constructor (page) {
        this.page = page;
        this.atoCicon = addtocartlocator.atoCicon;
        this.addtocartButton = addtocartlocator.addtocartButton;
        this.checkout = addtocartlocator.checkout;
        this.guestRadioButton = addtocartlocator.guestRadioButton;
        this.continueButton = addtocartlocator.continueButton;
    }
    async addtoCart(){
        await this.atoCicon.click()
        await this.addtocartButton.click();
        await this.checkout.click();
        await this.guestRadioButton.click();
        await this.continueButton.click();
    }
}

