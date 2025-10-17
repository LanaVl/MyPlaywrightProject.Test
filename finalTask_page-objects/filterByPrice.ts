import { Page, Locator } from '@playwright/test';

export class FilterByPrice {
  readonly page: Page;
  readonly sliderSelector: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.sliderSelector = page.locator('#price-range-slider');
  }

  /**
   * move slider
   * @param side 'left' or 'right'
   * @param offsetPercent in %
   */
  
  async movePriceSlider(side: 'left' | 'right', offsetPercent: number) {
    await this.sliderSelector.waitFor({ state: 'visible', timeout: 10000 });
    const slider = await this.sliderSelector.boundingBox();
    if (!slider) throw new Error('Slider not found');

    // verifying that the slide range is correct
    if (offsetPercent < 0 || offsetPercent > 100) {
     throw new Error(`Offset percent must be between 0 and 100. Got: ${offsetPercent}`);
      }

    const handleLocator =
      side === 'left'
        ? this.sliderSelector.locator('span').first()
        : this.sliderSelector.locator('span').last();

      const moveBy = (slider.width * offsetPercent) / 100;
      console.log(`Moving ${side} slider by ${offsetPercent}% (${moveBy.toFixed(2)}px)`);


    await handleLocator.hover();
    await this.page.mouse.down();
    await this.page.mouse.move(slider.x + moveBy, slider.y + slider.height / 2);
    await this.page.mouse.up();

  } 
}
