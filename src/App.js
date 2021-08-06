import React, { useState, PureComponent } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
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
                lesson: "/lesson",
            },
        };
    }
    render() {
        const { pages } = this.state;
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={pages.main} component={Login} />
                    <Route path={pages.join} component={Login} />
                    <Route path={pages.home} component={Home} />
                    <Route path={pages.member} component={Home} />
                    <Route path={pages.lesson} component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
