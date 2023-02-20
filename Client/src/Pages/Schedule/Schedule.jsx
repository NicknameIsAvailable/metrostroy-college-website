import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import Search from "./Components/Search/Search";
import {ReactComponent as SearchIcon} from "../../Icons/SearchIconWhite.svg";
import axios from "../../axios";
import ContentLoader from "react-content-loader";
import DropDownList from "../../Components/DropDownList/DropDownList";

const Schedule = () => {

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
        };
        await axios.post('/schedule.php',
            requestOptions
        )
            .then(response => {
                setSchedule(response.data);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, [])

    const arraySchedule = schedule.map((obj, index) => ({
        groupNumber: obj.groupnumber,
        weekDay: obj.weekday,
        subject: obj.subject,
        auditory: obj.auditory,
        teacher: obj.secondname
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

    const [inputs, setInputs] = useState("");
    const [radioInputs, setRadioInputs] = useState("Group");

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
                    <DropDownList
                        title="площадка"
                        variants={[
                            "УЛ.Демьяна Бедного Д. 21",
                            "Придорожная аллея Д. 7",
                            "Ириновский проспект Д. 29",
                            "УЛ.Учительская Д. 3"
                        ]}
                    />

                    <label className="radio-button">
                        <input
                            type="radio"
                            name="radio"
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
                                {gObj}
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
            {/*    {arraySchedule.map((obj, index) =>*/}
            {/*        <div className="Table">*/}
            {/*            <div className="group-block">*/}
            {/*                <p>*/}
            {/*                    <span className="number">{obj.groupNumber}</span>*/}
            {/*                    <br/>*/}
            {/*                    группа*/}
            {/*                </p>*/}
            {/*                <h2>*/}
            {/*                </h2>*/}
            {/*            </div>*/}
            {/*            <TableRow day={schedule[0]}/>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>ВТ</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>СР</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>ЧТ</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>ПТ</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    )} */}
        </div>
    );
};

export default Schedule;