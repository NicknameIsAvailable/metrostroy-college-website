import React, {useState, useEffect} from 'react';
import "./Profile.css";
import Loader from '../../Components/Loader/Loader';
import axios from '../../axios';
import easterEgg from "../../Images/картинка без которой ничего не будет работать.jpg";
import Lesson from './Components/Lesson/Lesson';
import {Link, Navigate} from 'react-router-dom';

const Profile = () => {

    const [isAdmin, setIsAdmin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // получение расписания с бэкенда

    const [schedule, setSchedule] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isTeacher, setIsTeacher] = useState(true);

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
            alert('Произошла странная ошибка')
            console.log(err);
        }
    }

    useEffect(() => {
        search(12, "Group", "");
    }, []);

    const arraySchedule = schedule.map(obj => ({
        time: obj.time,
        weekDay: obj.weekday || obj.weekDay,
        subjectFirst: obj.subjectfirst || obj.subjectFirst,
        teacherFirst: obj.teacherfirst || obj.teacherFirst,
        auditoryFirst: obj.auditoryfirst || obj.auditoryFirst,
        subjectSecond: obj.subjectsecond || obj.subjectSecond,
        teacherSecond: obj.teachersecond || obj.teacherSecond,
        auditorySecond: obj.auditorysecond || obj.auditorySecond
    }));

    // дата и время

    const date = new Date();

    const dayNumber = date.getDay();

    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    // пасхалка

    const [avaClicks, setAvaClicks] = useState(0);
        if (avaClicks === 1000) {
        console.log("ААААААААААААААААААААА ЧТООООООООООООООООООООООООООООО")
        return(
            <img src={easterEgg} alt="ААААААААААААА ЧТОООООООООО"/>
        );
    }

    if (isLoggedIn) {
        return (
            <div className="container">
                <Loader loading={isLoading}/>
                <div className="ProfilePage">
                    <div className="profile-block">
                        <div className="info-block">
                            <div className="user-info">
                                <div className="user-info__text">

                                    {
                                        isAdmin ?
                                            <h3>
                                                <Link
                                                    to="/admin"
                                                    style={{color: "#1f1f1f"}}
                                                >
                                                    Войти в админ-панель
                                                </Link>
                                            </h3>
                                            :
                                            ""
                                    }
                                    <h2 onClick={() => {
                                        setAvaClicks(avaClicks + 1);
                                        console.log("Нажми еще ", 1000 - avaClicks, " раз")
                                    }}>
                                        Иванов Иван Иванович
                                    </h2>
                                    <h3>
                                        {isAdmin ?
                                            "Админ"
                                            :
                                            "29 группа информационные системы и программирование"}
                                    </h3>
                                </div>
                            </div>

                            {
                                dayNumber === 0 || dayNumber === 6 ?
                                    ""
                                    :
                                    <>
                                        <h2>
                                            Твое расписание на сегодня
                                        </h2>
                                        {
                                            arraySchedule
                                                .filter(item => item.weekDay === days[dayNumber])
                                                .map(lesson => <Lesson obj={lesson}/>)
                                        }
                                    </>
                            }

                            <Link to="/schedule">
                                <h4>
                                    Посмотреть полное расписание
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Navigate to={"/login"}/>
    }
};

export default Profile;