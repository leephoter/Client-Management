import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { lessons } from "../LessonGroup/LessonGroup";
import { list } from "../ClientList/ClientListDummy";
import { Link } from "react-router-dom";

const Lesson = styled(Link)`
    box-sizing: border-box;
    display: inline-flex;
    /* float: inherit; */
    outline: none;
    border-radius: 3px;
    margin-bottom: 7px;
    text-decoration: none;

    font-weight: bold;
    cursor: pointer;
    padding: 0;
    width: 98%;
    min-height: 40px;
    /* height: 40px; */
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: gray;
    background: #fff;
    border: solid 1px ${lighten(0.2, "#85a9ff")};
    color: #85a9ff;
    box-shadow: 0 3px 4px -1px ${lighten(0.1, "#85a9ff")};
    transition: all 300ms ease-out;

    &:hover {
        border: solid 1px ${lighten(0.1, "#85a9ff")};
        color: #85a9ff;
        box-shadow: 0 3px 4px -1px #85a9ff;
    }
    &:active {
        border: solid 1px ${darken(0.01, "#85a9ff")};
        color: #85a9ff;
    }
`;

export default class extends PureComponent {
    state = {
        list,
        lessons,
    };

    render() {
        const { clickLesson } = this.props;
        const { lessons } = this.state;
        return (
            <>
                {lessons.map((item, index) => (
                    <Lesson
                        name={item.name}
                        onClick={clickLesson}
                        // to="/homePayment"
                    >
                        {item.name}
                    </Lesson>
                ))}
            </>
        );
    }
}
