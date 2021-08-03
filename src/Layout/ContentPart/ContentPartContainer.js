import React, { PureComponent } from "react";
import ContentPartPresenter from "./ContentPartPresenter";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { pathname } = this.props;
        return <ContentPartPresenter pathname={pathname} />;
    }
}
