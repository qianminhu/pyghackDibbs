import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                            <div className="nav-left">
                                <div className="nav-item">
                                    <h1 className="title"><Link to="/">Dibbs</Link></h1>
                                </div>
                            </div>
                            <div className="nav-right">
                                <button className="button is-warning register"><Link to="/register">REGISTER</Link></button>
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
                            <div className="nav-left">
                                <div className="nav-item">
                                    <h1 className="title">Dibbs</h1>
                                </div>
                            </div>
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