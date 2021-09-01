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
        let newList = list.concat();
        const value = e.target.value;
        // const newLists = newList.map((item1) => {
        // newList.map((item1) => {
        // if (item1.all === true) {
        // console.log("item1 :>> ", item1);
        // item1["lessonsPayment"].map((item2, index2) => {
        //     item1["lessonsPayment"][index2] = value;
        //item1 -> newList[0][1]...[n-1]의 주소
        // });
        //Js...--------------------
        // call by reference -> Object, array, date => item1새 주소에 newList[0], ... ,newList[n] 의 주소
        // call by value - boolean, string, number, undefined, null => item2 라는 새 주소에 X라는 값만 가져온거
        //Js...--------------------
        //         return item1["lessonsPayment"].fill(value);
        //     }
        // });
        newList.filter((e) => {
            if (e.all === true) {
                e["lessonsPayment"].fill(value);
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
    selectDay = (selectedLessons) => {
        this.setState({ lessons: selectedLessons });
    };
    render() {
        const { list, pay, now, lessons } = this.state;
        const {
            title,
            payments,
            clickLesson,
            checkAll,
            changeAll,
            selectAll,
            selectDay,
        } = this;
        const { pathname } = this.props.history.location;
        return (
            <MainPage
                pathname={pathname}
                lessons={lessons}
                clickLesson={clickLesson}
                selectDay={selectDay}
            >
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
