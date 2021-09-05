import React, { PureComponent } from "react";
import MemberPresenter from "./MemberPresenter";
import MainPage from "../../common/MainPage/MainPage";
import { paymentReset } from "../../common/ClientList/ClientListDummy";
import { list, NewList } from "../../common/ClientList/ClientListDummy";
import { lessons } from "../../common/LessonGroup/LessonGroup";
import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

export default class Member extends PureComponent {
    state = {
        list,
        open: false,
        now: new Date().getFullYear() + 1,
        newClient: {
            name: "",
            age: "",
        },
        lessons: [],
    };

    componentDidMount() {
        //  TODO. Request to Server
        //  TODO. GET - /members
        // state.list
        // console.log("ComponentDidMount");

        axios
            .get(`${ENDPOINT}/members`)
            .then((res) => {
                console.log("RES : ", res.data);
                this.setState({
                    list: res.data.result.members,
                });
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
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

    deleteInfo = (e) => {
        const memberId = e.target.value;
        const { list } = this.state;
        // NewList(_list);

        // this.setState({
        //     list: _list,
        // });
        axios
            .delete(`${ENDPOINT}/members/${memberId}`)
            .then((res) => {
                console.log("RES : ", res);
                if (res.status >= 200 && res.status <= 204) {
                    const _list = list.filter((item) => {
                        return item.id !== Number(memberId);
                    });
                    this.setState({
                        list: _list,
                    });
                }
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
    };

    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false });
    };
    getNewClient = (e) => {
        const { newClient } = this.state;
        this.setState({
            newClient: {
                ...newClient,
                [e.target.name]: e.target.value,
            },
        });
    };
    addList = () => {
        const { list, newClient, open } = this.state;
        const _list = list.concat(newClient);
        NewList(_list);
        // console.log("newClient :>> ", newClient);
        if (newClient.name === "" || newClient.age === "") {
            return;
        } else {
            axios
                .post(`${ENDPOINT}/members`, {
                    name: newClient.name,
                    age: newClient.age,
                })
                .then((res) => {
                    console.log("RES : ", res);
                    console.log("_list :>> ", _list);
                    if (res.status >= 200 && res.status <= 204) {
                        console.log("11 :>> ");
                        // setState
                        this.setState({
                            list: _list,
                            newClient: {
                                name: "",
                                age: "",
                            },
                            open: false,
                        });
                    }
                })
                .catch((err) => {
                    console.log("ERR : ", err);
                });
            //axios

            //  TODO. Request to server with POST method
        }
    };
    render() {
        const { open, now, newClient, lessons } = this.state;
        const {
            deleteInfo,
            openModal,
            closeModal,
            getNewClient,
            addList,
        } = this;

        return (
            <MainPage
            // lessons={lessons}
            >
                <MemberPresenter
                    deleteInfo={deleteInfo}
                    openModal={openModal}
                    closeModal={closeModal}
                    getNewClient={getNewClient}
                    addList={addList}
                    open={open}
                    list={this.state.list}
                    newClient={newClient}
                />
            </MainPage>
        );
    }
}
