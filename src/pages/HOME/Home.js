import React, { PureComponent } from "react";
import styled from "styled-components";
import LeftPart from "../../components/LeftPart/LeftPart";
import ContentPart from "../../components/ContentPart/ContentPart";

const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    /* background-color: rgb(255, 227, 232); */
    padding: 0 50px;
`;

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Whole>
                <LeftPart></LeftPart>
                <ContentPart></ContentPart>
            </Whole>
        );
    }
}

export default Home;
