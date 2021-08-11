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

import TestComponent from "../../components/TestComponent/TestComponent";
import AddLesson from "../../components/AddLesson";

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
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: flex-end; */
    padding-top: 10px;
    /* background-color: #caffff; */
`;
// const NewTestComponent = styled(TestComponent)`
//     color: gray;
// `;

export default class LessonPresenter extends PureComponent {
    render() {
        const {
            open,
            openModal,
            closeModal,
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
                <NewModal open={open}>
                    <Fade in={open}>
                        <ModalWrapper>
                            <ModalTitle id="Name">
                                {"회원 등록"}
                                <button onClick={closeModal}>X</button>
                            </ModalTitle>

                            <InputWrapper>
                                {/* <InputInfo
                                    name={"name"}
                                    onChange={getNewLesson}
                                    // value={newLesson.name}
                                />
                                <InputInfo
                                    name={"day"}
                                    onChange={getNewLesson}
                                    // value={newLesson.day}
                                />
                                <InputInfo
                                    name={"time"}
                                    onChange={getNewLesson}
                                    // value={newLesson.time}
                                /> */}
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
                <ClassWrapper>
                    <TestComponent name={"레슨명"} day={"요일"} time={"시간"} />
                    {lessons.map((item, index) => {
                        return (
                            <TestComponent
                                name={lessons[index].name}
                                day={lessons[index].day}
                                time={lessons[index].time}
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
