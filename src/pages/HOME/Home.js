import React, { PureComponent } from "react";
import HomePresenter, { Months } from "./HomePresenter";
import MainPage from "../../common/MainPage/MainPage";
// import { list } from "../../common/ClientList/ClientListDummy";
import {
    lessons,
    NewLessons,
    paymentReset,
} from "../../common/LessonGroup/LessonGroup";

export default class Home extends PureComponent {
    state = {
        opensub: false,
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
        },
        list: [],
        lessons,
        month: Array(12)
            .fill()
            .map(function (each, index) {
                return index + 1;
            }),
        pay: ["카드", "현금", "미납"],
        now: new Date().getFullYear(),
        lessonName: "",
    };
    title = () => {
        return this.state.month.map((item, index) => (
            <Months color="gray">{item + "월"}</Months>
        ));
    };
    payments = (_student) => {
        return _student["lessonsPayment"].map((item, index) => (
            <Months
                color="gray"
                form={this.state.lessonName}
                name={_student.students}
                tabIndex={index}
                onClick={this.changePayment}
            >
                {item}
            </Months>
        ));
    };

    changePayment = (e) => {
        // console.log("e.target :>> ", e.target.name);
        // e.target.form = lessonName
        // e.target.name = students
        // e.target.tabIndex = 월
        const { list } = this.state;
        const studentName = e.target.name;
        const month = e.target.tabIndex;
        const newList = [...list];
        // console.log("newList :>> ", newList);
        // console.log("studentName :>> ", studentName);
        newList.map((item) => {
            if (item["students"] === studentName) {
                //이 조건이 적용이 안 되는것 같은...
                //이름에 해당하는 lessonsPayment 선택이 안 됨
                // console.log("item :>> ", item);
                if (item["lessonsPayment"][month] === "X") {
                    item["lessonsPayment"][month] = "카드";
                } else if (item["lessonsPayment"][month] === "카드") {
                    item["lessonsPayment"][month] = "현금";
                } else {
                    item["lessonsPayment"][month] = "X";
                }
            }
        });

        //깊은복사를 해도 원시배열에 영향
        this.setState({
            list: newList,
        });
        NewLessons(lessons);
    };

    clickLesson = (e) => {
        // console.log("e :>> ", e.target.name);
        //e.target.name 레슨명
        let getList = [];
        lessons.map((item, index) => {
            if (item.name === e.target.name) {
                getList = item.students;
            }
        });
        this.setState({
            lessonName: e.target.name,
            list: getList,
        });
    };
    checkAll = (e) => {
        console.log("e.target :>> ", e.target);
        const { list } = this.state;
        list.map((item) => {
            if (item["students"] === e.target.name) {
            }
        });
    };

    render() {
        const { pages, list, pay, now, lessons } = this.state;
        const { title, payments, clickLesson, checkAll } = this;
        const { pathname } = this.props.history.location;
        return (
            <MainPage pathname={pathname} clickLesson={clickLesson}>
                <HomePresenter
                    list={list}
                    lessons={lessons}
                    title={title}
                    pay={pay}
                    now={now}
                    clickLesson={clickLesson}
                    payments={payments}
                    checkAll={checkAll}
                />
            </MainPage>
        );
    }
}
