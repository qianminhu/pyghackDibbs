import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            modalActive: false,
            modal: "modal",
            warning: false
        };
    }

    handleModalClick() {
        const currentState = this.state.modalActive;
        const nextState = !currentState;
        this.setState(
            {modalActive: nextState},
            function () {
                this.state.modalActive ? (this.setState({modal: "modal is-active"})) : (this.setState({modal: "modal"}));
            }
        );
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleLoginClick() {
        console.log(this.state.email);
        console.log(this.state.password);
        if (this.state.email === undefined || this.state.password === undefined) {
            this.setState({warning: true})
        } else {
            this.setState({
                modalActive: false
            }, function() {
                this.setState(this.state);
            }
        );
        }
    }

    handleWarningClick() {
        this.setState({warning: false});
    }

    render() {
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
                            {this.state.isLoggedIn ? 
                                (
                                <div>
                                    <Link to="/"><button className="button is-primary register"><span className="span">LOGOUT</span><span className="icon"><i className="fa fa-sign-out"></i></span></button></Link>
                                    <Link to="/profile"><button className="button is-primary register"><span className="span">MY PROFILE</span><span className="icon"><i className="fa fa-user"></i></span></button></Link>
                                    <button className="button is-warning register"><span className="span">DONATE NOW</span><span className="icon"><i className="fa fa-dollar"></i></span></button>
                                </div>
                                ) :
                                (
                                <div>
                                    <button className="button is-primary register" onClick={this.handleModalClick.bind(this)}><strong>LOGIN</strong></button>
                                    <button className="button is-warning register"><Link to="/register">REGISTER</Link></button>
                                </div>
                                )
                            }
                        </div>
                    </header>
                </div>
                <div className={this.state.modal}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <h1 className="modal-card-title">Welcome Back!</h1>
                        </header>
                        <section className="modal-card-body">
                            {this.state.warning ? 
                            (
                                <div className="notification is-danger"><button className="delete" onClick={this.handleWarningClick.bind(this)}></button>Please enter email and password.</div>
                            ) : (
                                <div></div>
                            )
                            }
                            <div className="field login-form">
                                <div className="label">Email</div>
                                <div className="control has-icons-left">
                                    <input type="email" className="input" autoFocus onChange={this.handleEmailChange.bind(this)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                </div>
                                <div className="label">Password</div>
                                <div className="control has-icons-left">
                                    <input type="password" className="input" onChange={this.handlePasswordChange.bind(this)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-key"></i>
                                    </span>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <Link to="/profile"><button className="button is-success" onClick={this.handleLoginClick.bind(this)}>LOGIN</button></Link>
                            <Link to="/"><button className="button is-light" onClick={this.handleModalClick.bind(this)}>CANCEL</button></Link>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;