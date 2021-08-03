import React, { PureComponent } from "react";
import styled from "styled-components";
import ContentPart from "../../Layout/ContentPart";
import LeftBarBox from "../../Layout/LeftBar";

const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 1380px;
    height: 800px;
    padding: 0 50px;
`;

export default class HomePresenter extends PureComponent {
    render() {
        const { pathname } = this.props;
        return (
            <Whole>
                <LeftBarBox></LeftBarBox>
                <ContentPart pathname={pathname}></ContentPart>
            </Whole>
        );
    }
}
