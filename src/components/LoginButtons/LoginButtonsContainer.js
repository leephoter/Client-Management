import React, { PureComponent } from "react";
import LoginButtonsPresenter from "./LoginButtonsPresenter";

export default class extends PureComponent {
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

    render() {
        const { pages } = this.state;
        return <LoginButtonsPresenter pages={pages} />;
    }
}
