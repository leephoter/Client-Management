import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import Header from "../Header/Header";

const MainContentBox = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    // background-color: greenyellow;
    float: inherit;
    width: 100%;
    height: 100vh;
    padding: 50px 30px 0 30px;
    color: green;
    flex-direction: column;
    // justify-content: flex-start;
    align-items: center;
`;
const MainContent = styled.div`
    height: 20px;
`;

class MainContentPart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <MainContentPart></MainContentPart>;
    }
}

export default MainContentPart;
