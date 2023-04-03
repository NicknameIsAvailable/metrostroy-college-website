import React, {useState} from 'react';
import "./AdminMenu.css";
import {ReactComponent as SaveIcon} from "../../../../Icons/SaveIcon.svg";
import axios from "../../../../axios";
import Alert from "../../../../Components/Alert/Alert";
import UploaderModal from "../UploaderModal/UploaderModal";
import {Link} from "react-router-dom";


const AdminMenu = (props) => {

    const uploaderShow = props.uploaderShow;
    const setUploaderShow = props.setUploaderShow;
    const searchingSubjectFirst = props.searchingSubjectFirst;
    const updateSchedule = props.updateSchedule;
    const setSearchingSubjectFirst = props.setSearchingSubjectFirst;
    const searchingTeacherFirst = props.searchingTeacherFirst;
    const setSearchingTeacherFirst = props.setSearchingTeacherFirst;
    const searchingTeacherSecond = props.searchingTeacherSecond;
    const setSearchingTeacherSecond = props.setSearchingTeacherSecond;
    const searchingAuditoryFirst = props.searchingAuditoryFirst;
    const setSearchingAuditoryFirst = props.setSearchingAuditoryFirst;
    const searchingAuditorySecond = props.searchingAuditorySecond;
    const setSearchingAuditorySecond = props.setSearchingAuditorySecond;
    const setArraySchedule = props.setArraySchedule;
    const arraySchedule = props.arraySchedule;

    const [lessonAdding, setLessonAdding] = useState(false);

    const setUpdatedSchedule = props.setUpdatedSchedule;

    const [subjectFirst, setSubjectFirst] = useState("");
    const [teacherFirst, setTeacherFirst] = useState("");
    const [teacherSecond, setTeacherSecond] = useState("");
    const [auditoryFirst, setAuditoryFirst] = useState("");
    const [auditorySecond, setAuditorySecond] = useState("");

    const lesson = {
        groupNumber: "",
        time: "",
        weekDay: "",
        subjectFirst: subjectFirst,
        teacherFirst: teacherFirst,
        auditoryFirst: auditoryFirst,
        subjectSecond: subjectFirst,
        teacherSecond: teacherSecond,
        auditorySecond: auditorySecond,
        locationName: ""
    };

    const updatedLesson = [
        {
            prevLesson: {},
            newLesson: {}
        }
    ]

    const setLesson = () => {
        setLessonAdding(!lessonAdding);
        props.updateLesson(lesson);
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

    const changeWhere = () => {
        console.log(arraySchedule.filter(
            item =>
                item.subjectfirst === searchingSubjectFirst
            || item.auditoryfirst === searchingAuditoryFirst
            || item.auditorysecond === searchingAuditorySecond
            || item.teacherfirst === searchingTeacherFirst
            || item.teachersecond === searchingTeacherSecond
        ));
    }

    return (
        <div
            className="AdminMenu"
        >
            <div className="admin-menu__header">
                <h2>Редактор расписания</h2>
                <Link to="/schedule-edit/tutorial">
                    <div className="schedule-edit-tutorial__link">
                            ?
                    </div>
                </Link>
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
                    onClick={setLesson}
                >
                    {lessonAdding ? "Чтобы добавить урок, нажмите на нужную ячейку в таблице"
                        : "Добавить в расписание"
                    }
                </button>
            </div>

            <h3>
                Заменить информацию в ячейках в которых
            </h3>

            <div className="equal-is">
                Урок =
                <input
                    type="text"
                    className="underlined-input no-outline"
                    placeholder="Название дисциплины"
                    onChange={e => setSearchingSubjectFirst(e.target.value)}
                />
            </div>

            <div className="equal-is">
                Первый преподавтель =
                <input
                    type="text"
                    className="underlined-input no-outline"
                    placeholder="ФИО преподавателя (инициалы)"
                    onChange={e => setSearchingTeacherFirst(e.target.value)}
                />
            </div>

            <div className="equal-is">
                Второй преподаватель =
                <input
                    type="text"
                    className="underlined-input no-outline"
                    placeholder="ФИО преподавателя (инициалы)"
                    onChange={e => setSearchingTeacherSecond(e.target.value)}
                />
            </div>

            <div className="equal-is">
                Первая аудитория =
                <input
                    type="text"
                    className="underlined-input no-outline"
                    placeholder="Номер аудитории"
                    onChange={e => setSearchingAuditoryFirst(e.target.value)}
                />
            </div>

            <div className="equal-is">
                Вторая аудитория =
                <input
                    type="text"
                    className="underlined-input no-outline"
                    placeholder="Номер аудитории"
                    onChange={e => setSearchingAuditorySecond(e.target.value)}
                />
            </div>

            <label className="only-for-this-group__checkbox">
                <input type="checkbox"/>
                Только для этой группы
            </label>

            <button className="outlined-button" onClick={changeWhere}>
                Заменить
            </button>

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
        </div>
    );
};

export default AdminMenu;