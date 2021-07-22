import React, { Component } from 'react';
import './../styles-components/nav-bar.scss';

// NavigationalBar is utility component that allows the user to navigate through the application main components/pages.
export default class NavigationalBar extends React.Component {
    render() {
        return(
          <header className='bg-dark'>
              { /* Start of the navigational bar used to surf through the application */}
              <nav className="navbar navbar-expand-lg bg-dark">

                  { /* Login demo logo will redirect the user to the login form page. */}
                  <a className="navbar-brand" href="/login">Login Demo</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">

                          { /* Router path for home component set to URL path: /home */}
                          <li className="nav-item active">
                              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                          </li>

                          { /* Router path for about component set to URL path: /about */}
                          <li className="nav-item">
                              <a className="nav-link" href="/login">Login</a>
                          </li>

                          { /* Router path for login component set to URL path: /login */}
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                          </li>
                      </ul>

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