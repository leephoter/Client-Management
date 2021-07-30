import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";

const LeftBarBox = styled.div`
    box-sizing: border-box;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
    height: 800px;
    padding: 30px 20px;
    border-right: solid gray 1px;
    margin-right: 10px;
`;

class LeftBarBoxPresenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { children } = this.props;
        return <LeftBarBox>{children}</LeftBarBox>;
    }
}

export default LeftBarBoxPresenter;
