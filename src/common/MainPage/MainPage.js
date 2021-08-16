import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import LeftLessons from "../LeftLessons";

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
    // TransButton,
    HeaderMenu,
    // newAppBar,
    // newTabs,
    MainContentWrapper,
} from "../../pages/Home/HomeStyle";

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
    /* background: yellow; */
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

export default class MainPage extends PureComponent {
    state = {
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
        },
    };

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

    render() {
        const { children } = this.props;
        const { pages } = this.state;
        const { subMenuBox } = this;
        return (
            <Whole>
                <LeftWrapper>
                    <LeftBarBox>
                        <LeftBar>
                            <CalendarWrapper>
                                {/* <Calendar /> */}
                            </CalendarWrapper>
                            <LessonsBox>
                                <LeftLessons />
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
