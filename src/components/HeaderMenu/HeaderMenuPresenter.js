import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

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

const HeaderMenu = styled(Tab)`
    box-sizing: border-box;
    width: 120px;
    height: 100%;
    font-size: 40px;
    cursor: pointer;
    float: inherit;
    outline: none;
    padding: 0 20px;
    border: 1px solid gray;
    color: #ffffff;
    background-color: gray;
    transition: all 150ms ease-out;
    &:hover {
        background: ${lighten(0.1, "#85a9ff")};
        box-shadow: 0 7px 15px -5px #85a9ff;
        border-radius: 10px;
    }
    &:active {
        background: ${darken(0.1, "#85a9ff")};
        border: #aac4ff solid 0.1px;
        box-shadow: none;
        transition: none;
    }
`;

const newAppBar = styled(AppBar)`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const newTabs = styled(Tabs)`
    width: 400px;
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: black;
`;

class HeaderMenuPresenter extends PureComponent {
    render() {
        const { pages, value, handleChange } = this.props;
        return (
            <newAppBar position="static">
                <newTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Main Tabs"
                >
                    <HeaderMenu label="home" component={Link} to={pages.home} />
                    <HeaderMenu
                        // onClick={handleClick}
                        label="Member"
                        component={Link}
                        to={pages.member}
                    />
                    <HeaderMenu
                        label="Lesson"
                        component={Link}
                        to={pages.lesson}
                    />
                </newTabs>
            </newAppBar>
        );
    }
}

export default HeaderMenuPresenter;
