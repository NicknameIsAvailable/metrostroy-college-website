import React from 'react';
import "./Login.css";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="Login">
            <h2>Логин</h2>
            <input
                type="login"
                name="login"
                placeholder="почта"
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
    );
};

export default Login;