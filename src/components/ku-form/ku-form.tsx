import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ku-form',
  styleUrl: 'ku-form.scss'
})
export class KuForm {
  @Prop() name: string;
  @Prop() novalidate: boolean;

  @State() isInvalid: boolean = false;

  form: HTMLFormElement;

  componentDidLoad() {
    const form = this.form;
    form.addEventListener('submit', (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
      if (!form.checkValidity()) {
        console.log('submit')
        event.preventDefault()
        event.stopPropagation()
        this.isInvalid = true;
      }
      form.classList.add('was-validated')
    }, false)
  }
  render() {
    return (
      <form ref={(el) => { this.form = el as HTMLFormElement }} name={this.name || null} novalidate={this.novalidate || null}>
        <slot></slot>
      </form>
    );
  }

}
