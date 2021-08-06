import React, { Component } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import LoginData from "../../components/LoginData";

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
const Info = styled.div`
    color: gray;
    font-size: 14px;
`;
const InputInfo = styled.input.attrs((props) => ({
    type: props.type === "password" ? "password" : "text",
    placeholder: "",
}))`
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    color: rgb(96, 96, 96);
    font-size: 15px;
    border: solid gray 0.5px;
    outline: none;
    padding-left: 6px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

export default class MainPresenter extends Component {
    render() {
        const { children, handleChange } = this.props;
        return (
            <Whole>
                <IDPWBox>
                    <Name>{"모두의 관리"}</Name>
                    <IDPW>
                        <Info>ID</Info>
                        <InputInfo
                            name="id"
                            type="text"
                            onChange={handleChange}
                        />
                        <Info>Password</Info>
                        <InputInfo
                            name="password"
                            type="password"
                            onChange={handleChange}
                        />
                        {children}
                    </IDPW>
                </IDPWBox>
            </Whole>
        );
    }
}
