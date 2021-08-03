import React, { PureComponent } from "react";
import ClientListPresenter from "./ClientListPresenter";

export default class extends PureComponent {
    shouldComponentUpdate(nextProps) {
        // console.log(
        //     "this.props.clientContents :>> ",
        //     this.props.clientContents
        // );
        // console.log("nextProps :>> ", nextProps.clientContents);
        return this.props.clientContents !== nextProps.clientContents;
    }

    reduceInfo = (e) => {
        const { name, age, now } = this.props.clientContents;
        let _name = name;
        let _age = age;
        // console.log("_name :>> ", _name);
        _name.splice(e.target.dataset.value, 1);
        _age.splice(e.target.dataset.value, 1);
        this.props.deleteInfo(_name, _age);
    };

    render() {
        const { drawList, reduceInfo } = this;
        const { clientContents } = this.props;
        const { name, age, now } = clientContents;
        return (
            <ClientListPresenter
                name={name}
                age={age}
                now={now}
                reduceInfo={reduceInfo}
                clientContents={clientContents}
            />
        );
    }
}
