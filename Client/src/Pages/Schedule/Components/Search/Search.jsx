import React from 'react';
import "./Search.css";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import Checkbox from "../../../../Components/Checkbox/Checkbox";

const Search = () => {
    return (
        <div className="Search">
            <input placeholder="поиск"/>
            <div className="search-button">
                <SearchIcon/>
            </div>

            <Checkbox content="по группе"/>
            <Checkbox content="по преподавателю"/>
            <Checkbox content="по аудитории"/>
            <Checkbox content="замены"/>
        </div>
    );
};

export default Search;