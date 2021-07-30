import React, { PureComponent } from "react";
import LeftBarBoxPresenter from "./LeftBarBoxPresenter";
import LeftPart from "../../components/LeftPart/LeftPart";

class LeftBarBoxContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <LeftBarBoxPresenter>
                <LeftPart />
            </LeftBarBoxPresenter>
        );
    }
}

export default LeftBarBoxContainer;
