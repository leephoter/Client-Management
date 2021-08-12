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
    width: 35px;
    height: 25px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background: ${darken(0.01, "#dddddd")};
    }
`;
// const ListNames = styled.div`
//     box-sizing: border-box;
//     vertical-align: middle;
//     text-align: center;
//     width: 60px;
//     font-size: 15px;
//     font-weight: bold;
//     /* border: solid #cccccc 1px;
//     border-radius: 5px; */
//     color: ${darken(0.1, "#04d900")};
// `;
export const Months = styled.div`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    width: 60px;
    font-size: 15px;
    color: gray;
`;

export default class AttendancePresenter extends PureComponent {
    render() {
        const { list, months, now } = this.props;
        return (
            <AttendanceWrapper>
                <Titles>
                    {"출석부"}
                    <ThisYear>{now}</ThisYear>
                </Titles>

                <ButtonsWrapper>
                    <PayButtons>{"출석"}</PayButtons>
                    <PayButtons>{"결석"}</PayButtons>
                    <PayButtons>{"환불"}</PayButtons>
                </ButtonsWrapper>

                <ListWrapper>
                    <ListLine>
                        <CheckAll>All</CheckAll>
                        <ListNames>{"Name"}</ListNames>
                        {months(null)}
                    </ListLine>
                    {list.map((item, index) => {
                        return (
                            <ListLine>
                                <CheckAll />
                                <ListNames>{item.name}</ListNames>
                                {months(true)}
                            </ListLine>
                        );
                    })}
                </ListWrapper>
            </AttendanceWrapper>
        );
    }
}
