import React, { PureComponent, useState } from "react";
import ModalContentPresenter from "./ModalContentPresenter";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            newContents: {
                newName: "",
                newAge: "",
            },
        };
    }

    handleChange = (e) => {
        const { title, value } = e.target;
        const { newContents } = this.state;
        this.setState({
            newContents: {
                ...newContents,
                [title]: value,
            },
        });
        this.props.getInfo(newContents);
    };
    render() {
        const { newContents } = this.state;
        const { handleChange } = this;
        return (
            <ModalContentPresenter
                newContents={newContents}
                handleChange={handleChange}
            />
        );
    }
}
