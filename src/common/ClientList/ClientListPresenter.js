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
    /* background: rgb(240, 200, 230); */
`;

class ClientListPresenter extends PureComponent {
    render() {
        const { reduceInfo, ListNames, ListAges } = this.props;
        // const { clientContents } = this.props;
        // const { name, age, now } = clientContents;
        return (
            <ListBox>
                {ListNames.map((item, index) => (
                    <ListItem>
                        <ListItemText
                            primary={item}
                            secondary={ListAges[index] + "살"}
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
