import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import Calendar from "../Calendar";

const LeftBar = styled.div`
    box-sizing: border-box;
    float: inherit;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CalendarBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 230px;
    margin-bottom: 30px;
    border: solid black 1px;
    border-radius: 7px;
    background-color: #dddddd;
`;

const ClassBox = styled.div`
    float: inherit;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-height: 190px;
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
    background: #8cc0ff;
    font-weight: bold;
    color: white;

    &:hover {
        background: ${lighten(0.1, "#85a9ff")};
        border: none;
        color: rgb(150, 150, 150);
        width: 100%;
    }
    &:active {
        background: ${darken(0.1, "#85a9ff")};
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
            <LeftBar>
                <CalendarBox>
                    <Calendar />
                </CalendarBox>
                <ClassBox>
                    <Classes>Class 1</Classes>
                    <Classes>Class 2</Classes>
                    <Classes>Class 1</Classes>
                    <Classes>Class 1</Classes>
                    <Classes>Class 1</Classes>
                    <Classes>Class 1</Classes>
                </ClassBox>
            </LeftBar>
        );
    }
}

export default LeftPart;
