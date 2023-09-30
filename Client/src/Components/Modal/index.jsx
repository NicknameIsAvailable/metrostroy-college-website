import React from 'react';
import styles from "./index.module.css";
import {ReactComponent as Close} from "../../Icons/CloseIconBlack.svg";

const Modal = ({children, visible, setVisible}) => {

    return (
        <div className={`${styles.modalBg} ${visible ? styles.visible : ""}`}>
            <div className={`${styles.modal} ${visible ? styles.visible : ""}`}>
                <button className={styles.close} onClick={() => setVisible(false)}>
                    <Close/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;