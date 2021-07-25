import React, { Component } from 'react';

// NavigationalBar is utility component that allows the user to navigate through the application main components/pages.
export default class Footer extends React.Component {
    render() {
        return(
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="m-1">
                        <h2 className={'fs-4'}>Login Demo</h2>
                        <hr className={'mb-5'} />
                        <p>
                            This login page was built using React and it is meant to illustrate my ability to build a single-page web application that mocks the authentication process
                            of a secured web application system.
                        </p>
                    </section>
                </div>

                <hr />
                <div className="text-center p-3 bg-dark">
                    © 2021 Copyright:
                    <a className="text-white" href="https://berkeley-gov.github.io/myportfolio.github.io/"> www.juanportfolio.com</a>
                </div>
            </footer>
        );
    }
}