import React, {useState, useEffect} from 'react';
import "./Header.css";
import {ReactComponent as Logo} from "../../Icons/Logo.svg";
import {ReactComponent as PersonIcon} from "../../Icons/Person.svg";
import {ReactComponent as BurgerIcon} from "../../Icons/Burger.svg";
import LeftBuilding from "../../Images/LeftBuilding.png";
import RightBuilding from "../../Images/RightBuilding.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {Link} from "react-router-dom";

const Header = () => {

    const [open, setOpen] = useState(false);
    const [headerHidden, setHeaderHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.pageYOffset;
            setHeaderHidden(prevScrollPos => prevScrollPos > scrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={headerHidden ? "header-hidden" : ""}>
            <BurgerMenu open={open} setOpen={setOpen}/>
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
                    <div className="header-buttons">
                        <Link to="/">
                            <button>
                                <PersonIcon className="icon"/>
                            </button>
                        </Link>
                        <button className="burger-btn" onClick={() => setOpen(true)}>
                            <BurgerIcon className="icon"/>
                        </button>
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
                    <a href="https://colm.spb.ru/applicants">абитуриентам</a>
                    <Link to="/schedule">расписание</Link>
                    <a href="https://colm.spb.ru/students">обучающимся</a>
                    <a href="https://colm.spb.ru/news">наши новости</a>
                </div>
            </div>
        </header>
    );
};

export default Header;