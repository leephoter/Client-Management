import React, { PureComponent } from "react";
import ContentPartPresenter from "./ContentPartPresenter";

class ContentPartContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <ContentPartPresenter />;
    }
}

export default ContentPartContainer;
