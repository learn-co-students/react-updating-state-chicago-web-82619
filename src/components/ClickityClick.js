import React from 'react';

export default class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toogled
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
