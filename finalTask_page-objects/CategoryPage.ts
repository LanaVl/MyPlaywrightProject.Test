import {expect, Page, Locator } from '@playwright/test';

 export class CategoryPages {
  readonly page: Page;
  readonly cameraPage: Locator;
  readonly cellPhonesPage: Locator;
  readonly notebooksPage: Locator;

  readonly titles = {
    elPage: "Electronics",
    cameras: "Camera & photo",
    cellphones: "Cell phones", 
    notebooks: "Notebooks",
    computers: "Computers",
    }

  constructor(page: Page) {
    this.page = page;
    this.cameraPage = page.locator('.item-grid .item-box .title a:has-text("Camera & photo")');
    this.cellPhonesPage = page.locator('.inactive a:has-text("Cell phones")');
    this.notebooksPage = page.locator('.item-box a:has-text("Notebooks")');  
    }
  
    
  async assertPageTitle(expectedTitel: string){
    await expect(this.page.locator('.page-title h1')).toHaveText(expectedTitel);
    }
   
  async moveToCameraPage () {
    await this.cameraPage.click();
  }
  async assertCameraPage(){
    await this.assertPageTitle(this.titles.cameras)
    }

  async moveToCellPhonesPage() {
     await this.cellPhonesPage.click();
    }

  async assertCellPhonesPage() {
     await this.assertPageTitle(this.titles.cellphones);
    }

  async assertComputerPage(){
     await this.assertPageTitle(this.titles.computers);
    }

  async moveToNotebooksPage(){
    await this.notebooksPage.click();
    }

 async assertNotebookPage(){
    await this.assertPageTitle(this.titles.notebooks);
   } 
 }