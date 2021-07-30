import React, { useState, PureComponent } from "react";
import MainPage from "./pages/MAINPAGE";
import Join from "./pages/JOIN";
import Home from "./pages/HOME";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

class App extends PureComponent {
    state = { isLoading: true };
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/join" component={Join} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
