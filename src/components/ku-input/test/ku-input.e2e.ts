import { newE2EPage } from '@stencil/core/testing';

describe('ku-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ku-input></ku-input>');

    const element = await page.find('ku-input');
    expect(element).toHaveClass('hydrated');
  });
});
