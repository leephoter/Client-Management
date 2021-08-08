import React, { PureComponent } from "react";
import styled, { css, ThemeProvider } from "styled-components";
// import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const ListBox = styled(ListItemAvatar)`
    box-sizing: border-box;
    width: 500px;
    color: gray;
`;

class ClientListPresenter extends PureComponent {
    render() {
        const { deleteInfo, List } = this.props;
        return (
            <ListBox>
                {List.map((item, index) => (
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

export default ClientListPresenter;
