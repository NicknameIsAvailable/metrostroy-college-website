import React, {useState} from 'react';
import "./Header.css";
import {ReactComponent as Logo} from "../../Icons/Logo.svg";
import {ReactComponent as Person} from "../../Icons/Person.svg";
import {ReactComponent as Search} from "../../Icons/Search.svg";
import {ReactComponent as Burger} from "../../Icons/Burger.svg";
import {Link} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
        <header>
            <Link to="/" className="Link">
                <Logo/>
            </Link>

            <div className="links">
                <h3>
                    <Link to="/info" className="Link">
                        о колледже
                    </Link>
                </h3>
                <h3>
                    <Link to="/for-applicants" className="Link">
                        абитуриентам
                    </Link>
                </h3>
                <h3>
                    <Link to="/schedule" className="Link">
                        расписание
                    </Link>
                </h3>
                <Person/>
                <Search/>
                <Burger onClick={() => setOpen(!open)}/>
            </div>
        </header>
            <BurgerMenu open={open} setOpen={setOpen}/>
        </>
    );
};

export default Header;