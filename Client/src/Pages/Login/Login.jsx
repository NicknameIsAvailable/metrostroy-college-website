import React, { useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAuth, selectIsAuth} from '../../Redux/Slices/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const auth = async (values) => {
        if (login && password) {
            try {
                const response = await dispatch(fetchAuth(values));
                setData(response);
                localStorage.setItem('userData', JSON.stringify(response.payload.data))
                setIsSubmitting(false);

                if (response.error && response.error.message.includes('423')) {
                    setError('Слишком много попыток, подождите');
                }

                if (response.error && response.error.message.includes('429')) {
                    setError('Слишком много попыток, подождите');
                }

                if (!response || (response.error && response.error.message.includes('403'))) {
                    setError('Неверный логин или пароль');
                }

                console.log(response)
            } catch (e) {
                setIsSubmitting(false);
            }
        }

        setError('Неверный логин или пароль');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await auth({ login, password });
    };

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login-page">
            <form className="Login" onSubmit={handleSubmit}>
                <div className="login-header">
                    <h2 className="login-title">Авторизация</h2>
                </div>
                <input
                    type="email"
                    name="login"
                    className="no-outline underlined-input"
                    placeholder="почта"
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="no-outline underlined-input"
                    placeholder="пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <input
                    type="submit"
                    onClick={() => setError(!data ? 'Неверный логин или пароль' : "")}
                    className="outlined-button login-button"
                    value={isSubmitting ? 'Загрузка...' : 'Войти'}
                    disabled={isSubmitting}
                />
            </form>

            <p className="error-text">{error}</p>
        </div>
    );
};

export default Login;
