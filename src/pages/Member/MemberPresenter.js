import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";

import ClientList from "../../common/ClientList";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";

export const Members = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    background: white;
`;
export const HeadBox = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: stretch;
    align-items: center;
    width: 500px;
    height: 70px;
    overflow: scroll;
    background-color: rgb(250, 240, 250);
`;
export const Titles = styled.span`
    box-sizing: border-box;
    padding-left: 10px;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    color: #80a9ff;
`;

export const RegisterClient = styled.button`
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: lighter;
    width: 80px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: bold;
    margin: 0 10px 10px;
    background-color: #80bfff;
`;

export const NewModal = styled(Modal)`
    background: rgba(122, 122, 122, 0.3);
    display: flex;
    justify-content: center;

    padding-top: 200px;
`;

export const ModalWrapper = styled.div`
    box-sizing: border-box;
    top: 100px;
    left: 280px;
    width: 600px;
    height: 150px;
    overflow: scroll;
    display: flex;
    padding: 0 20px 20px;
    flex-direction: column;
    background: #eeeeee;
    border-radius: 10px;
`;
export const ModalTitle = styled.h1`
    color: rgb(40, 150, 230);
`;
export const InputWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
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
    /* border: soild white 0.5px; */
    border: none;
    border-radius: 16px;
    cursor: pointer;
`;

const NewIcon = styled(Icon)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 2px gray; */
    border-radius: 15px;
    color: rgb(50, 200, 140);
    &:hover {
        background-color: #fff;
        /* box-shadow: 0 1px 15px -5px #eeeeee; */
    }
    &:active {
        color: #fff;
        background-color: #cccccc;
        box-shadow: 0 8px 15px -5px #eeeeee;
    }
`;

export default class MemberPresenter extends PureComponent {
    render() {
        const {
            deleteInfo,
            openModal,
            closeModal,
            open,
            list,
            newClient,
            getNewClient,
            addList,
        } = this.props;
        return (
            <Members>
                <Titles>{"회원 리스트"}</Titles>

                <RegisterClient onClick={openModal}>
                    {"회원 등록"}
                </RegisterClient>
                <NewModal open={open}>
                    <Fade in={open}>
                        <ModalWrapper>
                            <ModalTitle id="Name">
                                {"회원 등록"}
                                <button onClick={closeModal}>X</button>
                            </ModalTitle>

                            <InputWrapper>
                                <InputInfo
                                    name={"name"}
                                    onChange={getNewClient}
                                    value={newClient.name}
                                />
                                <InputInfo
                                    name={"age"}
                                    onChange={getNewClient}
                                    value={newClient.age}
                                />
                                <AddButton>
                                    <NewIcon onClick={addList}>+</NewIcon>
                                </AddButton>
                            </InputWrapper>
                        </ModalWrapper>
                    </Fade>
                </NewModal>
                <ClientList list={list} deleteInfo={deleteInfo} />
            </Members>
        );
    }
}
