export let paymentReset = Array(12)
    .fill()
    .map(function (each, index) {
        return "X";
    });

export let lessons = [
    {
        name: "축구",
        day: "월",
        time: "11:00-13:00",
        students: [
            { students: "Lee", lessonsPayment: paymentReset },
            { students: "Han", lessonsPayment: paymentReset },
        ],
    },
    {
        name: "풋살",
        day: "화",
        time: "11:00-13:00",
        students: [],
    },
];

export let LessonsNames = lessons.map((item, index) => {
    return item.name;
});

export let LessonsAges = lessons.map((item, index) => {
    return item.age;
});

export const NewLessons = (item) => {
    lessons = item;
};
