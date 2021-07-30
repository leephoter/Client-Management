// import * as React, { Component } from "react";
// import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
// import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
// import CalendarPicker from "@material-ui/lab/CalendarPicker";
// import MonthPicker from "@material-ui/lab/MonthPicker";
// import YearPicker from "@material-ui/lab/YearPicker";
// import Grid from "@material-ui/core/Grid";

// const minDate = new Date("2020-01-01T00:00:00.000");
// const maxDate = new Date("2034-01-01T00:00:00.000");

// class CalendarContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         const [date, setDate] = React.useState(new Date());
//         return (
//             <>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={12} md={6}>
//                             <CalendarPicker
//                                 date={date}
//                                 onChange={(newDate) => setDate(newDate)}
//                             />
//                         </Grid>
//                     </Grid>
//                 </LocalizationProvider>{" "}
//             </>
//             // <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             //     <DatePicker value={selectedDate} onChange={handleDateChange} />
//             //     <TimePicker value={selectedDate} onChange={handleDateChange} />
//             //     <DateTimePicker
//             //         value={selectedDate}
//             //         onChange={handleDateChange}
//             //     />
//             // </MuiPickersUtilsProvider>
//         );
//     }
// }

// export default CalendarContainer;

import * as React from "react";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import CalendarPicker from "@material-ui/lab/CalendarPicker";
import MonthPicker from "@material-ui/lab/MonthPicker";
import YearPicker from "@material-ui/lab/YearPicker";
import Grid from "@material-ui/core/Grid";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "@material-ui/core/Button";

const minDate = new Date("2019-01-01T00:00:00.000");
const maxDate = new Date("2024-01-01T00:00:00.000");

const newLocalizationProvider = styled(LocalizationProvider)``;
const newCalendarPicker = styled(CalendarPicker)``;

export default function CalendarContainer() {
    const [date, setDate] = React.useState(new Date());

    return (
        <newLocalizationProvider dateAdapter={AdapterDateFns}>
            <newCalendarPicker
                date={date}
                onChange={(newDate) => setDate(newDate)}
            />
        </newLocalizationProvider>
    );
}
