import React, { PureComponent } from "react";
import MainPage from "../../common/MainPage/MainPage";
import LessonPresenter from "./LessonPresenter";
import { lessons, NewLessons } from "../../common/LessonGroup/LessonGroup";

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
    };
    deleteInfo = (e) => {
        const { index } = e.target.dataset;
        const { lessons } = this.state;
        const _lessons = lessons.filter(
            (item, index2) => index2 !== Number(index)
        );
        console.log("_lessons :>> ", _lessons);
        NewLessons(_lessons);
        this.setState({
            lessons: _lessons,
        });
    };
    openTransfer = () => {
        this.setState({ transferModalOpen: true });
    };
    closeTransfer = () => {
        this.setState({ transferModalOpen: false });
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
    render() {
        const {
            lessons,
            newLesson,
            registerModalOpen,
            transferModalOpen,
        } = this.state;
        const {
            openModal,
            closeModal,
            openTransfer,
            closeTransfer,
            deleteInfo,
            getNewLesson,
            addLesson,
        } = this;
        return (
            <MainPage>
                <LessonPresenter
                    lessons={lessons}
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
                />
            </MainPage>
        );
    }
}
