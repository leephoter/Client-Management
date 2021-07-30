import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import Header from "../HEADER";
import MainContentPart from "../MainContentPart";

const ContentBox = styled.div`
    box-sizing: border-box;
    width: 850px;
    height: 800px;
    display: flex;
    float: inherit;
    flex-direction: column;
    border-left: solid gray 1px;
`;

const MainContentBox = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    /* background-color: greenyellow; */
    float: inherit;
    width: 100%;
    height: 700px;
    padding: 50px 30px 0 30px;
    flex-direction: column;
    align-items: center;
`;
const MainContent = styled.div`
    height: 20px;
`;

class ContentPartPresenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ContentBox>
                <Header />
                <MainContentPart />
            </ContentBox>
        );
    }
}

export default ContentPartPresenter;
