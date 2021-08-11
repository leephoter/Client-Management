import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { lessons } from "../LessonGroup/LessonGroup";

const Lesson = styled.button`
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

export default class extends PureComponent {
    state = {
        lessons,
    };

    render() {
        const { lessons } = this.state;
        return (
            <>
                {lessons.map((item, index) => (
                    <Lesson>{item.name}</Lesson>
                ))}
            </>
        );
    }
}
