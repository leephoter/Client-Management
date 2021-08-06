export const AdmissionList = {
    0: {
        id: "aa",
        password: "11",
    },
    1: {
        id: "bb",
        password: "22",
    },
};

export let AllId = Object.keys(AdmissionList).map((item, index) => {
    return AdmissionList[item].id;
});

export let AllPassword = Object.keys(AdmissionList).map((item, index) => {
    return AdmissionList[item].password;
});

export var nextId = Object.keys(AdmissionList).length;

export const setNextId = () => {
    nextId++;
};
