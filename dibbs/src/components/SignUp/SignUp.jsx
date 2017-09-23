import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar.jsx';

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <NavBar />
                <div className="hero signup-hero">
                    <div className="hero-body">
                        <div className="field">
                            <div className="label">Organization</div>
                            <div className="control">
                            <input type="text" className="input"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;