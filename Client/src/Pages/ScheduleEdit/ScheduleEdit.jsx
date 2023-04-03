import "./ScheduleEdit.css";
import AdminMenu from "./Components/AdminMenu/AdminMenu";
import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "../../axios";
import Schedule from "../Schedule/Schedule";
import UploaderModal from "./Components/UploaderModal/UploaderModal";
import Loader from "../../Components/Loader/Loader";

const ScheduleEdit = () => {

    const [lesson, setLesson] = useState();
    const [isAdmin, setIsAdmin] = useState(true)
    const [updatedSchedule, setUpdatedSchedule] = useState();

    const [schedule, setSchedule] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [arraySchedule, setArraySchedule] = useState();

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
                    if(response.data !== "Запрос не получил ни одного результата!") {
                        const data = response.data;
                        setSchedule(data);
                        setIsLoading(false);
                    } else {
                        search("", "", 1);
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    };

    const updateSchedule = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        const formData = new FormData();
        formData.append('file', files[0]);

        if (files[0].type !== "text/csv") 
            alert("Неверный формат файла!")
        else        
        axios.post('/newCsvFile.php', files[0]).then(response => {
            let data = response.data;        
            console.log(32, data)
            console.log(files[0])
            setSchedule([...data[0], ...data[1], ...data[2], ...data[3], ...data[4]]);      
            console.log(123, schedule) 
            console.log(22, arraySchedule)             
        })
    }

    const updateLesson = (e) => {

    }

    const changedValuesList = [];

    const [changedValues, setChangedValues] = useState();

    const [searchingSubjectFirst, setSearchingSubjectFirst] = useState();
    const [searchingTeacherFirst, setSearchingTeacherFirst] = useState();
    const [searchingTeacherSecond, setSearchingTeacherSecond] = useState();
    const [searchingAuditoryFirst, setSearchingAuditoryFirst] = useState();
    const [searchingAuditorySecond, setSearchingAuditorySecond] = useState();

    const fastUpdateSchedule = (values, newValues) => {

    }

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    };

    const onDropHandler = (e) => {
        updateSchedule(e);
        console.log(e)
    }

    const [drag, setDrag] = useState(false);
    const [uploaderShow, setUploaderShow] = useState(false);

    if (isAdmin) {
        return (
            <div className="ScheduleEdit"
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
            <UploaderModal
                dragStartHandler={dragStartHandler}
                dragLeaveHandler={dragLeaveHandler}
                onDropHandler={onDropHandler}
                setUploaderShow={setUploaderShow}
                drag={drag}
                uploaderShow={uploaderShow}
                update={updateSchedule}
            />
                <div className="admin-menu">
                    <AdminMenu
                        uploaderShow={uploaderShow}
                        setUploaderShow={setUploaderShow}
                        setUpdatedSchedule={setUpdatedSchedule}
                        updatedSchedule={updatedSchedule}
                        updateSchedule={updateSchedule}
                        setArraySchedule={setArraySchedule}
                        searchingSubjectFirst={searchingSubjectFirst}
                        setSearchingSubjectFirst={setSearchingSubjectFirst}
                        searchingTeacherFirst={searchingTeacherFirst}
                        setSearchingTeacherFirst={setSearchingTeacherFirst}
                        searchingTeacherSecond={searchingTeacherSecond}
                        setSearchingTeacherSecond={setSearchingTeacherSecond}
                        searchingAuditoryFirst={searchingAuditoryFirst}
                        setSearchingAuditoryFirst={setSearchingAuditoryFirst}
                        searchingAuditorySecond={searchingAuditorySecond}
                        setSearchingAuditorySecond={setSearchingAuditorySecond}
                        arraySchedule={arraySchedule}
                        updateLesson={updateLesson}
                        isAdmin={isAdmin}
                    />
                </div>
                <div className="schedule">

                {
                    schedule.length === 0 ?
                    <div className="schedule-block">
                    <h3>Загрузить .csv файл с новым расписанием или вывести старое расписание из базы данных</h3>
                        <button 
                            className="outlined-button"
                            onClick={() => search("", "", 1)}
                        >
                            Вывести из базы данных
                        </button>
                        <button 
                            className="outlined-button"
                            onClick={() => setUploaderShow(true)}
                        >
                            Загрузить новое расписание
                        </button>
                    </div>
                    :
                    <Schedule
                        schedule={schedule}
                        search={search}
                    />
                 }
                
                </div>
            </div>
        );
    } else {
        return <Navigate to={"/error"}/>;
    }
};

export default ScheduleEdit;