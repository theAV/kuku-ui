import { newSpecPage } from '@stencil/core/testing';
import { KuButton } from '../ku-button';

describe('ku-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuButton],
      html: `<ku-button></ku-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ku-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ku-button>
    `);
  });
});
