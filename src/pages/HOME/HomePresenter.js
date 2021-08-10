import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";

const PaymentWrapper = styled.div`
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
const Titles = styled.span`
    box-sizing: border-box;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #80a9ff;
`;

const ButtonsWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: none;
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
`;

const PayButtons = styled.button`
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
    &:hover {
        cursor: pointer;
    }
`;

const ListWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

const ListLine = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 840px;
    height: 30px;
    border: none;
    margin: 5px 0;
`;
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
const ListNames = styled.div`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    width: 60px;
    font-size: 15px;
    color: ${darken(0.1, "#04d900")};
`;
export const Months = styled.div`
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    width: 60px;
    font-size: 15px;
    color: gray;
`;

export default class HomePresenter extends PureComponent {
    render() {
        const { list, months } = this.props;

        return (
            <PaymentWrapper>
                <Titles>{"회비"}</Titles>
                <ButtonsWrapper>
                    <PayButtons>{"카드"}</PayButtons>
                    <PayButtons>{"현급"}</PayButtons>
                    <PayButtons>{"미납"}</PayButtons>
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
            </PaymentWrapper>
        );
    }
}
