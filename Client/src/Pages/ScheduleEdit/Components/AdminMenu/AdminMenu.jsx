import React, {useState} from 'react';
import "./AdminMenu.css";
import {ReactComponent as UploadIcon} from "../../../../Icons/UploadIcon.svg";
import axios from "../../../../axios";

const AdminMenu = () => {

    const [drag, setDrag] = useState(false);
    const [uploaderShow, setUploaderShow] = useState(false);

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

            <div
                className="uploader"
                style={uploaderShow ? {
                    display: "flex"
                } : {
                    display: "none"
                }}

                style={drag ? {
                    border: "#46aebe 3px dashed"
                } : {

                }}

                onDragStart = {e => dragStartHandler(e)}
                onDragLeave = {e => dragLeaveHandler(e)}
                onDragOver =  {e => dragStartHandler(e)}
                onDrop = {e => onDropHandler(e)}
            >
                <UploadIcon/>
                {drag ?
                    <h2>Перетащите файл Excel сюда</h2>
                :
                    <h2>Отпустите файл Excel тут</h2>
                }
            </div>

            {!uploaderShow ?
                <button className="outlined-button" onClick={() => setUploaderShow(!uploaderShow)}>
                    Загрузить файл Excel
                </button>
                :
                ""
            }

        </div>
    );
};

export default AdminMenu;