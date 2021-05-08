import { newE2EPage } from '@stencil/core/testing';

describe('ku-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ku-alert></ku-alert>');

    const element = await page.find('ku-alert');
    expect(element).toHaveClass('hydrated');
  });
});
