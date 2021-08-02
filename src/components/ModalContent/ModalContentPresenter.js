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
    placeholder: props.title === "name" ? "name" : "age",
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
            contents: {
                name: "a",
                age: 21,
            },
        };
    }
    handleChange = (e) => {
        const { title, value } = e.target;
        const { contents } = this.state;
        this.setState({
            contents: {
                ...contents,
                [title]: value,
            },
        });
        this.props.onSearchSubmit(contents);
        this.props.getInfo(contents);
    };
    // onFormSubmit = (item) => {};
    render() {
        const { handleChange, onFormSubmit } = this;
        const { contents } = this.state;

        return (
            <MainModal>
                <HeadModal>
                    <TitleModal>{"이름"}</TitleModal>
                    <TitleModal>{"나이"}</TitleModal>
                </HeadModal>
                <InputBox>
                    {/* <form onSubmit={onFormSubmit}> */}
                    <InputModal
                        title="name"
                        onChange={handleChange}
                    ></InputModal>
                    {/* </form> */}
                    <InputModal
                        title="age"
                        onChange={handleChange}
                    ></InputModal>
                </InputBox>
            </MainModal>
        );
    }
}

export default ModalContentPresenter;
