// export let lessons = [
//     {
//         name: "축구",
//         day: "월",
//         startTime: "",
//         endTime: "",
//         students: [
//             {
//                 students: "Lee",
//                 all: false,
//                 lessonsPayment: Array(12)
//                     .fill()
//                     .map(function (each, index) {
//                         return "X";
//                     }),
//                 attendances: Array(4)
//                     .fill()
//                     .map(function (each, index) {
//                         return "X";
//                     }),
//             },
//             {
//                 students: "Han",
//                 all: false,
//                 lessonsPayment: Array(12)
//                     .fill()
//                     .map(function (each, index) {
//                         return "X";
//                     }),
//                 attendances: Array(4)
//                     .fill()
//                     .map(function (each, index) {
//                         return "X";
//                     }),
//             },
//         ],
//     },
//     {
//         name: "풋살",
//         day: "화",
//         startTime: "",
//         endTime: "",
//         students: [],
//     },
// ];

export let serverLessons = {
    result: {
        lessons: [
            {
                name: "축구",
                day: "월",
                startTime: "",
                endTime: "",
                students: [
                    {
                        students: "Lee",
                        all: false,
                        lessonsPayment: Array(12)
                            .fill()
                            .map(function (each, index) {
                                return "X";
                            }),
                        attendances: Array(4)
                            .fill()
                            .map(function (each, index) {
                                return "X";
                            }),
                    },
                    {
                        students: "Han",
                        all: false,
                        lessonsPayment: Array(12)
                            .fill()
                            .map(function (each, index) {
                                return "X";
                            }),
                        attendances: Array(4)
                            .fill()
                            .map(function (each, index) {
                                return "X";
                            }),
                    },
                ],
            },
        ],
    },
};

// export let LessonsNames = lessons.map((item, index) => {
//     return item.name;
// });

// export let LessonsAges = lessons.map((item, index) => {
//     return item.age;
// });

// export const NewLessons = (item) => {
//     lessons = item;
// };
