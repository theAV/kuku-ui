import { newSpecPage } from '@stencil/core/testing';
import { KuForm } from '../ku-form';

describe('ku-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuForm],
      html: `<ku-form></ku-form>`,
    });
    expect(page.root).toEqualHtml(`
      <ku-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ku-form>
    `);
  });
});
