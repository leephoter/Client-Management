import React, { PureComponent } from "react";
import AttendancePresenter from "./AttendancePresenter";
import MainPage from "../../common/MainPage/MainPage";
import { list } from "../../common/ClientList/ClientListDummy";
import {
    lessons,
    NewLessons,
    paymentReset,
} from "../../common/LessonGroup/LessonGroup";
import NewMonths from "./AttendancePresenter";

export default class Attendance extends PureComponent {
    state = {
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
        },
        list: [],
        lessons,
        attendance: ["출석", "결석", "환불"],
        now: new Date().getFullYear(),
        month: Array(12)
            .fill()
            .map(function (each, index) {
                return index + 1;
            }),
        now: new Date().getFullYear(),
        lessonName: "",
    };
    days = () => {
        const newList = [3, 10, 17, 24];
        return newList.map((item) => (
            <>
                <NewMonths color="gray">{item + "일"}</NewMonths>
            </>
        ));
    };
    attend = (_student) => {
        return _student["attendances"].map((item, index) => (
            <NewMonths
                color="gray"
                form={this.state.lessonName}
                name={_student.students}
                tabIndex={index}
                onClick={this.changeAttend}
            >
                {item}
            </NewMonths>
        ));
    };
    changeAttend = (e) => {
        const { list } = this.state;
        const studentName = e.target.name;
        const month = e.target.tabIndex;
        const newList = [...list];
        newList.map((item) => {
            if (item["students"] === studentName) {
                if (item["lessonsPayment"][month] === "X") {
                    item["lessonsPayment"][month] = "출석";
                } else if (item["lessonsPayment"][month] === "결석") {
                    item["lessonsPayment"][month] = "환불";
                } else {
                    item["lessonsPayment"][month] = "X";
                }
            }
        });
        this.setState({
            list: newList,
        });
    };

    clickLesson = (e) => {
        let getList = [];
        lessons.map((item, index) => {
            if (item.name === e.target.name) {
                getList = item.students;
            }
        });
        console.log("getList :>> ", getList);
        // this.setState({
        //     lessonName: e.target.name,
        //     list: getList,
        // });
    };
    checkAll = (e) => {
        const { list } = this.state;
        let checkedList = list.concat();
        checkedList.map((item, index) => {
            if (item["students"] === e.target.name) {
                if (item["all"] === false) {
                    return (item["all"] = true);
                } else {
                    return (item["all"] = false);
                }
            }
        });
        this.setState({
            list: checkedList,
        });
    };
    render() {
        const { list, attendance, now } = this.state;
        const { days, attend, clickLesson, checkAll } = this;
        const { pathname } = this.props.history.location;
        console.log("days :>> ", days);
        return (
            <MainPage pathname={pathname} clickLesson={clickLesson}>
                {/* <AttendancePresenter
                    list={list}
                    days={days}
                    attendance={attendance}
                    attend={attend}
                    now={now}
                    checkAll={checkAll}
                /> */}
                {days()}
            </MainPage>
        );
    }
}
