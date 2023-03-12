import React, {useState} from 'react';
import "./Header.css";
import {ReactComponent as Logo} from "../../Icons/Logo.svg";
import {ReactComponent as Person} from "../../Icons/Person.svg";
import LeftBuilding from "../../Images/LeftBuilding.png";
import RightBuilding from "../../Images/RightBuilding.png";
import {ReactComponent as Burger} from "../../Icons/Burger.svg";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className="main">
                <img
                    src={LeftBuilding}
                    alt="Левый чертеж"
                    className="leftBuilding"
                />
                <div className="main__section">
                    <a href="https://www.colm.spb.ru/">
                        <Logo className="Logo"/>
                    </a>
                    <div className="buttons">

                        <Person/>
                        <Burger className="burger__btn"/>
                    </div>
                </div>
                <img
                    src={RightBuilding}
                    alt="Правый чертеж"
                    className="rightBuilding"
                />
            </div>

            <div className="links">
                <div className="links__section">
                    <a className="hideable1000" href="https://colm.spb.ru/information-about-">сведения об образовательной организации</a>
                    <a href="https://colm.spb.ru/applicants">абитуриентам</a>
                    <a href="https://colm.spb.ru/students">обучающимся</a>
                    <a className="hideable1600" href="https://colm.spb.ru/methodical-work">методическая работа</a>
                    <a className="hideable720" href="https://colm.spb.ru/driving-school">автошкола</a>
                    <a className="hideable1600" href="https://colm.spb.ru/educational-work">воспитательная работа</a>
                    <a className="hideable1600" href="https://colm.spb.ru/workshops">мастерские / федеральный грант</a>
                    <a className="hideable1600" href="https://colm.spb.ru/news">наши новости</a>
                </div>
            </div>
        </header>
    );
};

export default Header;