import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props)

        // Component handles a state named date that controls the time functionality of for the Clock component.
        this.state = {
            date: new Date()
        };
    }

    render() {
        return(<div className={"text-white"}>Current Time: {this.state.date.toLocaleTimeString()}</div>);
    }

    componentDidMount() {
        const second = 1000;

        this.intervalID = setInterval(() => {
            this.setState({ date: new Date()}, this.second);
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
}