import React, { PureComponent, useState } from "react";
import MainContentPartPresenter from "./MainContentPartPresenter";

class MainContentPartContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <MainContentPartPresenter />;
    }
}

export default MainContentPartContainer;
