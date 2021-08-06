import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { darken, lighten } from "polished";

const LogincolorStyles = css`
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

const LoginsizeStyles = css`
    ${(props) =>
        css`
            font-size: 15px;
        `}
`;

// const LoginButton = styled(Link)`
const LoginButton = styled(Link)`
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
    ${LoginsizeStyles}
    /* 색상 */ 
    ${LogincolorStyles}
    /* 기타 */ 
    & + & {
    }
`;

class LoginButtonsPresenter extends PureComponent {
    render() {
        const { pages, checkAdmit } = this.props;
        return (
            <ThemeProvider
                theme={{
                    palette: {
                        whiteblue: "#77b4ff",
                        white: "#ffffff",
                    },
                }}
            >
                <LoginButton
                    to={pages.home}
                    color="white"
                    backgroundColor="whiteblue"
                    onClick={checkAdmit}
                >
                    {"로그인"}
                </LoginButton>
                <LoginButton
                    to={pages.join}
                    color="whiteblue"
                    backgroundColor="white"
                >
                    {"회원가입"}
                </LoginButton>
            </ThemeProvider>
        );
    }
}

LoginButtonsPresenter.defaultProps = {
    color: "blue",
};

export default LoginButtonsPresenter;
