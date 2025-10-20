
import {expect, Page, Locator } from '@playwright/test';

export class ProductInfo {

    readonly page: Page;

constructor(page: Page){
        this.page = page;

}

async checkProductInfo(productName: string) {
await this.page.locator('.product-title a', { hasText: productName }).click();
await expect(this.page.locator('.product-name')).toContainText(productName);
await expect(this.page.locator('.product-price')).toContainText('$');
await expect(this.page.locator('button.add-to-cart-button')).toBeVisible();
    }
}
