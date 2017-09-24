import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SignUp from '../SignUp/SignUp.jsx';

class Register extends Component {
    render() {
        return(
            <div className="Register">
                <div className="hero is-primary is-small">
                    <Header />
                    <div className="hero-body">
                        <h1 className="title is-1">Join the Team</h1>
                        <h1 className="subtitle is-3">Be the change you want to see.</h1>
                    </div>
                </div>
                <SignUp />
                <Footer />
            </div>
        );
    }
}

export default Register;