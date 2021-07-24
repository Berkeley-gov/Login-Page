import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, {Component} from 'react';
import NavigationalBar from './components/utility-components/nav-bar.component';
import HomePage from './components/home-page.component';
import AboutPage from './components/about-page.component';
import Footer from './components/utility-components/footer.component';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInStatus: 'NOT_LOGGED_IN',
            user: []
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    // Updates the states of the app component. Key functionality needed for authentication of user credentials.
    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED",
            user: data
        });
    }

    render() {
        return(
            <div className='app bg-light'>
                {/* Everything located within the Router tags is now accessible to the browser/client. This allows for component navigational functionality  */}
                <NavigationalBar />
                {/* Route allows for the creation of URL paths that display a component/web page when their respective endpoints are hit. */}
                <BrowserRouter>
                    <Switch>
                        {/* NOTE: render prop is used to pass data in a Route element. */}
                        <Route exact path={'/'} render={props => (<HomePage {... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
                        <Route exact path={'/dashboard'} render={props => (<AboutPage {... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/>)} />
                    </Switch>
                </BrowserRouter>
                {/* Application footer component for nav links and contact information. */}
                <Footer />
            </div>
        );
    }
}
