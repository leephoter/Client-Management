import React, { PureComponent } from "react";
import HomePresenter from "./HomePresenter";
import styled from "styled-components";

class HomeContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <HomePresenter />;
    }
}

export default HomeContainer;
