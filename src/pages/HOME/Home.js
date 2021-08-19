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
    months = (arrPayment, number) => {
        // const
        const lesson_name = list.map((item, index) => {
            return Object.keys(item.lessonsName);
        });
        console.log("lesson_name :>> ", lesson_name);
        return this.state.month.map((item, index) => {
            if (arrPayment === "title") {
                return <Months color="gray">{item + "월"}</Months>;
            } else {
                // console.log("arrPayment :>> ", arrPayment);
                return (
                    <Months
                        name={number}
                        //     //누구인가
                        value={index}
                        //     //몇월인가
                        color="#cccccc"
                        //     onClick={this.checkPayment}
                        //     text={"123"}
                    >
                        {/* {Object.keys(arrPayment.lessonsName)} */}
                    </Months>
                );
            }
        });
    };

    checkPayment = (e) => {
        const { list } = this.state;
        const _name = Number(e.target.name);
        const _value = Number(e.target.value);
        // let _payment = list[_name].payment;
        let _list = list.concat();
        let _payment = _list[_name].payment;
        // 그냥 let _list = list; 를 하면 _list를 수정했을 때 list도 수정이 된다
        // console.log("_list[_name] :>> ", _list[_name]);
        // console.log("_list[_name].payment :>> ", _list[_name].payment);
        // console.log("_payment[_value] :>> ", _payment[_value]);
        // console.log("_name :>> ", _name);
        // console.log("_value :>> ", _value);
        if (_payment[_value] === "미납") {
            _payment[_value] = "카드";
        } else if (_payment[_value] === "카드") {
            _payment[_value] = "현금";
        } else {
            _payment[_value] = "미납";
        }
        // console.log("list :>> ", list);
        // console.log(`_list`, _list);

        // list의 누구의 payment를 변경할건지 인원자체를 바꿔서 setState list[?] = 대입하기
        this.setState({
            list: _list,
        });
    };
    clickLesson = (e) => {
        const _list = [];
        console.log(
            `list[0].lessonsName[e.target.name]`,
            list[0].lessonsName[e.target.name]
        );
        console.log(
            "list[0].lessonsName[e.target.name] :>> ",
            list[0].lessonsName[e.target.name]
        );
        list.map((item, index) => {
            if (
                Object.keys(item.lessonsName).find(
                    (each) => each === e.target.name
                ) === e.target.name
            ) {
                console.log("item :>> ", item);
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
