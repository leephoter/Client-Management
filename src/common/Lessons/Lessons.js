import React, { PureComponent } from "react";
import LessonsPresenter from "./LessonsPresenter";

export default class extends PureComponent {
    state = {
        lessons: [{ name: "Class 1" }, { name: "Class 2" }],
    };

    render() {
        const { lessons } = this.state;
        return <LessonsPresenter lessons={lessons} />;
    }
}
