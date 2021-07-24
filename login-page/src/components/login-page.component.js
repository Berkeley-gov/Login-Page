import React, { Component } from 'react';
import Axios from 'axios';
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
            password_confirmation: '',
            registrationErrors: '',
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

    // Authenticate(credentials) the user's login information that was submitted from the form.
    authenticate = (credentials) => {
        // 'authentication' variable will keep tracker if the credentials were correctly authenticated using a boolean value.
        let authentication = false;

        // Loops through the state of users retrieved from the database.
        for (let arrayElement of this.state.users) {
            // Checks if the current user in iteration has the same password and username that was inputted from the form.
            authentication = arrayElement.username === credentials.username && arrayElement.password === credentials.password;

            if(authentication) {
                console.log('\n> User successfully authenticated and logged into their account.\nUSER LOGGED IN:' + arrayElement.first_name);
                // Setting the user login cookies.
                sessionStorage.setItem('username', arrayElement.username);

                // If the user is successfully authenticated, then redirects the user to the home page.
                this.props.handleSuccessfulAuth(arrayElement);

            } else if(authentication === false) {
                console.log('\nUser credentials failed account authentication');

                // Grabs the paragraph element from the DOM.
                let warningText = document.getElementById('warning-text');

                // Sets text context to the paragraph element and colors it red.
                warningText.innerHTML = "Username or password was incorrect. Please try again!";
                warningText.style.color = "red";
                warningText.style.fontSize = "16px";
            }
        }
    }

    // Lifecycle method for Login component that makes an axios get request call to the BMI api.
    componentWillMount()  {
        Axios.get('https://body-mass-index-cal.herokuapp.com/users/')
                .then(response => {
                    this.setState({ users: response.data});
                    console.log(this.state.users);
                })
                .catch(error => {
                    console.log('\n> Failed to retrieve all user from the database');
                    console.log(error);
                });
    }

    // Handles the functionality of the form submission event and authentication process.
    handleFormSubmission = (e) => {
        // Prevents default form submission functionality when button is onClick event is activated.
        e.preventDefault();

        console.log('Login form submitted.\n');

        // User input credentials stored into an object literal name.
        const loginAttempt = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(`handle form event method is working. \nCurrent component state is: \nUsername: ${loginAttempt.username} \nPassword: ${loginAttempt.password}`);

        // Check the user's credentials.
        this.authenticate(loginAttempt);
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
                        <small id="emailHelp" className="form-text text-muted pb-2">
                            We'll never share your email with anyone else.
                        </small>
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

                    <div id={'warning-text'} className={'pb-3'}/>

                    {/* Submit form button starts here */}
                    <input type="submit" value='Submit' id='submit' className="btn btn-primary"  />
                </form>
            </section>
        );
    }
}