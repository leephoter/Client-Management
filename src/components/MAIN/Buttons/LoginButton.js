import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { darken, lighten } from "polished";
import Main from "../Main";
import InputData from "../InputData/InputData";

const colorStyles = css`
    ${({ theme, color, backgroundColor }) => {
        const FontColor = theme.palette[color];
        const Backselected = theme.palette[backgroundColor];
        return css`
            color: ${FontColor};
            background: ${Backselected};
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

const sizeStyles = css`
    ${(props) =>
        css`
            font-size: 15px;
        `}
`;

// const StyledButton = styled(Link)`
const StyledButton = styled(Link)`
    /* 공통 스타일 */
    box-sizing: border-box;
    display: inline-flex;
    float: inherit;
    outline: none;
    border-radius: 4px;

    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    padding: 0.6rem 1rem;
    width: 100%;
    height: 35px;
    text-decoration-line: none;

    justify-content: center;
    align-items: center;

    /* 크기 */
    ${sizeStyles}
    /* 색상 */ 
    ${colorStyles}
    /* 기타 */ 
    & + & {
    }
`;

class LoginButtons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                main: "/",
                join: "/join",
                home: "/home",
                // page:
            },
        };
    }

    render() {
        const { pageLink } = this.props;
        const { pages } = this.state;
        return (
            <Main>
                {/* <InputData></InputData> */}
                <ThemeProvider
                    theme={{
                        palette: {
                            whiteblue: "#77b4ff",
                            white: "#ffffff",
                        },
                    }}
                >
                    <StyledButton
                        to="/home/"
                        color="white"
                        backgroundColor="whiteblue"
                    >
                        {"로그인"}
                    </StyledButton>
                    <StyledButton
                        to="/join/"
                        color="whiteblue"
                        backgroundColor="white"
                    >
                        {"회원가입"}
                    </StyledButton>
                </ThemeProvider>
            </Main>
        );
    }
}

LoginButtons.defaultProps = {
    color: "blue",
};

export default LoginButtons;
