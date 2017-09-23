import React, { Component } from 'react';

import Footer from '../Footer/Footer.jsx';

import "./Landing.css";

class Landing extends Component {
	render() {
		return (
			<div class="Landing" >
				<div className="hero is-primary is-medium">
					<div className="hero-head">
						<header className="nav">
							<div className="nav-right">
								<button className="button is-warning register">REGISTER</button>
								<button className="button is-primary register"><strong>LOGIN</strong></button>
							</div>
						</header>
					</div>
					<div className="hero-body">
						<div className="container">
							<h1 className="title is-1">Dibbs</h1>
							<h2 className="subtitle is-3">Save food. Do good.</h2>
						</div>
					</div>
					<div className="head-foot">
						<div className="container zip-code">
							<div className="card">
								<div className="card-content">
									<div className="columns level">
										<div className="column">
											<p><strong>I am in</strong></p>
										</div>
										<div className="column is-half">
											<div className="control">
												<input type="text" placeholder="City or Zip" className="input"/>
											</div>
										</div>
										<div className="column">
											<button className="button is-warning">SHOW ME</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			< Footer/>
			</div>
		);
	}
}

export default Landing;