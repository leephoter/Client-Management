import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import Header from "../Header";
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

export default class ContentPartPresenter extends PureComponent {
    render() {
        const { pathname } = this.props;
        return (
            <ContentBox>
                <Header />
                <MainContentPart pathname={pathname} />
            </ContentBox>
        );
    }
}
