import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const ListBox = styled(ListItemAvatar)`
    box-sizing: border-box;
    width: 500px;
`;

class ClientListPresenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: ["Min", "Gyeol", "Ik", "Jin"],
            age: [1991, 1997, 1991, 1991],
            now: new Date().getFullYear() + 1,
        };
    }
    shouldComponentUpdate(newProps) {
        this.addInfo();
        return this.state.opacity !== +newProps.isVisible;
    }

    reduceInfor = (e) => {
        const { name, age, now } = this.state;
        let _name = name;
        let _age = age;
        // console.log("_name, _age :>> ", _name, _age);
        _name.splice(e.target.dataset.value, 1);
        _age.splice(e.target.dataset.value, 1);
        console.log("e :>> ", _name, _age);
        this.setState({
            ...now,
            name: _name,
            age: _age,
        });
    };

    addInfo = () => {
        const { contents } = this.props;
        const { name, age } = this.state;
        let _name = contents.name;
        let _age = contents.age;
        console.log("contents :>> ", contents);
        this.setState({
            name: _name,
            age: _age,
        });
    };

    render() {
        const { name, age, now } = this.state;
        const { reduceInfor, addInfo } = this;
        const { clientInfo, push } = this.props;
        return (
            <ListBox>
                {name.map((item, index) => (
                    <ListItem>
                        <ListItemText
                            primary={item}
                            secondary={now - age[index] + "살"}
                        ></ListItemText>
                        <button data-value={index} onClick={reduceInfor}>
                            {"X"}
                        </button>
                    </ListItem>
                ))}
            </ListBox>
        );
    }
}

export default ClientListPresenter;
