import React from 'react';
import "./Profile.css";
import Notification from "./Components/Notification/Notification";

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
            </div>
        </div>
    );
};

export default Profile;