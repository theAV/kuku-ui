import { newSpecPage } from '@stencil/core/testing';
import { KuInput } from '../ku-input';

describe('ku-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuInput],
      html: `<ku-input></ku-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ku-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ku-input>
    `);
  });
});
