import React, { useState, PureComponent } from "react";
import Home from "./components/HOME/Home";
import JoinButtons from "./components/MAIN/Buttons/Join";
import LoginButtons from "./components/MAIN/Buttons/LoginButton";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

class App extends PureComponent {
    state = { isLoading: true };
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginButtons} />
                    <Route path="/join/" component={JoinButtons} />
                    <Route path="/home/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
