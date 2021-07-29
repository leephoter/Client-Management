import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";

const Info = styled.div`
    color: gray;
    font-size: 14px;
`;

const InputInfo = styled.input.attrs((props) => ({
    type: props.type === "password" ? "password" : "text",
    placeholder: "",
}))`
    /* text-decoration-line: none; */
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

class InputUserData extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            information: {
                ID: "",
                password: "",
            },
        };
    }
    handleChange = (e) => {
        const { type, value } = e.target;
        const { information, ID } = this.state;
        let keyword = "";
        type === "password" ? (keyword = "password") : (keyword = "ID");
        this.setState({
            information: {
                ...information,
                [keyword]: value,
            },
        });
    };

    render() {
        const { information } = this.state;
        const { handleChange } = this;
        console.log("information :>> ", information);
        return (
            <>
                <Info>ID</Info>
                <InputInfo type="text" onChange={handleChange}></InputInfo>
                <Info>Password</Info>
                <InputInfo type="password" onChange={handleChange}></InputInfo>
            </>
        );
    }
}

export default InputUserData;
