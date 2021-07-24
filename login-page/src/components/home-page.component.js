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
            <main className={'p-5'}>
                <div className="alert alert-danger d-flex align-items-center shadow col-md-3 mb-5" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                        <use xlinkHref="#exclamation-triangle-fill"/>
                    </svg>
                    <div>
                        Login status: {this.props.loggedInStatus}
                    </div>
                </div>

                {/*TODO: Add Registration */}
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </main>
        );
    }
}