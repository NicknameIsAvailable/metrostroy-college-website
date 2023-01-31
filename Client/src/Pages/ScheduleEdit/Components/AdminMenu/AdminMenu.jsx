import React from 'react';
import "./AdminMenu.css";
import Checkbox from "../../../../Components/Checkbox/Checkbox";
import DisciplineTab from "../DisciplineTab/DisciplineTab";

const AdminMenu = () => {
    return (
        <div className="AdminMenu">

            <Checkbox content="Выделить разными цветами разные дисциплины"/>
            <Checkbox content="Клик для замены дисциплины"/>

            <h3>Дисциплины</h3>
            <div className="disciplines-list">
                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                    auditory={23}/>

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                    auditory={23}/>

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                    auditory={23}/>

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                    auditory={23}/>

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                    auditory={23}/>

                <DisciplineTab
                    lesson="Математика"
                    teacher="И.И.Бебрик"
                    auditory={23}/>

            </div>
        </div>
    );
};

export default AdminMenu;