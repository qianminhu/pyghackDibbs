import React, { Component } from 'react';
import axios from 'axios';
import './ProfileInfo.css';

let profile = 	{
    name: "Bruno Marcetti",
    email: "bruno@marcetti.com",
    phone: "217 333 44 55",
    id: "47-1212121",
    image: "https://i.pinimg.com/736x/51/05/33/51053342ec28b078e2d5908afd16aec9--antipasto-tray-food-trays.jpg",
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
}

class ProfileInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
        profile: []
        };
    }

    componentWillMount() {
    axios.get(`https://api.dibbs.xyz/organization/1` , 
     { validateStatus: function (status) { console.log(status); return status == 200;} }).then(res => {
        const profileAPI = res.data.results;
		console.log(profileAPI);
        this.setState({ profileAPI });
      }).catch(function (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log("We NEED to login");
          //  Route.Redirect("/Login");

        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);

        } else {
            console.log('Error - Something happened in setting up the request');
        }

        console.log(error);
    });
  }

    render() {
        console.log("RENDER");
        console.log(this.state.profile);
      //  let profile = this.state.profile
        return(
            <div className="ProfileInfo">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <article className="media">
                                <div className="media-content">
                                    <p className="image is-256x256">
                                        <img src="https://i.pinimg.com/736x/51/05/33/51053342ec28b078e2d5908afd16aec9--antipasto-tray-food-trays.jpg" alt="profile123"/>
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className="column is-half text-column">
                            <h1 className="title is-3">{profile.name}</h1>
                            <h1 className="title is-5">{profile.address}</h1>
                            <h1 className="subtitle is-6">{profile.address2}</h1>
                            <h1 className="title is-6">{profile.city}, {profile.state} {profile.zip}</h1>
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title is-6">Name</h1>
                                    <h1 className="subtitle is-6">{profile.name}</h1>
                                    <div></div>
                                    <h1 className="title is-6">Phone</h1>
                                    <h1 className="subtitle is-6">{profile.phone}</h1>
                                </div>
                                <div className="column">
                                    <h1 className="title is-6">Email</h1>
                                    <h1 className="subtitle is-6">{profile.email}</h1>
                                    <div></div>
                                    <h1 className="title is-6">Company Tax ID</h1>
                                    <h1 className="subtitle is-6">{profile.id}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="column text-column">
                            <button className="button is-primary">EDIT PROFILE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;