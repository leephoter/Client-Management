import React, { PureComponent } from "react";
import HomePresenter from "./HomePresernter";
import Members from "../../components/Members";

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
        const { openModal, closeModal } = this;
        if (pathname === "/home") {
            return <div>1</div>;
        } else if (pathname === "/member") {
            return <Members />;
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
