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
                    <div className="role-radio-buttons">

                        <label htmlFor="role1">
                            <input type="radio" id="role1" value="Студент"/>
                            Студент
                        </label>

                        <label htmlFor="role2">
                            <input type="radio" id="role2" value="Абитуриент"/>
                            Абитуриент
                        </label>

                        <label htmlFor="role3">
                            <input type="radio" id="role3" value="Преподаватель"/>
                            Преподаватель
                        </label>

                        <label htmlFor="role4">
                            <input type="radio" id="role4" value="Админ"/>
                            Админ
                        </label>
                    </div>

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

                    <button onClick="submit" className="modal-button">
                        Сохранить
                    </button>
                </form>
            </div>
        );
    }
};

export default CreateUserModal;