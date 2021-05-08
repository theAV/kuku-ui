import { newE2EPage } from '@stencil/core/testing';

describe('ku-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ku-avatar></ku-avatar>');

    const element = await page.find('ku-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
