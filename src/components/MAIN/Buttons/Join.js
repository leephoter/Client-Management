import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { darken, lighten } from "polished";
import Main from "../Main";
import InputData from "../InputData/InputData";

const JoinIDPW = styled.div`
    box-sizing: border-box;
    float: inherit;
    width: 100%;
    margin: 0 auto;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const JoincolorStyles = css`
    ${({ theme, backgroundcolor, fontColor }) => {
        const BackColor = theme.palette[backgroundcolor];
        const FontColor = theme.palette[fontColor];
        return css`
            background-color: ${BackColor};
            color: ${FontColor};
            border: solid #77b4ff 1px;
            &:hover {
                background: ${lighten(0.1, "#77b4ff")};
                border: none;
                color: white;
            }
            &:active {
                background: ${darken(0.1, "#77b4ff")};
                border: none;
                color: white;
            }
        `;
    }}
`;

const JoinButton = styled(Link)`
    /* 공통 스타일 */
    box-sizing: border-box;
    text-decoration: none;
    display: inline-flex;
    outline: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    width: 180px;
    height: 35px;

    justify-content: center;
    align-items: center;

    /* 크기 */
    font-size: 13px;
    /* 색상 */
    ${JoincolorStyles}
`;

class JoinButtons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                main: "/",
                join: "/join",
            },
        };
    }

    EventClick = () => {
        const { history } = this.props;
        const { pages } = this.state;
    };

    JoinClick = () => {
        console.log("Join");
    };

    render() {
        const { pages } = this.state;
        return (
            <Main>
                <InputData></InputData>
                <JoinIDPW>
                    <ThemeProvider
                        theme={{
                            palette: {
                                whiteblue: "#77b4ff",
                                white: "#ffffff",
                            },
                        }}
                    >
                        <JoinButton
                            to="/"
                            backgroundcolor="white"
                            fontColor="whiteblue"
                        >
                            {"뒤로가기"}
                        </JoinButton>
                        <JoinButton
                            onClick={this.JoinClick}
                            backgroundcolor="whiteblue"
                            fontColor="white"
                        >
                            {"가입하기"}
                        </JoinButton>
                    </ThemeProvider>
                </JoinIDPW>
            </Main>
        );
    }
}

JoinButtons.defaultProps = {
    color: "blue",
};

export default JoinButtons;