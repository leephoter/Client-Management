import React, { PureComponent } from "react";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <HeaderPresenter />;
    }
}

export default HeaderContainer;
