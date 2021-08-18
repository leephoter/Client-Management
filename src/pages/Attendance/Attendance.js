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
        now: new Date().getFullYear(),
        checkAll: {},
    };
    months = (e) =>
        [7, 14, 21, 28].map((item, index) => {
            if (e === null) {
                return <Months title="title">{item + "일"}</Months>;
            } else {
                return <Months>{this.state.attendance.absence}</Months>;
            }
        });
    clickLesson = (e) => {
        const _list = [];
        list.map((item, index) => {
            if (
                item.lessonName.find((each) => each === e.target.name) ===
                e.target.name
            ) {
                _list.push(item);
                console.log("_list :>> ", _list);
            }
        });
        this.setState({
            list: _list,
        });
    };
    render() {
        const { pages, list, attendance, now } = this.state;
        const { months, clickLesson } = this;
        const { pathname } = this.props.history.location;
        return (
            <MainPage pathname={pathname} clickLesson={clickLesson}>
                <AttendancePresenter
                    list={list}
                    months={months}
                    attendance={attendance}
                    now={now}
                />
            </MainPage>
        );
    }
}
