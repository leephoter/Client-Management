import React, { PureComponent } from "react";
import MainPage from "../../common/MainPage/MainPage";
import LessonPresenter from "./LessonPresenter";
import { list } from "../../common/ClientList/ClientListDummy";

export default class extends PureComponent {
    state = {
        list,
        open: false,
    };
    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false });
    };
    render() {
        const { list, open } = this.state;
        const { openModal, closeModal } = this;
        return (
            <MainPage>
                <LessonPresenter
                    list={list}
                    open={open}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            </MainPage>
        );
    }
}
