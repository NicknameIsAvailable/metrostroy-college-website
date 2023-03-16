import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import axios from "../../axios";
import GroupsList from "./Components/GroupsList/GroupsList";
import Loader from "../../Components/Loader/Loader";
import Search from "./Components/Search/Search";

const Schedule = (props) => {
    const isAdmin = props.isAdmin;
    const updatedSchedule = props.upsatedSchedule;

    const [schedule, setSchedule] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [inputs, setInputs] = useState("");
    const [radioInputs, setRadioInputs] = useState("Group");
    const [locationInputs, setLocationInputs] = useState(1);

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
                        setInputs(inputs);
                        setRadioInputs(radio);
                        setLocationInputs(location);
                        setIsLoading(false);
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    };

    const arraySchedule = schedule.map(obj => ({
        groupNumber: obj.groupnumber,
        time: obj.time,
        weekDay: obj.weekday,
        subjectFirst: obj.subjectFirst,
        teacherFirst: obj.teacherFirst,
        auditoryFirst: obj.auditoryFirst,
        subjectSecond: obj.subjectSecond,
        teacherSecond: obj.teacherSecond,
        auditorySecond: obj.auditorySecond,
        locationName: obj.locationName
    }));

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

    const changeRadioInputs = (event) => {
        setRadioInputs(event.target.value);
    }

    const lesson = props.lesson;

    useEffect(() => {
        search("", "", 1)
    }, [])

    if (updatedSchedule) {
        try {
            search("", "", 1)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="Schedule">
            <Search
                setInputs={setInputs}
                inputs={inputs}
                radioInputs={radioInputs}
                setRadioInputs={setRadioInputs}
                setLocationInputs={setLocationInputs}
                locationInputs={locationInputs}
                search={search}
                changeRadioInputs={changeRadioInputs}
            />
            <Loader loading={isLoading}/>
            {isLoading ?
                ""
                :
                <GroupsList
                    groups={groups}
                    weekdays={weekdays}
                    arraySchedule={arraySchedule}
                    isAdmin={isAdmin}
                    lesson={lesson}
                />
            }
        </div>
    );
};

export default Schedule;