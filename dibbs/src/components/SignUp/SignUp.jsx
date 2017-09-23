import React, { Component } from 'react';

import Footer from '../Footer/Footer.jsx';

import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <div className="hero is-primary">
                    <div className="hero-body">
                        <h1 className="title">Welcome to the team!</h1>
                        <h2 className="subtitle">We just need a couple of things.</h2>
                    </div>
                </div>
                <div className="signup-form section">
                    <div className="container">
                        <div className="field">
                            <div className="columns">
                                <div className="column">
                                    <div className="label">Name</div>
                                    <div className="control">
                                        <input type="text" className="input"/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="control">
                                    <div className="label">Email</div>
                                        <input type="text" className="input"/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="label">Phone Number</div>
                                    <div className="control">
                                        <input type="text" className="input"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="columns">
                                <div className="column is-two-thirds">
                                    <div className="label">Address</div>
                                    <div className="control">
                                        <input type="text" className="input"/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="label">State</div>
                                    <div className="control">
                                        <div className="select">
                                            <select>
                                                <option>CA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="label">Zip Code</div>
                                    <div className="control">
                                        <input type="text" className="input"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SignUp;