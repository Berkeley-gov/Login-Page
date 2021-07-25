import React, { Component } from 'react';

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <main className={'p-5 m-4'}>
                <div className="alert alert-success d-flex align-items-center shadow-sm" id='status' role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                        <use xlinkHref="#exclamation-triangle-fill"/>
                    </svg>
                    <div>
                        Login status: {this.props.loggedInStatus}
                    </div>
                </div>

                <div className="card text-center shadow-sm">
                    <div className="card-header bg-dark">
                        <h2 className={'text-center text-white fs-5'}>{this.props.user["first_name"]} {this.props.user["last_name"]} Signed In</h2>
                    </div>

                    <div className="card-body p-5 m-5">
                        <h5 className="card-title">Congratulations! You have reached the end of the Login demo.</h5>
                        <p className="card-text">Please visit my Software Engineer portfolio.</p>
                        <a href="https://berkeley-gov.github.io/myportfolio.github.io/" className="btn btn-outline-dark mt-3">Juan's Portfolio</a>
                    </div>

                    <div className="card-footer text-muted bg-dark text-white">
                        React Login Demo
                    </div>
                </div>
            </main>
        );
    }
}