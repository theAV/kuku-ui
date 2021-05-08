import { newSpecPage } from '@stencil/core/testing';
import { KuIcon } from '../ku-icon';

describe('ku-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuIcon],
      html: `<ku-icon></ku-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <ku-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ku-icon>
    `);
  });
});
