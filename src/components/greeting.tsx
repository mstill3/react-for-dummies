
// Import dependencies
import React, { Component, MouseEvent } from 'react'
import { GreetingPropsInterface, GreetingStateInterface } from '../interfaces'


// Create component class
class Greeting extends Component<GreetingPropsInterface, GreetingStateInterface>
{

  constructor(props: GreetingPropsInterface)
  {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleDownClick = (event: MouseEvent) =>
  {
    event.preventDefault();
    this.setState((previous) => ({ ...previous, clicks: previous.clicks - 1 }));
  }

  handleUpClick = (event: MouseEvent) =>
  {
    event.preventDefault();
    this.setState((previous) => ({ ...previous, clicks: previous.clicks + 1 }));
  }

  render = () =>
  {
    return (
      <div>
        <h3>
          Hello {this.props.name}!
        </h3>
        <button 
         className="btn btn-info"
         onClick={this.handleDownClick}> 
            -
        </button>
        <button 
         className="btn btn-primary"
         onClick={this.handleUpClick}> 
            +
        </button>
        <p>
          Clicked {this.state.clicks} times
        </p>
        
      </div>
    );
  }

}

export default Greeting;