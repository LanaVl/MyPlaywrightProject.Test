import {expect, Page, Locator } from '@playwright/test';

export class MemorySelection {

    readonly page: Page;
    readonly productsOnPage: Locator;


    constructor(page: Page){
        this.page = page;
        this.productsOnPage = page.locator('.product-item');
    }

    /**
     * 
     * @param memorySize can be 4GB, 8GB or 16GB
     */

    async filteredByMemory(memorySize: string){
        const productsBefore = await this.productsOnPage.count();
        await this.page.getByLabel(memorySize).check();
        const productsAfter = await this.productsOnPage.count();
        await expect(productsAfter).toBeLessThan(productsBefore);
        
    }
}