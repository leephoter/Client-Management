import React, { PureComponent } from "react";
import MainPage from "../../common/MainPage/MainPage";
import LessonPresenter from "./LessonPresenter";
import { lessons, NewLessons } from "../../common/LessonGroup/LessonGroup";
import { list, paymentReset } from "../../common/ClientList/ClientListDummy";

export default class extends PureComponent {
    state = {
        lessons,
        registerModalOpen: false,
        transferModalOpen: false,
        newLesson: {
            name: "",
            day: "",
            time: "",
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
        NewLessons(_lesson);
        if (
            newLesson.name === "" ||
            newLesson.day === "" ||
            newLesson.time === ""
        ) {
            return;
        } else {
            return this.setState({
                lessons: _lesson,
                newLesson: {
                    name: "",
                    day: "",
                    time: "",
                },
                registerModalOpen: false,
            });
        }
    };
    transferList = (each) => {
        // const { lessons, lessonName } = this.state;
        // const _each = each;
        // _each.map((item, index) => {
        //     item.lessonName = item.lessonName.concat(lessonName);
        // });
        // console.log("_each :>> ", _each);
        // // this.setState({
        // //     list: {
        // //         ...list,
        // //         _each,
        // //     },
        // // });
        // this.addList(_each);
        // // return _each;
    };
    addList = (item) => {
        const { lessons, lessonName } = this.state;
        const _each = item;

        const _test = _each.map((item, index) => {
            Object.keys(item.lessonsName).find((e) => e === lessonName);
        });
        _each.map((item, index) => {
            if (_test !== lessonName) {
                item.lessonsName[lessonName] = paymentReset;
            }
        });
        this.setState({
            list: {
                ...list,
                _each,
            },
        });
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
            transferList,
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
                    transferList={transferList}
                    addList={addList}
                />
            </MainPage>
        );
    }
}
