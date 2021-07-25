import React from 'react';
import './styles-components/registration-from.scss';
import Axios from 'axios';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        }

        this.handleUsernameEvent = this.handleUsernameEvent.bind(this);
        this.handlePasswordEvent = this.handlePasswordEvent.bind(this);
        this.handleFirstNameEvent = this.handleFirstNameEvent.bind(this);
        this.handleLastNameEvent = this.handleLastNameEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameEvent = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePasswordEvent = (event) => {
        this.setState({ password: event.target.value });
    }

    handleFirstNameEvent = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameEvent = (event) => {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit(event)  {
        event.preventDefault();

        const userToCreate = {
           username: this.state.username,
           password: this.state.password,
           first_name: this.state.firstName,
           last_name: this.state.lastName,
        }

        console.log('\nRegistration form handler was successful. \nUser information: ');
        console.log(userToCreate);

        // HTTP POST REQUEST: post request made to backend BMI API so user's new account is added to the database.
        Axios.post('https://body-mass-index-cal.herokuapp.com/users/add', userToCreate)
            .then(response => console.log(response))
            .catch(error => console.log('+ Failed to make the axios post request to add user to the database: ' + error));

        // Takes the user back to the login component.
        this.props.handleLogin(userToCreate);
        this.props.history.push('/');
    }

    render() {
        return(
            <section className={'container-fluid'}>
                <form id='register-form' className={'card-form col-md-6 bg-white shadow-sm p-5'} onSubmit={this.handleSubmit}>
                    <h2 className='display-4 text-center text-white bg-dark bg-gradients mb-5 p-1 rounded-pill'>Register</h2>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   value={this.state.username}
                                   onChange={this.handleUsernameEvent}
                                   required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   value={this.state.password}
                                   onChange={this.handlePasswordEvent}
                                   required />
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col">
                            <label  className="col-form-label">First name</label>
                            <input type="text"
                                   className="form-control"
                                   aria-label="First name"
                                   value={this.state.firstName}
                                   onChange={this.handleFirstNameEvent}
                                   required />
                        </div>

                        <div className="col">
                            <label  className="col-form-label">Last name</label>
                            <input type="text" 
                                   className="form-control" 
                                   aria-label="Last name" 
                                   value={this.state.lastName}
                                   onChange={this.handleLastNameEvent}
                                   required />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-outline-dark mt-4 col-md-3">Submit</button>
                </form>
            </section>
        );
    }
}