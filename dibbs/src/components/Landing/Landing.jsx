import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Cards from '../Cards/Cards.jsx';
import Offerings from '../Offerings/Offerings.jsx';

import "./Landing.css";

class Landing extends Component {
	render() {
		return (
			<div className="Landing" >
				<div className="hero is-primary is-small">
					<Header />
					<div className="hero-body">
						<div className="section container">
							<img src="https://i.imgur.com/U01GsDY.png" alt="Dibbs Logo"/>
							<h3 className="subtitle is-3 main-subtitle">Save food. Do good.</h3>
						</div>
					</div>
					<div className="head-foot">
						<div className="container zip-code">
							<div className="card landing-card">
								<div className="card-content">
									<div className="columns level">
										<div className="column">
											<p><strong>I am in</strong></p>
										</div>
										<div className="column is-half">
											<div className="control has-icons-left">
												<input type="text" placeholder="City or Zip" className="input"/>
												<span className="icon is-small is-left">
													<i className="fa fa-address-book-o"></i>
												</span>
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
				<Offerings />
				<Cards buttonInfo="DIBBS"/>
				<Footer />
			</div>
		);
	}
}

export default Landing;