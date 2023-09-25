import React, {useState} from 'react';
import "./Schedule.css";
import GroupsList from "./Components/GroupsList/GroupsList";
import Loader from "../../Components/Loader/Loader";
import Search from "./Components/Search/Search";

const Schedule = (props) => {
    const fromCsv = props.fromCsv;
    const isAdmin = props.isAdmin;
    const search = props.search;
    const schedule = props.schedule;
    const isLoading = props.isLoading;
    const updatedLessons = props.updatedLessons;
    const setUpdatedLessons = props.setUpdatedLessons;
    const setNewLessons = props.setNewLessons;
    const setPrevLessons = props.setPrevLessons;
    const lesson = props.lesson;
    const lessonAdding = props.lessonAdding;

    const [inputs, setInputs] = useState("");
    const [radioInputs, setRadioInputs] = useState("Group");
    const [locationInputs, setLocationInputs] = useState(1);

    const [teacherSearching, setTeacherSearching] = useState(false);

    // Преобразование schedule в удобный вид

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
    ];

    const filteredGroups = groups.filter(item => {
        if (Number(inputs[0])) {
            return item.toLowerCase().includes(inputs.toLowerCase());
        } else {
            return item;
        }
    });

    console.log(78, groups)

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
                        fromCsv={fromCsv}
                        prevLessons={props.prevLessons}
                        newLessons={props.newLessons}
                        setPrevLessons={setPrevLessons}
                        setNewLessons={setNewLessons}
                        lessonAdding={lessonAdding}
                        groups={filteredGroups}
                        setUpdatedLessons={setUpdatedLessons}
                        updatedLessons={updatedLessons}
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