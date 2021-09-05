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
    title = (startTime) => {
        if (startTime !== undefined) {
            return startTime;
        } else {
            return "시간";
        }
    };

    render() {
        const {
            id,
            name,
            day,
            startTime,
            // endTime,
            deleteInfo,
            dataIndex,
            openTransfer,
            form,
        } = this.props;
        const { title } = this;
        return (
            <>
                <NewButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                >
                    <NewButton id={id} name={name} onClick={openTransfer}>
                        {`${name}`}
                    </NewButton>
                    <NewButton name={name}>{day}</NewButton>
                    <NewButton name={name} onClick={openTransfer}>
                        {title(startTime)}
                    </NewButton>
                    <NewButton id={id} onClick={deleteInfo}>
                        {form}
                    </NewButton>
                </NewButtonGroup>
            </>
        );
    }
}
