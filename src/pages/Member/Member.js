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
            lessonName: [],
        },
    };

    componentDidMount() {
        //  TODO. Request to Server
        //  TODO. GET - /members
        //  state.list
        console.log("ComponentDidMount");

        axios
            .get(`${ENDPOINT}/members`)
            .then((res) => {
                console.log("RES : ", res);
                // res.data = {
                //     result: {
                //         members: [
                //             {
                //                 id: 1,
                //                 name: "이한결",
                //                 age: 25,
                //             },
                //         ],
                //     },
                // }
                // this.setState({
                //     list: res.data.result.members
                // })
            })
            .catch((err) => {
                console.log("ERR : ", err);
            });
    }

    deleteInfo = (e) => {
        const { index } = e.target.dataset;
        const { list } = this.state;
        const _list = list.filter((item, index2) => index2 !== Number(index));
        NewList(_list);
        this.setState({
            list: _list,
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
        if (newClient.name === "" || newClient.age === "") {
            return;
        } else {
            this.setState({
                list: _list,
                newClient: {
                    name: "",
                    age: "",
                    lessonName: [],
                },
                open: false,
            });
            //  TODO. Request to server with POST method
        }
    };
    render() {
        const { open, now, newClient } = this.state;
        const {
            deleteInfo,
            openModal,
            closeModal,
            getNewClient,
            addList,
        } = this;
        return (
            <MainPage lessons={lessons}>
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
