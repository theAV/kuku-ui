import { newE2EPage } from '@stencil/core/testing';

describe('ku-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ku-icon></ku-icon>');

    const element = await page.find('ku-icon');
    expect(element).toHaveClass('hydrated');
  });
});
