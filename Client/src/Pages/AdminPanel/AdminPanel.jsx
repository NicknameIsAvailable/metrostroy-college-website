import React, {useEffect, useState} from 'react';
import "./AdminPanel.css";
import Tab from "./Components/Tab/Tab";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {selectIsAuth} from "../../Redux/Slices/auth";

const AdminPanel = () => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserData(JSON.parse(window.localStorage.getItem('userData')));
    }, []);

    const isAuth = useSelector(selectIsAuth);
    const isAdmin = Boolean(isAuth && userData.access === "0")

    if (!isAdmin) return <Navigate to="/something-wrong"/>
    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className="admin-panel-page">
            <div className="container">
                <div className="AdminPanel">

                    <h2>Меню</h2>
                    <div className="menu">
                        <Tab
                            title="Расписание"
                            isInteractive={true}
                            changeDate={"12.12.12"}
                            changeTime={"12:12"}
                            changedUser={"И.И.Бебрик"}
                            link="/schedule-edit"
                            buttonContent={"Изменить"}
                        />

                        <Tab
                            title="Преподаватели"
                            isInteractive={true}
                            changeDate={"12.12.12"}
                            changeTime={"12:12"}
                            changedUser={"И.И.Бебрик"}
                            link="/users/teachers"
                            buttonContent={"Изменить"}
                        />

                        <Tab
                            title="Студенты"
                            isInteractive={true}
                            changeDate={"12.12.12"}
                            changeTime={"12:12"}
                            changedUser={"И.И.Бебрик"}
                            link="/users/students"
                            buttonContent={"Изменить"}
                        />

                        <Tab
                            title="Абитуриенты"
                            isInteractive={true}
                            changeDate={"12.12.12"}
                            changeTime={"12:12"}
                            link="/users/applicants"
                            buttonContent={"Изменить"}
                        />

                        <Tab
                            title="Админы"
                            isInteractive={true}
                            changeDate={"12.12.12"}
                            changeTime={"12:12"}
                            link="/users/admins"
                            buttonContent={"Изменить"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;