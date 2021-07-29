import React, { useState } from "react";
import DateFnsUtils, { handleDateChange } from "@date-io/date-fns"; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";

function DPicker() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
    );
}

export default DPicker;
