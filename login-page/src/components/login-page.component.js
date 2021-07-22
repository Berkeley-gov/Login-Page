import React, { Component } from 'react';
import './styles-components/login-form.scss';

export default class LoginPage extends React.Component {
    //TODO: Possibly pass an array of user account to the props of the LoginPage component.
    // Possibly pass an array of user account to the props of the LoginPage component.
    constructor(props){
        super(props)

        // LoginPage component will control the state of the login page form for both username and password input fields.
        this.state = {
            username: '',
            password: '',
            arrayOfUsers: [],
        };

        // Two-way data binding the this keyword to the appropriate functions and event fields.
        this.handleUsernameEvent = this.handleUsernameEvent.bind(this);
        this.handlePasswordEvent = this.handlePasswordEvent.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
    }

    // handleUsernameEvent component method handles the state of username field from the login form.
    handleUsernameEvent = (e) => {
        this.setState({ username: e.target.value });
    }

    // handlePasswordEvent component method handles the state of password field from the login form.
    handlePasswordEvent = (e) => {
        this.setState({ password: e.target.value });
    }

    handleFormSubmission = (e) => {
        // Prevents default form submission functionality when button is onClick event is activated.
        e.preventDefault();

        // User input credentials stored into an object literal name.
        const loginAttempt = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(`handle form event method is working. \nCurrent component state is: \nUsername: ${loginAttempt.username} \nPassword: ${loginAttempt.password}`);
    }

    // renders UI code to the client when LoginPage is path is called by the client.
    render() {
        return(
            <section className='container-fluid row'>
                { /* Login form starts here and gathers user input to authenticate their credentials. */ }
                <form className='login-form bg-white p-5 shadow-lg col-md-6' onSubmit={this.handleFormSubmission}>
                    <h2 className='display-4 text-center bg-light mb-5 p-2'>Login</h2>

                    {/* Username form label starts here */}
                    <div className="form-group">
                        <h3 className="pb-3 display-5">Username</h3>
                        <input type="text"
                               value={this.state.username}
                               className="form-control shadow-sm p-4"
                               onChange={this.handleUsernameEvent}
                               required />

                            <small id="emailHelp" className="form-text text-muted pb-2">We'll never share your email with
                                anyone else.</small>
                    </div>

                    {/* Password form label starts here */}
                    <div className="form-group">
                        <h3 className="pb-3 display-5">Password</h3>
                        <input type="password"
                               value={this.state.password}
                               className="form-control shadow-sm p-4"
                               onChange={this.handlePasswordEvent}
                               required />
                    </div>

                    {/* Remember me button starts here */}
                    <div className="form-group form-check">
                        <input type="checkbox"
                               className="form-check-input shadow-sm" />
                               <label id="remember-me" className="form-check-label text-muted">Remember me</label>
                    </div>

                    {/* Submit form button starts here */}
                    <input type="submit" value='Submit' id='submit' className="btn btn-primary"  />
                </form>
            </section>
        );
    }
}