import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import {ReactComponent as SearchIcon} from "../../Icons/SearchIconWhite.svg";
import {ReactComponent as Burger} from "../../Icons/Burger.svg";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchSchedule} from "../../Redux/Slices/schedule";
import GroupsList from "./Components/GroupsList/GroupsList";

const Schedule = (props) => {
    const isAdmin = props.isAdmin;

    const dispatch = useDispatch();
    const scheduleData = useSelector((state) => state.schedule);

    const isScheduleLoading = scheduleData.schedule.status === "loading";

    console.log(scheduleData.schedule)

    useEffect(() => {
        dispatch(fetchSchedule);
    }, []);

    if (isScheduleLoading) {
        console.log("Загрузка")
    } else {
        console.log(scheduleData.schedule)
    }

    const [open, setOpen] = useState(false);
    const [chosenVariant, setChosenVariant] = useState();

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

        console.log(requestOptions)

        try {
            await axios.post('/schedule.php',
                requestOptions
            )
                .then(response => {
                    console.log(response.data);

                    if(response.data !== "Запроснеполучилниодногорезультата!") {
                        setSchedule(response.data);
                        setIsLoading(false);
                        setInputs(inputs);
                        setRadioInputs(radio);
                        setLocationInputs(location);
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(async () => {
        await search("", "", 1)
    }, [])

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

    const addresses = [
        "УЛ. ДЕМЬЯНА БЕДНОГО Д. 21",
        "ПРИДОРОЖНАЯ АЛЛЕЯ, Д. 7",
        "ИРИНОВСКИЙ ПР. Д. 29",
        "УЛ. УЧИТЕЛЬСКАЯ, Д. 3"
    ]

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
    if (lesson) {
        console.log(lesson, 923489023840)
    }

    return (
        <div className="Schedule">
            <div className="Search">
                <div className="search-block">
                    <input placeholder="поиск" className="search" type="text" onChange={e => {
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
                    <div className="DropDownList">
                        <div className="title" onClick={() => setOpen(!open)}>
                            <h3>
                                {chosenVariant || "Площадка"}
                            </h3>
                        </div>

                        <ul className="variants-list" style={
                            open ? {
                                position: "absolute",
                                top: "56px",
                                opacity: 1
                            } : {
                                display: "none",
                                opacity: 0
                            }}>
                            {addresses.map((variant, index) =>
                                <ol className="variant" onClick={async () => {
                                    setChosenVariant(variant);
                                    console.log(locationInputs);
                                    await search(inputs, radioInputs, index + 1);
                                    setOpen(!open);
                                }}>
                                    <h3>{variant}</h3>
                                </ol>
                            )}
                        </ul>
                    </div>

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

            {isLoading ?
                <h2>Загрузка</h2>
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