import React from 'react';

// Clock component displays current time based on the time settings of the user's machine.
export default class Clock extends React.Component {
    constructor(props) {
        super(props)

        // Component handles a state named date that controls the time functionality of for the Clock component.
        this.state = {
            date: new Date(),
            seconds: 1000
        };
    }

    render() {
        return(<div className={"text-white"}>Current Time: {this.state.date.toLocaleTimeString()}</div>);
    }

    componentDidMount() {

        this.intervalID = setInterval(() => {
            this.setState({date: new Date()}, this.seconds);
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
}