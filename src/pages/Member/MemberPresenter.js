import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
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
    display: flex;
    justify-content: center;
    /* outline: none; */
    padding-top: 200px;
`;

export const ModalWrapper = styled.div`
    box-sizing: border-box;
    /* outline: none; */
    top: 100px;
    left: 280px;
    width: 600px;
    height: 200px;
    overflow: scroll;
    display: flex;
    padding: 0 20px 20px;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    border-radius: 10px;
`;
export const ModalTitle = styled.h1`
    color: #88a9ff;
`;
export const InputWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
`;
const InputInfo = styled.input.attrs((props) => ({
    placeholder: props.value === "" ? props.name : "",
}))`
    box-sizing: border-box;
    width: 200px;
    height: 25px;
    font-size: 17px;
    outline: none;
    border: solid 1px ${lighten(0.05, "#85a9ff")};
    border-radius: 5px;
    color: ${darken(0.05, "#85a9ff")};
    margin-right: 10px;
`;
export const AddButton = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border: none;
    border-radius: 16px;
    background-color: rgba(250, 250, 250, 0);
    cursor: pointer;
`;

export const NewIcon = styled(Icon)`
    box-sizing: border-box;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: white;
    color: #85a9ff;
    cursor: pointer;
    &:hover {
        border: solid 1px white;
        color: ${darken(0.1, "#85a9ff")};
        box-shadow: 0 1px 10px -5px #85a9ff;
    }
    &:active {
        border: ${darken(0.15, "#85a9ff")};
        color: ${darken(0.15, "#85a9ff")};
        box-shadow: 0 1px 15px -5px #85a9ff;
    }
`;
export const CloseButton = styled.button`
    box-sizing: border-box;
    width: 25px;
    height: 20px;
    border-radius: 5px;
    float: right;
    cursor: pointer;
    background-color: white;
    border: solid 1px #aaaaaa;
    color: #aaaaaa;
    &:hover {
        border: solid 1px ${darken(0.1, "#aaaaaa")};
        color: ${darken(0.1, "#aaaaaa")};
    }
    &:active {
        border-color: ${darken(0.15, "#aaaaaa")};
        /* color: ${lighten(0.05, "#aaaaaa")}; */
        box-shadow: 0 1px 10px -5px gray;
    }
`;

export const TitleLineWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

export const SubTitle = styled.div`
    box-sizing: border-box;
    font-size: 20px;
    font-weight: normal;
    color: ${lighten(0, "#85a9ff")};
    padding: 2px;
    margin-right: 171px;
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
                                <CloseButton onClick={closeModal}>
                                    X
                                </CloseButton>
                            </ModalTitle>

                            <TitleLineWrapper>
                                <SubTitle>이름</SubTitle>
                                <SubTitle>나이</SubTitle>
                            </TitleLineWrapper>
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
                            </InputWrapper>
                            <AddButton>
                                <NewIcon onClick={addList}>+</NewIcon>
                            </AddButton>
                        </ModalWrapper>
                    </Fade>
                </NewModal>
                <ClientList list={list} deleteInfo={deleteInfo} />
            </Members>
        );
    }
}
