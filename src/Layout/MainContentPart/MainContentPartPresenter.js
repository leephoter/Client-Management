import React, { PureComponent, useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Members from "../../components/Members";
import ClientList from "../../components/ClientList";
import ModalBox from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent";

const MainContentBox = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    /* background-color: greenyellow; */
    float: inherit;
    width: 100%;
    height: 100vh;
    padding: 50px 30px 0 30px;
    color: green;
    /* flex-direction: column; */
    justify-content: center;
    /* align-items: center; */
`;

export default class MainContentPartPresenter extends PureComponent {
    render() {
        const { modalOpen, contents, getContents, pathname } = this.props;
        const {
            deleteInfo,
            getInfo,
            pushInfo,
            openModal,
            closeModal,
        } = this.props;

        return (
            <MainContentBox>
                {pathname === "/home" ? (
                    <div>{"ㅁ"}</div>
                ) : (
                    <Members
                        modalOpen={modalOpen}
                        contents={contents}
                        getContents={getContents}
                        deleteInfo={deleteInfo}
                        getInfo={getInfo}
                        pushInfo={pushInfo}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                )}
            </MainContentBox>
        );
    }
}
