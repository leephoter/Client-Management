import React, { PureComponent } from "react";
import JoinPresenter from "./JoinPresenter";
import JoinButtons from "../../components/JoinButtons";

export default class extends PureComponent {
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value,
        });
    };

    render() {
        const handleChange = this;
        return (
            <JoinPresenter>
                <JoinButtons />
            </JoinPresenter>
        );
    }
}
