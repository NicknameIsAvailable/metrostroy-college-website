import React from 'react';
import "./Search.css";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import Checkbox from "../../../../Components/Checkbox/Checkbox";
import DropDownList from "../../../../Components/DropDownList/DropDownList";

const Search = () => {
    return (
        <div className="Search">
            <div className="search-block">
                <input placeholder="поиск"/>
                <div className="search-button">
                    <SearchIcon/>
                </div>
            </div>


            <div className="buttons">
                <DropDownList
                    title="площадка"
                    variants={[
                        "УЛ.Демьяна Бедного Д. 21",
                        "Придорожная аллея Д. 7",
                        "Ириновский проспект Д. 29",
                        "УЛ.Учительская Д. 3"
                    ]}
                />
            <Checkbox content="по группе"/>
            <Checkbox content="по преподавателю"/>
            <Checkbox content="по аудитории"/>
            <Checkbox content="замены"/>
            </div>
        </div>
    );
};

export default Search;