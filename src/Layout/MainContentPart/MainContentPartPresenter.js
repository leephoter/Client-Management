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
    align-items: flex-start;
    width: 500px;
    height: 500px;
    /* background-color: rgb(220, 250, 240); */
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
    color: gray;
    background-color: #eee;
`;

const RegisterClient = styled.button`
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
    width: 80px;
    border: solid #cccccc 0.1px;
    border-radius: 5px;
    color: #aaaaaa;
    font-weight: bold;
    margin: 0 10px 10px;
    /* background-color: rgb(200, 250, 200); */
`;

class MainContentPart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            contents: {
                name: "",
                age: "",
            },
        };
    }
    openModal = () => {
        this.setState({ modalOpen: true });
    };
    closeModal = () => {
        this.setState({ modalOpen: false });
    };
    onSearchSubmit = (e) => {
        const { contents } = this.state;
        const _name = e.name;
        const _age = e.age;
        this.setState({
            contents: {
                ...contents,
                name: _name,
                age: _age,
            },
        });
        // console.log("_e.name :>> ", contents);
    };
    pushInfo = (push) => {
        const { contents } = this.state;
        // console.log("this.state :>> ", this.state.contents);
        const _push = push;
        // _push === true
        //     ? console.log("_push :>> ", _push)
        //     : console.log("_push :>> ", _push);

        // return _push;
    };
    getInfo = (item) => {
        const { contents } = this.state;
        const _name = item.name;
        const _age = item.age;
        this.setState({
            contents: {
                ...contents,
                name: _name,
                age: _age,
            },
        });
    };
    render() {
        const { pushInfo, getInfo } = this;
        const { contents } = this.state;
        return (
            <MainContentBox>
                {/* <Grid item xs={12} md={11}> */}
                <Members>
                    <HeadBox>
                        <Client>{"회원 리스트"}</Client>
                    </HeadBox>
                    <button onClick={this.openModal}> 회원 등록</button>
                    <ModalBox
                        open={this.state.modalOpen}
                        close={this.closeModal}
                        title="Create a chat room"
                        pushInfo={pushInfo}
                    >
                        <ModalContent
                            onSearchSubmit={this.onSearchSubmit}
                            getInfo={getInfo}
                        ></ModalContent>
                    </ModalBox>
                    <ClientList clientInfo={contents} />
                </Members>
                {/* </Grid> */}
            </MainContentBox>
        );
    }
}

export default MainContentPart;
