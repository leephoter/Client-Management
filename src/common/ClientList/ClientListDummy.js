export let list = [
    {
        name: "Lee",
        age: "21",
        lessonName: [],
    },
    {
        name: "Han",
        age: "22",
        lessonName: [],
    },
    {
        name: "Gyeol",
        age: "23",
        lessonName: [],
    },
    {
        name: "new",
        age: "24",
        lessonName: [],
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
