import React, { PureComponent, useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import Header from "../Header/Header";
// import DateFnsUtils, { handleDateChange } from "@date-io/date-fns"; // choose your lib
// import {
//     DatePicker,
//     TimePicker,
//     DateTimePicker,
//     MuiPickersUtilsProvider,
// } from "@material-ui/pickers";

const MainContentBox = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    // background-color: greenyellow;
    float: inherit;
    width: 100%;
    height: 100vh;
    padding: 50px 30px 0 30px;
    color: green;
    flex-direction: column;
    // justify-content: flex-start;
    align-items: center;
`;
const MainContent = styled.div`
    height: 20px;
`;

class MainContentPart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // const [selectedDate, handleDateChange] = useState(new Date());
        return (
            <MainContentPart>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider> */}
            </MainContentPart>
        );
    }
}

export default MainContentPart;
