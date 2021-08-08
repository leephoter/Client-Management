import React, { PureComponent } from "react";
import ClientListPresenter from "./ClientListPresenter";
// import { List, ListNames, ListAges, DeleteList } from "./ClientListDummy";

export default class extends PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("nextProps :>> ", nextProps.List);
        console.log("nextState :>> ", nextState);
        // return nextProps !== nextState;
    }

    render() {
        const { List, deleteInfo } = this.props;
        console.log("List :>> ", List);
        return <ClientListPresenter List={List} deleteInfo={deleteInfo} />;
    }
}
