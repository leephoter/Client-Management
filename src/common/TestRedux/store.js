// const redux = require("redux");
// const reduxLogger = require("redux-logger");
// //-> Redux Lib 호출
// // console.log(redux);
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const logger = reduxLogger.createLogger;

// const combineReducers = redux.combineReducers;
// //-> createStore 함수 선언

// // actions
// const ADD_SUBSCRIBER = "ADD_SUBSCRIBER";
// const ADD_VIEWCOUNT = "ADD_VIEWCOUNT";
// const addSubscriber = () => {
//     return {
//         type: ADD_SUBSCRIBER,
//     };
// };
// const addViewCount = () => {
//     return {
//         type: ADD_VIEWCOUNT,
//     };
// };
// //-> action 코드 작성

// // reducers
// const subscriberState = {
//     subscribers: 300,
// };
// //-> 초기값 설정
// const subscriberReducer = (state = subscriberState, action) => {
//     switch (action.type) {
//         case ADD_SUBSCRIBER:
//             return {
//                 ...state,
//                 subscribers: state.subscribers + 2,
//             };
//         default:
//             return state;
//     }
// };
// const viewState = {
//     viewCount: 100,
// };

// const viewReducer = (state = viewState, action) => {
//     switch (action.type) {
//         case ADD_VIEWCOUNT:
//             return {
//                 ...state,
//                 viewCount: state.viewCount + 1,
//             };
//     }
// };

// //->

// // store
// const store = createStore(subscriberReducer, applyMiddleware(logger));

// // subscribe

// // store.subscribe(() => {
// //     console.log("store.getState() :>> ", store.getState());
// // });
// store.dispatch(addSubscriber());
// store.dispatch(addSubscriber());
// store.dispatch(addSubscriber());
// //-> 실행
// // import React from "react";

// // const store = () => {
// //     return <div></div>;
// // };

// // export default store;
