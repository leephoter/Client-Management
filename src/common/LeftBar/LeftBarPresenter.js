import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";

const LeftBarBox = styled.div`
    box-sizing: border-box;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
    height: 800px;
    padding: 30px 20px;
    border-right: solid gray 1px;
    margin-right: 10px;
`;
const LeftBar = styled.div`
    box-sizing: border-box;
    float: inherit;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CalendarWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 230px;
    margin-bottom: 30px;
    border: solid black 1px;
    border-radius: 7px;
    /* background-color: #dddddd; */
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

export default class LeftBarPresenter extends PureComponent {
    render() {
        return (
            <LeftBarBox>
                <LeftBar>
                    <CalendarWrapper>{/* <Calendar /> */}</CalendarWrapper>
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
