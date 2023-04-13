import React, from "react";
import {ReactComponent as CloseIcon} from "../../../../Icons/CloseIconBlack.svg";
import "./DeleteModal.css";

const DeleteModal = (props) => {
    const obj = props.obj;
    const isVisible = props.isVisible;
    const setIsVisible = props.setIsVisible;

    if (isVisible) {
    return (
        <div 
            className="background"
            >
            <div className="modal">
                <button 
                    className="close-button"
                    onClick={() => setIsVisible(!isVisible)}
                    >
                    <CloseIcon/>
                </button>
                <h2>Вы действительно хотите удалить пользователя?</h2>
                <p>
                    Пользователь {obj.name} {obj.surname} #{obj.id} будет удален. Его можно будет вернуть, зарегистрировав его заново. 
                </p>

                <div className="modal-buttons">
                    <button className="modal-button">
                        <h3>
                            отмена
                        </h3>
                    </button>
                    <button 
                        className="modal-button delete-button"
                        onClick={() => setIsVisible(false)}
                        >
                        <h3>
                            удалить
                        </h3>
                    </button>
                </div>
            </div>
        </div>
    )} else {
        return("");
    }
}

export default DeleteModal;