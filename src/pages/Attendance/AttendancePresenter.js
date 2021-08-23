import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";
import {
    PaymentWrapper,
    Titles,
    ButtonsWrapper,
    PayButtons,
    ListWrapper,
    ListLine,
    ThisYear,
    ListNames,
    Months,
} from "../Home/HomePresenter";
const AttendanceWrapper = styled(PaymentWrapper)``;

// const Titles = styled.span`
//     box-sizing: border-box;
//     padding-left: 10px;
//     margin-bottom: 20px;
//     font-size: 25px;
//     font-weight: bold;
//     color: #80a9ff;
// `;

// const ButtonsWrapper = styled.div`
//     box-sizing: border-box;
//     width: 100%;
//     background-color: none;
//     display: flex;
//     justify-content: flex-start;
//     padding: 5px 0;
// `;

// const PayButtons = styled.button`
//     box-sizing: border-box;
//     vertical-align: middle;
//     text-align: center;
//     color: ${darken(0.01, "#85a9ff")};
//     margin-right: 10px;
//     border: solid white 1px;
//     border-radius: 7px;
//     background-color: white;
//     font-weight: bold;
//     font-size: 15px;
//     width: auto;
//     height: 30px;
//     cursor: pointer;
//     &:hover {
//     }
// `;

// const ListWrapper = styled.div`
//     box-sizing: border-box;
//     width: 100%;
//     height: 100%;
//     overflow: scroll;
// `;

// const ListLine = styled.div`
//     box-sizing: border-box;
//     display: flex;
//     align-items: center;
//     width: 840px;
//     height: 30px;
//     border: none;
//     margin: 10px 0;
// `;

const CheckAll = styled.button`
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
export const NewMonths = styled(Months)``;

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
            <AttendanceWrapper>
                <Titles>
                    {"출석부"}
                    <ThisYear>{now}</ThisYear>
                </Titles>
                <ButtonsWrapper>
                    {["출석", "결석", "환불"].map((item) => {
                        return (
                            <PayButtons value={item} onClick={changeAll}>
                                {item}
                            </PayButtons>
                        );
                    })}
                </ButtonsWrapper>

                <ListWrapper>
                    <ListLine>
                        <CheckAll title="title" onClick={selectAll}>
                            {"All"}
                        </CheckAll>
                        <ListNames>{"Name"}</ListNames>
                        {days}
                    </ListLine>
                    {list.map((item, index) => {
                        return (
                            <ListLine name={item.students}>
                                <CheckAll
                                    name={item.students}
                                    onClick={checkAll}
                                >
                                    {item.all === true ? "V" : ""}
                                </CheckAll>
                                <ListNames name={item.students}>
                                    {item.students}
                                </ListNames>
                                {attend(item)}
                            </ListLine>
                        );
                    })}
                </ListWrapper>
            </AttendanceWrapper>
        );
    }
}
