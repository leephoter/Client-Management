import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import HeaderMenu from "../../components/HeaderMenu";
import { darken, lighten } from "polished";

const HeaderBarBox = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: solid gray 1px;
    padding-left: 20px;
    width: 100%;
    height: 100px;
    overflow: scroll;
`;

class HeaderPresenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <HeaderBarBox>
                <HeaderMenu />
            </HeaderBarBox>
        );
    }
}

export default HeaderPresenter;
