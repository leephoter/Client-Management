import React, { PureComponent } from "react";
import AttendancePresenter from "./AttendancePresenter";
import MainPage from "../../common/MainPage/MainPage";
import {
    // lessons,
    NewLessons,
    paymentReset,
} from "../../common/LessonGroup/LessonGroup";
import { Months } from "../Home/HomePresenter";
import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

export default class Attendance extends PureComponent {
    state = {
        list: [],
        lessons: [],
        month: Array(12)
            .fill()
            .map(function (each, index) {
                return index + 1;
            }),
        attendance: ["출석", "결석", "환불"],
        now: new Date().getFullYear(),
        lessonName: "",
    };

    componentDidMount() {
        axios
            .get(`${ENDPOINT}/lessons`)
            .then((res) => {
                console.log("RES : ", res.data.result.lessons);
                this.setState({
                    lessons: res.data.result.lessons,
                });
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
    }

    days = () => {
        const newList = [3, 10, 17, 24];
        return newList.map((item) => (
            <Months color="gray">{item + "일"}</Months>
        ));
    };
    attend = (_student) => {
        return _student["attendances"].map((item, index) => (
            <Months
                color="gray"
                form={this.state.lessonName}
                name={_student.students}
                tabIndex={index}
                onClick={this.changeAttend}
            >
                {item}
            </Months>
        ));
    };
    changeAttend = (e) => {
        const { list } = this.state;
        const studentName = e.target.name;
        const month = e.target.tabIndex;
        const newList = [...list];
        newList.map((item) => {
            if (item["students"] === studentName) {
                if (item["attendances"][month] === "X") {
                    item["attendances"][month] = "출석";
                } else if (item["attendances"][month] === "출석") {
                    item["attendances"][month] = "환불";
                } else {
                    item["attendances"][month] = "X";
                }
            }
        });
        this.setState({
            list: newList,
        });
    };

    clickLesson = (e) => {
        let getList = [];
        this.state.lessons.map((item, index) => {
            if (item.name === e.target.name) {
                getList = item.students;
            }
        });
        console.log("getList :>> ", getList);
        this.setState({
            lessonName: e.target.name,
            list: getList,
        });
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

    changeAll = (e) => {
        const { list } = this.state;
        const newList = list.concat();
        const value = e.target.value;
        newList.map((item1) => {
            if (item1.all === true) {
                item1["attendances"].fill(value);
            }
        });
        console.log("newList :>> ", newList);
        this.setState({
            list: newList,
        });
    };
    selectAll = () => {
        const { list } = this.state;
        let newList = list.concat();
        newList.map((item) => {
            if (item.all === true) {
                item.all = false;
            } else {
                item.all = true;
            }
        });
        this.setState({
            list: newList,
        });
    };

    render() {
        const { list, lessons, attendance, now } = this.state;
        const {
            days,
            attend,
            clickLesson,
            checkAll,
            changeAll,
            selectAll,
        } = this;
        const { pathname } = this.props.history.location;
        return (
            <MainPage
                pathname={pathname}
                // lessons={lessons}
                clickLesson={clickLesson}
            >
                <AttendancePresenter
                    list={list}
                    days={days}
                    attendance={attendance}
                    attend={attend}
                    now={now}
                    changeAll={changeAll}
                    checkAll={checkAll}
                />
            </MainPage>
        );
    }
}
