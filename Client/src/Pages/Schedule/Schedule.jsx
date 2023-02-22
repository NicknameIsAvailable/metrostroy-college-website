import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import {ReactComponent as SearchIcon} from "../../Icons/SearchIconWhite.svg";
import axios from "../../axios";

const Schedule = () => {

    const [open, setOpen] = useState(false);
    const [chosenVariant, setChosenVariant] = useState();

    const [schedule, setSchedule] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            valueSearch: "",
            valueRadioButton: "",
            valueLocation: 1,
        };
        await axios.post('/schedule.php',
            requestOptions
        )
            .then(response => {
                if (response.data === "Запрос не получил ни одного результата!") {
                    console.log(response.data)
                } else {
                    setSchedule(response.data);
                    console.log(response.data)
                    setIsLoading(false)
                }
            })
            .catch(error => {
                console.log(error)
            });
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

    const addresses = arraySchedule.map(obj => obj.address).reduce((a,b) => {
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

    const [inputs, setInputs] = useState("");
    const [radioInputs, setRadioInputs] = useState("Group");
    const [locationInputs, setLocationInputs] = useState(1);

    const search = async () => {
        if (inputs === '') {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                valueSearch: '',
                valueRadioButton: '',
            };
            await axios.post('/schedule.php',
                requestOptions
            )
                .then(response => {
                    setSchedule(response.data);
                    console.log(schedule)
                })
                .catch(error => console.log(error));
        } else {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                valueSearch: inputs,
                valueRadioButton: radioInputs,
                valueLocation: locationInputs,
            };
            await axios.post('/schedule.php',
                requestOptions
            )
                .then(response => {
                    if (response.data === "Запрос не получил ни одного результата!") {
                        console.log(response.data)
                    } else {
                        setSchedule(response.data);
                    }
                })
                .catch(error => console.log(error));
        }
    }

    const changeRadioInputs = (event) => {
        setRadioInputs(event.target.value);
    }

    return (
        <div className="Schedule">
            <div className="Search">
                <div className="search-block">
                    <input placeholder="поиск" className="search" type="text" onChange={(e) => setInputs(e.target.value)}/>
                    <button className="search-button" onClick={search}>
                        <SearchIcon/>
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
                                <ol className="variant" onClick={() => {
                                    setChosenVariant(variant);
                                    setLocationInputs(index + 1)
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

                <div className="groups-list">
                    {groups.map((gObj, gIndex) =>
                        <div className="group-block">
                            <h2>
                                Группа {gObj}
                            </h2>
                            <table>
                                <td>
                                    {weekdays.map((wObj, wIndex) =>
                                        <td>
                                            <tr>
                                                <h3 className="day-cell">{wObj}</h3>
                                            </tr>
                                            {arraySchedule.filter(item => item.weekDay === weekdays[wIndex]
                                                && item.groupNumber === groups[gIndex]).slice(0, 8).map((obj, index) =>
                                                <tr >
                                                    <div className="cell">
                                                        <div className="main-info">
                                                            <abbr title="Номер урока">
                                                                <h4>
                                                                    {index + 1}
                                                                </h4>
                                                            </abbr>

                                                            <abbr title="Урок">
                                                                <h2>
                                                                    {obj.subject}
                                                                </h2>
                                                            </abbr>
                                                        </div>
                                                        <div className="extra-info">
                                                            <p className="teacher">
                                                                <abbr title="Преподаватель">
                                                                {obj.teacher}
                                                                </abbr>
                                                            </p>
                                                            <p className="auditory">
                                                                <abbr title="Аудитория">
                                                                    {obj.auditory}
                                                                </abbr>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </tr>
                                            )}
                                        </td>
                                    )}
                                </td>
                            </table>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default Schedule;