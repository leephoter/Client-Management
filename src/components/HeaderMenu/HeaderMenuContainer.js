import React, { PureComponent } from "react";
import HeaderMenuPresenter from "./HeaderMenuPresenter";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const TopHeader = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (e) => {
        console.log("e :>> ", e.target);
    };

    return <></>;
};

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: {
                home: "home",
                member: "member",
                lesson: "lesson",
            },
        };
    }
    render() {
        const { pages } = this.state;
        const { TopHeader } = this;
        return (
            <>
                <HeaderMenuPresenter pages={pages}>
                    <TopHeader />
                </HeaderMenuPresenter>
            </>
        );
    }
}
