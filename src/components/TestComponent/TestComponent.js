import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const NewButtonGroup = styled(ButtonGroup)`
    display: flex;
    justify-content: flex-start;
    /* background: gray; */
`;

const NewButton = styled(Button)`
    width: 25%;
`;

export default class TestComponent extends PureComponent {
    render() {
        const { name, day, time, deleteInfo, dataIndex } = this.props;
        return (
            <>
                <NewButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                >
                    <NewButton>{name}</NewButton>
                    <NewButton>{day}</NewButton>
                    <NewButton>{time}</NewButton>
                    <NewButton data-index={dataIndex} onClick={deleteInfo}>
                        {"삭제"}
                    </NewButton>
                </NewButtonGroup>
            </>
        );
    }
}
