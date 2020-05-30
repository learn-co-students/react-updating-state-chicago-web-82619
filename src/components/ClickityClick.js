// Code ClickityClick Component Here
import React, { Component } from 'react';
import LightSwitch from './LightSwitch';

export class ClickityClick extends Component {
  state = {
    hasBeenClicked: false,
    currentThem: 'blue',
    addressInfo: {
      street: null,
      number: null,
      city: null,
      country: null,
    },
    toggled: false,
  };

  handleClick = () => {
    this.setState(
      (prevState) => ({
        hasBeenClicked: !prevState.hasBeenClicked,
        toggled: !prevState.toggled,
      }),
      () => {
        console.log(this.state);
      }
    );

    // this.setState({
    //   addressInfo: {
    //     ...this.state.addressInfo,
    //     city: 'New York City',
    //   },
    // });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
        <LightSwitch
          handleClick={this.handleClick}
          toggled={this.state.toggled}
        />
      </div>
    );
  }
}

export default ClickityClick;
