import React, {useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";

const Login = () => {

    const [isNewAccount, setIsNewAccount] = useState(false);
    const [regStage, setRegStage] = useState(1);

    return (
        <div className="login-page">
            {
                if (isNewAccount)
            {
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
            }
                else if (isNewAccount && regStage === 1)
            {
                <div className="Login">
                <h2>Регистрация 1/3</h2>
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
                <button onClick={() => setRegStage(2)}>
                Далее
                </button>
                </div>
            }
                else if (isNewAccount && regStage === 2)
            {
                <div className="Login">
                <h2>Регистрация 1/3</h2>
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
                <button onClick={() => setRegStage(2)}>
                Далее
                </button>
                </div>
            }
                else if (isNewAccount && regStage === 3)
            {
                            <div className="Login">
                                <h2>Регистрация 1/3</h2>
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
                                <button onClick={() => setRegStage(2)}>
                                    Далее
                                </button>
                            </div>
            }
            }
        </div>
    );
};

export default Login;