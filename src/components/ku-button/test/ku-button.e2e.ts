import { newE2EPage } from '@stencil/core/testing';

describe('ku-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ku-button></ku-button>');

    const element = await page.find('ku-button');
    expect(element).toHaveClass('hydrated');
  });
});
