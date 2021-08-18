import React, { PureComponent } from "react";
import HomePresenter, { Months } from "./HomePresenter";
import MainPage from "../../common/MainPage/MainPage";
import { list } from "../../common/ClientList/ClientListDummy";
// import { payments } from "../..//common/Payment/Payment";

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
    months = (arrPayment, number) =>
        this.state.month.map((item, index) => {
            if (arrPayment === "title") {
                return <Months color="gray">{item + "월"}</Months>;
            } else {
                return (
                    <Months
                        name={number}
                        //누구인가 (list's index)
                        value={index}
                        //몇월인가
                        color="#cccccc"
                        onClick={this.checkPayment}
                        text={"123"}
                    >
                        {arrPayment.payment[index]}
                    </Months>
                );
            }
        });

    checkPayment = (e) => {
        const { list } = this.state;
        const _name = Number(e.target.name);
        const _value = Number(e.target.value);
        let _payment = list[_name].payment;
        if (_payment[_value] === "미납") {
            _payment[_value] = "카드";
        } else if (_payment[_value] === "카드") {
            _payment[_value] = "현금";
        } else {
            _payment[_value] = "미납";
        }
        console.log("_payment :>> ", _payment);
        // list의 누구의 payment를 변경할건지 인원자체를 바꿔서 setState list[?] = 대입하기
        // this.setState({
        //     list: {
        //         ...list,
        //         payment: _payment,
        //     },
        // });
    };
    clickLesson = (e) => {
        const _list = [];
        list.map((item, index) => {
            if (
                item.lessonName.find((each) => each === e.target.name) ===
                e.target.name
            ) {
                _list.push(item);
            }
        });
        this.setState({
            list: _list,
        });
    };
    render() {
        const { pages, list, pay, now, checkAll } = this.state;
        const { months, checkPayment, clickLesson } = this;
        const { pathname } = this.props.history.location;
        return (
            <MainPage pathname={pathname} clickLesson={clickLesson}>
                <HomePresenter
                    list={list}
                    months={months}
                    pay={pay}
                    now={now}
                    checkAll={checkAll}
                    clickLesson={clickLesson}
                />
            </MainPage>
        );
    }
}
