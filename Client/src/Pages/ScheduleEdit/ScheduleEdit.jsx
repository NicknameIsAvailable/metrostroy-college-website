import "./ScheduleEdit.css";
import AdminMenu from "./Components/AdminMenu/AdminMenu";
import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "../../axios";
import AdminSchedule from "./Components/AdminSchedule";
import Loader from "../../Components/Loader/Loader";

const ScheduleEdit = () => {

    const [lesson, setLesson] = useState();
    const [isAdmin, setIsAdmin] = useState(true)
    const [updatedSchedule, setUpdatedSchedule] = useState();

    const [schedule, setSchedule] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                        setSchedule(response.data);
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

    const [arraySchedule, setArraySchedule] = useState();

    const updateSchedule = (obj) => {

    }

    const updateLesson = (value) => {
        setLesson(value)
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

    useEffect(() => {
        search("", "", 1);
    }, []);

    useEffect(() => {
        setArraySchedule(schedule.map(obj => ({
            groupNumber: obj.groupnumber,
            time: obj.time,
            weekDay: obj.weekday,
            subjectFirst: obj.subjectfirst,
            teacherFirst: obj.teacherfirst,
            auditoryFirst: obj.auditoryfirst,
            subjectSecond: obj.subjectsecond,
            teacherSecond: obj.teachersecond,
            auditorySecond: obj.auditorysecond,
            locationName: obj.locationname,
            searchingTeacher: false
        })));

        console.log(12324, arraySchedule)
    }, [])

    if (isAdmin) {
        return (
            <div className="ScheduleEdit">
                <div className="admin-menu">
                    <AdminMenu
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
                {/*<AdminSchedule*/}
                {/*    updatedSchedule={updatedSchedule}*/}
                {/*    arraySchedule={arraySchedule}*/}
                {/*    setChangedValues={setChangedValues}*/}
                {/*    isLoading={isLoading}*/}
                {/*    isAdmin={isAdmin}*/}
                {/*    lesson={lesson}*/}
                {/*/>*/}
                </div>
            </div>
        );
    } else {
        return <Navigate to={"/error"}/>;
    }
};

export default ScheduleEdit;