import React, { Component } from 'react';

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <main className={'p-5'}>
                <div className="alert alert-success d-flex align-items-center shadow col-md-3" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                        <use xlinkHref="#exclamation-triangle-fill"/>
                    </svg>
                    <div>
                        Login status: {this.props.loggedInStatus}
                    </div>
                </div>

                <h2 className={'text-center fs-5 mb-5'}>Hello, {this.props.user["first_name"]} {this.props.user["last_name"]}</h2>

                <div className="card text-center shadow mb-5">
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabIndex="-1"
                                   aria-disabled="false">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </main>
        );
    }
}