import React from 'react';
import "./AdminMenu.css";
import Checkbox from "../../../../Components/Checkbox/Checkbox";
import DisciplineTab from "../DisciplineTab/DisciplineTab";
import Search from "../Search/Search";

const AdminMenu = () => {
    const disciplines = [
        {
            lesson: "Математика",
            teacher: "И.И.Бебрик"
        }
    ]

    return (
        <div className="AdminMenu">


            <h3>Интерфейс</h3>
            <Checkbox content="Выделить разными цветами разные дисциплины"/>
            <Checkbox content="Клик для замены дисциплины"/>

            <h3>Дисциплины</h3>
            <div className="disciplines-list">
                <input type="search" placeholder="поиск"/>
                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                    />

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                />

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                />

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                />

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                />

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                />



            </div>

            <button>
                Сохранить
            </button>
        </div>
    );
};

export default AdminMenu;