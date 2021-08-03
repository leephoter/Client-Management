import React, { PureComponent, useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import ClientList from "../../components/ClientList";
import ModalBox from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent";

const Members = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: 500px;
    height: 500px;
`;
const HeadBox = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: stretch;
    align-items: center;
    width: 500px;
    height: 70px;
    overflow: scroll;
    /* padding: 10px 20px; */
    /* background-color: rgb(250, 240, 250); */
`;
const Client = styled.span`
    box-sizing: border-box;
    font-size: 25px;
    font-weight: bold;
    color: #80a9ff;
`;

const RegisterClient = styled.button`
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

export default class MembersPresenter extends PureComponent {
    render() {
        const { modalOpen, contents, getContents } = this.props;
        const {
            deleteInfo,
            getInfo,
            pushInfo,
            openModal,
            closeModal,
        } = this.props;
        return (
            <Members>
                <HeadBox>
                    <Client>{"회원 리스트"}</Client>
                </HeadBox>
                <RegisterClient onClick={openModal}> 회원 등록</RegisterClient>
                <ModalBox
                    open={modalOpen}
                    close={closeModal}
                    title="Create a chat room"
                    pushInfo={pushInfo}
                >
                    <ModalContent getInfo={getInfo}></ModalContent>
                </ModalBox>
                <ClientList
                    clientContents={contents}
                    dummy={getContents}
                    deleteInfo={deleteInfo}
                />
            </Members>
        );
    }
}
