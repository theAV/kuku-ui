import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ku-button',
  styleUrl: './ku-button.scss',
})
export class KuButton {
  classes: any;

  @Prop() color: 'primary' | 'secondary' | 'accent' = 'primary';

  @Prop() href: string;

  @Prop() variant: 'ghost' | 'raised' | 'outline' | 'flat' = 'ghost';

  @Prop() disabled: boolean;

  @Prop() loading: boolean = false;

  @Prop() fluid: boolean = false;

  @Prop() type: 'button' | 'submit' = 'button';
  
  @Prop() rounded: boolean = false;

  

  render() {
    const Tag = this.href ? 'a' : 'button';
    const type = this.href ? null : this.type;
    return (
      <Tag class={{
        'ku-btn': true,
        [`ku-btn-${this.color}`]: !!this.color,
        [`ku-btn-${this.variant}`]: !!this.variant,
        'ku-btn-rouded': !!this.rounded,
        'ku-btn-disabled': !!this.disabled,
        'ku-btn-loading': !!this.loading,
        'ku-btn-fluid': !!this.fluid,
      }}
        type={type}
        href={this.href}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : null}
        aria-busy={this.loading ? 'true' : null}
      >
        <slot />
      </Tag>
    );
  }

}
