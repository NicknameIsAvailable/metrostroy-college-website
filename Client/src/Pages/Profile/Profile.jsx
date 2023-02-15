import React from 'react';
import "./Profile.css";
import Notification from "./Components/Notification/Notification";
import userImg from "../../Images/user-img.png";

const Profile = () => {
    const notifications = [
        {
            date: "12.12.12",
            time: "12:12",
            content: "Бебрик И.И. выложил новое задание в Google classroom"
        },
        {
            date: "13.11.11",
            time: "02:11",
            content: "Невероятный текст уведомления"
        },
        {
            date: "1.1.1",
            time: "23:34",
            content: "вавдоаылвоадлова"
        },
        {
            date: "1.1.1",
            time: "23:34",
            content: "вавдоаылвоадлова"
        },
        {
            date: "1.1.1",
            time: "23:34",
            content: "вавдоаылвоадлова"
        },
        {
            date: "1.1.1",
            time: "23:34",
            content: "вавдоаылвоадлова"
        },
    ]

    return (
        <div className="ProfilePage">
            <h1>ПРОФИЛЬ</h1>
            <div className="profile-block">
                <div className="info-block">
                    <div className="user-info">
                        <div className="image">
                            <div className="img-border"/>
                            <img src={userImg} alt="user image" className="user-image"/>
                        </div>

                        <div className="user-info__text">
                            <h2>Иванов Иван Иванович</h2>
                            <h3>29 группа информационные системы и программирование</h3>
                        </div>
                    </div>

                    <h2>
                        Личные данные
                    </h2>
                    <h3>
                        Email: <span className="hidden-info">pochta@pochta.ru</span>
                        <br/>
                        Номер телефона: <span className="hidden-info">+7 (999) 999 99-99</span>
                        <br/>
                        Адрес: <span className="hidden-info">ул. Пушкина д 1 к 1 кв 119</span>
                    </h3>

                    <h2>
                        Документы
                    </h2>
                    <h3>
                        Паспорт: <span className="hidden-info">123-456</span> от <span className="hidden-info">01.01.01</span>
                        <br/>
                        Аттестат о среднем общем образовании: <span className="hidden-info">454545</span> от <span className="hidden-info">01.01.01</span>
                        <br/>
                        <a href="">
                            Заявление
                        </a>
                    </h3>
                </div>
            </div>


        </div>
    );
};

export default Profile;