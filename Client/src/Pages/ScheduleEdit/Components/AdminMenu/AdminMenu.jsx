import React, {useState} from 'react';
import "./AdminMenu.css";
import {ReactComponent as UploadIcon} from "../../../../Icons/UploadIcon.svg";
import {ReactComponent as CloseIconBlack} from "../../../../Icons/CloseIconBlack.svg";
import {ReactComponent as SaveIcon} from "../../../../Icons/SaveIcon.svg";
import axios from "../../../../axios";
import Alert from "../../../../Components/Alert/Alert";


const AdminMenu = (props) => {

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

    const [subject, setSubject] = useState();
    const [teacher, setTeacher] = useState();
    const [auditory, setAuditory] = useState();

    const lesson = {
        groupNumber: "",
        weekDay: "",
        subject: subject,
        auditory: auditory,
        teacher: teacher,
        address: ""
    };

    const setLesson = () => {
        setLessonAdding(!lessonAdding);
        props.updateLesson(lesson);
    }

    const onDropHandler = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        const formData = new FormData();
        formData.append('file', files[0]);
        axios.post('url', formData).then(response => console.log(response))
        console.log(files);
    }

    const [saveNotation, setSaveNotation] = useState(false);

    const saveSchedule = () => {
        setSaveNotation(!saveNotation)
        console.log(saveNotation)

        return (
            <Alert
                icon={<SaveIcon/>}
                saveNotation={saveNotation}
                content="Расписание сохранено"/>
        )
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
                <input
                    type="text"
                    placeholder="Название дисциплины"
                    onChange={e => setSubject(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="ФИО преподавателя (инициалы)"
                    onChange={e => setTeacher(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Номер аудитории"
                    onChange={e => setAuditory(e.target.value)}
                />

                <button
                    className="add-lesson__button"
                    onClick={setLesson}
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

            <button
                className="outlined-button"
                onClick={saveSchedule}
            >
                Сохранить
            </button>
        </div>
    );
};

export default AdminMenu;