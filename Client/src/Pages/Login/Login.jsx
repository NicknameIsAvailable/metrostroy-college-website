import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className="login-page">
            <form className="Login" onSubmit={e => {
                e.preventDefault();
            }
            }>
                <div className="login-header">
                    <h2 className="login-title">Авторизация</h2>
                </div>
                <input
                    type="text"
                    name="text"
                    className="no-outline"
                    placeholder="почта"
                />
                <input
                    type="text"
                    name="phone-number"
                    className="no-outline"
                    placeholder="номер телефона"
                />

                <button onClick="submit" className="modal-button login-button">
                    <h3>
                        Войти
                    </h3>
                </button>
            </form>
        </div>
    )

};

export default Login;