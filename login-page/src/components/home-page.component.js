import React, { Component } from 'react';
import Login from './login-page.component';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        //TODO: update the parent component
        this.props.handleLogin(data);
        this.props.history.push('/dashboard');
    }

    render() {
        return(
            <main>
                <h2>Welcome to the home page</h2>
                <h2>Logged in status is: {this.props.loggedInStatus}</h2>
                {/*TODO: Change component name from Login to Registration */}
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </main>
        );
    }
}