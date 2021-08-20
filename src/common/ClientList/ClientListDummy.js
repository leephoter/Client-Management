export let paymentReset = Array(12)
    .fill()
    .map(function (each, index) {
        return "미납";
    });

export let list = [
    {
        name: "Lee",
        age: "21",
        //lessonsName: { "수영": paymentReset, "풋살": paymentReset}...
        //lessonsName에 {"레쓴명": [출석]} 을 저장

        // payment: paymentReset,
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

export let setLesson = (item) => {
    // list =
};
