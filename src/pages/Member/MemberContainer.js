import React, { PureComponent } from "react";
import MemberPresenter from "./MemberPresenter";
import styled from "styled-components";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // console.log("this.props :>> ", this.props.history.location.pathname);
        return <MemberPresenter />;
    }
}
