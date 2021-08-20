import React, { PureComponent } from "react";
import HomePresenter, { Months } from "./HomePresenter";
import MainPage from "../../common/MainPage/MainPage";
import { list } from "../../common/ClientList/ClientListDummy";
import { lessons, paymentReset } from "../../common/LessonGroup/LessonGroup";

export default class Home extends PureComponent {
    state = {
        opensub: false,
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
        },
        list,
        lessons,
        month: Array(12)
            .fill()
            .map(function (each, index) {
                return index + 1;
            }),
        pay: ["카드", "현금", "미납"],
        now: new Date().getFullYear(),
        checkAll: {
            nonCheck: "",
            check: "V",
        },
        selectedLessonSt: [],
        payNum: 0,
        selectedLesson: list.map((item) => item.name),
    };
    title = (_name) => {
        // console.log("_name, number :>> ", _name, number);
        return this.state.month.map((item, index) => {
            if (_name === "title") {
                return <Months color="gray">{item + "월"}</Months>;
            } else {
                return <Months color="black">{"문제"}</Months>;
            }
        });
    };

    clickLesson = (e) => {
        let _name = [];
        let _payment;
        let _lessons = lessons.map((item, index) => {
            if (item.name === e.target.name) {
                return item.students;
            }
        });
        const new_lessons = _lessons.filter((e) => e !== undefined);
        const _test = new_lessons[0];
        const { selectedLessonSt } = this.state;
        console.log("_test :>> ", _test);
        const _selectedLessonSt = Object.keys(_test);
        const _list = _selectedLessonSt.map((item, index) => {
            return {
                name: item,
            };
        });
        console.log("_list, e.target.name :>> ", _list, e.target.name);
        let _selectedLesson = lessons.map((item, index) => {
            if (item.name === e.target.name) {
                return item;
            }
        });
        this.setState({
            list: _list,
            selectedLesson: _selectedLesson,
        });
    };
    render() {
        const { pages, list, pay, now, checkAll, lessons } = this.state;
        const { title, checkPayment, clickLesson, payment } = this;
        const { pathname } = this.props.history.location;
        console.log(`selectedLesson`, this.state.selectedLesson);
        return (
            <MainPage pathname={pathname} clickLesson={clickLesson}>
                <HomePresenter
                    list={list}
                    lessons={lessons}
                    title={title}
                    pay={pay}
                    now={now}
                    checkAll={checkAll}
                    clickLesson={clickLesson}
                    payment={payment}
                />
            </MainPage>
        );
    }
}
