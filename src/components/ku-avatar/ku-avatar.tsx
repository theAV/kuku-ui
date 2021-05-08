import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ku-avatar',
  styleUrl: 'ku-avatar.scss'
})
export class KuAvatar {

  @Prop({
    reflect: false
  }) height = '3rem';

  @Prop({
    reflect: false
  }) width = '3rem';

  /**
   * First letter of first and last name
   */
  @Prop({
    reflect: false
  }) initials = null;

  @Prop({
    reflect: false
  }) src = null;


  @Prop({
    reflect: false
  }) icon = 'person-fill';

  @Prop({
    reflect: false
  }) shape: 'circle' | 'rounded' | 'square' = 'circle';


  render() {
    let icon = !this.initials && !this.src ? <ku-icon part="icon" class="icon" name={this.icon}></ku-icon> : null;
    return (
      <Host class={{
        'ku-avatar': true,
        [`ku-avatar-${this.shape}`]: !!this.shape
      }} style={{
        height: this.height,
        width: this.width
      }}>
        {icon}
        {this.initials ? <span part="initials">{this.initials}</span> : null}
        {this.src ?
          <img src={this.src} alt="" class="ku-avatar_image" /> : null
        }

      </Host>
    );
  }

}
