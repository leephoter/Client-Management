// import React, { PureComponent } from "react";
// import styled, { css, ThemeProvider } from "styled-components";

// const Info = styled.div`
//     color: gray;
//     font-size: 14px;
// `;
// const InputInfo = styled.input.attrs((props) => ({
//     type: props.type === "password" ? "password" : "text",
//     placeholder: "",
// }))`
//     box-sizing: border-box;
//     width: 100%;
//     height: 35px;
//     color: rgb(96, 96, 96);
//     // font-weight: bold;
//     font-size: 15px;
//     border: solid gray 0.5px;
//     outline: none;
//     padding-left: 6px;
//     margin-top: 5px;
//     margin-bottom: 10px;
//     border-radius: 5px;
// `;

// export default class InputUserDataPresenter extends PureComponent {
//     render() {
//         const { handleChange } = this.props;
//         return (
//             <>
//                 <Info>ID</Info>
//                 <InputInfo type="text" onChange={handleChange}></InputInfo>
//                 <Info>Password</Info>
//                 <InputInfo type="password" onChange={handleChange}></InputInfo>
//             </>
//         );
//     }
// }
