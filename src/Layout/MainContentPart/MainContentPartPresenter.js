import React, { PureComponent, useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import TransferList from "../../components/TransferList";

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
    align-items: center;
    width: 500px;
    height: 500px;
    /* background-color: rgb(240, 240, 240); */
`;
const HeadBox = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 100px;
    padding: 10px 20px;
    /* background-color: rgb(200, 200, 200); */
`;
const ClientList = styled.span`
    box-sizing: border-box;
    font-size: 25px;
    font-weight: bold;
    color: gray;
`;

const RegisterClient = styled(Link)`
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 15px;
    width: 100px;
    border: solid #cccccc 0.1px;
    border-radius: 5px;
    color: #aaaaaa;
    font-weight: bold;
    /* background-color: rgb(200, 250, 200); */
`;

class MainContentPart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <MainContentBox>
                {/* <Grid item xs={12} md={11}> */}
                <Members>
                    <HeadBox>
                        <ClientList>{"회원 리스트"}</ClientList>
                        <RegisterClient>{"회원 등록"}</RegisterClient>
                    </HeadBox>
                    <TransferList></TransferList>
                </Members>
                {/* </Grid> */}
            </MainContentBox>
        );
    }
}

export default MainContentPart;
