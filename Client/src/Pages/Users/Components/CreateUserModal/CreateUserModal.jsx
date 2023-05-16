import React from 'react';
import {ReactComponent as CloseIcon} from "../../../../Icons/CloseIconBlack.svg";
import "./CreateModalUsers.css";

const CreateUserModal = (props) => {
    const isVisible = props.isVisible;
    const setIsVisible = props.setIsVisible;

    if (isVisible) {
        return (
            <div className="background">
                <form className="modal" onSubmit={e => {
                    e.preventDefault();
                    setIsVisible(false);
                }}>
                    <button
                        className="close-button"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        <CloseIcon/>
                    </button>

                    <h2>Создание пользователя</h2>

                    <input
                        type="text"
                        className="underlined-input no-outline"
                        placeholder="Имя"
                    />

                    <input
                        type="text"
                        className="underlined-input no-outline"
                        placeholder="Фамилия"
                    />

                    <input
                        type="text"
                        className="underlined-input no-outline"
                        placeholder="e-mail"
                    />

                    <input
                        type="text"
                        className="underlined-input no-outline"
                        placeholder="пароль"
                    />

                    <h3>Роли пользователя</h3>
                    <select name="уровень доступа" id="">
                        <option value="0 - админ">0 - админ</option>
                        <option value="1 - директор">1 - директор</option>
                        <option value="2 - преподаватель">2 - преподаватель</option>
                        <option value="3 - студент">3 - студент</option>
                    </select>

                    <input
                        type="text"
                        className="underlined-input no-outline"
                        placeholder="Специальность"
                    />

                    <input
                        type="text"
                        className="underlined-input no-outline"
                        placeholder="Номер группы"
                    />

                    <button onClick="submit" className="outlined-button">
                        Сохранить
                    </button>
                </form>
            </div>
        );
    }
};

export default CreateUserModal;