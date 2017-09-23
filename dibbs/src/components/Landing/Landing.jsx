import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div class="Landing" >
        <div className="hero is-fullheight is-primary">
          <nav className="level">
            <Link to="/">
              <span className="icon is-large">
                <i className="fa fa-apple fa-2x"></i>
              </span>
            </Link>
          </nav>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Dibbs</h1>
              <h2 className="subtitle">Save food. Do good.</h2>
              <button className="button is-primary is-inverted is-outlined">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;