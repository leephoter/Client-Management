import React, { PureComponent } from "react";
import MainPage from "../../common/MainPage/MainPage";
import LessonPresenter from "./LessonPresenter";
import {
    lessons,
    NewLessons,
    paymentReset,
} from "../../common/LessonGroup/LessonGroup";
import { list } from "../../common/ClientList/ClientListDummy";

export default class Lesson extends PureComponent {
    state = {
        lessons,
        registerModalOpen: false,
        transferModalOpen: false,
        newLesson: {
            name: "",
            day: "",
            time: "",
            students: [],
        },
        list,
        lessonName: "",
    };
    deleteInfo = (e) => {
        const { index } = e.target.dataset;
        const { lessons } = this.state;
        const _lessons = lessons.filter(
            (item, index2) => index2 !== Number(index)
        );
        NewLessons(_lessons);
        this.setState({
            lessons: _lessons,
        });
    };
    openTransfer = (e) => {
        this.setState({ transferModalOpen: true });
        this.setState({
            lessonName: e.target.name,
        });
    };
    closeTransfer = () => {
        return this.setState({ transferModalOpen: false });
    };
    openModal = () => {
        this.setState({ registerModalOpen: true });
    };

    closeModal = () => {
        this.setState({ registerModalOpen: false });
    };
    getNewLesson = (e) => {
        const { newLesson } = this.state;
        this.setState({
            newLesson: {
                ...newLesson,
                [e.target.name]: e.target.value,
            },
        });
    };

    addLesson = () => {
        const { lessons, newLesson, registerModalOpen } = this.state;
        const _lesson = lessons.concat(newLesson);
        if (
            newLesson.name === "" ||
            newLesson.day === "" ||
            newLesson.time === ""
        ) {
            return;
        } else {
            NewLessons(_lesson);
            return this.setState({
                lessons: _lesson,
                newLesson: {
                    name: "",
                    day: "",
                    time: "",
                    students: [],
                },
                registerModalOpen: false,
            });
        }
    };
    addList = (e) => {
        const { lessons, lessonName } = this.state;
        const _each = e;
        let newLessons = lessons.concat();
        // console.log("e :>> ", e);
        // e -> [ {name: "Han", age: "22"}, {name:"Gyeol", age: "23"} ]
        newLessons.map((item) => {
            if (item.name === lessonName) {
            }
        });

        const getStudents = e.map((item, index) => {
            return { students: item.name, lessonsPayment: paymentReset };
        });
        newLessons.map((item, index) => {
            if (item.name === lessonName) {
                item.students = getStudents;
            }
        });
        this.setState({
            lessons: newLessons,
        });

        NewLessons(newLessons);
    };

    render() {
        const {
            lessons,
            newLesson,
            registerModalOpen,
            transferModalOpen,
            list,
        } = this.state;
        const {
            openModal,
            closeModal,
            openTransfer,
            closeTransfer,
            deleteInfo,
            getNewLesson,
            addLesson,
            addList,
        } = this;
        return (
            <MainPage lessons={lessons}>
                <LessonPresenter
                    lessons={lessons}
                    list={list}
                    registerModalOpen={registerModalOpen}
                    transferModalOpen={transferModalOpen}
                    newLesson={newLesson}
                    openModal={openModal}
                    closeModal={closeModal}
                    openTransfer={openTransfer}
                    closeTransfer={closeTransfer}
                    deleteInfo={deleteInfo}
                    getNewLesson={getNewLesson}
                    addLesson={addLesson}
                    addList={addList}
                />
            </MainPage>
        );
    }
}
