import { Component, h, Prop, State, Event, EventEmitter, Method, Watch, Element } from '@stencil/core';
import { AlertOptions } from '../../utils/interfaces';

const toastHeap: HTMLElement = Object.assign(document.createElement('div'), { className: 'toast-heap' });

export interface OverlayInterface {
  el: HTMLElement;
  animated?: boolean;
  keyboardClose?: boolean;
  overlayIndex?: number;
  presented?: boolean;
  toast?(): Promise<void>;
  dismiss?(data?: any, role?: string): Promise<boolean>;
}


@Component({
  tag: 'ku-alert',
  styleUrl: 'ku-alert.scss',
  shadow: true
})
export class KuAlert implements AlertOptions {

  private durationTimeout: any;

  @Element() el!: HTMLKuAlertElement

  connectedCallback() {
    if (this.open) this.show();
  }

  @Prop() closable = false;

  @Prop({
    mutable: true,
  }) open = false;

  @State() isVisible = false;

  @Prop() variant: 'primary' | 'secondary' | 'accent' | 'success' | 'alert' | 'error' = 'primary'

  @Prop() duration: number = 0;
  @Prop() msg: string;

  // Events
  @Event({
    eventName: 'alert.show'
  }) alertShowEvent: EventEmitter<void>;

  @Event({
    eventName: 'alert.hide'
  }) alertHideEvent: EventEmitter<void>;

  @Event({
    eventName: 'alert.shown'
  }) afterAlertShowEvent: EventEmitter<void>;

  @Event({
    eventName: 'alert.hidden'
  }) afterAlertHideEvent: EventEmitter<void>;


  @Method()
  async show() {
    if (this.isVisible) {
      return;
    }

    const event = this.alertShowEvent.emit();
    if (event.defaultPrevented) {
      this.open = false;
      return;
    }
    this.open = true;
    this.isVisible = true;
  }

  @Method()
  async hide() {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    if (!this.open) {
      return;
    }
    const event = this.alertHideEvent.emit();
    if (event.defaultPrevented) {
      this.open = true;
      return;
    }
    this.open = false;
    this.isVisible = false;
    this.el.remove();
  }

  @Method()
  async toast() {
    return new Promise<void>(() => {
      if (!toastHeap.parentElement) {
        document.body.appendChild(toastHeap);
      }
      console.log(this)
      toastHeap.prepend(this.el);
      this.show();
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.hide(), this.duration);
      }
    })
  }

  handleTransitionEnd = (event: TransitionEvent) => {
    const target = event.target as HTMLElement;
    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'opacity' && target.classList.contains('ku-alert')) {
      this.isVisible = this.open;
      this.open ? this.afterAlertShowEvent.emit() : this.afterAlertHideEvent.emit();
    }
  }

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }


  render() {
    return (
      <section class={{
        'ku-alert': true,
        [`ku-alert_${this.variant}`]: !!this.variant,
        'ku-alert_visible': this.isVisible,
        'ku-alert_open': this.open
      }} part="base" onTransitionEnd={this.handleTransitionEnd}>
        <div part="icon" class="ku-alert_icon">
          <slot name="icon"></slot>
        </div>
        <div part="message" class="ku-alert_message">

          {this.msg}
          <slot></slot>
        </div>
        {
          this.closable && <div class="ku-alert_close">
            <ku-button onClick={this.hide.bind(this)}><ku-icon name="x" /></ku-button>
          </div>
        }
      </section>
    );
  }

}
