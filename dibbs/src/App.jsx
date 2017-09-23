import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing.jsx';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <div className="Router">
                    <Route exact path="/" component={Landing} />
                </div>
                </Router>
            </div>
        );
    }
}

export default App;
