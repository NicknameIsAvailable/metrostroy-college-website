import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import {ReactComponent as SearchIcon} from "../../Icons/SearchIconWhite.svg";
import {ReactComponent as Burger} from "../../Icons/Burger.svg";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchSchedule} from "../../Redux/Slices/schedule";

const Schedule = () => {
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

        try {
            await axios.post('/schedule.php',
                requestOptions
            )
                .then(response => {

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

    return (
        <div className="Schedule">
            <div className="Search">
                <div className="search-block">
                    <input placeholder="поиск" className="search" type="text" onChange={(e) => {
                        setInputs(e.target.value)
                        console.log(inputs);
                        if (radioInputs === '') {
                            setRadioInputs("Group")
                        }
                    }}/>
                    <button className="search-button" onClick={async () => await search(locationInputs, radioInputs, locationInputs)}>
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

                <div className="groups-list">
                    {groups?.map((gObj, gIndex) =>
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