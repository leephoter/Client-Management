import React, { PureComponent } from "react";
import LeftBarBoxPresenter from "./LeftBarBoxPresenter";
import LeftPart from "../../components/LeftPart";

export default class extends PureComponent {
    render() {
        return (
            <LeftBarBoxPresenter>
                <LeftPart />
            </LeftBarBoxPresenter>
        );
    }
}
