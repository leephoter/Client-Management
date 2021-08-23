import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";

export const PaymentWrapper = styled.div`
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
export const Titles = styled.span`
    box-sizing: border-box;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #80a9ff;
`;

export const ButtonsWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: none;
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
`;

export const PayButtons = styled.button`
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

export const ListWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

export const ListLine = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 840px;
    height: 30px;
    border: none;
    margin: 10px 0;
`;
const CheckAll = styled.button`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    color: ${(props) => {
        if (props.title === "title") {
            return "#808080";
        } else {
            return "gray";
        }
    }};
    margin: 0 5px;
    outline: none;
    box-shadow: 0px 3px 3px -1px #eeeeee;
    /* border: solid black 1px; */
    /* background-color: red; */
    border-radius: 7px;
    font-size: 13px;
    font-weight: bold;
    width: 35px;
    height: 25px;
    cursor: pointer;
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
        border-color: ${lighten(0.05, "#dddddd")};
    }
    &:active {
        border-color: ${darken(0.05, "#dddddd")};
    }
`;
export const ListNames = styled.div`
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
export const Months = styled.button`
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

export const ThisYear = styled.span`
    box-sizing: border-box;
    margin-left: 20px;
    font-size: 20px;
    font-weight: normal;
    color: ${lighten(0.05, "#80a9ff")};
`;

export default class HomePresenter extends PureComponent {
    render() {
        const {
            list,
            title,
            now,
            pay,
            payments,
            checkAll,
            changeAll,
            selectAll,
        } = this.props;

        return (
            <PaymentWrapper>
                <Titles>
                    {"회비 "}
                    <ThisYear>{now}</ThisYear>
                </Titles>

                <ButtonsWrapper>
                    {pay.map((item, index) => {
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
                        {title()}
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
                                {payments(item)}
                            </ListLine>
                        );
                    })}
                </ListWrapper>
            </PaymentWrapper>
        );
    }
}
