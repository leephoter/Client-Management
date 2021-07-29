// import React from "react";
// import { makeStyles } from "@material-ui/core/styles"; //원본
// // import { makeStyles } from "@material-ui/styles"; //
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import styled, { css, ThemeProvider } from "styled-components";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

// const IButton = styled(IconButton)`
//     height: 200px;
// `;

// export default function ButtonAppBar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             {/* <> */}
//             <AppBar position="static">
//                 <Toolbar>
//                     {/* <IconButton
//                         edge="start"
//                         className={classes.menuButton}
//                         color="inherit"
//                         aria-label="menu"
//                     >
//                         <MenuIcon />
//                     </IconButton> */}
//                     <IButton></IButton>
//                     <Typography variant="h6" className={classes.title}>
//                         News
//                     </Typography>
//                     <Button color="inherit">Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

// // export default ButtonAppBar;

import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import StaticDatePicker from "@material-ui/lab/StaticDatePicker";

export default function StaticDatePickerLandscape() {
    const [value, setValue] = React.useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
