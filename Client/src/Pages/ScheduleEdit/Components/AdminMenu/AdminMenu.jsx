import React, {useState} from 'react';
import "./AdminMenu.css";
import Alert from "../../../../Components/Alert/Alert";
import {Link} from "react-router-dom";
import DropDownList from "../../../../Components/DropDownList/DropDownList";


const AdminMenu = (props) => {

    const uploaderShow = props.uploaderShow;
    const setUploaderShow = props.setUploaderShow;
    const setSchedule = props.setSchedule;
    const schedule = props.schedule;
    const search = props.search;
    const lessonAdding = props.lessonAdding;
    const setLessonAdding = props.setLessonAdding;
    const setSubjectFirst = props.setSubjectFirst;
    const subjectFirst = props.subjectFirst;
    const setTeacherFirst = props.setTeacherFirst;
    const teacherFirst = props.teacherFirst;
    const setTeacherSecond = props.setTeacherSecond;
    const teacherSecond = props.teacherSecond;
    const setAuditoryFirst = props.setAuditoryFirst;
    const auditoryFirst = props.auditoryFirst;
    const setAuditorySecond = props.setAuditorySecond;
    const auditorySecond = props.auditorySecond;

    const [isSubjectFocus, setIsSubjectFocus] = useState(false);
    const [isTeacherFirstFocus, setIsTeacherFirstFocus] = useState(false);
    const [isTeacherSecondFocus, setIsTeacherSecondFocus] = useState(false);
    const [isAuditoryFirstFocus, setAuditoryFirstFocus] = useState(false);
    const [isAuditorySecondFocus, setAuditorySecondFocus] = useState(false);
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
            </div>

            {schedule.length > 0 ?
                <div className="lesson">
                    <h3>Урок</h3>
                    <DropDownList
                        value="Дисциплина: "
                        array={schedule.map(item => item.subjectfirst)}
                        setValue={setSubjectFirst}
                        />
                    <DropDownList
                        value="Преподаватель первой подгруппы: "
                        array={schedule.map(item => item.teacherfirst)}
                        setValue={setTeacherFirst}
                    />
                    <DropDownList
                        value="Преподаватель второй подгруппы: "
                        array={schedule.map(item => item.teachersecond)}
                        setValue={setTeacherSecond}
                    />
                    <DropDownList
                        value="Аудитория первой подгруппы: "
                        array={schedule.map(item => item.auditoryfirst)}
                        setValue={setAuditoryFirst}
                    />
                    <DropDownList
                        value="Аудитория второй подгруппы: "
                        array={schedule.map(item => item.auditorysecond)}
                        setValue={setAuditorySecond}
                    />

                    <button
                        style={{
                            width: "100%"
                        }}
                        className="outlined-button"
                        onClick={() => setLessonAdding(!lessonAdding)}
                    >
                        {lessonAdding ? "Чтобы добавить урок, нажмите на нужную ячейку в таблице"
                            : "Добавить в расписание"
                        }
                    </button>
                </div>
                :
                ""
            }

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