import { newE2EPage } from '@stencil/core/testing';

describe('ku-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ku-select></ku-select>');

    const element = await page.find('ku-select');
    expect(element).toHaveClass('hydrated');
  });
});
