import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false};
    }
    render() {
        if (!this.state.isLoggedIn) {
            return(
                <div className="Header">
                    <div className="hero-head">
                        <header className="nav">
                            <div className="nav-right">
                                <button className="button is-warning register">REGISTER</button>
                                <button className="button is-primary register"><strong>LOGIN</strong></button>
                            </div>
                        </header>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="Header">
                    <div className="hero-head">
                        <header className="nav">
                            <div className="nav-right">
                                <button className="button is-warning register"><span className="span">DONATE NOW</span><span className="icon"><i className="fa fa-dollar"></i></span></button>
                                <button className="button is-primary register"><span className="span">MY PROFILE</span><span className="icon"><i className="fa fa-user"></i></span></button>
                                <button className="button is-primary register"><span className="span">LOGOUT</span><span className="icon"><i className="fa fa-sign-out"></i></span></button>
                            </div>
                        </header>
                    </div>
                </div>
            );
        }
    }
}

export default Header;