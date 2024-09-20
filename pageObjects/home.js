import testData from '../test_data/final_assessment.json'
import { homepagelocator } from '../locators/final_assesment_locators/homepageLocator';

export class homePage{
    constructor(page) {
        this.page = page;
        this.FragranceTab = homepagelocator.FragranceTab;
    }

    async gotoHomePage(){
    await this.page.goto(testData.automation_teststore_url);
    await this.page.click(this.FragranceTab)
    }
}
