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
    border: none;
    /* border-radius: 40px; */
    transition: all 200ms ease-out;
    color: rgb(82, 82, 82);
    transition: all 150ms ease-out;
    &:hover {
        background: ${lighten(0.1, "#85a9ff")};
        box-shadow: 0 7px 15px -5px #85a9ff;
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
`;

const TopHeader = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = () => {
        console.log("123");
    };

    return (
        <>
            <newAppBar position="static">
                <newTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Main Tabs"
                >
                    <HeaderMenu label="Home" />
                    <HeaderMenu onClick={handleClick} label="Member" />
                    <HeaderMenu label="Lesson" />
                </newTabs>
            </newAppBar>
        </>
    );
};

class HeaderMenuPresenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <TopHeader></TopHeader>
            </>
        );
    }
}

export default HeaderMenuPresenter;

// export default TopHeader;
