import React, { PureComponent } from "react";
import JoinPresenter from "./JoinPresenter";
import JoinButtons from "../../components/JoinButtons/JoinButtons";

class JoinContainer extends PureComponent {
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
            <JoinPresenter>
                <JoinButtons />
            </JoinPresenter>
        );
    }
}

export default JoinContainer;
