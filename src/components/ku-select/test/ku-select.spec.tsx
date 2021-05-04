import { newSpecPage } from '@stencil/core/testing';
import { KuSelect } from '../ku-select';

describe('ku-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuSelect],
      html: `<ku-select></ku-select>`,
    });
    expect(page.root).toEqualHtml(`
      <ku-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ku-select>
    `);
  });
});
