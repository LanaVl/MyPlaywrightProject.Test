
import { test } from '../configuration/fixtures';
import testData from '../configuration/test.data.json' assert { type: "json" };


test.describe('Filtering Suite for Notebooks', () => {
   test.beforeEach( async({page, categoryPages}) => {
    await page.goto('/computers');
 //    await categoryPages.assertComputerPage();
    await categoryPages.moveToNotebooksPage();
    })

    test('verify that selected subcategory is correct', async({categoryPages}) => {
       await categoryPages.assertNotebookPage();
    })

    test('verify filtering by memory', async({memorySelection}) => {   
       await memorySelection.filteredByMemory(testData.memorySize.min);
    })

    test('verify product info', async({productInfo}) => {
        await productInfo.checkProductInfo(testData.notebooks.samsung);
    })

})
