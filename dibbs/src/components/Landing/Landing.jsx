import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Cards from '../Cards/Cards.jsx';

import "./Landing.css";

let filterOptions = [
	"Distance",
	"Deadline",
	"Type: Cold",
	"Type: Frozen",
	"Type: Shelf",
	"Quantity"
]

class Landing extends Component {
	render() {
		return (
			<div class="Landing" >
				<div className="hero is-primary is-small">
					<Header />
					<div className="hero-body">
						<div className="section container">
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
				<div className="section">
					<div className="container level">
						<div className="level-left">
							<div className="level-item">
							<h2 className="subtitle is-4">OFFERINGS IN YOUR AREA </h2>
							</div>
						</div>
						<div className="level-right">
							<div className="level-item">
								<h2 className="subtitle is-6">FILTER BY</h2>
							</div>
							<div className="level-item">
								<div className="field">
									<div className="control">
										<div className="select">
											<select>
												{filterOptions.map((entry, index) => {
													return <option key={index}>{entry}</option>
												})}
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Cards />
				<Footer />
			</div>
		);
	}
}

export default Landing;