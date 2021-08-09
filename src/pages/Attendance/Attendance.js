import React, { PureComponent } from "react";
import AttendancePresenter, { Months } from "./AttendancePresenter";
import MainPage from "../../common/MainPage/MainPage";
import { list } from "../../common/ClientList/ClientListDummy";

export default class Attendance extends PureComponent {
    state = {
        pages: {
            homePayment: "/homePayment",
            homeAttendance: "/homeAttendance",
            member: "/member",
            lesson: "/lesson",
            payment: "/payment",
        },
        list,
        attendance: {
            attend: "출석",
            absence: "결석",
            refund: "환불",
        },
        checkAll: {},
    };
    months = (e) =>
        [7, 14, 21, 28].map((item, index) => {
            if (e === null) {
                return <Months>{item + "일"}</Months>;
            } else {
                return <Months>{this.state.attendance.absence}</Months>;
            }
        });
    render() {
        const { pages, list, attendance } = this.state;
        const { months } = this;
        return (
            <MainPage>
                <AttendancePresenter
                    list={list}
                    months={months}
                    attendance={attendance}
                />
            </MainPage>
        );
    }
}