import React, { Component } from 'react';

import './SignUp.css';

let states = [
    "AL", "AK", "AZ", "AR",
    "CA", "CO", "CT", "DE",
    "FL", "GA", "HI",
    "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME",
    "MD", "MA", "MI", "MN",
    "MS", "MO", "MT", "NE",
    "NV", "NH", "NJ", "NM",
    "NY", "NC", "ND", "OH",
    "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX",
    "UT", "VT", "VA", "WA",
    "WV", "WI", "WY"
]

class SignUp extends Component {
    constructor() {
        super();
        this.state = {warning: false};
    }

    handleCancel() {
        window.location.reload();
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value})
    }

    handleAddress1Change(e) {
        this.setState({address1: e.target.value})
    }

    handleAddress2Change(e) {
        this.setState({address2: e.target.value})
    }

    handleStateChange(e) {
        this.setState({state: e.target.value})
    }

    handleZipChange(e) {
        this.setState({zip: e.target.value})
    }

    handleCompanyChange(e) {
        this.setState({business: e.target.value})
    }

    handleIDChange(e) {
        this.setState({id: e.target.value})
    }

    handleWarningClick() {
        this.setState({warning: false});
    }

    handleSubmit() {
        if (this.state.id === undefined) {
            // TODO: You will need to check more than just the last field. I am too lazy right now.
            this.setState({warning: true});
        } else {
            window.location.assign(window.location.href);
        }
    }

    render() {
        return (
            <div className="SignUp">
                {this.state.warning ? 
                (
                    <div className="notification is-danger"><button className="delete" onClick={this.handleWarningClick.bind(this)}></button> Please fill out all fields.</div>
                ) : (
                    <div></div>
                )
                }
                <div className="signup-form section">
                    <div className="container">
                        <div className="field">
                            <div className="columns">
                                <div className="column">
                                    <div className="label">Name</div>
                                    <div className="control">
                                        <input type="text" className="input" onChange={this.handleNameChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="control">
                                    <div className="label">Email</div>
                                        <input type="text" className="input" onChange={this.handleEmailChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="label">Phone Number</div>
                                    <div className="control">
                                        <input type="text" className="input" onChange={this.handlePhoneChange.bind(this)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-one-third">
                                    <div className="label">Address 1</div>
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Street, P.O. Box, C/O" onChange={this.handleAddress1Change.bind(this)}/>
                                    </div>
                                </div>
                                <div className="column is-one-third">
                                    <div className="label">Address 2</div>
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Apt, Suite, Building, etc." onChange={this.handleAddress2Change.bind(this)}/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="label">State</div>
                                    <div className="control">
                                        <div className="select" onChange={this.handleStateChange.bind(this)}>
                                            <select>
                                                {states.map((entry, index) => {
                                                    return(
                                                        <option key={index}>{entry}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="label">Zip Code</div>
                                    <div className="control">
                                        <input type="text" className="input" onChange={this.handleZipChange.bind(this)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="label">Company Name</div>
                                    <div className="control">
                                        <input type="text" className="input" onChange={this.handleCompanyChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="label">Company EIN / Tax ID</div>
                                    <div className="control">
                                        <input type="text" className="input" onChange={this.handleIDChange.bind(this)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-light" onClick={this.handleCancel.bind(this)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;