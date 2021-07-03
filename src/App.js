import React from 'react';
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {Options} from "./features/options/Options";

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
                            <Options />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
