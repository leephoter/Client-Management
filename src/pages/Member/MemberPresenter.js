import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";

import ClientList from "../../common/ClientList";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

const Members = styled.div`
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
const Titles = styled.span`
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

const newModal = styled(Modal)`
    background: gray;
    /* display: none; */
`;

export default class MemberPresenter extends PureComponent {
    render() {
        const {
            deleteInfo,
            openModal,
            closeModal,
            pages,
            open,
            list,
        } = this.props;
        return (
            <Members>
                <HeadBox>
                    <Titles>{"회원 리스트"}</Titles>
                </HeadBox>
                <RegisterClient onClick={openModal}> 회원 등록</RegisterClient>
                <Modal
                    // aria-labelledby="Name"
                    // aria-describedby="Age"
                    open={open}
                    // onClick={closeModal}
                >
                    <Fade in={open}>
                        <div>
                            <h2 id="Name">이름 나이</h2>
                            <p id="Age">
                                <input />
                                <input />
                                <button onClick={closeModal}></button>
                            </p>
                        </div>
                    </Fade>
                </Modal>
                <ClientList list={list} deleteInfo={deleteInfo} />
            </Members>
        );
    }
}
