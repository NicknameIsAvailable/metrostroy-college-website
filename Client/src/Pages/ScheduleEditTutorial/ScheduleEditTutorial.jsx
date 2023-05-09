import React from 'react';
import "./ScheduleEditTutorial.css";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../Redux/Slices/auth";
import {Navigate} from "react-router-dom";

const ScheduleEditTutorial = () => {

    const isAuth = useSelector(selectIsAuth);
    const user = useSelector(state => state.auth);
    const isAdmin = Boolean(isAuth && user.data.data.AccessUser === "0")

    if (!isAdmin) return <Navigate to="/something-wrong"/>
    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className="container">
            <div className="admin-menu__tutorial">
                <h1>Инструкция к редактору расписания</h1>
                <hr/>

                <div className="paragraph">
                    <h2
                        id="new-csv-file"
                    >
                        Замена расписания с помощью CSV файла
                    </h2>
                    <p>
                        Чтобы обновить расписание таким образом, нужно нажать кнопку "загрузить файл Excel". Далее в
                        в открывшееся окно нужно перетащить нужный CSV файл. Далее можно сохранить расписание, либо сделать
                        <a href="#fast-changes"><span className="anchor-link"> быстрые изменения </span></a> перед этим.
                    </p>
                </div>

                <div className="paragraph">
                    <h2
                        id="fast-changes"
                    >
                        Быстрые изменения
                    </h2>
                    <p>
                        Иногда в расписании может быть какая-нибудь ошибка, либо может потребоваться срочно выложить
                        замену в расписании. Для этого есть функция быстрых изменений. Есть несколько способов быстро
                        изменить расписание:
                    </p>
                        <ol>
                            <li>Просто написать нужную информацию в ячейку</li>
                            <li>
                                Сначала заполнить форму "урок" в админ-меню. Нажать на кнопку "добавить в расписание".
                                Кликнуть на нужную ячейку и информация в ней замениться (можно кликнуть на несколько
                                ячеек)
                            </li>
                        </ol>
                </div>
            </div>
        </div>
    );
};

export default ScheduleEditTutorial;