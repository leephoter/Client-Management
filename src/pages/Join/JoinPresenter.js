import React, { Component } from "react";
import styled from "styled-components";
import InputUserData from "../../components/InputUserData/InputUserData";

const Whole = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: scroll;
    padding: 100px 0;
`;

const IDPWBox = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: scroll;
    padding: 30px 0;
`;

const Name = styled.div`
    padding: 0 10px;
    width: 400px;
    height: 100px;
    font-size: 80px;
    font-stretch: ultra-expanded;
    text-align: center;
    color: #3080e3;
`;

const IDPW = styled.div`
    box-sizing: border-box;
    float: inherit;
    width: 400px;
    margin: 0 auto;
    margin-top: 40px;
    border: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export default class JoinPresenter extends Component {
    render() {
        const { children } = this.props;
        console.log("children :>> ", children);
        return (
            <Whole>
                <IDPWBox>
                    <Name>{"모두의 관리"}</Name>
                    <IDPW>
                        <InputUserData />
                        {children}
                    </IDPW>
                </IDPWBox>
            </Whole>
        );
    }
}
