import React, { Component } from 'react';

import './Cards.css';

let foodCard = [
	{
        name: "Bruno Marcetti",
        email: "bruno@marcetti.com",
        phone: "217 333 44 55",
        id: "47-1212121",
        image: "https://cdn1.medicalnewstoday.com/content/images/headlines/316/316969/healthful-foods.jpg",
        bimage: "https://i.pinimg.com/736x/51/05/33/51053342ec28b078e2d5908afd16aec9--antipasto-tray-food-trays.jpg",
		business: "Bruno's Pizzaria",
		title: "Fruits & Vegies",
		items: [
			{
				food: "Strawberies",
				quantity: "2",
				weight: "lbs"
			},
			{
				food: "Kale",
				quantity: "4",
				weight: "lbs"
			},
			{
				food: "Oats",
				quantity: "40",
				weight: "lbs"
			},
		],
		tags: [
			"Perish Other",
			"Non - Perish"
		],
		time: "6:00PM",
		date: "Sep 24",
        address1: "60 Hazelwood Dr",
        address2: "Suite 600, Building A",
		city: "Champaign",
		state: "IL",
        zip: 61820,
        available: true
	},
	{
        name: "Bruno Marcetti",
        email: "bruno@marcetti.com",
        phone: "217 333 44 55",
        id: "47-1212121",
        image: "https://cdn1.medicalnewstoday.com/content/images/headlines/316/316969/healthful-foods.jpg",
        bimage: "https://i.pinimg.com/736x/51/05/33/51053342ec28b078e2d5908afd16aec9--antipasto-tray-food-trays.jpg",
		business: "Bruno's Pizzaria",
		title: "Fruits & Vegies",
		items: [
			{
				food: "Strawberies",
				quantity: "2",
				weight: "lbs"
			},
			{
				food: "Kale",
				quantity: "4",
				weight: "lbs"
			},
			{
				food: "Oats",
				quantity: "40",
				weight: "lbs"
			},
		],
		tags: [
			"Perish Other",
			"Non - Perish"
		],
		time: "6:00PM",
		date: "Sep 24",
		address1: "60 Hazelwood Dr",
        address2: "Suite 600, Building A",
		city: "Champaign",
		state: "IL",
		zip: 61820,
        available: true
	},
	{
        name: "Bruno Marcetti",
        email: "bruno@marcetti.com",
        phone: "217 333 44 55",
        id: "47-1212121",
        image: "https://cdn1.medicalnewstoday.com/content/images/headlines/316/316969/healthful-foods.jpg",
        bimage: "https://i.pinimg.com/736x/51/05/33/51053342ec28b078e2d5908afd16aec9--antipasto-tray-food-trays.jpg",
		business: "Bruno's Pizzaria",
		title: "Fruits & Vegies",
		items: [
			{
				food: "Strawberies",
				quantity: "2",
				weight: "lbs"
			},
			{
				food: "Kale",
				quantity: "4",
				weight: "lbs"
			},
			{
				food: "Oats",
				quantity: "40",
				weight: "lbs"
			},
		],
		tags: [
			"Perish Other",
			"Non - Perish"
		],
		time: "6:00PM",
		date: "Sep 24",
		address1: "60 Hazelwood Dr",
        address2: "Suite 600, Building A",
		city: "Champaign",
		state: "IL",
		zip: 61820,
        available: false
	}
]

class Cards extends Component {
    render() {
        return(
            <div className="Cards">
            {foodCard.map((entry, index) => {
                return (<div className="food-card" key={index + "a"}>
                    <div className="container">
                        <div className="card">
                            <div className="columns">
                                <div className="column is-2">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={entry.image} alt={entry.image}/>
                                        </figure>
                                    </div>
                                </div>
                                <div className="column left-text">
                                    <div className="hero is-small">
                                        <div className="hero-body">
                                            <h2 className="subtitle is-6">{entry.business}</h2>
                                            <h1 className="title is-4">{entry.title}</h1>
                                            <ul>
                                                {entry.items.map((element, position) => {
                                                    return <li key={position + "b"}>
                                                        <icon className="icon fa fa-angle-right"></icon><span>{element.food} - {element.quantity} {element.weight}</span>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column right-text">
                                    <div className="hero is-small">
                                        <div className="hero-body">
                                            <h2 className="subtitle is-6">PICK UP BY</h2>
                                            <h1 className="title is-4">{entry.time} {entry.date}</h1>
                                            <h2 className="title is-6">{entry.address1}</h2>
                                            <h2 className="subtitle is-6">{entry.address2}</h2>
                                            <h2 className="title is-6">{entry.city}, {entry.state} {entry.zip}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="card-footer-item">
                                    {entry.tags.map((element, position) => {
                                        if (element === "Perish Other") {
                                            return(
                                                <span className="tag item-tag is-danger" key={position + "c"}>{element}</span>
                                            );
                                        } else if (element === "Non - Perish"){
                                            return(
                                                <span className="tag item-tag is-success" key={position + "c"}>{element}</span>
                                            );
                                        } else {
                                            return(
                                                <span className="tag item-tag" key={position + "c"}>{element}</span>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="card-footer-item">
                                    {this.props.buttonInfo === "DIBBS" ?
                                    (<button className="button is-warning"><strong>{this.props.buttonInfo}</strong></button>):
                                    (entry.available ? 
                                    (<button className="button is-warning"><strong>{this.props.buttonInfo}</strong></button>): 
                                    (<button className="button is-static"><strong>{this.props.buttonInfo}</strong></button>))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>);
                })}
            </div>
        );
    }
}

export default Cards;