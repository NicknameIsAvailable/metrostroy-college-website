import React from 'react';
import styles from "./Header.css";
import {ReactComponent as Logo} from "../../Icons/Logo.svg";
import {ReactComponent as Person} from "../../Icons/Person.svg";
import {ReactComponent as Search} from "../../Icons/Search.svg";
import {ReactComponent as Burger} from "../../Icons/Burger.svg";

const Header = () => {
    return (
        <header>
            <Logo/>

            <div className={styles.links}>
                <h3>о колледже</h3>
                <h3>абитуриентам</h3>
                <h3>обучающимся</h3>
                <Person/>
                <Search/>
                <Burger/>
            </div>
        </header>
    );
};

export default Header;