import { newSpecPage } from '@stencil/core/testing';
import { KuAvatar } from '../ku-avatar';

describe('ku-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuAvatar],
      html: `<ku-avatar></ku-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <ku-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ku-avatar>
    `);
  });
});
