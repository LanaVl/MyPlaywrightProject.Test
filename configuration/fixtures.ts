 import { test as base } from '@playwright/test';
 import { CategoryPages } from '../finalTask_page-objects/CategoryPage';
 import { FilterByManufacturer } from '../finalTask_page-objects/filterByManufacturer';
 import { FilterByPrice } from '../finalTask_page-objects/filterByPrice';   
 import { ProductSortedByPrice } from '../finalTask_page-objects/sortedByPrice';
 import { SortingByPositionOnPage } from '../finalTask_page-objects/positionOnPage';
 import { MemorySelection } from '../finalTask_page-objects/filterByMemory';
 import { ProductInfo } from '../finalTask_page-objects/productInfo'; 
 import { SelectedCurrency } from '../finalTask_page-objects/Currency';

 
 type MyFixtures = {
  categoryPages: CategoryPages;
  filterByPrice: FilterByPrice;
  filterByManufacturer: FilterByManufacturer;
  sortedByPrice: ProductSortedByPrice;
  positionOnPage: SortingByPositionOnPage;
  memorySelection: MemorySelection;
  productInfo: ProductInfo;
  selectedCurrency: SelectedCurrency;
};


 export const test = base.extend<MyFixtures>({

   categoryPages: async ({ page }, use) => {
    await use(new CategoryPages(page));
  },

    filterByPrice: async ({ page }, use) => {
      const filterPrice = new FilterByPrice(page);
      await use(filterPrice);
  },

    filterByManufacturer: async ({ page }, use) => {
      const manufacturer = new FilterByManufacturer(page);
      await use(manufacturer);
   },

    sortedByPrice: async ({ page }, use) => {
    const sorter = new ProductSortedByPrice(page);
    await use(sorter);
  },

  positionOnPage: async({page}, use) => {
    const position = new SortingByPositionOnPage(page);
    await use(position);
  },

  memorySelection: async({page}, use) => {
    const memory = new MemorySelection(page);
    await use(memory)
  },

  productInfo: async({page}, use) => {
    const info = new ProductInfo(page);
    await use(info);
  },

  selectedCurrency: async({page}, use) => {
    const currency = new SelectedCurrency(page);
    await use(currency);
  } 
});

export { expect } from '@playwright/test';


 