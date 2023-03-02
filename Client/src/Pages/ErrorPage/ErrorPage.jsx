import React from 'react';
import {useNavigate} from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="ErrorPage">
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <button onClick={() => navigate(-1)}>
                Вернуться обратно
            </button>
        </div>
    );
};

export default ErrorPage;