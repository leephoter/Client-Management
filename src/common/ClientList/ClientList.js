import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
// import List from "@material-ui/core/List";
// import { list } from "./ClientListDummy";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const ListBox = styled(ListItemAvatar)`
    box-sizing: border-box;
    width: 500px;
    color: gray;
`;

export default class extends PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("nextProps :>> ", nextProps.list);
        // console.log("nextState :>> ", nextState);
        return nextProps !== nextState;
    }

    render() {
        const { deleteInfo, list } = this.props;
        return (
            <ListBox>
                {list.map((item, index) => (
                    <ListItem>
                        <ListItemText
                            primary={item.name}
                            secondary={item.age + "살"}
                        ></ListItemText>
                        <button data-index={index} onClick={deleteInfo}>
                            {"X"}
                        </button>
                    </ListItem>
                ))}
            </ListBox>
        );
    }
}
