import React, { Component } from 'react';
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div class="Landing" >
        <div className="hero is-fullheight is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Dibbs</h1>
              <h2 className="subtitle is-3">Save food. Do good.</h2>
              <button className="button is-primary is-inverted is-outlined get-started">Get Started</button>
              <button className="button is-primary is-inverted is-outlined sign-in">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;