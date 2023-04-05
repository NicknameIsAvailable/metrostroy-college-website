import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import axios from "../../axios";
import GroupsList from "./Components/GroupsList/GroupsList";
import Loader from "../../Components/Loader/Loader";
import Search from "./Components/Search/Search";

const Schedule = (props) => {
    const isAdmin = props.isAdmin;
    const search = props.search;
    const schedule = props.schedule;
    const isLoading = props.isLoading;
    const updatedSchedule = props.updatedSchedule;

    const [inputs, setInputs] = useState("");
    const [radioInputs, setRadioInputs] = useState("Group");
    const [locationInputs, setLocationInputs] = useState(1);

    const [teacherSearching, setTeacherSearching] = useState(false);

    console.log("schedule", schedule)

    const arraySchedule = schedule.map(obj => ({
        groupNumber: obj.groupnumber || obj.groupNumber,
        time: obj.time,
        weekDay: obj.weekday || obj.weekDay,
        subjectFirst: obj.subjectfirst || obj.subjectFirst,
        teacherFirst: obj.teacherfirst || obj.teacherFirst,
        auditoryFirst: obj.auditoryfirst || obj.auditoryFirst,
        subjectSecond: obj.subjectsecond || obj.subjectSecond,
        teacherSecond: obj.teachersecond || obj.teacherSecond,
        auditorySecond: obj.auditorysecond || obj.auditorySecond,
        locationName: obj.locationname || obj.locationName,
        searchingTeacher: false
    }))

    const groups = arraySchedule.map(obj => obj.groupNumber).reduce((a,b) => {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    }, []);

    const weekdays = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница"
    ]

    const lesson = props.lesson;

    return (
        <div className="container">
            <div className="Schedule">
                <Search
                    setInputs={setInputs}
                    inputs={inputs}
                    radioInputs={radioInputs}
                    setRadioInputs={setRadioInputs}
                    setLocationInputs={setLocationInputs}
                    locationInputs={locationInputs}
                    arraySchedule={arraySchedule}
                    schedule={schedule}
                    setTeacherSearching={setTeacherSearching}
                    search={search}
                />
                <Loader loading={isLoading}/>
                {isLoading ?
                    ""
                    :
                    <GroupsList
                        groups={groups}
                        weekdays={weekdays}
                        inputs={inputs}
                        arraySchedule={arraySchedule}
                        teacherSearching={teacherSearching}
                        isAdmin={isAdmin}
                        lesson={lesson}
                    />
                }
            </div>
        </div>
    );
};

export default Schedule;