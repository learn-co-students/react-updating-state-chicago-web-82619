import React, { Component } from 'react';

export class LightSwitch extends Component {
  state = {
    toggled: false,
  };

  // handleClick = () => {
  //   this.setState((prevState) => ({
  //     toggled: !prevState.toggled,
  //   }));
  // };

  render() {
    console.log(this.props);
    return (
      <div>
        <br />
        <button onClick={() => this.props.handleClick()}>
          {this.props.toggled ? 'OFF' : 'ON'}
        </button>
      </div>
    );
  }
}

export default LightSwitch;
