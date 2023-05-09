import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {

    return (
        <div className="ErrorPage">
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <Link to="/" style={{color: "#3D99A8"}}>
                Вернуться на домашнюю страницу
            </Link>
        </div>
    );
};

export default ErrorPage;