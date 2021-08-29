export let paymentReset = Array(12)
    .fill()
    .map(function (each, index) {
        return "미납";
    });

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

export let serverMemberList = {
    result: {
        members: [
            {
                id: 1,
                name: "이한결",
                age: 25,
            },
        ],
    },
};

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
