import React, { useState } from "react";
import Main from "./components/MAIN/Main";
import Home from "./components/HOME/Home";
import Dummy from "./components/HOME/Dummy";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route exact path="/" component={Main} />
                <Route exact path="/home" component={Home} />
            </BrowserRouter>
        </>
    );
};

export default App;
