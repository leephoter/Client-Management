import React, { PureComponent } from "react";
import HomePresenter, { Months } from "./HomePresenter";
import MainPage from "../../common/MainPage/MainPage";
// import {
//     lessons,
//     NewLessons,
//     paymentReset,
// } from "../../common/LessonGroup/LessonGroup";
import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

export default class Home extends PureComponent {
    state = {
        list: [],
        lessons: [],
        month: Array(12)
            .fill()
            .map(function (each, index) {
                return index + 1;
            }),
        pay: ["카드", "현금", "미납"],
        now: new Date().getFullYear(),
        lessonName: "",
    };

    componentDidMount() {
        // axios
        //     .get(`${ENDPOINT}/lessons`)
        //     .then((res) => {
        //         // console.log("RES : ", res.data.result.lessons);
        //         this.setState({
        //             lessons: res.data.result.lessons,
        //         });
        //     })
        //     .catch((err) => {
        //         console.log("ERR : ", err);
        //     });
    }

    title = () => {
        return this.state.month.map((item, index) => (
            <Months color="gray">{item + "월"}</Months>
        ));
    };
    payments = (_student) => {
        console.log("_student :>> ", _student);
        return _student["payments"].map((item, index) => (
            <Months
                color="gray"
                // form={this.state.lessonName}
                name={_student.name}
                tabIndex={index}
                onClick={this.changePayment}
            >
                {item.name}
            </Months>
        ));
        // <Months>

        // </Months>
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
        const { lessons } = this.state;
        const lessonId = Number(e.target.id);
        const selectedLesson = lessons.filter((e) => e["id"] === lessonId);
        console.log(`lessons`, lessons);

        axios
            .get(`${ENDPOINT}/lessons/${lessonId}/payments?date=2021-09-30`)
            .then((res) => {
                console.log("RES : ", res.data.result.members);
                this.setState({
                    list: res.data.result.members,
                });
            })
            .catch((err) => {
                console.log("ERR : ", err);
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
        console.log("list :>> ", list);
        return (
            <MainPage
                pathname={pathname}
                // lessons={lessons}
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
