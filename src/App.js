import React, { useState, PureComponent } from "react";
import Main from "./pages/MAIN";
import Home from "./pages/HOME/Home";
import Join from "./pages/Join";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

class App extends PureComponent {
    state = { isLoading: true };
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/join" component={Join} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
