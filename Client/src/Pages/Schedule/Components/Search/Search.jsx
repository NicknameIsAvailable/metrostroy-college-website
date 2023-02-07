import React, {useState} from 'react';
import "./Search.css";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import Checkbox from "../../../../Components/Checkbox/Checkbox";
import DropDownList from "../../../../Components/DropDownList/DropDownList";
import axios from "../../../../axios";

const Search = () => {
    const [inputs, setInputs] = useState();
    const [data, setData] = useState()

    const govno = 5;
    const handleChange = async (e) => {
        axios("/olga.php", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
            },
            {
                body: JSON.stringify({
                    search: govno
                })
            })
    }

    return (
        <form action="search">
        <div className="Search">
            <div className="search-block">
                <input placeholder="поиск"/>
                <div className="search-button" onClick={handleChange}>
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
                <Checkbox content="по группе" path="group"/>
                <Checkbox content="по преподавателю" path="teacher"/>
                <Checkbox content="по аудитории" path="auditory"/>
            </div>
        </div>
        </form>
    );
};

export default Search;