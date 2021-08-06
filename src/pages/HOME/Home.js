import React, { PureComponent } from "react";
import HomePresenter from "./HomePresernter";

export default class extends PureComponent {
    state = {
        pages: {
            home: "/home",
            member: "/member",
            lesson: "/lesson",
        },
    };
    pageSelect = () => {
        const { pathname } = this.props.history.location;
        if (pathname === "/home") {
            return <div>1</div>;
        } else if (pathname === "/member") {
            return <div>2</div>;
        } else if (pathname === "/lesson") {
            return <div>3</div>;
        }
    };
    render() {
        const { pages } = this.state;
        const { pageSelect } = this;
        const { pathname } = this.props.history.location;

        return (
            <HomePresenter
                pathname={pathname}
                pages={pages}
                pageSelect={pageSelect()}
            />
        );
    }
}
