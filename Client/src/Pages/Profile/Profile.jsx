import React, {useState, useEffect} from 'react';
import "./Profile.css";
import Loader from '../../Components/Loader/Loader';
import easterEgg from "../../Images/картинка без которой ничего не будет работать.jpg";
import Lesson from './Components/Lesson/Lesson';
import {Link, Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchSchedule, selectSchedule} from "../../Redux/Slices/schedule";
import {logout, selectIsAuth} from "../../Redux/Slices/auth";

const Profile = () => {

    const isAuth = useSelector(selectIsAuth);

    const user = useSelector(state => state.auth);

    console.log(user)

    // получение расписания с бэкенда


    // Объявление переменных состояния и функций
    const dispatch = useDispatch();
    const schedule = useSelector(selectSchedule);

    const isLoading = schedule.status === 'loading'

    // Запускать функцию fetchSchedule при загрузке страницы
    useEffect(() => {
        dispatch(fetchSchedule());
    }, [dispatch]);

    const arraySchedule = schedule.map(obj => ({
        time: obj.time,
        weekDay: obj.weekday || obj.weekDay,
        subjectFirst: obj.subjectfirst || obj.subjectFirst,
        groupNumber: obj.groupnumber || obj.groupNumber,
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
    if (avaClicks === 100) {
        console.log("ААААААААААААААААААААА ЧТООООООООООООООООООООООООООООО")
        return (
            <img src={easterEgg} alt="ААААААААААААА ЧТОООООООООО"/>
        );
    }

    console.log(arraySchedule)

    if (user.data === null) return <Navigate to="/login"/>

    if (isAuth)
        return (
            <>
                <Loader loading={isLoading}/>
                <div className="ProfilePage">
                    <div className="container">
                        <div className="profile-block">
                            <div className="info-block">
                                <div className="cool-block">
                                    <div className="user-info">
                                        <div className="user-info__text">
                                            <h3>
                                                {user.data.data.access === "0" ?
                                                    "Админ"
                                                    :
                                                    `студент ${user.data.data.group} группы`}
                                            </h3>

                                            <h2 onClick={() => {
                                                setAvaClicks(avaClicks + 1);
                                                console.log("Нажми еще ", 1000 - avaClicks, " раз")
                                            }}>
                                                {user.data.data.name} {user.data.data.lastname}
                                            </h2>
                                            <h4>
                                                {user.data.data.mail}
                                            </h4>

                                            <h5 onClick={() => {
                                                logout()
                                                localStorage.removeItem("userData")
                                                return <Navigate to="/login"/>
                                            }}>
                                                Выйти
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                {
                                    user.data.data.access === "0" ?
                                        <h3>
                                            <Link
                                                to="/admin"
                                                style={{color: "#1f1f1f"}}
                                            >
                                                Войти в админ-панель
                                            </Link>
                                        </h3>
                                        :
                                        <>
                                            <h1>
                                                Твое расписание
                                            </h1>
                                            <div className="cool-block">

                                                <div className="your-schedule">
                                                    {
                                                        dayNumber === 0 || dayNumber === 6 ?
                                                            ""
                                                            :
                                                            <>

                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        gap: "12px"
                                                                    }}>
                                                                    <h2>
                                                                        Сегодня
                                                                    </h2>
                                                                    {
                                                                        arraySchedule
                                                                            .filter(item => item.weekDay === days[dayNumber]
                                                                                && item.groupNumber === user.data.data.group)
                                                                            .map(lesson => <Lesson obj={lesson}/>)
                                                                    }
                                                                </div>

                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        gap: "12px"
                                                                    }}>
                                                                    <h2>
                                                                        Завтра
                                                                    </h2>
                                                                    {
                                                                        arraySchedule
                                                                            .filter(item => item.weekDay === days[dayNumber + 1]
                                                                                && item.groupNumber === user.data.data.group)
                                                                            .map(lesson => <Lesson obj={lesson}/>)
                                                                    }
                                                                </div>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <Link to="/schedule">
                                                <h4 style={{color: "#1f1f1f"}}>
                                                    Посмотреть полное расписание
                                                </h4>
                                            </Link>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default Profile;