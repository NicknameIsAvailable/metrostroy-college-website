import React, {useState} from 'react';
import "./AdminMenu.css";
import {ReactComponent as SaveIcon} from "../../../../Icons/SaveIcon.svg";
import {ReactComponent as CloseIcon} from "../../../../Icons/CloseIconBlack.svg";
import Alert from "../../../../Components/Alert/Alert";
import {Link} from "react-router-dom";


const AdminMenu = (props) => {

    const uploaderShow = props.uploaderShow;
    const setUploaderShow = props.setUploaderShow;
    const setSchedule = props.setSchedule;
    const search = props.search;
    const lessonAdding = props.lessonAdding;
    const setLessonAdding = props.setLessonAdding;
    const setSubjectFirst = props.setSubjectFirst;
    const setTeacherFirst = props.setTeacherFirst;
    const setTeacherSecond = props.setTeacherSecond;
    const setAuditoryFirst = props.setAuditoryFirst;
    const setAuditorySecond = props.setAuditorySecond;

    const [saveNotation, setSaveNotation] = useState(false);

    const saveSchedule = () => {
        setSaveNotation(!saveNotation)

        return (
            <Alert
                icon={<SaveIcon/>}
                saveNotation={saveNotation}
                content="Расписание сохранено"/>
        )
    }

    const [adminMenuShow, setAdminMenuShow] = useState(true);

    return (
        <div
            className="AdminMenu"
            style={adminMenuShow ? {left: 0} : {left: "-400px"}}
        >
            <div className="admin-menu__header">
                <h2>Редактор расписания</h2>
                <Link to="/schedule-edit/tutorial">
                    <div className="schedule-edit-tutorial__link">
                            ?
                    </div>
                </Link>
                <button 
                className="close-button" 
                style={{marginLeft: "auto"}}
                onClick={
                    () => {
                        setAdminMenuShow(!adminMenuShow);
                    }}
                >
                    <CloseIcon/>
                </button>
            </div>
            <h3>Урок</h3>
            <div className="lesson">
                <input
                    type="text"
                    placeholder="Название дисциплины"
                    className="no-outline underlined-input"
                    onChange={e => setSubjectFirst(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="ФИО преподавателя (инициалы)"
                    className="no-outline underlined-input"
                    onChange={e => setTeacherFirst(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="ФИО преподавателя (инициалы) для второй подгруппы"
                    className="no-outline underlined-input"
                    onChange={e => setTeacherSecond(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Номер аудитории"
                    className="no-outline underlined-input"
                    onChange={e => setAuditoryFirst(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Номер аудитории для второй подгруппы"
                    className="no-outline underlined-input"
                    onChange={e => setAuditorySecond(e.target.value)}
                />

                <button
                    className="add-lesson__button"
                    onClick={() => setLessonAdding(!lessonAdding)}
                >
                    {lessonAdding ? "Чтобы добавить урок, нажмите на нужную ячейку в таблице"
                        : "Добавить в расписание"
                    }
                </button>
            </div>

            <div className="admin-menu__buttons">
                {!uploaderShow ?
                    <button className="outlined-button" onClick={() => setUploaderShow(true)}>
                        Загрузить файл Excel
                    </button>
                    :
                    ""
                }

                <button
                    className="outlined-button"
                    onClick={saveSchedule}>
                    Сохранить
                </button>
            </div>

            <button 
                className="outlined-button"
                onClick={() => {
                    setSchedule([]);
                    search("", "", 1)
                }}
            >
                    Загрузить старое расписание
            </button>
        </div>
    );
};

export default AdminMenu;