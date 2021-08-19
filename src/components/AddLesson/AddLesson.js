import React from "react";
import { withStyles } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import styled from "styled-components";

const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        },
    },
}))(InputBase);

const NewSelectDay = styled(Select)`
    width: 90px;
`;

const NewSelectTime = styled(Select)`
    width: 200px;
`;

const NewNativeSelect = styled(NativeSelect)`
    width: 200px;
`;
const NewBootstrapInputLessonName = styled(BootstrapInput).attrs((props) => ({
    autocomplete: "off",
}))``;

export default function CustomizedSelects(props) {
    const [age, setAge] = React.useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
        // console.log("event.target.name :>> ", event.target.name);
        // console.log("event.target.value :>> ", event.target.value);
        // console.log("props :>> ", props);
        props.getNewLesson(event);
    };
    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="demo-customized-textbox">
                    Lesson-Name
                </InputLabel>
                <NewBootstrapInputLessonName
                    name={"name"}
                    id="demo-customized-textbox"
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <InputLabel id="demo-customized-select-label">Day</InputLabel>
                <NewSelectDay
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    name={"day"}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="none">{"none"}</MenuItem>
                    <MenuItem value="월요일">{"월요일"}</MenuItem>
                    <MenuItem value="화요일">{"화요일"}</MenuItem>
                    <MenuItem value="수요일">{"수요일"}</MenuItem>
                    <MenuItem value="목요일">{"목요일"}</MenuItem>
                    <MenuItem value="금요일">{"금요일"}</MenuItem>
                    <MenuItem value="토요일">{"토요일"}</MenuItem>
                    <MenuItem value="일요일">{"일요일"}</MenuItem>
                </NewSelectDay>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="demo-customized-select-native">
                    Time
                </InputLabel>
                <NewSelectTime
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    name={"time"}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="9:00 - 10:00">{"9:00 - 10:00"}</MenuItem>
                    <MenuItem value="10:00 - 11:00">{"10:00 - 11:00"}</MenuItem>
                    <MenuItem value="11:00 - 12:00">{"11:00 - 12:00"}</MenuItem>
                    <MenuItem value="13:00 - 14:00">{"13:00 - 14:00"}</MenuItem>
                    <MenuItem value="14:00 - 15:00">{"14:00 - 15:00"}</MenuItem>
                    <MenuItem value="15:00 - 16:00">{"15:00 - 16:00"}</MenuItem>
                    <MenuItem value="16:00 - 17:00">{"16:00 - 17:00"}</MenuItem>
                    <MenuItem value="17:00 - 18:00">{"17:00 - 18:00"}</MenuItem>
                </NewSelectTime>
            </FormControl>
        </div>
    );
}
