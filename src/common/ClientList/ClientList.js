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
    color: green;
`;

const RemoveList = styled.button`
    width: 25px;
    height: 22px;

    background-color: white;
    border-radius: 3px;
    border: solid 1px ${lighten(0.2, "#85a9ff")};
    color: #88a9ff;
    cursor: pointer;
    box-shadow: 0 3px 4px -1px ${lighten(0.1, "#85a9ff")};
    &:hover {
        border: solid 1px ${lighten(0.1, "#85a9ff")};
        color: #85a9ff;
        box-shadow: 0 3px 4px -1px #85a9ff;
    }
    &:active {
        border: solid 1px ${darken(0.01, "#85a9ff")};
        color: #85a9ff;
    }
`;

const NewListItem = styled(ListItem)`
    box-sizing: border-box;
    box-shadow: 0 3px 4px -1px ${lighten(0.1, "#85a9ff")};
    &:hover {
        /* border: solid 1px ${lighten(0.1, "#85a9ff")}; */
        /* color: #85a9ff; */
        box-shadow: 0 3px 4px -1px #85a9ff;
    }
    &:active {
        /* border: solid 1px ${darken(0.01, "#85a9ff")}; */
        /* color: #85a9ff; */
    }
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
                    <NewListItem>
                        <ListItemText
                            primary={item.name}
                            secondary={item.age + "살"}
                        ></ListItemText>
                        <RemoveList data-index={index} onClick={deleteInfo}>
                            {"X"}
                        </RemoveList>
                    </NewListItem>
                ))}
            </ListBox>
        );
    }
}
