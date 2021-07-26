import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import LoginButtons from "./Buttons/LoginButton";
import JoinButtons from "./Buttons/Join";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
}))`
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    color: rgb(96, 96, 96);
    // font-weight: bold;
    font-size: 15px;
    border: solid gray 0.5px;
    outline: none;
    padding-left: 6px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                page: "/",
            },
            input: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
        console.log("this.state.input :>> ", this.state.input);
    };

    render() {
        const { pages } = this.state;
        const handleChange = this;
        return (
            <Whole>
                <IDPWBox>
                    <Name>{"모두의 관리"}</Name>
                    <IDPW>
                        <Info>ID</Info>
                        <InputInfo onChange={handleChange}></InputInfo>
                        <Info>Password</Info>
                        <InputInfo type="password"></InputInfo>
                        <BrowserRouter>
                            <Route exact path="/" component={LoginButtons} />
                            <Route exact path="/join" component={JoinButtons} />
                        </BrowserRouter>
                    </IDPW>
                </IDPWBox>
            </Whole>
        );
    }
}

export default Main;
