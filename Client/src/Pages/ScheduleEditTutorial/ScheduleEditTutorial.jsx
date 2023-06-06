import React from 'react';
import "./ScheduleEditTutorial.css";
import {Navigate} from "react-router-dom";

const ScheduleEditTutorial = () => {
    const userData = JSON.parse(window.localStorage.getItem('userData'))
    const isAdmin = Boolean(userData.access === "0")
    if (!isAdmin) return <Navigate to="/something-wrong"/>


    return (
        <div className="admin-menu__tutorial">
            <div className="container">
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
                        в открывшееся окно нужно перетащить нужный CSV файл. Далее можно сохранить расписание, либо
                        сделать
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
                        замену в расписании. В таких случаях можно сделать следующее:
                    </p>
                    <ul>
                        <li>
                            В редакторе расписания в разделе урок, выбрать нужные параметры новой ячейки, используя уже
                            существующие данные в расписании. Нажать на кнопку "добавить в расписание" Кликнуть на все
                            ячейки, которые надо заменить
                        </li>
                        <li>
                            Создать полностью новый урок. Для этого нужно нажать на переключатель "новый урок" и
                            заполнить форму урока нужными данными. Далее нажать на кнопку "добавить в расписание".
                            Теперь
                            заменяем содержимое нужных ячеек нажимая на них.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ScheduleEditTutorial;