import React, { Component } from 'react';
import logo from '../../assets/logo-color.png';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img src={logo} alt="Dibs | Save food. Do good."/>
            </div>
            <button className="button is-white navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item">
                  <h1 className="title is-3">Dibbs</h1>
                </div>
              </div>
              <div className="navbar-end">

              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;