import React, { useState } from "react";
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

export default function DatePickers({ onClick }) {
    // const [list, setList] = useState([]);
    // const [selectDate, setSelectDate] = useState(null);

    const handleClickDate = (e) => {
        // console.log("handleClickDate 222", e.target.value);
        onClick(e.target.value);
        // this.setState({
        //     selectDate: e.target.value,
        // });
    };

    const classes = useStyles();
    const nowY = new Date().getFullYear();
    const nowM = new Date().getMonth();
    const nowD = new Date().getDay();
    const now = `${nowY}-${nowM}-${nowD}`;

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
                onChange={handleClickDate}
            />
        </form>
    );
}
