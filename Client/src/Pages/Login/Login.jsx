import React, {useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";
import {ReactComponent as BackIconBlack} from "../../Icons/backIconBlack.svg";

const Login = () => {

    const [isNewAccount, setIsNewAccount] = useState(true);
    const [regStage, setRegStage] = useState(1);

    if (isNewAccount && regStage === 1)
    {
        return (
        <div className="login-page">
            <div className="Login">
                <div className="login-header">
                    <h2 className="login-title"> Регистрация </h2>
                    <h2 className="reg-stage-counter">1/3</h2>
                </div>
                <input
                    type="login"
                    name="login"
                    placeholder="почта"
                />
                <input
                    type="phone-number"
                    name="phone-number"
                    placeholder="номер телефона"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="пароль"
                />
                <div className="login-footer">
                    <button onClick={() => setRegStage(1)}>
                        <BackIconBlack/>
                    </button>
                    <button onClick={() => setRegStage(3)}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
        )
         }
    else if (isNewAccount && regStage === 2)
    {
        return  (
        <div className="login-page">
            <div className="Login">
                <div className="login-header">
                    <h2 className="login-title"> Регистрация </h2>
                    <h2 className="reg-stage-counter">2/3</h2>
                </div>
                <div className="inputs-block">
                <input
                    type="secondname"
                    name="secondname"
                    placeholder="Фамилия"
                />

                <input
                    type="name"
                    name="name"
                    placeholder="Имя"
                />

                <input
                    type="surname"
                    name="surname"
                    placeholder="Отчество"
                />
                </div>
                <div className="login-footer">
                    <BackIconBlack className="back-button" onClick={() => setRegStage(1)}/>
                    <button onClick={() => setRegStage(3)}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
        )
    }
    else if (isNewAccount && regStage === 3)
    {
        return  (
        <div className="login-page">
            <div className="Login">
                <div className="login-header">
                    <BackIconBlack className="back-button" onClick={() => setRegStage(2)}/>
                    <h2 className="login-title"> Регистрация </h2>
                    <h2 className="reg-stage-counter">3/3</h2>
                </div>
                <input
                    type="login"
                    name="login"
                    placeholder="почта"
                />
                <input
                    type="phone-number"
                    name="phone-number"
                    placeholder="номер телефона"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="пароль"
                />
                <div className="login-footer">
                    <BackIconBlack className="back-button" onClick={() => setRegStage(2)}/>
                    <button onClick={() => setRegStage(3)}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="login-page">
                <div className="Login">
                    <h2>Логин</h2>
                    <input
                        type="login"
                        name="login"
                        placeholder="логин"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="пароль"
                    />
                    <Link to="/profile">
                        <button>
                            Войти
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Login;