import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";
const AttendanceWrapperP = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 700px;
    height: 100%;
    padding: 0 30px;
    overflow: scroll;
`;

const TitlesP = styled.span`
    box-sizing: border-box;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #80a9ff;
`;

const ButtonsWrapperP = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: none;
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
`;

const AttendButtonsP = styled.button`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    color: ${darken(0.01, "#85a9ff")};
    margin-right: 10px;
    border: solid white 1px;
    border-radius: 7px;
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    width: auto;
    height: 30px;
    cursor: pointer;
    &:hover {
    }
`;

const ListWrapperP = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

const ListLineP = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 840px;
    height: 30px;
    border: none;
    margin: 10px 0;
`;

const CheckAllP = styled.button`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    color: gray;
    margin: 0 5px;
    border: solid white 1px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: bold;
    width: 35px;
    height: 25px;
    background-color: white;
    border: solid
        ${(props) => {
            if (props.title === "title") {
                return "white";
            } else {
                return "#dddddd";
            }
        }}
        1px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background: ${darken(0.01, "#dddddd")};
    }
`;
const ListNamesP = styled.div`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    width: 60px;
    font-size: 15px;
    font-weight: bold;
    /* border: solid #cccccc 1px;
    border-radius: 5px; */
    color: ${darken(0.1, "#04d900")};
`;
export const NewMonthsP = styled.button`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    margin: 0 2px;
    padding: 2px 5px;
    width: 50px;
    font-size: 15px;
    color: ${(props) => {
        if (props.color === "gray") {
            return "#808080";
        } else {
            return "#cccccc";
        }
    }};
    border: none;
    background-color: white;
    cursor: pointer;
    &:hover {
        border-color: ${lighten(0.5, "#dddddd")};
        /* border-color: black; */
    }
    &:active {
        border-color: ${darken(0.5, "#dddddd")};
    }
    /* background-color: ${(props) => lighten(0.05, props.color)}; */
`;

const ThisYearP = styled.span`
    box-sizing: border-box;
    margin-left: 20px;
    font-size: 20px;
    font-weight: normal;
    color: ${lighten(0.05, "#80a9ff")};
`;

export default class AttendancePresenter extends PureComponent {
    render() {
        const {
            list,
            days,
            attendance,
            now,
            attend,
            changeAll,
            selectAll,
            checkAll,
        } = this.props;
        return (
            <AttendanceWrapperP>
                <TitlesP>
                    {"출석부"}
                    <ThisYearP>{now}</ThisYearP>
                </TitlesP>
                <ButtonsWrapperP>
                    {attendance.map((item) => {
                        return (
                            <AttendButtonsP value={item} onClick={changeAll}>
                                {item}
                            </AttendButtonsP>
                        );
                    })}
                </ButtonsWrapperP>
                <ListWrapperP>
                    <ListLineP>
                        <CheckAllP title="title" onClick={selectAll}>
                            {"All"}
                        </CheckAllP>
                        <ListNamesP>{"Name"}</ListNamesP>
                        {days}
                    </ListLineP>
                    {list.map((item, index) => {
                        return (
                            <ListLineP name={item.students}>
                                <CheckAllP
                                    name={item.students}
                                    onClick={checkAll}
                                >
                                    {item.all === true ? "V" : ""}
                                </CheckAllP>
                                <ListNamesP name={item.students}>
                                    {item.students}
                                </ListNamesP>
                                {attend(item)}
                            </ListLineP>
                        );
                    })}
                </ListWrapperP>
            </AttendanceWrapperP>
        );
    }
}
