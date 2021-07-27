import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";

const HeaderBarBox = styled.div`
    box-sizing: border-box;
    // display: inline-block;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid gray 1px;
    padding: 10px 0;
    width: 100%;
    height: 100px;
    // background-color: rgb(193, 193, 193);
    overflow: scroll;
`;

const TransButton = css`
    ${(props) =>
        css`
            ${props}::after {
                content: "abc";
                position: absolute;
                width: 0;
                height: 2px;
                background-color: rgb(31, 72, 255);
                bottom: 0;
                left: 0;
                transition: all 150ms ease-out;
            }
            &:hover::after {
                /* 요소:hover::after ->> 마우스를 요소에 올렷을 때 */
                width: 100%;
                background-color: yellowgreen;
            }
        `}
`;

const HeaderMenu = styled.button`
    box-sizing: border-box;
    width: 120px;
    height: 100%;
    font-size: 20px;
    cursor: pointer;
    float: inherit;
    outline: none;
    padding: 0 20px;
    border: none;
    border-radius: 10px;
    transition: all 200ms ease-out;
    background-color: white;
    color: rgb(82, 82, 82);
    transition: all 150ms ease-out;
    &:hover {
        // background: ${lighten(0.1, "#85a9ff")};
        box-shadow: 0 7px 15px -5px #85a9ff;
    }
    &:active {
        // background: ${darken(0.1, "#85a9ff")};
        border: #aac4ff solid 0.1px;
        box-shadow: none;
        transition: none;
        // color: white;
    }
    // &:after {
    //     content: "";
    //     position: absolute;
    //     width: 0;
    //     height: 2px;
    //     background-color: rgb(31, 72, 255);
    //     bottom: 0;
    //     left: 0;
    //     transition: all 150ms ease-out;
    // }
    // &:hover:after {
    //     /* 요소:hover::after ->> 마우스를 요소에 올렷을 때 */
    //     width: 100%;
    //     background-color: yellowgreen;
    // }
`;

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <HeaderBarBox>
                <HeaderMenu>Home</HeaderMenu>
                <HeaderMenu>Member</HeaderMenu>
                <HeaderMenu>Class</HeaderMenu>
            </HeaderBarBox>
        );
    }
}

export default Header;
