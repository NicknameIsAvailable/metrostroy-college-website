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
    ]

    return (
        <div className="ProfilePage">
            <h1>ПРОФИЛЬ</h1>
            <div className="profile-block">
                <div className="notifications-block">
                    <h2 className="notifications-title">Уведомления</h2>
                    {
                        notifications.map(notification =>
                            <Notification
                                date={notification.date}
                                time={notification.time}
                                content={notification.content}
                            />
                        )
                    }
                </div>

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
                        Email: pochta@pochta.ru
                        <br/>
                        Номер телефона: +7 (999) 999 99-99
                        <br/>
                        Адрес: ул. Пушкина д 1 к 1 кв 119
                    </h3>

                    <h2>
                        Документы
                    </h2>
                    <h3>
                        Паспорт: 123-456 от 01.01.01
                        <br/>
                        Аттеста о среднем общем образовании: 454545 от 01.01.01
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