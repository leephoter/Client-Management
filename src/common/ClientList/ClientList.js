import React, { PureComponent } from "react";
import ClientListPresenter from "./ClientListPresenter";
import {
    List,
    ListNames,
    ListAges,
    nextList,
    setNextList,
} from "./ClientListDummy";

export default class extends PureComponent {
    state = {
        List,
        name: "",
        age: "",
        now: new Date().getFullYear() + 1,
    };
    // shouldComponentUpdate(nextState) {
    //     // console.log("List :>> ", List);
    //     // console.log("this.state.List :>> ", this.state.List);
    //     return this.state.List !== List;
    // }

    // componentDidMount() {
    //     return this.state.List !== List;
    // }

    reduceInfo = (e) => {
        const { name, age, List } = this.state;
        const _index = String(e.target.dataset.value);
        const _List = List;
        delete _List[_index];
        this.setState({
            List: {
                _List,
            },
        });
    };

    render() {
        const { name, age, now } = this.state;
        const { reduceInfo } = this;

        console.log("List :>> ", List);
        return (
            <ClientListPresenter
                List={List}
                ListNames={ListNames}
                ListAges={ListAges}
                name={name}
                age={age}
                now={now}
                reduceInfo={reduceInfo}
            />
        );
    }
}
