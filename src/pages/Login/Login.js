import React, { PureComponent } from "react";
import LoginPresenter from "./LoginPresenter";
import LoginButtons from "../../components/LoginButtons";
import JoinButtons from "../../components/JoinButtons";
import {
    AdmissionList,
    AllId,
    AllPassword,
    nextId,
    setNextId,
} from "../../common/AdmissionList/AdmissionList";

export default class extends PureComponent {
    state = {
        AdmissionList,
        id: "",
        password: "",
    };
    handleChange = (e) => {
        const { AdmissionList, id, password } = this.state;
        this.setState({
            ...AdmissionList,
            [e.target.name]: e.target.value,
        });
    };
    checkAdmit = (e) => {
        const { id, password } = this.state;
        if (AllId.includes(id) && password === AllPassword[AllId.indexOf(id)]) {
            console.log("pass!!");
        } else {
            console.log("non pass!!");
        }
    };
    pageSwitch = () => {
        const { pathname } = this.props.history.location;
        const { checkAdmit, addAdmit } = this;
        if (pathname === "/") {
            return <LoginButtons checkAdmit={checkAdmit} />;
        } else if (pathname === "/join") {
            return <JoinButtons addAdmit={addAdmit} />;
        } else return;
    };
    addAdmit = () => {
        const { AdmissionList, id, password } = this.state;
        if (id !== "" && password !== "") return;
        console.log("id, password :>> ", id, password);
        setNextId();
        this.setState({
            AdmissionList: {
                ...AdmissionList,
                [nextId]: {
                    id: String(id),
                    password: password,
                },
            },
            id: "",
            password: "",
        });
    };

    render() {
        const { handleChange, pageSwitch } = this;
        const { pathname } = this.props.history.location;
        console.log("this.state.AdmissionList :>> ", this.state.AdmissionList);
        return (
            <LoginPresenter handleChange={handleChange}>
                {pageSwitch()}
            </LoginPresenter>
        );
    }
}
