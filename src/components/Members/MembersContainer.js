import React, { PureComponent, useState } from "react";
import MembersPresenter from "./MembersPresenter";

export default class extends PureComponent {
    render() {
        const { modalOpen, contents, getContents } = this.props;
        const {
            deleteInfo,
            getInfo,
            pushInfo,
            openModal,
            closeModal,
        } = this.props;
        return (
            <MembersPresenter
                modalOpen={modalOpen}
                contents={contents}
                getContents={getContents}
                deleteInfo={deleteInfo}
                getInfo={getInfo}
                pushInfo={pushInfo}
                openModal={openModal}
                closeModal={closeModal}
            />
        );
    }
}
