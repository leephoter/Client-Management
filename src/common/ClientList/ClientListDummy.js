export const List = [
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

export let ListNames = List.map((item, index) => {
    return item.name;
});

export let ListAges = List.map((item, index) => {
    return item.age;
});

export let DeleteList = (index) => {
    List.splice(index, 0);
};
