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

    // drawList = () => {
    //     const { clientContents } = this.props;
    //     const { name, age, now } = clientContents;
    //     const { reduceInfo } = this;
    //     {
    //         name.map((item, index) => (
    //             <ListItem>
    //                 <ListItemText
    //                     primary={item}
    //                     secondary={now - age[index] + "살"}
    //                 ></ListItemText>
    //                 <button data-value={index} onClick={reduceInfo}>
    //                     {"X"}
    //                 </button>
    //             </ListItem>
    //         ));
    //     }
    // };

    render() {
        const { drawList, reduceInfo } = this;
        const { clientContents } = this.props;
        const { name, age, now } = clientContents;
        return (
            <ListBox>
                {name.map((item, index) => (
                    <ListItem>
                        <ListItemText
                            primary={item}
                            secondary={now - age[index] + "살"}
                        ></ListItemText>
                        <button data-value={index} onClick={reduceInfo}>
                            {"X"}
                        </button>
                    </ListItem>
                ))}
            </ListBox>
        );
    }
}

export default ClientListPresenter;
