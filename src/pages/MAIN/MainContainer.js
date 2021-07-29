import React, { PureComponent } from "react";
import MainPresenter from "./MainPresenter";
import LoginButtons from "../../components/LoginButtons/LoginButtons";

class MainContainer extends PureComponent {
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
            <MainPresenter>
                <LoginButtons />
            </MainPresenter>
        );
    }
}

export default MainContainer;
