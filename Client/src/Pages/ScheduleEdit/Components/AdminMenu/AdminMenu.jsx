import React, {useState} from 'react';
import "./AdminMenu.css";
import {Link} from "react-router-dom";
import DropDownList from "../../../../Components/DropDownList/DropDownList";
import Switch from "../../../../Components/Switch/Switch";
import axios from "../../../../axios";
import {logout} from "../../../../Redux/Slices/auth";
import Notification from "../../../../Components/Notification/Notification";


const AdminMenu = ({
                       uploaderShow,
                       setUploaderShow,
                       setSchedule,
                       updatedLessons,
                       schedule,
                       search,
                       lessonAdding,
                       isLoading,
                       setLessonAdding,
                       subjectFirst,
                       setSubjectFirst,
                       teacherFirst,
                       setTeacherFirst,
                       teacherSecond,
                       setTeacherSecond,
                       auditoryFirst,
                       setAuditoryFirst,
                       auditorySecond,
                       setAuditorySecond,
                       setIsLoading,
                       isFromCsv
                   }) => {

    const [notificationContent, setNotificationContent] = useState("");
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const Alert = (content) => {
        setIsNotificationVisible(true);
        setNotificationContent(content)
    }

    const saveSchedule = async () => {


        setIsLoading(true)
        console.log(isLoading)

        try {
            const data = {fromCsv: updatedLessons.fromCsv, schedule}

            if (updatedLessons.fromCsv)
                axios.post("/saveSchedule.php", {fromCsv: true, schedule: schedule}).then(response => {
                    console.log(response)
                    setIsLoading(false);
                    Alert("Расписание обновлено");
                });

            if (!updatedLessons.fromCsv)
                axios.post("/saveSchedule.php", updatedLessons).then(response => {
                    console.log(JSON.parse(updatedLessons));
                    console.log(response);
                    console.log(444);
                    setIsLoading(false);
                    Alert("Расписание обновлено");
                });

            setIsLoading(false);
            Alert("Не удалось обновить расписание");

        } catch (e) {
            console.log(e)
        }
    }

    const [adminMenuShow, setAdminMenuShow] = useState(true);

    const [isNewLesson, setIsNewLesson] = useState(false);

    return (<div
        className="AdminMenu"
        style={adminMenuShow ? {left: 0} : {left: "-400px"}}
    >
        <Notification setIsNotificationVisible={setIsNotificationVisible} isVisible={isNotificationVisible} content={notificationContent}/>
        <div className="admin-menu__header">
            <h2>Редактор расписания</h2>
            <Link to="/schedule-edit/tutorial">
                <div className="schedule-edit-tutorial__link">
                    ?
                </div>
            </Link>
        </div>

        {schedule ? <div className="lesson">
            <h3>Урок</h3>

            <Switch
                name="Новый урок"
                value={isNewLesson}
                setValue={setIsNewLesson}
            />

            {!isNewLesson ? <>
                <DropDownList
                    value="Дисциплина: "
                    array={schedule.map(item => item.subjectfirst || item.subjectFirst)}
                    setValue={setSubjectFirst}
                />
                <DropDownList
                    value="Преподаватель первой подгруппы: "
                    array={schedule.map(item => item.teacherfirst || item.teacherFirst)}
                    setValue={setTeacherFirst}
                />
                <DropDownList
                    value="Преподаватель второй подгруппы: "
                    array={schedule.map(item => item.teachersecond || item.teacherSecond)}
                    setValue={setTeacherSecond}
                />
                <DropDownList
                    value="Аудитория первой подгруппы: "
                    array={schedule.map(item => item.auditoryfirst || item.auditoryFirst)}
                    setValue={setAuditoryFirst}
                />
                <DropDownList
                    value="Аудитория второй подгруппы: "
                    array={schedule.map(item => item.auditorysecond || item.auditorySecond)}
                    setValue={setAuditorySecond}
                />
            </> : <>
                <label>
                    <span>Дисциплина: </span>
                    <br/>
                    <input
                        value={subjectFirst}
                        onChange={(e) => setSubjectFirst(e.target.value)} className="no-outline"
                        placeholder="Математика"/>
                </label>

                <label>
                    <span>Преподаватель первой подгруппы: </span>
                    <br/>
                    <input
                        value={teacherFirst}
                        onChange={(e) => setTeacherFirst(e.target.value)} className="no-outline"
                        placeholder="Фамильев И.О."/>
                </label>

                <label>
                    <span>Преподаватель второй подгруппы: </span>
                    <br/>
                    <input
                        value={teacherSecond}
                        onChange={(e) => setTeacherSecond(e.target.value)} className="no-outline"
                        placeholder="Фамильев И.О."/>
                </label>

                <label>
                    <span>Аудитория первой подгруппы: </span>
                    <br/>
                    <input
                        value={auditoryFirst}
                        onChange={(e) => setAuditoryFirst(e.target.value)} className="no-outline" placeholder="19"/>
                </label>

                <label>
                    <span>Аудитория второй подгруппы: </span>
                    <br/>
                    <input
                        value={auditorySecond}
                        onChange={(e) => setAuditorySecond(e.target.value)} className="no-outline" placeholder="21"/>
                </label>
            </>}


            <button
                style={{
                    width: "100%"
                }}
                className="outlined-button"
                onClick={() => setLessonAdding(!lessonAdding)}
            >
                {lessonAdding ? "Чтобы добавить урок, нажмите на нужную ячейку в таблице" : "Добавить в расписание"}
            </button>
        </div> : ""}

        <div className="admin-menu__buttons">
            {!uploaderShow ? <button className="outlined-button" onClick={() => setUploaderShow(true)}>
                Загрузить файл Excel
            </button> : ""}

            <button
                className="outlined-button"
                onClick={saveSchedule}
                disabled={isLoading}
            >
                {isLoading ? "Подождите": "Сохранить"}
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
    </div>);
};

export default AdminMenu;