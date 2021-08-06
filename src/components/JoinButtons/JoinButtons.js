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

    JoinClick = () => {
        // console.log("Join");
    };

    render() {
        const { pages } = this.state;
        const { JoinClick, addAdmit } = this;
        return (
            <JoinButtonsPresenter
                pages={pages}
                JoinClick={JoinClick}
                addAdmit={addAdmit}
            />
        );
    }
}
