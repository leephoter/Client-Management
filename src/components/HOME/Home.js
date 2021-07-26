import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import LeftPart from "./LeftPart/LeftPart";
import ContentPart from "./ContentPart/ContentPart";

const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    // background-color: rgb(255, 227, 232);
    padding: 0 50px;
`;

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Whole>
                <LeftPart></LeftPart>
                <ContentPart></ContentPart>
            </Whole>
        );
    }
}

export default Home;
