import React, {useState} from 'react';
import './Login.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAuth, selectIsAuth} from '../../Redux/Slices/auth';
import {Navigate} from 'react-router-dom';
import {ReactComponent as Eye} from "../../Icons/eye.svg";
import {ReactComponent as XEye} from "../../Icons/xEye.svg";

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const [passwordVisible, setPasswordVisible] = useState(false);
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
                } else if (response.error && response.error.message.includes('429')) {
                    setError('Слишком много попыток, подождите');
                } else if (response.error && response.error.message.includes('403')) {
                    setError('Неверный логин или пароль');
                } else {
                    setError("")
                }
            } catch (e) {
                setIsSubmitting(false);

                console.log(e)

                if (e && e.message.includes('423')) {
                    setError('Слишком много попыток, подождите');
                } else if (e && e.message.includes('429')) {
                    setError('Слишком много попыток, подождите');
                } else if (e && e.message.includes('403')) {
                    setError('Неверный логин или пароль');
                } else {
                    setError("Неверный логин или пароль")
                }
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!login.includes("@")) {
            setError("Введите почту")
            console.log(login)
        } else if (password === "") {
            console.log(password)
            setError("Введите пароль")
        }
        setIsSubmitting(true);
        await auth({login, password});
    };

    if (isAuth) {
        return <Navigate to="/"/>;
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

                <label id="password">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        className="no-outline underlined-input"
                        placeholder="пароль"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    {passwordVisible ? <XEye onClick={() => setPasswordVisible(!passwordVisible)}/> : <Eye onClick={() => setPasswordVisible(!passwordVisible)}/>}
                </label>

                <input
                    type="submit"
                    className="outlined-button login-button"
                    value={isSubmitting ? 'Загрузка...' : 'Войти'}
                    disabled={isSubmitting || (!login && !(password.length >= 8))}
                />
            </form>

            <p className="error-text">{error}</p>
        </div>
    );
};

export default Login;
