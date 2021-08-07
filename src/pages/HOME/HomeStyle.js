import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { AppBar, Tabs, Tab } from "@material-ui/core";

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
    border-left: solid rgb(174, 174, 174) 1px;
`;
export const LeftWrapper = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
    height: 800px;
    padding: 0 20px;
    border-right: solid rgb(174, 174, 174) 1px;
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
    border: solid rgb(174, 174, 174) 1px;
    border-radius: 7px;
    /* background-color: #dddddd; */
`;

export const LessonsBox = styled.div`
    float: inherit;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-height: 190px;
    overflow: scroll;
`;

export const HeaderWrapper = styled.div`
    box-sizing: border-box;

    /* display: flex; */
    align-items: center;
    border-bottom: solid rgb(174, 174, 174) 1px;
    padding-left: 20px;
    width: 100%;
    height: 100px;
    /* background: rgb(200, 200, 200); */
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

export const HeaderMenu = styled(Tab)`
    box-sizing: border-box;
    width: 120px;
    height: 100%;
    font-size: 40px;
    cursor: pointer;
    float: inherit;
    outline: none;
    padding: 0 20px;
    border: 1px solid gray;
    color: #ffffff;
    background-color: gray;
    transition: all 150ms ease-out;
    &:hover {
        background: ${lighten(0.1, "#85a9ff")};
        box-shadow: 0 7px 15px -5px #85a9ff;
        border-radius: 10px;
    }
    &:active {
        background: ${darken(0.1, "#85a9ff")};
        border: #aac4ff solid 0.1px;
        box-shadow: none;
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
    padding: 50px 30px 30px 30px;
    flex-direction: column;
    align-items: center;
`;

export const MainContentWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;
