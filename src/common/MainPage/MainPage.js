import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
// import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import LeftLessons from "../LeftLessons";
import DatePickers from "../DatePickers/DatePickers";
import axios from "axios";

import {
    Whole,
    Header_Content,
    LeftWrapper,
    LeftBarBox,
    LeftBar,
    CalendarWrapper,
    LessonsBox,
    HeaderWrapper,
    ContentWrapper,
    HeaderMenu,
    MainContentWrapper,
} from "../../pages/Home/HomeStyle";
const ENDPOINT = "http://127.0.0.1:8080";

const MenuWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
`;

const SubMenuWrapper = styled.div`
    box-sizing: border-box;
    width: 800px;
    height: 20px;
    margin: 0 6px 5px;
    border: none;
    padding: 0 0 0 10px;
`;

const SubMenus = styled(Link)`
    box-sizing: border-box;
    text-decoration: none;
    width: 80px;
    font-size: 15px;
    color: ${lighten(0.05, "#85a9ff")};
    margin: 0 10px;
    border: none;
    border-radius: 1px;
    background-color: #fff;
    &:hover {
        border-bottom: ${darken(0.01, "#85a9ff")};
        box-shadow: 0 5px 8px -5px #85a9ff;
    }
    &:active {
        border-bottom: solid ${lighten(0.1, "#85a9ff")} 1px;
        box-shadow: 0 5px 5px -5px #85a9ff;
    }
`;

const ExButton = styled.button`
    box-sizing: border-box;
    display: inline-flex;
    outline: none;
    border-radius: 3px;
    margin-bottom: 7px;
    text-decoration: none;

    font-weight: bold;
    cursor: pointer;
    padding: 0;
    width: 90px;
    min-height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: gray;
    background: #fff;
    border: solid 1px ${lighten(0.2, "#85a9ff")};
    color: #85a9ff;
    box-shadow: 0 3px 4px -1px ${lighten(0.1, "#85a9ff")};
    transition: all 300ms ease-out;
    &:hover {
        border: solid 1px ${lighten(0.1, "#85a9ff")};
        color: #85a9ff;
        box-shadow: 0 3px 4px -1px #85a9ff;
    }
    &:active {
        border: solid 1px ${darken(0.01, "#85a9ff")};
        color: #85a9ff;
    }
`;

export default class MainPage extends PureComponent {
    state = {
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
        },
        lessons: [],
    };

    componentDidMount() {
        axios
            .get(`${ENDPOINT}/lessons`)
            .then((res) => {
                // console.log("RES : ", res.data.result.lessons);
                this.setState({
                    lessons: res.data.result.lessons,
                });
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
    }

    subMenuBox = () => {
        const { pathname } = this.props;
        const { pages } = this.state;
        if (pathname === "/homePayment" || pathname === "/homeAttendance") {
            return (
                <SubMenuWrapper>
                    <SubMenus to={pages.homePayment}>{"Payment"}</SubMenus>
                    <SubMenus to={pages.homeAttendance}>
                        {"Attendance"}
                    </SubMenus>
                </SubMenuWrapper>
            );
        } else {
            return;
        }
    };
    selectDate = (date) => {
        const { lessons } = this.state;
        // ????????? ?????? ????????? value????????? "???-???-???"??? ???????????? ???
        // console.log("date", date);
        const selectedDate = String(date);
        axios
            .get(`${ENDPOINT}/lessons?date=${selectedDate}`)
            .then((res) => {
                console.log("RES : ", res.data.result.lessons);
                if (res.status >= 200 && res.status <= 204) {
                    this.setState({
                        lessons: res.data.result.lessons,
                    });
                }
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
    };

    render() {
        const { children, clickLesson } = this.props;
        const { pages, lessons } = this.state;
        const { subMenuBox, selectDate } = this;
        return (
            <Whole>
                <LeftWrapper>
                    <LeftBarBox>
                        <LeftBar>
                            <CalendarWrapper>
                                <DatePickers onClick={selectDate} />
                            </CalendarWrapper>
                            <LessonsBox>
                                <LeftLessons
                                    lessons={lessons}
                                    clickLesson={clickLesson}
                                />
                            </LessonsBox>
                        </LeftBar>
                    </LeftBarBox>
                </LeftWrapper>
                <Header_Content>
                    <HeaderWrapper>
                        <MenuWrapper>
                            <HeaderMenu to={pages.homePayment}>
                                {"Home"}
                            </HeaderMenu>
                            <HeaderMenu to={pages.member}>
                                {"Member"}
                            </HeaderMenu>
                            <HeaderMenu to={pages.lesson}>
                                {"Lesson"}
                            </HeaderMenu>
                        </MenuWrapper>
                        {subMenuBox()}
                    </HeaderWrapper>
                    <ContentWrapper>
                        <MainContentWrapper>{children}</MainContentWrapper>
                    </ContentWrapper>
                </Header_Content>
            </Whole>
        );
    }
}
