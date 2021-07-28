import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";

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

class InputData extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                page: "/",
            },
            input: "",
        };
    }
    render() {
        const { pages } = this.state;
        const handleChange = this;
        return (
            <>
                <Info>ID</Info>
                <InputInfo></InputInfo>
                <Info>Password</Info>
                <InputInfo type="password"></InputInfo>
            </>
        );
    }
}

export default InputData;
