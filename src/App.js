import React from 'react';
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div>
                    <Switch>
                        <Route path="/positions">
                            <div>positions</div>
                        </Route>
                        <Route path="/">
                            <div>home</div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
