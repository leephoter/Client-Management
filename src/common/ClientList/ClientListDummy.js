export let paymentReset = Array(12)
    .fill()
    .map(function (each, index) {
        return "미납";
    });

export let list = [
    {
        name: "Lee",
        age: "21",
        lessonName: [],
        payment: paymentReset,
        Attendance: [],
    },
    {
        name: "Han",
        age: "22",
        lessonName: [],
        payment: paymentReset,
        Attendance: [],
    },
    {
        name: "Gyeol",
        age: "23",
        lessonName: [],
        payment: paymentReset,
        Attendance: [],
    },
    {
        name: "new",
        age: "24",
        lessonName: [],
        payment: paymentReset,
        Attendance: [],
    },
];

export let ListNames = list.map((item, index) => {
    return item.name;
});

export let ListAges = list.map((item, index) => {
    return item.age;
});

export const NewList = (item) => {
    const newList = item;
    list = newList;
};

export let setLesson = (item) => {
    // list =
};
