
import { test } from '../configuration/fixtures';
import testData from '../configuration/test.data.json' assert { type: "json" };


test.describe('Product Filtering Suite for Camera & photo page', () => {
 
    test.beforeEach( async({page, categoryPages}) => {
       await page.goto('/electronics');
       console.log('BASE_URL is:', process.env.BASE_URL);
        await categoryPages.moveToCameraPage();
    })

   test.only('verify that selected subcategory is correct', async({categoryPages}) => {           
        await categoryPages.assertCameraPage();
    }) 

    test('Filter by manufacturer: "Apple"', async ({ filterByManufacturer }) => {
        await filterByManufacturer.selectByBrand(testData.brands.apple.slug); 
        await filterByManufacturer.expectedVisibleBrand(testData.brands.apple.name); 
        await filterByManufacturer.expectedMissingBrand(testData.brands.nikon.name);
    });

    test('Filter by minimum price', async ({ filterByPrice, filterByManufacturer, categoryPages }) => {
        await filterByPrice.movePriceSlider('left', 10);
        await filterByManufacturer.expectedVisibleBrand(testData.brands.apple.name); 
        await filterByManufacturer.expectedMissingBrand(testData.brands.nikon.name);
    });

 })
 

test.describe('Product Sorting Suite for Cell phones page', () => {

    test.beforeEach( async({page, categoryPages}) => {
        await page.goto('/electronics');
        await categoryPages.moveToCellPhonesPage();
    })

    test('verify that selected subcategory is correct', async({categoryPages}) => {        
        await categoryPages.assertCellPhonesPage();
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


//  I created this test for the first version of the demo-site, but there isn't such an option on the second version, so I'll skip it.

  test.skip('verify that prices are changed from USD to Euro', async({page, selectedCurrency}) => {
        await page.goto('/electronics');
        await selectedCurrency.selectCurrency(testData.currency.euro);
    })
