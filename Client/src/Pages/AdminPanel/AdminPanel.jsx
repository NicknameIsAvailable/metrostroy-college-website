import React from 'react';
import "./AdminPanel.css";
import Tab from "./Components/Tab/Tab";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../Redux/Slices/auth";
import {Navigate} from "react-router-dom";

const AdminPanel = () => {
    const isAuth = useSelector(selectIsAuth);
    const user = useSelector(state => state.auth);
    const isAdmin = Boolean(isAuth && user.data.data.AccessUser === "0")

    if (!isAdmin) return <Navigate to="/something-wrong"/>
    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className="container">
            <div className="AdminPanel">

                <h2>Метрики</h2>
                <div className="metrics-block">

                <Tab
                    title="Людей на сайте"
                    isInteractive={false}
                    count={324}
                />

                <Tab
                    title="Онлайн за 24 часа"
                    isInteractive={false}
                    count={3235}
                />
                </div>

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
    );
};

export default AdminPanel;