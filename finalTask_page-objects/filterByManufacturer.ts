 import { Page, Locator, expect } from '@playwright/test';

 export class FilterByManufacturer {
      readonly page: Page;
      readonly selectedBrand: Locator;
      readonly product: Locator;
     
    constructor(page: Page){
      this.page = page;
      this.selectedBrand = page.locator('.block.block-manufacturer-navigation');
      this.product = page.locator('.product-item');
    }

    /**
     * 
     * @param brand can be Apple or Nikon 
     */
    
    async selectByBrand(brand: string){
     await this.selectedBrand.locator(`a[href="/${brand}"]`).click(); 
    }

    async expectedVisibleBrand(productName: string){
      await expect(this.page.locator('.product-title a', { hasText: productName })).toBeVisible();
    }

    async expectedMissingBrand(productName: string){
    await expect(this.page.locator('.product-title a', { hasText: productName })).toHaveCount(0);
      }
 }

  
        
  