import React, { useState, PureComponent } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Attendance from "./pages/Attendance";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                main: "/",
                join: "/join",
                homePayment: "/homePayment",
                homeAttendance: "/homeAttendance",
                member: "/member",
                lesson: "/lesson",
                payment: "/payment",
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
                    <Route path={pages.homePayment} component={Home} />
                    <Route path={pages.homeAttendance} component={Attendance} />
                    <Route path={pages.member} component={Member} />
                    <Route path={pages.lesson} component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
