import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { Link } from "react-router-dom";
import {
    Members,
    HeadBox,
    Titles,
    RegisterClient,
    NewModal,
    ModalWrapper,
    ModalTitle,
    InputWrapper,
} from "../Member/MemberPresenter";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";

import Text from "./Text";

const Lessons = styled(Members)``;
const RegisterClass = styled(RegisterClient)`
    width: auto;
    padding: 5px;
`;

const InputInfo = styled.input.attrs((props) => ({
    placeholder: props.value === "" ? props.name : "",
}))`
    box-sizing: border-box;
    width: 200px;
    height: 25px;
    font-size: 17px;
    outline: none;
    color: #333;
    margin-right: 10px;
`;
const AddButton = styled.button`
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 16px;
    cursor: pointer;
`;

const NewIcon = styled(Icon)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: rgb(50, 200, 140);
    &:hover {
        background-color: #fff;
    }
    &:active {
        color: #fff;
        background-color: #cccccc;
        box-shadow: 0 8px 15px -5px #eeeeee;
    }
`;
const ClassWrapper = styled.div`
    box-sizing: border-box;
    background-color: #caffff;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export default class LessonPresenter extends PureComponent {
    render() {
        const { list, open, openModal, closeModal } = this.props;
        return (
            <Lessons>
                <Titles>{"클래스 리스트"}</Titles>

                <RegisterClass onClick={openModal}>
                    {"클래스 등록"}
                </RegisterClass>
                {/* <NewModal open={open}>
                    <Fade in={open}>
                        <ModalWrapper>
                            <ModalTitle id="Name">
                                {"회원 등록"}
                                <button onClick={closeModal}>X</button>
                            </ModalTitle>

                            <InputWrapper>
                                <InputInfo
                                // name={"name"}
                                // onChange={getNewClient}
                                // value={newClient.name}
                                />
                                <InputInfo
                                // name={"age"}
                                // onChange={getNewClient}
                                // value={newClient.age}
                                />
                                <AddButton>
                                    <NewIcon
                                    // onClick={addList}
                                    >
                                        +
                                    </NewIcon>
                                </AddButton>
                            </InputWrapper>
                        </ModalWrapper>
                    </Fade>
                </NewModal> */}
                <ClassWrapper>
                    <Text />
                </ClassWrapper>
            </Lessons>
        );
    }
}
