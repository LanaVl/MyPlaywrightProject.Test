import { Page, Locator, expect } from "@playwright/test";

export class SortingByPositionOnPage {

    readonly page: Page;
    readonly numberPerPageOption: Locator;
    readonly productsNumber: Locator;

    constructor (page: Page)
    {
        this.page = page;
        this.numberPerPageOption = page.locator('#products-pagesize');
        this.productsNumber = page.locator('.product-item');
    }   

    /**
     * selected number of products displayed on the page
     * @param value can be 3, 6 or 9 products  
     */

    async selectNumberPerPage(value: string){
       await this.numberPerPageOption.selectOption(value);
    }

   async checkNumberPerPage(): Promise<number> {
        return await this.productsNumber.count();
       }
       
async expectProductCount(expected: number) {
    await expect(this.productsNumber).toHaveCount(expected);
  }

       
}
