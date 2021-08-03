import React, { PureComponent } from "react";
import HeaderPresenter from "./HeaderPresenter";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <HeaderPresenter />;
    }
}
