export let lessons = [
    {
        name: "축구",
        day: "월",
        time: "11:00-13:00",
    },
    {
        name: "풋살",
        day: "화",
        time: "11:00-13:00",
    },
    {
        name: "테니스",
        day: "수",
        time: "11:00-13:00",
    },
    {
        name: "수영",
        day: "목",
        time: "11:00-13:00",
    },
];

export let LessonsNames = lessons.map((item, index) => {
    return item.name;
});

export let LessonsAges = lessons.map((item, index) => {
    return item.age;
});

export const NewLessons = (item) => {
    const newLessons = item;
    lessons = newLessons;
};
