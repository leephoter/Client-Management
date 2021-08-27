import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import styled, { css, ThemeProvider } from "styled-components";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: 200,
    },
}));

const NewTextField = styled(TextField)`
    /* color: whitesmoke;
    border-color: white; */
`;

export default function DatePickers(props) {
    const classes = useStyles();
    const nowY = new Date().getFullYear();
    const nowM = new Date().getMonth();
    const nowD = new Date().getDay();
    const now = `${nowY}-${nowM}-${nowD}`;
    // const select = (e) => {
    //     props.selectDate(e);
    // };
    // console.log("props :>> ", props);
    return (
        <form className={classes.container} noValidate>
            <NewTextField
                id="date"
                label="DatePicker"
                type="date"
                // defaultValue="2020-05-24"
                defaultValue={now}
                className={classes.textField}
                // onClick={select}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}
