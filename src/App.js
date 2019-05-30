import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "./homepage/App.js";
import FoodPage from "./foodpage";

class App extends Component {

    render() {
        return (
            <div className="body">
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="meal/:number" component={FoodPage}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;