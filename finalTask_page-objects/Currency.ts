import { Page, Locator, expect } from '@playwright/test';

export class SelectedCurrency {

readonly page: Page;
readonly currencySelector: Locator;

constructor(page: Page){
this.page = page;
this.currencySelector = page.locator('#customerCurrency');
}

async selectCurrency(value: string){
    const actualCurrency = await this.page.locator('.prices .price.actual-price').first().textContent();
    await this.currencySelector.selectOption(value);
    if(value === "Euro"){
        expect(actualCurrency).toContain('€');}
    else {
        expect(actualCurrency).toContain('$');}
    } 

 }
     

