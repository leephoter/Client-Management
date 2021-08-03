import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import InputUserDataPresenter from "./InputUserDataPresenter";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            information: {
                ID: "",
                password: "",
            },
        };
    }
    handleChange = (e) => {
        const { type, value } = e.target;
        const { information, ID } = this.state;
        let _type = "type";
        type === "password" ? (_type = "password") : (_type = "ID");
        this.setState({
            information: {
                ...information,
                [_type]: value,
            },
        });
    };

    render() {
        const { information } = this.state;
        const { handleChange } = this;
        // console.log("information :>> ", information);
        return (
            <>
                <InputUserDataPresenter
                    information={information}
                    handleChange={handleChange}
                />
            </>
        );
    }
}
