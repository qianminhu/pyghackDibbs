import React, { Component } from 'react';

let filterOptions = [
	"Distance",
	"Deadline",
	"Type: Cold",
	"Type: Frozen",
	"Type: Shelf",
	"Quantity"
]

class Offerings extends Component {
    render() {
        return(
            <div className="Offerings">
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
            </div>
        );
    }
}

export default Offerings;