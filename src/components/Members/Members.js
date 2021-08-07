import React, { PureComponent } from "react";
import MembersPresenter from "./MembersPresenter";

export default class extends PureComponent {
    state = {
        modalOpen: false,
    };
    openModal = () => {
        this.setState({ modalOpen: true });
    };
    closeModal = () => {
        this.setState({ modalOpen: false });
    };
    render() {
        const { openModal, closeModal } = this;
        return (
            <MembersPresenter openModal={openModal} closeModa={closeModal} />
        );
    }
}
