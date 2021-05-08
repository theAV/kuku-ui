import { newSpecPage } from '@stencil/core/testing';
import { KuAlert } from '../ku-alert';

describe('ku-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuAlert],
      html: `<ku-alert></ku-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <ku-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ku-alert>
    `);
  });
});
