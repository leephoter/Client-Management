import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import Lessons from "../../common/Lessons";

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
    color: gray;
    margin: 0 10px;
    border: none;
    border-radius: 1px;
    background-color: #fff;
    &:hover {
        border-bottom: solid ${lighten(0.1, "#85a9ff")} 1px;
        box-shadow: 0 5px 5px -5px #85a9ff;
        color: gray;
    }
    &:active {
        border-bottom: ${darken(0.01, "#85a9ff")};
        box-shadow: none;
        transition: none;
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

    render() {
        const { children } = this.props;
        const { pages, pathname } = this.state;
        return (
            <Whole>
                <LeftWrapper>
                    <LeftBarBox>
                        <LeftBar>
                            <CalendarWrapper>
                                {/* <Calendar /> */}
                            </CalendarWrapper>
                            <LessonsBox>
                                <Lessons />
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
                        <SubMenuWrapper>
                            <SubMenus to={pages.homePayment}>
                                {"Payment"}
                            </SubMenus>
                            <SubMenus to={pages.homeAttendance}>
                                {"Attendance"}
                            </SubMenus>
                        </SubMenuWrapper>
                    </HeaderWrapper>
                    <ContentWrapper>
                        <MainContentWrapper>{children}</MainContentWrapper>
                    </ContentWrapper>
                </Header_Content>
            </Whole>
        );
    }
}
