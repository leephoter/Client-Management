import React, { PureComponent } from "react";
import JoinButtonsPresenter from "./JoinButtonsPresenter";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                main: "/",
                join: "/join",
            },
        };
    }

    JoinClick = () => {};

    render() {
        const { pages } = this.state;
        const { JoinClick } = this;
        const { addAdmit } = this.props;
        return (
            <JoinButtonsPresenter
                pages={pages}
                JoinClick={JoinClick}
                addAdmit={addAdmit}
            />
        );
    }
}
