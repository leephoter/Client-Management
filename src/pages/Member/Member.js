import React, { PureComponent } from "react";
import MemberPresenter from "./MemberPresenter";
import MainPage from "../../common/MainPage/MainPage";
import { list } from "../../common/ClientList/ClientListDummy";
export default class extends PureComponent {
    state = {
        list,
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeattendance",
            member: "/member",
            lesson: "/lesson",
            payment: "/payment",
        },
        open: false,
        now: new Date().getFullYear() + 1,
    };
    deleteInfo = (e) => {
        const { index } = e.target.dataset;
        const { list } = this.state;
        const _list = list.filter((item, index2) => index2 !== Number(index));

        this.setState({
            list: _list,
        });
    };

    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false });
    };
    render() {
        const { pages, open, list, now } = this.state;
        const { deleteInfo, openModal, closeModal } = this;
        return (
            <MainPage>
                <MemberPresenter
                    deleteInfo={deleteInfo}
                    openModal={openModal}
                    closeModa={closeModal}
                    open={open}
                    list={list}
                    pages={pages}
                />
            </MainPage>
        );
    }
}
