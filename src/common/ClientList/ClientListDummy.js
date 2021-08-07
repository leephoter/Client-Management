export const List = {
    0: {
        name: "Lee",
        age: "21",
    },
    1: {
        name: "Han",
        age: "22",
    },
    2: {
        name: "Han",
        age: "23",
    },
    3: {
        name: "Han",
        age: "24",
    },
};

export let ListNames = Object.keys(List).map((item, index) => {
    return List[item].name;
});

export let ListAges = Object.keys(List).map((item, index) => {
    return List[item].age;
});

export var nextList = Object.keys(List).length;

export const setNextList = () => {
    nextList++;
};
