import React, { PureComponent } from "react";
import MainPage from "../../common/MainPage/MainPage";
import LessonPresenter from "./LessonPresenter";
import { NewLessons } from "../../common/LessonGroup/LessonGroup";
// import { list } from "../../common/ClientList/ClientListDummy";
import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

export default class Lesson extends PureComponent {
    state = {
        lessons: [],
        registerModalOpen: false,
        transferModalOpen: false,
        newLesson: {
            name: "",
            day: "",
            startTime: "",
            endTime: "",
            students: [],
        },
        list: [],
        selectedLessonId: "",
    };

    componentDidMount() {
        //  TODO. Request to Server
        //  TODO. GET - /members
        // state.list
        // console.log("ComponentDidMount");

        axios
            .get(`${ENDPOINT}/lessons`)
            .then((res) => {
                // console.log("RES : ", res.data.result);
                this.setState({
                    lessons: res.data.result.lessons,
                });
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
        axios
            .get(`${ENDPOINT}/members`)
            .then((res) => {
                // console.log("RES : ", res.data.result);
                this.setState({
                    list: res.data.result.members,
                });
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
    }

    deleteInfo = (e) => {
        const { id } = e.target;
        const { lessons } = this.state;
        const _lessons = lessons.filter((item) => item.id !== Number(id));
        // console.log("id :>> ", id);
        axios
            .delete(`${ENDPOINT}/lessons/${id}`)
            .then((res) => {
                if (res.status >= 200 && res.status <= 204) {
                    this.setState({
                        lessons: _lessons,
                    });
                }
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
    };
    openTransfer = (e) => {
        this.setState({ transferModalOpen: true });
        this.setState({
            selectedLessonId: e.target.id,
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

        if (e.target.name === "startTime") {
            this.setState({
                newLesson: {
                    ...newLesson,
                    endTime: Number(e.target.value) + 1,
                },
            });
        }
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

        // console.log("_lesson.length :>> ", _lesson[_lesson.length - 1]);
        if (
            newLesson.name === "" ||
            newLesson.day === "" ||
            newLesson.time === ""
        ) {
            return alert("모두 입력해주세요");
        } else {
            axios
                .post(`${ENDPOINT}/lessons`, {
                    name: _lesson[_lesson.length - 1].name,
                    day: _lesson[_lesson.length - 1].day,
                    startTime: _lesson[_lesson.length - 1].startTime,
                    endTime: Number(_lesson[_lesson.length - 1].startTime) + 1,
                })
                .then((res) => {
                    console.log("RES : ", res);
                    if (res.status >= 200 && res.status <= 204) {
                        this.setState({
                            lessons: _lesson,
                            newLesson: {
                                name: "",
                                day: "",
                                startTime: "",
                                endTime: "",
                                students: [],
                            },
                            registerModalOpen: false,
                        });
                    }
                })
                .catch((err) => {
                    console.log("ERR : ", err);
                });
        }
    };
    addList = (e) => {
        console.log("e :>> ", e);
        const selectedMembers = e.map((item) => item.id);
        const { lessons, selectedLessonId } = this.state;
        console.log(
            "selectedLessonId, selectedMembers :>> ",
            selectedLessonId,
            selectedMembers
        );
        // console.log("selectedMembers :>> ", selectedMembers);
        console.log("e :>> ", e);
        axios
            .put(`${ENDPOINT}/lessons/${selectedLessonId}/members`, {
                memberIds: selectedMembers,
            })
            .then((res) => {
                console.log("RES : ", res);
                // this.setState({
                //     lessons: res.data.result.members,
                // });
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });

        //-----------------------------
        // const _each = e;
        // let newLessons = lessons.concat();
        // const getStudents = e.map((item, index) => {
        //     return {
        //         students: item.name,
        //         all: false,
        //         lessonsPayment: Array(12)
        //             .fill()
        //             .map(function (each, index) {
        //                 return "X";
        //             }),
        //     };
        // });
        // newLessons.map((item, index) => {
        //     if (item.name === selectedLessonId) {
        //         item.students = getStudents;
        //     }
        // });
        // this.setState({
        //     lessons: newLessons,
        // });
        // NewLessons(newLessons);
        //-----------------------------
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
        // console.log("list :>> ", list);
        return (
            <MainPage
            // lessons={lessons}
            >
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
