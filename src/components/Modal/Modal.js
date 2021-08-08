import React from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

export default function () {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                회원 등록
            </button>
            <Modal
                aria-labelledby="Name"
                aria-describedby="Age"
                open={open}
                onClose={handleClose}
            >
                <Fade in={open}>
                    <div>
                        <h2 id="Name">이름 나이</h2>
                        <p id="Age">
                            <input />
                            <input />
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
