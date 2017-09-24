import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing.jsx';
import Profile from './components/Profile/Profile.jsx';
import Register from './components/Register/Register.jsx';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <div className="Router">
                    <Route exact path="/" render={(props) => {
                        return <Landing />
                    }} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/register" component={Register} />
                </div>
                </Router>
            </div>
        );
    }
}

export default App;
