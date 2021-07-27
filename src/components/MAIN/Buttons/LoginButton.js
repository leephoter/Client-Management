import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { darken, lighten } from "polished";

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
        props.size === "large" &&
        css`
            height: 3rem;
            font-size: 1.25rem;
        `}

    ${(props) =>
        props.size === "medium" &&
        css`
            height: 2.25rem;
            font-size: 1rem;
        `}

    ${(props) =>
        props.size === "small" &&
        css`
            height: 1.75rem;
            font-size: 0.875rem;
        `}
`;

// const StyledButton = styled(Link)`
const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border-radius: 4px;

    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    padding: 0.6rem 1rem;
    width: 100%;
    height: 35px;

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

    LoginClick = () => {
        const { pageLink } = this.props;
        const { pages } = this.state;
        console.log('"login" :>> ', "login");
        pageLink.push("/home");
    };

    EventClick = (e) => {
        const { pageLink } = this.props;
        // console.log(this.state);
        const { pages } = this.state;
        // console.log("pages :>> ", pages);
        // history.push(pages["join"]);
        console.log('"Join" :>> ', "Join");
        pageLink.push("/join");
    };

    // ClickMain = () => {
    //     const { history } = this.props;
    //     console.log(this.state);
    //     const { pages } = this.state;
    //     history.push(pages);
    // };

    render() {
        const { pageLink } = this.props;
        const { pages } = this.state;
        return (
            <BrowserRouter>
                <ThemeProvider
                    theme={{
                        palette: {
                            whiteblue: "#77b4ff",
                            white: "#ffffff",
                        },
                    }}
                >
                    <Link to="/home/">
                        <StyledButton
                            // onClick={this.LoginClick}
                            color="white"
                            backgroundColor="whiteblue"
                        >
                            {"로그인"}
                        </StyledButton>
                    </Link>
                    <Link to="/join/">
                        <StyledButton
                            // onClick={this.EventClick}
                            color="whiteblue"
                            backgroundColor="white"
                        >
                            {"회원가입"}
                        </StyledButton>
                    </Link>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

LoginButtons.defaultProps = {
    color: "blue",
};

export default LoginButtons;
