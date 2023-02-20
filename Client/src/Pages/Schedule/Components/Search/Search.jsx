import React, {useState} from 'react';
import "./Search.css";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import DropDownList from "../../../../Components/DropDownList/DropDownList";
import axios from "../../../../axios";

const Search = (props) => {
    const [inputs, setInputs] = useState("");
    const [radioInputs, setRadioInputs] = useState("Group");

    const [schedule, setSchedule] = useState([])

    const handleClick = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            valueSearch: inputs,
            valueRadioButton: radioInputs,
        };
        await axios.post('/schedule.php',
            requestOptions
        )
            .then(response => {
                setSchedule(response.data);
            })
            .catch(error => console.log(error));
    }

    const changeRadioInputs = (event) => {
        setRadioInputs(event.target.value);
        props.update = radioInputs;
    }

    return (
        <div className="Search">
            <div className="search-block">
                <input placeholder="поиск" className="search" type="text" onChange={(e) => setInputs(e.target.value)}/>
                <button className="search-button" onClick={handleClick}>
                    <SearchIcon/>
                </button>
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

                <label className="radio-button">
                    <input
                        type="radio"
                        name="radio"
                        value="Group"
                        onChange={changeRadioInputs}
                    />
                    По группе
                </label>

                <label className="radio-button">
                    <input
                        type="radio"
                        name="radio"
                        value="Teacher"
                        onChange={changeRadioInputs}
                    />
                    По преподавателю
                </label>
            </div>
        </div>
    );
};

export default Search;