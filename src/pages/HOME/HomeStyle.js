import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 1380px;
    height: 800px;
    padding: 0 50px;
`;
export const Header_Content = styled.div`
    box-sizing: border-box;
    width: 850px;
    height: 800px;
    display: flex;
    float: inherit;
    flex-direction: column;
`;
export const LeftWrapper = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
    height: 800px;
    padding: 0 20px;
    margin-right: 10px;
`;

export const LeftBarBox = styled.div`
    box-sizing: border-box;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
    height: 800px;
    padding: 30px 20px;
    margin-right: 10px;
`;
export const LeftBar = styled.div`
    box-sizing: border-box;
    float: inherit;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const CalendarWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 230px;
    margin-bottom: 30px;
    border: solid rgb(220, 220, 220) 1px;
    border-radius: 7px;
    /* background-color: #dddddd; */
`;

export const LessonsBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-height: 190px;
    overflow: scroll;
`;

export const HeaderWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* border-bottom: solid rgb(174, 174, 174) 1px; */
    padding-top: 20px;
    padding-left: 20px;
    width: 100%;
    height: 90px;
    /* background: rgb(200, 200, 200); */
    /* color: #85a9ff; */

    border-radius: 10px;
    box-shadow: 0 1px 10px -5px #85a9ff;
`;

export const TransButton = css`
    ${(props) =>
        css`
            ${props}::after {
                content: "abc";
                position: absolute;
                width: 0;
                height: 2px;
                background-color: rgb(31, 72, 255);
                bottom: 0;
                left: 0;
                transition: all 150ms ease-out;
            }
            &:hover::after {
                /* 요소:hover::after ->> 마우스를 요소에 올렷을 때 */
                width: 100%;
                background-color: yellowgreen;
            }
        `}
`;

export const HeaderMenu = styled(Link)`
    box-sizing: border-box;
    /* width: 200px;
    height: 90px; */
    font-size: 25px;
    cursor: pointer;
    float: inherit;
    outline: none;
    margin: 0 10px 5px;
    padding: 7px 20px;
    border-radius: 10px;
    border: none;
    background-color: white;
    color: #85a9ff;
    text-decoration: none;
    /* background-color: gray; */
    transition: all 300ms ease-out;
    &:hover {
        box-shadow: 0 5px 8px -5px #85a9ff;
        border-radius: 10px;
        color: #85a9ff;
    }
    &:active {
        box-shadow: 0 5px 10px -5px ${darken(0.1, "#85a9ff")};
        color: ${darken(0.1, "#85a9ff")};
        transition: none;
    }
`;

export const newAppBar = styled(AppBar)`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const newTabs = styled(Tabs)`
    width: 400px;
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: black;
`;

export const ContentWrapper = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    /* background-color: greenyellow; */
    width: 100%;
    height: 700px;
    padding: 20px 30px 30px 30px;
    flex-direction: column;
    align-items: center;
`;

export const MainContentWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: scroll;
`;
