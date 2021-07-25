import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import SubComponentsPickers from "./DatePicker/DatePicker";
// import LoginButtons from "./Buttons/LoginButton";
// import JoinButtons from "./Buttons/Join";
// import { BrowserRouter, Route, Link } from "react-router-dom";

const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    // background-color: rgb(255, 227, 232);
    padding: 0 100px;
`;

const LeftBarBox = styled.div`
    box-sizing: border-box;
    display: inline-block;
    width: 350px;
    height: 100vh;
    // background-color: beige;
    padding: 30px 20px;
    border-right: solid gray 1px;
    margin-right: 10px;
`;

const LeftBar = styled.div`
    box-sizing: border-box;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // background-color: rgb(222, 222, 222);
`;

const CalendarBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 230px;
    // background-color: blue;
    margin-bottom: 5vh;
    border: solid black 1px;
    border-radius: 7px;
`;

const ClassBox = styled.div`
// display: flex;
float: inherit;
flex-direction: column;
box-sizing: border-box;
width: 100%
height: 50px;
// background-color: blue;
max-height: 230px;
overflow: scroll;
`;

const Classes = styled.button`
    box-sizing: border-box;
    display: inline-flex;
    float: inherit;
    outline: none;
    border: none;
    border-radius: 4px;
    margin-bottom: 7px;

    font-weight: bold;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: gray;
    // background: #85a9ff;

    &:hover {
        // background: ${lighten(0.1, "#85a9ff")};
        border: none;
        color: white;
        width: 100%;
    }
    &:active {
        // background: ${darken(0.1, "#85a9ff")};
        border: none;
        color: white;
    }
`;

const ContentBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    float: inherit;
    flex-direction: column;
    border-left: solid gray 1px;
`;

const HeaderBarBox = styled.div`
    box-sizing: border-box;
    // display: inline-block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid gray 1px;
    padding: 0 50px;
    width: 100%;
    height: 100px;
    // background-color: rgb(193, 193, 193);
    overflow: scroll;
`;

const TransButton = css`
    ${(props) =>
        css`
            &::after {
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
    width: 150px;
    height: 100%;
    font-size: 20px;
    cursor: pointer;
    float: inherit;
    outline: none;
    padding: 0 20px;
    border: none;
    border-radius: 4px;
    transition: all 200ms ease-out;
    &:hover {
        background: ${lighten(0.1, "#85a9ff")};
        color: white;
    }
    &:active {
        // background: ${darken(0.1, "#85a9ff")};
        border: none;
        color: white;
    }
    &::after {
        content: "";
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
`;

const MainContentBox = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    background-color: greenyellow;
    float: inherit;
    width: 100%;
    height: 100vh;
    padding: 50px 30px 0 30px;
    flex-direction: column;
    // justify-contens: center;
    // align-items: center;
`;
const MainContent = styled.div`
    height: 20px;
    background-color: gray;
`;

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Whole>
                <LeftBarBox>
                    <LeftBar>
                        <CalendarBox></CalendarBox>
                        <ClassBox>
                            <Classes>Class 1</Classes>
                            <Classes>Class 1</Classes>
                            <Classes>Class 1</Classes>
                            <Classes>Class 1</Classes>
                            <Classes>Class 1</Classes>
                            <Classes>Class 1</Classes>
                        </ClassBox>
                    </LeftBar>
                </LeftBarBox>
                <ContentBox>
                    <HeaderBarBox>
                        <HeaderMenu>Menu1</HeaderMenu>
                        <HeaderMenu>Menu1</HeaderMenu>
                        <HeaderMenu>Menu1</HeaderMenu>
                        <HeaderMenu>Menu1</HeaderMenu>
                    </HeaderBarBox>
                    <MainContentBox>
                        <MainContent>1</MainContent>
                        <MainContent>2</MainContent>
                    </MainContentBox>
                </ContentBox>
                {/* <LeftBarBox></LeftBarBox> */}
            </Whole>
        );
    }
}

export default Home;
