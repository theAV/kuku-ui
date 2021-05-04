import { Component, Prop, h, State } from '@stencil/core';

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

  // private toggleLoadingState = (): void => {
  //   this.isLoading = !this.isLoading;
  // }

  componentDidLoad(){
    // setTimeout(()=>{
    //   this.first ='john';
    // }, 5000)
  }

  render() {
    return <div>
      <ku-form name="userForm" novalidate>
        <label>
          user name
          <ku-input id="username" variant="floated" type="email" required  placeholder="placeholder goes here..."/>
        </label>
        <ku-button rounded variant="flat" type="submit" color="primary">Submit</ku-button>
      </ku-form>
      <hr/>
      <ku-input id="username" variant="floated" type="email" required placeholder="placeholder goes here..."/>
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
      <ku-button disabled variant="outline" color="accent">accent</ku-button> */}
      {/* <ku-button onClick={this.printName.bind(this, 'primary')} variant="outline" loading={this.isLoading} color="primary">primary</ku-button>
      <ku-button onClick={this.toggleLoadingState} variant="outline" color="secondary">secondary</ku-button>
      <ku-button onClick={this.printName.bind(this, 'accent')} variant="outline" disabled color="accent">accent</ku-button> */}
    </div>;
  }
}
