import { Component, Prop, h, State, Watch, Host } from '@stencil/core';


@Component({
  tag: 'ku-input',
  styleUrl: 'ku-input.scss',
})
export class KuInput {
  @Prop() type: 'text' | 'password' | 'email' = "text";

  @Prop() classes: string;

  @Prop() required: boolean;

  @Prop() placeholder: string;

  @Prop({
    mutable: true
  }) value: string = null;
  
  @Prop() defaultValue: string;

  @Prop() variant: 'legacy' | 'floated' | 'rounded' = 'legacy';

  @State() isFocused: boolean = false;
  @State() hasDirty: boolean = this.value ? true : false;

  el: HTMLInputElement;


  changeHandler = () => {
    this.hasDirty = !this.el.validity.valueMissing || this.value ? true : false;
    // console.log(this.el.validity);
    // console.log(this.el.validationMessage);
    // console.log(this.el.willValidate);
  }

  @Watch('value')
  valueWatchHandler() {
    this.changeHandler(); 
  }

  // [`ku-form-control-${this.variant}`]: !!this.variant,
  //       'ku-focused': this.isFocused,
  //       'ku-dirty': this.hasDirty,
  render() {
    return (
      <Host class={{
        'ku-form-field': true,
        'ku-focused': this.isFocused,
        'ku-dirty': this.hasDirty,
        [`ku-form-control-${this.variant}`]: !!this.variant
      }}>
        <div class="ku-form-field-wrapper">
          <div class="ku-form-field-flex">
            <div class="ku-form-field-infix">
              <input
                ref={(el) => this.el = el as HTMLInputElement}
                onInput={() => this.value = this.el.value}
                onFocus={() => this.isFocused = true}
                onBlur={() => this.isFocused = false}
                class="ku-input-element" 
                value={this.value}
                defaultValue={this.defaultValue}
                placeholder={(this.variant === 'floated' && !this.isFocused) ? null : this.placeholder}
                type={this.type}
                required={this.required}
              />
              <span class="ku-form-field-label-wrapper">
                <label class="ku-form-field-label">
                  <slot name="label" />
                </label>
              </span>
            </div>
          </div>
          {
            this.variant === "floated" &&
            <div class="ku-form-field-underline"></div>
          }
          {/* {placeholder} */}

        </div>
      </Host>
    );
  }

}
