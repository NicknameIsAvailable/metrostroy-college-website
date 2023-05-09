import React, { useState } from 'react';
import './Login.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, saveUserData, selectIsAuth} from "../../Redux/Slices/auth";

const Login = () => {
    const [userData, setUserData] = useState();
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const [error, setError] = useState("");

    const auth = async (values) => {
        console.log("passwrod ", password);
        console.log("login ", login)

        const {data} = dispatch(fetchAuth(values));

        console.log(data)

        if (data.response === false) {
            console.log(data);
            setError("Неверный логин или пароль");
        } else if (data.access === false && data.time_out) {
            setError(`Вы заблокированы. Подождите ${data.time_out} минуты`);
        } else {
            console.log(data);
            setError("");
            setUserData(data.data);
            saveUserData(data.data);
        }
    };

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-page">
            <form className="Login" onSubmit={async (e) => {
                e.preventDefault();
                await auth({login, password});
            }}>
                <div className="login-header">
                    <h2 className="login-title">Авторизация</h2>
                </div>
                <input
                    type="text"
                    name="login"
                    className="no-outline underlined-input"
                    placeholder="почта"
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    className="no-outline underlined-input"
                    placeholder="пароль"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="submit"
                    className="outlined-button login-button"
                    value="Войти"
                />

                <p className="error-text">{error}</p>
            </form>
        </div>
    );
};

export default Login;