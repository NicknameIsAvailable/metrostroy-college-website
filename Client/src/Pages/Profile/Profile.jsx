import React, {useState} from 'react';
import "./Profile.css";
import Notification from "./Components/Notification/Notification";
import userImg from "../../Images/user-img.png";
import easterEgg from "../../Images/картинка без которой ничего не будет работать.jpg";

const Profile = () => {

    const [avatar, setAvatar] = useState(userImg);

    const [avaClicks, setAvaClicks] = useState(0);
    if (avaClicks === 1000) {
        console.log("ААААААААААААААААААААА ЧТООООООООООООООООООООООООООООО")
        return(
            <img src={easterEgg} alt="ААААААААААААА ЧТОООООООООО"/>
        );
    }

    return (
        <div className="container">
            <div className="ProfilePage">
                <div className="profile-block">
                    <div className="info-block">
                        <div className="user-info">
                            <div className="user-info__text">
                                <h2 onClick={() => {
                                    setAvaClicks(avaClicks + 1);
                                    console.log("Нажми еще ", 1000 - avaClicks, " раз")
                                }}>Иванов Иван Иванович</h2>
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
        </div>
    );
};

export default Profile;