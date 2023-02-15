import React, {useState} from 'react';
import "./Search.css";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import DropDownList from "../../../../Components/DropDownList/DropDownList";
import RadioButton from "../../../../Components/RadioButton/RadioButton";

const Search = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [inputs, setInputs] = useState("");

    const handleClick = async () => {

    }


    return (
        <div className="Search">
            <div className="search-block">
                <input placeholder="поиск" type="text" onChange={(e) => setInputs(e.target.value)}/>
                <div className="search-button" onClick={handleClick}>
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

                    <RadioButton value="по группе"/>
                    <RadioButton value="по преподавателю"/>
                    <RadioButton value="по аудитории"/>
            </div>
        </div>
    );
};

export default Search;