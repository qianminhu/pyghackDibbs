import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <div className="Router">
                    <Route exact path="/" component={Landing} />
                    <Route path="/signup" component={SignUp} />
                </div>
                </Router>
            </div>
        );
    }
}

export default App;
