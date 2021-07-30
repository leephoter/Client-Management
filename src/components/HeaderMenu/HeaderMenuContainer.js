import React, { PureComponent } from "react";
import HeaderMenuPresenter from "./HeaderMenuPresenter";

class HeaderMenuContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <HeaderMenuPresenter />
            </>
        );
    }
}

export default HeaderMenuContainer;
