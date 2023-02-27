import React, {useState} from 'react';
import "./AdminMenu.css";
import {ReactComponent as UploadIcon} from "../../../../Icons/UploadIcon.svg";
import {ReactComponent as CloseIconBlack} from "../../../../Icons/CloseIconBlack.svg";
import axios from "../../../../axios";


const AdminMenu = () => {

    const [drag, setDrag] = useState(false);
    const [uploaderShow, setUploaderShow] = useState(false);
    const [lessonAdding, setLessonAdding] = useState(false);

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    };

    const onDropHandler = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        const formData = new FormData();
        formData.append('file', files[0]);
        axios.post('url', formData).then(response => console.log(response))
        console.log(files);
    }

    return (
        <div
            className="AdminMenu"
            onDragStart = {() => {
                setDrag(true);
                setUploaderShow(true)
            }}
            onDragLeave = {() => {
                setDrag(false);
                setUploaderShow(false);
            }}
            onDragOver =  {() => {
                setDrag(true);
                setUploaderShow(true)
            }}
        >

            <h2>Админ-панель</h2>

            <h3>Урок</h3>
            <div className="lesson">
                <input type="text" placeholder="Название дисциплины"/>
                <input type="text" placeholder="ФИО преподавателя (инициалы)"/>
                <input type="text" placeholder="Номер аудитории"/>

                <button
                    className="add-lesson__button"
                    onClick={() => setLessonAdding(!lessonAdding)}
                >
                    {lessonAdding ? "Чтобы добавить урок, нажмите на нужную ячейку в таблице"
                    : "Добавить в расписание"
                    }
                </button>
            </div>

            <div
                className="uploader"
                style={uploaderShow ? {
                    display: "flex"
                } : {
                    display: "none"
                }}

                onDragStart = {e => dragStartHandler(e)}
                onDragLeave = {e => dragLeaveHandler(e)}
                onDragOver =  {e => dragStartHandler(e)}
                onDrop = {e => onDropHandler(e)}
            >
                <button className="icon" onClick={() => setUploaderShow(false)}>
                    <CloseIconBlack/>
                </button>
                <UploadIcon/>
                {!drag ?
                    <h2>Перетащите файл Excel сюда</h2>
                :
                    <h2>Отпустите файл Excel тут</h2>
                }
            </div>

            {!uploaderShow ?
                <button className="outlined-button" onClick={() => setUploaderShow(true)}>
                    Загрузить файл Excel
                </button>
                :
                ""
            }

        </div>
    );
};

export default AdminMenu;