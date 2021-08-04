import React, { PureComponent, useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";

const MainModal = styled.div`
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* background-color: #eeeeee; */
`;
const HeadModal = styled.div`
    width: 400px;
    /* background-color: aqua; */
    display: flex;
    justify-content: left;
    align-items: center;
`;
const TitleModal = styled.span`
    box-sizing: border-box;
    width: 100px;
    font-size: 15px;
`;
const InputBox = styled.div`
    width: 400px;
    height: 100%;
    background-color: #ffffff;
`;
const InputModal = styled.input.attrs((props) => ({
    placeholder: props.title === "newName" ? "name" : "age",
}))`
    outline: none;
    box-sizing: border-box;
    width: 100px;
    height: 25px;
    /* background-color: gray; */
    color: gray;
`;

class ModalContentPresenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            newContents: {
                newName: "",
                newAge: "",
            },
        };
    }

    handleChange = (e) => {
        const { title, value } = e.target;
        const { newContents } = this.state;
        this.setState({
            newContents: {
                ...newContents,
                [title]: value,
            },
        });
        console.log("newContents :>> ", newContents);
        this.props.getInfo(newContents);
    };
    render() {
        const { handleChange } = this;
        const { newContents } = this.state;
        return (
            <MainModal>
                <HeadModal>
                    <TitleModal>{"이름"}</TitleModal>
                    <TitleModal>{"나이"}</TitleModal>
                </HeadModal>
                <InputBox>
                    <InputModal title="newName" onChange={handleChange} />
                    <InputModal title="newAge" onChange={handleChange} />
                </InputBox>
            </MainModal>
        );
    }
}

export default ModalContentPresenter;
