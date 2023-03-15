import React, {useState} from 'react';
import "./AdminMenu.css";
import {ReactComponent as SaveIcon} from "../../../../Icons/SaveIcon.svg";
import axios from "../../../../axios";
import Alert from "../../../../Components/Alert/Alert";
import UploaderModal from "../UploaderModal/UploaderModal";


const AdminMenu = (props) => {

    const [drag, setDrag] = useState(false);
    const [uploaderShow, setUploaderShow] = useState(false);
    const [lessonAdding, setLessonAdding] = useState(false);

    const setUpdatedSchedule = props.setUpdatedSchedule;

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    };

    const [subjectFirst, setSubjectFirst] = useState();
    const [subjectSecond, setSubjectSecond] = useState();
    const [teacherFirst, setTeacherFirst] = useState();
    const [teacherSecond, setTeacherSecond] = useState();
    const [auditoryFirst, setAuditoryFirst] = useState();
    const [auditorySecond, setAuditorySecond] = useState();

    const lesson = {
        groupNumber: "",
        time: "",
        weekDay: "",
        subjectFirst: subjectFirst,
        teacherFirst: teacherFirst,
        auditoryFirst: auditoryFirst,
        subjectSecond: subjectSecond,
        teacherSecond: teacherSecond,
        auditorySecond: auditorySecond,
        locationName: ""
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
        axios.post('/newCsvFile.php', files[0]).then(response => setUpdatedSchedule(response.data))
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
                    className="no-outline"
                    onChange={e => setSubjectFirst(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Название дисциплины для второй подгруппы"
                    className="no-outline"
                    onChange={e => setSubjectSecond(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="ФИО преподавателя (инициалы)"
                    className="no-outline"
                    onChange={e => setTeacherFirst(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="ФИО преподавателя (инициалы) для второй подгруппы"
                    className="no-outline"
                    onChange={e => setTeacherSecond(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Номер аудитории"
                    className="no-outline"
                    onChange={e => setAuditoryFirst(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Номер аудитории для второй подгруппы"
                    className="no-outline"
                    onChange={e => setAuditorySecond(e.target.value)}
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

            <UploaderModal
                dragStartHandler={dragStartHandler}
                dragLeaveHandler={dragLeaveHandler}
                onDropHandler={onDropHandler}
                setUploaderShow={setUploaderShow}
                drag={drag}
                uploaderShow={uploaderShow}
            />

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