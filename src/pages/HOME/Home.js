import React, { PureComponent } from "react";
import HomePresenter, { Months } from "./HomePresenter";
import MainPage from "../../common/MainPage/MainPage";
import { list } from "../../common/ClientList/ClientListDummy";

export default class Home extends PureComponent {
    state = {
        opensub: false,
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
            payment: "/payment",
        },
        list,
        pay: {
            cash: "현금",
            card: "카드",
            yet: "미납",
        },
        checkAll: {},
    };
    months = (e) =>
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            if (e === null) {
                return <Months>{item + "월"}</Months>;
            } else {
                return <Months>{this.state.pay.yet}</Months>;
            }
        });
    render() {
        const { pages, list, pay } = this.state;
        const { months } = this;
        const { pathname } = this.props.history.location;
        return (
            <MainPage pathname={pathname}>
                <HomePresenter list={list} months={months} pay={pay} />
            </MainPage>
        );
    }
}
