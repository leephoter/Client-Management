import React, { PureComponent } from "react";
import Modal from "react-modal";
import styled, { css, ThemeProvider } from "styled-components";
import "./Modal.css";

const Modals = styled(Modal)`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
`;
const ModalButton = styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
`;

const ModalSection = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
`;

const ModalHeader = styled.header`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`;
const ModalSectionHeader = styled.header`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`;
const ModalSectionHeaderButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
`;
const ModalSectionMain = styled.main`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`;
const ModalSectionFooter = styled.footer`
    padding: 12px 16px;
    text-align: right;
`;
const ModalSectionFooterButton = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
`;
// const ModalOpenModal = styled.`
//     display: flex;
//     align-items: center;
//     /* 팝업이 열릴때 스르륵 열리는 효과 */
//     animation: modal-bg-show 0.3s;
// `;
// @keyframes modal-show {
//     from {
//         opacity: 0;
//         margin-top: -50px;
//     }
//     to {
//         opacity: 1;
//         margin-top: 0;
//     }
// }
// @keyframes modal-bg-show {
//     from {
//         opacity: 0;
//     }
//     to {
//         opacity: 1;
//     }
// }

class ModalBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            push: false,
        };
    }
    clickPush = (push) => {
        this.props.pushInfo(push);
    };
    onSearchSubmit = (e) => {
        const { contents } = this.state;
        const _name = e.name;
        const _age = e.age;
    };
    render() {
        const { open, close, header } = this.props;
        const { push } = this.state;
        const { clickPush } = this;
        return (
            <div className={open ? "openModal modal" : "modal"}>
                {open ? (
                    <section>
                        <header>
                            {/* {header} */}
                            <button
                                className="close"
                                onClick={
                                    (close,
                                    clickPush(push),
                                    this.setState({ push: false }))
                                }
                            >
                                &times;
                            </button>
                        </header>
                        <main>{this.props.children}</main>
                        <footer>
                            <button
                                className="close"
                                onClick={
                                    (this.setState({ push: true }),
                                    clickPush(push))
                                }
                            >
                                {"push"}
                            </button>
                        </footer>
                    </section>
                ) : null}
            </div>
        );
    }
}
export default ModalBox;
