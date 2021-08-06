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
} from "./HomeStyle";

export default class HomePresenter extends PureComponent {
    render() {
        const { pages, pathname, pageSelect } = this.props;
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
                        <newAppBar position="static">
                            {/* <newTabs aria-label="Main Tabs"> */}
                            <HeaderMenu
                                label="home"
                                component={Link}
                                to={pages.home}
                            />
                            <HeaderMenu
                                label="Member"
                                component={Link}
                                to={pages.member}
                            />
                            <HeaderMenu
                                label="Lesson"
                                component={Link}
                                to={pages.lesson}
                            />
                            {/* </newTabs> */}
                        </newAppBar>
                    </HeaderWrapper>
                    <ContentWrapper>
                        <MainContentWrapper>{pageSelect}</MainContentWrapper>
                    </ContentWrapper>
                </Header_Content>
            </Whole>
        );
    }
}
