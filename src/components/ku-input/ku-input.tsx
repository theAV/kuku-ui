import { Component, Prop, h, State, Watch } from '@stencil/core';
import classname from 'classnames';


@Component({
  tag: 'ku-input',
  styleUrl: 'ku-input.scss',
})
export class KuInput {
  @Prop() type: 'text' | 'password' | 'email' = "text";

  @Prop() classes: string;

  @Prop() required: boolean;

  @Prop() placeholder: string;

  @Prop() value: string = 'test';
  @Prop() defaultValue: string;

  @Prop() variant: 'floated' | 'rounded';

  @State() isFocused: boolean = false;
  @State() hasDirty: boolean = this.value ? true : false;

  el: HTMLInputElement;

  getClasses = () => {
    const outSideClasses = this.classes?.split(' ') || [];
    return classname('ku-form-control', ...outSideClasses);
  }
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

  render() {
    const placeholder = this.variant === 'floated' ? <label class="ku-floated-label">{this.placeholder}</label> : null;
    return (
      <div class={{
        'ku-form-control-wrapper': true,
        [`ku-form-control-${this.variant}`]: !!this.variant,
        'ku-focused': this.isFocused,
        'ku-dirty': this.hasDirty,
      }}>
        <div style={{position:'relative'}}>
        {placeholder}
        <input
          ref={(el) => this.el = el as HTMLInputElement}
          onInput={() => this.value = this.el.value}
          onFocus={() => this.isFocused = true}
          onBlur={() => this.isFocused = false}
          class={this.getClasses()}
          value={this.value}
          defaultValue={this.defaultValue}
          placeholder={this.placeholder && this.variant !== 'floated' ? this.placeholder : null}
          type={this.type}
          required={this.required}
        />
        </div>
      </div>
    );
  }

}
