import { Component, Prop, h, State } from '@stencil/core';
import { ToastController } from '../../index';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop({
    mutable: true
  }) first: string

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() isLoading: boolean = false;

@State() i = 0 
  
  async presentToast() {
      const toast = await ToastController.create({
      msg: `i am toast from alert with icon ${++this.i}`,
      closable: true,
      duration: 5000
    });
    toast.toast();
  }


  componentDidLoad() {
    // setTimeout(()=>{
    //   this.first ='john';
    // }, 5000)
  }

  render() {
    return <div>
      <br />
      <ku-form name="userForm" novalidate>
        <label>
          <ku-input id="username" type="text" required placeholder="Placeholder goes here...">
            <span slot="label">I am Label</span>
          </ku-input>
        </label>
        <ku-button rounded variant="flat" type="submit" color="primary">Submit</ku-button>
      </ku-form>
      <hr />
      <ku-button rounded variant="flat" onClick={this.presentToast.bind(this)} color="primary">Show Toast</ku-button>
      <br />
      <ku-input variant="floated" type="email" required placeholder="placeholder goes here...">
        <span slot="label">I am Label</span>
      </ku-input>
      {/* <ku-button loading={this.isLoading} href="#" color="primary">
        primary
      </ku-button>
      <ku-button onClick={this.toggleLoadingState} type="submit" color="secondary">
        secondary
      </ku-button>
      <ku-button onClick={this.toggleLoadingState} color="accent">
        accent
      </ku-button>
      <br></br>
      <br></br>
      <br></br>
      <ku-button rounded loading={this.isLoading} variant="flat" color="primary">primary</ku-button>
      <ku-button onClick={this.toggleLoadingState} variant="flat" color="secondary">secondary</ku-button>
      <ku-button disabled variant="flat" color="accent">accent</ku-button>
      <br></br>
      <br></br>
      <br></br>
      <ku-button loading={this.isLoading} variant="raised" color="primary">primary</ku-button>
      <ku-button onClick={this.toggleLoadingState} variant="raised" color="secondary">secondary</ku-button>
      <ku-button disabled variant="raised" color="accent">accent</ku-button>
      <br></br>
      <br></br>
      <br></br>
      <ku-button loading={this.isLoading} variant="outline" color="primary">primary</ku-button>
      <ku-button onClick={this.toggleLoadingState} variant="outline" color="secondary">secondary</ku-button>
      <ku-button disabled variant="outline" color="accent">accent</ku-button>  */}
      {/* <ku-button onClick={this.printName.bind(this, 'primary')} variant="outline" loading={this.isLoading} color="primary">primary</ku-button>
      <ku-button onClick={this.toggleLoadingState} variant="outline" color="secondary">secondary</ku-button>
      <ku-button onClick={this.printName.bind(this, 'accent')} variant="outline" disabled color="accent">accent</ku-button> */}
    </div>;
  }
}
