import { Page, expect, Locator } from '@playwright/test';

export class ProductSortedByPrice {
  readonly page: Page;
  readonly options: Locator;

constructor(page: Page){
    this.page = page;
    this.options = page.locator('#products-orderby');
}

async selectfromOption(optionLabel: string){
    await this.options.selectOption({ label: optionLabel});
    await this.page.waitForLoadState('networkidle');
}

async getAllPrices(): Promise<number[]> {
  const texts = await this.page.locator('.prices .price.actual-price').allTextContents();
  return texts
    .map(t => parseFloat(t.replace(/[^0-9.]/g, '')))
    .filter(num => !isNaN(num));
}

  async sortByLowToHigh() {
    const prices = await this.getAllPrices();
    const sorted = [...prices].sort((a, b) => a - b);   
    await expect(prices).toEqual(sorted);
  }

  async sortHighToLow() {
    const prices = await this.getAllPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    await expect(prices).toEqual(sorted);
  }

}