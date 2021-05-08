import { Component, h, Host, Prop, getAssetPath, State, Watch } from '@stencil/core';

import systemIcon from './system.icon';


@Component({
  tag: 'ku-icon',
  styleUrl: 'ku-icon.scss',
  assetsDirs: ['icons'],
})
export class KuIcon {

  @State() Element: string;
  URL: string;

  @Prop({
    reflect: false
  }) name: string;


  @Watch('name')
  async requestIcon() {
    this.URL = systemIcon.resolver(this.name, getAssetPath('icons'));
    const response = await fetch(this.URL);
    if (response.ok) {
      this.Element = await response.text();
    }
  }

  connectedCallback() {
    this.requestIcon();
  }
  render() {
    return (
      <Host class="ku-icon">
        <i role="icon" innerHTML={this.Element}></i>
      </Host>
    );
  }
}
