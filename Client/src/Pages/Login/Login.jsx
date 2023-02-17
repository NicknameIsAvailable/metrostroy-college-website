import React, {useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";
import {ReactComponent as BackIconBlack} from "../../Icons/backIconBlack.svg";

const Login = () => {

    const [isNewAccount, setIsNewAccount] = useState(true);
    let [regStage, setRegStage] = useState(1);

    const [userData, setUserData] = useState({
        email: "",
        phoneNumber: "",
        password: "",
        secondname: "",
        name: "",
        surname: "",
        role: "",
        passport: "",
        educationDocument: "",
        photo: "",
        snils: "",
        registrationCertificate: ""
    });

    if (isNewAccount && regStage === 1)
    {
        return (
        <div className="login-page">
            <form className="Login">
                <div className="login-header">
                    <h2 className="login-title"> Регистрация </h2>
                    <h2 className="reg-stage-counter">{regStage}/3</h2>
                </div>
                <input
                    type="text"
                    name="text"
                    placeholder="почта"
                />
                <input
                    type="text"
                    name="phone-number"
                    placeholder="номер телефона"
                />
                <input
                    type="text"
                    name="password"
                    placeholder="пароль"
                />
                <div className="login-footer">
                    <button className="back-button"
                            onClick={() => {
                                setRegStage(regStage - 1)
                                console.log(regStage)
                            }}
                    >
                        <BackIconBlack/>
                    </button>
                    <button className="next-button outlined-button" onClick={() => {
                        setRegStage(regStage + 1)
                        console.log(regStage)
                    }}>
                        Далее
                    </button>
                </div>
            </form>
        </div>
        )
         }
    else if (isNewAccount && regStage === 2)
    {
        return  (
        <div className="login-page">
            <form className="Login">
                <div className="login-header">
                    <h2 className="login-title"> Регистрация </h2>
                    <h2 className="reg-stage-counter">{regStage}/3</h2>
                </div>
                <div className="inputs-block">
                <input
                    type="text"
                    name="secondname"
                    placeholder="Фамилия"
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                />

                <input
                    type="text"
                    name="surname"
                    placeholder="Отчество"
                />
                </div>

                <div className="radio-buttons-block">
                    <label>
                        <input type="radio"/>
                        Я абитуриент
                    </label>

                    <label>
                        <input type="radio"/>
                        Я родитель абитуриента
                    </label>

                    <label>
                        <input type="radio"/>
                        Я родитель студента
                    </label>
                </div>

                <div className="login-footer">
                    <button className="back-button"
                            onClick={() => {
                                setRegStage(regStage - 1)
                                console.log(regStage)
                            }}
                    >
                        <BackIconBlack/>
                    </button>
                    <button className="next-button outlined-button" onClick={() => {
                        setRegStage(regStage + 1)
                        console.log(regStage)
                    }}>
                        Далее
                    </button>
                </div>
            </form>
        </div>
        )
    }
    else if (isNewAccount && regStage === 3)
    {
        return  (
        <div className="login-page">
            <form className="Login">
                <div className="login-header">
                    <h2 className="login-title"> Регистрация </h2>
                    <h2 className="reg-stage-counter">{regStage}/3</h2>
                </div>

                <p>
                Вставьте сюда копию паспорта, документа об образовании, СНИЛС, ваше фото в формате 3X4 и, если есть,
                приписное свидетельство
                </p>

                <div className="login-footer">
                    <button className="back-button"
                            onClick={() => {
                                setRegStage(regStage - 1)
                                console.log(regStage)
                            }}
                    >
                        <BackIconBlack/>
                    </button>
                    <button className="next-button outlined-button" onClick={() => {
                        setRegStage(regStage + 1)
                        console.log(regStage)
                    }}>
                        Далее
                    </button>
                </div>
            </form>
        </div>
        )
    } else {
        return (
            <div className="login-page">
                <form className="Login">
                    <h2>Логин</h2>
                    <input
                        type="text"
                        name="login"
                        placeholder="логин"
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="пароль"
                    />
                    <Link to="/profile">
                        <button className="login-button outlined-button">
                            Войти
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
};

export default Login;