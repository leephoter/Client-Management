import React, { PureComponent, useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
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
const MainContent = styled.div`
    height: 20px;
`;

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

class MainContentPart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            contents: {
                name: ["Min", "Gyeol", "Ik", "Jin"],
                age: [1991, 1997, 1991, 1991],
                now: new Date().getFullYear() + 1,
            },
            getContents: {
                name: "",
                age: "",
            },
        };
    }

    // shouldComponentUpdate(nextProps) {
    //     console.log("this.state, nextProps :>> ", this.state, nextProps);
    //     return this.state.contents !== nextProps.contents;
    // }
    openModal = () => {
        this.setState({ modalOpen: true });
    };
    closeModal = () => {
        this.setState({ modalOpen: false });
    };
    deleteInfo = (_name, _age) => {
        const { contents } = this.state;
        this.setState({
            contents: {
                ...contents,
                name: _name,
                age: _age,
            },
        });
    };
    getInfo = (newContents) => {
        const { getContents } = this.state;
        this.setState({
            getContents: {
                ...getContents,
                name: newContents.newName,
                age: newContents.newAge,
            },
        });
    };
    pushInfo = () => {
        const { contents, getContents } = this.state;
        const _name = contents.name.push(getContents.name);
        const _age = contents.age.push(getContents.age);
        // console.log("contents :>> ", contents);
        this.setState({
            contents: {
                ...contents,
                name: _name,
                age: _age,
            },
        });
    };
    render() {
        const { contents, getContents } = this.state;
        const { deleteInfo, getInfo, pushInfo } = this;
        return (
            <MainContentBox>
                <Members>
                    <HeadBox>
                        <Client>{"회원 리스트"}</Client>
                    </HeadBox>
                    <RegisterClient onClick={this.openModal}>
                        {" "}
                        회원 등록
                    </RegisterClient>
                    <ModalBox
                        open={this.state.modalOpen}
                        close={this.closeModal}
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
                {/* </Grid> */}
            </MainContentBox>
        );
    }
}

export default MainContentPart;
