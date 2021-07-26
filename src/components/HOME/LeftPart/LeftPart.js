import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";

const LeftBarBox = styled.div`
    box-sizing: border-box;
    display: inline-block;
    float: inherit;
    width: 280px;
    height: 100vh;
    // background-color: beige;
    padding: 30px 20px;
    border-right: solid gray 1px;
    margin-right: 10px;
`;

const LeftBar = styled.div`
    box-sizing: border-box;
    float: inherit;
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

class LeftPart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <LeftBarBox>
                <LeftBar>
                    <CalendarBox></CalendarBox>
                    <ClassBox>
                        <Classes>Class 1</Classes>
                        <Classes>Class 2</Classes>
                        <Classes>Class 1</Classes>
                        <Classes>Class 1</Classes>
                        <Classes>Class 1</Classes>
                        <Classes>Class 1</Classes>
                    </ClassBox>
                </LeftBar>
            </LeftBarBox>
        );
    }
}

export default LeftPart;
