import React, { useState } from "react";
import "./User.css";
import {ReactComponent as DeleteIcon} from "../../../../Icons/DeleteIcon.svg";
import {ReactComponent as EditIcon} from "../../../../Icons/EditIcon.svg";

const User = (props) => {
    const obj = props.obj;
    const setIsDeleteModalOpen = props.setIsDeleteModalOpen;
    const setDeleteModalInfo = props.setDeleteModalInfo;

    const [isButtonsShow, setIsButtonShow] = useState(false);
    const [isEditing, setIsEditing] = useState();
    if (!isEditing) {
    return (
        <div className="user" onMouseEnter={() => setIsButtonShow(true)} onMouseLeave={() => setIsButtonShow(false)}>
            <h2>
                {obj.name} {obj.surname} #{obj.id}
            </h2>
            
            <h3>
                {obj.group ? obj.group : ""} {obj.speciality ? obj.speciality : ""}
            </h3>
            
            <h4>
                Зарегистрирован {obj.registrationTime}
            </h4>

            <div 
                className="buttons"
                style={isButtonsShow ? {opacity: 1} : {opacity: 0}}
                onMouseEnter={() => setIsButtonShow(true)} onMouseLeave={() => setIsButtonShow(false)}
                >
                <button 
                    className="little-button"
                    onClick={() => setIsEditing(true)}
                    >
                    <EditIcon/>
                </button>

                <button 
                    className="little-button delete-button"
                    onClick={() => {
                        setIsDeleteModalOpen(true);
                        setDeleteModalInfo(obj);
                        }}
                    >
                    <DeleteIcon/>
                </button>
            </div>
        </div>
    )
    } else {
        return (
        <div className="user" onMouseEnter={() => setIsButtonShow(true)} onMouseLeave={() => setIsButtonShow(false)}>
            <input className="underlined-input no-outline" value={obj.name} placeholder="Имя"/>
            <input className="underlined-input no-outline" value={obj.surname} placeholder="Фамилия"/>
            <input className="underlined-input no-outline" value={obj.group} placeholder="группа"/>
            <input className="underlined-input no-outline" value={obj.speciality} placeholder="специальность"/>
            
            <h4>
                Зарегистрирован {obj.registrationTime}
            </h4>

            <div 
                className="buttons"
                style={isButtonsShow ? {opacity: 1} : {opacity: 0}}
                onMouseEnter={() => setIsButtonShow(true)} onMouseLeave={() => setIsButtonShow(false)}
                >
                    <button 
                        className="modal-button"
                        onClick={() => setIsEditing(false)}
                        >
                        <h3>
                            отмена
                        </h3>
                    </button>
                    <button 
                        className="modal-button"
                        onClick={() => setIsEditing(false)}
                        >
                        <h3>
                            сохранить
                        </h3>
                    </button>
            </div>
        </div>
        )
    }
}

export default User;