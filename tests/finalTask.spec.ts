
import { test, expect } from '../configuration/fixtures';
import testData from '../configuration/test.data.json' assert { type: "json" };


test.describe('Product Filtering Suite for Camera & photo page', () => {
 
    test.beforeEach( async({page, categoryPages}) => {
        await page.goto('/electronics', { waitUntil: 'networkidle' });
        await categoryPages.assertPageTitle(testData.categories.electronics);
    })

    test('verify that prices are changed from USD to Euro', async({selectedCurrency}) => {
        await selectedCurrency.selectCurrency(testData.currency.euro);
    })

   test('verify that selected subcategory is correct', async({categoryPages}) => {    
        await categoryPages.moveToCameraPage();
    }) 

    test('Filter by manufacturer: "Apple"', async ({ filterByManufacturer }) => {
        await filterByManufacturer.selectByBrand(testData.brands.apple.slug); 
        await filterByManufacturer.expectedVisibleBrand(testData.brands.apple.name); 
        await filterByManufacturer.expectedMissingBrand(testData.brands.nikon.name);
    });

    test('Filter by minimum price', async ({ filterByPrice, filterByManufacturer, categoryPages }) => {
        await categoryPages.moveToCameraPage();
        await filterByPrice.movePriceSlider('right', 20);
        await filterByManufacturer.expectedVisibleBrand(testData.brands.apple.name); 
        await filterByManufacturer.expectedMissingBrand(testData.brands.nikon.name);
    });

 })
 

test.describe('Product Sorting Suite for Cell phones page', () => {

    test.beforeEach( async({page}) => {
        await page.goto('/electronics', { waitUntil: 'networkidle' });
    })

    test('verify that selected subcategory is correct', async({categoryPages}) => {        
        await categoryPages.moveToCellPhonesPage();
    }) 

    test('verify sorting by position from low to high price', async ({sortedByPrice}) => {
         await sortedByPrice.selectfromOption(testData.sortingOptions.priceLH); 
         await sortedByPrice.sortByLowToHigh();
        })

    test('verify displaying three products per page', async ({positionOnPage}) => {
        await positionOnPage.selectNumberPerPage(testData.positionOnPage.Three);
        await positionOnPage.expectProductCount(3);
    })

}) 


test.describe('Filtering Suite for Notebooks', () => {
   test.beforeEach( async({page}) => {
    await page.goto('/computers', { waitUntil: 'networkidle' });
    })

    test('verify that selected subcategory is correct', async({categoryPages}) => {
        await categoryPages.assertComputerPage();
        await categoryPages.moveToNotebooksPage();
    })

    test('verify filtering by memory', async({memorySelection}) => {    
       await memorySelection.filteredByMemory(testData.memorySize.min);
    })

})