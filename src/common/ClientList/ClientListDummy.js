export let list = [
    {
        name: "Lee",
        age: "21",
    },
    {
        name: "Han",
        age: "22",
    },
    {
        name: "Gyeol",
        age: "23",
    },
    {
        name: "new",
        age: "24",
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
