import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import {ReactComponent as SearchIcon} from "../../Icons/SearchIconWhite.svg";
import {ReactComponent as Burger} from "../../Icons/Burger.svg";
import axios from "../../axios";
import GroupsList from "./Components/GroupsList/GroupsList";
import DropDownList from "./Components/DropDownList/DropDownList";
import Loader from "../../Components/Loader/Loader";

const Schedule = (props) => {
    const isAdmin = props.isAdmin;

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
        weekDay: obj.weekday,
        subject: obj.subject,
        auditory: obj.auditory,
        teacher: obj.secondname,
        address: obj.locationname
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

    const [modalOpen, setModalOpen] = useState(false);

    const lesson = props.lesson;

    useEffect(() => {
        search("", "", 1)
    }, [])

    return (
        <div className="Schedule">
            <div className="Search">
                <div className="search-block">
                    <input placeholder="поиск" className="search no-outline" type="text" onChange={e => {
                        setInputs(e.target.value);
                        if (radioInputs === '') {
                            setRadioInputs("Group")
                        }
                    }}/>
                    <button className="search-button" onClick={async () => {
                        await search(inputs, radioInputs, locationInputs)
                    }}>
                        <SearchIcon/>
                    </button>
                    <button className="search-burger">
                        <Burger/>
                    </button>
                </div>

                <div className="buttons">
                    <DropDownList
                        search={search}
                        inputs={inputs}
                        radioInputs={radioInputs}
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        locationInputs={locationInputs}
                    />

                    <label className="radio-button">
                        <input
                            type="radio"
                            name="radio"
                            checked
                            value="Group"
                            onChange={changeRadioInputs}
                        />
                        По группе
                    </label>

                    <label className="radio-button">
                        <input
                            type="radio"
                            name="radio"
                            value="Teacher"
                            onChange={changeRadioInputs}
                        />
                        По преподавателю
                    </label>
                </div>
            </div>

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