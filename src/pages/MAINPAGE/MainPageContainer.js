import React, { PureComponent } from "react";
import MainPagePresenter from "./MainPagePresenter";
import LoginButtons from "../../components/LoginButtons";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value,
        });
    };

    render() {
        const { pages } = this.state;
        const handleChange = this;
        return (
            <MainPagePresenter>
                <LoginButtons />
            </MainPagePresenter>
        );
    }
}
