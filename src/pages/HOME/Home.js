import React, { PureComponent } from "react";
import HomePresenter, { Months } from "./HomePresenter";
import MainPage from "../../common/MainPage/MainPage";
import {
    lessons,
    NewLessons,
    paymentReset,
} from "../../common/LessonGroup/LessonGroup";

export default class Home extends PureComponent {
    state = {
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
        const { list } = this.state;
        const studentName = e.target.name;
        const month = e.target.tabIndex;
        const newList = [...list];
        newList.map((item) => {
            if (item["students"] === studentName) {
                if (item["lessonsPayment"][month] === "X") {
                    item["lessonsPayment"][month] = "카드";
                } else if (item["lessonsPayment"][month] === "카드") {
                    item["lessonsPayment"][month] = "현금";
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
                // item1["lessonsPayment"].map((item2) => {
                //     item2 = value;
                // });
                console.log(
                    'item1["lessonsPayment"] :>> ',
                    item1["lessonsPayment"]
                );
                item1["lessonsPayment"].fill(value);
            }
        });
        this.setState({
            list: newList,
        });
        // NewLessons(lessons);
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
        const { list, pay, now } = this.state;
        const {
            title,
            payments,
            clickLesson,
            checkAll,
            changeAll,
            selectAll,
        } = this;
        const { pathname } = this.props.history.location;
        return (
            <MainPage pathname={pathname} clickLesson={clickLesson}>
                <HomePresenter
                    list={list}
                    lessons={lessons}
                    title={title}
                    pay={pay}
                    now={now}
                    payments={payments}
                    checkAll={checkAll}
                    changeAll={changeAll}
                    selectAll={selectAll}
                />
            </MainPage>
        );
    }
}
