import React, { useState, PureComponent } from "react";
import MainPage from "./pages/MAINPAGE";
import Join from "./pages/JOIN";
import Home from "./pages/HOME";
import Member from "./pages/Member";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                main: "/",
                join: "/join",
                home: "/home",
                member: "/member",
            },
        };
    }
    render() {
        const { pages } = this.state;
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={pages.main} component={MainPage} />
                    <Route path={pages.join} component={Join} />
                    <Route path={pages.home} component={Home} />
                    <Route path={pages.member} component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
