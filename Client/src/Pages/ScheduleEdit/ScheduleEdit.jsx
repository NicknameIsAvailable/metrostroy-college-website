import "./ScheduleEdit.css";
import AdminMenu from "./Components/AdminMenu/AdminMenu";
import React, {useState} from "react";
import axios from "../../axios";
import Schedule from "../Schedule/Schedule";
import UploaderModal from "./Components/UploaderModal/UploaderModal";
import {Navigate} from "react-router-dom";
import NewElementsListModal from "./Components/NewElementsListModal/NewElementsListModal";
import Loader from "../../Components/Loader/Loader";

const ScheduleEdit = () => {

    const [subjectFirst, setSubjectFirst] = useState("");
    const [teacherFirst, setTeacherFirst] = useState("");
    const [teacherSecond, setTeacherSecond] = useState("");
    const [auditoryFirst, setAuditoryFirst] = useState("");
    const [auditorySecond, setAuditorySecond] = useState("");
    const [isNewElementsOpen, setIsNewElementsOpen] = useState(true);
    const [prevLessons, setPrevLessons] = useState([]);
    const [newLessons, setNewLessons] = useState([]);
    const [newElements, setNewElements] = useState([
        {
            name: "sdklfj",
            value: "aslkjdfasd"
        }
    ]);
    const [fromCsv, setFromCsv] = useState(true);
    const [updatedSchedule, setUpdatedSchedule] = useState();
    const [schedule, setSchedule] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [arraySchedule, setArraySchedule] = useState();

    // поиск и получение расписания с бд

    const search = async (inputs, radio, location) => {
        const requestOptions = {
            valueSearch: inputs,
            valueRadioButton: radio,
            valueLocation: location
        };

        try {
            await axios.post('/schedule.php',
                requestOptions
            )
                .then(response => {
                    if (response.data !== "Запрос не получил ни одного результата!") {
                        const data = response.data;
                        setSchedule(data);
                        setIsLoading(false);
                    } else {
                        search("", "", 1);
                    }
                })
        } catch (err) {
            alert("Произошла странная ошибка");
        }
    };

    // обновление расписание с помощью csv файла

    const [isFromCsv, setIsFromCsv] = useState(false);

    const updateSchedule = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        const formData = new FormData();
        formData.append('file', files[0]);

        console.log(files[0])

        if (files[0].type !== "text/csv")
            alert("Неверный формат файла!")
        else
            console.log("он пытается")
        axios.post('/newCsvFile.php', formData).then(response => {
            let data = response.data;
            console.log(response)
            setIsFromCsv(true);
            return setSchedule([...data[0], ...data[1], ...data[2], ...data[3], ...data[4]]);
        }).catch(e => {
            console.log(e)

            if (!e.response.data.access) {
                localStorage.removeItem("userData");
                document.cookie = "PHPSESSID; expires=-1;";
                return <Navigate to="/strange-error"/>
            }
        });
}

// Drag&Drop csv файла

const dragStartHandler = (e) => {
    e.preventDefault();
    setFromCsv(true);
    setDrag(true);
};

const dragLeaveHandler = (e) => {
    e.preventDefault();
    setFromCsv(false);
    setDrag(false);
};

const onDropHandler = (e) => {
    setSchedule([]);
    updateSchedule(e);
    setFromCsv(false);
    setUploaderShow(false);
}

const [drag, setDrag] = useState(false);
const [uploaderShow, setUploaderShow] = useState(false);

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

const [lessonAdding, setLessonAdding] = useState(false);

const [updatedLessons, setUpdatedLessons] = useState({
    fromCsv: fromCsv,
    prev: prevLessons,
    new: newLessons,
});

const userData = JSON.parse(window.localStorage.getItem('userData'))
if (!userData) return <Navigate to="/something-wrong"/>
const isAdmin = Boolean(userData.access === "0");
if (!isAdmin) return <Navigate to="/something-wrong"/>

if (userData) return (
    <div className="ScheduleEdit"
         onDragStart={() => {
             setDrag(true);
             setUploaderShow(true)
         }}
         onDragLeave={() => {
             setDrag(false);
             setUploaderShow(false);
         }}
         onDragOver={() => {
             setDrag(true);
             setUploaderShow(true)
         }}
    >
        <UploaderModal
            dragStartHandler={dragStartHandler}
            dragLeaveHandler={dragLeaveHandler}
            onDropHandler={onDropHandler}
            setUploaderShow={setUploaderShow}
            drag={drag}
            uploaderShow={uploaderShow}
            update={updateSchedule}
        />

        {/*<NewElementsListModal*/}
        {/*    newElements={newElements}*/}
        {/*    isNewElementsOpen={isNewElementsOpen}*/}
        {/*    setIsNewElementsOpen={setIsNewElementsOpen}*/}
        {/*/>*/}
        <div className="admin-menu">
            <Loader loading={isLoading}/>
            <AdminMenu
                isFromCsv={isFromCsv}
                uploaderShow={uploaderShow}
                setUploaderShow={setUploaderShow}
                setUpdatedSchedule={setUpdatedSchedule}
                updatedSchedule={updatedSchedule}
                updatedLessons={updatedLessons}
                updateSchedule={updateSchedule}
                arraySchedule={arraySchedule}
                setSubjectFirst={setSubjectFirst}
                setTeacherFirst={setTeacherFirst}
                setTeacherSecond={setTeacherSecond}
                setAuditoryFirst={setAuditoryFirst}
                setAuditorySecond={setAuditorySecond}
                setUpdatedLessons={setUpdatedLessons}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                lessonAdding={lessonAdding}
                setLessonAdding={setLessonAdding}
                isAdmin={isAdmin}
                schedule={schedule}
                setSchedule={setSchedule}
                search={search}
            />
        </div>
        <div className="schedule">

            {
                schedule.length === 0 ?
                    <div className="schedule-block">
                        <h3>Загрузить .csv файл с новым расписанием или вывести старое расписание из базы данных</h3>
                        <button
                            className="outlined-button"
                            onClick={() => {
                                search("", "", 1);
                                setFromCsv(false);
                            }}
                        >
                            Вывести старое расписание из базы данных
                        </button>
                        <button
                            className="outlined-button"
                            onClick={() => {
                                setUploaderShow(true);
                                setFromCsv(true);
                                console.log(fromCsv);
                            }}
                        >
                            Загрузить новое расписание
                        </button>
                    </div>
                    :
                    <>
                        <button
                            className="outlined-button"
                            onClick={() => {
                                search("", "", 1)
                                setFromCsv(false);
                            }}
                        >
                            Вывести старое расписание из базы данных
                        </button>
                        <Schedule
                            fromCsv={fromCsv}
                            setUpdatedLessons={setUpdatedLessons}
                            updatedLessons={updatedLessons}
                            prevLessons={prevLessons}
                            newLessons={newLessons}
                            setPrevLessons={setPrevLessons}
                            setNewLessons={setNewLessons}
                            lessonAdding={lessonAdding}
                            lesson={lesson}
                            isAdmin={isAdmin}
                            schedule={schedule}
                            search={search}
                        />
                    </>
            }

        </div>
    </div>
);
}
;

export default ScheduleEdit;