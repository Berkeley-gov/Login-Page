import React from 'react';
import './../styles-components/nav-bar.scss';
import {Link} from 'react-router-dom';
import Clock from './clock.component';

// NavigationalBar is utility component that allows the user to navigate through the application main components/pages.
export default class NavigationalBar extends React.Component {
    render() {
        return(
          <header className='bg-dark'>
              { /* Start of the navigational bar used to surf through the application */}
              <nav className="navbar navbar-expand-lg bg-dark">

                  { /* Login demo logo will redirect the user to the login form page. */}
                  <a className="navbar-brand" href={'/'}>Login Demo</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">

                          { /* Router path for home component set to URL path: /dashboards */}
                          <li className="nav-item active">
                              <Link to="/dashboard" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                          </li>

                          { /* Router path for about component set to URL path: / */}
                          <li className="nav-item">
                              <Link to="/" className="nav-link">Login</Link>
                          </li>

                          { /* Router path for about component set to URL path: /registration */}
                          <li className="nav-item">
                              <Link to="/register" className="nav-link">Register</Link>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link" href="https://berkeley-gov.github.io/myportfolio.github.io/" tabIndex="1" aria-disabled="true">Portfolio</a>
                          </li>
                      </ul>

                      <div className={'mr-5 pr-5 font-weight-bold'}>
                          <Clock />
                      </div>

                      { /* Search bar form starts here. For this project, has no functionality. */}
                      <form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                 aria-label="Search" />
                              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                  </div>
              </nav>
          </header>
        );
    }
}