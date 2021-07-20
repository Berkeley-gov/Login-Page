import React, { Component } from 'react';

export default class LoginPage extends React.Component {
    //TODO: Possibly pass an array of user account to the props of the LoginPage component.
    // Possibly pass an array of user account to the props of the LoginPage component.
    constructor(props){
        super(props)

        // LoginPage component will control the state of the login page form for both username and password input fields.
        this.state = {
            username: '',
            password: '',
            arrayOfUsers: []
        }

        // Two-way data binding the this keyword to the appropriate functions and event fields.
        this.handleUsernameEvent = this.handleUsernameEvent.bind(this);
        this.handlePasswordEvent = this.handlePasswordEvent.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
    }

    // handleUsernameEvent component method handles the state of username field from the login form.
    handleUsernameEvent = (inputFieldEvent) => {
        this.setState({ username: inputFieldEvent.target.value });
    }

    // handlePasswordEvent component method handles the state of password field from the login form.
    handlePasswordEvent = (inputFieldEvent) => {
        this.setState({ password: inputFieldEvent.target.event });
    }

    handleFormSubmission = (event) => {
        // Prevents default form submission functionality when button is onClick event is activated.
        event.preventDefault();
    }

    // renders UI code to the client when LoginPage is path is called by the client.
    render() {
        return(
            <section className='container-fluid'>
                { /* Login form starts here and gathers user input to authenticate their credentials. */ }

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"
                               className="form-control"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter email" />

                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                               className="form-control"
                               id="exampleInputPassword1"
                               placeholder="Password" />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox"
                               className="form-check-input"
                               id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        );
    }
}