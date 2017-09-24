import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import ProfileInfo from './ProfileInfo.jsx';
import Cards from '../Cards/Cards.jsx';
import Offerings from '../Offerings/Offerings.jsx';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            donor: true,
            profileId: 1
        };
        console.log(this);
    }

    handleClick() {
        this.setState({
            donor: !this.state.donor
        });
        console.log(this.state.donor);
    }

    render() {
        return(
            <div className="Profile">
                <div className="hero is-primary is-small">
                    <Header />
                    <div className="hero-body">
                        <ProfileInfo id="{this.state.profileId}" />
                    </div>
                    <div className="hero-foot">
                        <nav className="tabs is-boxed is-fullwidth">
                            <div className="container">
                                { this.state.donor ? (
                                    <ul>
                                        <li className="is-active"><a><strong>DONATIONS</strong></a></li>
                                        <li><a onClick={this.handleClick.bind(this)}><strong>DIBBS</strong></a></li>
                                    </ul>
                                ) : (
                                    <ul>
                                        <li><a onClick={this.handleClick.bind(this)}><strong>DONATIONS</strong></a></li>
                                        <li className="is-active"><a><strong>DIBBS</strong></a></li>
                                    </ul>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
                <Offerings />
                {this.state.donor ?
                (<Cards buttonInfo="DIBBS"/>) : (<Cards buttonInfo="ACTIVE"/>)
                }
                <Footer />
            </div>
        );
    }
}

export default Profile;