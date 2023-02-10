import React, {useState} from 'react';
import "./Search.css";
import {ReactComponent as SearchIcon} from "../../../../Icons/SearchIconWhite.svg";
import DropDownList from "../../../../Components/DropDownList/DropDownList";

const Search = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
        <div className="Search">
            <div className="search-block">
                <input placeholder="поиск" type="text"/>
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

                <div
                    className={checked1 ? "radio-button" : "radio-button .active"}
                    onClick={() => setChecked1(!checked1)}
                >
                    <input
                        type="radio"
                        name="site_name"
                        value="по группе"
                        checked={checked1}
                        // onChange={this.onSiteChanged}
                    />
                    <p>по группе</p>
                </div>

                <div
                    className={checked2 ? "radio-button" : "radio-button .active"}
                    onClick={() => setChecked2(!checked2)}
                >
                    <input
                        type="radio"
                        name="site_name"
                        value="по группе"
                        checked={checked2}
                        // onChange={this.onSiteChanged}
                    />
                    <p>по преподавателю</p>
                </div>

                <div
                    className={checked2 ? "radio-button" : "radio-button .active"}
                    onClick={() => setChecked3(!checked3)}
                >
                    <input
                        type="radio"
                        name="site_name"
                        value="по группе"
                        checked={checked3}
                        // onChange={this.onSiteChanged}
                    />
                    <p>по аудитории</p>
                </div>
            </div>
        </div>
    );
};

export default Search;