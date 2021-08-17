import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const NewButtonGroup = styled(ButtonGroup)`
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
`;

const NewButton = styled(Button)`
    width: 25%;
    height: 40px;
`;

export default class TestComponent extends PureComponent {
    checkIndex = (e) => {
        console.log("e.target :>> ", e.target);
    };
    render() {
        const {
            name,
            day,
            time,
            deleteInfo,
            dataIndex,
            openTransfer,
            lessonName,
        } = this.props;
        return (
            <>
                <NewButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                >
                    <NewButton name={lessonName} onClick={openTransfer}>
                        {name}
                    </NewButton>
                    <NewButton
                        name={lessonName}
                        // onClick={openTransfer}
                    >
                        {day}
                    </NewButton>
                    <NewButton name={lessonName} onClick={openTransfer}>
                        {time}
                    </NewButton>
                    <NewButton data-index={dataIndex} onClick={deleteInfo}>
                        {"X"}
                    </NewButton>
                </NewButtonGroup>
            </>
        );
    }
}
