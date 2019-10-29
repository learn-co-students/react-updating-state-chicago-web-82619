import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        };
    }

    // makes change one time
    // handleClick = () => {
    //     this.setState({
    //         hasBeenClicked: true
    //     })
    // }

    // allows state to be toggled between true/false
    handleClick = () => {
        this.setState(prevState => {
            return {
                hasBeenClicked: !prevState.hasBeenClicked
            }
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;