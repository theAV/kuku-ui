import { Component, h } from '@stencil/core';


@Component({
  tag: 'ku-select',
  styleUrl: 'ku-select.scss',
  shadow: true,
})
export class KuSelect {

  render() {
    return (
      <div>
        <div class="primary-text">loading</div>
        <a class="link" href="#">i am link</a>
      </div>
    );
  }

}
