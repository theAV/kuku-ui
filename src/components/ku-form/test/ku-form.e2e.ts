import { newE2EPage } from '@stencil/core/testing';

describe('ku-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ku-form></ku-form>');

    const element = await page.find('ku-form');
    expect(element).toHaveClass('hydrated');
  });
});
