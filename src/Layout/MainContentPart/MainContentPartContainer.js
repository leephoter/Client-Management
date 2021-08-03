import React, { PureComponent, useState } from "react";
import MainContentPartPresenter from "./MainContentPartPresenter";

export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            contents: {
                name: ["Min", "Gyeol", "Ik", "Jin"],
                age: [1991, 1997, 1991, 1991],
                now: new Date().getFullYear() + 1,
            },
            getContents: {
                name: "",
                age: "",
            },
            button: "",
        };
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    };
    closeModal = () => {
        this.setState({ modalOpen: false });
    };
    deleteInfo = (_name, _age) => {
        const { contents } = this.state;
        this.setState({
            contents: {
                ...contents,
                name: _name,
                age: _age,
            },
        });
    };
    getInfo = (newContents) => {
        const { getContents } = this.state;
        this.setState({
            getContents: {
                ...getContents,
                name: newContents.newName,
                age: newContents.newAge,
            },
        });
    };
    pushInfo = () => {
        const { contents, getContents } = this.state;
        const _name = contents.name.push(getContents.name);
        const _age = contents.age.push(getContents.age);
        this.setState({
            contents: {
                ...contents,
                name: _name,
                age: _age,
            },
        });
    };
    render() {
        const { modalOpen, contents, getContents } = this.state;
        const { pathname } = this.props;
        const { openModal, closeModal, deleteInfo, getInfo, pushInfo } = this;
        console.log("pathname :>> ", pathname);
        return (
            <MainContentPartPresenter
                pathname={pathname}
                modalOpen={modalOpen}
                contents={contents}
                getContents={getContents}
                openModal={openModal}
                closeModal={closeModal}
                deleteInfo={deleteInfo}
                getInfo={getInfo}
                pushInfo={pushInfo}
            />
        );
    }
}
