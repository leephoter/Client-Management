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

export default class Login extends PureComponent {
    state = {
        AdmissionList,
        id: "",
        password: "",
    };
    handleChange = (e) => {
        const { AdmissionList } = this.state;
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
        if (id === "" || password === "") return;
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
        const { handleChange, pageSwitch, addAdmit } = this;
        const { pathname } = this.props.history.location;
        return (
            <LoginPresenter handleChange={handleChange} addAdmit={addAdmit}>
                {pageSwitch()}
            </LoginPresenter>
        );
    }
}
