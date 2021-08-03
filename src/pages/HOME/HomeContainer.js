import React, { PureComponent } from "react";
import HomePresenter from "./HomePresenter";
import styled from "styled-components";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { pathname } = this.props.history.location;
        return <HomePresenter pathname={pathname} />;
    }
}
