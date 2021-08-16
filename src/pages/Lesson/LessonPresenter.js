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
    NewIcon,
    CloseButton,
} from "../Member/MemberPresenter";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";

import TestComponent from "../../components/TestComponent/TestComponent";
import AddLesson from "../../components/AddLesson";
import LessonTransfer from "../../components/LessonTransfer/LessonTransfer";
import { AddButton } from "../Member/MemberPresenter";

const Lessons = styled(Members)``;
const RegisterClass = styled(RegisterClient)`
    width: auto;
    padding: 5px;
`;
const InputInfo = styled.input.attrs((props) => ({
    placeholder: props.value === "" ? props.name : "",
}))`
    box-sizing: border-box;
    width: 30%;
    height: 25px;
    font-size: 17px;
    outline: none;
    color: #333;
    margin-right: 10px;
`;
const ClassWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10px;
`;

const TitleLine = styled(TestComponent)`
    color: gray;
`;

const RegisterModalWrapper = styled(ModalWrapper)`
    top: 0;
    height: 500px;
`;

const TransferWrapper = styled(InputWrapper)`
    /* background: gray; */
    height: 300px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: ; */
    align-items: center;
`;

const AddLine = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export default class LessonPresenter extends PureComponent {
    render() {
        const {
            registerModalOpen,
            transferModalOpen,
            openModal,
            closeModal,
            openTransfer,
            closeTransfer,
            lessons,
            deleteInfo,
            newLesson,
            getNewLesson,
            addLesson,
        } = this.props;
        return (
            <Lessons>
                <Titles>{"레슨 리스트"}</Titles>

                <RegisterClass onClick={openModal}>{"레슨 등록"}</RegisterClass>
                <NewModal open={registerModalOpen}>
                    <Fade in={registerModalOpen}>
                        <ModalWrapper>
                            <ModalTitle id="Name">
                                {"레슨 생성"}
                                <CloseButton onClick={closeModal}>
                                    X
                                </CloseButton>
                            </ModalTitle>

                            <InputWrapper>
                                <AddLesson
                                    getNewLesson={getNewLesson}
                                ></AddLesson>
                                <AddButton>
                                    <NewIcon onClick={addLesson}>+</NewIcon>
                                </AddButton>
                            </InputWrapper>
                        </ModalWrapper>
                    </Fade>
                </NewModal>
                <NewModal open={transferModalOpen}>
                    <Fade in={transferModalOpen}>
                        <RegisterModalWrapper>
                            <ModalTitle id="Name">
                                {"레슨생 추가"}
                                <CloseButton onClick={closeTransfer}>
                                    X
                                </CloseButton>
                            </ModalTitle>

                            <TransferWrapper>
                                <LessonTransfer />
                                <AddLine>
                                    <AddButton>
                                        <NewIcon>+</NewIcon>
                                    </AddButton>
                                </AddLine>
                            </TransferWrapper>
                        </RegisterModalWrapper>
                    </Fade>
                </NewModal>
                <ClassWrapper>
                    <TitleLine name={"레슨명"} day={"요일"} time={"시간"} />
                    {lessons.map((item, index) => {
                        return (
                            <TestComponent
                                name={lessons[index].name}
                                day={lessons[index].day}
                                time={lessons[index].time}
                                openTransfer={openTransfer}
                                deleteInfo={deleteInfo}
                                dataIndex={index}
                            />
                        );
                    })}
                </ClassWrapper>
            </Lessons>
        );
    }
}
