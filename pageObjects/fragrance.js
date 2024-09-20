import {expect} from '@playwright/test';

import { fragrancelocator } from '../locators/final_assesment_locators/frgranceLocator';
import { homepagelocator } from '../locators/final_assesment_locators/homepageLocator';

export class fragrancePage{

    constructor(page){
        this.page = page;
        this.sortdropdown = fragrancelocator.sortdropdown;
        this.sortA_Z =  fragrancelocator.sortA_Z;
        this.FragranceTab = homepagelocator.FragranceTab;
        this.home = homepagelocator.home;
        this.productelement = fragrancelocator.productElement;

    }
    async sortProductAscending(){
        await this.page.click(this.sortdropdown);
        await this.page.click(this.sortA_Z);
    };

    async fetchProductDetails(){
        const products = await this.page.$$eval(this.productelement, elements  => {
            return elements.map(el=> {
                const name = el.queryselector('.prdocutname').textcontent.trim();
                const priceElement = el.queryselector('.price .oneprice, .price .pricenew');
                const price = priceElement ? priceElement.textcontent.trim(): N/A;
                return{name, price};
            });
        });
        console.log(products);
        console.log('Total Product count :', products.length);
        return products;
    }

    async savedatainexcel(){
        const products = await this.fetchProductDetails();
        const worksheet = xlsx.utils.json_to_sheet(products);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, 'products');
        xlsx.writefile(workbook,'./test_data/products.xlsx');
        const worksheet_product = workbook.sheets['products'];
        const excelData = xlsx.utils.sheet_to_json(worksheet_product);
        expect(excelData).toEqual(products);

    }
        


    

}