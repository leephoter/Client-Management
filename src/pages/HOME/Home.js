import React, { PureComponent } from "react";
import HomePresenter, { Months } from "./HomePresenter";
import MainPage from "../../common/MainPage/MainPage";
import { list } from "../../common/ClientList/ClientListDummy";
import { payments } from "../..//common/Payment/Payment";

export default class Home extends PureComponent {
    state = {
        opensub: false,
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
        },
        month: Array(12)
            .fill()
            .map(function (item, index) {
                return index + 1;
            }),
        // testMonth: list.map((item, index) => {
        //     return Array(12)
        //         .fill()
        //         .map(function (item, index) {
        //             return index + 1;
        //         });
        // }),
        list,
        pay: ["카드", "현금", "미납"],
        now: new Date().getFullYear(),
        checkAll: {
            nonCheck: "",
            check: "V",
        },
        // payments,
        payNum: 0,
    };
    months = (e) =>
        this.state.month.map((item, index) => {
            if (e === null) {
                return <Months color="gray">{item + "월"}</Months>;
            } else {
                const newPayNum = this.state.payNum + 2;
                return (
                    <Months
                        value={index}
                        color="#cccccc"
                        onClick={this.checkPayment}
                        text={"123"}
                    >
                        {this.state.pay[newPayNum]}
                    </Months>
                );
            }
        });
    checkPayment = (e) => {
        console.log("e.target :>> ", e.target);
    };
    render() {
        const { pages, list, pay, now, checkAll } = this.state;
        const { months, checkPayment } = this;
        const { pathname } = this.props.history.location;
        // // console.log("this.state.payments :>> ", this.state.payments);
        return (
            <MainPage pathname={pathname}>
                <HomePresenter
                    list={list}
                    months={months}
                    // selectMonth={selectMonth}
                    pay={pay}
                    now={now}
                    checkAll={checkAll}
                />
            </MainPage>
        );
    }
}
