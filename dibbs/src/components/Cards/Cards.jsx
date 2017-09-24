import React, { Component } from 'react';

let foodCard = [
	{
		image: "https://cdn1.medicalnewstoday.com/content/images/headlines/316/316969/healthful-foods.jpg",
		name: "Bruno's Pizzaria",
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
		city: "Champaign",
		state: "IL",
		zip: 61820
	},
	{
		image: "https://cdn1.medicalnewstoday.com/content/images/headlines/316/316969/healthful-foods.jpg",
		name: "Bruno's Pizzaria",
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
		city: "Champaign",
		state: "IL",
		zip: 61820
	},
	{
		image: "https://cdn1.medicalnewstoday.com/content/images/headlines/316/316969/healthful-foods.jpg",
		name: "Bruno's Pizzaria",
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
		city: "Champaign",
		state: "IL",
		zip: 61820
	}
]

class Cards extends Component {
    render() {
        return(
            <div className="Cards">
            {foodCard.map((entry, index) => {
                return (<div className="food-card" key={index}>
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
                                                <h2 className="subtitle is-6">{entry.name}</h2>
                                                <h1 className="title is-4">{entry.title}</h1>
                                                <ul>
                                                    {entry.items.map((element, position) => {
                                                        return <li key={element.food}>
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
                                                <h2 className="subtitle is-6">{entry.city}, {entry.state} {entry.zip}</h2>
                                            </div>
                                        </div>
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